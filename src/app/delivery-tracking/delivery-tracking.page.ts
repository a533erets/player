import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../service/http.service';

@Component({
  selector: 'app-delivery-tracking',
  templateUrl: './delivery-tracking.page.html',
  styleUrls: ['./delivery-tracking.page.scss'],
})
export class DeliveryTrackingPage implements OnInit {

  payLoad: any
  pushState: any = false
  steps: any
  counting: boolean = false
  startTime: any
  finishTime: any
  timePass: any
  counter: any
  stepsMessage: any = {title: '', count: '', imgSrc: ''}
  starCount: any

  constructor(private router: Router, public http: HttpService) { }

  ngOnInit() {}

  ionViewWillEnter(){
    if(this.counting === false && this.http.payLoad.length > 0){
      if(this.http.payLoad){
        console.log(this.http.payLoad)
        this.payLoad = this.http.payLoad
        this.pushState = this.payLoad.pushed
        this.startTime = this.payLoad.start
        this.finishTime = new Date(this.startTime + (0.5 * 60000)).getTime()
        this.finishTime = Math.floor(this.finishTime /1000)
      }
    }

    if(this.counting === true){
      return
    }else if(this.pushState === true){
      this.setStep()
    }
  }

  setStep(){
    if(this.steps === undefined){
      this.steps = 'cooking'
      this.counting = true
      return this.checkStep('cooking')
    }

    if(this.timePass === 0 && this.steps === 'cooking'){
      this.startTime = new Date().getTime()
      this.finishTime = new Date(this.startTime + (0.5 * 60000)).getTime()
      this.finishTime = Math.floor(this.finishTime /1000)
      this.steps = 'delivering'
      return this.checkStep('delivering')
    }

    if(this.timePass === 0 && this.steps === 'delivering'){
      this.steps = 'finish'
      this.http.currentStep = 'finish'
      return this.checkStep('finish')
    }
  }

  checkStep(step: string){
    if(step === 'cooking'){
      this.stepsMessage.title = '烹調中...'
      this.stepsMessage.count = '預計完成時間: '
      this.stepsMessage.imgSrc = '../../assets/icon/Pot.svg'
      return this.timer()
    }

    if(step === 'delivering'){
      this.stepsMessage.title = '出貨中...'
      this.stepsMessage.count = '預計抵達時間: '
      this.stepsMessage.imgSrc = '../../assets/icon/delivery.svg'
      return this.timer()
    }

    if(step === 'finish'){
      this.stepsMessage.title = '餐點已送達'
      this.stepsMessage.count = '抵達時間: '
      this.stepsMessage.imgSrc = '../../assets/icon/finish.svg'
      this.timePass = new Date()
      this.timePass = this.timePass.toDateString()
    }
  }

  resetSteps(){
    if(this.steps === 'finish' && this.pushState === true){
      this.steps = undefined
      this.http.currentStep = undefined
      this.counting = false
      this.pushState = false
      this.http.payLoad.splice(0)
    }
  }

  timer(){
    this.counter =  setInterval(()=>{
      let now = new Date().getTime()
      now = Math.floor(now / 1000)
      this.timePass = this.finishTime - now
      if(this.timePass < 0){
        clearInterval(this.counter)
        this.resetSteps()
        return console.log('timer borken')
      }else{
        let hours = Math.floor(this.timePass / 60 / 60)
        let minutes = Math.floor(this.timePass / 60) - (hours * 60)
        let seconds = this.timePass % 60
  
        if(this.timePass === 0){
          clearInterval(this.counter)
          this.setStep()
        }
  
        if(hours === 0 && minutes === 0 && seconds === 0){
          return
        }else if(hours === 0 && minutes === 0){
          this.timePass = `${seconds} 秒`
        }else if(hours === 0){
          this.timePass = `${minutes} 分 ${seconds} 秒`
        }else if(hours > 0){
          this.timePass = `${hours} 小時  ${minutes} 分 ${seconds} 秒`
        }
      }
    }, 1000)
  }

  paymentCheck(){
    this.resetSteps()
    let formData = new FormData()
    this.prepareData(formData).then((resolve)=>{
      console.log(resolve)
    }).then(()=>{
      formData.forEach((value,key)=>{
        console.log(key+""+value)
      })
    }).then(()=>{
      let Url = 'http://localhost/foodPlayer/src/app/php/updateCart.php'
      this.http.pushData(Url, 'updateCart', formData)
      this.starCount = 0
    }).catch((reject)=>{
      console.log(reject)
    })
  }
  
  prepareData(formData){
    return new Promise((resolve,reject)=>{
      if(this.http.cartID){
        resolve('update')
        formData.append('cartID', this.http.cartID)
        formData.append('paid', 'true')
        formData.append('stars', this.starCount)
      }else{
        reject('error')
      }
    })
  }

  toOrder(){
    this.router.navigate(['player-tabs/order'])
  }

  starFill(numberOfstar: number){
    this.starCount = numberOfstar
  }

  toLogin(){
    if(this.http.checkLogIn() === true){
      this.router.navigate(['player-tabs/member'])
    }else{
      this.router.navigate(['player-tabs/login'])
    }
  }
}

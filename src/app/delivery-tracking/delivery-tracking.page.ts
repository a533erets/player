import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delivery-tracking',
  templateUrl: './delivery-tracking.page.html',
  styleUrls: ['./delivery-tracking.page.scss'],
})
export class DeliveryTrackingPage implements OnInit {

  pushState: any = false
  steps: any
  startTime: any
  finishTime: any
  timePass: any
  counter: any
  stepsMessage: any = {title: '烹調中...', count: '預計完成時間: ', imgSrc: '../../assets/icon/Pot.svg'}

  constructor(private router: Router) { 
    if(router.getCurrentNavigation().extras.state){
      const pushed = router.getCurrentNavigation().extras.state
      console.log(pushed)
      this.pushState = pushed.pushstate
      this.startTime = pushed.start
      this.finishTime = new Date(this.startTime + (0.2 * 60000)).getTime()
      this.finishTime = Math.floor(this.finishTime /1000)
      console.log(this.finishTime)
    }
  }

  ngOnInit() {
    if(this.pushState === true){
      this.setStep()
    }
  }

  setStep(){
    if(this.steps === undefined || this.steps === 'finish'){
      this.timer()
      return this.steps = 'cooking'
    }

    if(this.steps === 'cooking'){
      this.startTime = new Date().getTime()
      this.finishTime = new Date(this.startTime + (0.2 * 60000)).getTime()
      this.finishTime = Math.floor(this.finishTime /1000)
      this.checkStep('delivering')
      this.timer()
      return this.steps = 'delivering'
    }

    if(this.steps === 'delivering'){
      this.checkStep('finish')
      return this.steps = 'finish'
    }
  }

  checkStep(step){
    if(step === 'delivering'){
      this.stepsMessage.title = '出貨中...'
      this.stepsMessage.count = '預計抵達時間: '
      this.stepsMessage.imgSrc = '../../assets/icon/delivery.svg'
    }

    if(step === 'finish'){
      this.stepsMessage.title = '餐點已送達'
      this.stepsMessage.count = '抵達時間: '
      this.stepsMessage.imgSrc = '../../assets/icon/finish.svg'
      this.timePass = new Date().getTime().toLocaleString('zh-TW')
    }
  }

  timer(){
    this.counter =
    setInterval(()=>{
      let now = new Date().getTime()
      now = Math.floor(now / 1000)
      this.timePass = this.finishTime - now
      let hours = Math.floor(this.timePass / 60 / 60)
      let minutes = Math.floor(this.timePass / 60) - (hours * 60)
      let seconds = this.timePass % 60

      if(this.timePass === 0){
        clearInterval(this.counter)
        this.setStep()
      }

      if(hours === 0 && minutes ===0){
        this.timePass = `${seconds} 秒`
      }else if(hours === 0){
        this.timePass = `${minutes} 分 ${seconds} 秒`
      }
      else{
        this.timePass = `${hours} 小時  ${minutes} 分 ${seconds} 秒`
      }
    }, 1000)
  }

  toOrder(){
    this.router.navigate(['player-tabs/order'])
  }
}

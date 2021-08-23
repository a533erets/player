import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-record',
  templateUrl: './record.page.html',
  styleUrls: ['./record.page.scss'],
})
export class RecordPage implements OnInit {

  constructor(private router:Router, public http: HttpService) { }

  datePickerOpen: boolean = false
  dateArr: any[] = []

  ngOnInit() {
  }

  ionViewWillEnter(){
    // if(this.http.logInState.logIn === false){
    //   this.router.navigate(['player-tabs/main'])
    // }
    this.getCart()
  }

  getCart(){
    let formData = new FormData()
    this.prepareData(formData).then((resolve)=>{
      console.log(resolve)
    }).then(()=>{
      this.http.pushData('http://localhost/foodPlayer/src/app/php/getCartData.php', 'cartRecord', formData)
    }).catch((reject)=>{
      console.log(reject)
    })
  }

  prepareData(formData){
    return new Promise((resolve, reject)=>{
      if(formData !== undefined){
        resolve('procced')
        formData.append('member_ID', this.http.logInState.ID)
        formData.append('member_name', this.http.logInState.name)  
      }else{
        reject('error')
      }
    })
  }

  back(){
    this.router.navigate(['player-tabs/member'])
  }

  toOrder(){
    this.router.navigate(['player-tabs/order'])
  }

  close(){
    this.datePickerOpen = false
    this.dateArr.splice(0)
  }
  
  changeDate(){
    this.sortDate()
    this.datePickerOpen = true
  }

  sortDate(){
    for(let i=0; i < this.http.cartRecords.length; i++){
      if(this.http.cartRecords[i].date[0] === this.http.currentYear && this.http.cartRecords[i].date[1] === this.http.currentMonth)
      this.dateArr.push(this.http.cartRecords[i].date)
    }
    console.log(this.dateArr)
  }

  changeMonth(mode){
    if(mode === 'pre'){
      if(this.http.currentMonth === 1){
        this.http.currentMonth = 12
        this.http.currentYear--
      }else{
        this.http.currentMonth--
      }      
    }

    if(mode === 'next'){
      if(this.http.currentMonth === 12){
        this.http.currentMonth = 1
        this.http.currentYear++
      }else{
        this.http.currentMonth++
      }      
    }
    console.log(this.http.currentMonth)
    this.dateArr.splice(0)
    this.sortDate()
  }

  pickTheDay(index, theDay){
    const datePicker = <HTMLElement>document.querySelector('.datePicker')
    datePicker.firstElementChild.innerHTML = `${theDay[0]} ${theDay[1]} 月 ${theDay[2]} 日`
    this.http.currentYear = theDay[0]
    this.http.currentMonth = theDay[1]
    this.http.currentDay = theDay[2]
    this.http.selectedRecord = this.http.cartRecords[ (this.http.cartRecords.length -1) - index ].product_list
    console.log(index)
    this.datePickerOpen = false
    this.dateArr.splice(0)
  }
}

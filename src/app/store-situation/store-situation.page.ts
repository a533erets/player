import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../service/http.service';

@Component({
  selector: 'app-store-situation',
  templateUrl: './store-situation.page.html',
  styleUrls: ['./store-situation.page.scss'],
})
export class StoreSituationPage implements OnInit {

  /* 營業時間: 上午 11:00 ~ 14:30   下午 17:00 ~20:30
    禮拜二休假*/
  toDay: any
  seats: any = []
  openStatus: any
  open: boolean = false
  remainSeats: any

  constructor(public http: HttpService, public router: Router) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    let seats = Array.from({length: 16}, (seats ,seat)=> seat)
    console.log(seats)

    for(let i=0; i < seats.length; i++){
      this.seats.push({seat: seats[i], occupied: this.randomSeat(), message: '空'})
    }
    console.log(this.seats)
    
    this.checkDate()
    this.checkSeat()
  }

  checkDate(){
    let day = new Date().getDay()
    let hour = new Date().getHours()
    let minute = new Date().getMinutes()

    if(day === 2){
      console.log('今日休息')
      this.openStatus = '今日休息'
      this.open = false
    }

    if( hour === 14 && minute < 30  || hour === 20 && minute < 30){
      console.log('營業中')
      this.openStatus = '營業中' 
      this.open = true    
    }
    else if(hour >= 11 && hour < 14  || hour > 17 && hour < 20){
      console.log('營業中')
      this.openStatus = '營業中'
      this.open = true
    }else{
      console.log('尚未營業')
      this.openStatus = '尚未營業'
      this.open = false
    }
  }

  checkSeat(){
    let remain = 0
    for(let i=0; i < this.seats.length; i++){
      if(this.seats[i].occupied === false){
        remain++
      }else{
        this.seats[i].message = '滿'
      }
    }
    this.remainSeats = remain
  }

  randomSeat(){
    let random = Math.random() < 0.5
    return random
  }

  toLogin(){
    if(this.http.checkLogIn() === true){
      this.router.navigate(['player-tabs/member'])
    }else{
      this.router.navigate(['player-tabs/login'])
    }
  }
}

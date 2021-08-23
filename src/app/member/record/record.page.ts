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
  
  changeDate(){
    this.sortDate()
    this.datePickerOpen = true
  }

  sortDate(){
    for(let i=0; i < this.http.cartRecords.length; i++){
      if(this.http.cartRecords[i].date[1] === this.http.currentMonth)
      this.dateArr.push(this.http.cartRecords[i].date)
    }
    console.log(this.dateArr)
  }
}

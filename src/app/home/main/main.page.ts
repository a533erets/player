import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  closeCall: boolean = false

  constructor(private router: Router, public http: HttpService) { }

  ngOnInit() {
  }

  order(){
    this.router.navigate(['/player-tabs/order']);
  }

  toLogin(){
      if(this.http.checkLogIn() === true){
        this.router.navigate(['player-tabs/member'])
      }else{
        this.router.navigate(['player-tabs/login'])
      }
  }

  close(){
    let content = <HTMLElement>document.querySelector('.main')
    this.closeCall = true
    content.classList.add('modalClose')
  }
}

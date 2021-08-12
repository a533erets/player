import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-barcode',
  templateUrl: './barcode.page.html',
  styleUrls: ['./barcode.page.scss'],
})
export class BarcodePage implements OnInit {

  constructor(private router:Router,private http: HttpClient) { }

  products: object[] = [];
  friends:any = [];
  title :string="aa";
  
  ngOnInit() {
  }
  runhttp(){
    this.http.get('https://demo4989550.mockable.io/')
    .subscribe(data =>{
      console.log(data); 
      this.friends = data;
    });
  }
  member(){
    this.router.navigate(['player-tabs/member'])
  }

}

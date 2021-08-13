import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient,HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-barcode',
  templateUrl: './barcode.page.html',
  styleUrls: ['./barcode.page.scss'],
})
export class BarcodePage implements OnInit {

  constructor(private router:Router,private http: HttpClient) { }

  barcodes: object[] = [];
  friends:any = [];
  title :string="aa";
  
  ngOnInit() {
  }
  // save_data(dataToSend){
  //   this.http.post('http://localhost/foodplayer/src/app/php/getbarcode.php')
  //   .subscribe(data =>{
  //     console.log(data);
  //   })
    // var url="";
    // return this.http.post(url,dataToSend,{
    //   headers:new HttpHeaders({"contecnt-Type":"application/json"})
    // });
  // }
  get_http(){
    this.http.get('http://localhost/foodplayer/src/app/php/getbarcode.php')
    .subscribe(data =>{
      console.log(data); 

      for(let i=0; i < Object.keys(data).length; i++){
        this.barcodes.push(data[i])
      }
    });
  }
  member(){
    this.router.navigate(['player-tabs/member'])
  }
  used(){
    this.router.navigate[('player-tabs/barcode-used')]
    console.log("aa");
  }

  expired(){
    this.router.navigate[('player-tabs/barcode-expired')]
    console.log("bb");
  }

  getRandom(min:number,max:number){
    Math.floor(Math.random()*(max-min+1))+min;
  }
  ran(){
  var arr = [];
  for(var i=1;i<=10;i++){
  arr.push(this.getRandom(1,10));
  }  
  console.log(arr);
}

}

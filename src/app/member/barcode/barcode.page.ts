import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { HttpService } from 'src/app/service/http.service';
@Component({
  selector: 'app-barcode',
  templateUrl: './barcode.page.html',
  styleUrls: ['./barcode.page.scss'],
})
export class BarcodePage implements OnInit {

  constructor(private router:Router,private httpService: HttpService,) { }

  
  friends:any = [];
  title :string="aa";
  barcodePush:boolean = false

  ngOnInit() {
    // console.log(this.httpService.barcodes)
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
  // get_http(){
  //   this.http.get('http://localhost/foodplayer/src/app/php/getbarcode.php')
  //   .subscribe(data =>{
  //     console.log(data); 

  //     for(let i=0; i < Object.keys(data).length; i++){
  //       this.barcodes.push(data[i])
  //     }
  //   });
  // }
  get_http(){
    let Url = 'http://localhost/foodplayer/src/app/php/getbarcode.php'
    let target = 'barcode'
    this.httpService.getData(Url, target)
    console.log(this.httpService.barcodes)
  }
  save_data(){
    // let formData = new FormData()
    var formData=[{
      "ID":"1234124",
      "image":"/assets/123.png",
      "use":"false"
    }]

    let Url = 'http://localhost/foodplayer/src/app/php/tobarcode.php'
    this.httpService.pushData(Url,formData)
    console.log(formData)
    // console.log(this.ID,this.image,this.use)

  }
  member(){
    this.router.navigate(['player-tabs/member'])
  }
  used(){
    this.router.navigate(['player-tabs/barcode-used'])
  }

  expired(){
    this.router.navigate(['player-tabs/barcode-expired'])
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

import { Component, OnInit } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import * as JsBarcode from 'jsbarcode';
import { $, element } from 'protractor';
import { HttpService } from 'src/app/service/http.service';
@Component({
  selector: 'app-barcode',
  templateUrl: './barcode.page.html',
  styleUrls: ['./barcode.page.scss'],
})
export class BarcodePage implements OnInit {
  constructor(private router: Router, private httpService: HttpService) { }
  id: number ;
  friend: any[] = []
  Delete:boolean = false;
  friends = [];
  ngOnInit() {
    // this.get_http();
    // console.log(this.httpService.barcodes)
  }

  ionViewWillEnter() {
    this.get_http()

  }
  // save_data(dataToSend){
  // this.http.post('http://localhost/foodplayer/src/app/php/getbarcode.php')
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
  get_http() {
    let Url = 'http://localhost/foodplayer/src/app/php/getbarcode.php'
    let target = 'barcode'
    this.httpService.getData(Url, target)
  }
  print_barCodes() {
    let main = document.querySelector('.php')
    // console.log(main)
    // const idList:any[] = this.httpService.barcodes 
    // console.log(idList)
    // if(idList.length > 0){
    // for(let i=0; i < idList.length; i++){
    // let barCode = document.createElementNS('','svg')
    // --------------------
    // let Url = 'http://localhost/foodplayer/src/app/php/getbarcode.php'
    // let target = 'barcode'
    // this.httpService.getData(Url, target)

    // this.friends=this.httpService.barcodes;
    // console.log(this.friends)
    var a =
      [
        {
          "name": "one",
          "id": 123,
          "use": false
        },
        {
          "name": "two",
          "id": 456,
          "use": false
        },
        {
          "name": "three",
          "id": 789,
          "use": false
        }
      ]
    
    var idList = this.httpService.barcodes
    var study = 0;
    for (let i = 0; i < idList.length; i++) {
      let barCode = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
      var aa = study.toString();
      //創建的svg尚未放入DOM
      this.generatePlaceHolder(barCode, aa).then((resolve) => {
        console.log(resolve)
      }).then(() => {
        main.append(barCode)
      }).then(() => {
        for (let j = 0; j < idList.length; j++) {
          JsBarcode('.barCode' + j, idList[j].ID.toString())
        }
      })
      // #aa !== var aa
      study++;
    }
    // ----------
    var Scanner 
    if(Scanner=idList[0])
    var barcode_used = idList[0].ID  //已使用
    console.log(barcode_used)
    this.friends = idList.splice(idList[0], 1) //刪除idList[0]
    console.log(this.friends)
    // var view = element.

    // ----------
  }
  testDelete(){
    
  }
  generatePlaceHolder(barCode, idString) {
    return new Promise((resolve, reject) => {
      if (barCode !== undefined) {
        resolve('Dynamically set attribute to elemente')
        barCode.className.baseVal = 'barCode' + idString //<svg class="">
      } else {
        reject('error')
      }
    })
  }
  save_data() {
    let formData = new FormData()
    formData.append('ID', this.id.toString())
    formData.append('image', '')
    formData.append('use', 'false')
    console.log(formData)
    let Url = 'http://localhost/foodplayer/src/app/php/tobarcode.php'
    // this.http.post('http://localhost/foodplayer/src/app/php/tobarcode.php')
    this.httpService.pushData(Url, 'newBarcode', formData)
    // console.log(this.ID,this.image,this.use)
  }
  barcodeGen() {
    var b = (Math.random());
    b = b * 1000000000
    b = Math.floor(b);
    if (b < 100000000) {
      return this.barcodeGen();
    }
    console.log(b);
    this.id = b;
    // var data = document.querySelector('.input').value; 
    // var data = (<HTMLInputElement>document.querySelector('.input')).value;
    // var data = (<HTMLTextAreaElement>document.getElementById(this.id)).value;
    JsBarcode('#barcode', this.id.toString(), {
      // background:'#fff',
      // color:'#000',
      // height:100,
      // displayValue:false
    });
    this.save_data()
  }
  member() {
    this.router.navigate(['player-tabs/member'])
  }
  used() {
    this.router.navigate(['player-tabs/barcode-used'])
  }

  expired() {
    this.router.navigate(['player-tabs/barcode-expired'])
  }

  getRandom(min: number, max: number) {
    Math.floor(Math.random() * (max - min + 1)) + min;
  }
  ran() {
    var arr = [];
    for (var i = 1; i <= 10; i++) {
      arr.push(this.getRandom(1, 10));
    }
    console.log(arr);
  }

}

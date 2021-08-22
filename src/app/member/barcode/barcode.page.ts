import { Component, OnInit } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import * as JsBarcode from 'jsbarcode';
import { $, element } from 'protractor';
import { HttpService } from 'src/app/service/http.service';
import { ModalController } from '@ionic/angular';
import { BarcodeUsedPageModule } from './barcode-used/barcode-used.module';
@Component({
  selector: 'app-barcode',
  templateUrl: './barcode.page.html',
  styleUrls: ['./barcode.page.scss'],
})
export class BarcodePage implements OnInit {
  constructor(private router: Router, private httpService: HttpService,private modalController: ModalController) { }
  id: number;
  friend: any[] = []
  Delete: boolean = false;
  friends = [];
  idList = [];

  ngOnInit() {
    // this.get_http();
    // this.print_barCodes()
  }

  ionViewWillEnter() {
    this.get_http()
    // this.print_barCodes()

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

    this.idList = this.httpService.barcodes
    var study = 0;
    let main = document.querySelector('.php')
    for (let i = 0; i < this.idList.length; i++) {
      let barCode = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
      var aa = study.toString();
      //創建的svg尚未放入DOM
      this.generatePlaceHolder(barCode, aa).then((resolve) => {
        console.log(resolve)
      }).then(() => {
        main.append(barCode)
      }).then(() => {
        for (let j = 0; j < this.idList.length; j++) {
          JsBarcode('.barCode' + j, this.idList[j].ID.toString())
        }
      })
      // #aa !== var aa
      study++;
    }
  }
  testDelete() {
    const checkboxes = document.querySelectorAll('input');
    let checked01 = document.querySelector('[name=check01]:checked')
    let checked02 = document.querySelector('[name=check02]:checked')
    if (checked01) {
      let main = document.querySelector('.php')
      // var barcode_used = this.idList[0].ID  //已使用
      // this.friends = this.idList.splice(0, 1) //刪除idList[0]
      main.removeChild(main.childNodes[0])
      // var barCode0 = document.querySelector('.barCode0');
      // main.removeChild(barCode0)
      // console.log(barCode0);
      console.log("有選取")
      checked01.removeAttribute('')
      console.log(checked01)
    } else {
      console.log("未選取")
    }
    // -----------------------------------
    if (checked02) {
      let main = document.querySelector('.php')
      // var barcode_used = this.idList[1].ID  //已使用
      // this.friends = this.idList.splice(1, 1) //刪除idList[1]
      main.removeChild(main.childNodes[1])
      // var barCode1 = document.querySelector('.barCode1');
      // main.removeChild(barCode1)
      console.log("有選取")
    }
    else {
      console.log("未選取")
    }
    
  }
  async used(){
    const modal = await this.modalController.create({
      component: BarcodeUsedPageModule,
      componentProps: {
        // 'barcodes': this.httpService.barcodes
      },
    })
    // modal.onDidDismiss().then((response: any) => {
    //   console.log(response)
      // if(response.data !== undefined){
      //  this.httpService.upDateCart(response.data.returnCart, response.data.callUpdate)
      // }
    // }
    // )

    await modal.present()
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
  // save_barcode_data() {
  //   let formData = new FormData()
  //   formData.append('ID', this.id.toString())
  //   formData.append('use', 'false')
  //   console.log(formData)
  //   let Url = 'http://localhost/foodplayer/src/app/php/tobarcode.php'
  //   this.httpService.pushData(Url, 'newBarcode', formData)
  // }
  // barcodeGen() {
  //   var b = (Math.random());
  //   b = b * 1000000000
  //   b = Math.floor(b);
  //   if (b < 100000000) {
  //     return this.barcodeGen();
  //   }
  //   console.log(b);
  //   this.id = b;
  //   // var data = document.querySelector('.input').value; 
  //   // var data = (<HTMLInputElement>document.querySelector('.input')).value;
  //   // var data = (<HTMLTextAreaElement>document.getElementById(this.id)).value;
  //   JsBarcode('#barcode', this.id.toString(), {
  //     // background:'#fff',
  //     // color:'#000',
  //     // height:100,
  //     // displayValue:false
  //   });
  //   this.save_barcode_data()
  // }
  member() {
    this.router.navigate(['player-tabs/member'])
  }
  // used() {
  //   this.router.navigate(['player-tabs/barcode-used'])
  // }

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

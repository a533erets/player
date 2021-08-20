import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as JsBarcode from 'jsbarcode';
import { HttpService } from 'src/app/service/http.service';
@Component({
  selector: 'app-barcode',
  templateUrl: './barcode.page.html',
  styleUrls: ['./barcode.page.scss'],
})
export class BarcodePage implements OnInit {

  constructor(private router: Router, private http: HttpService) { }
  id: number;
  friend:object[] = []
  friends = [];
  title: string = "aa";
  barcodePush: boolean = false;
  ngOnInit() {
  }

  ionViewWillEnter() {
    this.get_http()
   
  }

  get_http() {
    let Url = 'http://localhost/foodplayer/src/app/php/getbarcode.php'
    let target = 'barcode'
    this.http.getData(Url, target)
    // console.log(this.httpService.barcodes)
  }
  print_barCodes() {
    let main = document.querySelector('.main')

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
    // let list = document.getElementById("bb");
    // console.log(list);
    // list.innerHTML="";
    // if (this.httpService.barcodes !== []) {
      var idList = this.http.barcodes
    // }

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

    // delete idList[0]
    // this.friends=idList;
    // console.log(this.friends)
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
    this.http.pushData(Url, 'newBarcode', formData)
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

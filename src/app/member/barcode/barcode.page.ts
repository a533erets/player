import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/service/http.service';
import { ModalController } from '@ionic/angular';
import { UsedComponent } from '../components/used/used.component';

@Component({
  selector: 'app-barcode',
  templateUrl: './barcode.page.html',
  styleUrls: ['./barcode.page.scss'],
})
export class BarcodePage implements OnInit {
  constructor(private router: Router, private http: HttpService,private modalController: ModalController) { }
  id: number;
  friend: any[] = []
  Delete: boolean = false;
  friends = [];
  fromModal:any;
  barcode_used :any[]=[];
  checks :any
  
  ngOnInit() {
    
  }

  ionViewWillEnter() {
    this.get_http()
  }

  get_http() {
    let Url = 'http://localhost/foodplayer/src/app/php/getbarcode.php'
    let target = 'barcode'
    this.http.getData(Url, target)
  }
  button(){

  }
  Scanner() {
    
    var checkboxes = document.querySelectorAll('ion-checkbox'); 
    // if(checkboxes[0].checked ==true){
    //   let main = document.querySelector('.php')
    //   this.barcode_used.push(this.http.idList[0])
    //   this.http.idList.splice(0, 1) //刪除idList[0]
    //   main.removeChild(main.childNodes[0])
    // }
    for(var i=0;i<this.http.idList.length;i++){
      if(checkboxes[i].checked ==true){
      let main = document.querySelector('.php')
      this.barcode_used.push(this.http.idList[i])
      this.http.idList.splice(i, 1) //刪除idList[0]
      main.removeChild(main.childNodes[i])
    }
  }
}

    // let checked01 = <HTMLInputElement>document.querySelector(".check01")
    // let checked02 = <HTMLInputElement>document.querySelector('.check02')
    // if (checked01.checked) {
    //   let main = document.querySelector('.php')
    //   this.barcode_used.push(this.http.idList[0])
      // this.barcode_used = this.idList[0].ID  //已使用
      // this.http.idList.splice(0, 1) //刪除idList[0]
      // main.removeChild(main.childNodes[0])
      // var barCode0 = document.querySelector('.barCode0');
      // main.removeChild(barCode0)
      // console.log(barCode0);
      // console.log("有選取")
      // checked01.removeAttribute('checked')  //刪除checked
      // checked01.checked = false
    //  var asd= document.querySelector(".checked01").checked = false;
      // console.log(this.barcode_used)
      // console.log(checked01)
      // console.log(this.idList)
    // } else {
      // console.log("未選取")
    // }
    // -----------------------------------
    // if (checked02.checked) {
    //   let main = document.querySelector('.php')
    //   this.barcode_used.push(this.http.idList[1])
    //   // this.barcode_used = this.idList[1].ID  //已使用
    //   // this.idList.splice(1, 1) //刪除idList[1]
    //   main.removeChild(main.childNodes[1])
    //   // var barCode1 = document.querySelector('.barCode1');
    //   // main.removeChild(barCode1)
    //   checked02.checked = false
    //   // console.log("有選取")
    //   console.log(this.barcode_used)
    // }
  //   else {
  //     // console.log("未選取")
  //   }
  // }
  async used(){
    console.log(this.barcode_used)
    const modal = await this.modalController.create({
      component: UsedComponent,
      componentProps: {
        // 'barcodes': this.httpService.barcodes
        "barcode_used":this.barcode_used
      },
      // swipeToClose:true,
      // presentingElement: await this.modalController.getTop()
    })
    modal.onDidDismiss().then((response: any) => {
      this.fromModal=response
      if(response.data !== undefined){
      }
    })

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

  member() {
    this.router.navigate(['player-tabs/member'])
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

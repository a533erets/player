import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/service/http.service'; 
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import * as JsBarcode from 'jsbarcode';

@Component({
  selector: 'app-bonus',
  templateUrl: './bonus.page.html',
  styleUrls: ['./bonus.page.scss'],
})
export class BonusPage implements OnInit {

  constructor(private router: Router, private navController: NavController, private http: HttpService) { }
  members: object[] = []
  id: number ;
  barcodeGenerate: boolean = false
  ngOnInit() {
  }

  ionViewWillEnter(){
    let contentWindow = document.querySelector('.barcodeList')
    let modal = <HTMLElement>document.querySelector('#exChange')
    console.log(modal)
    contentWindow.addEventListener('scroll', ()=>{
      let contentTop = contentWindow.scrollTop
      let contentHeight = contentWindow.clientHeight
      // console.log(contentTop)
      let btnHeight = modal.offsetHeight
      let bottomCap = 20
      let finalTop = contentTop + (contentHeight - btnHeight) - bottomCap
      modal.style['margin-top'] = finalTop + 'px'
    })
  }


  back() {
    this.router.navigate(['player-tabs/member']);
  }

  backToMemberInformation() {
    this.navController.back()
  }
  save_barcode_data(productName) {
    let formData = new FormData()
    formData.append('ID', this.id.toString())
    formData.append('member_ID', this.http.logInState.ID)
    formData.append('use', 'false')
    formData.append('name', productName)
    console.log(formData)
    let Url = 'http://localhost/foodplayer/src/app/php/tobarcode.php'
    // this.http.post('http://localhost/foodplayer/src/app/php/tobarcode.php')
    this.http.pushData(Url, 'newBarcode', formData)
    // console.log(this.ID,this.image,this.use)
  }
  random(productName){
    console.log(productName)
    var b = (Math.random());
    b = b * 1000000000
    b = Math.floor(b);
    if (b < 100000000) {
      return this.random(productName);
    }
    console.log(b);
    this.id = b;

    this.openModalFirst(this.barcodeGenerate).then((resolve)=>{
      console.log(resolve)
    }).then(()=>{
      JsBarcode('#barcode', this.id.toString(), {
        // background:'#fff',
        // color:'#000',
        // height:100,
        // displayValue:false
      });
    }).then(()=>{
      this.save_barcode_data(productName)
    }).catch((reject)=>{
      console.log(reject)
    })
  }

  openModalFirst(barcodeGenerate){
    return new Promise((resolve, reject)=>{
      if(barcodeGenerate === false){
        resolve('open modal')
        this.barcodeGenerate = true
      }else{
        reject('error')
      }
    })
  }

  close(){
    this.barcodeGenerate = false
  }
}

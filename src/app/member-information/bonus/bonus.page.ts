import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/service/http.service';
import { NavController } from '@ionic/angular';
import * as JsBarcode from 'jsbarcode';
import { resolve } from 'dns';
@Component({
  selector: 'app-bonus',
  templateUrl: './bonus.page.html',
  styleUrls: ['./bonus.page.scss'],
})
export class BonusPage implements OnInit {

  constructor(private router: Router, private navController: NavController, private http: HttpClient,private httpService: HttpService) { }
  members: object[] = []
  id: number ;
  barcodeGenerate: boolean = false
  ngOnInit() {
    this.getMembers()
  }
  getMembers() {
    this.http.get('http://localhost/foodplayer/src/app/php/getMember.php')
      .subscribe(data => {
        console.log(data)
        for (let i = 0; i < Object.keys(data).length; i++) {
          this.members.push(data[i])
        }
      })
  }
  back() {
    this.router.navigate(['player-tabs/member']);
  }
  backToMemberInformation() {
    this.navController.back()
  }
  save_barcode_data() {
    let formData = new FormData()
    formData.append('ID', this.id.toString())
    formData.append('use', 'false')
    console.log(formData)
    let Url = 'http://localhost/foodplayer/src/app/php/tobarcode.php'
    // this.http.post('http://localhost/foodplayer/src/app/php/tobarcode.php')
    this.httpService.pushData(Url, 'newBarcode', formData)
    // console.log(this.ID,this.image,this.use)
  }
  random(){
    var b = (Math.random());
    b = b * 1000000000
    b = Math.floor(b);
    if (b < 100000000) {
      return this.random();
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
      this.save_barcode_data()
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

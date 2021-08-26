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
  
  ngOnInit() {
  }

  ionViewWillEnter() {
    this.get_http()
  }

  ionViewWillLeave(){
    let svgParent = document.querySelector('.php')
    while(svgParent.firstChild){
      svgParent.removeChild(svgParent.lastChild)
    }
  }

  get_http() {
    let Url = 'http://localhost/foodplayer/src/app/php/getbarcode.php'
    let target = 'barcode'
    let formData = new FormData()
    formData.append('member_ID', this.http.logInState.ID)
    this.http.pushData(Url, target, formData)
  }

  Scanner() {
    
    var checkboxes = document.querySelectorAll('ion-checkbox'); 

    for(var i=0; i < this.http.idList.length;i++){
      if(checkboxes[i].checked ==true){
        let formData = new FormData()
        formData.append('member_ID', this.http.logInState.ID)
        formData.append('barcode_ID', checkboxes[i].getAttribute('id'));
        formData.append('mode', 'use')
        this.http.pushData('http://localhost/foodplayer/src/app/php/upDateBarcode.php', 'upDateBarcode', formData)

        let main = document.querySelector('.php')
        this.barcode_used.push(this.http.idList[i])
        this.http.idList.splice(i, 1) //刪除idList[0]
        main.removeChild(main.childNodes[i])
    }
  }
}

  async used(){
    console.log(this.barcode_used)
    const modal = await this.modalController.create({
      component: UsedComponent,
      // componentProps: {
      //   "barcode_used":this.barcode_used
      // },
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

import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import * as JsBarcode from 'jsbarcode';
import { HttpService } from 'src/app/service/http.service';
@Component({
  selector: 'app-used',
  templateUrl: './used.component.html',
  styleUrls: ['./used.component.scss'],
})
export class UsedComponent implements OnInit {
  constructor(private modalController: ModalController, public http: HttpService) { }
  // @Input() name:string;
  // @Input() id:number;
  // @Input() barcode_used:any;
  // idList:number;

  barcode_used: any[]=[]

  ngOnInit() {
    console.log(this.barcode_used)
    for(let i=0; i < this.http.barcodes.length; i++){
      if(this.http.barcodes[i].use === 'true'){
        this.barcode_used.push(this.http.barcodes[i])
      }
    }
    this.print_barCodes()
  }

  async member(){
    await this.modalController.dismiss()
  }
  print_barCodes(){
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
        }
      ]
    for(var i=0;i<this.barcode_used.length;i++){
    let main = document.querySelector('.php_used')
    let barCode = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    barCode.setAttribute("id","barcode"+i)
    main.append(barCode)
    console.log(main)
    JsBarcode('#barcode'+i,this.barcode_used[i].ID)
    }
  }
}

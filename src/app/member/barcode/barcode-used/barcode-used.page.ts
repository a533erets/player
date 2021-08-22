import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-barcode-used',
  templateUrl: './barcode-used.page.html',
  styleUrls: ['./barcode-used.page.scss'],
})
export class BarcodeUsedPage implements OnInit {
  constructor(private router:Router) { }
  @Input() barcodes:string;
  ngOnInit() {
  }

  member(){
    this.router.navigate(['player-tabs/member'])
  }
  expired(){
    this.router.navigate(['player-tabs/barcode-expired'])
  }
  use(){
    this.router.navigate(['player-tabs/barcode'])
  }
}

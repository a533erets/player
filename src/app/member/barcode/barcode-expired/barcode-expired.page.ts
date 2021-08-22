import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-barcode-expired',
  templateUrl: './barcode-expired.page.html',
  styleUrls: ['./barcode-expired.page.scss'],
})
export class BarcodeExpiredPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  member(){
    this.router.navigate(['player-tabs/member'])
  }
  used(){
    this.router.navigate(['player-tabs/barcode-used'])
  }
  use(){
    this.router.navigate(['player-tabs/barcode'])
  }

}

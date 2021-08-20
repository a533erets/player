import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-barcode-used',
  templateUrl: './barcode-used.page.html',
  styleUrls: ['./barcode-used.page.scss'],
})
export class BarcodeUsedPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  member(){
    this.router.navigate(['player-tabs/member'])
  }
}

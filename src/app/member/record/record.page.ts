import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-record',
  templateUrl: './record.page.html',
  styleUrls: ['./record.page.scss'],
})
export class RecordPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  back(){
    this.router.navigate(['player-tabs/member'])
  }
}

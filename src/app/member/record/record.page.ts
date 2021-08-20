import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-record',
  templateUrl: './record.page.html',
  styleUrls: ['./record.page.scss'],
})
export class RecordPage implements OnInit {

  constructor(private router:Router, public http: HttpService) { }

  ngOnInit() {
  }

  member(){
    this.router.navigate(['player-tabs/member'])
  }
}

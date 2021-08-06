import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-launch-page',
  templateUrl: './launch-page.page.html',
  styleUrls: ['./launch-page.page.scss'],
})
export class LaunchPagePage implements OnInit {

  constructor(
    private router: Router
  ) {}

  ngOnInit() {
  }
  opening() {
    this.router.navigate(['/player-tabs/home']);
    }

}

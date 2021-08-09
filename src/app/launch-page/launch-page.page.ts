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
  ) {
    // for (var i=0;i<3000;i++)
    // {
    //   console.log(i);
    // }

    // console.log("a");
    // this.router.navigate(['/player-tabs/home']);
}

  ngOnInit() {
    // this.router.navigate(['/player-tabs/home']);
    this.timer()
  }

  timer(){
    setTimeout(()=>{
      this.router.navigate(['/player-tabs/home']);
    }, 3000)
  }

  opening() {
    this.router.navigate(['/player-tabs/home']);
    }

}

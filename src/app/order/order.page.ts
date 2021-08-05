import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
})
export class OrderPage implements OnInit {

  constructor( private http: HttpClient ) { }

  curries: object[] = []
  dons: object[] = []
  frieds: object[] = []
  sweets: object[] = []

  ngOnInit() {
    this.getProducts()
  }

  getProducts(){
    this.http.get('http://localhost/foodPlayer/src/app/php/getProducts.php')
    .subscribe(data => {
      console.log(data)

      for(let i=0; i < Object.keys(data).length; i++){
        this.SortProducts(data[i])
      }
    })
  }

  SortProducts(product){
    let types = ['咖哩', '丼飯', '炸物', '甜品']

    if(product.type === types[0]){
      this.curries.push(product)
    }

    if(product.type === types[1]){
      this.dons.push(product)
    }

    if(product.type === types[2]){
      this.frieds.push(product)
    }

    if(product.type === types[4]){
      this.sweets.push(product)
    }
  }

}

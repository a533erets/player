import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(public http: HttpClient) { }

  currentAmount: any = 0
  products: object[] = []
  shoppingCart: any[] = []
  // curries: object[] = []
  // dons: object[] = []
  // frieds: object[] = []
  // sweets: object[] = []

  getData(Url: string){
    return this.http.get(Url).subscribe(data => {
      console.log(data)

      for(let i=0; i < Object.keys(data).length; i++){
        this.products.push(data[i])
        // this.SortProducts(data[i])
      }     
    })
  }

  pushData(Url: string, dataToPush: any){
    let header = new HttpHeaders()
    header.append('Accept', 'application/json')
    header.append('Contnet-Type', 'application/json')
    return this.http.post(Url, dataToPush, {headers: header}).subscribe(response => {
      console.log(response)
    },error => {
      console.log(error)
    })
  }

  addShoppingCart(product){
    if(this.shoppingCart.length > 0){
      this.addOnTop(product)
     }else{
       this.addNewOne(product) 
     }
  }

  addOnTop(product){
    for(let i=0; i < this.shoppingCart.length; i++){
      if(product.ID === this.shoppingCart[i].ID){
        this.shoppingCart[i].amount++
        this.shoppingCart[i].price = this.shoppingCart[i].price * this.shoppingCart[i].amount 
        this.currentAmount++
        return
      }
    }
    this.addNewOne(product)
  }

  addNewOne(product){
    this.shoppingCart.push({ID: product.ID, name: product.name, image: product.image, price: product.price, amount: 1})
    this.currentAmount++
  }

  upDateCart(responseCart, newAmount){
    this.shoppingCart = responseCart
    if(responseCart === 0){
      this.currentAmount = 0 
    }else{
      this.currentAmount = newAmount
    }
  }

  clearCart(){
    this.shoppingCart.splice(0)
    this.currentAmount = 0 
  }
}

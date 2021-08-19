import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(public http: HttpClient) { }

  newDatas: any[] = []
  logInState:any = {ID: '', name: '', phone: '', email: '', address: '', bonus: '', barcode: '', logIn: false}
  currentAmount: any = 0
  products: object[] = []
  shoppingCart: any[] = []
  cartData: any = {theCart: [], total: 0}
  cartID: any
  payLoad: any = {pushed: false, start: ''}
  currentStep: string
  // curries: object[] = []
  // dons: object[] = []
  // frieds: object[] = []
  // sweets: object[] = []

  getData(Url: string, target: string){
    return this.http.get(Url).subscribe(data => {
      console.log(data)

      this.sortData(data).then((resolve)=>{
        resolve
      }).then(()=>{
        if(target === 'product'){
          this.products = this.newDatas
        }
        //Add more array if needed
      }).catch((reject)=>{
        console.log(reject)
      })
    })
  }

  sortData(data){
    return new Promise((resolve, reject)=>{
      if(data === undefined){
        reject('error!')
      }else{
        resolve('proceed')
        for(let i=0; i < Object.keys(data).length; i++){
          this.newDatas.push(data[i])
          // this.SortProducts(data[i])
        }
      }
    })
  }

  pushData(Url: string, dataToPush: any){
    return this.http.post(Url, dataToPush).subscribe(response => {
      console.log(response)
      this.cartID = response
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

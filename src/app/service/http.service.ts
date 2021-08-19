import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(public http: HttpClient) { }

  logInState: any = {}
  // logInState: any = {member_ID: '', member_name: '', phone: '', email: '', logIn: false}
  newDatas: any[] = []

  currentAmount: any = 0
  products: object[] = []
  shoppingCart: any[] = []
  members:any
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

        if(target === 'logIn'){
          this.logInState = this.newDatas
          console.log(this.logInState)
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

  pushData(Url: string, target: string, dataToPush: any){
    return this.http.post(Url, dataToPush).subscribe(response => {
      console.log(response)

      if(target === 'shoppingCart'){
        this.cartID = response
      }

      if(target === 'login'){
        this.logInState.ID = response[0].member_ID
        this.logInState.name = response[0].member_name
        this.logInState.password = response[0].password
        this.logInState.phone = response[0].phone
        this.logInState.address = response[0].address
        this.logInState.email = response[0].email
        this.logInState.bonus = response[0].bonus
        this.logInState.barcode = response[0].barcode
        this.logInState.logIn = true
      }

      if(target === 'checkUser' && response !== undefined){
        this.logInState.name = response[0].member_name
        this.logInState.email = response[0].email
        console.log(this.logInState.name)
      }
      
    },error => {
      console.log(error)
      return error
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

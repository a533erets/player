import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(public http: HttpClient, public router: Router) { }

  logInState: any = {ID: '', name: '', password: '', email: '', phone: '', address: '', bonus: '', barcode: '', logIn: false}
  newDatas: any[] = []
  checkIfuserExist: any = {visible: 'hidden', translate: 'translateY(-12vh)'}
  currentAmount: any = 0
  products: any[] = []
  barcodes: any[] = []
  shoppingCart: any[] = []
  members: any
  cartData: any = { theCart: [], total: 0 }
  cartID: any
  payLoad: any = { pushed: false, start: '' }
  currentStep: string

  getData(Url: string, target: string) {
    return this.http.get(Url).subscribe(data => {
      console.log(data)

      this.sortData(data).then((resolve) => {
        console.log(resolve)
      }).then(() => {
        if (target === 'product') {
          this.products = this.newDatas
        }

        if (target === 'barcode') {
          this.barcodes = this.newDatas
        }
        //Add more array if needed
      }).catch((reject) => {
        console.log(reject)
      })
    })
  }

  sortData(data) {
    return new Promise((resolve, reject) => {
      if (data === undefined) {
        reject('error!')
      } else {
        resolve('proceed')
        this.newDatas = data
      }
    })
  }

  pushData(Url: string, target: string, dataToPush: any) {
    return this.http.post(Url, dataToPush).subscribe(response => {
      console.log(response)

      if (target === 'shoppingCart') {
        this.cartID = response
      }

      if (target === 'logIn' && Object.keys(response).length > 0 || target === 'signUp' && Object.keys(response).length > 0) {
        this.logInState.ID = response[0].member_ID
        this.logInState.name = response[0].member_name
        this.logInState.password = response[0].password
        this.logInState.phone = response[0].phone
        this.logInState.address = response[0].address
        this.logInState.email = response[0].email
        this.logInState.bonus = response[0].bonus
        this.logInState.barcode = response[0].barcode
        this.logInState.logIn = true
        this.router.navigate(['player-tabs/main'])
      }else if( target === 'logIn' && Object.keys(response).length === 0){
        this.checkIfuserExist.visible = 'visible';
        setTimeout(() => {
          this.checkIfuserExist.visible = 'hidden';
        }, 2500);
      }

      if (target === 'newBarcode') {
        this.logInState.barcode.push(response)
      }

      if(target === 'reset'){
        this.logInState.password = response

        setTimeout(() => {
          this.router.navigate(['player-tabs/main']);
        }, 2500);
      }

      if (target === 'checkUser' && Object.keys(response).length > 0) {
        this.logInState.name = response[0].member_name
        this.logInState.email = response[0].email
        console.log(this.logInState.name)
        this.router.navigate(['player-tabs/reset'])
      }else if(target === 'checkUser' && Object.keys(response).length === 0){
        this.checkIfuserExist.visible = 'visible'
        this.checkIfuserExist.translate = 'translateY(0vh)'
        setTimeout(() => {
          this.checkIfuserExist.visible = 'hidden'
          this.checkIfuserExist.translate = 'translateY(-12vh)'
        }, 2500);
      }

    }, error => {
      console.log(error)
      return error
    })
  }

  addShoppingCart(product) {
    if (this.shoppingCart.length > 0) {
      this.addOnTop(product)
    } else {
      this.addNewOne(product)
    }
  }

  addOnTop(product) {
    for (let i = 0; i < this.shoppingCart.length; i++) {
      if (product.ID === this.shoppingCart[i].ID) {
        this.shoppingCart[i].amount++
        this.shoppingCart[i].price = this.shoppingCart[i].price * this.shoppingCart[i].amount
        this.currentAmount++
        return
      }
    }
    this.addNewOne(product)
  }

  addNewOne(product) {
    this.shoppingCart.push({ ID: product.ID, name: product.name, image: product.image, price: product.price, amount: 1 })
    this.currentAmount++
  }

  upDateCart(responseCart, newAmount) {
    this.shoppingCart = responseCart
    if (responseCart === 0) {
      this.currentAmount = 0
    } else {
      this.currentAmount = newAmount
    }
  }

  clearCart() {
    this.shoppingCart.splice(0)
    this.currentAmount = 0
  }

  checkLogIn(){
    return this.logInState.logIn
  }
}

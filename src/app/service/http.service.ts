import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ConditionalExpr } from '@angular/compiler';

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
  cartRecords: any[] = []
  currentYear: number
  currentMonth: number
  currentDay: number
  selectedRecord: any[] = []
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
          return this.products = this.newDatas
        }

        if (target === 'barcode') {
          return this.barcodes = this.newDatas
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

  parseData(data){
    return JSON.parse(data)
  }

  defineMonth(monthStr){
    if(monthStr.charAt(0) === '0'){
      return monthStr = monthStr.charAt(monthStr.length - 1)
    }
  }

  pushData(Url: string, target: string, dataToPush: any) {
    return this.http.post(Url, dataToPush).subscribe((response: any) => {
      console.log(response)

      if (target === 'shoppingCart') {
        console.log(response)
        this.cartID = response.cartID
        return this.logInState.bonus = Number(this.logInState.bonus) + Number(response.bonus)
      }

      if (target === 'cartRecord' && Object.keys(response).length > 0) {
        for(let i=0; i < Object.keys(response).length; i++){
          response[i].product_list = this.parseData(response[i].product_list)
          response[i].date = response[i].date.split('-')
          response[i].date[1] = this.defineMonth(response[i].date[1])

          for(let j=0; j < response[i].date.length; j++){
            response[i].date[j] = parseInt(response[i].date[j])
          }

          this.cartRecords.push(response[i])
        }
        this.currentYear = this.cartRecords[this.cartRecords.length -1].date[0]
        this.currentMonth = this.cartRecords[this.cartRecords.length -1].date[1]
        this.currentDay = this.cartRecords[this.cartRecords.length -1].date[2]
        this.selectedRecord = this.cartRecords[this.cartRecords.length -1].product_list
        console.log(this.currentYear, this.currentMonth, this.currentDay)
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
        return this.router.navigate(['player-tabs/main'])
      }else if( target === 'logIn' && Object.keys(response).length === 0){
        this.checkIfuserExist.visible = 'visible';
        return setTimeout(() => {
          this.checkIfuserExist.visible = 'hidden';
        }, 2500);
      }
      if (target==='logOut'){
        this.logInState.logIn=false
        this.logInState.ID = ""
        this.logInState.name = ""
        this.logInState.password = ""
        this.logInState.phone = ""
        this.logInState.address = ""
        this.logInState.email = ""
        this.logInState.bonus = ""
        this.logInState.barcode = ""
        console.log(this.logInState)
      }
      if (target === 'newBarcode') {
        return this.logInState.barcode.push(response)
      }

      if(target === 'reset'){
        this.logInState.password = response

        return setTimeout(() => {
          this.router.navigate(['player-tabs/main']);
        }, 2500);
      }

      if (target === 'checkUser' && Object.keys(response).length > 0) {
        this.logInState.name = response[0].member_name
        this.logInState.email = response[0].email
        console.log(this.logInState.name)
        return this.router.navigate(['player-tabs/reset'])
      }else if(target === 'checkUser' && Object.keys(response).length === 0){
        this.checkIfuserExist.visible = 'visible'
        this.checkIfuserExist.translate = 'translateY(0vh)'
        return setTimeout(() => {
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

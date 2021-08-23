import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as JsBarcode from 'jsbarcode';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(public http: HttpClient) { }

  logInState: any = {ID: '', name: '', password: '', email: '', phone: '', address: '', bonus: '', barcode: [], logIn: false}
  newDatas: any[] = []

  currentAmount: any = 0
  products: any[] = []
  barcodes: any[] = []
  shoppingCart: any[] = []
  members: any
  cartData: any = { theCart: [], total: 0 }
  cartID: any
  payLoad: any = { pushed: false, start: '' }
  currentStep: string
  idList:any

  getData(Url: string, target: string) {
    return this.http.get(Url).subscribe(data => {
      console.log(data)

      this.sortData(data).then((resolve) => {
        console.log(resolve)
      }).then(() => {
        if (target === 'product') {
          this.products = this.newDatas
        }

        if (target === 'logIn') {
          this.logInState = this.newDatas
          console.log(this.logInState)
        }

        if (target === 'barcode') {
          this.barcodes = this.newDatas
          if(this.barcodes.length>0){
            this.print_barCodes()
          }
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
    return this.http.post(Url, dataToPush).subscribe((response: any) => {
      console.log(response)

      if (target === 'shoppingCart') {
        this.cartID = response
      }

      if (target === 'login' || target === 'signUp') {
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

      if (target === 'checkUser' && response !== undefined) {
        this.logInState.name = response[0].member_name
        this.logInState.email = response[0].email
        console.log(this.logInState.name)
      }

      if (target === 'newBarcode') {
        this.logInState.barcode.push(response)
        console.log(this.logInState.barcode)
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
  print_barCodes() {
    this.idList = this.barcodes
    var study = 0;
    let main = document.querySelector('.php')
    for (let i = 0; i < this.idList.length; i++) {
      let barCode = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
      var aa = study.toString();
      //創建的svg尚未放入DOM
      this.generatePlaceHolder(barCode, aa).then((resolve) => {
        console.log(resolve)
      }).then(() => {
        main.append(barCode)
      }).then(() => {
        for (let j = 0; j < this.idList.length; j++) {
          JsBarcode('.barCode' + j, this.idList[j].ID.toString())
        }
      })
      // #aa !== var aa
      study++;
    }
  }
  generatePlaceHolder(barCode, idString) {
    return new Promise((resolve, reject) => {
      if (barCode !== undefined) {
        resolve('Dynamically set attribute to elemente')
        barCode.className.baseVal = 'barCode' + idString //<svg class="">
      } else {
        reject('error')
      }
    })
  }
}

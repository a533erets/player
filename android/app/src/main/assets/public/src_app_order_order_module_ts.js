(self["webpackChunkplayer"] = self["webpackChunkplayer"] || []).push([["src_app_order_order_module_ts"],{

/***/ 5649:
/*!***********************************************!*\
  !*** ./src/app/order/order-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderPageRoutingModule": () => (/* binding */ OrderPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _order_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order.page */ 6107);




const routes = [
    {
        path: '',
        component: _order_page__WEBPACK_IMPORTED_MODULE_0__.OrderPage
    },
    {
        path: 'payment',
        loadChildren: () => __webpack_require__.e(/*! import() */ "common").then(__webpack_require__.bind(__webpack_require__, /*! ./payment/payment.module */ 6493)).then(m => m.PaymentPageModule)
    }
];
let OrderPageRoutingModule = class OrderPageRoutingModule {
};
OrderPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], OrderPageRoutingModule);



/***/ }),

/***/ 8865:
/*!***************************************!*\
  !*** ./src/app/order/order.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderPageModule": () => (/* binding */ OrderPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _order_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order-routing.module */ 5649);
/* harmony import */ var _order_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order.page */ 6107);
/* harmony import */ var _shopping_cart_modal_shopping_cart_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shopping-cart-modal/shopping-cart-modal.component */ 2292);








let OrderPageModule = class OrderPageModule {
};
OrderPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _order_routing_module__WEBPACK_IMPORTED_MODULE_0__.OrderPageRoutingModule
        ],
        declarations: [_order_page__WEBPACK_IMPORTED_MODULE_1__.OrderPage, _shopping_cart_modal_shopping_cart_modal_component__WEBPACK_IMPORTED_MODULE_2__.ShoppingCartModalComponent],
        entryComponents: [_shopping_cart_modal_shopping_cart_modal_component__WEBPACK_IMPORTED_MODULE_2__.ShoppingCartModalComponent]
    })
], OrderPageModule);



/***/ }),

/***/ 6107:
/*!*************************************!*\
  !*** ./src/app/order/order.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderPage": () => (/* binding */ OrderPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_order_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./order.page.html */ 9578);
/* harmony import */ var _order_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order.page.scss */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _service_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/http.service */ 561);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _shopping_cart_modal_shopping_cart_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shopping-cart-modal/shopping-cart-modal.component */ 2292);







let OrderPage = class OrderPage {
    constructor(httpService, modalController) {
        this.httpService = httpService;
        this.modalController = modalController;
    }
    ngOnInit() {
        this.getProducts();
        let contentWindow = document.querySelector('.productList');
        let btn = document.querySelector('.float');
        contentWindow.addEventListener('scroll', () => {
            let contentTop = contentWindow.scrollTop;
            let contentHeight = contentWindow.clientHeight;
            // console.log(contentTop)
            let btnHeight = btn.offsetHeight;
            let bottomCap = 20;
            let finalTop = contentTop + (contentHeight - btnHeight) - bottomCap;
            btn.style['top'] = finalTop + 'px';
        });
    }
    getProducts() {
        let Url = 'http://localhost/foodplayer/src/app/php/getProducts.php';
        let target = 'product';
        this.httpService.getData(Url, target);
        console.log(this.httpService.products);
    }
    addToCart(product) {
        this.httpService.addShoppingCart(product);
    }
    openCartModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _shopping_cart_modal_shopping_cart_modal_component__WEBPACK_IMPORTED_MODULE_3__.ShoppingCartModalComponent,
                componentProps: {
                    'shoppingCart': this.httpService.shoppingCart
                },
                // cssClass: 'custom-modal-class'
            });
            modal.onDidDismiss().then((response) => {
                console.log(response);
                if (response.data !== undefined) {
                    this.httpService.upDateCart(response.data.returnCart, response.data.callUpdate);
                }
            });
            yield modal.present();
        });
    }
};
OrderPage.ctorParameters = () => [
    { type: _service_http_service__WEBPACK_IMPORTED_MODULE_2__.HttpService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController }
];
OrderPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-order',
        template: _raw_loader_order_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_order_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], OrderPage);



/***/ }),

/***/ 2292:
/*!**********************************************************************!*\
  !*** ./src/app/shopping-cart-modal/shopping-cart-modal.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShoppingCartModalComponent": () => (/* binding */ ShoppingCartModalComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_shopping_cart_modal_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./shopping-cart-modal.component.html */ 8248);
/* harmony import */ var _shopping_cart_modal_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shopping-cart-modal.component.scss */ 7254);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);







let ShoppingCartModalComponent = class ShoppingCartModalComponent {
    constructor(modalController, navController, router) {
        this.modalController = modalController;
        this.navController = navController;
        this.router = router;
        this.unitPrice = [];
        this.unitAmount = [];
        this.totalPrice = 0;
        this.recalAmount = 0;
        this.removeAsked = false;
    }
    ngOnInit() {
        console.log(this.shoppingCart);
        this.detectDeviceScreenSize();
        for (let i = 0; i < this.shoppingCart.length; i++) {
            this.unitPrice.push(Number(this.shoppingCart[i].price) / Number(this.shoppingCart[i].amount));
            this.unitAmount.push(Number(this.shoppingCart[i].amount));
            this.totalPrice = this.totalPrice + Number(this.shoppingCart[i].price);
            this.recalAmount = this.recalAmount + Number(this.shoppingCart[i].amount);
        }
        console.log(this.recalAmount);
    }
    toPayment() {
        let cartData = { theCart: this.shoppingCart, total: this.totalPrice };
        this.closeShoppingCart();
        this.router.navigate(['/player-tabs/payment'], { state: cartData });
    }
    detectDeviceScreenSize() {
        let cartWindow = document.querySelector('.temp-cart-modal');
        let Wheight = window.screen.height;
        cartWindow.style['height'] = (Wheight - 32) + 'px';
    }
    minus(productIndex) {
        this.shoppingCart[productIndex].price = Number(this.shoppingCart[productIndex].price) - this.unitPrice[productIndex];
        this.shoppingCart[productIndex].amount--;
        this.recalAmount--;
        this.totalPrice = this.totalPrice - this.unitPrice[productIndex];
        console.log(this.recalAmount);
    }
    reCalculate(productIndex, $event) {
        let ionInput = document.querySelector('ion-input');
        let newAmount;
        newAmount = ionInput.value;
        if (newAmount <= 1) {
            this.shoppingCart[productIndex].price = this.unitPrice[productIndex];
            this.totalPrice = this.totalPrice - (this.unitPrice[productIndex] * newAmount);
            this.shoppingCart[productIndex].amount = 1;
            $event.stopPropagation();
        }
        this.shoppingCart[productIndex].price = this.unitPrice[productIndex] * newAmount;
        this.shoppingCart[productIndex].amount = newAmount;
        if (newAmount > this.unitAmount[productIndex]) {
            this.recalAmount = this.recalAmount + (newAmount - this.unitAmount[productIndex]);
            this.totalPrice = this.totalPrice + (this.unitPrice[productIndex] * newAmount);
            console.log(this.recalAmount);
        }
        else {
            this.recalAmount = this.recalAmount - (this.unitAmount[productIndex] - newAmount);
            this.totalPrice = this.totalPrice - (this.unitPrice[productIndex] * newAmount);
            console.log(this.recalAmount);
        }
    }
    plus(productIndex) {
        this.shoppingCart[productIndex].price = Number(this.shoppingCart[productIndex].price) + this.unitPrice[productIndex];
        this.shoppingCart[productIndex].amount++;
        this.recalAmount++;
        this.totalPrice = this.totalPrice + this.unitPrice[productIndex];
        console.log(this.recalAmount);
    }
    openAskModal(product) {
        let askModal = document.querySelector('#beforeRemove');
        let ask = document.querySelector('.ask');
        ask.innerHTML = `${product.name}`;
        this.deleteProduct = product;
        askModal.style['display'] = 'block';
    }
    closeAskModal() {
        let askModal = document.querySelector('#beforeRemove');
        askModal.style['display'] = 'none';
    }
    askRemove() {
        if (this.removeAsked === false) {
            this.removeAsked = true;
            this.removeProductRow(this.deleteProduct);
            this.closeAskModal();
        }
        else {
            console.log('error');
        }
    }
    removeProductRow(product) {
        for (let i = 0; i < this.shoppingCart.length; i++) {
            if (product.ID === this.shoppingCart[i].ID) {
                this.recalAmount = this.recalAmount - this.shoppingCart[i].amount;
                this.totalPrice = this.totalPrice - this.shoppingCart[i].price;
                this.shoppingCart.splice(i, 1);
                console.log(this.shoppingCart);
                this.removeAsked = false;
                return;
            }
        }
    }
    closeShoppingCart() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const returnCart = this.shoppingCart;
            const callUpdate = this.recalAmount;
            const data = { returnCart, callUpdate };
            yield this.modalController.dismiss(data);
        });
    }
};
ShoppingCartModalComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
ShoppingCartModalComponent.propDecorators = {
    shoppingCart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }]
};
ShoppingCartModalComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-shopping-cart-modal',
        template: _raw_loader_shopping_cart_modal_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_shopping_cart_modal_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ShoppingCartModalComponent);



/***/ }),

/***/ 2508:
/*!***************************************!*\
  !*** ./src/app/order/order.page.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".float {\n  position: absolute;\n  z-index: 2;\n  right: 8px;\n  bottom: 0;\n  width: 55px;\n  height: 55px;\n  margin-bottom: 20px;\n  border-radius: 50px;\n  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);\n  background-color: #FFC107;\n}\n.float .amount {\n  background-color: red;\n  border-radius: 50px;\n  width: 24px;\n  height: 24px;\n  color: white;\n  padding-top: 10%;\n  text-align: center;\n  position: absolute;\n  z-index: 3;\n  right: 35px;\n  bottom: 36px;\n}\n.float .shopping-cart {\n  font-size: 2.5rem;\n  color: white;\n}\n.top {\n  margin-top: 3vh;\n  display: flex;\n  justify-content: center;\n  padding: 0 1.5% 0 1.5%;\n}\n.top input {\n  width: 50vw;\n  border: 1px solid gray;\n}\n.top input:focus {\n  border: 1px solid #FA744A;\n}\nul {\n  padding-left: 4vw;\n}\nul li {\n  border: 1px solid white;\n  background-color: white;\n  border-radius: 8px;\n  list-style: none;\n  display: inline-block;\n  margin: 0.5%;\n  padding: 1%;\n  padding-bottom: 0;\n}\nul li .thumbnail {\n  border-radius: 8px;\n  overflow: hidden;\n}\nul li .thumbnail img {\n  width: 161px;\n  height: 161px;\n  object-fit: cover;\n}\nul li .info {\n  display: flex;\n  justify-content: space-between;\n}\nul li .info h5 {\n  margin-top: 0;\n}\nul li .order-btn {\n  width: 105%;\n  padding: 5% 0%;\n  margin: 0;\n  margin-left: -2.3%;\n  background-color: #FA744A;\n  border-radius: 8px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\nul li .order-btn:hover {\n  background-color: #fa9273;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkNBQUE7RUFDQSx5QkFBQTtBQUNKO0FBQUk7RUFDSSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBRVI7QUFBSTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtBQUVSO0FBRUE7RUFDSSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7QUFDSjtBQUFJO0VBQ0ksV0FBQTtFQUNBLHNCQUFBO0FBRVI7QUFEUTtFQUNJLHlCQUFBO0FBR1o7QUFFQTtFQUNJLGlCQUFBO0FBQ0o7QUFBSTtFQUNJLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBRVI7QUFEUTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7QUFHWjtBQUZZO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQUloQjtBQURRO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0FBR1o7QUFGWTtFQUNJLGFBQUE7QUFJaEI7QUFEUTtFQUNJLFdBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7QUFHWjtBQUZZO0VBQ0kseUJBQUE7QUFJaEIiLCJmaWxlIjoib3JkZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZsb2F0e1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIHJpZ2h0OiA4cHg7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICB3aWR0aDogNTVweDtcclxuICAgIGhlaWdodDogNTVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDVweCA1cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkMxMDc7XHJcbiAgICAuYW1vdW50e1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgICAgIGhlaWdodDogMjRweDtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDEwJTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHotaW5kZXg6IDM7XHJcbiAgICAgICAgcmlnaHQ6IDM1cHg7XHJcbiAgICAgICAgYm90dG9tOiAzNnB4O1xyXG4gICAgfVxyXG4gICAgLnNob3BwaW5nLWNhcnR7XHJcbiAgICAgICAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG59XHJcblxyXG4udG9we1xyXG4gICAgbWFyZ2luLXRvcDogM3ZoO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMCAxLjUlIDAgMS41JTtcclxuICAgIGlucHV0e1xyXG4gICAgICAgIHdpZHRoOiA1MHZ3O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XHJcbiAgICAgICAgJjpmb2N1c3tcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0ZBNzQ0QTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbnVse1xyXG4gICAgcGFkZGluZy1sZWZ0OiA0dnc7XHJcbiAgICBsaXtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luOiAuNSU7XHJcbiAgICAgICAgcGFkZGluZzogMSU7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICAgICAgLnRodW1ibmFpbHtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTYxcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE2MXB4O1xyXG4gICAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmluZm97XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgaDV7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5vcmRlci1idG57XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDUlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA1JSAwJTtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogLTIuMyU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGQTc0NEE7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcclxuICAgICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XHJcbiAgICAgICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmE5MjczO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */");

/***/ }),

/***/ 7254:
/*!************************************************************************!*\
  !*** ./src/app/shopping-cart-modal/shopping-cart-modal.component.scss ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".modal .temp-cart-modal {\n  width: 100%;\n  background-color: #EDEDED;\n  overflow-y: scroll;\n}\n.modal .temp-cart-modal .noCart {\n  color: black;\n}\n.modal .temp-cart-modal .noCart p {\n  text-align: center;\n}\n.modal .temp-cart-modal .cartInfo {\n  margin-top: 4vh;\n}\n.modal .temp-cart-modal .cartInfo .theProduct {\n  background-color: white;\n  color: black;\n  padding: 3%;\n  width: 90vw;\n  margin: 0 auto;\n  border-radius: 8px;\n  margin-bottom: 4vh;\n  position: relative;\n  z-index: 2;\n}\n.modal .temp-cart-modal .cartInfo .theProduct .remove {\n  width: 36px;\n  height: 36px;\n  border-radius: 50px;\n  background-color: #FFC107;\n  float: right;\n  font-size: 1.5rem;\n  margin: -4.5vh -7vw 0 0;\n}\n.modal .temp-cart-modal .cartInfo .theProduct .biggerIMG {\n  border-radius: 8px;\n  overflow: hidden;\n  height: 139px;\n}\n.modal .temp-cart-modal .cartInfo .theProduct .biggerIMG img {\n  width: 139px;\n  height: 139px;\n  object-fit: cover;\n}\n.modal .temp-cart-modal .cartInfo .theProduct .productName {\n  width: 50%;\n  margin-left: 3vw;\n}\n.modal .temp-cart-modal .toggleAmount {\n  margin-top: 3.5vh;\n}\n.modal .temp-cart-modal .toggleAmount .cal {\n  background: none;\n  font-size: 2rem;\n  color: #FA744A;\n}\n.modal .temp-cart-modal .toggleAmount .disabled {\n  color: gray;\n}\n.modal .temp-cart-modal .toggleAmount input {\n  background-color: white;\n  border: 1px solid lightgray;\n  border-radius: 8px;\n  text-align: center;\n  padding: 1%;\n  width: 20vw;\n}\n#totalBar {\n  position: fixed;\n  bottom: 0;\n  width: 100vw;\n  display: flex;\n  justify-content: space-between;\n  border: 1px solid #FA744A;\n  color: #FA744A;\n  border-top-right-radius: 8px;\n  border-bottom-right-radius: 8px;\n  background-color: white;\n  padding: 1%;\n  z-index: 2;\n}\n#totalBar div {\n  margin: auto;\n}\n#totalBar ion-button {\n  width: 50vw;\n}\n#beforeRemove {\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(106, 106, 106, 0.75);\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 3;\n}\n#beforeRemove .askModal {\n  top: 50%;\n  left: 50%;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  background-color: white;\n  border-radius: 8px;\n  padding: 3%;\n}\n#beforeRemove .askModal h1 {\n  color: black;\n}\n#beforeRemove .askModal h1 .ask {\n  color: #FA744A;\n}\n#beforeRemove .askModal .btns {\n  display: flex;\n  justify-content: center;\n}\n.infos {\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3BwaW5nLWNhcnQtbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQUFSO0FBQ1E7RUFDSSxZQUFBO0FBQ1o7QUFBWTtFQUNJLGtCQUFBO0FBRWhCO0FBQ1E7RUFDSSxlQUFBO0FBQ1o7QUFBWTtFQUNJLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFFaEI7QUFEZ0I7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtBQUdwQjtBQURvQjtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FBR3hCO0FBRndCO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQUk1QjtBQURvQjtFQUNJLFVBQUE7RUFDQSxnQkFBQTtBQUd4QjtBQUNRO0VBQ0ksaUJBQUE7QUFDWjtBQUFZO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUVoQjtBQUFZO0VBQ0ksV0FBQTtBQUVoQjtBQUFZO0VBQ0ksdUJBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQUVoQjtBQUlBO0VBQ0ksZUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSwrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUFESjtBQUVJO0VBQ0ksWUFBQTtBQUFSO0FBRUk7RUFDSSxXQUFBO0FBQVI7QUFJQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsMkNBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxVQUFBO0FBREo7QUFFSTtFQUNJLFFBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBQVI7QUFDUTtFQUNJLFlBQUE7QUFDWjtBQUFZO0VBQ0ksY0FBQTtBQUVoQjtBQUNRO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0FBQ1o7QUFJQTtFQUNJLGFBQUE7QUFESiIsImZpbGUiOiJzaG9wcGluZy1jYXJ0LW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vZGFse1xyXG4gICAgLnRlbXAtY2FydC1tb2RhbHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRURFREVEO1xyXG4gICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgICAgICAubm9DYXJ0e1xyXG4gICAgICAgICAgICBjb2xvcjpibGFjaztcclxuICAgICAgICAgICAgcHtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuY2FydEluZm97XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDR2aDtcclxuICAgICAgICAgICAgLnRoZVByb2R1Y3R7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDMlO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDkwdnc7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDR2aDtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgICAgICAgICAgICAucmVtb3Zle1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzZweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkMxMDc7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogLTQuNXZoIC03dncgMCAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5iaWdnZXJJTUd7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMzlweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEzOXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMzlweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5wcm9kdWN0TmFtZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDN2dztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLnRvZ2dsZUFtb3VudHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMy41dmg7XHJcbiAgICAgICAgICAgIC5jYWx7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNGQTc0NEE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmRpc2FibGVke1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IGdyYXk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW5wdXR7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDElO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDIwdnc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9ICAgXHJcbn1cclxuXHJcbiN0b3RhbEJhcntcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRkE3NDRBO1xyXG4gICAgY29sb3I6ICNGQTc0NEE7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogOHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDhweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMSU7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgZGl2e1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgIH1cclxuICAgIGlvbi1idXR0b257XHJcbiAgICAgICAgd2lkdGg6IDUwdnc7XHJcbiAgICB9XHJcbn1cclxuXHJcbiNiZWZvcmVSZW1vdmV7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwNiwgMTA2LCAxMDYsIDc1JSk7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgei1pbmRleDogMztcclxuICAgIC5hc2tNb2RhbHtcclxuICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICBwYWRkaW5nOiAzJTtcclxuICAgICAgICBoMXtcclxuICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgICAuYXNre1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNGQTc0NEE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmJ0bnN7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmluZm9ze1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufSJdfQ== */");

/***/ }),

/***/ 9578:
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/order/order.page.html ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content color=\"front\">\r\n  <ion-router-outlet class=\"productList\" style=\"overflow-y: scroll;\">\r\n\r\n    <ion-header>\r\n      <ion-toolbar color=\"bar\">\r\n        <header>\r\n          <ion-tab-button class=\"atHeader\" tab=\"home\">\r\n            <a class=\"logo\"><img src=\"../assets/icon/logo.png\" alt=\"logo\"></a>        \r\n          </ion-tab-button>\r\n    \r\n          <ion-tab-button class=\"atHeader\" tab=\"login\">\r\n            <a class=\"Login\"><p class=\"center\">登入</p></a>\r\n          </ion-tab-button>\r\n    \r\n        </header>\r\n    \r\n      </ion-toolbar>\r\n    </ion-header>\r\n\r\n    <button class=\"float\" (click)=\"openCartModal()\">\r\n      <span class=\"amount\">{{httpService.currentAmount}}</span>\r\n      <span class=\"iconify shopping-cart\" data-icon=\"ion:basket-outline\"></span>\r\n    </button>\r\n\r\n      <div class=\"top\">\r\n        <div class=\"search\">\r\n          <input type=\"text\" placeholder=\"今天想吃什麼?\">\r\n        </div>\r\n      </div>\r\n\r\n      <ul>\r\n        <li *ngFor=\"let product of httpService.products\">\r\n          <div class=\"thumbnail\">\r\n            <img src=\"..{{product.image}}\" alt=\"meal\">\r\n          </div>\r\n\r\n          <div class=\"info\">\r\n            <h5 class=\"small\">{{product.name}}</h5>\r\n            <h5 class=\"small price\">${{product.price}}</h5>\r\n          </div>\r\n          <button class=\"small order-btn\" (click)=\"addToCart(product)\">我要點餐</button>\r\n        </li>\r\n      </ul>\r\n\r\n      <!-- <div class=\"shopping-cart-modal\" style=\"display: none;\">\r\n        <div class=\"cartInfo\" *ngIf=\"shoppingCart.length > 0\">\r\n          <ul>\r\n            <li class=\"shoppingList\" *ngFor=\"let goods of shoppingCart\">\r\n              <div class=\"thumbnail\">\r\n                <img src=\"..{{goods.image}}\" alt=\"goods\">\r\n              </div>\r\n              <h5>{{goods.name}}</h5>\r\n              <h5>{{goods.price}}</h5>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div> -->\r\n\r\n      <!-- <ul>\r\n          <li *ngFor=\"let curry of curries\">\r\n            <div class=\"thumbnail\">\r\n              <img src=\"..{{curry.image}}\" alt=\"meal\">\r\n            </div>\r\n\r\n            <div class=\"info\">\r\n              <h5 class=\"small\">{{curry.name}}</h5>\r\n              <h5 class=\"small price\">${{curry.price}}</h5>\r\n            </div>\r\n            <button class=\"small order-btn\">我要點餐</button>\r\n          </li>\r\n        </ul>\r\n\r\n        <ul>\r\n          <li *ngFor=\"let don of dons\">\r\n            <div class=\"thumbnail\">\r\n              <img src=\"..{{don.image}}\" alt=\"meal\">\r\n            </div>\r\n\r\n            <div class=\"info\">\r\n              <h5 class=\"small\">{{don.name}}</h5>\r\n              <h5 class=\"small price\">{{don.price}}</h5>\r\n            </div>\r\n            <button class=\"small order-btn\">我要點餐</button>\r\n          </li>\r\n        </ul> -->\r\n  </ion-router-outlet>\r\n</ion-content>\r\n");

/***/ }),

/***/ 8248:
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shopping-cart-modal/shopping-cart-modal.component.html ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content class=\"modal\">\r\n\r\n  <div class=\"temp-cart-modal\">\r\n    <h1 class=\"title\">您的餐點</h1>\r\n\r\n    <ion-buttons class=\"backBtn\">\r\n      <ion-button (click)=\"closeShoppingCart()\">\r\n        <span class=\"iconify goBack\" data-icon=\"akar-icons:arrow-back-thick-fill\"></span>\r\n      </ion-button>\r\n    </ion-buttons>\r\n\r\n    <div class=\"noCart center\" *ngIf=\"shoppingCart?.length === 0\">\r\n      <p>還沒有點餐喔</p>\r\n      <p>要不要上一頁看看?</p>\r\n    </div>\r\n\r\n    <div class=\"cartInfo\" *ngIf=\"shoppingCart?.length > 0\">\r\n        <div *ngFor=\"let goods of shoppingCart; index as i\" class=\"theProduct\">\r\n          <button class=\"remove\" (click)=\"openAskModal(goods)\">X</button>\r\n          <div class=\"infos\">\r\n            <div class=\"biggerIMG \">\r\n              <img src=\"..{{goods.image}}\" alt=\"goods\">\r\n            </div>\r\n            <div class=\"productName\">\r\n              <h5>餐點名稱: {{goods.name}}</h5>\r\n              <h5>價格: {{goods.price}}</h5>\r\n\r\n              <div class=\"toggleAmount infos\">\r\n                <button class=\"cal\" [ngClass]=\"{'disabled': goods.amount === 1}\" (click)=\"minus(i)\" [disabled]=\"goods.amount === 1\">\r\n                  <span class=\"iconify\" data-icon=\"akar-icons:circle-minus\"></span>\r\n                </button>\r\n                <input type=\"number\" value=\"{{goods.amount}}\" onChange=\"reCalculate(i)\">\r\n                <button class=\"cal\" (click)=\"plus(i)\">\r\n                  <span class=\"iconify\" data-icon=\"akar-icons:circle-plus\"></span>\r\n                </button> \r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n  </div>\r\n\r\n  <div id=\"totalBar\">\r\n    <div><span class=\"totalPrice\">總計: {{totalPrice}}</span></div>\r\n    <ion-button color=\"back\" id=\"toPayment\" (click)=\"toPayment()\" [disabled]=\"totalPrice === 0\">前往結帳</ion-button>\r\n  </div>\r\n\r\n  <div id=\"beforeRemove\" style=\"display: none;\">\r\n    <div class=\"askModal\">\r\n      <h1>確定刪除 <span class=\"ask\"></span> ?</h1>\r\n      <div class=\"btns\">\r\n        <ion-button color=\"front\" (click)=\"closeAskModal()\">取消</ion-button>\r\n        <ion-button color=\"back\" (click)=\"askRemove()\">確定</ion-button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_order_order_module_ts.js.map
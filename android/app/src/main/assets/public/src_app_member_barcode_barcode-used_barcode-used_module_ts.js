(self["webpackChunkplayer"] = self["webpackChunkplayer"] || []).push([["src_app_member_barcode_barcode-used_barcode-used_module_ts"],{

/***/ 3268:
/*!****************************************************************************!*\
  !*** ./src/app/member/barcode/barcode-used/barcode-used-routing.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BarcodeUsedPageRoutingModule": () => (/* binding */ BarcodeUsedPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _barcode_used_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./barcode-used.page */ 9283);




const routes = [
    {
        path: '',
        component: _barcode_used_page__WEBPACK_IMPORTED_MODULE_0__.BarcodeUsedPage
    }
];
let BarcodeUsedPageRoutingModule = class BarcodeUsedPageRoutingModule {
};
BarcodeUsedPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], BarcodeUsedPageRoutingModule);



/***/ }),

/***/ 9470:
/*!********************************************************************!*\
  !*** ./src/app/member/barcode/barcode-used/barcode-used.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BarcodeUsedPageModule": () => (/* binding */ BarcodeUsedPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _barcode_used_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./barcode-used-routing.module */ 3268);
/* harmony import */ var _barcode_used_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./barcode-used.page */ 9283);







let BarcodeUsedPageModule = class BarcodeUsedPageModule {
};
BarcodeUsedPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _barcode_used_routing_module__WEBPACK_IMPORTED_MODULE_0__.BarcodeUsedPageRoutingModule
        ],
        declarations: [_barcode_used_page__WEBPACK_IMPORTED_MODULE_1__.BarcodeUsedPage]
    })
], BarcodeUsedPageModule);



/***/ }),

/***/ 9283:
/*!******************************************************************!*\
  !*** ./src/app/member/barcode/barcode-used/barcode-used.page.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BarcodeUsedPage": () => (/* binding */ BarcodeUsedPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_barcode_used_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./barcode-used.page.html */ 7882);
/* harmony import */ var _barcode_used_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./barcode-used.page.scss */ 5541);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);





let BarcodeUsedPage = class BarcodeUsedPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    member() {
        this.router.navigate(['player-tabs/member']);
    }
};
BarcodeUsedPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
BarcodeUsedPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-barcode-used',
        template: _raw_loader_barcode_used_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_barcode_used_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], BarcodeUsedPage);



/***/ }),

/***/ 5541:
/*!********************************************************************!*\
  !*** ./src/app/member/barcode/barcode-used/barcode-used.page.scss ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".back {\n  position: absolute;\n  top: 70px;\n  font-size: 50px;\n}\n\nh1 {\n  position: absolute;\n  top: 10%;\n  left: 50%;\n  font-weight: bolder;\n  font-size: 24px;\n  transform: translate(-50%, -50%);\n  color: white;\n}\n\nh3 {\n  position: absolute;\n  left: 6%;\n  top: 15%;\n  padding-right: 150px;\n  padding-left: 150px;\n  padding-bottom: 80px;\n  padding-top: 80px;\n  background-color: #FEDCD2;\n  border-radius: 8px;\n}\n\nh3 h2 {\n  background-color: white;\n  position: absolute;\n  font-size: 16px;\n  top: 5%;\n  left: 15%;\n  border-style: solid;\n  border-color: white;\n  border-radius: 8px;\n  padding-right: 80px;\n  padding-left: 80px;\n  padding-bottom: 10px;\n  padding-top: 10px;\n  color: orange;\n  font-weight: bolder;\n}\n\nh3 h4 {\n  background-color: white;\n  position: absolute;\n  font-size: 16px;\n  top: 50%;\n  left: 15%;\n  border-style: solid;\n  border-color: white;\n  border-radius: 8px;\n  padding-right: 20px;\n  padding-left: 20px;\n  padding-bottom: 10px;\n  padding-top: 10px;\n  color: white;\n  background-color: #C4C4C4;\n  border-color: #C4C4C4;\n}\n\nh3 h5 {\n  background-color: white;\n  position: absolute;\n  font-size: 16px;\n  top: 50%;\n  left: 55%;\n  border-style: solid;\n  border-color: white;\n  border-radius: 8px;\n  padding-right: 20px;\n  padding-left: 20px;\n  padding-bottom: 10px;\n  padding-top: 10px;\n  color: white;\n  background-color: #C4C4C4;\n  border-color: #C4C4C4;\n}\n\nh6 {\n  position: absolute;\n  font-size: 16px;\n  top: 41%;\n  left: 10%;\n  color: white;\n}\n\n.ID {\n  top: 47%;\n  left: 10%;\n  position: absolute;\n  padding-right: 150px;\n  padding-left: 150px;\n  padding-bottom: 30px;\n  padding-top: 30px;\n}\n\n.product {\n  top: 47%;\n  left: 10%;\n  position: absolute;\n  padding-right: 150px;\n  padding-left: 150px;\n  padding-bottom: 30px;\n  padding-top: 30px;\n}\n\n.d {\n  top: 62%;\n  left: 10%;\n  position: absolute;\n  background-color: white;\n  padding-right: 150px;\n  padding-left: 150px;\n  padding-bottom: 30px;\n  padding-top: 30px;\n}\n\n.php {\n  position: absolute;\n  top: 47%;\n  left: 80px;\n  width: 230px;\n}\n\n.aaaa {\n  position: absolute;\n  top: 100%;\n  right: 10px;\n  width: 300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhcmNvZGUtdXNlZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBQ0E7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0NBQUE7RUFDQSxZQUFBO0FBRUo7O0FBQ0E7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FBRUo7O0FBREk7RUFDSSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFHUjs7QUFESTtFQUNJLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FBR1I7O0FBREk7RUFDSSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBQUdSOztBQUFBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0FBR0o7O0FBREE7RUFDSSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7QUFJSjs7QUFGQTtFQUNJLFFBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtBQUtKOztBQUhBO0VBQ0ksUUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7QUFNSjs7QUFKQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FBT0o7O0FBTEE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQVFKIiwiZmlsZSI6ImJhcmNvZGUtdXNlZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja3tcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgdG9wOiA3MHB4O1xyXG4gICAgZm9udC1zaXplOiA1MHB4O1xyXG59XHJcbmgxe1xyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICB0b3A6IDEwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5oM3tcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDYlO1xyXG4gICAgdG9wOiAxNSU7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNTBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTUwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogODBweDtcclxuICAgIHBhZGRpbmctdG9wOiA4MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZFRENEMjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGgye1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgdG9wOiA1JTtcclxuICAgICAgICBsZWZ0OiAxNSU7XHJcbiAgICAgICAgYm9yZGVyLXN0eWxlOnNvbGlkIDtcclxuICAgICAgICBib3JkZXItY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA4MHB4O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogODBweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgICAgICBjb2xvcjogb3JhbmdlO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OmJvbGRlcjtcclxuICAgIH1cclxuICAgIGg0e1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgbGVmdDogMTUlO1xyXG4gICAgICAgIGJvcmRlci1zdHlsZTpzb2xpZCA7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNDNEM0QzQ7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjQzRDNEM0O1xyXG4gICAgfVxyXG4gICAgaDV7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICBsZWZ0OiA1NSU7XHJcbiAgICAgICAgYm9yZGVyLXN0eWxlOnNvbGlkIDtcclxuICAgICAgICBib3JkZXItY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0M0QzRDNDtcclxuICAgICAgICBib3JkZXItY29sb3I6ICNDNEM0QzQ7XHJcbiAgICB9XHJcbn1cclxuaDZ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB0b3A6IDQxJTtcclxuICAgIGxlZnQ6IDEwJTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4uSUR7XHJcbiAgICB0b3A6IDQ3JTtcclxuICAgIGxlZnQ6IDEwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE1MHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbn1cclxuLnByb2R1Y3R7XHJcbiAgICB0b3A6IDQ3JTtcclxuICAgIGxlZnQ6IDEwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE1MHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbn1cclxuLmR7XHJcbiAgICB0b3A6IDYyJTtcclxuICAgIGxlZnQ6IDEwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZy1yaWdodDogMTUwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1MHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcclxufVxyXG4ucGhwe1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA0NyU7XHJcbiAgICBsZWZ0OiA4MHB4O1xyXG4gICAgd2lkdGg6IDIzMHB4O1xyXG59XHJcbi5hYWFhe1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxMDAlO1xyXG4gICAgcmlnaHQ6IDEwcHg7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbn0iXX0= */");

/***/ }),

/***/ 7882:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/member/barcode/barcode-used/barcode-used.page.html ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content color=\"front\">\r\n  <ion-router-outlet class=\"productList\" style=\"overflow-y: scroll;\">\r\n\r\n    <ion-header>\r\n      <ion-toolbar color=\"bar\">\r\n        <header>\r\n          <ion-tab-button class=\"atHeader\" tab=\"home\">\r\n            <a class=\"logo\"><img src=\"../assets/icon/logo.png\" alt=\"logo\"></a>\r\n          </ion-tab-button>\r\n\r\n          <ion-tab-button class=\"atHeader\" tab=\"login\">\r\n            <a class=\"Login\">\r\n              <p class=\"center\">登入</p>\r\n            </a>\r\n          </ion-tab-button>\r\n\r\n        </header>\r\n\r\n      </ion-toolbar>\r\n    </ion-header>\r\n    <!-- ------------------------------ -->\r\n    <button class=\"back\">\r\n      <ion-icon (click)=\"member()\" name=\"arrow-undo-outline\"></ion-icon>\r\n    </button>\r\n    <h1>\r\n      持有條碼\r\n    </h1>\r\n\r\n    <h3>\r\n      <h2>已使用</h2>\r\n      <button (click)=\"used()\">\r\n        <h4>未使用 </h4>\r\n      </button>\r\n      <button (click)=\"expired()\">\r\n        <h5>已過期</h5>\r\n      </button>\r\n    </h3>\r\n    <h6>未使用</h6>\r\n\r\n    <!DOCTYPE html>\r\n\r\n    <body class=\"php\">\r\n\r\n      <ion-button (click)=\"get_http()\" color=\"danger\">get_http</ion-button>\r\n      <ion-button (click)=\"save_data()\" color=\"danger\">save_data</ion-button>\r\n      <ion-list *ngFor=\"let barcode of httpService.barcodes\">\r\n        <img src=\"{{barcode.image}}\">\r\n      </ion-list>\r\n    </body>\r\n      <!-- ------------------------------ -->\r\n      <div class=\"aaaa\">\r\n      <!DOCTYPE html>\r\n      <html lang=\"en\">\r\n      \r\n      <head>\r\n          <meta charset=\"UTF-8\">\r\n          <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n          <title>Barcode Generator</title>\r\n      </head>\r\n          <div class=\"main\">\r\n              <p>Barcode</p>\r\n              <input type=\"hidden\" class=\"input\" [(ngModel)]=\"id\" placeholder=\"Enter Value\" maxlength=\"10\" >\r\n              <ion-button class=\"submit\" (click)=\"barcodeGen()\">Generate</ion-button>\r\n              <svg id=\"barcode\"></svg>\r\n          </div>\r\n      \r\n      </html>\r\n      </div>\r\n      <!-- ------------------------------ -->\r\n    \r\n\r\n\r\n  </ion-router-outlet>\r\n</ion-content>\r\n\r\n<!-- <form method=\"post\" action=\"barcode.php\"> \r\n Type text :<input (click)=\"submit\" type=\"text\" name=\"generate\"><br>\r\n <input type=\"submit\" name=\"submit\" value=\"submit\">  -->\r\n<!-- </form> -->\r\n<!-- <div>{{title}}</div> -->");

/***/ })

}]);
//# sourceMappingURL=src_app_member_barcode_barcode-used_barcode-used_module_ts.js.map
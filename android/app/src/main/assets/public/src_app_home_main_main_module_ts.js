(self["webpackChunkplayer"] = self["webpackChunkplayer"] || []).push([["src_app_home_main_main_module_ts"],{

/***/ 4443:
/*!**************************************************!*\
  !*** ./src/app/home/main/main-routing.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainPageRoutingModule": () => (/* binding */ MainPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _main_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.page */ 8835);




const routes = [
    {
        path: '',
        component: _main_page__WEBPACK_IMPORTED_MODULE_0__.MainPage
    }
];
let MainPageRoutingModule = class MainPageRoutingModule {
};
MainPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MainPageRoutingModule);



/***/ }),

/***/ 1236:
/*!******************************************!*\
  !*** ./src/app/home/main/main.module.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainPageModule": () => (/* binding */ MainPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _main_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-routing.module */ 4443);
/* harmony import */ var _main_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.page */ 8835);







let MainPageModule = class MainPageModule {
};
MainPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _main_routing_module__WEBPACK_IMPORTED_MODULE_0__.MainPageRoutingModule
        ],
        declarations: [_main_page__WEBPACK_IMPORTED_MODULE_1__.MainPage]
    })
], MainPageModule);



/***/ }),

/***/ 8835:
/*!****************************************!*\
  !*** ./src/app/home/main/main.page.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainPage": () => (/* binding */ MainPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_main_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./main.page.html */ 3452);
/* harmony import */ var _main_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.page.scss */ 4163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);





let MainPage = class MainPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    order() {
        this.router.navigate(['/player-tabs/order']);
    }
};
MainPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
MainPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-main',
        template: _raw_loader_main_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_main_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MainPage);



/***/ }),

/***/ 4163:
/*!******************************************!*\
  !*** ./src/app/home/main/main.page.scss ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("@charset \"UTF-8\";\n#banner {\n  position: relative;\n  color: white;\n}\n#banner img {\n  width: 375px;\n  height: 160px;\n  object-fit: cover;\n}\n#banner h2 {\n  top: 30%;\n  left: 50%;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  white-space: nowrap;\n  font-weight: bold;\n}\n#banner h3 {\n  top: 60%;\n  left: 50%;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  white-space: nowrap;\n  font-weight: bold;\n  border-style: solid;\n  padding: 10px;\n}\nh1 {\n  color: black;\n  font-weight: bolder;\n  text-align: left;\n  position: relative;\n}\n.dot {\n  top: 5%;\n  position: relative;\n  height: 25px;\n  width: 25px;\n  background-color: #FFC107;\n  border-radius: 50%;\n  display: inline-block;\n}\nul {\n  display: flex;\n  overflow-X: scroll;\n  max-width: 100%;\n  border-radius: 10px;\n  padding-left: 0;\n}\nul img {\n  object-fit: cover;\n  margin-right: 3%;\n  border-radius: 8px;\n}\nh4 {\n  position: relative;\n  top: 0%;\n  border-style: solid;\n  font-size: 16px;\n  padding: 15px;\n  color: white;\n  /* 文字顏色#666 */\n  background-color: orange;\n  /* 底色#dfefff */\n  object-fit: cover;\n  margin: 0em;\n  border-radius: 8px;\n}\nh5 {\n  display: flex;\n  background-color: #4167B2;\n  margin: 0em 0px;\n}\nh5 h6 {\n  position: relative;\n  font-weight: bolder;\n  font-size: larger;\n  color: white;\n  margin-top: 10px;\n  margin-left: 5%;\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\nh5 a {\n  position: absolute;\n  font-size: 16px;\n  font-weight: bold;\n  border-color: white;\n  border-style: solid;\n  background-color: white;\n  color: #000;\n  top: 948px;\n  left: 35%;\n  border-radius: 2%;\n  font-weight: bolder;\n  padding-left: 5px;\n  padding-right: 20px;\n  padding-top: 4px;\n  padding-bottom: 4px;\n}\nb {\n  font-size: 20px;\n}\np {\n  margin-left: 1ch;\n}\n.order {\n  position: fixed;\n  right: 30px;\n  bottom: 10px;\n  width: 300px;\n  height: 45px;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtBQUVKO0FBREk7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FBR1I7QUFESTtFQUNJLFFBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFHUjtBQURJO0VBQ0ksUUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQUdSO0FBQ0E7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBRUo7QUFFQTtFQUNJLE9BQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FBQ0o7QUFHQTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFBSjtBQUNJO0VBQ0csaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBQ1A7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQWMsYUFBQTtFQUNkLHdCQUFBO0VBQTBCLGNBQUE7RUFDMUIsaUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFHSjtBQURBO0VBQ0ksYUFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQUlKO0FBRkk7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUlSO0FBRkk7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUlSO0FBREE7RUFDSSxlQUFBO0FBSUo7QUFGQTtFQUNJLGdCQUFBO0FBS0o7QUFGQTtFQUVJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFJSiIsImZpbGUiOiJtYWluLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbiNiYW5uZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbiNiYW5uZXIgaW1nIHtcbiAgd2lkdGg6IDM3NXB4O1xuICBoZWlnaHQ6IDE2MHB4O1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cbiNiYW5uZXIgaDIge1xuICB0b3A6IDMwJTtcbiAgbGVmdDogNTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbiNiYW5uZXIgaDMge1xuICB0b3A6IDYwJTtcbiAgbGVmdDogNTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuaDEge1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmRvdCB7XG4gIHRvcDogNSU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAyNXB4O1xuICB3aWR0aDogMjVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQzEwNztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbnVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgb3ZlcmZsb3ctWDogc2Nyb2xsO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBhZGRpbmctbGVmdDogMDtcbn1cbnVsIGltZyB7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBtYXJnaW4tcmlnaHQ6IDMlO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG5cbmg0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDAlO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgLyog5paH5a2X6aGP6ImyIzY2NiAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XG4gIC8qIOW6leiJsiNkZmVmZmYgKi9cbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIG1hcmdpbjogMGVtO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG5cbmg1IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQxNjdCMjtcbiAgbWFyZ2luOiAwZW0gMHB4O1xufVxuaDUgaDYge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbiAgcGFkZGluZy10b3A6IDVweDtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbn1cbmg1IGEge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJvcmRlci1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogIzAwMDtcbiAgdG9wOiA5NDhweDtcbiAgbGVmdDogMzUlO1xuICBib3JkZXItcmFkaXVzOiAyJTtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIHBhZGRpbmctdG9wOiA0cHg7XG4gIHBhZGRpbmctYm90dG9tOiA0cHg7XG59XG5cbmIge1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbnAge1xuICBtYXJnaW4tbGVmdDogMWNoO1xufVxuXG4ub3JkZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHJpZ2h0OiAzMHB4O1xuICBib3R0b206IDEwcHg7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiA0NXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn0iXX0= */");

/***/ }),

/***/ 3452:
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/main/main.page.html ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content color=\"front\"> \r\n  <ion-header>\r\n    <ion-toolbar color=\"bar\">\r\n      <header>\r\n        <ion-tab-button class=\"atHeader\" tab=\"home\">\r\n          <a class=\"logo\"><img src=\"../assets/icon/logo.png\" alt=\"logo\"></a>\r\n        </ion-tab-button>\r\n  \r\n        <ion-tab-button class=\"atHeader\" tab=\"login\">\r\n          <a class=\"Login\">\r\n            <p class=\"center\">登入</p>\r\n          </a>\r\n        </ion-tab-button>\r\n  \r\n      </header>\r\n  \r\n    </ion-toolbar>\r\n  </ion-header>\r\n  \r\n<div id=\"banner\">\r\n  <img class=\"123\" src=\"../../../assets/banner.jpg\" >\r\n  <h2>\r\n    美味、熱誠、舒適\r\n  </h2>\r\n  <h3>\r\n    咖哩x丼飯專賣\r\n  </h3>\r\n</div>\r\n  \r\n\r\n  <span class=\"dot\"></span>\r\n  <h1> &nbsp;新菜色</h1>\r\n  \r\n\r\n  <ul>\r\n    <img src=\"../../../assets/beef_curry.jpg\" width=\"200\" height=\"200\">\r\n    <img src=\"../../../assets/fried_chiken_curry.jpg\"width=\"200\" height=\"200\">\r\n    <img src=\"../../../assets/fried_chiken_don.jpg\" width=\"200\" height=\"200\">\r\n  </ul>\r\n\r\n<span class=\"dot\"></span>\r\n<h1> &nbsp;最新消息</h1>\r\n<h4 class=\"text1\">&nbsp;&nbsp;使用小蜜蜂外送打九折（最多折100)</h4>\r\n<h4 class=\"text2\">&nbsp;&nbsp;8/7（六）公休一天 </h4>\r\n<h4 class=\"text3\">&nbsp;&nbsp;5/19即日起內用會分流,  梅花座等配套措施</h4>\r\n<span class=\"dot\"></span>\r\n<h1> &nbsp;店家資訊</h1>\r\n\r\n<h5 onclick=\"self.location.href= 'https://www.facebook.com/%E7%8E%A9%E5%91%B3%E7%94%9F%E6%B4%BB-%E5%92%96%E5%93%A9x%E4%B8%BC%E9%A3%AF%E5%B0%88%E8%B3%A3-1882151398510674'\">\r\n<h6>Facebook</h6> \r\n<a>玩味生活&nbsp;&nbsp;咖哩x丼飯專賣</a>\r\n</h5>\r\n<br>\r\n<b>\r\n  &nbsp;&nbsp;&nbsp;電話:03-699-2598\r\n<br>\r\n&nbsp;&nbsp;&nbsp;營業時間：11:00~14:30 / 17:00~20:30\r\n<br>\r\n&nbsp;&nbsp;&nbsp;地址：新竹縣湖口鄉民族街100號\r\n</b>\r\n<br>\r\n<br>\r\n<p>\r\n<button >\r\n<img src=\"../../../assets/icon/map.png\" onclick=\"self.location.href= 'https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.google.com%2Fmaps%2Fdir%2F%3Fapi%3D1%26destination%3D24.90265%252C121.04548%26fbclid%3DIwAR3JD9XNjpR_UlmEhoS-yDGdv6pKPJwD-RtEW19f_GcDxuJdvSi5PdW4rjs&h=AT2Q8ScTTlnTOpm2ZlCUEsin3IiPeBAX6Jdj2ItC-Aweim9ns_mHQFM1vPDaV9LIwEj3U6kQjqSia6_Mi-04iWb8MIWpx7Ki2Uax_3SZZVp6VV9Ty0WO1rRqGMmpo4ym1wAI-ZIHkXUahg2Oi7LUDw'\"  >\r\n</button>\r\n</p>\r\n<br>\r\n<br>\r\n<br>\r\n<img src=\"../../../assets/Mask Group.png\">\r\n\r\n<ion-button  (click)=\"order()\" class=\"order\" color=\"warning\">開始點餐</ion-button>\r\n\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_home_main_main_module_ts.js.map
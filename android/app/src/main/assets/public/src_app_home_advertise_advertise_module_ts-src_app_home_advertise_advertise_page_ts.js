(self["webpackChunkplayer"] = self["webpackChunkplayer"] || []).push([["src_app_home_advertise_advertise_module_ts-src_app_home_advertise_advertise_page_ts"],{

/***/ 1945:
/*!************************************************************!*\
  !*** ./src/app/home/advertise/advertise-routing.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdvertisePageRoutingModule": () => (/* binding */ AdvertisePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _advertise_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./advertise.page */ 5740);




const routes = [
    {
        path: '',
        component: _advertise_page__WEBPACK_IMPORTED_MODULE_0__.AdvertisePage,
        children: [
            {
                path: '',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_main_main_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../main/main.module */ 1236)).then(m => m.MainPageModule)
            }
        ]
    }
];
let AdvertisePageRoutingModule = class AdvertisePageRoutingModule {
};
AdvertisePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AdvertisePageRoutingModule);



/***/ }),

/***/ 7887:
/*!****************************************************!*\
  !*** ./src/app/home/advertise/advertise.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdvertisePageModule": () => (/* binding */ AdvertisePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _advertise_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./advertise-routing.module */ 1945);
/* harmony import */ var _advertise_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./advertise.page */ 5740);







let AdvertisePageModule = class AdvertisePageModule {
};
AdvertisePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _advertise_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdvertisePageRoutingModule
        ],
        declarations: [_advertise_page__WEBPACK_IMPORTED_MODULE_1__.AdvertisePage]
    })
], AdvertisePageModule);



/***/ }),

/***/ 5740:
/*!**************************************************!*\
  !*** ./src/app/home/advertise/advertise.page.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdvertisePage": () => (/* binding */ AdvertisePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_advertise_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./advertise.page.html */ 4816);
/* harmony import */ var _advertise_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./advertise.page.scss */ 8138);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _advertise_advertise_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../advertise/advertise.module */ 7887);






let AdvertisePage = class AdvertisePage {
    constructor(router, AdvertisePageModule) {
        this.router = router;
        this.AdvertisePageModule = AdvertisePageModule;
    }
    ngOnInit() {
    }
    advertise() {
        this.router.navigate(['/player-tabs/advertise']);
    }
    home() {
        this.router.navigate(['/player-tabs/home']);
    }
    close() {
        this.router.navigate(['/player-tabs/main']);
    }
};
AdvertisePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _advertise_advertise_module__WEBPACK_IMPORTED_MODULE_2__.AdvertisePageModule }
];
AdvertisePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-advertise',
        template: _raw_loader_advertise_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_advertise_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AdvertisePage);



/***/ }),

/***/ 8138:
/*!****************************************************!*\
  !*** ./src/app/home/advertise/advertise.page.scss ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".text1 {\n  color: red;\n  font-size: large;\n  font-weight: bolder;\n}\n\n.text2 {\n  color: black;\n  font-size: large;\n  font-weight: 900px;\n}\n\n.close {\n  float: right;\n}\n\na {\n  position: relative;\n  left: 30%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkdmVydGlzZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFDQTtFQUNJLFlBQUE7QUFFSjs7QUFBQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtBQUdKIiwiZmlsZSI6ImFkdmVydGlzZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dDF7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgIGZvbnQtd2VpZ2h0OmJvbGRlcjtcclxufVxyXG5cclxuLnRleHQye1xyXG4gICAgY29sb3I6YmxhY2s7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgZm9udC13ZWlnaHQ6OTAwcHg7XHJcbn1cclxuLmNsb3Nle1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcbmF7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OiAzMCU7XHJcbn0iXX0= */");

/***/ }),

/***/ 4816:
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/advertise/advertise.page.html ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div></div>\r\n<div></div>\r\n<div></div>\r\n<div></div>\r\n\r\n<ion-card>\r\n\r\n  <ion-button class=\"close\" (click)=\"close()\" icon-only shape=\"round\" color=\"white\" fill=\"clear\">\r\n    <ion-icon slot=\"icon-only\" name=\"close-circle\" color=\"warning\"></ion-icon>\r\n  </ion-button>\r\n\r\n  <img class=\"shape-ex1\" src=\"../../assets/fried_plate.jpg\" height=\"200\" width=\"400\">\r\n\r\n  \r\n\r\n  <ion-card-content class=\"text1\">\r\n    疫情限定 ! 振興消費85折 !\r\n  </ion-card-content>\r\n\r\n  <ion-card-content class=\"text2\">\r\n    活動期間\r\n    <br>\r\n    2021/06/01~2021/06/30\r\n  </ion-card-content>\r\n  \r\n  <ion-card-content class=\"button\">\r\n    <a>\r\n\r\n    <svg  (click)=\"home()\" height=\"50\" width=\"50\">\r\n      <circle cx=\"25\" cy=\"25\" r=\"10\" stroke=\"orange\" stroke-width=\"3\" fill=\"white\" />\r\n    </svg>\r\n\r\n    <svg  (click)=\"advertise()\" height=\"50\" width=\"50\">\r\n      <circle cx=\"25\" cy=\"25\" r=\"10\"  fill=\"orange\" />\r\n    </svg>\r\n    </a>\r\n\r\n\r\n  </ion-card-content>\r\n</ion-card>\r\n\r\n\r\n\r\n<div></div>\r\n<div></div>\r\n<div></div>\r\n<div></div>");

/***/ })

}]);
//# sourceMappingURL=src_app_home_advertise_advertise_module_ts-src_app_home_advertise_advertise_page_ts.js.map
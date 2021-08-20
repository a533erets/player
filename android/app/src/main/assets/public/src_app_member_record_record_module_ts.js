(self["webpackChunkplayer"] = self["webpackChunkplayer"] || []).push([["src_app_member_record_record_module_ts"],{

/***/ 8133:
/*!********************************************************!*\
  !*** ./src/app/member/record/record-routing.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecordPageRoutingModule": () => (/* binding */ RecordPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _record_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./record.page */ 6520);




const routes = [
    {
        path: '',
        component: _record_page__WEBPACK_IMPORTED_MODULE_0__.RecordPage
    }
];
let RecordPageRoutingModule = class RecordPageRoutingModule {
};
RecordPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RecordPageRoutingModule);



/***/ }),

/***/ 8023:
/*!************************************************!*\
  !*** ./src/app/member/record/record.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecordPageModule": () => (/* binding */ RecordPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _record_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./record-routing.module */ 8133);
/* harmony import */ var _record_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./record.page */ 6520);







let RecordPageModule = class RecordPageModule {
};
RecordPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _record_routing_module__WEBPACK_IMPORTED_MODULE_0__.RecordPageRoutingModule
        ],
        declarations: [_record_page__WEBPACK_IMPORTED_MODULE_1__.RecordPage]
    })
], RecordPageModule);



/***/ }),

/***/ 6520:
/*!**********************************************!*\
  !*** ./src/app/member/record/record.page.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecordPage": () => (/* binding */ RecordPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_record_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./record.page.html */ 9520);
/* harmony import */ var _record_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./record.page.scss */ 8244);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);





let RecordPage = class RecordPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    member() {
        this.router.navigate(['player-tabs/member']);
    }
};
RecordPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
RecordPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-record',
        template: _raw_loader_record_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_record_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], RecordPage);



/***/ }),

/***/ 8244:
/*!************************************************!*\
  !*** ./src/app/member/record/record.page.scss ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".b {\n  background-color: #fa744a;\n}\n\n.back {\n  position: absolute;\n  top: 70px;\n  font-size: 50px;\n}\n\nh1 {\n  position: absolute;\n  top: 10%;\n  left: 50%;\n  font-weight: bolder;\n  font-size: 24px;\n  transform: translate(-50%, -50%);\n}\n\nh2 {\n  position: absolute;\n  font-weight: bold;\n  font-size: 20px;\n  top: 16%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.calendar {\n  position: absolute;\n  transform: translate(-50%, -50%);\n  top: 18%;\n  left: 75%;\n  font-size: 30px;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY29yZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtBQUNKOztBQUNBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtBQUVKOztBQUFBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0FBR0o7O0FBQUE7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7QUFHSjs7QUFBQTtFQUNJLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBR0oiLCJmaWxlIjoicmVjb3JkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ie1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhNzQ0YTtcclxuICB9XHJcbi5iYWNre1xyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICB0b3A6IDcwcHg7XHJcbiAgICBmb250LXNpemU6IDUwcHg7XHJcbn1cclxuaDF7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIHRvcDogMTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XHJcbiAgICBcclxufVxyXG5oMntcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB0b3A6IDE2JTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XHJcbiAgICBcclxufVxyXG4uY2FsZW5kYXJ7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XHJcbiAgICB0b3A6IDE4JTtcclxuICAgIGxlZnQ6IDc1JTtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufSJdfQ== */");

/***/ }),

/***/ 9520:
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/member/record/record.page.html ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<b>\r\n<ion-header>\r\n    <ion-toolbar color=\"bar\">\r\n      <header>\r\n        <ion-tab-button class=\"atHeader\" tab=\"home\">\r\n          <a class=\"logo\"><img src=\"../assets/icon/logo.png\" alt=\"logo\"></a>\r\n        </ion-tab-button>\r\n  \r\n        <ion-tab-button class=\"atHeader\" tab=\"login\">\r\n          <a class=\"Login\">\r\n            <p class=\"center\">登入</p>\r\n          </a>\r\n        </ion-tab-button>\r\n      </header>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n<!-- ------------------------------ -->\r\n\r\n<button class=\"back\" >\r\n        <ion-icon (click)=\"member()\" name=\"arrow-undo-outline\"></ion-icon>\r\n</button>\r\n    <h1 >\r\n        個人點餐紀錄\r\n    </h1>\r\n        <br>\r\n        <h2>日期:  6月30日</h2>\r\n    <ion-icon class=\"calendar\" name=\"calendar-clear-outline\"></ion-icon> \r\n  \r\n<div></div>\r\n<div></div>\r\n<div></div>\r\n<div></div>\r\n<div></div>\r\n\r\n</b>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_member_record_record_module_ts.js.map
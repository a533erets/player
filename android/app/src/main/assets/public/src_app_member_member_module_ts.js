(self["webpackChunkplayer"] = self["webpackChunkplayer"] || []).push([["src_app_member_member_module_ts"],{

/***/ 5058:
/*!*************************************************!*\
  !*** ./src/app/member/member-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MemberPageRoutingModule": () => (/* binding */ MemberPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _member_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./member.page */ 6703);




const routes = [
    {
        path: '',
        component: _member_page__WEBPACK_IMPORTED_MODULE_0__.MemberPage
    },
    {
        path: 'record',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_member_record_record_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./record/record.module */ 8023)).then(m => m.RecordPageModule)
    },
    {
        path: 'barcode',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_member_barcode_barcode_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./barcode/barcode.module */ 3424)).then(m => m.BarcodePageModule)
    }
];
let MemberPageRoutingModule = class MemberPageRoutingModule {
};
MemberPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MemberPageRoutingModule);



/***/ }),

/***/ 3717:
/*!*****************************************!*\
  !*** ./src/app/member/member.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MemberPageModule": () => (/* binding */ MemberPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _member_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./member-routing.module */ 5058);
/* harmony import */ var _member_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./member.page */ 6703);







let MemberPageModule = class MemberPageModule {
};
MemberPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _member_routing_module__WEBPACK_IMPORTED_MODULE_0__.MemberPageRoutingModule
        ],
        declarations: [_member_page__WEBPACK_IMPORTED_MODULE_1__.MemberPage]
    })
], MemberPageModule);



/***/ }),

/***/ 6703:
/*!***************************************!*\
  !*** ./src/app/member/member.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MemberPage": () => (/* binding */ MemberPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_member_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./member.page.html */ 5561);
/* harmony import */ var _member_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./member.page.scss */ 8239);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 1841);





let MemberPage = class MemberPage {
    constructor(http) {
        this.http = http;
        this.members = [];
    }
    ngOnInit() {
        this.http.get('http://localhost/foodplayer/src/app/php/getMember.php')
            .subscribe(data => {
            console.log(data);
            for (let i = 0; i < Object.keys(data).length; i++) {
                this.members.push(data[i]);
            }
        });
    }
};
MemberPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient }
];
MemberPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-member',
        template: _raw_loader_member_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_member_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MemberPage);



/***/ }),

/***/ 8239:
/*!*****************************************!*\
  !*** ./src/app/member/member.page.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".form-inline {\n  align-items: center;\n  text-align: center;\n  background-color: #fa744a;\n}\n\n.login {\n  background-color: #01a0c6;\n  align-items: center;\n  text-align: center;\n  padding: 0.7em;\n  width: 12em;\n  margin: 0.8rem;\n  border-radius: 4px;\n  font-size: 14pt;\n  color: white;\n}\n\n.butGoogleFb {\n  padding: 0.5em;\n  width: 15em;\n  height: 2em;\n  margin: 0.8em;\n  background-color: white;\n  border-radius: 4px;\n  color: #fa744a;\n  font-size: 14pt;\n}\n\ninput {\n  width: 70vw;\n  height: 10vw;\n  font-size: 14pt;\n}\n\ninput:focus {\n  border: 1px solid #01a0c6;\n}\n\n.forgetSignIn {\n  background-color: #fa744a;\n  color: white;\n  font-size: 12pt;\n}\n\nion-router-outlet {\n  background-color: #fa744a;\n}\n\n#h3 {\n  font-size: 24pt;\n  color: white;\n  text-align: center;\n  padding: 3rem;\n}\n\nlabel {\n  font-size: 18pt;\n}\n\n.iconify {\n  background-color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbWJlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFDRjs7QUFPQTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUdBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFORjs7QUFTQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFORjs7QUFRQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUxGOztBQU1FO0VBQ0UseUJBQUE7QUFKSjs7QUFPQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFKRjs7QUFNQTtFQUNFLHlCQUFBO0FBSEY7O0FBS0E7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQUZGOztBQUlBO0VBQ0UsZUFBQTtBQURGOztBQUdBO0VBQ0UsdUJBQUE7QUFBRiIsImZpbGUiOiJtZW1iZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0taW5saW5lIHtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmE3NDRhO1xyXG59XHJcblxyXG4vLyBidXR0b24ge1xyXG4vLyAgIHBhZGRpbmc6IDJlbTtcclxuLy8gICB3aWR0aDogMTJlbTtcclxuLy8gICBoZWlnaHQ6IDNlbTtcclxuLy8gfVxyXG4ubG9naW4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMWEwYzY7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMC43ZW07XHJcbiAgd2lkdGg6IDEyZW07XHJcbiAgbWFyZ2luOiAwLjhyZW07XHJcbiAgLy8gICBoZWlnaHQ6IDJweDtcclxuXHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGZvbnQtc2l6ZTogMTRwdDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5idXRHb29nbGVGYiB7XHJcbiAgcGFkZGluZzogMC41ZW07XHJcbiAgd2lkdGg6IDE1ZW07XHJcbiAgaGVpZ2h0OiAyZW07XHJcbiAgbWFyZ2luOiAwLjhlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgY29sb3I6ICNmYTc0NGE7XHJcbiAgZm9udC1zaXplOiAxNHB0O1xyXG59XHJcbmlucHV0IHtcclxuICB3aWR0aDogNzB2dztcclxuICBoZWlnaHQ6IDEwdnc7XHJcbiAgZm9udC1zaXplOiAxNHB0O1xyXG4gICY6Zm9jdXN7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDFhMGM2O1xyXG59XHJcbn1cclxuLmZvcmdldFNpZ25JbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhNzQ0YTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAxMnB0O1xyXG59XHJcbmlvbi1yb3V0ZXItb3V0bGV0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmE3NDRhO1xyXG59XHJcbiNoMyB7XHJcbiAgZm9udC1zaXplOiAyNHB0O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogM3JlbTtcclxufVxyXG5sYWJlbCB7XHJcbiAgZm9udC1zaXplOiAxOHB0O1xyXG59XHJcbi5pY29uaWZ5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ 5561:
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/member/member.page.html ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n\r\n  <ion-router-outlet class=\"back\">\r\n    <ion-header>\r\n      <ion-toolbar color=\"bar\">\r\n        <header>\r\n          <ion-tab-button class=\"atHeader\" tab=\"home\">\r\n            <a class=\"logo\"><img src=\"../assets/icon/logo.png\" alt=\"logo\"></a>\r\n          </ion-tab-button>\r\n\r\n          <ion-tab-button class=\"atHeader\" tab=\"login\">\r\n            <a class=\"Login\">\r\n              <p class=\"center\">登入</p>\r\n            </a>\r\n          </ion-tab-button>\r\n\r\n        </header>\r\n\r\n      </ion-toolbar>\r\n    </ion-header>\r\n    <!-- <h3 *ngFor=\"let member of members\">姓名：{{member.member_name}}</h3> -->\r\n    <h3 id=\"h3\" style=\"font-weight: bolder;\">登入</h3>\r\n    <form class=\"form-inline\">\r\n      <label for=\"account\">帳號：</label>\r\n      <input type=\"text\" class=\"form-control\" placeholder=\"您的帳號\" id=\"account\">\r\n      <br>\r\n      <br>\r\n      <label for=\"pwd\">密碼：</label>\r\n      <input type=\"password\" class=\"form-control\" placeholder=\"您的密碼\" id=\"pwd\">\r\n      <br><br>\r\n\r\n      <button type=\"submit\" class=\"login\">登入</button>\r\n      <br><br>\r\n      <button type=\"submit\" class=\"forgetSignIn\">忘記密碼?</button>\r\n      <button type=\"submit\" class=\"forgetSignIn\">申請帳號</button>\r\n      <br><br>\r\n\r\n      <div class=\"googleFb\">\r\n        <button class=\"butGoogleFb\"><span class=\"iconify\" data-icon=\"ic:sharp-facebook\"></span>使用Facebook帳號登入</button>\r\n        <br>\r\n        <button class=\"butGoogleFb\"><span class=\"iconify\"\r\n            data-icon=\"flat-color-icons:google\"></span>使用Google帳號登入</button>\r\n      </div>\r\n    </form>\r\n\r\n\r\n  </ion-router-outlet>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_member_member_module_ts.js.map
(self["webpackChunkplayer"] = self["webpackChunkplayer"] || []).push([["src_app_member-information_member-information_module_ts"],{

/***/ 557:
/*!*************************************************************************!*\
  !*** ./src/app/member-information/member-information-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MemberInformationPageRoutingModule": () => (/* binding */ MemberInformationPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _member_information_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./member-information.page */ 7505);




const routes = [
    {
        path: '',
        component: _member_information_page__WEBPACK_IMPORTED_MODULE_0__.MemberInformationPage
    }
];
let MemberInformationPageRoutingModule = class MemberInformationPageRoutingModule {
};
MemberInformationPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MemberInformationPageRoutingModule);



/***/ }),

/***/ 9637:
/*!*****************************************************************!*\
  !*** ./src/app/member-information/member-information.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MemberInformationPageModule": () => (/* binding */ MemberInformationPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _member_information_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./member-information-routing.module */ 557);
/* harmony import */ var _member_information_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./member-information.page */ 7505);







let MemberInformationPageModule = class MemberInformationPageModule {
};
MemberInformationPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _member_information_routing_module__WEBPACK_IMPORTED_MODULE_0__.MemberInformationPageRoutingModule
        ],
        declarations: [_member_information_page__WEBPACK_IMPORTED_MODULE_1__.MemberInformationPage]
    })
], MemberInformationPageModule);



/***/ }),

/***/ 7505:
/*!***************************************************************!*\
  !*** ./src/app/member-information/member-information.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MemberInformationPage": () => (/* binding */ MemberInformationPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_member_information_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./member-information.page.html */ 6011);
/* harmony import */ var _member_information_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./member-information.page.scss */ 1525);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);






let MemberInformationPage = class MemberInformationPage {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.members = [];
    }
    ngOnInit() {
        this.getMembers();
    }
    barcode() {
        this.router.navigate(['player-tabs/barcode']);
    }
    record() {
        this.router.navigate(['player-tabs/record']);
    }
    getMembers() {
        this.http.get('http://localhost/foodplayer/src/app/php/getMember.php')
            .subscribe(data => {
            console.log(data);
            for (let i = 0; i < Object.keys(data).length; i++) {
                this.members.push(data[i]);
            }
        });
    }
};
MemberInformationPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
MemberInformationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-member-information',
        template: _raw_loader_member_information_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_member_information_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MemberInformationPage);



/***/ }),

/***/ 1525:
/*!*****************************************************************!*\
  !*** ./src/app/member-information/member-information.page.scss ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-router-outlet {\n  background-color: #fa744a;\n}\n\n#button {\n  box-sizing: border-box;\n}\n\nbutton {\n  color: #fa744a;\n  font-size: 16pt;\n}\n\n#infor p {\n  margin: 0.8em;\n  font-weight: bolder;\n}\n\nh3 {\n  text-align: center;\n  font-size: 24pt;\n  color: white;\n  font-weight: bolder;\n}\n\n#infor {\n  margin: 1.3em;\n  height: 8.8em;\n  background-color: white;\n  border-radius: 8px;\n  opacity: 0.75;\n  font-size: 14pt;\n}\n\n.top,\n.med,\n.bot {\n  padding: 0.5em;\n  margin: 0.89em;\n  border-radius: 8px;\n  height: 5.8em;\n  width: 5.8em;\n}\n\n#button {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbWJlci1pbmZvcm1hdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtBQUNGOztBQUNBO0VBQ0Usc0JBQUE7QUFFRjs7QUFBQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FBR0Y7O0FBQUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFHSjs7QUFBQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUdGOztBQURBO0VBQ0UsYUFBQTtFQUNBLGFBQUE7RUFFQSx1QkFBQTtFQUNBLGtCQUFBO0VBRUEsYUFBQTtFQUNBLGVBQUE7QUFFRjs7QUFDQTs7O0VBR0UsY0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FBRUY7O0FBQ0E7RUFDRSxrQkFBQTtBQUVGIiwiZmlsZSI6Im1lbWJlci1pbmZvcm1hdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tcm91dGVyLW91dGxldCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhNzQ0YTtcclxufVxyXG4jYnV0dG9uIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbmJ1dHRvbiB7XHJcbiAgY29sb3I6ICNmYTc0NGE7XHJcbiAgZm9udC1zaXplOiAxNnB0O1xyXG59XHJcbiNpbmZvcntcclxuICBwIHtcclxuICAgIG1hcmdpbjogMC44ZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gIH1cclxufVxyXG5oMyB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMjRwdDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxufVxyXG4jaW5mb3Ige1xyXG4gIG1hcmdpbjogMS4zZW07XHJcbiAgaGVpZ2h0OiA4LjhlbTtcclxuICAvLyAgIHdpZHRoOiAxOWVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuXHJcbiAgb3BhY2l0eTogMC43NTtcclxuICBmb250LXNpemU6IDE0cHQ7XHJcbn1cclxuXHJcbi50b3AsXHJcbi5tZWQsXHJcbi5ib3Qge1xyXG4gIHBhZGRpbmc6IDAuNWVtO1xyXG4gIG1hcmdpbjogMC44OWVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBoZWlnaHQ6IDUuOGVtO1xyXG4gIHdpZHRoOiA1LjhlbTtcclxufVxyXG5cclxuI2J1dHRvbiB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ 6011:
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/member-information/member-information.page.html ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <ion-router-outlet style=\"overflow-y: scroll;\">\r\n    <ion-header>\r\n      <ion-toolbar color=\"bar\">\r\n        <header>\r\n          <ion-tab-button class=\"atHeader\" tab=\"home\">\r\n            <a class=\"logo\"><img src=\"../assets/icon/logo.png\" alt=\"logo\"></a>\r\n          </ion-tab-button>\r\n\r\n          <ion-tab-button class=\"atHeader\" tab=\"login\">\r\n            <a class=\"Login\">\r\n              <p class=\"center\">登入</p>\r\n            </a>\r\n          </ion-tab-button>\r\n\r\n        </header>\r\n\r\n      </ion-toolbar>\r\n    </ion-header>\r\n\r\n\r\n    <h3>會員資料</h3>\r\n    <br>\r\n    <div id=\"infor\" style=\"line-height: 18px\">\r\n      <p>姓名：{{members.member_name}}</p>\r\n      <p>電話：{{members.phone}}</p>\r\n      <p>信箱：{{members.email}}</p>\r\n      <p>地址：{{members.address}}</p>\r\n      <p>紅利點數：{{members.bonus}}</p>\r\n    </div>\r\n    <div id=\"button\">\r\n      <div>\r\n        <button class=\"top\"><span class=\"iconify\" data-icon=\"la:qrcode\" data-width=\"60\"></span><br>掃描QR code</button>\r\n        <button class=\"top\"><span id=\"edit\" class=\"iconify\" data-icon=\"lucide:edit\"\r\n            data-width=\"60\"></span><br>編輯個人資料</button>\r\n      </div>\r\n      <div>\r\n        <button class=\"med\"><span class=\"iconify\" data-icon=\"uil:exchange\" data-width=\"60\"></span><br>紅利點數兌換</button>\r\n        <button  (click)=\"record()\" class=\"med\">\r\n          <span class=\"iconify\" data-icon=\"teenyicons:text-document-outline\" data-width=\"60\"></span><br>個人點餐紀錄\r\n        </button>\r\n      </div>\r\n      <div id=\"botbutton\">\r\n        <button (click)=\"barcode()\" class=\"bot\" id=\"fifth\"><span class=\"iconify\" data-icon=\"ic:baseline-barcode\" id=\"abcd\"\r\n            data-width=\"60\"></span><br>持有兌換條碼</button>\r\n        <button class=\"bot\" id=\"sixth\"><span class=\"iconify\" data-icon=\"mdi:logout\"\r\n            data-width=\"60\"></span><br>登出<br><br>\r\n        </button>\r\n\r\n      </div>\r\n\r\n\r\n    </div>\r\n  </ion-router-outlet>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_member-information_member-information_module_ts.js.map
(self["webpackChunkplayer"] = self["webpackChunkplayer"] || []).push([["src_app_delivery-tracking_delivery-tracking_module_ts"],{

/***/ 4817:
/*!***********************************************************************!*\
  !*** ./src/app/delivery-tracking/delivery-tracking-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeliveryTrackingPageRoutingModule": () => (/* binding */ DeliveryTrackingPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _delivery_tracking_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./delivery-tracking.page */ 6842);




const routes = [
    {
        path: '',
        component: _delivery_tracking_page__WEBPACK_IMPORTED_MODULE_0__.DeliveryTrackingPage
    }
];
let DeliveryTrackingPageRoutingModule = class DeliveryTrackingPageRoutingModule {
};
DeliveryTrackingPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DeliveryTrackingPageRoutingModule);



/***/ }),

/***/ 3451:
/*!***************************************************************!*\
  !*** ./src/app/delivery-tracking/delivery-tracking.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeliveryTrackingPageModule": () => (/* binding */ DeliveryTrackingPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _delivery_tracking_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./delivery-tracking-routing.module */ 4817);
/* harmony import */ var _delivery_tracking_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./delivery-tracking.page */ 6842);







let DeliveryTrackingPageModule = class DeliveryTrackingPageModule {
};
DeliveryTrackingPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _delivery_tracking_routing_module__WEBPACK_IMPORTED_MODULE_0__.DeliveryTrackingPageRoutingModule
        ],
        declarations: [_delivery_tracking_page__WEBPACK_IMPORTED_MODULE_1__.DeliveryTrackingPage]
    })
], DeliveryTrackingPageModule);



/***/ }),

/***/ 6842:
/*!*************************************************************!*\
  !*** ./src/app/delivery-tracking/delivery-tracking.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeliveryTrackingPage": () => (/* binding */ DeliveryTrackingPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_delivery_tracking_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./delivery-tracking.page.html */ 4127);
/* harmony import */ var _delivery_tracking_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./delivery-tracking.page.scss */ 6257);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);





let DeliveryTrackingPage = class DeliveryTrackingPage {
    constructor(router) {
        this.router = router;
        this.pushState = false;
        this.stepsMessage = { title: '烹調中...', count: '預計完成時間: ', imgSrc: '../../assets/icon/Pot.svg' };
        if (router.getCurrentNavigation().extras.state) {
            const pushed = router.getCurrentNavigation().extras.state;
            console.log(pushed);
            this.pushState = pushed.pushstate;
            this.startTime = pushed.start;
            this.finishTime = new Date(this.startTime + (0.2 * 60000)).getTime();
            this.finishTime = Math.floor(this.finishTime / 1000);
            console.log(this.finishTime);
        }
    }
    ngOnInit() {
        if (this.pushState === true) {
            this.setStep();
        }
    }
    setStep() {
        if (this.steps === undefined) {
            this.timer();
            return this.steps = 'cooking';
        }
        if (this.steps === 'cooking') {
            this.startTime = new Date().getTime();
            this.finishTime = new Date(this.startTime + (0.2 * 60000)).getTime();
            this.finishTime = Math.floor(this.finishTime / 1000);
            this.checkStep('delivering');
            this.timer();
            return this.steps = 'delivering';
        }
        if (this.steps === 'delivering') {
            this.checkStep('finish');
            return this.steps = 'finish';
        }
    }
    checkStep(step) {
        if (step === 'delivering') {
            this.stepsMessage.title = '出貨中...';
            this.stepsMessage.count = '預計抵達時間: ';
            this.stepsMessage.imgSrc = '../../assets/icon/delivery.svg';
        }
        if (step === 'finish') {
            this.stepsMessage.title = '餐點已送達';
            this.stepsMessage.count = '抵達時間: ';
            this.stepsMessage.imgSrc = '../../assets/icon/finish.svg';
            this.timePass = new Date().getTime().toLocaleString('zh-TW');
        }
    }
    timer() {
        this.counter =
            setInterval(() => {
                let now = new Date().getTime();
                now = Math.floor(now / 1000);
                this.timePass = this.finishTime - now;
                let hours = Math.floor(this.timePass / 60 / 60);
                let minutes = Math.floor(this.timePass / 60) - (hours * 60);
                let seconds = this.timePass % 60;
                if (this.timePass === 0) {
                    clearInterval(this.counter);
                    this.setStep();
                }
                if (hours === 0 && minutes === 0) {
                    this.timePass = `${seconds} 秒`;
                }
                else if (hours === 0) {
                    this.timePass = `${minutes} 分 ${seconds} 秒`;
                }
                else {
                    this.timePass = `${hours} 小時  ${minutes} 分 ${seconds} 秒`;
                }
            }, 1000);
    }
    toOrder() {
        this.router.navigate(['player-tabs/order']);
    }
};
DeliveryTrackingPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
DeliveryTrackingPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-delivery-tracking',
        template: _raw_loader_delivery_tracking_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_delivery_tracking_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], DeliveryTrackingPage);



/***/ }),

/***/ 6257:
/*!***************************************************************!*\
  !*** ./src/app/delivery-tracking/delivery-tracking.page.scss ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".noTrack, .tracking {\n  position: relative;\n  z-index: 2;\n}\n.noTrack .progress, .tracking .progress {\n  display: flex;\n  width: 50vw;\n  height: 0.5vh;\n  margin: 3vh auto;\n  padding: 0;\n  background-color: #FA744A;\n  justify-content: space-between;\n}\n.noTrack .progress li, .tracking .progress li {\n  list-style: none;\n  width: 23px;\n  height: 23px;\n  border: 5px solid #FA744A;\n  border-radius: 50px;\n  background-color: #FA744A;\n  margin-top: -1vh;\n  transition: all 0.3s ease-in-out;\n}\n.noTrack .progress .currentStep, .tracking .progress .currentStep {\n  background-color: white;\n}\n.noTrack .status, .tracking .status {\n  margin-top: 6vh;\n}\n.noTrack .status img, .tracking .status img {\n  transition: all 0.3s ease-in-out;\n}\n.noTrack .message h1, .tracking .message h1 {\n  font-size: 18px;\n  font-weight: 550;\n  margin: 0;\n}\n.noTrack .message span, .tracking .message span {\n  color: #2D9BF0;\n}\n.noTrack .processing, .tracking .processing {\n  margin: 5vh 0 0 0;\n}\n.noTrack .processing h1:first-child, .tracking .processing h1:first-child {\n  font-size: 48px;\n  margin-bottom: 3vh;\n}\n.noTrack .processing .countTime, .tracking .processing .countTime {\n  color: #FA744A;\n}\n.noTrack .processing .stars, .tracking .processing .stars {\n  padding: 0;\n  display: flex;\n  justify-content: center;\n  list-style: none;\n}\n/*linear-gradient(45deg ,white, #eddeda)\n#EDEDED*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbGl2ZXJ5LXRyYWNraW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtBQUNKO0FBQUk7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0FBRVI7QUFEUTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdDQUFBO0FBR1o7QUFEUTtFQUNJLHVCQUFBO0FBR1o7QUFBSTtFQUNJLGVBQUE7QUFFUjtBQURRO0VBQ0ksZ0NBQUE7QUFHWjtBQUNRO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtBQUNaO0FBQ1E7RUFDSSxjQUFBO0FBQ1o7QUFFSTtFQUNJLGlCQUFBO0FBQVI7QUFDUTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtBQUNaO0FBQ1E7RUFDSSxjQUFBO0FBQ1o7QUFDUTtFQUNJLFVBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQUNaO0FBSUE7UUFBQSIsImZpbGUiOiJkZWxpdmVyeS10cmFja2luZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubm9UcmFjaywgLnRyYWNraW5ne1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIC5wcm9ncmVzc3tcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIHdpZHRoOiA1MHZ3O1xyXG4gICAgICAgIGhlaWdodDogLjV2aDtcclxuICAgICAgICBtYXJnaW46IDN2aCBhdXRvO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZBNzQ0QTtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgbGl7XHJcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyM3B4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDIzcHg7XHJcbiAgICAgICAgICAgIGJvcmRlcjogNXB4IHNvbGlkICNGQTc0NEE7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGQTc0NEE7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC0xdmg7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jdXJyZW50U3RlcHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnN0YXR1c3tcclxuICAgICAgICBtYXJnaW4tdG9wOiA2dmg7XHJcbiAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5tZXNzYWdle1xyXG4gICAgICAgIGgxe1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1NTA7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgY29sb3I6ICMyRDlCRjA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnByb2Nlc3Npbmd7XHJcbiAgICAgICAgbWFyZ2luOiA1dmggMCAwIDA7XHJcbiAgICAgICAgaDE6Zmlyc3QtY2hpbGR7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNDhweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogM3ZoO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY291bnRUaW1le1xyXG4gICAgICAgICAgICBjb2xvcjogI0ZBNzQ0QTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnN0YXJze1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qbGluZWFyLWdyYWRpZW50KDQ1ZGVnICx3aGl0ZSwgI2VkZGVkYSlcclxuI0VERURFRCovIl19 */");

/***/ }),

/***/ 4127:
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/delivery-tracking/delivery-tracking.page.html ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar color=\"bar\">\r\n    <header>\r\n      <ion-tab-button class=\"atHeader\" tab=\"home\">\r\n        <a class=\"logo\"><img src=\"../assets/icon/logo.png\" alt=\"logo\"></a>\r\n      </ion-tab-button>\r\n\r\n      <ion-tab-button class=\"atHeader\" tab=\"login\">\r\n        <a class=\"Login\">\r\n          <p class=\"center\">登入</p>\r\n        </a>\r\n      </ion-tab-button>\r\n\r\n    </header>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content color=\"front\">\r\n  <img class=\"bg\" src=\"../../../assets/icon/LOGO_MONO.svg\" alt=\"玩\">\r\n\r\n  <div class=\"noTrack\" *ngIf=\"pushState === false\">\r\n    <h1 class=\"title\">外送追蹤</h1>\r\n\r\n    <div class=\"status\">\r\n      <img src=\"../../assets/icon/question.svg\" alt=\"Q\">\r\n    </div>\r\n\r\n    <div class=\"message\">\r\n      <h1>欸，找不到訂單</h1>\r\n      <h1>要不要先<span>點餐</span>?</h1>\r\n    </div>\r\n  \r\n    <div class=\"actionBtn\">\r\n      <ion-button (click)=\"toOrder()\">先去點餐</ion-button>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"tracking\" *ngIf=\"pushState === true\">\r\n    <h1 class=\"title\">外送追蹤</h1>\r\n\r\n    <ul class=\"progress\">\r\n      <li [ngClass]=\"{'currentStep' : steps === 'cooking'}\"></li>\r\n      <li [ngClass]=\"{'currentStep' : steps === 'delivering'}\"></li>\r\n      <li [ngClass]=\"{'currentStep' : steps === 'finish'}\"></li>\r\n    </ul>\r\n\r\n    <div class=\"status\">\r\n      <img src=\"{{stepsMessage.imgSrc}}\" alt=\"currentStep\">\r\n    </div>\r\n\r\n    <div class=\"message processing\">\r\n      <h1>{{stepsMessage.title}}</h1>\r\n      <h1>{{stepsMessage.count}}<span class=\"countTime\">{{timePass}}</span></h1>\r\n\r\n      <div class=\"check\" *ngIf=\"steps === 'finish'\">\r\n        <ul class=\"stars\">\r\n          <p>滿意度確認</p>\r\n          <li><span class=\"iconify\" data-icon=\"codicon:star-full\"></span></li>\r\n          <li><span class=\"iconify\" data-icon=\"codicon:star-full\"></span></li>\r\n          <li><span class=\"iconify\" data-icon=\"codicon:star-full\"></span></li>\r\n          <li><span class=\"iconify\" data-icon=\"codicon:star-full\"></span></li>\r\n          <li><span class=\"iconify\" data-icon=\"codicon:star-full\"></span></li>\r\n        </ul>\r\n      </div>\r\n\r\n      <div class=\"actionBtn\" *ngIf=\"steps === 'finish'\">\r\n        <ion-button (click)=\"paymentCheck()\">確認</ion-button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_delivery-tracking_delivery-tracking_module_ts.js.map
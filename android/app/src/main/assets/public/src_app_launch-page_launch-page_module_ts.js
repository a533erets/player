(self["webpackChunkplayer"] = self["webpackChunkplayer"] || []).push([["src_app_launch-page_launch-page_module_ts"],{

/***/ 9746:
/*!***********************************************************!*\
  !*** ./src/app/launch-page/launch-page-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LaunchPagePageRoutingModule": () => (/* binding */ LaunchPagePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _launch_page_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./launch-page.page */ 3186);




const routes = [
    {
        path: '',
        component: _launch_page_page__WEBPACK_IMPORTED_MODULE_0__.LaunchPagePage
    },
];
let LaunchPagePageRoutingModule = class LaunchPagePageRoutingModule {
};
LaunchPagePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LaunchPagePageRoutingModule);



/***/ }),

/***/ 6374:
/*!***************************************************!*\
  !*** ./src/app/launch-page/launch-page.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LaunchPagePageModule": () => (/* binding */ LaunchPagePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _launch_page_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./launch-page-routing.module */ 9746);
/* harmony import */ var _launch_page_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./launch-page.page */ 3186);
/* harmony import */ var _player_tabs_player_tabs_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../player-tabs/player-tabs.page */ 4276);








let LaunchPagePageModule = class LaunchPagePageModule {
};
LaunchPagePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _launch_page_routing_module__WEBPACK_IMPORTED_MODULE_0__.LaunchPagePageRoutingModule
        ],
        declarations: [_launch_page_page__WEBPACK_IMPORTED_MODULE_1__.LaunchPagePage, _player_tabs_player_tabs_page__WEBPACK_IMPORTED_MODULE_2__.PlayerTabsPage]
    })
], LaunchPagePageModule);



/***/ }),

/***/ 3186:
/*!*************************************************!*\
  !*** ./src/app/launch-page/launch-page.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LaunchPagePage": () => (/* binding */ LaunchPagePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_launch_page_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./launch-page.page.html */ 2926);
/* harmony import */ var _launch_page_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./launch-page.page.scss */ 4821);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);





let LaunchPagePage = class LaunchPagePage {
    constructor(router) {
        // for (var i=0;i<3000;i++)
        // {
        //   console.log(i);
        // }
        this.router = router;
        // console.log("a");
        // this.router.navigate(['/player-tabs/home']);
    }
    ngOnInit() {
        // this.router.navigate(['/player-tabs/home']);
        this.timer();
    }
    timer() {
        setTimeout(() => {
            this.router.navigate(['/player-tabs/home']);
        }, 3000);
    }
    opening() {
        this.router.navigate(['/player-tabs/home']);
    }
};
LaunchPagePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
LaunchPagePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-launch-page',
        template: _raw_loader_launch_page_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_launch_page_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LaunchPagePage);



/***/ }),

/***/ 4821:
/*!***************************************************!*\
  !*** ./src/app/launch-page/launch-page.page.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".flex-center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n}\n\n.shape-ex1 {\n  width: 280px;\n  margin: auto;\n  display: block;\n}\n\n.shape-ex2 {\n  height: auto;\n  width: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhdW5jaC1wYWdlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUNBO0VBRUksWUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQUNKIiwiZmlsZSI6ImxhdW5jaC1wYWdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mbGV4LWNlbnRlciB7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG4uc2hhcGUtZXgxe1xyXG4gICAgLy8gaGVpZ2h0OiAxO1xyXG4gICAgd2lkdGg6IDI4MHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcblxyXG4gIH1cclxuLnNoYXBlLWV4MntcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHdpZHRoOiBhdXRvO1xyXG59Il19 */");

/***/ }),

/***/ 2926:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/launch-page/launch-page.page.html ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<hr>\r\n<hr>\r\n<hr>\r\n<hr>\r\n<hr>\r\n<hr>\r\n<hr>\r\n<img class=\"shape-ex1\" src=\"../../assets/玩味生活.svg\" >\r\n<img class=\"shape-ex2\" src=\"../../assets/Food_player.svg\"  >\r\n\r\n\r\n<div class=\"flex-center\">\r\n<ion-spinner name=\"circles\" color=\"primary\"></ion-spinner>\r\n</div>\r\n\r\n\r\n<button ion-button (click)=\"opening()\">跳轉到頁面</button>    \r\n\r\n\r\n\r\n\r\n\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_launch-page_launch-page_module_ts.js.map
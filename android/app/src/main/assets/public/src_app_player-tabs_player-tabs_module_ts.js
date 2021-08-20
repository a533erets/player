(self["webpackChunkplayer"] = self["webpackChunkplayer"] || []).push([["src_app_player-tabs_player-tabs_module_ts"],{

/***/ 2474:
/*!***********************************************************!*\
  !*** ./src/app/player-tabs/player-tabs-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlayerTabsPageRoutingModule": () => (/* binding */ PlayerTabsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _player_tabs_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player-tabs.page */ 4276);




const routes = [
    {
        path: '',
        component: _player_tabs_page__WEBPACK_IMPORTED_MODULE_0__.PlayerTabsPage,
        children: [
            {
                path: '',
                children: [
                    {
                        path: 'home',
                        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../home/home.module */ 3467)).then(m => m.HomePageModule)
                    }
                ]
            },
            {
                path: 'advertise',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_advertise_advertise_module_ts-src_app_home_advertise_advertise_page_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../home/advertise/advertise.module */ 7887)).then(m => m.AdvertisePageModule)
                    }
                ]
            },
            {
                path: 'main',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_main_main_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../home/main/main.module */ 1236)).then(m => m.MainPageModule)
                    }
                ]
            },
            {
                path: 'order',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_order_order_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../order/order.module */ 8865)).then(m => m.OrderPageModule)
                    }
                ]
            },
            {
                path: 'store-situation',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_store-situation_store-situation_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../store-situation/store-situation.module */ 660)).then(m => m.StoreSituationPageModule)
                    }
                ]
            },
            {
                path: 'delivery-tracking',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_delivery-tracking_delivery-tracking_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../delivery-tracking/delivery-tracking.module */ 3451)).then(m => m.DeliveryTrackingPageModule)
                    }
                ]
            },
            {
                path: 'member',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_member-information_member-information_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../member-information/member-information.module */ 9637)).then(m => m.MemberInformationPageModule)
                    }
                ]
            },
            {
                path: 'login',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_member_member_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../member/member.module */ 3717)).then(m => m.MemberPageModule)
                    }
                ]
            },
            {
                path: 'record',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_member_record_record_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../member/record/record.module */ 8023)).then(m => m.RecordPageModule)
                    }
                ]
            },
            {
                path: 'barcode',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_member_barcode_barcode_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../member/barcode/barcode.module */ 3424)).then(m => m.BarcodePageModule)
                    }
                ]
            },
            {
                path: 'barcode-expired',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_member_barcode_barcode-expired_barcode-expired_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../member/barcode/barcode-expired/barcode-expired.module */ 2823)).then(m => m.BarcodeExpiredPageModule)
                    }
                ]
            },
            {
                path: 'barcode-used',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_member_barcode_barcode-used_barcode-used_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../member/barcode/barcode-used/barcode-used.module */ 9470)).then(m => m.BarcodeUsedPageModule)
                    }
                ]
            },
            {
                path: 'payment',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() */ "common").then(__webpack_require__.bind(__webpack_require__, /*! ../order/payment/payment.module */ 6493)).then(m => m.PaymentPageModule)
                    }
                ]
            }
        ]
    }
];
let PlayerTabsPageRoutingModule = class PlayerTabsPageRoutingModule {
};
PlayerTabsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PlayerTabsPageRoutingModule);



/***/ }),

/***/ 9343:
/*!***************************************************!*\
  !*** ./src/app/player-tabs/player-tabs.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlayerTabsPageModule": () => (/* binding */ PlayerTabsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _player_tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player-tabs-routing.module */ 2474);
/* harmony import */ var _player_tabs_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player-tabs.page */ 4276);







let PlayerTabsPageModule = class PlayerTabsPageModule {
};
PlayerTabsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _player_tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__.PlayerTabsPageRoutingModule
        ],
        declarations: [_player_tabs_page__WEBPACK_IMPORTED_MODULE_1__.PlayerTabsPage]
    })
], PlayerTabsPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_player-tabs_player-tabs_module_ts.js.map
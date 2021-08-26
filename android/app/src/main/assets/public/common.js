(self["webpackChunkplayer"] = self["webpackChunkplayer"] || []).push([["common"],{

/***/ 6633:
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-4927a4c1.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ createButtonActiveGesture)
/* harmony export */ });
/* harmony import */ var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-7a8b7a1c.js */ 3150);
/* harmony import */ var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./haptic-27b3f981.js */ 2954);
/* harmony import */ var _index_f49d994d_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-f49d994d.js */ 7279);




const createButtonActiveGesture = (el, isButton) => {
  let currentTouchedButton;
  let initialTouchedButton;
  const activateButtonAtPoint = (x, y, hapticFeedbackFn) => {
    if (typeof document === 'undefined') {
      return;
    }
    const target = document.elementFromPoint(x, y);
    if (!target || !isButton(target)) {
      clearActiveButton();
      return;
    }
    if (target !== currentTouchedButton) {
      clearActiveButton();
      setActiveButton(target, hapticFeedbackFn);
    }
  };
  const setActiveButton = (button, hapticFeedbackFn) => {
    currentTouchedButton = button;
    if (!initialTouchedButton) {
      initialTouchedButton = currentTouchedButton;
    }
    const buttonToModify = currentTouchedButton;
    (0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.c)(() => buttonToModify.classList.add('ion-activated'));
    hapticFeedbackFn();
  };
  const clearActiveButton = (dispatchClick = false) => {
    if (!currentTouchedButton) {
      return;
    }
    const buttonToModify = currentTouchedButton;
    (0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.c)(() => buttonToModify.classList.remove('ion-activated'));
    /**
     * Clicking on one button, but releasing on another button
     * does not dispatch a click event in browsers, so we
     * need to do it manually here. Some browsers will
     * dispatch a click if clicking on one button, dragging over
     * another button, and releasing on the original button. In that
     * case, we need to make sure we do not cause a double click there.
     */
    if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
      currentTouchedButton.click();
    }
    currentTouchedButton = undefined;
  };
  return (0,_index_f49d994d_js__WEBPACK_IMPORTED_MODULE_2__.createGesture)({
    el,
    gestureName: 'buttonActiveDrag',
    threshold: 0,
    onStart: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__.a),
    onMove: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__.b),
    onEnd: () => {
      clearActiveButton(true);
      (0,_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__.h)();
      initialTouchedButton = undefined;
    }
  });
};




/***/ }),

/***/ 7330:
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-4392cd63.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ attachComponent),
/* harmony export */   "d": () => (/* binding */ detachComponent)
/* harmony export */ });
/* harmony import */ var _helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers-dd7e4b7b.js */ 2377);


const attachComponent = async (delegate, container, component, cssClasses, componentProps) => {
  if (delegate) {
    return delegate.attachViewToDom(container, component, componentProps, cssClasses);
  }
  if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
    throw new Error('framework delegate is missing');
  }
  const el = (typeof component === 'string')
    ? container.ownerDocument && container.ownerDocument.createElement(component)
    : component;
  if (cssClasses) {
    cssClasses.forEach(c => el.classList.add(c));
  }
  if (componentProps) {
    Object.assign(el, componentProps);
  }
  container.appendChild(el);
  await new Promise(resolve => (0,_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__.c)(el, resolve));
  return el;
};
const detachComponent = (delegate, element) => {
  if (element) {
    if (delegate) {
      const container = element.parentElement;
      return delegate.removeViewFromDom(container, element);
    }
    element.remove();
  }
  return Promise.resolve();
};




/***/ }),

/***/ 2954:
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ hapticSelectionStart),
/* harmony export */   "b": () => (/* binding */ hapticSelectionChanged),
/* harmony export */   "c": () => (/* binding */ hapticSelection),
/* harmony export */   "d": () => (/* binding */ hapticImpact),
/* harmony export */   "h": () => (/* binding */ hapticSelectionEnd)
/* harmony export */ });
const HapticEngine = {
  getEngine() {
    const win = window;
    return (win.TapticEngine) || (win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics);
  },
  available() {
    return !!this.getEngine();
  },
  isCordova() {
    return !!window.TapticEngine;
  },
  isCapacitor() {
    const win = window;
    return !!win.Capacitor;
  },
  impact(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.impact({ style });
  },
  notification(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.notification({ style });
  },
  selection() {
    this.impact({ style: 'light' });
  },
  selectionStart() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionStart();
    }
    else {
      engine.gestureSelectionStart();
    }
  },
  selectionChanged() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionChanged();
    }
    else {
      engine.gestureSelectionChanged();
    }
  },
  selectionEnd() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionEnd();
    }
    else {
      engine.gestureSelectionEnd();
    }
  }
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
  HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
  HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
  HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
  HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */
const hapticImpact = (options) => {
  HapticEngine.impact(options);
};




/***/ }),

/***/ 408:
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ SPINNERS)
/* harmony export */ });
const spinners = {
  'bubbles': {
    dur: 1000,
    circles: 9,
    fn: (dur, index, total) => {
      const animationDelay = `${(dur * index / total) - dur}ms`;
      const angle = 2 * Math.PI * index / total;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circles': {
    dur: 1000,
    circles: 8,
    fn: (dur, index, total) => {
      const step = index / total;
      const animationDelay = `${(dur * step) - dur}ms`;
      const angle = 2 * Math.PI * step;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circular': {
    dur: 1400,
    elmDuration: true,
    circles: 1,
    fn: () => {
      return {
        r: 20,
        cx: 48,
        cy: 48,
        fill: 'none',
        viewBox: '24 24 48 48',
        transform: 'translate(0,0)',
        style: {}
      };
    }
  },
  'crescent': {
    dur: 750,
    circles: 1,
    fn: () => {
      return {
        r: 26,
        style: {}
      };
    }
  },
  'dots': {
    dur: 750,
    circles: 3,
    fn: (_, index) => {
      const animationDelay = -(110 * index) + 'ms';
      return {
        r: 6,
        style: {
          'left': `${9 - (9 * index)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 17,
        y2: 29,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines-small': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 12,
        y2: 20,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  }
};
const SPINNERS = spinners;




/***/ }),

/***/ 1269:
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ createColorClasses),
/* harmony export */   "g": () => (/* binding */ getClassMap),
/* harmony export */   "h": () => (/* binding */ hostContext),
/* harmony export */   "o": () => (/* binding */ openURL)
/* harmony export */ });
const hostContext = (selector, el) => {
  return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color, cssClassMap) => {
  return (typeof color === 'string' && color.length > 0) ? Object.assign({ 'ion-color': true, [`ion-color-${color}`]: true }, cssClassMap) : cssClassMap;
};
const getClassList = (classes) => {
  if (classes !== undefined) {
    const array = Array.isArray(classes) ? classes : classes.split(' ');
    return array
      .filter(c => c != null)
      .map(c => c.trim())
      .filter(c => c !== '');
  }
  return [];
};
const getClassMap = (classes) => {
  const map = {};
  getClassList(classes).forEach(c => map[c] = true);
  return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = async (url, ev, direction, animation) => {
  if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
    const router = document.querySelector('ion-router');
    if (router) {
      if (ev != null) {
        ev.preventDefault();
      }
      return router.push(url, direction, animation);
    }
  }
  return false;
};




/***/ }),

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
    },
    {
        path: 'personal-information',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_member-information_personal-information_personal-information_module_ts-src_app_member-a10f4e").then(__webpack_require__.bind(__webpack_require__, /*! ./personal-information/personal-information.module */ 2674)).then(m => m.PersonalInformationPageModule)
    },
    {
        path: 'bouns',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_member-information_bonus_bonus_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./bonus/bonus.module */ 4776)).then(m => m.BonusPageModule)
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _service_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/http.service */ 561);






let MemberInformationPage = class MemberInformationPage {
    constructor(router, http) {
        this.router = router;
        this.http = http;
        this.members = [];
    }
    ngOnInit() {
    }
    // ionViewWillEnter(){
    //   if(this.http.logInState.logIn === false){
    //     this.router.navigate(['player-tabs/main'])
    //   }
    // }
    barcode() {
        this.router.navigate(['player-tabs/barcode']);
    }
    record() {
        this.router.navigate(['player-tabs/record']);
    }
    edit() {
        this.router.navigate(['player-tabs/edit']);
    }
    bonus() {
        this.router.navigate(['player-tabs/bonus']);
    }
};
MemberInformationPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _service_http_service__WEBPACK_IMPORTED_MODULE_2__.HttpService }
];
MemberInformationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-member-information',
        template: _raw_loader_member_information_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_member_information_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MemberInformationPage);



/***/ }),

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
        loadChildren: () => __webpack_require__.e(/*! import() */ "default-src_app_member_record_record_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./record/record.module */ 8023)).then(m => m.RecordPageModule)
    },
    {
        path: 'sign-up',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_member_sign-up_sign-up_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./sign-up/sign-up.module */ 9689)).then(m => m.SignUpPageModule)
    },
    {
        path: 'forget',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_member_forget_forget_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./forget/forget.module */ 8340)).then(m => m.ForgetPageModule)
    },
    {
        path: 'barcode',
        loadChildren: () => __webpack_require__.e(/*! import() */ "default-src_app_member_barcode_barcode_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./barcode/barcode.module */ 3424)).then(m => m.BarcodePageModule)
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_member_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./member.page.html */ 5561);
/* harmony import */ var _member_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./member.page.scss */ 8239);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _service_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/http.service */ 561);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);






let MemberPage = class MemberPage {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.members = [];
    }
    ngOnInit() {
        console.log(this.http.logInState);
    }
    forget() {
        this.router.navigate(['/player-tabs/forget']);
    }
    signUp() {
        this.router.navigate(['player-tabs/signUp']);
    }
    ionViewWillEnter() {
        if (this.http.checkLogIn() === true) {
            this.router.navigate(['/player-tabs/member']);
        }
    }
    userLogin() {
        console.log(this.account, this.pwd);
        console.log(this.members);
        if (this.account !== '' && this.pwd !== '') {
            let formData = new FormData();
            this.prepareData(formData).then(resolve => {
                console.log(resolve);
            }).then(() => {
                formData.forEach((value, key) => {
                    console.log(key + value);
                });
            }).then(() => {
                if (this.http.logInState.logIn === false && formData !== undefined) {
                    console.log('logIn strated');
                    this.http.pushData('http://localhost/foodplayer/src/app/php/logIn.php', 'logIn', formData);
                }
                else {
                    console.log('logIn falied');
                }
            }).catch((reject) => {
                console.log(reject);
            });
        }
        else {
            this.http.checkIfuserExist.visible = 'visible';
            setTimeout(() => {
                this.http.checkIfuserExist.visible = 'hidden';
            }, 2500);
        }
    }
    prepareData(formData) {
        return new Promise((resolve, reject) => {
            if (formData !== undefined) {
                resolve('procced');
                formData.append('account', this.account);
                formData.append('password', this.pwd);
            }
            else {
                reject('error');
            }
        });
    }
};
MemberPage.ctorParameters = () => [
    { type: _service_http_service__WEBPACK_IMPORTED_MODULE_2__.HttpService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
MemberPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-member',
        template: _raw_loader_member_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_member_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MemberPage);



/***/ }),

/***/ 4276:
/*!*************************************************!*\
  !*** ./src/app/player-tabs/player-tabs.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlayerTabsPage": () => (/* binding */ PlayerTabsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_player_tabs_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./player-tabs.page.html */ 1911);
/* harmony import */ var _player_tabs_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player-tabs.page.scss */ 1641);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _service_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/http.service */ 561);





let PlayerTabsPage = class PlayerTabsPage {
    constructor(http) {
        this.http = http;
    }
    ngOnInit() {
    }
};
PlayerTabsPage.ctorParameters = () => [
    { type: _service_http_service__WEBPACK_IMPORTED_MODULE_2__.HttpService }
];
PlayerTabsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-player-tabs',
        template: _raw_loader_player_tabs_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_player_tabs_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PlayerTabsPage);



/***/ }),

/***/ 6115:
/*!*******************************************************************!*\
  !*** ./src/app/store-situation/store-situation-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StoreSituationPageRoutingModule": () => (/* binding */ StoreSituationPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _store_situation_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store-situation.page */ 8837);




const routes = [
    {
        path: '',
        component: _store_situation_page__WEBPACK_IMPORTED_MODULE_0__.StoreSituationPage
    }
];
let StoreSituationPageRoutingModule = class StoreSituationPageRoutingModule {
};
StoreSituationPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], StoreSituationPageRoutingModule);



/***/ }),

/***/ 660:
/*!***********************************************************!*\
  !*** ./src/app/store-situation/store-situation.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StoreSituationPageModule": () => (/* binding */ StoreSituationPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _store_situation_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store-situation-routing.module */ 6115);
/* harmony import */ var _store_situation_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store-situation.page */ 8837);







let StoreSituationPageModule = class StoreSituationPageModule {
};
StoreSituationPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _store_situation_routing_module__WEBPACK_IMPORTED_MODULE_0__.StoreSituationPageRoutingModule
        ],
        declarations: [_store_situation_page__WEBPACK_IMPORTED_MODULE_1__.StoreSituationPage]
    })
], StoreSituationPageModule);



/***/ }),

/***/ 8837:
/*!*********************************************************!*\
  !*** ./src/app/store-situation/store-situation.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StoreSituationPage": () => (/* binding */ StoreSituationPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_store_situation_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./store-situation.page.html */ 6031);
/* harmony import */ var _store_situation_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store-situation.page.scss */ 3008);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _service_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/http.service */ 561);






let StoreSituationPage = class StoreSituationPage {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.seats = [];
        this.open = false;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        let seats = Array.from({ length: 16 }, (seats, seat) => seat);
        console.log(seats);
        for (let i = 0; i < seats.length; i++) {
            this.seats.push({ seat: seats[i], occupied: this.randomSeat(), message: '空' });
        }
        console.log(this.seats);
        this.checkDate();
        this.checkSeat();
    }
    checkDate() {
        let day = new Date().getDay();
        let hour = new Date().getHours();
        let minute = new Date().getMinutes();
        if (day === 2) {
            console.log('今日休息');
            this.openStatus = '今日休息';
            this.open = false;
        }
        if (hour === 14 && minute < 30 || hour === 20 && minute < 30) {
            console.log('營業中');
            this.openStatus = '營業中';
            this.open = true;
        }
        else if (hour >= 11 && hour < 14 || hour > 17 && hour < 20) {
            console.log('營業中');
            this.openStatus = '營業中';
            this.open = true;
        }
        else {
            console.log('尚未營業');
            this.openStatus = '尚未營業';
            this.open = false;
        }
    }
    checkSeat() {
        let remain = 0;
        for (let i = 0; i < this.seats.length; i++) {
            if (this.seats[i].occupied === false) {
                remain++;
            }
            else {
                this.seats[i].message = '滿';
            }
        }
        this.remainSeats = remain;
    }
    randomSeat() {
        let random = Math.random() < 0.5;
        return random;
    }
    toLogin() {
        if (this.http.checkLogIn() === true) {
            this.router.navigate(['player-tabs/member']);
        }
        else {
            this.router.navigate(['player-tabs/login']);
        }
    }
};
StoreSituationPage.ctorParameters = () => [
    { type: _service_http_service__WEBPACK_IMPORTED_MODULE_2__.HttpService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
StoreSituationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-store-situation',
        template: _raw_loader_store_situation_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_store_situation_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], StoreSituationPage);



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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-router-outlet {\n  background-color: #fa744a;\n}\n\n#button {\n  position: relative;\n  z-index: 2;\n}\n\nbutton {\n  color: #fa744a;\n  font-size: 16pt;\n}\n\n#infor {\n  position: relative;\n  z-index: 2;\n  margin: 1.3em;\n  background-color: white;\n  border-radius: 8px;\n  color: black;\n  opacity: 0.75;\n  padding: 1%;\n}\n\n#infor p {\n  margin: 2.5% 1%;\n  font-weight: bolder;\n}\n\nh3 {\n  text-align: center;\n  font-size: 24pt;\n  color: white;\n  font-weight: bolder;\n}\n\n.top, .med, .bot {\n  padding: 0.5em;\n  margin: 0.89em;\n  border-radius: 8px;\n  height: 5.8em;\n  width: 5.8em;\n}\n\n#button {\n  text-align: center;\n}\n\n#button div button {\n  background-color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbWJlci1pbmZvcm1hdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtBQUNGOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0FBRUY7O0FBQUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQUdGOztBQURBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUFJRjs7QUFIRTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtBQUtKOztBQUZBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBS0Y7O0FBRkE7RUFDRSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFLRjs7QUFGQTtFQUNFLGtCQUFBO0FBS0Y7O0FBSEk7RUFDRSx1QkFBQTtBQUtOIiwiZmlsZSI6Im1lbWJlci1pbmZvcm1hdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tcm91dGVyLW91dGxldCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhNzQ0YTtcclxufVxyXG4jYnV0dG9uIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMjtcclxufVxyXG5idXR0b24ge1xyXG4gIGNvbG9yOiAjZmE3NDRhO1xyXG4gIGZvbnQtc2l6ZTogMTZwdDtcclxufVxyXG4jaW5mb3Ige1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAyO1xyXG4gIG1hcmdpbjogMS4zZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBvcGFjaXR5OiAwLjc1O1xyXG4gIHBhZGRpbmc6IDElO1xyXG4gIHAge1xyXG4gICAgbWFyZ2luOiAyLjUlIDElO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICB9XHJcbn1cclxuaDMge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDI0cHQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbn1cclxuXHJcbi50b3AsLm1lZCwuYm90IHtcclxuICBwYWRkaW5nOiAwLjVlbTtcclxuICBtYXJnaW46IDAuODllbTtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgaGVpZ2h0OiA1LjhlbTtcclxuICB3aWR0aDogNS44ZW07XHJcbn1cclxuXHJcbiNidXR0b24ge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBkaXZ7XHJcbiAgICBidXR0b257XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".form-inline {\n  margin-top: 0;\n}\n\n.butGoogleFb {\n  padding: 0.5em;\n  width: 15em;\n  height: 2em;\n  margin: 0.8em;\n  background-color: white;\n  border-radius: 4px;\n  color: #fa744a;\n  font-size: 14pt;\n}\n\ninput {\n  width: 70vw;\n  height: 10vw;\n  font-size: 14pt;\n}\n\ninput:focus {\n  border: 1px solid #01a0c6;\n}\n\n.forgetSignIn {\n  background-color: #fa744a;\n  color: white;\n  font-size: 12pt;\n}\n\nion-router-outlet {\n  background-color: #fa744a;\n}\n\n#h3 {\n  font-size: 24pt;\n  color: white;\n  text-align: center;\n  padding: 1.5rem;\n}\n\n#warning {\n  margin: 1% 0;\n}\n\nlabel {\n  font-size: 18pt;\n}\n\n.iconify {\n  background-color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbWJlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFFRjs7QUFERTtFQUNFLHlCQUFBO0FBR0o7O0FBQUE7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBR0Y7O0FBREE7RUFDRSx5QkFBQTtBQUlGOztBQURBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFJRjs7QUFGQTtFQUNFLFlBQUE7QUFLRjs7QUFIQTtFQUNFLGVBQUE7QUFNRjs7QUFKQTtFQUNFLHVCQUFBO0FBT0YiLCJmaWxlIjoibWVtYmVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWlubGluZSB7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxufVxyXG5cclxuLmJ1dEdvb2dsZUZiIHtcclxuICBwYWRkaW5nOiAwLjVlbTtcclxuICB3aWR0aDogMTVlbTtcclxuICBoZWlnaHQ6IDJlbTtcclxuICBtYXJnaW46IDAuOGVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBjb2xvcjogI2ZhNzQ0YTtcclxuICBmb250LXNpemU6IDE0cHQ7XHJcbn1cclxuaW5wdXQge1xyXG4gIHdpZHRoOiA3MHZ3O1xyXG4gIGhlaWdodDogMTB2dztcclxuICBmb250LXNpemU6IDE0cHQ7XHJcbiAgJjpmb2N1cyB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDFhMGM2O1xyXG4gIH1cclxufVxyXG4uZm9yZ2V0U2lnbkluIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmE3NDRhO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDEycHQ7XHJcbn1cclxuaW9uLXJvdXRlci1vdXRsZXQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmYTc0NGE7XHJcbiAgLy8gYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9pY29uL0xPR09fTU9OTy5zdmcpO1xyXG59XHJcbiNoMyB7XHJcbiAgZm9udC1zaXplOiAyNHB0O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMS41cmVtO1xyXG59XHJcbiN3YXJuaW5ne1xyXG4gIG1hcmdpbjogMSUgMDtcclxufVxyXG5sYWJlbCB7XHJcbiAgZm9udC1zaXplOiAxOHB0O1xyXG59XHJcbi5pY29uaWZ5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ 1641:
/*!***************************************************!*\
  !*** ./src/app/player-tabs/player-tabs.page.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-tab-button {\n  --color-selected: #FA744A;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYXllci10YWJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0FBQ0oiLCJmaWxlIjoicGxheWVyLXRhYnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRhYi1idXR0b257XHJcbiAgICAtLWNvbG9yLXNlbGVjdGVkOiAjRkE3NDRBO1xyXG59Il19 */");

/***/ }),

/***/ 3008:
/*!***********************************************************!*\
  !*** ./src/app/store-situation/store-situation.page.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".notOpen {\n  position: relative;\n}\n.notOpen .status {\n  margin-top: 6vh;\n}\n.notOpen h1 {\n  font-size: 20px;\n}\n.openStatus {\n  margin: 3vh 0 0 7vw;\n}\n.openStatus .remainSeats {\n  display: flex;\n}\n.openStatus .remainSeats h2 {\n  margin: 0 5vw 0 0;\n}\n.openStatus #seats {\n  padding: 0;\n  display: flex;\n  flex-wrap: wrap;\n}\n.openStatus #seats li {\n  list-style: none;\n  width: 64px;\n  height: 64px;\n  border: 1px solid rgba(0, 0, 0, 0.5);\n  border-radius: 8px;\n  background-color: white;\n  position: relative;\n  margin: 2vh 2vw;\n  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);\n}\n.openStatus #seats .occupied {\n  background-color: #FA744A;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b3JlLXNpdHVhdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQUNKO0FBQUk7RUFDSSxlQUFBO0FBRVI7QUFBSTtFQUNJLGVBQUE7QUFFUjtBQUVBO0VBQ0ksbUJBQUE7QUFDSjtBQUFJO0VBQ0ksYUFBQTtBQUVSO0FBRFE7RUFDSSxpQkFBQTtBQUdaO0FBQUk7RUFDSSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUFFUjtBQURRO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLDJDQUFBO0FBR1o7QUFEUTtFQUNJLHlCQUFBO0FBR1oiLCJmaWxlIjoic3RvcmUtc2l0dWF0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ub3RPcGVue1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLnN0YXR1c3tcclxuICAgICAgICBtYXJnaW4tdG9wOiA2dmg7XHJcbiAgICB9XHJcbiAgICBoMXtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5vcGVuU3RhdHVze1xyXG4gICAgbWFyZ2luOiAzdmggMCAwIDd2dztcclxuICAgIC5yZW1haW5TZWF0c3tcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGgye1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgNXZ3IDAgMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAjc2VhdHN7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICBsaXtcclxuICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICAgICAgd2lkdGg6IDY0cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNjRweDtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMnZoIDJ2dztcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDVweCA1cHggcmdiYSgwLCAwLCAwLCAwLjI1KVxyXG4gICAgICAgIH1cclxuICAgICAgICAub2NjdXBpZWR7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGQTc0NEE7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <ion-router-outlet style=\"overflow-y: scroll;\">\r\n    <ion-header>\r\n      <ion-toolbar color=\"bar\">\r\n        <header>\r\n          <ion-tab-button class=\"atHeader\" tab=\"home\">\r\n            <a class=\"logo\"><img src=\"../assets/icon/logo.png\" alt=\"logo\"></a>\r\n          </ion-tab-button>\r\n\r\n          <ion-tab-button class=\"atHeader\" tab=\"login\">\r\n            <a class=\"Login\">\r\n              <p class=\"center\" [ngClass]=\"{'loggedIn': http.logInState.logIn === true}\">{{http.logInState.logIn === true? http.logInState.name : '登入'}}</p>\r\n            </a>\r\n          </ion-tab-button>\r\n\r\n        </header>\r\n\r\n      </ion-toolbar>\r\n    </ion-header>\r\n\r\n\r\n    <h3>會員資料</h3>\r\n\r\n    <div id=\"infor\" style=\"line-height: 18px\">\r\n      <p>姓名：{{http.logInState.name}}</p>\r\n      <p>電話：{{http.logInState.phone}}</p>\r\n      <p>信箱：{{http.logInState.email}}</p>\r\n      <p>地址：{{http.logInState.address}}</p>\r\n      <p>紅利點數：{{http.logInState.bonus}}</p>\r\n    </div>\r\n    <div id=\"button\">\r\n      <div>\r\n        <button class=\"top\"><span class=\"iconify\" data-icon=\"la:qrcode\" data-width=\"60\"></span><br>掃描QR code</button>\r\n        <button class=\"top\" (click)=\"edit()\"><span id=\"edit\" class=\"iconify\" data-icon=\"lucide:edit\"\r\n            data-width=\"60\"></span><br>編輯個人資料</button>\r\n      </div>\r\n      <div>\r\n        <button class=\"med\" (click)=\"bonus()\"><span class=\"iconify\" data-icon=\"uil:exchange\"\r\n            data-width=\"60\"></span><br>紅利點數兌換</button>\r\n        <button (click)=\"record()\" class=\"med\">\r\n          <span class=\"iconify\" data-icon=\"teenyicons:text-document-outline\" data-width=\"60\"></span><br>個人點餐紀錄\r\n        </button>\r\n      </div>\r\n      <div id=\"botbutton\">\r\n        <button (click)=\"barcode()\" class=\"bot\" id=\"fifth\"><span class=\"iconify\" data-icon=\"ic:baseline-barcode\"\r\n            id=\"abcd\" data-width=\"60\"></span><br>持有兌換條碼</button>\r\n        <button class=\"bot\" id=\"sixth\"><span class=\"iconify\" data-icon=\"mdi:logout\"\r\n            data-width=\"60\"></span><br>登出<br><br>\r\n        </button>\r\n\r\n      </div>\r\n\r\n\r\n    </div>\r\n    <img class=\"bg\" src=\"../../assets/icon/LOGO_MONO.svg\" alt=\"\">\r\n  </ion-router-outlet>\r\n</ion-content>");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n\r\n  <ion-router-outlet class=\"back\">\r\n    <ion-header>\r\n      <ion-toolbar color=\"bar\">\r\n        <header>\r\n          <ion-tab-button class=\"atHeader\" tab=\"home\">\r\n            <a class=\"logo\"><img src=\"../assets/icon/logo.png\" alt=\"logo\"></a>\r\n          </ion-tab-button>\r\n\r\n          <ion-tab-button class=\"atHeader\" tab=\"login\">\r\n            <a class=\"Login\">\r\n              <p class=\"center\" [ngClass]=\"{'loggedIn': http.logInState.logIn === true}\">{{http.logInState.logIn === true? '{{http.logInState.name}}' : '登入'}}</p>\r\n            </a>\r\n          </ion-tab-button>\r\n\r\n        </header>\r\n\r\n      </ion-toolbar>\r\n    </ion-header>\r\n\r\n    <h3 id=\"h3\" style=\"font-weight: bolder;\">登入</h3>\r\n\r\n    <form class=\"form-inline\">\r\n      <label for=\"account\">帳號：</label>\r\n      <input type=\"text\" class=\"form-control\" placeholder=\"電話或信箱\" id=\"account\" name=\"account\" [(ngModel)]='account'\r\n        value=\"\" required=\"required\">\r\n      <br>\r\n      <br>\r\n      <label for=\"pwd\">密碼：</label>\r\n      <input type=\"password\" class=\"form-control\" placeholder=\"您的密碼\" id=\"pwd\" name=\"pwd\" [(ngModel)]='pwd' value=\"\"\r\n        required=\"required\">\r\n      <br>\r\n      <p id=\"warning\" [style.visibility]=\"http.checkIfuserExist.visible\">帳號或密碼錯誤</p>\r\n\r\n      <ion-button type=\"submit\" class=\"login\" (click)=\"userLogin()\">登入</ion-button>\r\n      <br><br>\r\n      <button type=\"submit\" class=\"forgetSignIn\" (click)=\"forget()\">忘記密碼?</button>\r\n      <button type=\"submit\" class=\"forgetSignIn\" (click)=\"signUp()\">申請帳號</button>\r\n      <br><br>\r\n\r\n      <div class=\"googleFb\">\r\n        <button class=\"butGoogleFb\"><span class=\"iconify\" data-icon=\"ic:sharp-facebook\"></span>使用Facebook帳號登入</button>\r\n        <br>\r\n        <button class=\"butGoogleFb\"><span class=\"iconify\"\r\n            data-icon=\"flat-color-icons:google\"></span>使用Google帳號登入</button>\r\n      </div>\r\n    </form>\r\n\r\n    <img class=\"bg\" src=\"../../assets/icon/LOGO_MONO.svg\" alt=\"\">\r\n\r\n  </ion-router-outlet>\r\n</ion-content>");

/***/ }),

/***/ 1911:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/player-tabs/player-tabs.page.html ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content color=\"front\">\r\n\r\n  <ion-tabs>\r\n    <ion-tab-bar class=\"navBar atFooter\" slot=\"bottom\">\r\n  <!-- ------------------------------------------- -->\r\n      <ion-tab-button tab=\"main\" class=\"atFooter\">\r\n  \r\n        <ion-icon name=\"home-outline\"></ion-icon>\r\n  \r\n        <ion-label>首頁</ion-label>\r\n  \r\n      </ion-tab-button>\r\n  <!-- ------------------------------------------------ -->\r\n      <ion-tab-button tab=\"order\" class=\"atFooter\">\r\n  \r\n        <!-- <ion-icon name=\"briefcase-outline\"></ion-icon> -->\r\n  \r\n        <span class=\"iconify \" data-icon=\"icon-park-outline:rice\" data-inline=\"false\" width=\"30\"></span>\r\n  \r\n        <ion-label>點餐</ion-label>\r\n  \r\n      </ion-tab-button>\r\n      <!-- ------------------------------------------------ -->\r\n  \r\n      <ion-tab-button tab=\"store-situation\" class=\"atFooter\">\r\n  \r\n        <span class=\"iconify \" data-icon=\"mdi:table-chair\" data-inline=\"false\" width=\"30\"></span>\r\n  \r\n        <ion-label>店內情況</ion-label>\r\n  \r\n      </ion-tab-button>\r\n  \r\n      <ion-tab-button tab=\"delivery-tracking\" class=\"atFooter\">\r\n  \r\n        <span class=\"iconify \" data-icon=\"healthicons:vespa-motorcycle-outline\" data-inline=\"false\" width=\"40\" style=\"margin-top: -5%\"></span>\r\n  \r\n        <ion-label style=\"margin-top: -5%\">外送追蹤</ion-label>\r\n  \r\n      </ion-tab-button>\r\n  \r\n      <!-- <ion-tab-button tab=\"member\" class=\"atFooter\" [disabled]=\"http.currentStep === 'finish' || http.logInState.logIn === false \"> -->\r\n      \r\n        <ion-tab-button tab=\"member\" class=\"atFooter\" [disabled]=\"http.currentStep === 'finish' \">\r\n  \r\n        <ion-icon name=\"person-outline\"></ion-icon>\r\n  \r\n        <ion-label>會員專區</ion-label>\r\n  \r\n      </ion-tab-button>\r\n  \r\n    </ion-tab-bar>\r\n  \r\n  </ion-tabs>\r\n</ion-content>");

/***/ }),

/***/ 6031:
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/store-situation/store-situation.page.html ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar color=\"bar\">\r\n    <header>\r\n      <ion-tab-button class=\"atHeader\" tab=\"home\">\r\n        <a class=\"logo\"><img src=\"../assets/icon/logo.png\" alt=\"logo\"></a>\r\n      </ion-tab-button>\r\n\r\n      <ion-tab-button class=\"atHeader\" tab=\"login\">\r\n        <a class=\"Login\">\r\n          <p class=\"center\" [ngClass]=\"{'loggedIn': http.logInState.logIn === true}\">{{http.logInState.logIn === true? http.logInState.name : '登入'}}</p>\r\n        </a>\r\n      </ion-tab-button>\r\n\r\n    </header>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content color=\"front\">\r\n\r\n  <img class=\"bg\" src=\"../../assets/icon/LOGO_MONO.svg\" alt=\"玩\">\r\n\r\n  <div class=\"notOpen\" *ngIf=\"open === false\">\r\n    <h1 class=\"title\">{{openStatus}}</h1>\r\n\r\n    <div class=\"status\">\r\n      <img src=\"../../assets/icon/question.svg\" alt=\"Q\">\r\n    </div>\r\n\r\n    <div class=\"message\">\r\n      <h1>還沒開始喔</h1>\r\n      <h1>先去別處逛逛?</h1>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"openStatus\" *ngIf=\"open === true\">\r\n    <h2>營業狀態: <span>{{openStatus}}</span></h2>\r\n    <div class=\"remainSeats\">\r\n      <h2>座位總數: 16</h2>\r\n      <h2>剩餘座位: <span>{{remainSeats}}</span></h2>\r\n    </div>\r\n\r\n    <div class=\"seatStaus\">\r\n      <ul id=\"seats\">\r\n        <li *ngFor=\"let seat of seats\" [ngClass]=\"{'occupied': seat.occupied === true}\">\r\n          <span class=\"center\">{{seat.message}}</span>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=common.js.map
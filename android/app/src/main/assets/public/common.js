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

/***/ 6776:
/*!*********************************************************!*\
  !*** ./src/app/order/payment/payment-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentPageRoutingModule": () => (/* binding */ PaymentPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _payment_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payment.page */ 3934);




const routes = [
    {
        path: '',
        component: _payment_page__WEBPACK_IMPORTED_MODULE_0__.PaymentPage
    }
];
let PaymentPageRoutingModule = class PaymentPageRoutingModule {
};
PaymentPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PaymentPageRoutingModule);



/***/ }),

/***/ 6493:
/*!*************************************************!*\
  !*** ./src/app/order/payment/payment.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentPageModule": () => (/* binding */ PaymentPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _payment_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payment-routing.module */ 6776);
/* harmony import */ var _payment_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payment.page */ 3934);







let PaymentPageModule = class PaymentPageModule {
};
PaymentPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _payment_routing_module__WEBPACK_IMPORTED_MODULE_0__.PaymentPageRoutingModule
        ],
        declarations: [_payment_page__WEBPACK_IMPORTED_MODULE_1__.PaymentPage]
    })
], PaymentPageModule);



/***/ }),

/***/ 3934:
/*!***********************************************!*\
  !*** ./src/app/order/payment/payment.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentPage": () => (/* binding */ PaymentPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_payment_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./payment.page.html */ 9218);
/* harmony import */ var _payment_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payment.page.scss */ 2238);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _service_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/http.service */ 561);







let PaymentPage = class PaymentPage {
    constructor(http, router, navContoller) {
        this.http = http;
        this.router = router;
        this.navContoller = navContoller;
        this.CartData = [];
        this.cartPushed = false;
        if (router.getCurrentNavigation().extras.state) {
            const theCart = router.getCurrentNavigation().extras.state;
            console.log(theCart);
            this.CartData = theCart;
        }
    }
    ngOnInit() {
    }
    prepareCart(formData, payment) {
        let userName = 'deomo';
        let userID = 'demo';
        return new Promise((resolve, reject) => {
            if (formData) {
                resolve('update');
                formData.append('userName', userName);
                formData.append('userID', userID);
                formData.append('theCart', JSON.stringify(this.CartData.theCart));
                formData.append('total', this.CartData.total);
                formData.append('payment', payment);
            }
            else {
                reject('error');
            }
        });
    }
    backToOrder() {
        this.navContoller.back();
    }
    pushCart(payment) {
        let formData = new FormData();
        if (this.CartData.theCart.length > 0) {
            console.log(payment);
            this.prepareCart(formData, payment).then((resolve) => {
                console.log(resolve);
            }).then(() => {
                formData.forEach((value, key) => {
                    console.log(key + "" + value);
                });
            }).then(() => {
                let Url = 'http://localhost/foodPlayer/src/app/php/toCart.php';
                this.http.pushData(Url, formData);
                this.cartPushed = true;
                this.http.clearCart();
            }).catch((reject) => {
                console.log(reject);
            });
        }
    }
    toTracking() {
        let pushstate = this.cartPushed;
        let start = new Date().getTime();
        const payload = { pushstate, start };
        this.router.navigate(['/player-tabs/delivery-tracking'], { state: payload });
        this.cartPushed = false;
    }
};
PaymentPage.ctorParameters = () => [
    { type: _service_http_service__WEBPACK_IMPORTED_MODULE_2__.HttpService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController }
];
PaymentPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-payment',
        template: _raw_loader_payment_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_payment_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PaymentPage);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_player_tabs_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./player-tabs.page.html */ 1911);
/* harmony import */ var _player_tabs_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player-tabs.page.scss */ 1641);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let PlayerTabsPage = class PlayerTabsPage {
    constructor() { }
    ngOnInit() {
    }
};
PlayerTabsPage.ctorParameters = () => [];
PlayerTabsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-player-tabs',
        template: _raw_loader_player_tabs_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_player_tabs_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PlayerTabsPage);



/***/ }),

/***/ 561:
/*!*****************************************!*\
  !*** ./src/app/service/http.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpService": () => (/* binding */ HttpService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 1841);



let HttpService = class HttpService {
    constructor(http) {
        this.http = http;
        this.currentAmount = 0;
        this.products = [];
        this.barcodes = [];
        this.shoppingCart = [];
    }
    // curries: object[] = []
    // dons: object[] = []
    // frieds: object[] = []
    // sweets: object[] = []
    getData(Url, target) {
        return this.http.get(Url).subscribe(data => {
            console.log(data);
            if (target === 'product') {
                for (let i = 0; i < Object.keys(data).length; i++) {
                    this.products.push(data[i]);
                    // this.SortProducts(data[i])
                }
            }
            if (target === 'barcode') {
                for (let i = 0; i < Object.keys(data).length; i++) {
                    this.barcodes.push(data[i]);
                }
            }
        });
    }
    pushData(Url, dataToPush) {
        let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders();
        header.append('Accept', 'application/json');
        header.append('Contnet-Type', 'application/json');
        return this.http.post(Url, dataToPush, { headers: header }).subscribe(response => {
            console.log(response);
        }, error => {
            console.log(error);
        });
    }
    addShoppingCart(product) {
        if (this.shoppingCart.length > 0) {
            this.addOnTop(product);
        }
        else {
            this.addNewOne(product);
        }
    }
    addOnTop(product) {
        for (let i = 0; i < this.shoppingCart.length; i++) {
            if (product.ID === this.shoppingCart[i].ID) {
                this.shoppingCart[i].amount++;
                this.shoppingCart[i].price = this.shoppingCart[i].price * this.shoppingCart[i].amount;
                this.currentAmount++;
                return;
            }
        }
        this.addNewOne(product);
    }
    addNewOne(product) {
        this.shoppingCart.push({ ID: product.ID, name: product.name, image: product.image, price: product.price, amount: 1 });
        this.currentAmount++;
    }
    upDateCart(responseCart, newAmount) {
        this.shoppingCart = responseCart;
        if (responseCart === 0) {
            this.currentAmount = 0;
        }
        else {
            this.currentAmount = newAmount;
        }
    }
    clearCart() {
        this.shoppingCart.splice(0);
        this.currentAmount = 0;
    }
};
HttpService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient }
];
HttpService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], HttpService);



/***/ }),

/***/ 2238:
/*!*************************************************!*\
  !*** ./src/app/order/payment/payment.page.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".payments {\n  display: flex;\n  flex-direction: column;\n}\n.payments ion-button {\n  width: 70vw;\n  height: 30vh;\n  margin: 3% auto;\n  border-radius: 10px;\n}\n.payments ion-button p {\n  position: absolute;\n  bottom: 0;\n  font-size: 36px;\n  margin: 0 0 5vw 0;\n}\n.payments #cash {\n  --background: #5DAFEF!important;\n}\n.payments #taiwanPay {\n  border: 1px solid #5DAFEF !important;\n  --background: #ffffff!important;\n}\n.result {\n  position: absolute;\n  width: 100vw;\n  z-index: 2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBheW1lbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0FBQ0o7QUFBSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBRVI7QUFEUTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUdaO0FBQUk7RUFDSSwrQkFBQTtBQUVSO0FBQUk7RUFDSSxvQ0FBQTtFQUNBLCtCQUFBO0FBRVI7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUFDSiIsImZpbGUiOiJwYXltZW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYXltZW50c3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgaW9uLWJ1dHRvbntcclxuICAgICAgICB3aWR0aDogNzB2dztcclxuICAgICAgICBoZWlnaHQ6IDMwdmg7XHJcbiAgICAgICAgbWFyZ2luOiAzJSBhdXRvO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgcHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzZweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIDAgNXZ3IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgI2Nhc2h7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjNURBRkVGIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgICN0YWl3YW5QYXl7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzVEQUZFRiFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxuLnJlc3VsdHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIHotaW5kZXg6IDI7XHJcbn0iXX0= */");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwbGF5ZXItdGFicy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 9218:
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/order/payment/payment.page.html ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar color=\"bar\">\r\n    <header>\r\n      <ion-tab-button class=\"atHeader\" tab=\"home\">\r\n        <a class=\"logo\"><img src=\"../assets/icon/logo.png\" alt=\"logo\"></a>        \r\n      </ion-tab-button>\r\n\r\n      <ion-tab-button class=\"atHeader\" tab=\"login\">\r\n        <a class=\"Login\"><p class=\"center\">登入</p></a>\r\n      </ion-tab-button>\r\n\r\n    </header>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content color=\"front\">\r\n  <img class=\"bg\" src=\"../../../assets/icon/LOGO_MONO.svg\" alt=\"玩\">\r\n\r\n<div class=\"pay\" *ngIf=\"cartPushed === false\">\r\n  <h1 class=\"title\">付款方式</h1>\r\n  <ion-buttons class=\"backBtn\">\r\n    <ion-button (click)=\"backToOrder()\">\r\n      <span class=\"iconify goBack\" data-icon=\"akar-icons:arrow-back-thick-fill\"></span>\r\n    </ion-button>\r\n  </ion-buttons>\r\n\r\n  <div class=\"payments\">\r\n    <ion-button id=\"cash\" (click)=\"pushCart('cash')\">\r\n      <img src=\"../../../assets/icon/cash.svg\" alt=\"inCash\">\r\n      <p>現金</p>\r\n    </ion-button>\r\n    <ion-button id=\"taiwanPay\" (click)=\"pushCart('taiwanPay')\">\r\n      <img src=\"../../../assets/taiwan_pay_logo.png\" alt=\"taiwanPay\">\r\n    </ion-button>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"result\" *ngIf=\"cartPushed === true\">\r\n  <h1 class=\"title\">訂單成功</h1>\r\n  <ion-buttons class=\"backBtn\">\r\n    <ion-button (click)=\"backToOrder()\">\r\n      <span class=\"iconify goBack\" data-icon=\"akar-icons:arrow-back-thick-fill\"></span>\r\n    </ion-button>\r\n  </ion-buttons>\r\n\r\n  <div class=\"status\">\r\n    <img src=\"../../../assets/icon/Pot.svg\" alt=\"pod\">\r\n  </div>\r\n\r\n  <div class=\"message\">\r\n    <h1>請耐心等候</h1>\r\n    <h2>預計抵達時間 <span class=\"countTime\">14:59</span></h2>\r\n  </div>\r\n\r\n  <div class=\"actionBtn\">\r\n    <ion-button (click)=\"toTracking()\">前往外送追蹤</ion-button>\r\n  </div>\r\n  \r\n</div>\r\n</ion-content>\r\n");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content color=\"front\">\r\n  <!-- <ion-header>\r\n    <ion-toolbar color=\"bar\">\r\n      <header>\r\n        <ion-tab-button class=\"atHeader\" tab=\"home\">\r\n          <a class=\"logo\"><img src=\"../assets/icon/logo.png\" alt=\"logo\"></a>\r\n        </ion-tab-button>\r\n  \r\n        <ion-tab-button class=\"atHeader\" tab=\"login\">\r\n          <a class=\"Login\">\r\n            <p class=\"center\">登入</p>\r\n          </a>\r\n        </ion-tab-button>\r\n  \r\n      </header>\r\n  \r\n    </ion-toolbar>\r\n  </ion-header> -->\r\n\r\n  <ion-tabs>\r\n    <ion-tab-bar class=\"navBar atFooter\" slot=\"bottom\">\r\n  <!-- ------------------------------------------- -->\r\n      <ion-tab-button tab=\"home\" class=\"atFooter\">\r\n  \r\n        <ion-icon name=\"home-outline\"></ion-icon>\r\n  \r\n        <ion-label>首頁</ion-label>\r\n  \r\n      </ion-tab-button>\r\n  <!-- ------------------------------------------------ -->\r\n      <ion-tab-button tab=\"order\" class=\"atFooter\">\r\n  \r\n        <!-- <ion-icon name=\"briefcase-outline\"></ion-icon> -->\r\n  \r\n        <span class=\"iconify \" data-icon=\"icon-park-outline:rice\" data-inline=\"false\" width=\"30\"></span>\r\n  \r\n        <ion-label>點餐</ion-label>\r\n  \r\n      </ion-tab-button>\r\n      <!-- ------------------------------------------------ -->\r\n  \r\n      <ion-tab-button tab=\"store-situation\" class=\"atFooter\">\r\n  \r\n        <span class=\"iconify \" data-icon=\"mdi:table-chair\" data-inline=\"false\" width=\"30\"></span>\r\n  \r\n        <ion-label>店內情況</ion-label>\r\n  \r\n      </ion-tab-button>\r\n  \r\n      <ion-tab-button tab=\"delivery-tracking\" class=\"atFooter\">\r\n  \r\n        <span class=\"iconify \" data-icon=\"healthicons:vespa-motorcycle-outline\" data-inline=\"false\" width=\"40\" style=\"margin-top: -5%\"></span>\r\n  \r\n        <ion-label style=\"margin-top: -5%\">外送追蹤</ion-label>\r\n  \r\n      </ion-tab-button>\r\n  \r\n      <ion-tab-button tab=\"member\" class=\"atFooter\">\r\n  \r\n        <ion-icon name=\"person-outline\"></ion-icon>\r\n  \r\n        <ion-label>會員專區</ion-label>\r\n  \r\n      </ion-tab-button>\r\n  \r\n    </ion-tab-bar>\r\n  \r\n  </ion-tabs>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=common.js.map
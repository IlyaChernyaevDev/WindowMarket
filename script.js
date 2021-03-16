/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider */ "./src/js/slider.js");
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_slider__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_Form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/Form */ "./src/js/modules/Form.js");
/* harmony import */ var _services_Api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/Api */ "./src/js/services/Api.js");
/* harmony import */ var _modules_Tab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/Tab */ "./src/js/modules/Tab.js");
/* harmony import */ var _modules_Popup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/Popup */ "./src/js/modules/Popup.js");
/* harmony import */ var _modules_Images__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/Images */ "./src/js/modules/Images.js");
/* harmony import */ var _modules_Timer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/Timer */ "./src/js/modules/Timer.js");







document.addEventListener('DOMContentLoaded', () => {
  const popupEngineer = new _modules_Popup__WEBPACK_IMPORTED_MODULE_4__["default"]('.popup_engineer', '.popup_engineer_btn');
  const popupCallHeader = new _modules_Popup__WEBPACK_IMPORTED_MODULE_4__["default"]('.popup', '.header .phone_link');
  const popupCallFeedback = new _modules_Popup__WEBPACK_IMPORTED_MODULE_4__["default"]('.popup', '.feedback .phone_link');
  const forms = new _modules_Form__WEBPACK_IMPORTED_MODULE_1__["default"]('form', new _services_Api__WEBPACK_IMPORTED_MODULE_2__["default"]('http://localhost:3000/formData'));
  const glazingTabs = new _modules_Tab__WEBPACK_IMPORTED_MODULE_3__["default"]('.glazing_block', '.glazing_content', 'active', 'a');
  const tabsPopup = new _modules_Tab__WEBPACK_IMPORTED_MODULE_3__["default"]('.balcon_icons_img', '.big_img img', 'do_image_more');
  const popupPrice = new _modules_Popup__WEBPACK_IMPORTED_MODULE_4__["default"]('.popup_calc', '.glazing_price_btn');
  const popupProfile = new _modules_Popup__WEBPACK_IMPORTED_MODULE_4__["default"]('.popup_calc_profile', '.popup_calc_button', '.popup_calc');
  const popupApplication = new _modules_Popup__WEBPACK_IMPORTED_MODULE_4__["default"]('.popup_calc_end', '.popup_calc_profile_button', '.popup_calc_profile');
  const decorationTabs = new _modules_Tab__WEBPACK_IMPORTED_MODULE_3__["default"]('.no_click', '[data-decoration]', 'after_click');
  const images = new _modules_Images__WEBPACK_IMPORTED_MODULE_5__["default"]('.preview');
  const timer = new _modules_Timer__WEBPACK_IMPORTED_MODULE_6__["default"]('2021-12-18', '#days', '#hours', '#minutes', '#seconds');
  popupEngineer.addPopupListener();
  popupCallHeader.addPopupListener();
  popupCallFeedback.addPopupListener();
  forms.addFormListener();
  glazingTabs.addTabLinksListeners();
  decorationTabs.addTabLinksListeners();
  popupPrice.addPopupListener();
  tabsPopup.addTabLinksListeners();
  popupProfile.addPopupListener();
  popupApplication.addPopupListener();
  images.addImagesListener();
  timer.addTimer();
  popupCallHeader.popupShow(60000);
});

/***/ }),

/***/ "./src/js/modules/Form.js":
/*!********************************!*\
  !*** ./src/js/modules/Form.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Form; });
class Form {
  constructor(forms, api) {
    this.forms = document.querySelectorAll(forms);
    this.api = api;
    this.formStateObject = {};
  }

  addFormListener() {
    this.forms.forEach(form => {
      form.addEventListener('submit', event => {
        event.preventDefault();
        this.postFormData(form);
      });
    });
  }

  getFormData(form) {
    return new FormData(form);
  }

  postFormData(form) {
    const formData = this.getFormData(form);
    this.formStateObject = {
      windowShape: document.querySelector('.do_image_more img').alt,
      windowWidth: document.querySelector('#width').value,
      widnowHeigh: document.querySelector('#height').value,
      typeGlazing: document.querySelector('#view_type').value,
      windowProfile: document.querySelector('.checkbox').checked ? 'Холодное' : 'Теплое'
    };
    const json = JSON.stringify(Object.assign(this.formStateObject, Object.fromEntries(formData.entries())));
    console.log(json);
    this.addFormLoader(form);
    this.api.postFormData(json).then(function () {
      Form.removeFormLoader(form);
      console.log(this);
      form.insertAdjacentHTML('beforeend', Form.createMessage(true));
      Form.removeFormMessage(form);
    }).catch(function () {
      Form.removeFormLoader(form);
      form.insertAdjacentHTML('beforeend', Form.createMessage(false));
      Form.removeFormMessage(form);
    }).finally(function () {
      form.reset();
    });
  }

  createFormLoader() {
    return `<img class="form__loader" src="assets/slick/ajax-loader.gif">`;
  }

  addFormLoader(form) {
    form.insertAdjacentHTML('beforeend', this.createFormLoader());
  }

  static removeFormLoader(form) {
    form.querySelector('.form__loader').remove();
  }

  static createMessage(message) {
    if (message) {
      return `<h3 class="form-message">Данный получены. Мы с вами скоро свяжемся.</h3>`;
    } else {
      return `<h3 class="form-message">Данные отправить не удалось.</h3>`;
    }
  }

  static removeFormMessage(form) {
    setTimeout(() => {
      form.querySelector('h3.form-message').remove();
    }, 10000);
  }

}

/***/ }),

/***/ "./src/js/modules/Images.js":
/*!**********************************!*\
  !*** ./src/js/modules/Images.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Images; });
class Images {
  constructor(images) {
    this.images = document.querySelectorAll(images);
    this.overlay = null;
  }

  static createImageOverlay() {
    const overlay = document.createElement('div');
    overlay.classList.add('img-popup');
    overlay.style.cssText = `display: flex;
                              position: fixed;
                              top: 0;
                              left: 0;
                              width: 100%;
                              height: 100%;
                              z-index: 9;
                              background-color: rgba(0, 0, 0, 0.5);
                              justify-content: center;
                              align-items: center;`;
    return overlay;
  }

  static createImage(src) {
    const image = document.createElement('img');
    image.src = src;
    return image;
  }

  static addImage(overlay, image) {
    overlay.insertAdjacentElement('afterbegin', image);
  }

  static addOverlay(link, overlay) {
    link.insertAdjacentElement('afterbegin', overlay);
  }

  openImage(event) {
    event.preventDefault();
    this.overlay = Images.createImageOverlay();
    const link = event.target.parentNode;
    const image = Images.createImage(link.href);
    Images.addOverlay(link, this.overlay);
    Images.addImage(this.overlay, image);
    Images.removeOverlayListenet(this.overlay);
  }

  addImagesListener() {
    this.images.forEach(image => {
      image.addEventListener('click', this.openImage);
    });
  }

  static removeOverlayListenet(overlay) {
    if (overlay) {
      overlay.addEventListener('click', event => {
        event.preventDefault();
        if (event.target === overlay) overlay.remove();
      });
    }
  }

}

/***/ }),

/***/ "./src/js/modules/Popup.js":
/*!*********************************!*\
  !*** ./src/js/modules/Popup.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Popup; });
class Popup {
  constructor(popup, openButton, previosPopup = null, closeButton = 'strong') {
    this.popup = document.querySelector(popup);
    this.openButton = document.querySelectorAll(openButton);
    this.previosPopup = document.querySelector(previosPopup);
    this.closeButton = this.popup.querySelector(closeButton);
  }

  openPopup(popup) {
    popup.style.display = 'block';
  }

  closePopup(popup) {
    popup.style.display = 'none';
  }

  addPopupListener() {
    this.openButton.forEach(button => {
      button.addEventListener('click', event => {
        event.preventDefault();

        if (this.previosPopup) {
          this.closePopup(this.previosPopup);
        }

        this.openPopup(this.popup);
      });
    });
    this.popup.addEventListener('click', event => {
      if (event.target === this.popup || event.target === this.closeButton) {
        this.closePopup(this.popup);
      }
    });

    if (this.popup.classList.contains('popup_calc_profile')) {
      const arrayCheckbox = document.querySelectorAll('.checkbox');
      arrayCheckbox[0].checked = true;
      arrayCheckbox.forEach((checkbox, index) => {
        checkbox.addEventListener('change', function (event) {
          if (event.target.checked && index === 0) {
            arrayCheckbox[1].checked = false;
          } else {
            arrayCheckbox[0].checked = false;
          }
        });
      });
    }
  }

  popupShow(time) {
    setTimeout(() => {
      this.openPopup(this.popup);
    }, time);
  }

}

/***/ }),

/***/ "./src/js/modules/Tab.js":
/*!*******************************!*\
  !*** ./src/js/modules/Tab.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Tab; });
class Tab {
  constructor(tabLinks, tabContents, activeClass, activeElement = null) {
    this.tabLinks = document.querySelectorAll(tabLinks);
    this.tabContents = document.querySelectorAll(tabContents);
    this.activeClass = activeClass;
    this.activeElement = activeElement;
  }

  addTabLinksListeners() {
    this.tabLinks.forEach(link => {
      link.addEventListener('click', event => {
        const target = event.currentTarget;
        const linkIndex = this.findLinkIndex(target);
        this.removeActiveClass();
        this.hideTabContent();
        this.addActiveClass(target);
        this.showTabContent(linkIndex);
      });
    });
  }

  addActiveClass(target) {
    if (this.activeElement) {
      target.querySelector(this.activeElement).classList.add(this.activeClass);
    } else {
      target.classList.add(this.activeClass);
    }
  }

  removeActiveClass() {
    this.tabLinks.forEach(link => {
      if (this.activeElement) {
        link.querySelector(this.activeElement).classList.remove(this.activeClass);
      } else {
        link.classList.remove(this.activeClass);
      }
    });
  }

  findLinkIndex(link) {
    let index;
    this.tabLinks.forEach((item, i) => {
      if (item === link) index = i;
    });
    return index;
  }

  showTabContent(linkNumber) {
    this.tabContents.forEach((tab, index) => {
      if (index === linkNumber) {
        tab.style.display = 'block';
      }
    });
  }

  hideTabContent() {
    this.tabContents.forEach(tab => {
      tab.style.display = 'none';
    });
  }

}

/***/ }),

/***/ "./src/js/modules/Timer.js":
/*!*********************************!*\
  !*** ./src/js/modules/Timer.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Timer; });
class Timer {
  constructor(deadline, days, hours, minutes, seconds) {
    this.deadline = new Date(deadline);
    this.days = document.querySelector(days);
    this.hours = document.querySelector(hours);
    this.minutes = document.querySelector(minutes);
    this.seconds = document.querySelector(seconds);
  }

  addTimer() {
    this.timeInterval = setInterval(() => this.updateTimer(), 1000);
  }

  calculateTime() {
    let timeDifference = +this.deadline - +Date.now(),
        days = Math.floor(timeDifference / (1000 * 60 * 60 * 24)),
        hours = Math.floor(timeDifference / (1000 * 60 * 60) % 24),
        minutes = Math.floor(timeDifference / (1000 * 60) % 60),
        seconds = Math.floor(timeDifference / 1000 % 60);
    return {
      'total': timeDifference,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }

  updateTimer() {
    const time = this.calculateTime();
    this.days.innerHTML = this.getZero(time.days);
    this.hours.innerHTML = this.getZero(time.hours);
    this.minutes.innerHTML = this.getZero(time.minutes);
    this.seconds.innerHTML = this.getZero(time.seconds);
    this.clearTotalTime(time.total);
  }

  getZero(number) {
    if (number >= 0 && number < 10) {
      return `0${number}`;
    } else {
      return number;
    }
  }

  clearTotalTime(totalTime) {
    if (totalTime <= 0) {
      clearInterval(this.timeInterval);
      this.days.innerHTML = '00';
      this.hours.innerHTML = '00';
      this.minutes.innerHTML = '00';
      this.seconds.innerHTML = '00';
    }
  }

}

/***/ }),

/***/ "./src/js/services/Api.js":
/*!********************************!*\
  !*** ./src/js/services/Api.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Api; });
class Api {
  constructor(url) {
    this.url = url;
  }

  async postFormData(data) {
    return await fetch(this.url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: data
    }).then(data => data.json());
  }

}

/***/ }),

/***/ "./src/js/slider.js":
/*!**************************!*\
  !*** ./src/js/slider.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(document).ready(function () {
  $('.glazing_slider').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 1201,
      settings: {
        slidesToShow: 4,
        prevArrow: '<button class="prev arrow"></button>',
        nextArrow: '<button class="next arrow"></button>',
        slidesToScroll: 1
      }
    }, {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        prevArrow: '<button class="prev arrow"></button>',
        nextArrow: '<button class="next arrow"></button>',
        slidesToScroll: 2
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        prevArrow: '<button class="prev arrow"></button>',
        nextArrow: '<button class="next arrow"></button>',
        slidesToScroll: 2
      }
    }, {
      breakpoint: 530,
      settings: {
        slidesToShow: 1,
        prevArrow: '<button class="prev arrow"></button>',
        nextArrow: '<button class="next arrow"></button>',
        slidesToScroll: 1
      }
    }]
  });
  $('.decoration_slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        prevArrow: '<button class="prev arrow"></button>',
        nextArrow: '<button class="next arrow"></button>',
        slidesToScroll: 1
      }
    }, {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        prevArrow: '<button class="prev arrow"></button>',
        nextArrow: '<button class="next arrow"></button>',
        slidesToScroll: 2
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        prevArrow: '<button class="prev arrow"></button>',
        nextArrow: '<button class="next arrow"></button>',
        slidesToScroll: 1
      }
    }]
  });
});

/***/ })

/******/ });
//# sourceMappingURL=script.js.map
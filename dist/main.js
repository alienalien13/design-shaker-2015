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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_sass__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_sass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_sass__);


$(function(){

	$('.menu--button').on('click', function(){

		$('.home-menu').toggleClass('nav-hide');

		/* cross or ham inside menu-button */
		if ( $('.menu-icon').is( ".fa-bars" ) ) {

			$('.menu-icon').addClass('fa-times')
			$('.menu-icon').removeClass('fa-bars')

		} else if ( $('.menu-icon').is( ".fa-times" ) ) {

			$('.menu-icon').addClass('fa-bars')
			$('.menu-icon').removeClass('fa-times')

		}

	})

	/* scroll to next block */
	$('.button-slide-down').on('click', function(ev){

		$(window).scrollTop( $(ev.target).parent().position().top + $(ev.target).parent().innerHeight() )

	})


	/* menu */
	$('.home-menu__about').on('click', function(){
		$(window).scrollTop( $('.about-block-wrap').offset().top )
	})
	$('.home-menu__big-deal').on('click', function(){
		$(window).scrollTop( $('.big-deal').offset().top )
	})
	$('.home-menu__fresh').on('click', function(){
		$(window).scrollTop( $('.fresh').offset().top )
	})
	$('.home-menu__office').on('click', function(){
		$(window).scrollTop( $('.office').offset().top )
	})
	$('.home-menu__exhibitor').on('click', function(){
		$(window).scrollTop( $('.why').offset().top )
	})
	$('.home-menu__contact').on('click', function(){
		$(window).scrollTop( $('.contacts').offset().top )
	})
	/* - - - - - - - */

})

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
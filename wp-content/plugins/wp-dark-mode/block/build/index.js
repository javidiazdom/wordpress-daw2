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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "[for=\"style_8\"],\n[for=\"style_9\"],\n[for=\"style_10\"],\n[for=\"style_11\"],\n[for=\"style_12\"],\n[for=\"style_13\"] {\n  border: 1px solid #ddd; }\n  [for=\"style_8\"] img,\n  [for=\"style_9\"] img,\n  [for=\"style_10\"] img,\n  [for=\"style_11\"] img,\n  [for=\"style_12\"] img,\n  [for=\"style_13\"] img {\n    height: auto;\n    width: 90%; }\n", "",{"version":3,"sources":["webpack://src/style.scss"],"names":[],"mappings":"AAAA;;;;;;EAME,sBAAsB,EAAA;EACtB;;;;;;IAEE,YAAY;IACZ,UAAU,EAAA","sourcesContent":["[for=\"style_8\"],\r\n[for=\"style_9\"],\r\n[for=\"style_10\"],\r\n[for=\"style_11\"],\r\n[for=\"style_12\"],\r\n[for=\"style_13\"] {\r\n  border: 1px solid #ddd;\r\n\r\n  img {\r\n    height: auto;\r\n    width: 90%;\r\n  }\r\n\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/theme-switch/style.scss":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/theme-switch/style.scss ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "html.wp-dark-mode-theme-darkmode {\n  /**--- Main Styles ----*/\n  /**--- Link Styles ----*/\n  /**--- Link Pseoudo Styles ----*/\n  /**--- Input Styles ----*/\n  /** Editor Area **/ }\n  html.wp-dark-mode-theme-darkmode .interface-interface-skeleton__header :not(.wp-dark-mode-ignore):not(mark):not(code):not(pre):not(ins):not(option):not(input):not(select):not(textarea):not(button):not(a):not(video):not(canvas):not(progress):not(iframe):not(svg):not(path):not(.mejs-iframe-overlay):not(.mejs-time-slider):not(.mejs-overlay-play):not(.block-editor-default-block-appender__content),\n  html.wp-dark-mode-theme-darkmode .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) :not(.wp-dark-mode-ignore):not(mark):not(code):not(pre):not(ins):not(option):not(input):not(select):not(textarea):not(button):not(a):not(video):not(canvas):not(progress):not(iframe):not(svg):not(path):not(.mejs-iframe-overlay):not(.mejs-time-slider):not(.mejs-overlay-play):not(.block-editor-default-block-appender__content) {\n    background-color: #1B2836 !important;\n    color: #fff !important;\n    border-color: #3d5a7a !important; }\n  html.wp-dark-mode-theme-darkmode .interface-interface-skeleton__header a:not(.wp-dark-mode-ignore),\n  html.wp-dark-mode-theme-darkmode .interface-interface-skeleton__header a *:not(.wp-dark-mode-ignore),\n  html.wp-dark-mode-theme-darkmode .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) a:not(.wp-dark-mode-ignore),\n  html.wp-dark-mode-theme-darkmode .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) a *:not(.wp-dark-mode-ignore) {\n    background-color: transparent !important;\n    color: #459BE6 !important; }\n  html.wp-dark-mode-theme-darkmode .interface-interface-skeleton__header a:active,\n  html.wp-dark-mode-theme-darkmode .interface-interface-skeleton__header a:active *,\n  html.wp-dark-mode-theme-darkmode .interface-interface-skeleton__header a:visited,\n  html.wp-dark-mode-theme-darkmode .interface-interface-skeleton__header a:visited *,\n  html.wp-dark-mode-theme-darkmode .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) a:active,\n  html.wp-dark-mode-theme-darkmode .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) a:active *,\n  html.wp-dark-mode-theme-darkmode .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) a:visited,\n  html.wp-dark-mode-theme-darkmode .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) a:visited * {\n    color: #459BE6 !important;\n    border-color: #3d5a7a !important; }\n  html.wp-dark-mode-theme-darkmode .interface-interface-skeleton__header button:not(#collapse-button),\n  html.wp-dark-mode-theme-darkmode .interface-interface-skeleton__header iframe,\n  html.wp-dark-mode-theme-darkmode .interface-interface-skeleton__header iframe *,\n  html.wp-dark-mode-theme-darkmode .interface-interface-skeleton__header input,\n  html.wp-dark-mode-theme-darkmode .interface-interface-skeleton__header input[type=\"button\"],\n  html.wp-dark-mode-theme-darkmode .interface-interface-skeleton__header input[type=\"checkebox\"],\n  html.wp-dark-mode-theme-darkmode .interface-interface-skeleton__header input[type=\"date\"],\n  html.wp-dark-mode-theme-darkmode .interface-interface-skeleton__header input[type=\"datetime-local\"],\n  html.wp-dark-mode-theme-darkmode .interface-interface-skeleton__header input[type=\"email\"],\n  html.wp-dark-mode-theme-darkmode .interface-interface-skeleton__header input[type=\"image\"],\n  html.wp-dark-mode-theme-darkmode .interface-interface-skeleton__header input[type=\"month\"],\n  html.wp-dark-mode-theme-darkmode .interface-interface-skeleton__header input[type=\"number\"],\n  html.wp-dark-mode-theme-darkmode .interface-interface-skeleton__header input[type=\"range\"],\n  html.wp-dark-mode-theme-darkmode .interface-interface-skeleton__header input[type=\"reset\"],\n  html.wp-dark-mode-theme-darkmode .interface-interface-skeleton__header input[type=\"search\"],\n  html.wp-dark-mode-theme-darkmode .interface-interface-skeleton__header input[type=\"submit\"],\n  html.wp-dark-mode-theme-darkmode .interface-interface-skeleton__header input[type=\"tel\"],\n  html.wp-dark-mode-theme-darkmode .interface-interface-skeleton__header input[type=\"text\"],\n  html.wp-dark-mode-theme-darkmode .interface-interface-skeleton__header input[type=\"time\"],\n  html.wp-dark-mode-theme-darkmode .interface-interface-skeleton__header input[type=\"url\"],\n  html.wp-dark-mode-theme-darkmode .interface-interface-skeleton__header input[type=\"week\"],\n  html.wp-dark-mode-theme-darkmode .interface-interface-skeleton__header select,\n  html.wp-dark-mode-theme-darkmode .interface-interface-skeleton__header textarea:not(.block-editor-default-block-appender__content):not(.editor-post-title__input),\n  html.wp-dark-mode-theme-darkmode .interface-interface-skeleton__header i:not(.wp-dark-mode-ignore),\n  html.wp-dark-mode-theme-darkmode .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) button:not(#collapse-button),\n  html.wp-dark-mode-theme-darkmode .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) iframe,\n  html.wp-dark-mode-theme-darkmode .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) iframe *,\n  html.wp-dark-mode-theme-darkmode .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input,\n  html.wp-dark-mode-theme-darkmode .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"button\"],\n  html.wp-dark-mode-theme-darkmode .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"checkebox\"],\n  html.wp-dark-mode-theme-darkmode .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"date\"],\n  html.wp-dark-mode-theme-darkmode .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"datetime-local\"],\n  html.wp-dark-mode-theme-darkmode .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"email\"],\n  html.wp-dark-mode-theme-darkmode .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"image\"],\n  html.wp-dark-mode-theme-darkmode .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"month\"],\n  html.wp-dark-mode-theme-darkmode .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"number\"],\n  html.wp-dark-mode-theme-darkmode .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"range\"],\n  html.wp-dark-mode-theme-darkmode .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"reset\"],\n  html.wp-dark-mode-theme-darkmode .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"search\"],\n  html.wp-dark-mode-theme-darkmode .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"submit\"],\n  html.wp-dark-mode-theme-darkmode .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"tel\"],\n  html.wp-dark-mode-theme-darkmode .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"text\"],\n  html.wp-dark-mode-theme-darkmode .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"time\"],\n  html.wp-dark-mode-theme-darkmode .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"url\"],\n  html.wp-dark-mode-theme-darkmode .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"week\"],\n  html.wp-dark-mode-theme-darkmode .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) select,\n  html.wp-dark-mode-theme-darkmode .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) textarea:not(.block-editor-default-block-appender__content):not(.editor-post-title__input),\n  html.wp-dark-mode-theme-darkmode .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) i:not(.wp-dark-mode-ignore) {\n    background-color: #2c4158 !important;\n    color: #fff !important;\n    border-color: #3d5a7a !important; }\n    html.wp-dark-mode-theme-darkmode .interface-interface-skeleton__header button:not(#collapse-button) *,\n    html.wp-dark-mode-theme-darkmode .interface-interface-skeleton__header iframe *,\n    html.wp-dark-mode-theme-darkmode .interface-interface-skeleton__header iframe * *,\n    html.wp-dark-mode-theme-darkmode .interface-interface-skeleton__header input *,\n    html.wp-dark-mode-theme-darkmode .interface-interface-skeleton__header input[type=\"button\"] *,\n    html.wp-dark-mode-theme-darkmode .interface-interface-skeleton__header input[type=\"checkebox\"] *,\n    html.wp-dark-mode-theme-darkmode .interface-interface-skeleton__header input[type=\"date\"] *,\n    html.wp-dark-mode-theme-darkmode .interface-interface-skeleton__header input[type=\"datetime-local\"] *,\n    html.wp-dark-mode-theme-darkmode .interface-interface-skeleton__header input[type=\"email\"] *,\n    html.wp-dark-mode-theme-darkmode .interface-interface-skeleton__header input[type=\"image\"] *,\n    html.wp-dark-mode-theme-darkmode .interface-interface-skeleton__header input[type=\"month\"] *,\n    html.wp-dark-mode-theme-darkmode .interface-interface-skeleton__header input[type=\"number\"] *,\n    html.wp-dark-mode-theme-darkmode .interface-interface-skeleton__header input[type=\"range\"] *,\n    html.wp-dark-mode-theme-darkmode .interface-interface-skeleton__header input[type=\"reset\"] *,\n    html.wp-dark-mode-theme-darkmode .interface-interface-skeleton__header input[type=\"search\"] *,\n    html.wp-dark-mode-theme-darkmode .interface-interface-skeleton__header input[type=\"submit\"] *,\n    html.wp-dark-mode-theme-darkmode .interface-interface-skeleton__header input[type=\"tel\"] *,\n    html.wp-dark-mode-theme-darkmode .interface-interface-skeleton__header input[type=\"text\"] *,\n    html.wp-dark-mode-theme-darkmode .interface-interface-skeleton__header input[type=\"time\"] *,\n    html.wp-dark-mode-theme-darkmode .interface-interface-skeleton__header input[type=\"url\"] *,\n    html.wp-dark-mode-theme-darkmode .interface-interface-skeleton__header input[type=\"week\"] *,\n    html.wp-dark-mode-theme-darkmode .interface-interface-skeleton__header select *,\n    html.wp-dark-mode-theme-darkmode .interface-interface-skeleton__header textarea:not(.block-editor-default-block-appender__content):not(.editor-post-title__input) *,\n    html.wp-dark-mode-theme-darkmode .interface-interface-skeleton__header i:not(.wp-dark-mode-ignore) *,\n    html.wp-dark-mode-theme-darkmode .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) button:not(#collapse-button) *,\n    html.wp-dark-mode-theme-darkmode .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) iframe *,\n    html.wp-dark-mode-theme-darkmode .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) iframe * *,\n    html.wp-dark-mode-theme-darkmode .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input *,\n    html.wp-dark-mode-theme-darkmode .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"button\"] *,\n    html.wp-dark-mode-theme-darkmode .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"checkebox\"] *,\n    html.wp-dark-mode-theme-darkmode .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"date\"] *,\n    html.wp-dark-mode-theme-darkmode .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"datetime-local\"] *,\n    html.wp-dark-mode-theme-darkmode .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"email\"] *,\n    html.wp-dark-mode-theme-darkmode .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"image\"] *,\n    html.wp-dark-mode-theme-darkmode .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"month\"] *,\n    html.wp-dark-mode-theme-darkmode .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"number\"] *,\n    html.wp-dark-mode-theme-darkmode .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"range\"] *,\n    html.wp-dark-mode-theme-darkmode .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"reset\"] *,\n    html.wp-dark-mode-theme-darkmode .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"search\"] *,\n    html.wp-dark-mode-theme-darkmode .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"submit\"] *,\n    html.wp-dark-mode-theme-darkmode .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"tel\"] *,\n    html.wp-dark-mode-theme-darkmode .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"text\"] *,\n    html.wp-dark-mode-theme-darkmode .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"time\"] *,\n    html.wp-dark-mode-theme-darkmode .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"url\"] *,\n    html.wp-dark-mode-theme-darkmode .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"week\"] *,\n    html.wp-dark-mode-theme-darkmode .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) select *,\n    html.wp-dark-mode-theme-darkmode .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) textarea:not(.block-editor-default-block-appender__content):not(.editor-post-title__input) *,\n    html.wp-dark-mode-theme-darkmode .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) i:not(.wp-dark-mode-ignore) * {\n      background: transparent !important; }\n  html.wp-dark-mode-theme-darkmode .interface-interface-skeleton__content, html.wp-dark-mode-theme-darkmode .edit-post-visual-editor {\n    background: #1B2836;\n    color: #fff; }\n  html.wp-dark-mode-theme-darkmode .editor-post-title {\n    color: #fff; }\n\nhtml.wp-dark-mode-theme-chathams {\n  /**--- Main Styles ----*/\n  /**--- Link Styles ----*/\n  /**--- Link Pseoudo Styles ----*/\n  /**--- Input Styles ----*/\n  /** Editor Area **/ }\n  html.wp-dark-mode-theme-chathams .interface-interface-skeleton__header :not(.wp-dark-mode-ignore):not(mark):not(code):not(pre):not(ins):not(option):not(input):not(select):not(textarea):not(button):not(a):not(video):not(canvas):not(progress):not(iframe):not(svg):not(path):not(.mejs-iframe-overlay):not(.mejs-time-slider):not(.mejs-overlay-play):not(.block-editor-default-block-appender__content),\n  html.wp-dark-mode-theme-chathams .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) :not(.wp-dark-mode-ignore):not(mark):not(code):not(pre):not(ins):not(option):not(input):not(select):not(textarea):not(button):not(a):not(video):not(canvas):not(progress):not(iframe):not(svg):not(path):not(.mejs-iframe-overlay):not(.mejs-time-slider):not(.mejs-overlay-play):not(.block-editor-default-block-appender__content) {\n    background-color: #EDEBE8 !important;\n    color: #1e1e1e !important;\n    border-color: #c0b9af !important; }\n  html.wp-dark-mode-theme-chathams .interface-interface-skeleton__header a:not(.wp-dark-mode-ignore),\n  html.wp-dark-mode-theme-chathams .interface-interface-skeleton__header a *:not(.wp-dark-mode-ignore),\n  html.wp-dark-mode-theme-chathams .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) a:not(.wp-dark-mode-ignore),\n  html.wp-dark-mode-theme-chathams .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) a *:not(.wp-dark-mode-ignore) {\n    background-color: transparent !important;\n    color: #105d72 !important; }\n  html.wp-dark-mode-theme-chathams .interface-interface-skeleton__header a:active,\n  html.wp-dark-mode-theme-chathams .interface-interface-skeleton__header a:active *,\n  html.wp-dark-mode-theme-chathams .interface-interface-skeleton__header a:visited,\n  html.wp-dark-mode-theme-chathams .interface-interface-skeleton__header a:visited *,\n  html.wp-dark-mode-theme-chathams .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) a:active,\n  html.wp-dark-mode-theme-chathams .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) a:active *,\n  html.wp-dark-mode-theme-chathams .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) a:visited,\n  html.wp-dark-mode-theme-chathams .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) a:visited * {\n    color: #105d72 !important;\n    border-color: #c0b9af !important; }\n  html.wp-dark-mode-theme-chathams .interface-interface-skeleton__header button:not(#collapse-button),\n  html.wp-dark-mode-theme-chathams .interface-interface-skeleton__header iframe,\n  html.wp-dark-mode-theme-chathams .interface-interface-skeleton__header iframe *,\n  html.wp-dark-mode-theme-chathams .interface-interface-skeleton__header input,\n  html.wp-dark-mode-theme-chathams .interface-interface-skeleton__header input[type=\"button\"],\n  html.wp-dark-mode-theme-chathams .interface-interface-skeleton__header input[type=\"checkebox\"],\n  html.wp-dark-mode-theme-chathams .interface-interface-skeleton__header input[type=\"date\"],\n  html.wp-dark-mode-theme-chathams .interface-interface-skeleton__header input[type=\"datetime-local\"],\n  html.wp-dark-mode-theme-chathams .interface-interface-skeleton__header input[type=\"email\"],\n  html.wp-dark-mode-theme-chathams .interface-interface-skeleton__header input[type=\"image\"],\n  html.wp-dark-mode-theme-chathams .interface-interface-skeleton__header input[type=\"month\"],\n  html.wp-dark-mode-theme-chathams .interface-interface-skeleton__header input[type=\"number\"],\n  html.wp-dark-mode-theme-chathams .interface-interface-skeleton__header input[type=\"range\"],\n  html.wp-dark-mode-theme-chathams .interface-interface-skeleton__header input[type=\"reset\"],\n  html.wp-dark-mode-theme-chathams .interface-interface-skeleton__header input[type=\"search\"],\n  html.wp-dark-mode-theme-chathams .interface-interface-skeleton__header input[type=\"submit\"],\n  html.wp-dark-mode-theme-chathams .interface-interface-skeleton__header input[type=\"tel\"],\n  html.wp-dark-mode-theme-chathams .interface-interface-skeleton__header input[type=\"text\"],\n  html.wp-dark-mode-theme-chathams .interface-interface-skeleton__header input[type=\"time\"],\n  html.wp-dark-mode-theme-chathams .interface-interface-skeleton__header input[type=\"url\"],\n  html.wp-dark-mode-theme-chathams .interface-interface-skeleton__header input[type=\"week\"],\n  html.wp-dark-mode-theme-chathams .interface-interface-skeleton__header select,\n  html.wp-dark-mode-theme-chathams .interface-interface-skeleton__header textarea:not(.block-editor-default-block-appender__content):not(.editor-post-title__input),\n  html.wp-dark-mode-theme-chathams .interface-interface-skeleton__header i:not(.wp-dark-mode-ignore),\n  html.wp-dark-mode-theme-chathams .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) button:not(#collapse-button),\n  html.wp-dark-mode-theme-chathams .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) iframe,\n  html.wp-dark-mode-theme-chathams .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) iframe *,\n  html.wp-dark-mode-theme-chathams .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input,\n  html.wp-dark-mode-theme-chathams .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"button\"],\n  html.wp-dark-mode-theme-chathams .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"checkebox\"],\n  html.wp-dark-mode-theme-chathams .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"date\"],\n  html.wp-dark-mode-theme-chathams .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"datetime-local\"],\n  html.wp-dark-mode-theme-chathams .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"email\"],\n  html.wp-dark-mode-theme-chathams .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"image\"],\n  html.wp-dark-mode-theme-chathams .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"month\"],\n  html.wp-dark-mode-theme-chathams .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"number\"],\n  html.wp-dark-mode-theme-chathams .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"range\"],\n  html.wp-dark-mode-theme-chathams .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"reset\"],\n  html.wp-dark-mode-theme-chathams .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"search\"],\n  html.wp-dark-mode-theme-chathams .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"submit\"],\n  html.wp-dark-mode-theme-chathams .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"tel\"],\n  html.wp-dark-mode-theme-chathams .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"text\"],\n  html.wp-dark-mode-theme-chathams .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"time\"],\n  html.wp-dark-mode-theme-chathams .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"url\"],\n  html.wp-dark-mode-theme-chathams .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"week\"],\n  html.wp-dark-mode-theme-chathams .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) select,\n  html.wp-dark-mode-theme-chathams .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) textarea:not(.block-editor-default-block-appender__content):not(.editor-post-title__input),\n  html.wp-dark-mode-theme-chathams .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) i:not(.wp-dark-mode-ignore) {\n    background-color: #d7d2cb !important;\n    color: #1e1e1e !important;\n    border-color: #c0b9af !important; }\n    html.wp-dark-mode-theme-chathams .interface-interface-skeleton__header button:not(#collapse-button) *,\n    html.wp-dark-mode-theme-chathams .interface-interface-skeleton__header iframe *,\n    html.wp-dark-mode-theme-chathams .interface-interface-skeleton__header iframe * *,\n    html.wp-dark-mode-theme-chathams .interface-interface-skeleton__header input *,\n    html.wp-dark-mode-theme-chathams .interface-interface-skeleton__header input[type=\"button\"] *,\n    html.wp-dark-mode-theme-chathams .interface-interface-skeleton__header input[type=\"checkebox\"] *,\n    html.wp-dark-mode-theme-chathams .interface-interface-skeleton__header input[type=\"date\"] *,\n    html.wp-dark-mode-theme-chathams .interface-interface-skeleton__header input[type=\"datetime-local\"] *,\n    html.wp-dark-mode-theme-chathams .interface-interface-skeleton__header input[type=\"email\"] *,\n    html.wp-dark-mode-theme-chathams .interface-interface-skeleton__header input[type=\"image\"] *,\n    html.wp-dark-mode-theme-chathams .interface-interface-skeleton__header input[type=\"month\"] *,\n    html.wp-dark-mode-theme-chathams .interface-interface-skeleton__header input[type=\"number\"] *,\n    html.wp-dark-mode-theme-chathams .interface-interface-skeleton__header input[type=\"range\"] *,\n    html.wp-dark-mode-theme-chathams .interface-interface-skeleton__header input[type=\"reset\"] *,\n    html.wp-dark-mode-theme-chathams .interface-interface-skeleton__header input[type=\"search\"] *,\n    html.wp-dark-mode-theme-chathams .interface-interface-skeleton__header input[type=\"submit\"] *,\n    html.wp-dark-mode-theme-chathams .interface-interface-skeleton__header input[type=\"tel\"] *,\n    html.wp-dark-mode-theme-chathams .interface-interface-skeleton__header input[type=\"text\"] *,\n    html.wp-dark-mode-theme-chathams .interface-interface-skeleton__header input[type=\"time\"] *,\n    html.wp-dark-mode-theme-chathams .interface-interface-skeleton__header input[type=\"url\"] *,\n    html.wp-dark-mode-theme-chathams .interface-interface-skeleton__header input[type=\"week\"] *,\n    html.wp-dark-mode-theme-chathams .interface-interface-skeleton__header select *,\n    html.wp-dark-mode-theme-chathams .interface-interface-skeleton__header textarea:not(.block-editor-default-block-appender__content):not(.editor-post-title__input) *,\n    html.wp-dark-mode-theme-chathams .interface-interface-skeleton__header i:not(.wp-dark-mode-ignore) *,\n    html.wp-dark-mode-theme-chathams .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) button:not(#collapse-button) *,\n    html.wp-dark-mode-theme-chathams .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) iframe *,\n    html.wp-dark-mode-theme-chathams .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) iframe * *,\n    html.wp-dark-mode-theme-chathams .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input *,\n    html.wp-dark-mode-theme-chathams .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"button\"] *,\n    html.wp-dark-mode-theme-chathams .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"checkebox\"] *,\n    html.wp-dark-mode-theme-chathams .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"date\"] *,\n    html.wp-dark-mode-theme-chathams .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"datetime-local\"] *,\n    html.wp-dark-mode-theme-chathams .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"email\"] *,\n    html.wp-dark-mode-theme-chathams .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"image\"] *,\n    html.wp-dark-mode-theme-chathams .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"month\"] *,\n    html.wp-dark-mode-theme-chathams .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"number\"] *,\n    html.wp-dark-mode-theme-chathams .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"range\"] *,\n    html.wp-dark-mode-theme-chathams .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"reset\"] *,\n    html.wp-dark-mode-theme-chathams .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"search\"] *,\n    html.wp-dark-mode-theme-chathams .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"submit\"] *,\n    html.wp-dark-mode-theme-chathams .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"tel\"] *,\n    html.wp-dark-mode-theme-chathams .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"text\"] *,\n    html.wp-dark-mode-theme-chathams .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"time\"] *,\n    html.wp-dark-mode-theme-chathams .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"url\"] *,\n    html.wp-dark-mode-theme-chathams .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"week\"] *,\n    html.wp-dark-mode-theme-chathams .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) select *,\n    html.wp-dark-mode-theme-chathams .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) textarea:not(.block-editor-default-block-appender__content):not(.editor-post-title__input) *,\n    html.wp-dark-mode-theme-chathams .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) i:not(.wp-dark-mode-ignore) * {\n      background: transparent !important; }\n  html.wp-dark-mode-theme-chathams .interface-interface-skeleton__content, html.wp-dark-mode-theme-chathams .edit-post-visual-editor {\n    background: #EDEBE8;\n    color: #1e1e1e; }\n  html.wp-dark-mode-theme-chathams .editor-post-title {\n    color: #1e1e1e; }\n\nhtml.wp-dark-mode-theme-pumpkin {\n  /**--- Main Styles ----*/\n  /**--- Link Styles ----*/\n  /**--- Link Pseoudo Styles ----*/\n  /**--- Input Styles ----*/\n  /** Editor Area **/ }\n  html.wp-dark-mode-theme-pumpkin .interface-interface-skeleton__header :not(.wp-dark-mode-ignore):not(mark):not(code):not(pre):not(ins):not(option):not(input):not(select):not(textarea):not(button):not(a):not(video):not(canvas):not(progress):not(iframe):not(svg):not(path):not(.mejs-iframe-overlay):not(.mejs-time-slider):not(.mejs-overlay-play):not(.block-editor-default-block-appender__content),\n  html.wp-dark-mode-theme-pumpkin .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) :not(.wp-dark-mode-ignore):not(mark):not(code):not(pre):not(ins):not(option):not(input):not(select):not(textarea):not(button):not(a):not(video):not(canvas):not(progress):not(iframe):not(svg):not(path):not(.mejs-iframe-overlay):not(.mejs-time-slider):not(.mejs-overlay-play):not(.block-editor-default-block-appender__content) {\n    background-color: #1e1d19 !important;\n    color: #d6cb99 !important;\n    border-color: #565347 !important; }\n  html.wp-dark-mode-theme-pumpkin .interface-interface-skeleton__header a:not(.wp-dark-mode-ignore),\n  html.wp-dark-mode-theme-pumpkin .interface-interface-skeleton__header a *:not(.wp-dark-mode-ignore),\n  html.wp-dark-mode-theme-pumpkin .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) a:not(.wp-dark-mode-ignore),\n  html.wp-dark-mode-theme-pumpkin .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) a *:not(.wp-dark-mode-ignore) {\n    background-color: transparent !important;\n    color: #ff9323 !important; }\n  html.wp-dark-mode-theme-pumpkin .interface-interface-skeleton__header a:active,\n  html.wp-dark-mode-theme-pumpkin .interface-interface-skeleton__header a:active *,\n  html.wp-dark-mode-theme-pumpkin .interface-interface-skeleton__header a:visited,\n  html.wp-dark-mode-theme-pumpkin .interface-interface-skeleton__header a:visited *,\n  html.wp-dark-mode-theme-pumpkin .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) a:active,\n  html.wp-dark-mode-theme-pumpkin .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) a:active *,\n  html.wp-dark-mode-theme-pumpkin .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) a:visited,\n  html.wp-dark-mode-theme-pumpkin .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) a:visited * {\n    color: #ff9323 !important;\n    border-color: #565347 !important; }\n  html.wp-dark-mode-theme-pumpkin .interface-interface-skeleton__header button:not(#collapse-button),\n  html.wp-dark-mode-theme-pumpkin .interface-interface-skeleton__header iframe,\n  html.wp-dark-mode-theme-pumpkin .interface-interface-skeleton__header iframe *,\n  html.wp-dark-mode-theme-pumpkin .interface-interface-skeleton__header input,\n  html.wp-dark-mode-theme-pumpkin .interface-interface-skeleton__header input[type=\"button\"],\n  html.wp-dark-mode-theme-pumpkin .interface-interface-skeleton__header input[type=\"checkebox\"],\n  html.wp-dark-mode-theme-pumpkin .interface-interface-skeleton__header input[type=\"date\"],\n  html.wp-dark-mode-theme-pumpkin .interface-interface-skeleton__header input[type=\"datetime-local\"],\n  html.wp-dark-mode-theme-pumpkin .interface-interface-skeleton__header input[type=\"email\"],\n  html.wp-dark-mode-theme-pumpkin .interface-interface-skeleton__header input[type=\"image\"],\n  html.wp-dark-mode-theme-pumpkin .interface-interface-skeleton__header input[type=\"month\"],\n  html.wp-dark-mode-theme-pumpkin .interface-interface-skeleton__header input[type=\"number\"],\n  html.wp-dark-mode-theme-pumpkin .interface-interface-skeleton__header input[type=\"range\"],\n  html.wp-dark-mode-theme-pumpkin .interface-interface-skeleton__header input[type=\"reset\"],\n  html.wp-dark-mode-theme-pumpkin .interface-interface-skeleton__header input[type=\"search\"],\n  html.wp-dark-mode-theme-pumpkin .interface-interface-skeleton__header input[type=\"submit\"],\n  html.wp-dark-mode-theme-pumpkin .interface-interface-skeleton__header input[type=\"tel\"],\n  html.wp-dark-mode-theme-pumpkin .interface-interface-skeleton__header input[type=\"text\"],\n  html.wp-dark-mode-theme-pumpkin .interface-interface-skeleton__header input[type=\"time\"],\n  html.wp-dark-mode-theme-pumpkin .interface-interface-skeleton__header input[type=\"url\"],\n  html.wp-dark-mode-theme-pumpkin .interface-interface-skeleton__header input[type=\"week\"],\n  html.wp-dark-mode-theme-pumpkin .interface-interface-skeleton__header select,\n  html.wp-dark-mode-theme-pumpkin .interface-interface-skeleton__header textarea:not(.block-editor-default-block-appender__content):not(.editor-post-title__input),\n  html.wp-dark-mode-theme-pumpkin .interface-interface-skeleton__header i:not(.wp-dark-mode-ignore),\n  html.wp-dark-mode-theme-pumpkin .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) button:not(#collapse-button),\n  html.wp-dark-mode-theme-pumpkin .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) iframe,\n  html.wp-dark-mode-theme-pumpkin .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) iframe *,\n  html.wp-dark-mode-theme-pumpkin .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input,\n  html.wp-dark-mode-theme-pumpkin .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"button\"],\n  html.wp-dark-mode-theme-pumpkin .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"checkebox\"],\n  html.wp-dark-mode-theme-pumpkin .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"date\"],\n  html.wp-dark-mode-theme-pumpkin .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"datetime-local\"],\n  html.wp-dark-mode-theme-pumpkin .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"email\"],\n  html.wp-dark-mode-theme-pumpkin .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"image\"],\n  html.wp-dark-mode-theme-pumpkin .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"month\"],\n  html.wp-dark-mode-theme-pumpkin .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"number\"],\n  html.wp-dark-mode-theme-pumpkin .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"range\"],\n  html.wp-dark-mode-theme-pumpkin .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"reset\"],\n  html.wp-dark-mode-theme-pumpkin .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"search\"],\n  html.wp-dark-mode-theme-pumpkin .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"submit\"],\n  html.wp-dark-mode-theme-pumpkin .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"tel\"],\n  html.wp-dark-mode-theme-pumpkin .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"text\"],\n  html.wp-dark-mode-theme-pumpkin .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"time\"],\n  html.wp-dark-mode-theme-pumpkin .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"url\"],\n  html.wp-dark-mode-theme-pumpkin .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"week\"],\n  html.wp-dark-mode-theme-pumpkin .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) select,\n  html.wp-dark-mode-theme-pumpkin .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) textarea:not(.block-editor-default-block-appender__content):not(.editor-post-title__input),\n  html.wp-dark-mode-theme-pumpkin .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) i:not(.wp-dark-mode-ignore) {\n    background-color: #3a3830 !important;\n    color: #d6cb99 !important;\n    border-color: #565347 !important; }\n    html.wp-dark-mode-theme-pumpkin .interface-interface-skeleton__header button:not(#collapse-button) *,\n    html.wp-dark-mode-theme-pumpkin .interface-interface-skeleton__header iframe *,\n    html.wp-dark-mode-theme-pumpkin .interface-interface-skeleton__header iframe * *,\n    html.wp-dark-mode-theme-pumpkin .interface-interface-skeleton__header input *,\n    html.wp-dark-mode-theme-pumpkin .interface-interface-skeleton__header input[type=\"button\"] *,\n    html.wp-dark-mode-theme-pumpkin .interface-interface-skeleton__header input[type=\"checkebox\"] *,\n    html.wp-dark-mode-theme-pumpkin .interface-interface-skeleton__header input[type=\"date\"] *,\n    html.wp-dark-mode-theme-pumpkin .interface-interface-skeleton__header input[type=\"datetime-local\"] *,\n    html.wp-dark-mode-theme-pumpkin .interface-interface-skeleton__header input[type=\"email\"] *,\n    html.wp-dark-mode-theme-pumpkin .interface-interface-skeleton__header input[type=\"image\"] *,\n    html.wp-dark-mode-theme-pumpkin .interface-interface-skeleton__header input[type=\"month\"] *,\n    html.wp-dark-mode-theme-pumpkin .interface-interface-skeleton__header input[type=\"number\"] *,\n    html.wp-dark-mode-theme-pumpkin .interface-interface-skeleton__header input[type=\"range\"] *,\n    html.wp-dark-mode-theme-pumpkin .interface-interface-skeleton__header input[type=\"reset\"] *,\n    html.wp-dark-mode-theme-pumpkin .interface-interface-skeleton__header input[type=\"search\"] *,\n    html.wp-dark-mode-theme-pumpkin .interface-interface-skeleton__header input[type=\"submit\"] *,\n    html.wp-dark-mode-theme-pumpkin .interface-interface-skeleton__header input[type=\"tel\"] *,\n    html.wp-dark-mode-theme-pumpkin .interface-interface-skeleton__header input[type=\"text\"] *,\n    html.wp-dark-mode-theme-pumpkin .interface-interface-skeleton__header input[type=\"time\"] *,\n    html.wp-dark-mode-theme-pumpkin .interface-interface-skeleton__header input[type=\"url\"] *,\n    html.wp-dark-mode-theme-pumpkin .interface-interface-skeleton__header input[type=\"week\"] *,\n    html.wp-dark-mode-theme-pumpkin .interface-interface-skeleton__header select *,\n    html.wp-dark-mode-theme-pumpkin .interface-interface-skeleton__header textarea:not(.block-editor-default-block-appender__content):not(.editor-post-title__input) *,\n    html.wp-dark-mode-theme-pumpkin .interface-interface-skeleton__header i:not(.wp-dark-mode-ignore) *,\n    html.wp-dark-mode-theme-pumpkin .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) button:not(#collapse-button) *,\n    html.wp-dark-mode-theme-pumpkin .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) iframe *,\n    html.wp-dark-mode-theme-pumpkin .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) iframe * *,\n    html.wp-dark-mode-theme-pumpkin .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input *,\n    html.wp-dark-mode-theme-pumpkin .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"button\"] *,\n    html.wp-dark-mode-theme-pumpkin .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"checkebox\"] *,\n    html.wp-dark-mode-theme-pumpkin .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"date\"] *,\n    html.wp-dark-mode-theme-pumpkin .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"datetime-local\"] *,\n    html.wp-dark-mode-theme-pumpkin .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"email\"] *,\n    html.wp-dark-mode-theme-pumpkin .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"image\"] *,\n    html.wp-dark-mode-theme-pumpkin .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"month\"] *,\n    html.wp-dark-mode-theme-pumpkin .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"number\"] *,\n    html.wp-dark-mode-theme-pumpkin .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"range\"] *,\n    html.wp-dark-mode-theme-pumpkin .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"reset\"] *,\n    html.wp-dark-mode-theme-pumpkin .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"search\"] *,\n    html.wp-dark-mode-theme-pumpkin .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"submit\"] *,\n    html.wp-dark-mode-theme-pumpkin .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"tel\"] *,\n    html.wp-dark-mode-theme-pumpkin .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"text\"] *,\n    html.wp-dark-mode-theme-pumpkin .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"time\"] *,\n    html.wp-dark-mode-theme-pumpkin .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"url\"] *,\n    html.wp-dark-mode-theme-pumpkin .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"week\"] *,\n    html.wp-dark-mode-theme-pumpkin .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) select *,\n    html.wp-dark-mode-theme-pumpkin .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) textarea:not(.block-editor-default-block-appender__content):not(.editor-post-title__input) *,\n    html.wp-dark-mode-theme-pumpkin .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) i:not(.wp-dark-mode-ignore) * {\n      background: transparent !important; }\n  html.wp-dark-mode-theme-pumpkin .interface-interface-skeleton__content, html.wp-dark-mode-theme-pumpkin .edit-post-visual-editor {\n    background: #1e1d19;\n    color: #d6cb99; }\n  html.wp-dark-mode-theme-pumpkin .editor-post-title {\n    color: #d6cb99; }\n\nhtml.wp-dark-mode-theme-mustard {\n  /**--- Main Styles ----*/\n  /**--- Link Styles ----*/\n  /**--- Link Pseoudo Styles ----*/\n  /**--- Input Styles ----*/\n  /** Editor Area **/ }\n  html.wp-dark-mode-theme-mustard .interface-interface-skeleton__header :not(.wp-dark-mode-ignore):not(mark):not(code):not(pre):not(ins):not(option):not(input):not(select):not(textarea):not(button):not(a):not(video):not(canvas):not(progress):not(iframe):not(svg):not(path):not(.mejs-iframe-overlay):not(.mejs-time-slider):not(.mejs-overlay-play):not(.block-editor-default-block-appender__content),\n  html.wp-dark-mode-theme-mustard .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) :not(.wp-dark-mode-ignore):not(mark):not(code):not(pre):not(ins):not(option):not(input):not(select):not(textarea):not(button):not(a):not(video):not(canvas):not(progress):not(iframe):not(svg):not(path):not(.mejs-iframe-overlay):not(.mejs-time-slider):not(.mejs-overlay-play):not(.block-editor-default-block-appender__content) {\n    background-color: #151819 !important;\n    color: #d5d6d7 !important;\n    border-color: #444d50 !important; }\n  html.wp-dark-mode-theme-mustard .interface-interface-skeleton__header a:not(.wp-dark-mode-ignore),\n  html.wp-dark-mode-theme-mustard .interface-interface-skeleton__header a *:not(.wp-dark-mode-ignore),\n  html.wp-dark-mode-theme-mustard .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) a:not(.wp-dark-mode-ignore),\n  html.wp-dark-mode-theme-mustard .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) a *:not(.wp-dark-mode-ignore) {\n    background-color: transparent !important;\n    color: #daa40b !important; }\n  html.wp-dark-mode-theme-mustard .interface-interface-skeleton__header a:active,\n  html.wp-dark-mode-theme-mustard .interface-interface-skeleton__header a:active *,\n  html.wp-dark-mode-theme-mustard .interface-interface-skeleton__header a:visited,\n  html.wp-dark-mode-theme-mustard .interface-interface-skeleton__header a:visited *,\n  html.wp-dark-mode-theme-mustard .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) a:active,\n  html.wp-dark-mode-theme-mustard .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) a:active *,\n  html.wp-dark-mode-theme-mustard .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) a:visited,\n  html.wp-dark-mode-theme-mustard .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) a:visited * {\n    color: #daa40b !important;\n    border-color: #444d50 !important; }\n  html.wp-dark-mode-theme-mustard .interface-interface-skeleton__header button:not(#collapse-button),\n  html.wp-dark-mode-theme-mustard .interface-interface-skeleton__header iframe,\n  html.wp-dark-mode-theme-mustard .interface-interface-skeleton__header iframe *,\n  html.wp-dark-mode-theme-mustard .interface-interface-skeleton__header input,\n  html.wp-dark-mode-theme-mustard .interface-interface-skeleton__header input[type=\"button\"],\n  html.wp-dark-mode-theme-mustard .interface-interface-skeleton__header input[type=\"checkebox\"],\n  html.wp-dark-mode-theme-mustard .interface-interface-skeleton__header input[type=\"date\"],\n  html.wp-dark-mode-theme-mustard .interface-interface-skeleton__header input[type=\"datetime-local\"],\n  html.wp-dark-mode-theme-mustard .interface-interface-skeleton__header input[type=\"email\"],\n  html.wp-dark-mode-theme-mustard .interface-interface-skeleton__header input[type=\"image\"],\n  html.wp-dark-mode-theme-mustard .interface-interface-skeleton__header input[type=\"month\"],\n  html.wp-dark-mode-theme-mustard .interface-interface-skeleton__header input[type=\"number\"],\n  html.wp-dark-mode-theme-mustard .interface-interface-skeleton__header input[type=\"range\"],\n  html.wp-dark-mode-theme-mustard .interface-interface-skeleton__header input[type=\"reset\"],\n  html.wp-dark-mode-theme-mustard .interface-interface-skeleton__header input[type=\"search\"],\n  html.wp-dark-mode-theme-mustard .interface-interface-skeleton__header input[type=\"submit\"],\n  html.wp-dark-mode-theme-mustard .interface-interface-skeleton__header input[type=\"tel\"],\n  html.wp-dark-mode-theme-mustard .interface-interface-skeleton__header input[type=\"text\"],\n  html.wp-dark-mode-theme-mustard .interface-interface-skeleton__header input[type=\"time\"],\n  html.wp-dark-mode-theme-mustard .interface-interface-skeleton__header input[type=\"url\"],\n  html.wp-dark-mode-theme-mustard .interface-interface-skeleton__header input[type=\"week\"],\n  html.wp-dark-mode-theme-mustard .interface-interface-skeleton__header select,\n  html.wp-dark-mode-theme-mustard .interface-interface-skeleton__header textarea:not(.block-editor-default-block-appender__content):not(.editor-post-title__input),\n  html.wp-dark-mode-theme-mustard .interface-interface-skeleton__header i:not(.wp-dark-mode-ignore),\n  html.wp-dark-mode-theme-mustard .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) button:not(#collapse-button),\n  html.wp-dark-mode-theme-mustard .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) iframe,\n  html.wp-dark-mode-theme-mustard .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) iframe *,\n  html.wp-dark-mode-theme-mustard .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input,\n  html.wp-dark-mode-theme-mustard .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"button\"],\n  html.wp-dark-mode-theme-mustard .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"checkebox\"],\n  html.wp-dark-mode-theme-mustard .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"date\"],\n  html.wp-dark-mode-theme-mustard .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"datetime-local\"],\n  html.wp-dark-mode-theme-mustard .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"email\"],\n  html.wp-dark-mode-theme-mustard .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"image\"],\n  html.wp-dark-mode-theme-mustard .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"month\"],\n  html.wp-dark-mode-theme-mustard .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"number\"],\n  html.wp-dark-mode-theme-mustard .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"range\"],\n  html.wp-dark-mode-theme-mustard .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"reset\"],\n  html.wp-dark-mode-theme-mustard .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"search\"],\n  html.wp-dark-mode-theme-mustard .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"submit\"],\n  html.wp-dark-mode-theme-mustard .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"tel\"],\n  html.wp-dark-mode-theme-mustard .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"text\"],\n  html.wp-dark-mode-theme-mustard .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"time\"],\n  html.wp-dark-mode-theme-mustard .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"url\"],\n  html.wp-dark-mode-theme-mustard .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"week\"],\n  html.wp-dark-mode-theme-mustard .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) select,\n  html.wp-dark-mode-theme-mustard .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) textarea:not(.block-editor-default-block-appender__content):not(.editor-post-title__input),\n  html.wp-dark-mode-theme-mustard .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) i:not(.wp-dark-mode-ignore) {\n    background-color: #2c3335 !important;\n    color: #d5d6d7 !important;\n    border-color: #444d50 !important; }\n    html.wp-dark-mode-theme-mustard .interface-interface-skeleton__header button:not(#collapse-button) *,\n    html.wp-dark-mode-theme-mustard .interface-interface-skeleton__header iframe *,\n    html.wp-dark-mode-theme-mustard .interface-interface-skeleton__header iframe * *,\n    html.wp-dark-mode-theme-mustard .interface-interface-skeleton__header input *,\n    html.wp-dark-mode-theme-mustard .interface-interface-skeleton__header input[type=\"button\"] *,\n    html.wp-dark-mode-theme-mustard .interface-interface-skeleton__header input[type=\"checkebox\"] *,\n    html.wp-dark-mode-theme-mustard .interface-interface-skeleton__header input[type=\"date\"] *,\n    html.wp-dark-mode-theme-mustard .interface-interface-skeleton__header input[type=\"datetime-local\"] *,\n    html.wp-dark-mode-theme-mustard .interface-interface-skeleton__header input[type=\"email\"] *,\n    html.wp-dark-mode-theme-mustard .interface-interface-skeleton__header input[type=\"image\"] *,\n    html.wp-dark-mode-theme-mustard .interface-interface-skeleton__header input[type=\"month\"] *,\n    html.wp-dark-mode-theme-mustard .interface-interface-skeleton__header input[type=\"number\"] *,\n    html.wp-dark-mode-theme-mustard .interface-interface-skeleton__header input[type=\"range\"] *,\n    html.wp-dark-mode-theme-mustard .interface-interface-skeleton__header input[type=\"reset\"] *,\n    html.wp-dark-mode-theme-mustard .interface-interface-skeleton__header input[type=\"search\"] *,\n    html.wp-dark-mode-theme-mustard .interface-interface-skeleton__header input[type=\"submit\"] *,\n    html.wp-dark-mode-theme-mustard .interface-interface-skeleton__header input[type=\"tel\"] *,\n    html.wp-dark-mode-theme-mustard .interface-interface-skeleton__header input[type=\"text\"] *,\n    html.wp-dark-mode-theme-mustard .interface-interface-skeleton__header input[type=\"time\"] *,\n    html.wp-dark-mode-theme-mustard .interface-interface-skeleton__header input[type=\"url\"] *,\n    html.wp-dark-mode-theme-mustard .interface-interface-skeleton__header input[type=\"week\"] *,\n    html.wp-dark-mode-theme-mustard .interface-interface-skeleton__header select *,\n    html.wp-dark-mode-theme-mustard .interface-interface-skeleton__header textarea:not(.block-editor-default-block-appender__content):not(.editor-post-title__input) *,\n    html.wp-dark-mode-theme-mustard .interface-interface-skeleton__header i:not(.wp-dark-mode-ignore) *,\n    html.wp-dark-mode-theme-mustard .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) button:not(#collapse-button) *,\n    html.wp-dark-mode-theme-mustard .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) iframe *,\n    html.wp-dark-mode-theme-mustard .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) iframe * *,\n    html.wp-dark-mode-theme-mustard .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input *,\n    html.wp-dark-mode-theme-mustard .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"button\"] *,\n    html.wp-dark-mode-theme-mustard .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"checkebox\"] *,\n    html.wp-dark-mode-theme-mustard .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"date\"] *,\n    html.wp-dark-mode-theme-mustard .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"datetime-local\"] *,\n    html.wp-dark-mode-theme-mustard .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"email\"] *,\n    html.wp-dark-mode-theme-mustard .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"image\"] *,\n    html.wp-dark-mode-theme-mustard .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"month\"] *,\n    html.wp-dark-mode-theme-mustard .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"number\"] *,\n    html.wp-dark-mode-theme-mustard .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"range\"] *,\n    html.wp-dark-mode-theme-mustard .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"reset\"] *,\n    html.wp-dark-mode-theme-mustard .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"search\"] *,\n    html.wp-dark-mode-theme-mustard .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"submit\"] *,\n    html.wp-dark-mode-theme-mustard .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"tel\"] *,\n    html.wp-dark-mode-theme-mustard .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"text\"] *,\n    html.wp-dark-mode-theme-mustard .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"time\"] *,\n    html.wp-dark-mode-theme-mustard .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"url\"] *,\n    html.wp-dark-mode-theme-mustard .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"week\"] *,\n    html.wp-dark-mode-theme-mustard .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) select *,\n    html.wp-dark-mode-theme-mustard .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) textarea:not(.block-editor-default-block-appender__content):not(.editor-post-title__input) *,\n    html.wp-dark-mode-theme-mustard .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) i:not(.wp-dark-mode-ignore) * {\n      background: transparent !important; }\n  html.wp-dark-mode-theme-mustard .interface-interface-skeleton__content, html.wp-dark-mode-theme-mustard .edit-post-visual-editor {\n    background: #151819;\n    color: #d5d6d7; }\n  html.wp-dark-mode-theme-mustard .editor-post-title {\n    color: #d5d6d7; }\n\nhtml.wp-dark-mode-theme-concord {\n  /**--- Main Styles ----*/\n  /**--- Link Styles ----*/\n  /**--- Link Pseoudo Styles ----*/\n  /**--- Input Styles ----*/\n  /** Editor Area **/ }\n  html.wp-dark-mode-theme-concord .interface-interface-skeleton__header :not(.wp-dark-mode-ignore):not(mark):not(code):not(pre):not(ins):not(option):not(input):not(select):not(textarea):not(button):not(a):not(video):not(canvas):not(progress):not(iframe):not(svg):not(path):not(.mejs-iframe-overlay):not(.mejs-time-slider):not(.mejs-overlay-play):not(.block-editor-default-block-appender__content),\n  html.wp-dark-mode-theme-concord .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) :not(.wp-dark-mode-ignore):not(mark):not(code):not(pre):not(ins):not(option):not(input):not(select):not(textarea):not(button):not(a):not(video):not(canvas):not(progress):not(iframe):not(svg):not(path):not(.mejs-iframe-overlay):not(.mejs-time-slider):not(.mejs-overlay-play):not(.block-editor-default-block-appender__content) {\n    background-color: #171717 !important;\n    color: #bfb7c0 !important;\n    border-color: #4a4a4a !important; }\n  html.wp-dark-mode-theme-concord .interface-interface-skeleton__header a:not(.wp-dark-mode-ignore),\n  html.wp-dark-mode-theme-concord .interface-interface-skeleton__header a *:not(.wp-dark-mode-ignore),\n  html.wp-dark-mode-theme-concord .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) a:not(.wp-dark-mode-ignore),\n  html.wp-dark-mode-theme-concord .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) a *:not(.wp-dark-mode-ignore) {\n    background-color: transparent !important;\n    color: #f776f0 !important; }\n  html.wp-dark-mode-theme-concord .interface-interface-skeleton__header a:active,\n  html.wp-dark-mode-theme-concord .interface-interface-skeleton__header a:active *,\n  html.wp-dark-mode-theme-concord .interface-interface-skeleton__header a:visited,\n  html.wp-dark-mode-theme-concord .interface-interface-skeleton__header a:visited *,\n  html.wp-dark-mode-theme-concord .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) a:active,\n  html.wp-dark-mode-theme-concord .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) a:active *,\n  html.wp-dark-mode-theme-concord .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) a:visited,\n  html.wp-dark-mode-theme-concord .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) a:visited * {\n    color: #f776f0 !important;\n    border-color: #4a4a4a !important; }\n  html.wp-dark-mode-theme-concord .interface-interface-skeleton__header button:not(#collapse-button),\n  html.wp-dark-mode-theme-concord .interface-interface-skeleton__header iframe,\n  html.wp-dark-mode-theme-concord .interface-interface-skeleton__header iframe *,\n  html.wp-dark-mode-theme-concord .interface-interface-skeleton__header input,\n  html.wp-dark-mode-theme-concord .interface-interface-skeleton__header input[type=\"button\"],\n  html.wp-dark-mode-theme-concord .interface-interface-skeleton__header input[type=\"checkebox\"],\n  html.wp-dark-mode-theme-concord .interface-interface-skeleton__header input[type=\"date\"],\n  html.wp-dark-mode-theme-concord .interface-interface-skeleton__header input[type=\"datetime-local\"],\n  html.wp-dark-mode-theme-concord .interface-interface-skeleton__header input[type=\"email\"],\n  html.wp-dark-mode-theme-concord .interface-interface-skeleton__header input[type=\"image\"],\n  html.wp-dark-mode-theme-concord .interface-interface-skeleton__header input[type=\"month\"],\n  html.wp-dark-mode-theme-concord .interface-interface-skeleton__header input[type=\"number\"],\n  html.wp-dark-mode-theme-concord .interface-interface-skeleton__header input[type=\"range\"],\n  html.wp-dark-mode-theme-concord .interface-interface-skeleton__header input[type=\"reset\"],\n  html.wp-dark-mode-theme-concord .interface-interface-skeleton__header input[type=\"search\"],\n  html.wp-dark-mode-theme-concord .interface-interface-skeleton__header input[type=\"submit\"],\n  html.wp-dark-mode-theme-concord .interface-interface-skeleton__header input[type=\"tel\"],\n  html.wp-dark-mode-theme-concord .interface-interface-skeleton__header input[type=\"text\"],\n  html.wp-dark-mode-theme-concord .interface-interface-skeleton__header input[type=\"time\"],\n  html.wp-dark-mode-theme-concord .interface-interface-skeleton__header input[type=\"url\"],\n  html.wp-dark-mode-theme-concord .interface-interface-skeleton__header input[type=\"week\"],\n  html.wp-dark-mode-theme-concord .interface-interface-skeleton__header select,\n  html.wp-dark-mode-theme-concord .interface-interface-skeleton__header textarea:not(.block-editor-default-block-appender__content):not(.editor-post-title__input),\n  html.wp-dark-mode-theme-concord .interface-interface-skeleton__header i:not(.wp-dark-mode-ignore),\n  html.wp-dark-mode-theme-concord .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) button:not(#collapse-button),\n  html.wp-dark-mode-theme-concord .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) iframe,\n  html.wp-dark-mode-theme-concord .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) iframe *,\n  html.wp-dark-mode-theme-concord .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input,\n  html.wp-dark-mode-theme-concord .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"button\"],\n  html.wp-dark-mode-theme-concord .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"checkebox\"],\n  html.wp-dark-mode-theme-concord .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"date\"],\n  html.wp-dark-mode-theme-concord .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"datetime-local\"],\n  html.wp-dark-mode-theme-concord .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"email\"],\n  html.wp-dark-mode-theme-concord .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"image\"],\n  html.wp-dark-mode-theme-concord .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"month\"],\n  html.wp-dark-mode-theme-concord .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"number\"],\n  html.wp-dark-mode-theme-concord .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"range\"],\n  html.wp-dark-mode-theme-concord .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"reset\"],\n  html.wp-dark-mode-theme-concord .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"search\"],\n  html.wp-dark-mode-theme-concord .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"submit\"],\n  html.wp-dark-mode-theme-concord .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"tel\"],\n  html.wp-dark-mode-theme-concord .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"text\"],\n  html.wp-dark-mode-theme-concord .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"time\"],\n  html.wp-dark-mode-theme-concord .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"url\"],\n  html.wp-dark-mode-theme-concord .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"week\"],\n  html.wp-dark-mode-theme-concord .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) select,\n  html.wp-dark-mode-theme-concord .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) textarea:not(.block-editor-default-block-appender__content):not(.editor-post-title__input),\n  html.wp-dark-mode-theme-concord .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) i:not(.wp-dark-mode-ignore) {\n    background-color: #313131 !important;\n    color: #bfb7c0 !important;\n    border-color: #4a4a4a !important; }\n    html.wp-dark-mode-theme-concord .interface-interface-skeleton__header button:not(#collapse-button) *,\n    html.wp-dark-mode-theme-concord .interface-interface-skeleton__header iframe *,\n    html.wp-dark-mode-theme-concord .interface-interface-skeleton__header iframe * *,\n    html.wp-dark-mode-theme-concord .interface-interface-skeleton__header input *,\n    html.wp-dark-mode-theme-concord .interface-interface-skeleton__header input[type=\"button\"] *,\n    html.wp-dark-mode-theme-concord .interface-interface-skeleton__header input[type=\"checkebox\"] *,\n    html.wp-dark-mode-theme-concord .interface-interface-skeleton__header input[type=\"date\"] *,\n    html.wp-dark-mode-theme-concord .interface-interface-skeleton__header input[type=\"datetime-local\"] *,\n    html.wp-dark-mode-theme-concord .interface-interface-skeleton__header input[type=\"email\"] *,\n    html.wp-dark-mode-theme-concord .interface-interface-skeleton__header input[type=\"image\"] *,\n    html.wp-dark-mode-theme-concord .interface-interface-skeleton__header input[type=\"month\"] *,\n    html.wp-dark-mode-theme-concord .interface-interface-skeleton__header input[type=\"number\"] *,\n    html.wp-dark-mode-theme-concord .interface-interface-skeleton__header input[type=\"range\"] *,\n    html.wp-dark-mode-theme-concord .interface-interface-skeleton__header input[type=\"reset\"] *,\n    html.wp-dark-mode-theme-concord .interface-interface-skeleton__header input[type=\"search\"] *,\n    html.wp-dark-mode-theme-concord .interface-interface-skeleton__header input[type=\"submit\"] *,\n    html.wp-dark-mode-theme-concord .interface-interface-skeleton__header input[type=\"tel\"] *,\n    html.wp-dark-mode-theme-concord .interface-interface-skeleton__header input[type=\"text\"] *,\n    html.wp-dark-mode-theme-concord .interface-interface-skeleton__header input[type=\"time\"] *,\n    html.wp-dark-mode-theme-concord .interface-interface-skeleton__header input[type=\"url\"] *,\n    html.wp-dark-mode-theme-concord .interface-interface-skeleton__header input[type=\"week\"] *,\n    html.wp-dark-mode-theme-concord .interface-interface-skeleton__header select *,\n    html.wp-dark-mode-theme-concord .interface-interface-skeleton__header textarea:not(.block-editor-default-block-appender__content):not(.editor-post-title__input) *,\n    html.wp-dark-mode-theme-concord .interface-interface-skeleton__header i:not(.wp-dark-mode-ignore) *,\n    html.wp-dark-mode-theme-concord .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) button:not(#collapse-button) *,\n    html.wp-dark-mode-theme-concord .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) iframe *,\n    html.wp-dark-mode-theme-concord .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) iframe * *,\n    html.wp-dark-mode-theme-concord .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input *,\n    html.wp-dark-mode-theme-concord .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"button\"] *,\n    html.wp-dark-mode-theme-concord .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"checkebox\"] *,\n    html.wp-dark-mode-theme-concord .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"date\"] *,\n    html.wp-dark-mode-theme-concord .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"datetime-local\"] *,\n    html.wp-dark-mode-theme-concord .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"email\"] *,\n    html.wp-dark-mode-theme-concord .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"image\"] *,\n    html.wp-dark-mode-theme-concord .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"month\"] *,\n    html.wp-dark-mode-theme-concord .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"number\"] *,\n    html.wp-dark-mode-theme-concord .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"range\"] *,\n    html.wp-dark-mode-theme-concord .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"reset\"] *,\n    html.wp-dark-mode-theme-concord .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"search\"] *,\n    html.wp-dark-mode-theme-concord .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"submit\"] *,\n    html.wp-dark-mode-theme-concord .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"tel\"] *,\n    html.wp-dark-mode-theme-concord .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"text\"] *,\n    html.wp-dark-mode-theme-concord .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"time\"] *,\n    html.wp-dark-mode-theme-concord .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"url\"] *,\n    html.wp-dark-mode-theme-concord .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) input[type=\"week\"] *,\n    html.wp-dark-mode-theme-concord .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) select *,\n    html.wp-dark-mode-theme-concord .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) textarea:not(.block-editor-default-block-appender__content):not(.editor-post-title__input) *,\n    html.wp-dark-mode-theme-concord .interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) i:not(.wp-dark-mode-ignore) * {\n      background: transparent !important; }\n  html.wp-dark-mode-theme-concord .interface-interface-skeleton__content, html.wp-dark-mode-theme-concord .edit-post-visual-editor {\n    background: #171717;\n    color: #bfb7c0; }\n  html.wp-dark-mode-theme-concord .editor-post-title {\n    color: #bfb7c0; }\n\n.wpdm-theme-switch {\n  border-radius: 100%;\n  display: block;\n  height: 22px;\n  width: 22px;\n  margin-right: 5px;\n  cursor: pointer; }\n  .wpdm-theme-switch-wrapper {\n    position: relative;\n    margin: 0 10px;\n    cursor: pointer;\n    display: flex;\n    align-items: center; }\n    .wpdm-theme-switch-wrapper #wpDarkModeThemeSwitch {\n      display: flex;\n      align-items: center; }\n\n#wpdmColorPalettesContainer {\n  position: absolute;\n  top: 50px;\n  width: 180px;\n  background: #555;\n  left: -25px; }\n  #wpdmColorPalettesContainer .wpdm-color-palettes-wrapper {\n    padding: 10px;\n    border: 1px solid; }\n    #wpdmColorPalettesContainer .wpdm-color-palettes-wrapper a {\n      display: flex;\n      margin-bottom: 10px;\n      text-decoration: none;\n      color: #eee;\n      align-items: center; }\n      #wpdmColorPalettesContainer .wpdm-color-palettes-wrapper a:focus {\n        border: none;\n        box-shadow: none; }\n      #wpdmColorPalettesContainer .wpdm-color-palettes-wrapper a .tick {\n        margin-left: auto; }\n      #wpdmColorPalettesContainer .wpdm-color-palettes-wrapper a img {\n        max-width: 20px;\n        border: 1px solid #ddd;\n        border-radius: 50%;\n        margin-right: 10px; }\n      #wpdmColorPalettesContainer .wpdm-color-palettes-wrapper a.disabled *:not(.wp-darkmode-pro-badge) {\n        opacity: .3; }\n      #wpdmColorPalettesContainer .wpdm-color-palettes-wrapper a.disabled .wp-darkmode-pro-badge {\n        border: 1px solid deeppink;\n        border-radius: 3px;\n        padding: 1px 3px;\n        margin-left: auto; }\n\n.wpdm-arrow {\n  border: solid black;\n  border-width: 0 1px 1px 0;\n  display: inline-block;\n  padding: 3px;\n  margin-top: -3px; }\n  .wpdm-arrow.down {\n    transform: rotate(45deg);\n    -webkit-transform: rotate(45deg); }\n\n#wpDarkModeThemeSwitchImg {\n  width: 20px;\n  margin-right: 5px;\n  border: 1px solid;\n  border-radius: 50%; }\n", "",{"version":3,"sources":["webpack://src/theme-switch/style.scss","webpack://src/theme-switch/css/_darkmode.scss","webpack://src/theme-switch/css/_chathams.scss","webpack://src/theme-switch/css/_pumpkin.scss","webpack://src/theme-switch/css/_mustard.scss","webpack://src/theme-switch/css/_concord.scss","webpack://src/theme-switch/css/_common.scss"],"names":[],"mappings":"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","sourcesContent":["html.wp-dark-mode-theme-darkmode {\r\n  @import \"./css/darkmode\";\r\n}\r\n\r\nhtml.wp-dark-mode-theme-chathams {\r\n  @import \"./css/chathams\";\r\n}\r\n\r\nhtml.wp-dark-mode-theme-pumpkin {\r\n  @import \"./css/pumpkin\";\r\n}\r\n\r\nhtml.wp-dark-mode-theme-mustard {\r\n  @import \"./css/mustard\";\r\n}\r\n\r\nhtml.wp-dark-mode-theme-concord {\r\n  @import \"./css/concord\";\r\n}\r\n\r\n@import \"./css/common\";\r\n","$bg_color: #1B2836;\r\n$text_color: #fff;\r\n$link_color: #459BE6;\r\n$border_color: lighten($bg_color, 20%);\r\n$btn_color: lighten($bg_color, 10%);\r\n\r\n/**--- Main Styles ----*/\r\n.interface-interface-skeleton__header,\r\n.interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) {\r\n  :not(.wp-dark-mode-ignore):not(mark):not(code):not(pre):not(ins):not(option):not(input):not(select):not(textarea):not(button):not(a):not(video):not(canvas):not(progress):not(iframe):not(svg):not(path):not(.mejs-iframe-overlay):not(.mejs-time-slider):not(.mejs-overlay-play):not(.block-editor-default-block-appender__content) {\r\n    background-color: $bg_color !important;\r\n    color: $text_color !important;\r\n    border-color: $border_color !important;\r\n  }\r\n}\r\n\r\n/**--- Link Styles ----*/\r\n.interface-interface-skeleton__header,\r\n.interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) {\r\n  a:not(.wp-dark-mode-ignore),\r\n  a *:not(.wp-dark-mode-ignore) {\r\n    background-color: transparent !important;\r\n    color: $link_color !important;\r\n  }\r\n}\r\n\r\n\r\n/**--- Link Pseoudo Styles ----*/\r\n.interface-interface-skeleton__header,\r\n.interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) {\r\n  a:active,\r\n  a:active *,\r\n  a:visited,\r\n  a:visited * {\r\n    color: $link_color !important;\r\n    border-color: $border_color !important;\r\n  }\r\n}\r\n\r\n/**--- Input Styles ----*/\r\n.interface-interface-skeleton__header,\r\n.interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) {\r\n  button:not(#collapse-button),\r\n  iframe,\r\n  iframe *,\r\n  input,\r\n  input[type=\"button\"],\r\n  input[type=\"checkebox\"],\r\n  input[type=\"date\"],\r\n  input[type=\"datetime-local\"],\r\n  input[type=\"email\"],\r\n  input[type=\"image\"],\r\n  input[type=\"month\"],\r\n  input[type=\"number\"],\r\n  input[type=\"range\"],\r\n  input[type=\"reset\"],\r\n  input[type=\"search\"],\r\n  input[type=\"submit\"],\r\n  input[type=\"tel\"],\r\n  input[type=\"text\"],\r\n  input[type=\"time\"],\r\n  input[type=\"url\"],\r\n  input[type=\"week\"],\r\n  select,\r\n  textarea:not(.block-editor-default-block-appender__content):not(.editor-post-title__input),\r\n  i:not(.wp-dark-mode-ignore) {\r\n    background-color: $btn_color !important;\r\n    color: $text_color !important;\r\n    border-color: $border_color !important;\r\n\r\n    * {\r\n      background: transparent !important;\r\n    }\r\n\r\n  }\r\n}\r\n\r\n/** Editor Area **/\r\n.interface-interface-skeleton__content, .edit-post-visual-editor {\r\n  background: $bg_color;\r\n  color: $text_color;\r\n\r\n}\r\n\r\n.editor-post-title {\r\n  color: $text_color;\r\n}\r\n","$bg_color: #EDEBE8;\r\n$text_color: #1e1e1e;\r\n$link_color: #105d72;\r\n$border_color: darken($bg_color, 20%);\r\n$btn_color: darken($bg_color, 10%);\r\n\r\n/**--- Main Styles ----*/\r\n.interface-interface-skeleton__header,\r\n.interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) {\r\n  :not(.wp-dark-mode-ignore):not(mark):not(code):not(pre):not(ins):not(option):not(input):not(select):not(textarea):not(button):not(a):not(video):not(canvas):not(progress):not(iframe):not(svg):not(path):not(.mejs-iframe-overlay):not(.mejs-time-slider):not(.mejs-overlay-play):not(.block-editor-default-block-appender__content) {\r\n    background-color: $bg_color !important;\r\n    color: $text_color !important;\r\n    border-color: $border_color !important;\r\n  }\r\n}\r\n\r\n/**--- Link Styles ----*/\r\n.interface-interface-skeleton__header,\r\n.interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) {\r\n  a:not(.wp-dark-mode-ignore),\r\n  a *:not(.wp-dark-mode-ignore) {\r\n    background-color: transparent !important;\r\n    color: $link_color !important;\r\n  }\r\n}\r\n\r\n\r\n/**--- Link Pseoudo Styles ----*/\r\n.interface-interface-skeleton__header,\r\n.interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) {\r\n  a:active,\r\n  a:active *,\r\n  a:visited,\r\n  a:visited * {\r\n    color: $link_color !important;\r\n    border-color: $border_color !important;\r\n  }\r\n}\r\n\r\n/**--- Input Styles ----*/\r\n.interface-interface-skeleton__header,\r\n.interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) {\r\n  button:not(#collapse-button),\r\n  iframe,\r\n  iframe *,\r\n  input,\r\n  input[type=\"button\"],\r\n  input[type=\"checkebox\"],\r\n  input[type=\"date\"],\r\n  input[type=\"datetime-local\"],\r\n  input[type=\"email\"],\r\n  input[type=\"image\"],\r\n  input[type=\"month\"],\r\n  input[type=\"number\"],\r\n  input[type=\"range\"],\r\n  input[type=\"reset\"],\r\n  input[type=\"search\"],\r\n  input[type=\"submit\"],\r\n  input[type=\"tel\"],\r\n  input[type=\"text\"],\r\n  input[type=\"time\"],\r\n  input[type=\"url\"],\r\n  input[type=\"week\"],\r\n  select,\r\n  textarea:not(.block-editor-default-block-appender__content):not(.editor-post-title__input),\r\n  i:not(.wp-dark-mode-ignore) {\r\n    background-color: $btn_color !important;\r\n    color: $text_color !important;\r\n    border-color: $border_color !important;\r\n\r\n    * {\r\n      background: transparent !important;\r\n    }\r\n\r\n  }\r\n}\r\n\r\n/** Editor Area **/\r\n.interface-interface-skeleton__content, .edit-post-visual-editor{\r\n  background: $bg_color;\r\n  color: $text_color;\r\n}\r\n\r\n.editor-post-title {\r\n  color: $text_color;\r\n}","$bg_color: #1e1d19;\r\n$text_color: #d6cb99;\r\n$link_color: #ff9323;\r\n$border_color: lighten($bg_color, 20%);\r\n$btn_color: lighten($bg_color, 10%);\r\n\r\n/**--- Main Styles ----*/\r\n.interface-interface-skeleton__header,\r\n.interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) {\r\n  :not(.wp-dark-mode-ignore):not(mark):not(code):not(pre):not(ins):not(option):not(input):not(select):not(textarea):not(button):not(a):not(video):not(canvas):not(progress):not(iframe):not(svg):not(path):not(.mejs-iframe-overlay):not(.mejs-time-slider):not(.mejs-overlay-play):not(.block-editor-default-block-appender__content) {\r\n    background-color: $bg_color !important;\r\n    color: $text_color !important;\r\n    border-color: $border_color !important;\r\n  }\r\n}\r\n\r\n/**--- Link Styles ----*/\r\n.interface-interface-skeleton__header,\r\n.interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) {\r\n  a:not(.wp-dark-mode-ignore),\r\n  a *:not(.wp-dark-mode-ignore) {\r\n    background-color: transparent !important;\r\n    color: $link_color !important;\r\n  }\r\n}\r\n\r\n\r\n/**--- Link Pseoudo Styles ----*/\r\n.interface-interface-skeleton__header,\r\n.interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) {\r\n  a:active,\r\n  a:active *,\r\n  a:visited,\r\n  a:visited * {\r\n    color: $link_color !important;\r\n    border-color: $border_color !important;\r\n  }\r\n}\r\n\r\n/**--- Input Styles ----*/\r\n.interface-interface-skeleton__header,\r\n.interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) {\r\n  button:not(#collapse-button),\r\n  iframe,\r\n  iframe *,\r\n  input,\r\n  input[type=\"button\"],\r\n  input[type=\"checkebox\"],\r\n  input[type=\"date\"],\r\n  input[type=\"datetime-local\"],\r\n  input[type=\"email\"],\r\n  input[type=\"image\"],\r\n  input[type=\"month\"],\r\n  input[type=\"number\"],\r\n  input[type=\"range\"],\r\n  input[type=\"reset\"],\r\n  input[type=\"search\"],\r\n  input[type=\"submit\"],\r\n  input[type=\"tel\"],\r\n  input[type=\"text\"],\r\n  input[type=\"time\"],\r\n  input[type=\"url\"],\r\n  input[type=\"week\"],\r\n  select,\r\n  textarea:not(.block-editor-default-block-appender__content):not(.editor-post-title__input),\r\n  i:not(.wp-dark-mode-ignore) {\r\n    background-color: $btn_color !important;\r\n    color: $text_color !important;\r\n    border-color: $border_color !important;\r\n\r\n    * {\r\n      background: transparent !important;\r\n    }\r\n\r\n  }\r\n}\r\n\r\n/** Editor Area **/\r\n.interface-interface-skeleton__content, .edit-post-visual-editor{\r\n  background: $bg_color;\r\n  color: $text_color;\r\n}\r\n\r\n.editor-post-title {\r\n  color: $text_color;\r\n}","$bg_color: #151819;\r\n$text_color: #d5d6d7;\r\n$link_color: #daa40b;\r\n$border_color: lighten($bg_color, 20%);\r\n$btn_color: lighten($bg_color, 10%);\r\n\r\n/**--- Main Styles ----*/\r\n.interface-interface-skeleton__header,\r\n.interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) {\r\n  :not(.wp-dark-mode-ignore):not(mark):not(code):not(pre):not(ins):not(option):not(input):not(select):not(textarea):not(button):not(a):not(video):not(canvas):not(progress):not(iframe):not(svg):not(path):not(.mejs-iframe-overlay):not(.mejs-time-slider):not(.mejs-overlay-play):not(.block-editor-default-block-appender__content) {\r\n    background-color: $bg_color !important;\r\n    color: $text_color !important;\r\n    border-color: $border_color !important;\r\n  }\r\n}\r\n\r\n/**--- Link Styles ----*/\r\n.interface-interface-skeleton__header,\r\n.interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) {\r\n  a:not(.wp-dark-mode-ignore),\r\n  a *:not(.wp-dark-mode-ignore) {\r\n    background-color: transparent !important;\r\n    color: $link_color !important;\r\n  }\r\n}\r\n\r\n\r\n/**--- Link Pseoudo Styles ----*/\r\n.interface-interface-skeleton__header,\r\n.interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) {\r\n  a:active,\r\n  a:active *,\r\n  a:visited,\r\n  a:visited * {\r\n    color: $link_color !important;\r\n    border-color: $border_color !important;\r\n  }\r\n}\r\n\r\n/**--- Input Styles ----*/\r\n.interface-interface-skeleton__header,\r\n.interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) {\r\n  button:not(#collapse-button),\r\n  iframe,\r\n  iframe *,\r\n  input,\r\n  input[type=\"button\"],\r\n  input[type=\"checkebox\"],\r\n  input[type=\"date\"],\r\n  input[type=\"datetime-local\"],\r\n  input[type=\"email\"],\r\n  input[type=\"image\"],\r\n  input[type=\"month\"],\r\n  input[type=\"number\"],\r\n  input[type=\"range\"],\r\n  input[type=\"reset\"],\r\n  input[type=\"search\"],\r\n  input[type=\"submit\"],\r\n  input[type=\"tel\"],\r\n  input[type=\"text\"],\r\n  input[type=\"time\"],\r\n  input[type=\"url\"],\r\n  input[type=\"week\"],\r\n  select,\r\n  textarea:not(.block-editor-default-block-appender__content):not(.editor-post-title__input),\r\n  i:not(.wp-dark-mode-ignore) {\r\n    background-color: $btn_color !important;\r\n    color: $text_color !important;\r\n    border-color: $border_color !important;\r\n\r\n    * {\r\n      background: transparent !important;\r\n    }\r\n\r\n  }\r\n}\r\n\r\n/** Editor Area **/\r\n.interface-interface-skeleton__content, .edit-post-visual-editor{\r\n  background: $bg_color;\r\n  color: $text_color;\r\n}\r\n\r\n.editor-post-title {\r\n  color: $text_color;\r\n}","$bg_color: #171717;\r\n$text_color: #bfb7c0;\r\n$link_color: #f776f0;\r\n$border_color: lighten($bg_color, 20%);\r\n$btn_color: lighten($bg_color, 10%);\r\n\r\n/**--- Main Styles ----*/\r\n.interface-interface-skeleton__header,\r\n.interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) {\r\n  :not(.wp-dark-mode-ignore):not(mark):not(code):not(pre):not(ins):not(option):not(input):not(select):not(textarea):not(button):not(a):not(video):not(canvas):not(progress):not(iframe):not(svg):not(path):not(.mejs-iframe-overlay):not(.mejs-time-slider):not(.mejs-overlay-play):not(.block-editor-default-block-appender__content) {\r\n  background-color: $bg_color !important;\r\n  color: $text_color !important;\r\n  border-color: $border_color !important;\r\n}\r\n}\r\n\r\n/**--- Link Styles ----*/\r\n.interface-interface-skeleton__header,\r\n.interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) {\r\n  a:not(.wp-dark-mode-ignore),\r\n  a *:not(.wp-dark-mode-ignore) {\r\n    background-color: transparent !important;\r\n    color: $link_color !important;\r\n  }\r\n}\r\n\r\n\r\n/**--- Link Pseoudo Styles ----*/\r\n.interface-interface-skeleton__header,\r\n.interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) {\r\n  a:active,\r\n  a:active *,\r\n  a:visited,\r\n  a:visited * {\r\n    color: $link_color !important;\r\n    border-color: $border_color !important;\r\n  }\r\n}\r\n\r\n/**--- Input Styles ----*/\r\n.interface-interface-skeleton__header,\r\n.interface-interface-skeleton__body > div:not(.interface-interface-skeleton__content) {\r\n  button:not(#collapse-button),\r\n  iframe,\r\n  iframe *,\r\n  input,\r\n  input[type=\"button\"],\r\n  input[type=\"checkebox\"],\r\n  input[type=\"date\"],\r\n  input[type=\"datetime-local\"],\r\n  input[type=\"email\"],\r\n  input[type=\"image\"],\r\n  input[type=\"month\"],\r\n  input[type=\"number\"],\r\n  input[type=\"range\"],\r\n  input[type=\"reset\"],\r\n  input[type=\"search\"],\r\n  input[type=\"submit\"],\r\n  input[type=\"tel\"],\r\n  input[type=\"text\"],\r\n  input[type=\"time\"],\r\n  input[type=\"url\"],\r\n  input[type=\"week\"],\r\n  select,\r\n  textarea:not(.block-editor-default-block-appender__content):not(.editor-post-title__input),\r\n  i:not(.wp-dark-mode-ignore) {\r\n    background-color: $btn_color !important;\r\n    color: $text_color !important;\r\n    border-color: $border_color !important;\r\n\r\n    * {\r\n      background: transparent !important;\r\n    }\r\n\r\n  }\r\n}\r\n\r\n/** Editor Area **/\r\n.interface-interface-skeleton__content, .edit-post-visual-editor{\r\n  background: $bg_color;\r\n  color: $text_color;\r\n}\r\n\r\n.editor-post-title {\r\n  color: $text_color;\r\n}",".wpdm-theme-switch {\r\n  border-radius: 100%;\r\n  display: block;\r\n  height: 22px;\r\n  width: 22px;\r\n  margin-right: 5px;\r\n  cursor: pointer;\r\n\r\n  &-wrapper {\r\n    position: relative;\r\n    margin: 0 10px;\r\n    cursor: pointer;\r\n    display: flex;\r\n    align-items: center;\r\n\r\n    #wpDarkModeThemeSwitch {\r\n      display: flex;\r\n      align-items: center;\r\n    }\r\n  }\r\n\r\n}\r\n\r\n#wpdmColorPalettesContainer {\r\n  position: absolute;\r\n  top: 50px;\r\n  width: 180px;\r\n  background: #555;\r\n  left: -25px;\r\n\r\n  .wpdm-color-palettes-wrapper {\r\n    padding: 10px;\r\n    border: 1px solid;\r\n\r\n    a {\r\n      display: flex;\r\n      margin-bottom: 10px;\r\n      text-decoration: none;\r\n      color: #eee;\r\n      align-items: center;\r\n\r\n      &:focus {\r\n        border: none;\r\n        box-shadow: none;\r\n      }\r\n\r\n      .tick {\r\n        margin-left: auto;\r\n      }\r\n\r\n      img{\r\n        max-width: 20px;\r\n        border: 1px solid #ddd;\r\n        border-radius: 50%;\r\n        margin-right: 10px;\r\n      }\r\n\r\n      &.disabled {\r\n\r\n        *:not(.wp-darkmode-pro-badge) {\r\n          opacity: .3;\r\n        }\r\n\r\n        .wp-darkmode-pro-badge {\r\n          border: 1px solid deeppink;\r\n          border-radius: 3px;\r\n          padding: 1px 3px;\r\n          margin-left: auto;\r\n\r\n        }\r\n      }\r\n\r\n    }\r\n  }\r\n\r\n}\r\n\r\n.wpdm-arrow {\r\n  border: solid black;\r\n  border-width: 0 1px 1px 0;\r\n  display: inline-block;\r\n  padding: 3px;\r\n  margin-top: -3px;\r\n\r\n  &.down {\r\n    transform: rotate(45deg);\r\n    -webkit-transform: rotate(45deg);\r\n  }\r\n}\r\n\r\n#wpDarkModeThemeSwitchImg{\r\n  width: 20px;\r\n  margin-right: 5px;\r\n  border: 1px solid;\r\n  border-radius: 50%;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/Button.js":
/*!***********************!*\
  !*** ./src/Button.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _button_presets_btn_1_light_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button-presets/btn-1/light.png */ "./src/button-presets/btn-1/light.png");
/* harmony import */ var _button_presets_btn_1_light_png__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_button_presets_btn_1_light_png__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _button_presets_btn_1_dark_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button-presets/btn-1/dark.png */ "./src/button-presets/btn-1/dark.png");
/* harmony import */ var _button_presets_btn_1_dark_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_button_presets_btn_1_dark_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _button_presets_btn_3_moon_dark_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button-presets/btn-3/moon-dark.png */ "./src/button-presets/btn-3/moon-dark.png");
/* harmony import */ var _button_presets_btn_3_moon_dark_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_button_presets_btn_3_moon_dark_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _button_presets_btn_3_moon_light_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./button-presets/btn-3/moon-light.png */ "./src/button-presets/btn-3/moon-light.png");
/* harmony import */ var _button_presets_btn_3_moon_light_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_button_presets_btn_3_moon_light_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _button_presets_btn_3_sun_dark_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./button-presets/btn-3/sun-dark.png */ "./src/button-presets/btn-3/sun-dark.png");
/* harmony import */ var _button_presets_btn_3_sun_dark_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_button_presets_btn_3_sun_dark_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _button_presets_btn_3_sun_light_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./button-presets/btn-3/sun-light.png */ "./src/button-presets/btn-3/sun-light.png");
/* harmony import */ var _button_presets_btn_3_sun_light_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_button_presets_btn_3_sun_light_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _button_presets_btn_4_light_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./button-presets/btn-4/light.png */ "./src/button-presets/btn-4/light.png");
/* harmony import */ var _button_presets_btn_4_light_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_button_presets_btn_4_light_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _button_presets_btn_4_dark_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./button-presets/btn-4/dark.png */ "./src/button-presets/btn-4/dark.png");
/* harmony import */ var _button_presets_btn_4_dark_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_button_presets_btn_4_dark_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _button_presets_btn_5_light_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./button-presets/btn-5/light.png */ "./src/button-presets/btn-5/light.png");
/* harmony import */ var _button_presets_btn_5_light_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_button_presets_btn_5_light_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _button_presets_btn_5_dark_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./button-presets/btn-5/dark.png */ "./src/button-presets/btn-5/dark.png");
/* harmony import */ var _button_presets_btn_5_dark_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_button_presets_btn_5_dark_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _button_presets_btn_6_light_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./button-presets/btn-6/light.png */ "./src/button-presets/btn-6/light.png");
/* harmony import */ var _button_presets_btn_6_light_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_button_presets_btn_6_light_png__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _button_presets_btn_6_dark_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./button-presets/btn-6/dark.png */ "./src/button-presets/btn-6/dark.png");
/* harmony import */ var _button_presets_btn_6_dark_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_button_presets_btn_6_dark_png__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _button_presets_btn_7_light_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./button-presets/btn-7/light.png */ "./src/button-presets/btn-7/light.png");
/* harmony import */ var _button_presets_btn_7_light_png__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_button_presets_btn_7_light_png__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _button_presets_btn_7_dark_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./button-presets/btn-7/dark.png */ "./src/button-presets/btn-7/dark.png");
/* harmony import */ var _button_presets_btn_7_dark_png__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_button_presets_btn_7_dark_png__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _button_presets_btn_8_light_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./button-presets/btn-8/light.svg */ "./src/button-presets/btn-8/light.svg");
/* harmony import */ var _button_presets_btn_8_dark_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./button-presets/btn-8/dark.svg */ "./src/button-presets/btn-8/dark.svg");
/* harmony import */ var _button_presets_btn_9_sun_svg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./button-presets/btn-9/sun.svg */ "./src/button-presets/btn-9/sun.svg");
/* harmony import */ var _button_presets_btn_9_moon_svg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./button-presets/btn-9/moon.svg */ "./src/button-presets/btn-9/moon.svg");
/* harmony import */ var _button_presets_btn_10_sun_svg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./button-presets/btn-10/sun.svg */ "./src/button-presets/btn-10/sun.svg");
/* harmony import */ var _button_presets_btn_10_moon_svg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./button-presets/btn-10/moon.svg */ "./src/button-presets/btn-10/moon.svg");
/* harmony import */ var _button_presets_btn_11_sun_svg__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./button-presets/btn-11/sun.svg */ "./src/button-presets/btn-11/sun.svg");
/* harmony import */ var _button_presets_btn_11_moon_svg__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./button-presets/btn-11/moon.svg */ "./src/button-presets/btn-11/moon.svg");
/* harmony import */ var _button_presets_btn_12_sun_svg__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./button-presets/btn-12/sun.svg */ "./src/button-presets/btn-12/sun.svg");
/* harmony import */ var _button_presets_btn_12_moon_svg__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./button-presets/btn-12/moon.svg */ "./src/button-presets/btn-12/moon.svg");
/* harmony import */ var _button_presets_btn_13_sun_svg__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./button-presets/btn-13/sun.svg */ "./src/button-presets/btn-13/sun.svg");
/* harmony import */ var _button_presets_btn_13_moon_svg__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./button-presets/btn-13/moon.svg */ "./src/button-presets/btn-13/moon.svg");
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

var __ = wp.i18n.__;
var _wp$element = wp.element,
    Component = _wp$element.Component,
    Fragment = _wp$element.Fragment;



























var Button = /*#__PURE__*/function (_Component) {
  _inherits(Button, _Component);

  var _super = _createSuper(Button);

  function Button() {
    _classCallCheck(this, Button);

    return _super.apply(this, arguments);
  }

  _createClass(Button, [{
    key: "render",
    value: function render() {
      var style = this.props.style;
      return wp.element.createElement(Fragment, null, wp.element.createElement("div", {
        className: "wp-dark-mode-switcher wp-dark-mode-ignore style-".concat(style)
      }, style === 2 ? wp.element.createElement("label", {
        className: "wp-dark-mode-ignore",
        htmlFor: "wp-dark-mode-switch"
      }, wp.element.createElement("div", {
        className: "wp-dark-mode-ignore toggle"
      }), wp.element.createElement("div", {
        className: "wp-dark-mode-ignore modes"
      }, wp.element.createElement("p", {
        className: "wp-dark-mode-ignore light"
      }), wp.element.createElement("p", {
        className: "wp-dark-mode-ignore dark"
      }))) : style === 3 ? wp.element.createElement("label", {
        htmlFor: "wp-dark-mode-switch",
        className: "wp-dark-mode-ignore"
      }, wp.element.createElement("img", {
        className: "sun-light",
        src: _button_presets_btn_13_sun_svg__WEBPACK_IMPORTED_MODULE_24__["default"],
        alt: __('Light')
      }), wp.element.createElement("div", {
        className: "toggle wp-dark-mode-ignore"
      }), wp.element.createElement("img", {
        className: "moon-light",
        src: _button_presets_btn_13_moon_svg__WEBPACK_IMPORTED_MODULE_25__["default"],
        alt: __('Light')
      })) : style === 4 ? wp.element.createElement(Fragment, null, wp.element.createElement("img", {
        className: "wp-dark-mode-ignore sun-light",
        src: _button_presets_btn_3_sun_light_png__WEBPACK_IMPORTED_MODULE_5___default.a,
        alt: __('Light')
      }), wp.element.createElement("img", {
        className: "wp-dark-mode-ignore sun-dark",
        src: _button_presets_btn_3_sun_dark_png__WEBPACK_IMPORTED_MODULE_4___default.a,
        alt: __('Light')
      }), wp.element.createElement("label", {
        className: "wp-dark-mode-ignore",
        htmlFor: "wp-dark-mode-switch"
      }, wp.element.createElement("div", {
        className: "wp-dark-mode-ignore toggle"
      })), wp.element.createElement("img", {
        className: "wp-dark-mode-ignore moon-dark",
        src: _button_presets_btn_3_moon_dark_png__WEBPACK_IMPORTED_MODULE_2___default.a,
        alt: __('Dark')
      }), wp.element.createElement("img", {
        className: "wp-dark-mode-ignore moon-light",
        src: _button_presets_btn_3_moon_light_png__WEBPACK_IMPORTED_MODULE_3___default.a,
        alt: __('Dark')
      })) : style === 5 ? wp.element.createElement(Fragment, null, wp.element.createElement("p", {
        className: "wp-dark-mode-ignore"
      }, __('Light')), wp.element.createElement("label", {
        className: "wp-dark-mode-ignore",
        htmlFor: "wp-dark-mode-switch"
      }, wp.element.createElement("div", {
        className: "wp-dark-mode-ignore modes"
      }, wp.element.createElement("img", {
        className: "wp-dark-mode-ignore light",
        src: _button_presets_btn_4_light_png__WEBPACK_IMPORTED_MODULE_6___default.a,
        alt: __('Light')
      }), wp.element.createElement("img", {
        className: "wp-dark-mode-ignore dark",
        src: _button_presets_btn_4_dark_png__WEBPACK_IMPORTED_MODULE_7___default.a,
        alt: __('Dark')
      }))), wp.element.createElement("p", null, __('Dark'))) : style === 6 ? wp.element.createElement("label", {
        className: "wp-dark-mode-ignore",
        htmlFor: "wp-dark-mode-switch"
      }, wp.element.createElement("div", {
        className: "wp-dark-mode-ignore modes"
      }, wp.element.createElement("img", {
        className: "wp-dark-mode-ignore light",
        src: _button_presets_btn_5_light_png__WEBPACK_IMPORTED_MODULE_8___default.a,
        alt: __('Light')
      }), wp.element.createElement("img", {
        className: "wp-dark-mode-ignore dark",
        src: _button_presets_btn_5_dark_png__WEBPACK_IMPORTED_MODULE_9___default.a,
        alt: __('Dark')
      }))) : style === 7 ? wp.element.createElement("label", {
        className: "wp-dark-mode-ignore",
        htmlFor: "wp-dark-mode-switch"
      }, wp.element.createElement("div", {
        className: "wp-dark-mode-ignore modes"
      }, wp.element.createElement("img", {
        className: "wp-dark-mode-ignore light",
        src: _button_presets_btn_6_light_png__WEBPACK_IMPORTED_MODULE_10___default.a,
        alt: __('Light')
      }), wp.element.createElement("img", {
        className: "wp-dark-mode-ignore dark",
        src: _button_presets_btn_6_dark_png__WEBPACK_IMPORTED_MODULE_11___default.a,
        alt: __('Dark')
      }))) : style === 8 ? wp.element.createElement("label", {
        className: "wp-dark-mode-ignore",
        htmlFor: "wp-dark-mode-switch"
      }, wp.element.createElement("div", {
        className: "wp-dark-mode-ignore toggle"
      }), wp.element.createElement("div", {
        className: "wp-dark-mode-ignore modes"
      }, wp.element.createElement("img", {
        className: "wp-dark-mode-ignore light",
        src: _button_presets_btn_7_light_png__WEBPACK_IMPORTED_MODULE_12___default.a,
        alt: "Light"
      }), wp.element.createElement("img", {
        className: "wp-dark-mode-ignore dark",
        src: _button_presets_btn_7_dark_png__WEBPACK_IMPORTED_MODULE_13___default.a,
        alt: "Dark"
      }))) : style === 9 ? wp.element.createElement("label", {
        htmlFor: "wp-dark-mode-switch",
        className: "wp-dark-mode-ignore"
      }, wp.element.createElement("div", {
        className: "modes wp-dark-mode-ignore"
      }, wp.element.createElement("img", {
        className: "light",
        src: _button_presets_btn_8_light_svg__WEBPACK_IMPORTED_MODULE_14__["default"],
        alt: __('Light')
      }), wp.element.createElement("img", {
        className: "dark",
        src: _button_presets_btn_8_dark_svg__WEBPACK_IMPORTED_MODULE_15__["default"],
        alt: __('Dark')
      }))) : style === 10 ? wp.element.createElement("label", {
        htmlFor: "wp-dark-mode-switch",
        className: "wp-dark-mode-ignore"
      }, wp.element.createElement("div", {
        className: "modes wp-dark-mode-ignore"
      }, wp.element.createElement("img", {
        className: "light",
        src: _button_presets_btn_9_sun_svg__WEBPACK_IMPORTED_MODULE_16__["default"],
        alt: __('Light')
      }), wp.element.createElement("img", {
        className: "dark",
        src: _button_presets_btn_9_moon_svg__WEBPACK_IMPORTED_MODULE_17__["default"],
        alt: __('Dark')
      }))) : style === 11 ? wp.element.createElement("label", {
        htmlFor: "wp-dark-mode-switch",
        className: "wp-dark-mode-ignore"
      }, wp.element.createElement("div", {
        className: "modes wp-dark-mode-ignore"
      }, wp.element.createElement("img", {
        className: "light",
        src: _button_presets_btn_10_sun_svg__WEBPACK_IMPORTED_MODULE_18__["default"],
        alt: __('Light')
      }), wp.element.createElement("img", {
        className: "dark",
        src: _button_presets_btn_10_moon_svg__WEBPACK_IMPORTED_MODULE_19__["default"],
        alt: __('Dark')
      }))) : style === 12 ? wp.element.createElement("label", {
        htmlFor: "wp-dark-mode-switch",
        className: "wp-dark-mode-ignore"
      }, wp.element.createElement("div", {
        className: "modes wp-dark-mode-ignore"
      }, wp.element.createElement("img", {
        className: "light",
        src: _button_presets_btn_11_sun_svg__WEBPACK_IMPORTED_MODULE_20__["default"],
        alt: __('Light')
      }), wp.element.createElement("img", {
        className: "dark",
        src: _button_presets_btn_11_moon_svg__WEBPACK_IMPORTED_MODULE_21__["default"],
        alt: __('Dark')
      }))) : style === 13 ? wp.element.createElement("label", {
        htmlFor: "wp-dark-mode-switch",
        className: "wp-dark-mode-ignore"
      }, wp.element.createElement("img", {
        className: "sun-light",
        src: _button_presets_btn_12_sun_svg__WEBPACK_IMPORTED_MODULE_22__["default"],
        alt: __('Light')
      }), wp.element.createElement("div", {
        className: "toggle wp-dark-mode-ignore"
      }), wp.element.createElement("img", {
        className: "moon-light",
        src: _button_presets_btn_12_moon_svg__WEBPACK_IMPORTED_MODULE_23__["default"],
        alt: __('Dark')
      })) : wp.element.createElement("label", {
        className: "wp-dark-mode-ignore",
        htmlFor: "wp-dark-mode-switch"
      }, wp.element.createElement("div", {
        className: "wp-dark-mode-ignore modes"
      }, wp.element.createElement("img", {
        className: "wp-dark-mode-ignore light",
        src: _button_presets_btn_1_light_png__WEBPACK_IMPORTED_MODULE_0___default.a,
        alt: __('Light')
      }), wp.element.createElement("img", {
        className: "wp-dark-mode-ignore dark",
        src: _button_presets_btn_1_dark_png__WEBPACK_IMPORTED_MODULE_1___default.a,
        alt: __('Dark')
      })))));
    }
  }]);

  return Button;
}(Component);

/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./src/Edit.js":
/*!*********************!*\
  !*** ./src/Edit.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Image_Choose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Image-Choose */ "./src/Image-Choose.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button */ "./src/Button.js");
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

var __ = wp.i18n.__;
var _wp$element = wp.element,
    Component = _wp$element.Component,
    Fragment = _wp$element.Fragment,
    createRef = _wp$element.createRef;
var _wp$components = wp.components,
    Placeholder = _wp$components.Placeholder,
    Spinner = _wp$components.Spinner,
    PanelBody = _wp$components.PanelBody,
    SelectControl = _wp$components.SelectControl;
var _wp$editor = wp.editor,
    InspectorControls = _wp$editor.InspectorControls,
    BlockControls = _wp$editor.BlockControls,
    AlignmentToolbar = _wp$editor.AlignmentToolbar;



var Edit = /*#__PURE__*/function (_Component) {
  _inherits(Edit, _Component);

  var _super = _createSuper(Edit);

  function Edit() {
    _classCallCheck(this, Edit);

    return _super.apply(this, arguments);
  }

  _createClass(Edit, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          attributes = _this$props.attributes,
          setAttributes = _this$props.setAttributes;
      return wp.element.createElement(Fragment, null, wp.element.createElement(InspectorControls, null, wp.element.createElement(PanelBody, {
        title: __('Switch Style', 'wp-dark-mode')
      }, wp.element.createElement(_Image_Choose__WEBPACK_IMPORTED_MODULE_0__["default"], {
        value: attributes.style,
        onChange: function onChange(newValue) {
          setAttributes({
            style: parseInt(newValue)
          });
        }
      }))), wp.element.createElement(BlockControls, null, wp.element.createElement(AlignmentToolbar, {
        value: attributes.alignment,
        onChange: function onChange(val) {
          return setAttributes({
            alignment: val
          });
        }
      })), wp.element.createElement("div", {
        style: {
          textAlign: attributes.alignment
        }
      }, wp.element.createElement(_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
        style: attributes.style
      })));
    }
  }]);

  return Edit;
}(Component);

/* harmony default export */ __webpack_exports__["default"] = (Edit);

/***/ }),

/***/ "./src/Image-Choose.js":
/*!*****************************!*\
  !*** ./src/Image-Choose.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var __ = wp.i18n.__;
var _wp$element = wp.element,
    Component = _wp$element.Component,
    Fragment = _wp$element.Fragment,
    createRef = _wp$element.createRef;
var _wp$components = wp.components,
    Placeholder = _wp$components.Placeholder,
    Spinner = _wp$components.Spinner,
    PanelBody = _wp$components.PanelBody,
    SelectControl = _wp$components.SelectControl;
var _wp$editor = wp.editor,
    InspectorControls = _wp$editor.InspectorControls,
    BlockControls = _wp$editor.BlockControls,
    AlignmentToolbar = _wp$editor.AlignmentToolbar;


var Image_Choose = /*#__PURE__*/function (_Component) {
  _inherits(Image_Choose, _Component);

  var _super = _createSuper(Image_Choose);

  function Image_Choose() {
    var _this;

    _classCallCheck(this, Image_Choose);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      value: _this.props.value
    });

    return _this;
  }

  _createClass(Image_Choose, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var images = ['1.svg', '2.svg', '3.png', '4.svg', '5.svg', '6.svg', '7.svg', '8.svg', '9.png', '10.png', '11.png', '12.png', '13.png'];
      return wp.element.createElement("div", {
        className: "image-choose-wrap"
      }, images.map(function (image, i) {
        i = i + 1;
        return wp.element.createElement("label", {
          className: "image-choose-opt ".concat(_this2.state.value == i ? 'active' : ''),
          htmlFor: "style_".concat(i)
        }, wp.element.createElement("input", {
          type: "radio",
          className: "radio",
          id: "style_".concat(i),
          name: "switch_style",
          value: i,
          onChange: function onChange() {
            var val = document.getElementById("style_".concat(i)).value;

            _this2.setState({
              value: val
            });

            _this2.props.onChange(val);
          }
        }), wp.element.createElement("img", {
          src: wpDarkMode.pluginUrl + 'assets/images/button-presets/' + image,
          className: "image-choose-img"
        }));
      }));
    }
  }]);

  return Image_Choose;
}(Component);

/* harmony default export */ __webpack_exports__["default"] = (Image_Choose);

/***/ }),

/***/ "./src/button-presets/btn-1/dark.png":
/*!*******************************************!*\
  !*** ./src/button-presets/btn-1/dark.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAABGCAYAAAB4xUL+AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTExNDU5MDdFMkQwMTFFQTkzQTNDQ0UxMzc2QUQ5QjMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTExNDU5MDhFMkQwMTFFQTkzQTNDQ0UxMzc2QUQ5QjMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5MTE0NTkwNUUyRDAxMUVBOTNBM0NDRTEzNzZBRDlCMyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5MTE0NTkwNkUyRDAxMUVBOTNBM0NDRTEzNzZBRDlCMyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PuctTqYAAAQ9SURBVHja7Jx7aI1hHMefs5ZsYWLLbTQmhZphspkhl0lyyTW3ySIa+UOWcimJ+MMiGRJNY+KP5VKSYmaJRdoorW3WwmbXbMxlUuP78z6r0+mcndtze4/96pO15v2953Oe932fy+95HVmbypjCiAMJYDwYC+JBDBjE6evy9x3gDSgFe2WcUG5+4r9/wyV/8H5gPUgHM8AwP/9/f1ANjsn+hmSJmAKyuISIAI/RDNaCYhVNVbSIJHAELAryOJVgIXiv6poVJWIkOAuWCjjWU7AEtKu8eYUJEHmAf4MiJLwAC1RLCLZFjAaFYLKgc+m+HDqZhgi0RawA5QIlNIB5OlpCMCL285YwQNA5/OFPl3qmMfy5NBzgDNgl+BxOq3pEihKRBzYLzl8B9jADItzHyycfbJCQP5sZEr7cI3IlSaDxwz27iFgJdkjKvY8ZFGFeeot5kvLSiLLELiIK+OhPRlxjhoUnEatAmqSc1G+4YRcRORJz0qDqox1E0EzQKIk5S5iB4SoiQsHdvNQOIraB6F4R8nt6LaDVdBE0FxArOV8jMzScRWQqyNdgughaT1ijIJ/xLSLFwGG/FhFpivJF9YqwYqDpIiYpyjfOZBG0PhmjKF8Mz2ekiATFOZNMFRGnOGe6qSIG94qwRAxVnHMqs5YLjRMRrSFvpokiujTk3WKiiA4NeUcw8atmQYv4oil3tmkiWjTlngi2mySiWmP+Exoe3x5FVGrMT4MwWuNwmCDiE/iq8Rzmg8OmjD6faT6PQ2C1CSIeahZBl8Z1MPN/F0FB03gPwGydIl6DWgNkRDKrnmqjLhEUBQb1b66Cy1yMchFXDOv+08CMCkpSVYuoAU8Mk0H7OaiMIIdJnvh1Xfs8yswMKkFsY1YpU6Log+/MKI9yuNnB8xwkM7PjJbgAboPPQRyH1nu3gnp3IuaAx8w+QWUGj0AdaGLW+mqT01NwOBjCrAmoWP5zCu/RRvJpiHh3S3DF3PRym4hIDrIFH8/NT2zxVEO1G/xioR9UCH/K3c2yO6jY6+B/ICIDraGzJxEUJ/klEqpBA70iT49P16Aa7LchKOG+a1fBm4gf/O5aF0ISPjBrowzzRwRFI5fRHgISGnj3oD0QERSVXEabjSW0cgm1vnSxe4pXYJpNLxPqfc4CVb6ONbxFDe+8lNlIQhWXUOHPoMvXTsh0cM4GEi4xqxrI65Mv0H2fv2nQxqz9nyZW0tKsPG21oJJqnzbUBrsl+hafMzjP9Cwmu/uCqKXSuykKg5mPCNQ+vSKB6h7uapRAC0UTeEv1exkzTOCJ0BbpZcx6d8QdRR/+J7Mma2hr9jrwLtADyaiELeNDeKqeW8zvI/Q+CZH7w2hi5iJvBd9EHFBmSTCd4E0OxVxmvVohlTfhSD++9VL+4WlFjmbQmkWfrMra6CLn0R6zarfGgD5Ov+viAjuc+K7i5P4KMABa/8ApEr8GlwAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/button-presets/btn-1/light.png":
/*!********************************************!*\
  !*** ./src/button-presets/btn-1/light.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAABGCAYAAAB4xUL+AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QTAzRjI3OTNFMkQwMTFFQUEwODdENEQxQUYwRTczNDAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QTAzRjI3OTRFMkQwMTFFQUEwODdENEQxQUYwRTczNDAiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBMDNGMjc5MUUyRDAxMUVBQTA4N0Q0RDFBRjBFNzM0MCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBMDNGMjc5MkUyRDAxMUVBQTA4N0Q0RDFBRjBFNzM0MCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pqnr+XYAAAPpSURBVHja7JzbS1RBHMfPESkTTUstSS1LCUrQLkJJZhJSUBCVXV4iSaz+gSKwhN7qoXqJrAe7QNoFguylCLrYVTMoCiqtZOmiaUZ560KQp+/PnQfZdpdNz8z8ZtcvfBlZkd+Zz/7mzG/mzNG2FMpxnEw0ufAcOBvOglPgycIxPn/SDz+Hm2zb3mWZKnQ8Dt4BX4I7nJHpNDzJVAAL4Br4hzNydcHFpgLIh686o1cLPMNEABnwFccd3YMTTQMQDe8d5RAYrkdwjGkQZsJPHPfUYmImrId7XYRAM0qaaRAqHXc1aNTsgIu14aOO+zpiWiackQDhpUkAouBaR45WmwTiuCQIjSZBKHXkqcikarFPEoRn3PobFeR3dXC8pLi1pmTDBolDguqGDFNAvJMI4i7HPkf5gUA7QdMlxuQPAhAmoNkjOWaTCRmxHU6ORBC2T0Z8QJMuMV63bdtTWGcEIKyUDIHUyXWCGD40yhXE+8QahNge26QgHvuMKFAUL5o7iKWK4iWMgfAqkTuIPEXxZnMFQfuQcZb3YasqxaOWGOCYEbmKY+ZzHRqZimOu4AoiaQyEF0Sq4pgL6XEhRxDJGuKWcwQxqCHuNo4g+jXETcPwKOMGoldT7N3cQHRrip2DrNjJCcQbjfEPAkYSFxCtGuPTIuwCHTnQDgJ1fwfaPo3XUALv57L6fKj5OqqQFRs5gLihexUMnwOMwkgHQaJtvOuAsUwbCNwn6DG9hwGMWLgBMLboyghSHaP65ixgnIRjVY7NISEovTLwltkSoA0uQ8Y+UJYRCEZB7zADQV/OfXxJh5WeykWwEoe36N2NeRL6nWD7+ZBOuy22eOsxfAKuRyZ/HQUAet5bAbf7A1GM5rZljuiYwU34I9xleZ+vdgGQR/RnGpqplncDKl38XCAq2lixDZFlByB1Gc1aKzJUCWgHAoHIEKvS8WEOoR3OBohffo8X4hd0YGRfBGTDVoLgW1D5wjhEN6MwhlCFPt76p6AKMEToZtIM54QZhGuAsMpvZRkERqqYrtLDBMJ7OA8gegKtNQINkU4x1fSEAQSaWot9IYQEQsBoFTC+GQzhi4DgCbroCrESo9q/wcBhQtVnISC8CmUZHkpmtIny+6lBEF7DRcEg/DcIAYOKkEVwtQEQasSN8YXs1eo6uJvhKpXeSS1VihwBJ8LV8B8GAH7Dx+AUbTlI+wQuvig/Ep2Hs9kMSlzMfLheUefp5fxTMjZr3ARC/01kM3xRwktyzXCFOBHoimyFYJajWQMvgeeKTZFQ9FNsvlCZT0/kGjELfHb7+myNGUNrmFnwuGEf0+mdAbFrNGR0+ruK6/krwACat3UCrdygUwAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/button-presets/btn-10/moon.svg":
/*!********************************************!*\
  !*** ./src/button-presets/btn-10/moon.svg ***!
  \********************************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgMoon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  filter: "url(#moon_svg__filter0_d)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M98.457 86.297C74.683 64.347 76.017 24.287 79.657 7c-79.568 27.015-75 92.663-62.77 122.111 18.437 41.487 58.22 53.869 75.808 54.874 64.043.965 89.554-45.628 94.305-69.045-44.15 8.201-77.425-15.678-88.543-28.643z",
  fill: "#fff"
}));

var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("filter", {
  id: "moon_svg__filter0_d",
  x: 0.269,
  y: 0.513,
  width: 196.462,
  height: 196.462,
  filterUnits: "userSpaceOnUse",
  colorInterpolationFilters: "sRGB"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feFlood", {
  floodOpacity: 0,
  result: "BackgroundImageFix"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feColorMatrix", {
  "in": "SourceAlpha",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feOffset", {
  dy: 3.244
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feGaussianBlur", {
  stdDeviation: 4.866
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feColorMatrix", {
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feBlend", {
  in2: "BackgroundImageFix",
  result: "effect1_dropShadow"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feBlend", {
  "in": "SourceGraphic",
  in2: "effect1_dropShadow",
  result: "shape"
})));

var SvgMoon = function SvgMoon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    width: 197,
    height: 197,
    fill: "none"
  }, props), _ref, _ref2);
};

/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTk3IiBoZWlnaHQ9IjE5NyIgdmlld0JveD0iMCAwIDE5NyAxOTciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQo8ZyBmaWx0ZXI9InVybCgjZmlsdGVyMF9kKSI+DQo8cGF0aCBkPSJNOTguNDU2NiA4Ni4yOTY2Qzc0LjY4MzMgNjQuMzQ2OCA3Ni4wMTc1IDI0LjI4NjUgNzkuNjU2MyA3QzAuMDg4NTY0OSAzNC4wMTUxIDQuNjU3MTggOTkuNjYzNSAxNi44ODc0IDEyOS4xMTFDMzUuMzIzOSAxNzAuNTk4IDc1LjEwNzggMTgyLjk4IDkyLjY5NTIgMTgzLjk4NUMxNTYuNzM4IDE4NC45NSAxODIuMjQ5IDEzOC4zNTcgMTg3IDExNC45NEMxNDIuODUgMTIzLjE0MSAxMDkuNTc1IDk5LjI2MTUgOTguNDU2NiA4Ni4yOTY2WiIgZmlsbD0id2hpdGUiLz4NCjwvZz4NCjxkZWZzPg0KPGZpbHRlciBpZD0iZmlsdGVyMF9kIiB4PSIwLjI2ODg5OSIgeT0iMC41MTI2IiB3aWR0aD0iMTk2LjQ2MiIgaGVpZ2h0PSIxOTYuNDYyIiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+DQo8ZmVGbG9vZCBmbG9vZC1vcGFjaXR5PSIwIiByZXN1bHQ9IkJhY2tncm91bmRJbWFnZUZpeCIvPg0KPGZlQ29sb3JNYXRyaXggaW49IlNvdXJjZUFscGhhIiB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMTI3IDAiLz4NCjxmZU9mZnNldCBkeT0iMy4yNDM3Ii8+DQo8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSI0Ljg2NTU1Ii8+DQo8ZmVDb2xvck1hdHJpeCB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4wOCAwIi8+DQo8ZmVCbGVuZCBtb2RlPSJub3JtYWwiIGluMj0iQmFja2dyb3VuZEltYWdlRml4IiByZXN1bHQ9ImVmZmVjdDFfZHJvcFNoYWRvdyIvPg0KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJlZmZlY3QxX2Ryb3BTaGFkb3ciIHJlc3VsdD0ic2hhcGUiLz4NCjwvZmlsdGVyPg0KPC9kZWZzPg0KPC9zdmc+DQo=");


/***/ }),

/***/ "./src/button-presets/btn-10/sun.svg":
/*!*******************************************!*\
  !*** ./src/button-presets/btn-10/sun.svg ***!
  \*******************************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgSun; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M116 12v11.556V12zm0 196.444V220v-11.556zM220 116h-11.556H220zm-196.444 0H12h11.556zm165.984 73.54l-8.17-8.17 8.17 8.17zM50.63 50.63l-8.17-8.17 8.17 8.17zm138.91-8.17l-8.17 8.17 8.17-8.17zM50.63 181.37l-8.17 8.17 8.17-8.17zM162.222 116a46.223 46.223 0 11-92.445 0 46.223 46.223 0 0192.445 0v0z",
  stroke: "#fff",
  strokeWidth: 23.111,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

var SvgSun = function SvgSun(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    width: 232,
    height: 232,
    fill: "none"
  }, props), _ref);
};

/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjMyIiBoZWlnaHQ9IjIzMiIgdmlld0JveD0iMCAwIDIzMiAyMzIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQo8cGF0aCBkPSJNMTE2IDEyVjIzLjU1NTZWMTJaTTExNiAyMDguNDQ0VjIyMFYyMDguNDQ0Wk0yMjAgMTE2SDIwOC40NDRIMjIwWk0yMy41NTU2IDExNkgxMkgyMy41NTU2Wk0xODkuNTQgMTg5LjU0TDE4MS4zNyAxODEuMzdMMTg5LjU0IDE4OS41NFpNNTAuNjMwMiA1MC42MzAyTDQyLjQ2MDQgNDIuNDYwNEw1MC42MzAyIDUwLjYzMDJaTTE4OS41NCA0Mi40NjA0TDE4MS4zNyA1MC42MzAyTDE4OS41NCA0Mi40NjA0Wk01MC42MzAyIDE4MS4zN0w0Mi40NjA0IDE4OS41NEw1MC42MzAyIDE4MS4zN1pNMTYyLjIyMiAxMTZDMTYyLjIyMiAxMjguMjU5IDE1Ny4zNTIgMTQwLjAxNiAxNDguNjg0IDE0OC42ODRDMTQwLjAxNiAxNTcuMzUyIDEyOC4yNTkgMTYyLjIyMiAxMTYgMTYyLjIyMkMxMDMuNzQxIDE2Mi4yMjIgOTEuOTg0MyAxNTcuMzUyIDgzLjMxNTkgMTQ4LjY4NEM3NC42NDc2IDE0MC4wMTYgNjkuNzc3OCAxMjguMjU5IDY5Ljc3NzggMTE2QzY5Ljc3NzggMTAzLjc0MSA3NC42NDc2IDkxLjk4NDMgODMuMzE1OSA4My4zMTU5QzkxLjk4NDMgNzQuNjQ3NiAxMDMuNzQxIDY5Ljc3NzggMTE2IDY5Ljc3NzhDMTI4LjI1OSA2OS43Nzc4IDE0MC4wMTYgNzQuNjQ3NiAxNDguNjg0IDgzLjMxNTlDMTU3LjM1MiA5MS45ODQzIDE2Mi4yMjIgMTAzLjc0MSAxNjIuMjIyIDExNlYxMTZaIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIzLjExMTEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPg0KPC9zdmc+DQo=");


/***/ }),

/***/ "./src/button-presets/btn-11/moon.svg":
/*!********************************************!*\
  !*** ./src/button-presets/btn-11/moon.svg ***!
  \********************************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgMoon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  filter: "url(#moon_svg__filter0_d)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 162,
  cy: 153,
  r: 134,
  transform: "rotate(-180 162 153)",
  fill: "#fff"
}));

var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("filter", {
  id: "moon_svg__filter0_d",
  x: 0.511,
  y: 0.674,
  width: 322.978,
  height: 322.978,
  filterUnits: "userSpaceOnUse",
  colorInterpolationFilters: "sRGB"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feFlood", {
  floodOpacity: 0,
  result: "BackgroundImageFix"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feColorMatrix", {
  "in": "SourceAlpha",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feOffset", {
  dy: 9.163
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feGaussianBlur", {
  stdDeviation: 13.745
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feColorMatrix", {
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feBlend", {
  in2: "BackgroundImageFix",
  result: "effect1_dropShadow"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feBlend", {
  "in": "SourceGraphic",
  in2: "effect1_dropShadow",
  result: "shape"
})));

var SvgMoon = function SvgMoon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    width: 324,
    height: 324,
    fill: "none"
  }, props), _ref, _ref2);
};

/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzI0IiBoZWlnaHQ9IjMyNCIgdmlld0JveD0iMCAwIDMyNCAzMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQo8ZyBmaWx0ZXI9InVybCgjZmlsdGVyMF9kKSI+DQo8Y2lyY2xlIGN4PSIxNjIiIGN5PSIxNTMiIHI9IjEzNCIgdHJhbnNmb3JtPSJyb3RhdGUoLTE4MCAxNjIgMTUzKSIgZmlsbD0id2hpdGUiLz4NCjwvZz4NCjxkZWZzPg0KPGZpbHRlciBpZD0iZmlsdGVyMF9kIiB4PSIwLjUxMTAxMyIgeT0iMC42NzQwMDkiIHdpZHRoPSIzMjIuOTc4IiBoZWlnaHQ9IjMyMi45NzgiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIj4NCjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+DQo8ZmVDb2xvck1hdHJpeCBpbj0iU291cmNlQWxwaGEiIHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAxMjcgMCIvPg0KPGZlT2Zmc2V0IGR5PSI5LjE2MyIvPg0KPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMTMuNzQ0NSIvPg0KPGZlQ29sb3JNYXRyaXggdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAuMDggMCIvPg0KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbjI9IkJhY2tncm91bmRJbWFnZUZpeCIgcmVzdWx0PSJlZmZlY3QxX2Ryb3BTaGFkb3ciLz4NCjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW49IlNvdXJjZUdyYXBoaWMiIGluMj0iZWZmZWN0MV9kcm9wU2hhZG93IiByZXN1bHQ9InNoYXBlIi8+DQo8L2ZpbHRlcj4NCjwvZGVmcz4NCjwvc3ZnPg0K");


/***/ }),

/***/ "./src/button-presets/btn-11/sun.svg":
/*!*******************************************!*\
  !*** ./src/button-presets/btn-11/sun.svg ***!
  \*******************************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgSun; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M116 12v11.556V12zm0 196.444V220v-11.556zM220 116h-11.556H220zm-196.444 0H12h11.556zm165.984 73.54l-8.17-8.17 8.17 8.17zM50.63 50.63l-8.17-8.17 8.17 8.17zm138.91-8.17l-8.17 8.17 8.17-8.17zM50.63 181.37l-8.17 8.17 8.17-8.17zM162.222 116a46.223 46.223 0 11-92.445 0 46.223 46.223 0 0192.445 0v0z",
  stroke: "#fff",
  strokeWidth: 23.111,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

var SvgSun = function SvgSun(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    width: 232,
    height: 232,
    fill: "none"
  }, props), _ref);
};

/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjMyIiBoZWlnaHQ9IjIzMiIgdmlld0JveD0iMCAwIDIzMiAyMzIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQo8cGF0aCBkPSJNMTE2IDEyVjIzLjU1NTZWMTJaTTExNiAyMDguNDQ0VjIyMFYyMDguNDQ0Wk0yMjAgMTE2SDIwOC40NDRIMjIwWk0yMy41NTU2IDExNkgxMkgyMy41NTU2Wk0xODkuNTQgMTg5LjU0TDE4MS4zNyAxODEuMzdMMTg5LjU0IDE4OS41NFpNNTAuNjMwMiA1MC42MzAyTDQyLjQ2MDQgNDIuNDYwNEw1MC42MzAyIDUwLjYzMDJaTTE4OS41NCA0Mi40NjA0TDE4MS4zNyA1MC42MzAyTDE4OS41NCA0Mi40NjA0Wk01MC42MzAyIDE4MS4zN0w0Mi40NjA0IDE4OS41NEw1MC42MzAyIDE4MS4zN1pNMTYyLjIyMiAxMTZDMTYyLjIyMiAxMjguMjU5IDE1Ny4zNTIgMTQwLjAxNiAxNDguNjg0IDE0OC42ODRDMTQwLjAxNiAxNTcuMzUyIDEyOC4yNTkgMTYyLjIyMiAxMTYgMTYyLjIyMkMxMDMuNzQxIDE2Mi4yMjIgOTEuOTg0MyAxNTcuMzUyIDgzLjMxNTkgMTQ4LjY4NEM3NC42NDc2IDE0MC4wMTYgNjkuNzc3OCAxMjguMjU5IDY5Ljc3NzggMTE2QzY5Ljc3NzggMTAzLjc0MSA3NC42NDc2IDkxLjk4NDMgODMuMzE1OSA4My4zMTU5QzkxLjk4NDMgNzQuNjQ3NiAxMDMuNzQxIDY5Ljc3NzggMTE2IDY5Ljc3NzhDMTI4LjI1OSA2OS43Nzc4IDE0MC4wMTYgNzQuNjQ3NiAxNDguNjg0IDgzLjMxNTlDMTU3LjM1MiA5MS45ODQzIDE2Mi4yMjIgMTAzLjc0MSAxNjIuMjIyIDExNlYxMTZaIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIzLjExMTEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPg0KPC9zdmc+DQo=");


/***/ }),

/***/ "./src/button-presets/btn-12/moon.svg":
/*!********************************************!*\
  !*** ./src/button-presets/btn-12/moon.svg ***!
  \********************************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgMoon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M172 119.337A84.05 84.05 0 0158.295 58.181 84.048 84.048 0 0162.663 10a84.076 84.076 0 0031.322 162.063A84.082 84.082 0 00172 119.337z",
  stroke: "#fff",
  strokeWidth: 18.677,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

var SvgMoon = function SvgMoon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    width: 182,
    height: 182,
    fill: "none"
  }, props), _ref);
};

/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgyIiBoZWlnaHQ9IjE4MiIgdmlld0JveD0iMCAwIDE4MiAxODIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQo8cGF0aCBkPSJNMTcyIDExOS4zMzdDMTU2LjcxNSAxMjUuNDg0IDEzOS45NiAxMjcuMDAyIDEyMy44MTkgMTIzLjcwNUMxMDcuNjc3IDEyMC40MDcgOTIuODYwOCAxMTIuNDM4IDgxLjIxMTMgMTAwLjc4OUM2OS41NjE5IDg5LjEzOTIgNjEuNTkzIDc0LjMyMjggNTguMjk1MyA1OC4xODE0QzU0Ljk5NzYgNDIuMDM5OSA1Ni41MTY1IDI1LjI4NTMgNjIuNjYzMiAxMEM0NC41NjIyIDE3LjI5MSAyOS41NjExIDMwLjY1MTQgMjAuMjMxNSA0Ny43OTA5QzEwLjkwMTggNjQuOTMwNCA3LjgyNDc1IDg0Ljc4MTQgMTEuNTI3NyAxMDMuOTQxQzE1LjIzMDcgMTIzLjEwMSAyNS40ODMxIDE0MC4zNzYgNDAuNTI3NCAxNTIuODA0QzU1LjU3MTcgMTY1LjIzMyA3NC40NzA4IDE3Mi4wNDIgOTMuOTg1IDE3Mi4wNjNDMTEwLjc2NiAxNzIuMDYzIDEyNy4xNjMgMTY3LjA0MiAxNDEuMDY2IDE1Ny42NDZDMTU0Ljk2OSAxNDguMjQ5IDE2NS43NDMgMTM0LjkwNyAxNzIgMTE5LjMzN1oiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMTguNjc3MyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+DQo8L3N2Zz4NCg==");


/***/ }),

/***/ "./src/button-presets/btn-12/sun.svg":
/*!*******************************************!*\
  !*** ./src/button-presets/btn-12/sun.svg ***!
  \*******************************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgSun; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M116 12v11.556V12zm0 196.444V220v-11.556zM220 116h-11.556H220zm-196.444 0H12h11.556zm165.984 73.54l-8.17-8.17 8.17 8.17zM50.63 50.63l-8.17-8.17 8.17 8.17zm138.91-8.17l-8.17 8.17 8.17-8.17zM50.63 181.37l-8.17 8.17 8.17-8.17zM162.222 116a46.223 46.223 0 11-92.445 0 46.223 46.223 0 0192.445 0v0z",
  stroke: "#fff",
  strokeWidth: 23.111,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

var SvgSun = function SvgSun(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    width: 232,
    height: 232,
    fill: "none"
  }, props), _ref);
};

/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjMyIiBoZWlnaHQ9IjIzMiIgdmlld0JveD0iMCAwIDIzMiAyMzIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQo8cGF0aCBkPSJNMTE2IDEyVjIzLjU1NTZWMTJaTTExNiAyMDguNDQ0VjIyMFYyMDguNDQ0Wk0yMjAgMTE2SDIwOC40NDRIMjIwWk0yMy41NTU2IDExNkgxMkgyMy41NTU2Wk0xODkuNTQgMTg5LjU0TDE4MS4zNyAxODEuMzdMMTg5LjU0IDE4OS41NFpNNTAuNjMwMiA1MC42MzAyTDQyLjQ2MDQgNDIuNDYwNEw1MC42MzAyIDUwLjYzMDJaTTE4OS41NCA0Mi40NjA0TDE4MS4zNyA1MC42MzAyTDE4OS41NCA0Mi40NjA0Wk01MC42MzAyIDE4MS4zN0w0Mi40NjA0IDE4OS41NEw1MC42MzAyIDE4MS4zN1pNMTYyLjIyMiAxMTZDMTYyLjIyMiAxMjguMjU5IDE1Ny4zNTIgMTQwLjAxNiAxNDguNjg0IDE0OC42ODRDMTQwLjAxNiAxNTcuMzUyIDEyOC4yNTkgMTYyLjIyMiAxMTYgMTYyLjIyMkMxMDMuNzQxIDE2Mi4yMjIgOTEuOTg0MyAxNTcuMzUyIDgzLjMxNTkgMTQ4LjY4NEM3NC42NDc2IDE0MC4wMTYgNjkuNzc3OCAxMjguMjU5IDY5Ljc3NzggMTE2QzY5Ljc3NzggMTAzLjc0MSA3NC42NDc2IDkxLjk4NDMgODMuMzE1OSA4My4zMTU5QzkxLjk4NDMgNzQuNjQ3NiAxMDMuNzQxIDY5Ljc3NzggMTE2IDY5Ljc3NzhDMTI4LjI1OSA2OS43Nzc4IDE0MC4wMTYgNzQuNjQ3NiAxNDguNjg0IDgzLjMxNTlDMTU3LjM1MiA5MS45ODQzIDE2Mi4yMjIgMTAzLjc0MSAxNjIuMjIyIDExNlYxMTZaIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIzLjExMTEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPg0KPC9zdmc+DQo=");


/***/ }),

/***/ "./src/button-presets/btn-13/moon.svg":
/*!********************************************!*\
  !*** ./src/button-presets/btn-13/moon.svg ***!
  \********************************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgMoon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M172 119.337A84.05 84.05 0 0158.295 58.181 84.048 84.048 0 0162.663 10a84.076 84.076 0 0031.322 162.063A84.082 84.082 0 00172 119.337z",
  stroke: "#000",
  strokeWidth: 18.677,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

var SvgMoon = function SvgMoon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    width: 182,
    height: 182,
    fill: "none"
  }, props), _ref);
};

/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgyIiBoZWlnaHQ9IjE4MiIgdmlld0JveD0iMCAwIDE4MiAxODIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQo8cGF0aCBkPSJNMTcyIDExOS4zMzdDMTU2LjcxNSAxMjUuNDg0IDEzOS45NiAxMjcuMDAyIDEyMy44MTkgMTIzLjcwNUMxMDcuNjc3IDEyMC40MDcgOTIuODYwOCAxMTIuNDM4IDgxLjIxMTMgMTAwLjc4OUM2OS41NjE5IDg5LjEzOTIgNjEuNTkzIDc0LjMyMjggNTguMjk1MyA1OC4xODE0QzU0Ljk5NzYgNDIuMDM5OSA1Ni41MTY1IDI1LjI4NTMgNjIuNjYzMiAxMEM0NC41NjIyIDE3LjI5MSAyOS41NjExIDMwLjY1MTQgMjAuMjMxNSA0Ny43OTA5QzEwLjkwMTggNjQuOTMwNCA3LjgyNDc1IDg0Ljc4MTQgMTEuNTI3NyAxMDMuOTQxQzE1LjIzMDcgMTIzLjEwMSAyNS40ODMxIDE0MC4zNzYgNDAuNTI3NCAxNTIuODA0QzU1LjU3MTcgMTY1LjIzMyA3NC40NzA4IDE3Mi4wNDIgOTMuOTg1IDE3Mi4wNjNDMTEwLjc2NiAxNzIuMDYzIDEyNy4xNjMgMTY3LjA0MiAxNDEuMDY2IDE1Ny42NDZDMTU0Ljk2OSAxNDguMjQ5IDE2NS43NDMgMTM0LjkwNyAxNzIgMTE5LjMzN1oiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMTguNjc3MyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+DQo8L3N2Zz4NCg==");


/***/ }),

/***/ "./src/button-presets/btn-13/sun.svg":
/*!*******************************************!*\
  !*** ./src/button-presets/btn-13/sun.svg ***!
  \*******************************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgSun; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M116 12v11.556V12zm0 196.444V220v-11.556zM220 116h-11.556H220zm-196.444 0H12h11.556zm165.984 73.54l-8.17-8.17 8.17 8.17zM50.63 50.63l-8.17-8.17 8.17 8.17zm138.91-8.17l-8.17 8.17 8.17-8.17zM50.63 181.37l-8.17 8.17 8.17-8.17zM162.222 116a46.223 46.223 0 11-92.445 0 46.223 46.223 0 0192.445 0v0z",
  stroke: "#fff",
  strokeWidth: 23.111,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

var SvgSun = function SvgSun(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    width: 232,
    height: 232,
    fill: "none"
  }, props), _ref);
};

/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjMyIiBoZWlnaHQ9IjIzMiIgdmlld0JveD0iMCAwIDIzMiAyMzIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQo8cGF0aCBkPSJNMTE2IDEyVjIzLjU1NTZWMTJaTTExNiAyMDguNDQ0VjIyMFYyMDguNDQ0Wk0yMjAgMTE2SDIwOC40NDRIMjIwWk0yMy41NTU2IDExNkgxMkgyMy41NTU2Wk0xODkuNTQgMTg5LjU0TDE4MS4zNyAxODEuMzdMMTg5LjU0IDE4OS41NFpNNTAuNjMwMiA1MC42MzAyTDQyLjQ2MDQgNDIuNDYwNEw1MC42MzAyIDUwLjYzMDJaTTE4OS41NCA0Mi40NjA0TDE4MS4zNyA1MC42MzAyTDE4OS41NCA0Mi40NjA0Wk01MC42MzAyIDE4MS4zN0w0Mi40NjA0IDE4OS41NEw1MC42MzAyIDE4MS4zN1pNMTYyLjIyMiAxMTZDMTYyLjIyMiAxMjguMjU5IDE1Ny4zNTIgMTQwLjAxNiAxNDguNjg0IDE0OC42ODRDMTQwLjAxNiAxNTcuMzUyIDEyOC4yNTkgMTYyLjIyMiAxMTYgMTYyLjIyMkMxMDMuNzQxIDE2Mi4yMjIgOTEuOTg0MyAxNTcuMzUyIDgzLjMxNTkgMTQ4LjY4NEM3NC42NDc2IDE0MC4wMTYgNjkuNzc3OCAxMjguMjU5IDY5Ljc3NzggMTE2QzY5Ljc3NzggMTAzLjc0MSA3NC42NDc2IDkxLjk4NDMgODMuMzE1OSA4My4zMTU5QzkxLjk4NDMgNzQuNjQ3NiAxMDMuNzQxIDY5Ljc3NzggMTE2IDY5Ljc3NzhDMTI4LjI1OSA2OS43Nzc4IDE0MC4wMTYgNzQuNjQ3NiAxNDguNjg0IDgzLjMxNTlDMTU3LjM1MiA5MS45ODQzIDE2Mi4yMjIgMTAzLjc0MSAxNjIuMjIyIDExNlYxMTZaIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIzLjExMTEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPg0KPC9zdmc+DQo=");


/***/ }),

/***/ "./src/button-presets/btn-3/moon-dark.png":
/*!************************************************!*\
  !*** ./src/button-presets/btn-3/moon-dark.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/button-presets/btn-3/moon-light.png":
/*!*************************************************!*\
  !*** ./src/button-presets/btn-3/moon-light.png ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAfCAYAAAAfrhY5AAAABHNCSVQICAgIfAhkiAAAAsVJREFUSEu1l41x00AQhd+rgKSCOB2ECggVABUQKiBUAKmApAJIBSEVkFQQqIDQQahgmU9z51nbkk4SZmc8Gtune7c/7+2eNdEi4kTSW0k8D8qzvn0n6YPtHxO365a5tTgiziV9LIB1+R9Jz7befWP7W2u//P8geES8lvRZ0koSYGzMB+9uiue/JX2SdGf7cQ7woOcRwYZ4i10BYPspIgj39wJ8Lemc3+eC1vU7nkfE15Lbn5LOch4jAs9fSbq2fbYUtBc8eQzwafaqpIFw39s+/VfgjbCnzcnjyXY4I4KKfiHpeEl++w67DntEUDBHkp5vUyYiKLpfkm5tU4h7sQ680InKvrBNsW1YRJDfL4XLl3tBrjyPiFqxq77qTbXw0jbh34u5KNfDWAX/T3DC+F7SoELtE7w4e0AE8byrYttjage1EJcr28jtYispDtuHgCOX5Br1GrSICEmPto+XIic6C2cBZ9OmcCTle2cbFZxtSStmg1euwwyEZpamJ7p2h66eE/YjctByJekB70C7SQdIwHRH3gGvC3uz4PKhUvhRRFIwyPvSBWESwgUwhcv6J9srwJtU61G83HKJAjXAk75A4SLTAKGMfOd3ZBmv1zINOD/SrWbRqOg9oDSbIcNbnLss8wA0Rca7oq3azomo+iWFhGc4QEEy35EO9mO62UhJal6HHKaC1zD2NpZWIU75PxXdehCp4JyeE+M9LXX2PNYQKPYn1zzX80Du57VtzqLRRK/r+LUR2Q09TzRiMUUxiccNr+tMuDOI9A2QdVwiAnS6RSkoHIdFUG5nJuxUru/UKQJ4Dk0upoS3rinFxegNA27LFLwTxbE2Sg3AUW4meE/4CF3vlajwnrEaLgOKjbJn9LpUQgcNkchqeLB9AMAqIOu4UHDRGE1Z867GTuUQCAn544N8ZkM+OVB3pZpaqJPA5+R7ztq/CDZmL3/38AMAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/button-presets/btn-3/sun-dark.png":
/*!***********************************************!*\
  !*** ./src/button-presets/btn-3/sun-dark.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/button-presets/btn-3/sun-light.png":
/*!************************************************!*\
  !*** ./src/button-presets/btn-3/sun-light.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAfCAYAAAAfrhY5AAAABHNCSVQICAgIfAhkiAAAA1NJREFUSEutl+FVFUEMhXMrECoQKgAqECoQKwArUCsQKxAqEDuACsQKhAqEDrCCeL45yZ7svtl9K8f5BW9nJsnNzU1G9sLl7qdm9s3MjiQ9vuQarTnk7ndmdifpIve7O39/NrMTSXxvy92vzexZ0sdtd681TmSvzWxX0nMY2TDu7sdm9sPMbiWBzOJaazwNfZJ0uWCcqM/M7J2km3827u7nZvbGzDCUUe6Z2W8ze5S0H8aJEkdOM+fu7mb2JIn9mYad4MYXSffVoY3II2d4z0byWWHeWcqluxPtjSQQIP8YJg2HZvY+f08HesY5AIEOcEDS0Tb4et8nhr9LAtHR6uY8DqYD+wVWHAMVICca4AUhCEnE3wvcGKMUu4bZt0g4dz/MPAUXvpoZDuR6CITyf5yAbC239XwPnWY8cgXJIBCejkSj1PSf2HNd92DEzKhrUIEj5HfEdncHJXSBEoR8l2kciDD8KjzkYxOUiBj4MHw8ZWyNqOzFAciaCGQJsp17znFugD3yjBNEQGQX8RslBtTI6KhUZoiWuUYRTyKAVEDubZWwJuc4Qp4HJNYwP+SYNC46vI1w5O2tmQ2MX2k8o190WtGdqOlcP7NRuHvTdEmrZLiUGQT8VTU++EB/yHWLcciRROPDgyQOQzbk8kVCE2cJBE3IuypwzTglMGhx6HcrNXeHYAcviDy72yAwUY5VI+7X5nwV0wvsSdShC86KzKRW94qcbpXImXLL/t+ISslmg6r7a50D1YdQoGEYSNL1utKMYcSKeyrk8Ar+UONXGVyVV0qK9YTQpDxGrhAJSLnRFieopWHuoC/UdkwqktgtHWkcKYXhl3UeKzlEj/GawzjC31TFfYxOlCqXQ1wMM2CM1DDUknualI/kdQphbD6TdBXMb87FlDOnNbRUUHvO8wF/Q2C6lvp5TiAjdYs0EAHOUDqQiyjp50M3LE1mNBF1CVcgrqPP7CAwF/rknmEiqiNZ7umNUannI8PRLJjHZ0fiUMuLMuHWkWyj5nvGgROmDq0voO5pdb5Ysm+3kpK0O0EAktFOR7lf1TDKRDuUWu/F0tu3lJ61xnvzeO/FkvP9f32xUGJMJsNctvBWwykeF0Pa5qJfFfmMjMINDDGPdet4W0X8BZR0ASWWO1BSAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/button-presets/btn-4/dark.png":
/*!*******************************************!*\
  !*** ./src/button-presets/btn-4/dark.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAfCAYAAAAfrhY5AAAABHNCSVQICAgIfAhkiAAAAsVJREFUSEu1l41x00AQhd+rgKSCOB2ECggVABUQKiBUAKmApAJIBSEVkFQQqIDQQahgmU9z51nbkk4SZmc8Gtune7c/7+2eNdEi4kTSW0k8D8qzvn0n6YPtHxO365a5tTgiziV9LIB1+R9Jz7befWP7W2u//P8geES8lvRZ0koSYGzMB+9uiue/JX2SdGf7cQ7woOcRwYZ4i10BYPspIgj39wJ8Lemc3+eC1vU7nkfE15Lbn5LOch4jAs9fSbq2fbYUtBc8eQzwafaqpIFw39s+/VfgjbCnzcnjyXY4I4KKfiHpeEl++w67DntEUDBHkp5vUyYiKLpfkm5tU4h7sQ680InKvrBNsW1YRJDfL4XLl3tBrjyPiFqxq77qTbXw0jbh34u5KNfDWAX/T3DC+F7SoELtE7w4e0AE8byrYttjage1EJcr28jtYispDtuHgCOX5Br1GrSICEmPto+XIic6C2cBZ9OmcCTle2cbFZxtSStmg1euwwyEZpamJ7p2h66eE/YjctByJekB70C7SQdIwHRH3gGvC3uz4PKhUvhRRFIwyPvSBWESwgUwhcv6J9srwJtU61G83HKJAjXAk75A4SLTAKGMfOd3ZBmv1zINOD/SrWbRqOg9oDSbIcNbnLss8wA0Rca7oq3azomo+iWFhGc4QEEy35EO9mO62UhJal6HHKaC1zD2NpZWIU75PxXdehCp4JyeE+M9LXX2PNYQKPYn1zzX80Du57VtzqLRRK/r+LUR2Q09TzRiMUUxiccNr+tMuDOI9A2QdVwiAnS6RSkoHIdFUG5nJuxUru/UKQJ4Dk0upoS3rinFxegNA27LFLwTxbE2Sg3AUW4meE/4CF3vlajwnrEaLgOKjbJn9LpUQgcNkchqeLB9AMAqIOu4UHDRGE1Z867GTuUQCAn544N8ZkM+OVB3pZpaqJPA5+R7ztq/CDZmL3/38AMAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/button-presets/btn-4/light.png":
/*!********************************************!*\
  !*** ./src/button-presets/btn-4/light.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAfCAYAAAAfrhY5AAAABHNCSVQICAgIfAhkiAAAA1NJREFUSEutl+FVFUEMhXMrECoQKgAqECoQKwArUCsQKxAqEDuACsQKhAqEDrCCeL45yZ7svtl9K8f5BW9nJsnNzU1G9sLl7qdm9s3MjiQ9vuQarTnk7ndmdifpIve7O39/NrMTSXxvy92vzexZ0sdtd681TmSvzWxX0nMY2TDu7sdm9sPMbiWBzOJaazwNfZJ0uWCcqM/M7J2km3827u7nZvbGzDCUUe6Z2W8ze5S0H8aJEkdOM+fu7mb2JIn9mYad4MYXSffVoY3II2d4z0byWWHeWcqluxPtjSQQIP8YJg2HZvY+f08HesY5AIEOcEDS0Tb4et8nhr9LAtHR6uY8DqYD+wVWHAMVICca4AUhCEnE3wvcGKMUu4bZt0g4dz/MPAUXvpoZDuR6CITyf5yAbC239XwPnWY8cgXJIBCejkSj1PSf2HNd92DEzKhrUIEj5HfEdncHJXSBEoR8l2kciDD8KjzkYxOUiBj4MHw8ZWyNqOzFAciaCGQJsp17znFugD3yjBNEQGQX8RslBtTI6KhUZoiWuUYRTyKAVEDubZWwJuc4Qp4HJNYwP+SYNC46vI1w5O2tmQ2MX2k8o190WtGdqOlcP7NRuHvTdEmrZLiUGQT8VTU++EB/yHWLcciRROPDgyQOQzbk8kVCE2cJBE3IuypwzTglMGhx6HcrNXeHYAcviDy72yAwUY5VI+7X5nwV0wvsSdShC86KzKRW94qcbpXImXLL/t+ISslmg6r7a50D1YdQoGEYSNL1utKMYcSKeyrk8Ar+UONXGVyVV0qK9YTQpDxGrhAJSLnRFieopWHuoC/UdkwqktgtHWkcKYXhl3UeKzlEj/GawzjC31TFfYxOlCqXQ1wMM2CM1DDUknualI/kdQphbD6TdBXMb87FlDOnNbRUUHvO8wF/Q2C6lvp5TiAjdYs0EAHOUDqQiyjp50M3LE1mNBF1CVcgrqPP7CAwF/rknmEiqiNZ7umNUannI8PRLJjHZ0fiUMuLMuHWkWyj5nvGgROmDq0voO5pdb5Ysm+3kpK0O0EAktFOR7lf1TDKRDuUWu/F0tu3lJ61xnvzeO/FkvP9f32xUGJMJsNctvBWwykeF0Pa5qJfFfmMjMINDDGPdet4W0X8BZR0ASWWO1BSAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/button-presets/btn-5/dark.png":
/*!*******************************************!*\
  !*** ./src/button-presets/btn-5/dark.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAfCAYAAAAfrhY5AAAABHNCSVQICAgIfAhkiAAAAsVJREFUSEu1l41x00AQhd+rgKSCOB2ECggVABUQKiBUAKmApAJIBSEVkFQQqIDQQahgmU9z51nbkk4SZmc8Gtune7c/7+2eNdEi4kTSW0k8D8qzvn0n6YPtHxO365a5tTgiziV9LIB1+R9Jz7befWP7W2u//P8geES8lvRZ0koSYGzMB+9uiue/JX2SdGf7cQ7woOcRwYZ4i10BYPspIgj39wJ8Lemc3+eC1vU7nkfE15Lbn5LOch4jAs9fSbq2fbYUtBc8eQzwafaqpIFw39s+/VfgjbCnzcnjyXY4I4KKfiHpeEl++w67DntEUDBHkp5vUyYiKLpfkm5tU4h7sQ680InKvrBNsW1YRJDfL4XLl3tBrjyPiFqxq77qTbXw0jbh34u5KNfDWAX/T3DC+F7SoELtE7w4e0AE8byrYttjage1EJcr28jtYispDtuHgCOX5Br1GrSICEmPto+XIic6C2cBZ9OmcCTle2cbFZxtSStmg1euwwyEZpamJ7p2h66eE/YjctByJekB70C7SQdIwHRH3gGvC3uz4PKhUvhRRFIwyPvSBWESwgUwhcv6J9srwJtU61G83HKJAjXAk75A4SLTAKGMfOd3ZBmv1zINOD/SrWbRqOg9oDSbIcNbnLss8wA0Rca7oq3azomo+iWFhGc4QEEy35EO9mO62UhJal6HHKaC1zD2NpZWIU75PxXdehCp4JyeE+M9LXX2PNYQKPYn1zzX80Du57VtzqLRRK/r+LUR2Q09TzRiMUUxiccNr+tMuDOI9A2QdVwiAnS6RSkoHIdFUG5nJuxUru/UKQJ4Dk0upoS3rinFxegNA27LFLwTxbE2Sg3AUW4meE/4CF3vlajwnrEaLgOKjbJn9LpUQgcNkchqeLB9AMAqIOu4UHDRGE1Z867GTuUQCAn544N8ZkM+OVB3pZpaqJPA5+R7ztq/CDZmL3/38AMAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/button-presets/btn-5/light.png":
/*!********************************************!*\
  !*** ./src/button-presets/btn-5/light.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAfCAYAAAAfrhY5AAAABHNCSVQICAgIfAhkiAAAA1NJREFUSEutl+FVFUEMhXMrECoQKgAqECoQKwArUCsQKxAqEDuACsQKhAqEDrCCeL45yZ7svtl9K8f5BW9nJsnNzU1G9sLl7qdm9s3MjiQ9vuQarTnk7ndmdifpIve7O39/NrMTSXxvy92vzexZ0sdtd681TmSvzWxX0nMY2TDu7sdm9sPMbiWBzOJaazwNfZJ0uWCcqM/M7J2km3827u7nZvbGzDCUUe6Z2W8ze5S0H8aJEkdOM+fu7mb2JIn9mYad4MYXSffVoY3II2d4z0byWWHeWcqluxPtjSQQIP8YJg2HZvY+f08HesY5AIEOcEDS0Tb4et8nhr9LAtHR6uY8DqYD+wVWHAMVICca4AUhCEnE3wvcGKMUu4bZt0g4dz/MPAUXvpoZDuR6CITyf5yAbC239XwPnWY8cgXJIBCejkSj1PSf2HNd92DEzKhrUIEj5HfEdncHJXSBEoR8l2kciDD8KjzkYxOUiBj4MHw8ZWyNqOzFAciaCGQJsp17znFugD3yjBNEQGQX8RslBtTI6KhUZoiWuUYRTyKAVEDubZWwJuc4Qp4HJNYwP+SYNC46vI1w5O2tmQ2MX2k8o190WtGdqOlcP7NRuHvTdEmrZLiUGQT8VTU++EB/yHWLcciRROPDgyQOQzbk8kVCE2cJBE3IuypwzTglMGhx6HcrNXeHYAcviDy72yAwUY5VI+7X5nwV0wvsSdShC86KzKRW94qcbpXImXLL/t+ISslmg6r7a50D1YdQoGEYSNL1utKMYcSKeyrk8Ar+UONXGVyVV0qK9YTQpDxGrhAJSLnRFieopWHuoC/UdkwqktgtHWkcKYXhl3UeKzlEj/GawzjC31TFfYxOlCqXQ1wMM2CM1DDUknualI/kdQphbD6TdBXMb87FlDOnNbRUUHvO8wF/Q2C6lvp5TiAjdYs0EAHOUDqQiyjp50M3LE1mNBF1CVcgrqPP7CAwF/rknmEiqiNZ7umNUannI8PRLJjHZ0fiUMuLMuHWkWyj5nvGgROmDq0voO5pdb5Ysm+3kpK0O0EAktFOR7lf1TDKRDuUWu/F0tu3lJ61xnvzeO/FkvP9f32xUGJMJsNctvBWwykeF0Pa5qJfFfmMjMINDDGPdet4W0X8BZR0ASWWO1BSAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/button-presets/btn-6/dark.png":
/*!*******************************************!*\
  !*** ./src/button-presets/btn-6/dark.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAfCAYAAAAfrhY5AAAABHNCSVQICAgIfAhkiAAAAsVJREFUSEu1l41x00AQhd+rgKSCOB2ECggVABUQKiBUAKmApAJIBSEVkFQQqIDQQahgmU9z51nbkk4SZmc8Gtune7c/7+2eNdEi4kTSW0k8D8qzvn0n6YPtHxO365a5tTgiziV9LIB1+R9Jz7befWP7W2u//P8geES8lvRZ0koSYGzMB+9uiue/JX2SdGf7cQ7woOcRwYZ4i10BYPspIgj39wJ8Lemc3+eC1vU7nkfE15Lbn5LOch4jAs9fSbq2fbYUtBc8eQzwafaqpIFw39s+/VfgjbCnzcnjyXY4I4KKfiHpeEl++w67DntEUDBHkp5vUyYiKLpfkm5tU4h7sQ680InKvrBNsW1YRJDfL4XLl3tBrjyPiFqxq77qTbXw0jbh34u5KNfDWAX/T3DC+F7SoELtE7w4e0AE8byrYttjage1EJcr28jtYispDtuHgCOX5Br1GrSICEmPto+XIic6C2cBZ9OmcCTle2cbFZxtSStmg1euwwyEZpamJ7p2h66eE/YjctByJekB70C7SQdIwHRH3gGvC3uz4PKhUvhRRFIwyPvSBWESwgUwhcv6J9srwJtU61G83HKJAjXAk75A4SLTAKGMfOd3ZBmv1zINOD/SrWbRqOg9oDSbIcNbnLss8wA0Rca7oq3azomo+iWFhGc4QEEy35EO9mO62UhJal6HHKaC1zD2NpZWIU75PxXdehCp4JyeE+M9LXX2PNYQKPYn1zzX80Du57VtzqLRRK/r+LUR2Q09TzRiMUUxiccNr+tMuDOI9A2QdVwiAnS6RSkoHIdFUG5nJuxUru/UKQJ4Dk0upoS3rinFxegNA27LFLwTxbE2Sg3AUW4meE/4CF3vlajwnrEaLgOKjbJn9LpUQgcNkchqeLB9AMAqIOu4UHDRGE1Z867GTuUQCAn544N8ZkM+OVB3pZpaqJPA5+R7ztq/CDZmL3/38AMAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/button-presets/btn-6/light.png":
/*!********************************************!*\
  !*** ./src/button-presets/btn-6/light.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAfCAYAAAAfrhY5AAAABHNCSVQICAgIfAhkiAAAA1NJREFUSEutl+FVFUEMhXMrECoQKgAqECoQKwArUCsQKxAqEDuACsQKhAqEDrCCeL45yZ7svtl9K8f5BW9nJsnNzU1G9sLl7qdm9s3MjiQ9vuQarTnk7ndmdifpIve7O39/NrMTSXxvy92vzexZ0sdtd681TmSvzWxX0nMY2TDu7sdm9sPMbiWBzOJaazwNfZJ0uWCcqM/M7J2km3827u7nZvbGzDCUUe6Z2W8ze5S0H8aJEkdOM+fu7mb2JIn9mYad4MYXSffVoY3II2d4z0byWWHeWcqluxPtjSQQIP8YJg2HZvY+f08HesY5AIEOcEDS0Tb4et8nhr9LAtHR6uY8DqYD+wVWHAMVICca4AUhCEnE3wvcGKMUu4bZt0g4dz/MPAUXvpoZDuR6CITyf5yAbC239XwPnWY8cgXJIBCejkSj1PSf2HNd92DEzKhrUIEj5HfEdncHJXSBEoR8l2kciDD8KjzkYxOUiBj4MHw8ZWyNqOzFAciaCGQJsp17znFugD3yjBNEQGQX8RslBtTI6KhUZoiWuUYRTyKAVEDubZWwJuc4Qp4HJNYwP+SYNC46vI1w5O2tmQ2MX2k8o190WtGdqOlcP7NRuHvTdEmrZLiUGQT8VTU++EB/yHWLcciRROPDgyQOQzbk8kVCE2cJBE3IuypwzTglMGhx6HcrNXeHYAcviDy72yAwUY5VI+7X5nwV0wvsSdShC86KzKRW94qcbpXImXLL/t+ISslmg6r7a50D1YdQoGEYSNL1utKMYcSKeyrk8Ar+UONXGVyVV0qK9YTQpDxGrhAJSLnRFieopWHuoC/UdkwqktgtHWkcKYXhl3UeKzlEj/GawzjC31TFfYxOlCqXQ1wMM2CM1DDUknualI/kdQphbD6TdBXMb87FlDOnNbRUUHvO8wF/Q2C6lvp5TiAjdYs0EAHOUDqQiyjp50M3LE1mNBF1CVcgrqPP7CAwF/rknmEiqiNZ7umNUannI8PRLJjHZ0fiUMuLMuHWkWyj5nvGgROmDq0voO5pdb5Ysm+3kpK0O0EAktFOR7lf1TDKRDuUWu/F0tu3lJ61xnvzeO/FkvP9f32xUGJMJsNctvBWwykeF0Pa5qJfFfmMjMINDDGPdet4W0X8BZR0ASWWO1BSAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/button-presets/btn-7/dark.png":
/*!*******************************************!*\
  !*** ./src/button-presets/btn-7/dark.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/button-presets/btn-7/light.png":
/*!********************************************!*\
  !*** ./src/button-presets/btn-7/light.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/button-presets/btn-8/dark.svg":
/*!*******************************************!*\
  !*** ./src/button-presets/btn-8/dark.svg ***!
  \*******************************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgDark; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M276.5 28v27.611V28zm0 469.389V525v-27.611zM525 276.5h-27.611H525zm-469.389 0H28h27.611zm396.606 175.717l-19.521-19.521 19.521 19.521zM120.304 120.304l-19.521-19.521 19.521 19.521zm331.913-19.521l-19.521 19.521 19.521-19.521zM120.304 432.696l-19.521 19.521 19.521-19.521zM386.944 276.5a110.444 110.444 0 11-220.889 0 110.444 110.444 0 01220.889 0v0z",
  stroke: "#307DF6",
  strokeWidth: 55.22,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

var SvgDark = function SvgDark(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    width: 553,
    height: 553,
    fill: "none"
  }, props), _ref);
};

/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTUzIiBoZWlnaHQ9IjU1MyIgdmlld0JveD0iMCAwIDU1MyA1NTMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQo8cGF0aCBkPSJNMjc2LjUgMjhWNTUuNjExMVYyOFpNMjc2LjUgNDk3LjM4OVY1MjVWNDk3LjM4OVpNNTI1IDI3Ni41SDQ5Ny4zODlINTI1Wk01NS42MTExIDI3Ni41SDI4SDU1LjYxMTFaTTQ1Mi4yMTcgNDUyLjIxN0w0MzIuNjk2IDQzMi42OTZMNDUyLjIxNyA0NTIuMjE3Wk0xMjAuMzA0IDEyMC4zMDRMMTAwLjc4MyAxMDAuNzgzTDEyMC4zMDQgMTIwLjMwNFpNNDUyLjIxNyAxMDAuNzgzTDQzMi42OTYgMTIwLjMwNEw0NTIuMjE3IDEwMC43ODNaTTEyMC4zMDQgNDMyLjY5NkwxMDAuNzgzIDQ1Mi4yMTdMMTIwLjMwNCA0MzIuNjk2Wk0zODYuOTQ0IDI3Ni41QzM4Ni45NDQgMzA1Ljc5MiAzNzUuMzA4IDMzMy44ODQgMzU0LjU5NiAzNTQuNTk2QzMzMy44ODQgMzc1LjMwOCAzMDUuNzkyIDM4Ni45NDQgMjc2LjUgMzg2Ljk0NEMyNDcuMjA4IDM4Ni45NDQgMjE5LjExNiAzNzUuMzA4IDE5OC40MDQgMzU0LjU5NkMxNzcuNjkyIDMzMy44ODQgMTY2LjA1NiAzMDUuNzkyIDE2Ni4wNTYgMjc2LjVDMTY2LjA1NiAyNDcuMjA4IDE3Ny42OTIgMjE5LjExNiAxOTguNDA0IDE5OC40MDRDMjE5LjExNiAxNzcuNjkyIDI0Ny4yMDggMTY2LjA1NiAyNzYuNSAxNjYuMDU2QzMwNS43OTIgMTY2LjA1NiAzMzMuODg0IDE3Ny42OTIgMzU0LjU5NiAxOTguNDA0QzM3NS4zMDggMjE5LjExNiAzODYuOTQ0IDI0Ny4yMDggMzg2Ljk0NCAyNzYuNVYyNzYuNVoiIHN0cm9rZT0iIzMwN0RGNiIgc3Ryb2tlLXdpZHRoPSI1NS4yMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+DQo8L3N2Zz4NCg==");


/***/ }),

/***/ "./src/button-presets/btn-8/light.svg":
/*!********************************************!*\
  !*** ./src/button-presets/btn-8/light.svg ***!
  \********************************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgLight; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M276.5 28v27.611m0 441.778V525M525 276.5h-27.611m-441.778 0H28m424.217 175.717l-19.521-19.521M120.304 120.304l-19.521-19.521m351.434 0l-19.521 19.521M120.304 432.696l-19.521 19.521M386.944 276.5a110.444 110.444 0 11-220.889 0 110.444 110.444 0 01220.889 0z",
  stroke: "#fff",
  strokeWidth: 55.222,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

var SvgLight = function SvgLight(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    width: 553,
    height: 553,
    fill: "none"
  }, props), _ref);
};

/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTUzIiBoZWlnaHQ9IjU1MyIgdmlld0JveD0iMCAwIDU1MyA1NTMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQo8cGF0aCBkPSJNMjc2LjUgMjhWNTUuNjExMU0yNzYuNSA0OTcuMzg5VjUyNU01MjUgMjc2LjVINDk3LjM4OU01NS42MTExIDI3Ni41SDI4TTQ1Mi4yMTcgNDUyLjIxN0w0MzIuNjk2IDQzMi42OTZNMTIwLjMwNCAxMjAuMzA0TDEwMC43ODMgMTAwLjc4M000NTIuMjE3IDEwMC43ODNMNDMyLjY5NiAxMjAuMzA0TTEyMC4zMDQgNDMyLjY5NkwxMDAuNzgzIDQ1Mi4yMTdNMzg2Ljk0NCAyNzYuNUMzODYuOTQ0IDMwNS43OTIgMzc1LjMwOCAzMzMuODg0IDM1NC41OTYgMzU0LjU5NkMzMzMuODg0IDM3NS4zMDggMzA1Ljc5MiAzODYuOTQ0IDI3Ni41IDM4Ni45NDRDMjQ3LjIwOCAzODYuOTQ0IDIxOS4xMTYgMzc1LjMwOCAxOTguNDA0IDM1NC41OTZDMTc3LjY5MiAzMzMuODg0IDE2Ni4wNTYgMzA1Ljc5MiAxNjYuMDU2IDI3Ni41QzE2Ni4wNTYgMjQ3LjIwOCAxNzcuNjkyIDIxOS4xMTYgMTk4LjQwNCAxOTguNDA0QzIxOS4xMTYgMTc3LjY5MiAyNDcuMjA4IDE2Ni4wNTYgMjc2LjUgMTY2LjA1NkMzMDUuNzkyIDE2Ni4wNTYgMzMzLjg4NCAxNzcuNjkyIDM1NC41OTYgMTk4LjQwNEMzNzUuMzA4IDIxOS4xMTYgMzg2Ljk0NCAyNDcuMjA4IDM4Ni45NDQgMjc2LjVaIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjU1LjIyMjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPg0KPC9zdmc+DQo=");


/***/ }),

/***/ "./src/button-presets/btn-9/moon.svg":
/*!*******************************************!*\
  !*** ./src/button-presets/btn-9/moon.svg ***!
  \*******************************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgMoon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M172 119.337A84.05 84.05 0 0158.295 58.181 84.048 84.048 0 0162.663 10a84.076 84.076 0 0031.322 162.063A84.082 84.082 0 00172 119.337z",
  stroke: "#fff",
  strokeWidth: 18.677,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

var SvgMoon = function SvgMoon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    width: 182,
    height: 182,
    fill: "none"
  }, props), _ref);
};

/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgyIiBoZWlnaHQ9IjE4MiIgdmlld0JveD0iMCAwIDE4MiAxODIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQo8cGF0aCBkPSJNMTcyIDExOS4zMzdDMTU2LjcxNSAxMjUuNDg0IDEzOS45NiAxMjcuMDAyIDEyMy44MTkgMTIzLjcwNUMxMDcuNjc3IDEyMC40MDcgOTIuODYwOCAxMTIuNDM4IDgxLjIxMTMgMTAwLjc4OUM2OS41NjE5IDg5LjEzOTIgNjEuNTkzIDc0LjMyMjggNTguMjk1MyA1OC4xODE0QzU0Ljk5NzYgNDIuMDM5OSA1Ni41MTY1IDI1LjI4NTMgNjIuNjYzMiAxMEM0NC41NjIyIDE3LjI5MSAyOS41NjExIDMwLjY1MTQgMjAuMjMxNSA0Ny43OTA5QzEwLjkwMTggNjQuOTMwNCA3LjgyNDc1IDg0Ljc4MTQgMTEuNTI3NyAxMDMuOTQxQzE1LjIzMDcgMTIzLjEwMSAyNS40ODMxIDE0MC4zNzYgNDAuNTI3NCAxNTIuODA0QzU1LjU3MTcgMTY1LjIzMyA3NC40NzA4IDE3Mi4wNDIgOTMuOTg1IDE3Mi4wNjNDMTEwLjc2NiAxNzIuMDYzIDEyNy4xNjMgMTY3LjA0MiAxNDEuMDY2IDE1Ny42NDZDMTU0Ljk2OSAxNDguMjQ5IDE2NS43NDMgMTM0LjkwNyAxNzIgMTE5LjMzN1oiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMTguNjc3MyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+DQo8L3N2Zz4NCg==");


/***/ }),

/***/ "./src/button-presets/btn-9/sun.svg":
/*!******************************************!*\
  !*** ./src/button-presets/btn-9/sun.svg ***!
  \******************************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgSun; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M116 12v11.556V12zm0 196.444V220v-11.556zM220 116h-11.556H220zm-196.444 0H12h11.556zm165.984 73.54l-8.17-8.17 8.17 8.17zM50.63 50.63l-8.17-8.17 8.17 8.17zm138.91-8.17l-8.17 8.17 8.17-8.17zM50.63 181.37l-8.17 8.17 8.17-8.17zM162.222 116a46.223 46.223 0 11-92.445 0 46.223 46.223 0 0192.445 0v0z",
  stroke: "#fff",
  strokeWidth: 23.111,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

var SvgSun = function SvgSun(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    width: 232,
    height: 232,
    fill: "none"
  }, props), _ref);
};

/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjMyIiBoZWlnaHQ9IjIzMiIgdmlld0JveD0iMCAwIDIzMiAyMzIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQo8cGF0aCBkPSJNMTE2IDEyVjIzLjU1NTZWMTJaTTExNiAyMDguNDQ0VjIyMFYyMDguNDQ0Wk0yMjAgMTE2SDIwOC40NDRIMjIwWk0yMy41NTU2IDExNkgxMkgyMy41NTU2Wk0xODkuNTQgMTg5LjU0TDE4MS4zNyAxODEuMzdMMTg5LjU0IDE4OS41NFpNNTAuNjMwMiA1MC42MzAyTDQyLjQ2MDQgNDIuNDYwNEw1MC42MzAyIDUwLjYzMDJaTTE4OS41NCA0Mi40NjA0TDE4MS4zNyA1MC42MzAyTDE4OS41NCA0Mi40NjA0Wk01MC42MzAyIDE4MS4zN0w0Mi40NjA0IDE4OS41NEw1MC42MzAyIDE4MS4zN1pNMTYyLjIyMiAxMTZDMTYyLjIyMiAxMjguMjU5IDE1Ny4zNTIgMTQwLjAxNiAxNDguNjg0IDE0OC42ODRDMTQwLjAxNiAxNTcuMzUyIDEyOC4yNTkgMTYyLjIyMiAxMTYgMTYyLjIyMkMxMDMuNzQxIDE2Mi4yMjIgOTEuOTg0MyAxNTcuMzUyIDgzLjMxNTkgMTQ4LjY4NEM3NC42NDc2IDE0MC4wMTYgNjkuNzc3OCAxMjguMjU5IDY5Ljc3NzggMTE2QzY5Ljc3NzggMTAzLjc0MSA3NC42NDc2IDkxLjk4NDMgODMuMzE1OSA4My4zMTU5QzkxLjk4NDMgNzQuNjQ3NiAxMDMuNzQxIDY5Ljc3NzggMTE2IDY5Ljc3NzhDMTI4LjI1OSA2OS43Nzc4IDE0MC4wMTYgNzQuNjQ3NiAxNDguNjg0IDgzLjMxNTlDMTU3LjM1MiA5MS45ODQzIDE2Mi4yMjIgMTAzLjc0MSAxNjIuMjIyIDExNlYxMTZaIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIzLjExMTEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPg0KPC9zdmc+DQo=");


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button */ "./src/Button.js");
/* harmony import */ var _Edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit */ "./src/Edit.js");
/* harmony import */ var _logo_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logo.svg */ "./src/logo.svg");
/* harmony import */ var _theme_switch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./theme-switch */ "./src/theme-switch/index.js");




var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
registerBlockType('wp-dark-mode-block/dark-mode-switch', {
  title: __('Dark Mode Switch', 'wp-dark-mode'),
  icon: {
    src: _logo_svg__WEBPACK_IMPORTED_MODULE_2__["ReactComponent"]
  },
  category: 'common',
  attributes: {
    style: {
      type: 'number',
      default: 1
    },
    alignment: {
      type: 'string'
    }
  },
  supports: {
    align: ['center', 'wide', 'full']
  },
  edit: _Edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: function save(_ref) {
    var attributes = _ref.attributes;
    var alignment = attributes.alignment,
        style = attributes.style;
    return wp.element.createElement("div", {
      style: {
        textAlign: alignment
      }
    }, wp.element.createElement(_Button__WEBPACK_IMPORTED_MODULE_0__["default"], {
      style: attributes.style
    }));
  }
});

/***/ }),

/***/ "./src/logo.svg":
/*!**********************!*\
  !*** ./src/logo.svg ***!
  \**********************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgLogo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M46.2 2C36.1 4.7 27 10.1 18.6 18.4 10 27.1 5.4 34.6 2.3 45.2c-4.6 15.9-2.4 37.4 5 50.1 6.9 11.7 18.6 22.5 29.9 27.6 11.2 5 29.8 6.6 42.6 3.6 21.9-5.2 40.2-23 46.3-45 3-11.2 2.4-28.6-1.4-39.5-6.9-19.3-23.9-35.1-43.3-40C71.2-.6 56.2-.6 46.2 2zm19.4 27.2c-8.3 8.2-11 14.9-10.4 25.8 1 17.3 13.2 29.7 30.2 30.8 3.9.2 8.9-.1 11-.7 2.2-.6 4.2-.9 4.4-.6.8.7-5.8 9.4-9.8 12.7-2.2 1.9-6.6 4.8-9.7 6.4-5.4 2.7-6.6 2.9-17.3 2.9-11.1 0-11.8-.1-18.5-3.4-20.9-10.3-29.7-34.7-20.1-55.7 2.5-5.4 9.7-13.9 15-17.7 5.7-4.1 14.6-6.6 23.3-6.6l8.2-.1-6.3 6.2z"
});

var SvgLogo = function SvgLogo(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    width: 170.667,
    height: 170.667,
    viewBox: "0 0 128 128"
  }, props), _ref);
};

/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAyMDAxMDkwNC8vRU4iDQogImh0dHA6Ly93d3cudzMub3JnL1RSLzIwMDEvUkVDLVNWRy0yMDAxMDkwNC9EVEQvc3ZnMTAuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4wIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciDQogd2lkdGg9IjEyOC4wMDAwMDBwdCIgaGVpZ2h0PSIxMjguMDAwMDAwcHQiIHZpZXdCb3g9IjAgMCAxMjguMDAwMDAwIDEyOC4wMDAwMDAiDQogcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQgbWVldCI+DQo8bWV0YWRhdGE+DQpDcmVhdGVkIGJ5IHBvdHJhY2UgMS4xNiwgd3JpdHRlbiBieSBQZXRlciBTZWxpbmdlciAyMDAxLTIwMTkNCjwvbWV0YWRhdGE+DQo8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwxMjguMDAwMDAwKSBzY2FsZSgwLjEwMDAwMCwtMC4xMDAwMDApIg0KZmlsbD0iIzAwMDAwMCIgc3Ryb2tlPSJub25lIj4NCjxwYXRoIGQ9Ik00NjIgMTI2MCBjLTEwMSAtMjcgLTE5MiAtODEgLTI3NiAtMTY0IC04NiAtODcgLTEzMiAtMTYyIC0xNjMgLTI2OA0KLTQ2IC0xNTkgLTI0IC0zNzQgNTAgLTUwMSA2OSAtMTE3IDE4NiAtMjI1IDI5OSAtMjc2IDExMiAtNTAgMjk4IC02NiA0MjYgLTM2DQoyMTkgNTIgNDAyIDIzMCA0NjMgNDUwIDMwIDExMiAyNCAyODYgLTE0IDM5NSAtNjkgMTkzIC0yMzkgMzUxIC00MzMgNDAwIC0xMDINCjI2IC0yNTIgMjYgLTM1MiAweiBtMTk0IC0yNzIgYy04MyAtODIgLTExMCAtMTQ5IC0xMDQgLTI1OCAxMCAtMTczIDEzMiAtMjk3DQozMDIgLTMwOCAzOSAtMiA4OSAxIDExMCA3IDIyIDYgNDIgOSA0NCA2IDggLTcgLTU4IC05NCAtOTggLTEyNyAtMjIgLTE5IC02Ng0KLTQ4IC05NyAtNjQgLTU0IC0yNyAtNjYgLTI5IC0xNzMgLTI5IC0xMTEgMCAtMTE4IDEgLTE4NSAzNCAtMjA5IDEwMyAtMjk3DQozNDcgLTIwMSA1NTcgMjUgNTQgOTcgMTM5IDE1MCAxNzcgNTcgNDEgMTQ2IDY2IDIzMyA2NiBsODIgMSAtNjMgLTYyeiIvPg0KPC9nPg0KPC9zdmc+DQo=");


/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/theme-switch/Color-Palettes.js":
/*!********************************************!*\
  !*** ./src/theme-switch/Color-Palettes.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var _wp$element = wp.element,
    Component = _wp$element.Component,
    Fragment = _wp$element.Fragment;

var Palette = /*#__PURE__*/function (_Component) {
  _inherits(Palette, _Component);

  var _super = _createSuper(Palette);

  function Palette() {
    var _this;

    _classCallCheck(this, Palette);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "is_saved", localStorage.getItem('wp_dark_mode_admin'));

    _defineProperty(_assertThisInitialized(_this), "state", {
      type: _this.is_saved && _this.is_saved != 0 ? 'darkmode' : 'default'
    });

    return _this;
  }

  _createClass(Palette, [{
    key: "handleColorPalegtte",
    value: function handleColorPalegtte(type) {
      var elm = document.getElementsByTagName('html')[0];
      var img = document.getElementById('wpDarkModeThemeSwitchImg');
      elm.classList.remove('wp-dark-mode-theme-defaul', 'wp-dark-mode-theme-darkmode', 'wp-dark-mode-theme-chathams', 'wp-dark-mode-theme-pumpkin', 'wp-dark-mode-theme-mustard', 'wp-dark-mode-theme-concord');
      elm.classList.add("wp-dark-mode-theme-".concat(type));
      img.setAttribute('src', "".concat(wpDarkMode.pluginUrl, "/block/build/images/").concat(type, ".png"));
      this.setState({
        type: type
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var type = this.state.type;
      var labels = {
        default: 'Default',
        darkmode: 'Darkmode',
        chathams: 'Chathams',
        pumpkin: 'Pumpkin Spice',
        mustard: 'Mustard Seed',
        concord: 'Concord Jam'
      };
      var is_pro = wpDarkMode.is_pro_active || wpDarkMode.is_ultimate_active;
      return wp.element.createElement("div", null, Object.entries(labels).map(function (_ref, i) {
        var _ref2 = _slicedToArray(_ref, 2),
            key = _ref2[0],
            label = _ref2[1];

        return wp.element.createElement("a", {
          href: "javascript:;",
          className: "".concat(type == key ? 'active' : '', " ").concat(!is_pro && key !== 'default' && key !== 'darkmode' && 'disabled'),
          onClick: function onClick() {
            if (!is_pro && key !== 'default' && key !== 'darkmode') {
              document.querySelector('.wp-dark-mode-promo').classList.remove('hidden');
              return;
            }

            _this2.handleColorPalegtte(key);
          }
        }, wp.element.createElement("img", {
          src: "".concat(wpDarkMode.pluginUrl, "/block/build/images/").concat(key, ".png"),
          alt: label
        }), wp.element.createElement("span", null, label), type == key ? wp.element.createElement("span", {
          className: "tick"
        }, "\u2713") : '', !is_pro && key !== 'default' && key !== 'darkmode' && wp.element.createElement("span", {
          className: "wp-darkmode-pro-badge"
        }, "PRO"));
      }));
    }
  }]);

  return Palette;
}(Component);

var ColorPalettes = /*#__PURE__*/function (_Component2) {
  _inherits(ColorPalettes, _Component2);

  var _super2 = _createSuper(ColorPalettes);

  function ColorPalettes() {
    _classCallCheck(this, ColorPalettes);

    return _super2.apply(this, arguments);
  }

  _createClass(ColorPalettes, [{
    key: "render",
    value: function render() {
      var active = this.props.active;
      return wp.element.createElement(Fragment, null, active ? wp.element.createElement("div", {
        className: "wpdm-color-palettes-wrapper"
      }, wp.element.createElement(Palette, null)) : '');
    }
  }]);

  return ColorPalettes;
}(Component);

/* harmony default export */ __webpack_exports__["default"] = (ColorPalettes);

/***/ }),

/***/ "./src/theme-switch/index.js":
/*!***********************************!*\
  !*** ./src/theme-switch/index.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Color_Palettes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Color-Palettes */ "./src/theme-switch/Color-Palettes.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/theme-switch/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_1__);
var render = wp.element.render;


document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    appendThemeSwitch();
  }, 1);
});

function appendThemeSwitch() {
  var is_saved = sessionStorage.getItem('wp_dark_mode_admin)');

  if (is_saved && is_saved != 0) {
    document.querySelector('html').classList.add("wp-dark-mode-theme-darkmode");
  }

  var node = document.querySelector('.edit-post-header__toolbar');
  var newElem = document.createElement('div');
  newElem.classList.add('wpdm-theme-switch-wrapper');
  var html = "<div id=\"wpDarkModeThemeSwitch\"><img id=\"wpDarkModeThemeSwitchImg\" src=\"".concat(wpDarkMode.pluginUrl, "/block/build/images/default.png\" /> <i class=\"wpdm-arrow down\"></i> </div>");
  html += "<div id=\"wpdmColorPalettesContainer\"></div> ";
  newElem.innerHTML = html;
  node.insertBefore(newElem, node.childNodes[0]);
  document.getElementById('wpDarkModeThemeSwitch').addEventListener('click', editorColorPalettes);
}

var themeChooseActive = false;

function editorColorPalettes() {
  themeChooseActive = !themeChooseActive;
  render(wp.element.createElement(_Color_Palettes__WEBPACK_IMPORTED_MODULE_0__["default"], {
    active: themeChooseActive
  }), document.getElementById('wpdmColorPalettesContainer'));
}

/***/ }),

/***/ "./src/theme-switch/style.scss":
/*!*************************************!*\
  !*** ./src/theme-switch/style.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/theme-switch/style.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["React"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 21);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/opensans-bold-webfont.eot";

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/opensans-bolditalic-webfont.eot";

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/opensans-light-webfont.eot";

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/opensans-lightitalic-webfont.eot";

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(5);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(19)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./style.scss", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./style.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(undefined);
// imports


// module
exports.push([module.i, "@keyframes mobileEither {\n  0% {\n    padding-bottom: 1rem;\n    padding-right: 2rem; }\n  100% {\n    padding: 0rem; } }\n\n@keyframes tabletNoNews {\n  0% {\n    padding-right: 2rem;\n    padding-top: 2rem; }\n  100% {\n    padding: 0; } }\n\n@keyframes desktopNoNews {\n  0% {\n    padding-right: 2rem; }\n  100% {\n    padding-right: 5rem; } }\n\n@keyframes tabletNews {\n  0% {\n    padding-left: 2.5rem; }\n  100% {\n    padding-left: 0; } }\n\n@keyframes desktopNews {\n  0% {\n    padding-right: 1rem; }\n  100% {\n    padding-right: 3.5rem; } }\n\n/* http://meyerweb.com/eric/tools/css/reset/ \r\n   v2.0 | 20110126\r\n   License: none (public domain)\r\n*/\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline; }\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block; }\n\nbody {\n  line-height: 1; }\n\nol, ul {\n  list-style: none; }\n\nblockquote, q {\n  quotes: none; }\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\n/*! Generated by Font Squirrel (https://www.fontsquirrel.com) on April 26, 2017 */\n@font-face {\n  font-family: 'open_sansbold';\n  src: url(" + __webpack_require__(0) + ");\n  src: url(" + __webpack_require__(0) + "?#iefix) format(\"embedded-opentype\"), url(" + __webpack_require__(9) + ") format(\"woff2\"), url(" + __webpack_require__(8) + ") format(\"woff\"), url(" + __webpack_require__(7) + "#open_sansbold) format(\"svg\");\n  font-weight: normal;\n  font-style: normal; }\n\n@font-face {\n  font-family: 'open_sansbold_italic';\n  src: url(" + __webpack_require__(1) + ");\n  src: url(" + __webpack_require__(1) + "?#iefix) format(\"embedded-opentype\"), url(" + __webpack_require__(12) + ") format(\"woff2\"), url(" + __webpack_require__(11) + ") format(\"woff\"), url(" + __webpack_require__(10) + "#open_sansbold_italic) format(\"svg\");\n  font-weight: normal;\n  font-style: normal; }\n\n@font-face {\n  font-family: 'open_sanslight';\n  src: url(" + __webpack_require__(2) + ");\n  src: url(" + __webpack_require__(2) + "?#iefix) format(\"embedded-opentype\"), url(" + __webpack_require__(15) + ") format(\"woff2\"), url(" + __webpack_require__(14) + ") format(\"woff\"), url(" + __webpack_require__(13) + "#open_sanslight) format(\"svg\");\n  font-weight: normal;\n  font-style: normal; }\n\n@font-face {\n  font-family: 'open_sanslight_italic';\n  src: url(" + __webpack_require__(3) + ");\n  src: url(" + __webpack_require__(3) + "?#iefix) format(\"embedded-opentype\"), url(" + __webpack_require__(18) + ") format(\"woff2\"), url(" + __webpack_require__(17) + ") format(\"woff\"), url(" + __webpack_require__(16) + "#open_sanslight_italic) format(\"svg\");\n  font-weight: normal;\n  font-style: normal; }\n\n.nice-select {\n  -webkit-tap-highlight-color: transparent;\n  background-color: #fff;\n  border-radius: 5px;\n  border: solid 1px #e8e8e8;\n  box-sizing: border-box;\n  clear: both;\n  cursor: pointer;\n  display: block;\n  float: left;\n  font-family: inherit;\n  font-size: 14px;\n  font-weight: normal;\n  height: 42px;\n  line-height: 40px;\n  outline: none;\n  padding-left: 18px;\n  padding-right: 30px;\n  position: relative;\n  text-align: left !important;\n  -webkit-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  white-space: nowrap;\n  width: auto; }\n  .nice-select:hover {\n    border-color: #dbdbdb; }\n  .nice-select:active, .nice-select.open, .nice-select:focus {\n    border-color: #999; }\n  .nice-select:after {\n    border-bottom: 2px solid #999;\n    border-right: 2px solid #999;\n    content: '';\n    display: block;\n    height: 5px;\n    margin-top: -4px;\n    pointer-events: none;\n    position: absolute;\n    right: 12px;\n    top: 50%;\n    -webkit-transform-origin: 66% 66%;\n    -ms-transform-origin: 66% 66%;\n    transform-origin: 66% 66%;\n    -webkit-transform: rotate(45deg);\n    -ms-transform: rotate(45deg);\n    transform: rotate(45deg);\n    -webkit-transition: all 0.15s ease-in-out;\n    transition: all 0.15s ease-in-out;\n    width: 5px; }\n  .nice-select.open:after {\n    -webkit-transform: rotate(-135deg);\n    -ms-transform: rotate(-135deg);\n    transform: rotate(-135deg); }\n  .nice-select.open .list {\n    opacity: 1;\n    pointer-events: auto;\n    -webkit-transform: scale(1) translateY(0);\n    -ms-transform: scale(1) translateY(0);\n    transform: scale(1) translateY(0); }\n  .nice-select.disabled {\n    border-color: #ededed;\n    color: #999;\n    pointer-events: none; }\n    .nice-select.disabled:after {\n      border-color: #cccccc; }\n  .nice-select.wide {\n    width: 100%; }\n    .nice-select.wide .list {\n      left: 0 !important;\n      right: 0 !important; }\n  .nice-select.right {\n    float: right; }\n    .nice-select.right .list {\n      left: auto;\n      right: 0; }\n  .nice-select.small {\n    font-size: 12px;\n    height: 36px;\n    line-height: 34px; }\n    .nice-select.small:after {\n      height: 4px;\n      width: 4px; }\n    .nice-select.small .option {\n      line-height: 34px;\n      min-height: 34px; }\n  .nice-select .list {\n    background-color: #fff;\n    border-radius: 5px;\n    box-shadow: 0 0 0 1px rgba(68, 68, 68, 0.11);\n    box-sizing: border-box;\n    margin-top: 4px;\n    opacity: 0;\n    overflow: hidden;\n    padding: 0;\n    pointer-events: none;\n    position: absolute;\n    top: 100%;\n    left: 0;\n    -webkit-transform-origin: 50% 0;\n    -ms-transform-origin: 50% 0;\n    transform-origin: 50% 0;\n    -webkit-transform: scale(0.75) translateY(-21px);\n    -ms-transform: scale(0.75) translateY(-21px);\n    transform: scale(0.75) translateY(-21px);\n    -webkit-transition: all 0.2s cubic-bezier(0.5, 0, 0, 1.25), opacity 0.15s ease-out;\n    transition: all 0.2s cubic-bezier(0.5, 0, 0, 1.25), opacity 0.15s ease-out;\n    z-index: 9; }\n    .nice-select .list:hover .option:not(:hover) {\n      background-color: transparent !important; }\n  .nice-select .option {\n    cursor: pointer;\n    font-weight: 400;\n    line-height: 40px;\n    list-style: none;\n    min-height: 40px;\n    outline: none;\n    padding-left: 18px;\n    padding-right: 29px;\n    text-align: left;\n    -webkit-transition: all 0.2s;\n    transition: all 0.2s; }\n    .nice-select .option:hover, .nice-select .option.focus, .nice-select .option.selected.focus {\n      background-color: #f6f6f6; }\n    .nice-select .option.selected {\n      font-weight: bold; }\n    .nice-select .option.disabled {\n      background-color: transparent;\n      color: #999;\n      cursor: default; }\n\n.no-csspointerevents .nice-select .list {\n  display: none; }\n\n.no-csspointerevents .nice-select.open .list {\n  display: block; }\n\n/*Content Styles */\nbody {\n  background-color: black;\n  display: flex;\n  flex-direction: column;\n  font-size: 16px;\n  margin: 0 auto;\n  max-width: 1600px; }\n\na {\n  text-decoration: none; }\n\nimg {\n  width: 100%; }\n\nheader {\n  align-content: center;\n  align-self: center;\n  display: flex;\n  height: 94vh;\n  justify-content: center;\n  flex-direction: column; }\n  @media (min-width: 600px) {\n    header {\n      flex-direction: row;\n      padding-left: 1rem;\n      width: 60%; } }\n  @media (min-width: 1240px) {\n    header {\n      padding-left: 2rem;\n      width: 100%; } }\n  header p {\n    color: white;\n    font-family: \"open_sanslight\";\n    font-size: 0.8rem;\n    line-height: 2.5rem;\n    text-align: center; }\n  header section p {\n    font-size: 0.8rem; }\n    @media (min-width: 600px) {\n      header section p {\n        font-size: 0.9rem; } }\n    @media (min-width: 1240px) {\n      header section p {\n        font-size: 1rem; } }\n  header .logo {\n    align-self: center;\n    animation: mobileEither 0.5s 1 normal linear;\n    display: flex;\n    height: auto;\n    margin-bottom: 1rem;\n    width: 100%; }\n    @media (min-width: 600px) {\n      header .logo {\n        padding-right: 0; } }\n    @media (min-width: 1240px) {\n      header .logo {\n        padding-right: 5rem;\n        width: 150px; } }\n  @media (min-width: 600px) {\n    header .logo.no-news {\n      animation: tabletNoNews 0.5s 1 normal linear; } }\n  @media (min-width: 1240px) {\n    header .logo.no-news {\n      animation: desktopNoNews 0.5s 1 normal linear; } }\n\n.menu {\n  align-items: center;\n  align-self: center;\n  display: flex;\n  flex-direction: column;\n  width: 10rem; }\n\n.dropdown {\n  margin: 0 auto;\n  width: 8rem; }\n\nul {\n  list-style-type: none; }\n\n.grid {\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%; }\n  .grid a {\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: cover;\n    color: white;\n    display: flex;\n    height: 100vw;\n    position: relative;\n    width: 100%; }\n    @media (min-width: 600px) {\n      .grid a {\n        height: 45vw;\n        width: 50%; } }\n    @media (min-width: 1240px) {\n      .grid a {\n        height: 20vw;\n        width: 25%; } }\n    .grid a:hover li {\n      opacity: 1;\n      height: 35%;\n      transition: all 0.5s ease; }\n  .grid li {\n    align-self: flex-end;\n    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.5));\n    font-family: \"open_sanslight\";\n    height: 35%;\n    overflow: hidden;\n    width: 100%; }\n    @media (min-width: 1240px) {\n      .grid li {\n        position: absolute;\n        bottom: 0;\n        height: 0; } }\n\n.loading {\n  margin: 0 auto; }\n  .loading img {\n    height: 10rem;\n    padding: 1.5rem;\n    width: 10rem; }\n\n.copyright {\n  color: #c2c2c2;\n  font-size: 0.8rem;\n  font-family: \"open_sanslight\";\n  text-align: center; }\n  @media (min-width: 1240px) {\n    .copyright {\n      padding-left: 4rem;\n      text-align: left; } }\n\n.slim header {\n  height: 24vh;\n  justify-content: left;\n  padding-bottom: 3rem;\n  padding-top: 2rem;\n  transition: height 0.5s;\n  width: 100%; }\n  @media (min-width: 600px) {\n    .slim header {\n      justify-content: left;\n      height: 8vh;\n      padding: 1.2rem 0 2.5rem 6.5rem;\n      transition: height 0.5s; } }\n  @media (min-width: 1240px) {\n    .slim header {\n      padding-left: 2rem; } }\n  .slim header .logo {\n    height: auto;\n    width: 150px; }\n    @media (min-width: 600px) {\n      .slim header .logo {\n        animation: tabletNews 0.5s ease-in-out;\n        padding-top: 1rem;\n        padding-right: 3.5rem;\n        width: 70px; } }\n    @media (min-width: 1240px) {\n      .slim header .logo {\n        animation: desktopNews 0.5s ease-in-out; } }\n\n.slim .copyright {\n  padding-top: 2.0rem;\n  padding-bottom: 3rem; }\n", ""]);

// exports


/***/ }),
/* 6 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/opensans-bold-webfont.svg";

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/opensans-bold-webfont.woff";

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/opensans-bold-webfont.woff2";

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/opensans-bolditalic-webfont.svg";

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/opensans-bolditalic-webfont.woff";

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/opensans-bolditalic-webfont.woff2";

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/opensans-light-webfont.svg";

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/opensans-light-webfont.woff";

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/opensans-light-webfont.woff2";

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/opensans-lightitalic-webfont.svg";

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/opensans-lightitalic-webfont.woff";

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/opensans-lightitalic-webfont.woff2";

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		// Test for IE <= 9 as proposed by Browserhacks
		// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
		// Tests for existence of standard globals is to allow style-loader 
		// to operate correctly into non-standard environments
		// @see https://github.com/webpack-contrib/style-loader/issues/177
		return window && document && document.all && !window.atob;
	}),
	getElement = (function(fn) {
		var memo = {};
		return function(selector) {
			if (typeof memo[selector] === "undefined") {
				memo[selector] = fn.call(this, selector);
			}
			return memo[selector]
		};
	})(function (styleTarget) {
		return document.querySelector(styleTarget)
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [],
	fixUrls = __webpack_require__(20);

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (typeof options.insertInto === "undefined") options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list, options);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list, options) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var styleTarget = getElement(options.insertInto)
	if (!styleTarget) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			styleTarget.insertBefore(styleElement, styleTarget.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			styleTarget.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			styleTarget.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		styleTarget.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	options.attrs.type = "text/css";

	attachTagAttrs(styleElement, options.attrs);
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	attachTagAttrs(linkElement, options.attrs);
	insertStyleElement(options, linkElement);
	return linkElement;
}

function attachTagAttrs(element, attrs) {
	Object.keys(attrs).forEach(function (key) {
		element.setAttribute(key, attrs[key]);
	});
}

function addStyle(obj, options) {
	var styleElement, update, remove, transformResult;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    transformResult = options.transform(obj.css);
	    
	    if (transformResult) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = transformResult;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css. 
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement, options);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/* If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
	and there is no publicPath defined then lets turn convertToAbsoluteUrls
	on by default.  Otherwise default to the convertToAbsoluteUrls option
	directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls){
		css = fixUrls(css);
	}

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 20 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scss_style_scss__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scss_style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__scss_style_scss__);


$(function (){

  //Initialize jQuery-Nice-Select
  $('select').niceSelect();

  //On selection set up AJAX
  $('select').on('change', function(){
    var menuChoice = $(this).val();
    var url = 'https://api.nytimes.com/svc/topstories/v2/' + menuChoice + '.json?'
    + $.param({
      'api-key': '385dbba7ced942639ee354d262342235',
    }, {passive:true} );
    $('.grid').empty ();

    //Retrieve NYT Content
    $.ajax({
      url: url,
      method: 'GET',
    }).always(function (){
      $('.loading').append('<img src="../images/ajax-loader.gif">');
    }).done(function(result) {
    
      //Process Results Object
      var resultsArray = result.results.filter (function(object){
        return object.multimedia.length;
      });
      resultsArray.splice(12);

      //Populate Flexbox Grid with Results
      $.each (resultsArray, function(key, value){
        var element = '<a href="' + value.url + '"><li><p>' + value.abstract + '</p></li></a>'
        var image = "url('" + value.multimedia[4].url + "')"
        $('.grid').append(element);
        $('.grid a:last-child').css("background-image", image)
      })

      //Adjust Style
      $('.grid').css("height","auto");
      $('.loading').css("display","none"); //Hide ajax-loader.gif
      $('body').addClass("slim");
      console.log($('.logo'));
      $('.logo').removeClass("no-news"); //Remove no-news animations
      console.log($('.logo'));
    }).fail(function(err) {
      throw err;
    });
  })
})


/***/ })
/******/ ]);
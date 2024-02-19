/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadContact)\n/* harmony export */ });\nfunction loadContact() {\r\n    const content = document.querySelector('#content')\r\n    const contact = document.createElement('div')\r\n\r\n    //append contact div to content\r\n    content.appendChild(contact);\r\n    \r\n    // Append heading\r\n    const h1 = document.createElement('h1');\r\n    contact.appendChild(h1)\r\n    h1.innerText='You may reach us on'\r\n\r\n    // append details\r\n    const contactlist = document.createElement('ol')\r\n    contact.appendChild(contactlist);\r\n    contactlist.innerHTML= '<li> contact number: 09952558976</li> <li> email: wilverzxc@gmail.com </li> <li> facebook: Wilver Georpe </li>'\r\n}\n\n//# sourceURL=webpack://project-restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pageLoad_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageLoad.js */ \"./src/pageLoad.js\");\n/* harmony import */ var _removeContent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./removeContent.js */ \"./src/removeContent.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _restaurant_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./restaurant.js */ \"./src/restaurant.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n//loads page\r\n\r\n(0,_pageLoad_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n\r\nconst Menu = document.querySelector('.menu');\r\nMenu.addEventListener('click',(e) => {\r\n    (0,_removeContent_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n    (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();}\r\n    )\r\n\r\nconst homeButton = document.querySelector('.home');\r\nhomeButton.addEventListener('click', (e)=> {\r\n    (0,_removeContent_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n    (0,_restaurant_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n})\r\n\r\nconst contactButton = document.querySelector('.contact');\r\ncontactButton.addEventListener('click', (e)=>{\r\n    (0,_removeContent_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n    (0,_contact_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n})\r\n\r\n\n\n//# sourceURL=webpack://project-restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadMenu)\n/* harmony export */ });\nfunction loadMenu(){\r\n    const content = document.querySelector('#content')\r\n    const menu = document.createElement('div')\r\n\r\n    // Appends a new div to the content\r\n    content.appendChild(menu);\r\n    const heading = document.createElement('h1')\r\n    menu.appendChild(heading)\r\n    heading.innerText = 'This is Our Menu'\r\n\r\n    //creates and appends list of menu\r\n    const menuList = document.createElement('ol')\r\n    menu.appendChild(menuList);\r\n    menuList.innerHTML =\r\n    '<li> Menudo </li> <li> Afritada </li> <li> Adobo </li>'\r\n\r\n    \r\n}\n\n//# sourceURL=webpack://project-restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/pageLoad.js":
/*!*************************!*\
  !*** ./src/pageLoad.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initialLoad)\n/* harmony export */ });\n/* harmony import */ var _restaurant_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restaurant.js */ \"./src/restaurant.js\");\n\r\n\r\nfunction initialLoad() {\r\n    (0,_restaurant_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://project-restaurant-page/./src/pageLoad.js?");

/***/ }),

/***/ "./src/removeContent.js":
/*!******************************!*\
  !*** ./src/removeContent.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ removeContent)\n/* harmony export */ });\nfunction removeContent(){\r\n    const content = document.getElementById('content')\r\n    content.innerHTML=''\r\n\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://project-restaurant-page/./src/removeContent.js?");

/***/ }),

/***/ "./src/restaurant.js":
/*!***************************!*\
  !*** ./src/restaurant.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n const createRestaurantHomePage = ()=> {\r\n    const content = document.querySelector('#content');\r\n    const pageContent = document.createElement('div');\r\n    pageContent.classList.add('page-content');\r\n\r\n    //create and append image element\r\nconst image = document.createElement('img');\r\nimage.src = 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=400';\r\nimage.height = '300';\r\npageContent.appendChild(image);\r\n\r\n// create and append headline element\r\nconst headline = document.createElement('h1');\r\nheadline.textContent = 'Welcome to this Restaurant ';\r\npageContent.appendChild(headline);\r\n\r\n//create and append paragraph element\r\nconst paragraph = document.createElement('p');\r\nparagraph.textContent = 'Lorem, ipffsum dolor sit amet consectetur adipisicing elit. Culpa porro velit nobis est mollitia officiis consectetur atque pariatur ducimus distinctio.';\r\npageContent.appendChild(paragraph);\r\ncontent.appendChild(pageContent)\r\n}\r\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createRestaurantHomePage);\r\n\n\n//# sourceURL=webpack://project-restaurant-page/./src/restaurant.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
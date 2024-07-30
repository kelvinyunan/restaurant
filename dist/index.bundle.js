"use strict";
(self["webpackChunkrestaurant"] = self["webpackChunkrestaurant"] || []).push([["index"],{

/***/ "./src/content.js":
/*!************************!*\
  !*** ./src/content.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderContent: () => (/* binding */ renderContent)
/* harmony export */ });
const renderContent = (div) => {
    const para = document.createElement('p');
    para.textContent = 'HELLO';
    para.style.color = 'red';

    div.appendChild(para);

}



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content */ "./src/content.js");


const contentDiv = document.getElementById('content')

;(0,_content__WEBPACK_IMPORTED_MODULE_0__.renderContent)(contentDiv);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNSeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0Esd0RBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2NvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCByZW5kZXJDb250ZW50ID0gKGRpdikgPT4ge1xyXG4gICAgY29uc3QgcGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIHBhcmEudGV4dENvbnRlbnQgPSAnSEVMTE8nO1xyXG4gICAgcGFyYS5zdHlsZS5jb2xvciA9ICdyZWQnO1xyXG5cclxuICAgIGRpdi5hcHBlbmRDaGlsZChwYXJhKTtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCB7IHJlbmRlckNvbnRlbnQgfTsiLCJpbXBvcnQgeyByZW5kZXJDb250ZW50IH0gZnJvbSBcIi4vY29udGVudFwiXHJcblxyXG5jb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKVxyXG5cclxucmVuZGVyQ29udGVudChjb250ZW50RGl2KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
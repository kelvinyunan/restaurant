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
const renderContent = () => {
    const para = document.createElement('p');
    para.textContent = 'HELLO';
    para.style.color = red;

    contentDiv.appendChild(para);

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

;(0,_content__WEBPACK_IMPORTED_MODULE_0__.renderContent)();

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNSeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0Esd0RBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2NvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCByZW5kZXJDb250ZW50ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgcGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIHBhcmEudGV4dENvbnRlbnQgPSAnSEVMTE8nO1xyXG4gICAgcGFyYS5zdHlsZS5jb2xvciA9IHJlZDtcclxuXHJcbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKHBhcmEpO1xyXG5cclxufVxyXG5cclxuZXhwb3J0IHsgcmVuZGVyQ29udGVudCB9OyIsImltcG9ydCB7IHJlbmRlckNvbnRlbnQgfSBmcm9tIFwiLi9jb250ZW50XCJcclxuXHJcbmNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpXHJcblxyXG5yZW5kZXJDb250ZW50KCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
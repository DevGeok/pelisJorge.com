/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./scripts/index/getMovies.js":
/*!************************************!*\
  !*** ./scripts/index/getMovies.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getMovies: () => (/* binding */ getMovies)\n/* harmony export */ });\n/* harmony import */ var _searchPage_renderCards_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../searchPage/renderCards.js */ \"./scripts/searchPage/renderCards.js\");\n/* harmony import */ var _moviesToHTML_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moviesToHTML.js */ \"./scripts/index/moviesToHTML.js\");\n\r\n\r\n\r\nfunction getMovies() {\r\n  const url = \"https://students-api.2.us-1.fl0.io/movies\";\r\n\r\n  $.get(url).done((data) => {\r\n       if (Array.isArray(data) === true) {\r\n      (0,_searchPage_renderCards_js__WEBPACK_IMPORTED_MODULE_0__.renderCards)(data, _moviesToHTML_js__WEBPACK_IMPORTED_MODULE_1__.moviesToHTML);\r\n    } else {\r\n      console.error('Error obteniendo movies:', data.Error);\r\n    }\r\n  }).fail((jqXHR, textStatus, errorThrown) => {\r\n    console.error(`Error al obtener las movies debido a un error: ${textStatus}`, errorThrown);\r\n  });\r\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zY3JpcHRzL2luZGV4L2dldE1vdmllcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMkQ7QUFDWjtBQUMvQztBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLHVFQUFXLE9BQU8sMERBQVk7QUFDcEMsTUFBTTtBQUNOO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsb0VBQW9FLFdBQVc7QUFDL0UsR0FBRztBQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnQvLi9zY3JpcHRzL2luZGV4L2dldE1vdmllcy5qcz9lOTQ1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlckNhcmRzIH0gZnJvbSBcIi4uL3NlYXJjaFBhZ2UvcmVuZGVyQ2FyZHMuanNcIjtcclxuaW1wb3J0IHttb3ZpZXNUb0hUTUx9IGZyb20gXCIuL21vdmllc1RvSFRNTC5qc1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldE1vdmllcygpIHtcclxuICBjb25zdCB1cmwgPSBcImh0dHBzOi8vc3R1ZGVudHMtYXBpLjIudXMtMS5mbDAuaW8vbW92aWVzXCI7XHJcblxyXG4gICQuZ2V0KHVybCkuZG9uZSgoZGF0YSkgPT4ge1xyXG4gICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YSkgPT09IHRydWUpIHtcclxuICAgICAgcmVuZGVyQ2FyZHMoZGF0YSwgbW92aWVzVG9IVE1MKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIG9idGVuaWVuZG8gbW92aWVzOicsIGRhdGEuRXJyb3IpO1xyXG4gICAgfVxyXG4gIH0pLmZhaWwoKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikgPT4ge1xyXG4gICAgY29uc29sZS5lcnJvcihgRXJyb3IgYWwgb2J0ZW5lciBsYXMgbW92aWVzIGRlYmlkbyBhIHVuIGVycm9yOiAke3RleHRTdGF0dXN9YCwgZXJyb3JUaHJvd24pO1xyXG4gIH0pO1xyXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./scripts/index/getMovies.js\n");

/***/ }),

/***/ "./scripts/index/index.js":
/*!********************************!*\
  !*** ./scripts/index/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _getMovies_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getMovies.js */ \"./scripts/index/getMovies.js\");\n\r\n\r\ndocument.addEventListener('DOMContentLoaded',_getMovies_js__WEBPACK_IMPORTED_MODULE_0__.getMovies)\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zY3JpcHRzL2luZGV4L2luZGV4LmpzIiwibWFwcGluZ3MiOiI7O0FBQTBDO0FBQzFDO0FBQ0EsNkNBQTZDLG9EQUFTO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250Ly4vc2NyaXB0cy9pbmRleC9pbmRleC5qcz85ZDIxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldE1vdmllcyB9IGZyb20gXCIuL2dldE1vdmllcy5qc1wiXHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJyxnZXRNb3ZpZXMpXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./scripts/index/index.js\n");

/***/ }),

/***/ "./scripts/index/moviesToHTML.js":
/*!***************************************!*\
  !*** ./scripts/index/moviesToHTML.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   moviesToHTML: () => (/* binding */ moviesToHTML)\n/* harmony export */ });\n//movieToHtml.js\r\n\r\nfunction moviesToHTML(movies){\r\n        let  movieHTML = document.createElement(\"section\");\r\n        movieHTML.classList.add(\"card\", \"cardSize\", \"shadow-lg\", \"p-1\", \"mx-2\", \"rounded\", \"bg-opaco-90\", \"my-4\", \"position-relative\");\r\n        let generos = movies.genre.join(\" \");\r\n        movieHTML.innerHTML =      //Agrego template\r\n        `\r\n        <h5 class=\"card-title text-center\">\r\n        <a class=\"noSubrayado text-monospace\" href=\"${movies.poster}\">${movies.title}</a>\r\n        </h5>\r\n        <div>\r\n        <img class=\"card-img-top\" src=\"${movies.poster}\" alt=\"El poster de ${movies.title}\"/>\r\n        </div>\r\n         <ul class=\"card-body list-group p-1 m-1\">\r\n          <li class=\"list-group-item\">Calificación: <strong>${movies.rate}</strong></li>\r\n          <li class=\"list-group-item\">Géneros: <strong>${generos}</strong></li>\r\n          <li class=\"list-group-item\">Duración: <strong>${movies.duration}</strong></li>\r\n         </ul>\r\n          `;\r\n          return movieHTML;\r\n    };//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zY3JpcHRzL2luZGV4L21vdmllc1RvSFRNTC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNELGNBQWMsSUFBSSxhQUFhO0FBQ3JGO0FBQ0E7QUFDQSx5Q0FBeUMsY0FBYyxzQkFBc0IsYUFBYTtBQUMxRjtBQUNBO0FBQ0EsOERBQThELFlBQVk7QUFDMUUseURBQXlELFFBQVE7QUFDakUsMERBQTBELGdCQUFnQjtBQUMxRTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250Ly4vc2NyaXB0cy9pbmRleC9tb3ZpZXNUb0hUTUwuanM/MGY2MSJdLCJzb3VyY2VzQ29udGVudCI6WyIvL21vdmllVG9IdG1sLmpzXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbW92aWVzVG9IVE1MKG1vdmllcyl7XHJcbiAgICAgICAgbGV0ICBtb3ZpZUhUTUwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcclxuICAgICAgICBtb3ZpZUhUTUwuY2xhc3NMaXN0LmFkZChcImNhcmRcIiwgXCJjYXJkU2l6ZVwiLCBcInNoYWRvdy1sZ1wiLCBcInAtMVwiLCBcIm14LTJcIiwgXCJyb3VuZGVkXCIsIFwiYmctb3BhY28tOTBcIiwgXCJteS00XCIsIFwicG9zaXRpb24tcmVsYXRpdmVcIik7XHJcbiAgICAgICAgbGV0IGdlbmVyb3MgPSBtb3ZpZXMuZ2VucmUuam9pbihcIiBcIik7XHJcbiAgICAgICAgbW92aWVIVE1MLmlubmVySFRNTCA9ICAgICAgLy9BZ3JlZ28gdGVtcGxhdGVcclxuICAgICAgICBgXHJcbiAgICAgICAgPGg1IGNsYXNzPVwiY2FyZC10aXRsZSB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgIDxhIGNsYXNzPVwibm9TdWJyYXlhZG8gdGV4dC1tb25vc3BhY2VcIiBocmVmPVwiJHttb3ZpZXMucG9zdGVyfVwiPiR7bW92aWVzLnRpdGxlfTwvYT5cclxuICAgICAgICA8L2g1PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgPGltZyBjbGFzcz1cImNhcmQtaW1nLXRvcFwiIHNyYz1cIiR7bW92aWVzLnBvc3Rlcn1cIiBhbHQ9XCJFbCBwb3N0ZXIgZGUgJHttb3ZpZXMudGl0bGV9XCIvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgICA8dWwgY2xhc3M9XCJjYXJkLWJvZHkgbGlzdC1ncm91cCBwLTEgbS0xXCI+XHJcbiAgICAgICAgICA8bGkgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW1cIj5DYWxpZmljYWNpw7NuOiA8c3Ryb25nPiR7bW92aWVzLnJhdGV9PC9zdHJvbmc+PC9saT5cclxuICAgICAgICAgIDxsaSBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbVwiPkfDqW5lcm9zOiA8c3Ryb25nPiR7Z2VuZXJvc308L3N0cm9uZz48L2xpPlxyXG4gICAgICAgICAgPGxpIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtXCI+RHVyYWNpw7NuOiA8c3Ryb25nPiR7bW92aWVzLmR1cmF0aW9ufTwvc3Ryb25nPjwvbGk+XHJcbiAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICBgO1xyXG4gICAgICAgICAgcmV0dXJuIG1vdmllSFRNTDtcclxuICAgIH07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./scripts/index/moviesToHTML.js\n");

/***/ }),

/***/ "./scripts/searchPage/renderCards.js":
/*!*******************************************!*\
  !*** ./scripts/searchPage/renderCards.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderCards: () => (/* binding */ renderCards)\n/* harmony export */ });\n// renderCards.js\r\nfunction renderCards(movies,movieCardToHTML) {\r\n    const cardsContainer = document.getElementById(\"cardsContainer\");\r\n    cardsContainer.innerHTML = \"\"; // Limpiar contenedor existente\r\n    movies.forEach(movie => {\r\n      const movieCard = movieCardToHTML(movie);\r\n      cardsContainer.appendChild(movieCard);\r\n    });\r\n  }//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zY3JpcHRzL3NlYXJjaFBhZ2UvcmVuZGVyQ2FyZHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ087QUFDUDtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udC8uL3NjcmlwdHMvc2VhcmNoUGFnZS9yZW5kZXJDYXJkcy5qcz81ODQxIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbmRlckNhcmRzLmpzXHJcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJDYXJkcyhtb3ZpZXMsbW92aWVDYXJkVG9IVE1MKSB7XHJcbiAgICBjb25zdCBjYXJkc0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FyZHNDb250YWluZXJcIik7XHJcbiAgICBjYXJkc0NvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiOyAvLyBMaW1waWFyIGNvbnRlbmVkb3IgZXhpc3RlbnRlXHJcbiAgICBtb3ZpZXMuZm9yRWFjaChtb3ZpZSA9PiB7XHJcbiAgICAgIGNvbnN0IG1vdmllQ2FyZCA9IG1vdmllQ2FyZFRvSFRNTChtb3ZpZSk7XHJcbiAgICAgIGNhcmRzQ29udGFpbmVyLmFwcGVuZENoaWxkKG1vdmllQ2FyZCk7XHJcbiAgICB9KTtcclxuICB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./scripts/searchPage/renderCards.js\n");

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
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./scripts/index/index.js");
/******/ 	
/******/ })()
;
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("jquery"));
	else if(typeof define === 'function' && define.amd)
		define(["jquery"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("jquery")) : factory(root["jQuery"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1)], __WEBPACK_AMD_DEFINE_RESULT__ = function($) {
	  'use strict';
	  var plugin = $.circuitboard.plugin.do('tile-button-to-hide', {requires: ['tile-buttons', 'tile-shrink-when-hidden', 'tile-grow-when-maximized']}).modify('Tile.prototype');
	  plugin.append('construct', function() {
	    var $__0 = this;
	    this.addButton({
	      name: 'hide',
	      icon: __webpack_require__(2)
	    }).onValue((function() {
	      $__0.maximized = false;
	      $__0.p('fullyNotMaximized').value(true).onValue((function() {
	        $__0.hidden = !$__0.hidden;
	      }));
	    }));
	  });
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "data:image/png;base64,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"

/***/ }
/******/ ])
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA2Mzk3ZTFjNDI4NGUzNzJhYjk4NyIsIndlYnBhY2s6Ly8vLi9zcmMvcC10aWxlLWJ1dHRvbi10by1oaWRlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCJqUXVlcnlcIixcImNvbW1vbmpzMlwiOlwianF1ZXJ5XCIsXCJjb21tb25qc1wiOlwianF1ZXJ5XCIsXCJhbWRcIjpcImpxdWVyeVwifSIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9pY29ucy9yZXNpemUtbWluLXdoaXRlLnBuZyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esd0M7Ozs7Ozs7aUVDdENBO0FBQ0E7QUFDQSxpRUFBZ0Usa0ZBQWtGO0FBQ2xKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQLE1BQUs7QUFDTCxJQUFHO0FBQ0gsRUFBQzs7Ozs7OztBQ2ZELGdEOzs7Ozs7QUNBQSxrQ0FBaUMsb3BIIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwianF1ZXJ5XCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcImpxdWVyeVwiXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZmFjdG9yeShyZXF1aXJlKFwianF1ZXJ5XCIpKSA6IGZhY3Rvcnkocm9vdFtcImpRdWVyeVwiXSk7XG5cdFx0Zm9yKHZhciBpIGluIGEpICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBleHBvcnRzIDogcm9vdClbaV0gPSBhW2ldO1xuXHR9XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzFfXykge1xucmV0dXJuIFxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvblxuICoqLyIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDYzOTdlMWM0Mjg0ZTM3MmFiOTg3XG4gKiovIiwiZGVmaW5lKFsnanF1ZXJ5J10sIGZ1bmN0aW9uKCQpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuICB2YXIgcGx1Z2luID0gJC5jaXJjdWl0Ym9hcmQucGx1Z2luLmRvKCd0aWxlLWJ1dHRvbi10by1oaWRlJywge3JlcXVpcmVzOiBbJ3RpbGUtYnV0dG9ucycsICd0aWxlLXNocmluay13aGVuLWhpZGRlbicsICd0aWxlLWdyb3ctd2hlbi1tYXhpbWl6ZWQnXX0pLm1vZGlmeSgnVGlsZS5wcm90b3R5cGUnKTtcbiAgcGx1Z2luLmFwcGVuZCgnY29uc3RydWN0JywgZnVuY3Rpb24oKSB7XG4gICAgdmFyICRfXzAgPSB0aGlzO1xuICAgIHRoaXMuYWRkQnV0dG9uKHtcbiAgICAgIG5hbWU6ICdoaWRlJyxcbiAgICAgIGljb246IHJlcXVpcmUoJ3VybCEuL3V0aWwvaWNvbnMvcmVzaXplLW1pbi13aGl0ZS5wbmcnKVxuICAgIH0pLm9uVmFsdWUoKGZ1bmN0aW9uKCkge1xuICAgICAgJF9fMC5tYXhpbWl6ZWQgPSBmYWxzZTtcbiAgICAgICRfXzAucCgnZnVsbHlOb3RNYXhpbWl6ZWQnKS52YWx1ZSh0cnVlKS5vblZhbHVlKChmdW5jdGlvbigpIHtcbiAgICAgICAgJF9fMC5oaWRkZW4gPSAhJF9fMC5oaWRkZW47XG4gICAgICB9KSk7XG4gICAgfSkpO1xuICB9KTtcbn0pO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9wLXRpbGUtYnV0dG9uLXRvLWhpZGUuanNcbiAqKiBtb2R1bGUgaWQgPSAwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMV9fO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwge1wicm9vdFwiOlwialF1ZXJ5XCIsXCJjb21tb25qczJcIjpcImpxdWVyeVwiLFwiY29tbW9uanNcIjpcImpxdWVyeVwiLFwiYW1kXCI6XCJqcXVlcnlcIn1cbiAqKiBtb2R1bGUgaWQgPSAxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFJQUFBQUNBQ0FZQUFBRERQbUhMQUFBS3JrbEVRVlI0MnUyZGE4d1Z4UjNHZjNPNDMwVkVRVVZKa0VyaURWbzBhR2hLSVVpOEVOUlFCSVVVWW9zWURXbjRBdHBJL0dBVDBJUTBwUFVEbGtDTG90UUdLRVpLUVV1QmlDR0NoaVlhTmEydGFVaE5yVGFDOEliTHk5TVBPOGVla1BleWw1bWRQY2Y1Zlg3ZjNmODh6N096czdOblppRVNpVVFpa1Vpa0lKSXVrYlE0S3VGTjM4V1NMcWxxY1VNa0hWTENZOUV1NS9vK1pyVTlKR2xJbGMyWHBIWkppNkp0enZSZFpEVlY1VUxRZ2ZtTklWZ1E3U3VzNzRJTHpLOU9DTG93djg1WlNmZEZHM1ByZTUvVnNEUENoY0FPK0k2cWU4NUptbE1SUWFlNCtKdVNhcDFqdGV1T282VVBERk5jK1JmU0ptbDZZRUZIU2pxVzR1K09TUm9adU5icFZyTzBsTmNUU0xvb28vbDF2cEkwT1pDZ2ZlczFwL2pidXFCOUE5VTYyV3FWbFVPU0xxcXErWFZPU0xvMWdLanI2d1drRElBa3JROVE1NjFXbzd6NEM0RUQ4K3Q4SVdsQ2lhSXVheng1aGdCSTBySVM2NXhndFNtSyt4QTROTC9PZnlUZFdJS28weTRjUldjTXdGbEowMHFvODBhcmlTdmNoY0NEK1hYK0plbGFqNktPbHZUWmhTZk5HQURaWTR6MldPZTFWZ3ZYRkErQlIvUHJISk4walFkUkIwcjZTMGNuekJFQTJXTU45RkRuTlZZRFgrUVBRUW5tMS9tN3BLc2NpbW9rYmVuc1pEa0RJSHRNNDdET3EyemJmWk05QkNXYVgrZHZrcTUwSk96S3JrNVVJQUNTdE5KUmpWZmFOcGRGK2hBRU1ML08rNUl1TFNqc3JFN216VjBGb0YzU3JJSTFYbXJiV2picFFpRHBSWVhqUTBramNncDdVNW9KbElJQnFFOW8zWlN6eGhHMmphRjRNZTJVNlhzQml6eWNkVnBUMGxCSkg2VTV1SU1BeUo1cmFJN3A4OE1CZFgwdjlSUzNmZEZ6SkdDeGh5UU5UbGxyVGRKcmFRL3NLQUN5NTZ5bHJIRndvTnRxblNPWlh4aEp1bGpTMndHTC9yT2svaW5xZkRiTFFSMEdRSktlVFhHOC9yWXRvWGhiMHNWNUJ5eURKTzBQV1B3Ymt2cDFVZDhEV1Evb09BQ1M5RUFYeCtwbjJ4Q0svWklHdVpoVTJSdXdFYTlLNnQxQlhlTWxuYXhBQUU1S0d0L0JjWHJiMmtPeDE5bmtsVTN5em9DTjJTS3BSME05d3lSOW5PZEFIZ0lnVzh1d2htUDA2R295cWdSMmR0Vno1ZzFCSDBrN0FqWnFzeFcyVjVGN3FxY0ExTWNzdld5Tm13UHF0RU5TbjdTK21vd2g2QUU4RDRUNnhlOFdvQTFZbVBjQXhoalRYUUFLMUxjUjZBZmNIMGlmRGNDUGpUSHRYZ0pnQmVvSi9CcDRnQ2JFY3dCQ3NobjRvVEhtWEpaL3F1VVE4Qnl3QUZoSHBDcXNBeFprTlQ5WEFHd0l6Z05MZ09laTlzRjVEbGhpUGFHVUFOZ1F5Qmp6S1BCTTlDQVl6eGhqSGpYRzVMNXQxWXBXWUl4WkRxeU9YcFRPYXF0OUlXb3VLakhHckFCV1JrOUtZNlhWdkxoM2p1Y0tmZ0tzY1gzYytCVHcvL0tBWmNhWW56dlR3M21GeWRMd3RWVU5RUk1IUU1CU1k4d3ZuT3JocGRKa2FmanpRSThZQUNlMGswendiSEN1aDdlNEprdkROMVF0QkUwWWdIWmdrVEZta3hjOXZQWlp5ZEx3bDREZU1RQzVPQVBNTThaczlYV0NtbWV4dHdKemdOTng0SjZaMDhBY24rWjc3d0VhcnFycHdIYWdmK3dCVW5FS3VNY1lzOGYzaVdvbGliNEhtQW1jakJkMnQ1d0VacFpoZm1rOVFNUFZkU3Z3QjJCSTdBRTY1RXZnRG1QTVcyV2RzRlp5QTQ4Q0IrTkYzaWtIclVhMFhBQWtYUTY4QWR3UmZlNlVPNEEzckZhdEV3RGI5UjhHSmtXUHUyVVNjRmdsN2FSU0s4SDgrZmJLSHhtOVRjMUkyeFBNYjlvQVNPb3BhUld3aWVSM2NwRnM5QU0yU1ZwbGY0YlhQRThCOWlmU3Z3V21WazNWSm4wWDhDZVNTYUhQS3g4QXUzSjJPekM2aXBkVkU3OE4vQWZKNUpEVHA0U2FZL1B2dDQ4eW80bTRaalJ3MEdwY3JRRFl4UkNyU0Y3ODlJOWVlYU0vOEpJZEZ6aDV5Mm9jbUQ4WWVJRmtxcmZ5dE5DNmdGZUIrY2FZNDhFQ1lMZDUydzZNYTVaTHFNVVdobnhneHdVZmxuNExrSFFYY0tpWnpHOUJ4Z0dIckJmbEJNQnV3N1ljMkVIQWx6cVJyeGtDN0pDMFBNODJkbGtYaHc0a1dSZll0QitCYU9HMWdRQmJTZFlIZnVVOEFIWkh6KzNBZGMxOHViUjRBQURlcytPQ3Z6cTdCZGk5OGQ1cGR2Ty9JVndIdkZOMFA4TklKQktKUkNLUlNDUVNpVVFpclVlcW1VQkppNEhGTGRGZ1l5WjIwOWJETGVMdE9tUE1PaWNCc01Jc0IzNUdCZGY4Wnd4QXEwOEZ0d00vTmNhc2R0WUROSWh6Ty9BeU1EUUdvSkw4RjVocmpObnQ5Qlp3Z1VEamdOOEQzNG9CcUJRZkFiT01NUjlrK2FjOE80VitBTndDN0l4RHFNcXdFN2dscS9tNUFtQkQ4Q1hKYndCWGsyeGVGQW1EckFjenJTZCtuZ0s2NlRKbmsreVNQU0RlQWtybEpMRFFHUE03NzQrQktVTHdIV0FiTUNvR29CVCtDZHhyakRsUzlFQ3VkZ285QWt3RURzUmUyVHNIZ0lrdXpIY1dBQnVDZndQVGlOdkkrMlFkTU0xcTdjWTNMeU1UNlVmQUw2blE5bkJOZmdzNEF6eHFqUG1WY3oyOERVK2w3d0d2QU1OakFBcnhHZkFEWTh3K0wzcDRmVWFScnJhRHd3a3hBTGw0MXc3MlB2RjFBdDhiUlg0Q1RDYVpQbzVrNDJWZ3NrL3p2UWZBaHVDVU1XWWVzSUxrUlVXa2E5cUJGY2FZZWNhWVU5NzlLYk5sa21hU3JDUWVIRXJkaXQ4Q2pwT3MrSDIxckJPV3ZVL2dMbUIvdk1nN1piL1ZpSllMZ0tSZUpOKzJ1enY2M0NsM0E1dXRWcTBUQVB2eDV5M0E3T2h4dDh3R3RuVDB3ZXltSEFQWWp4aHZBMmJFeDhCTS9ORStBclkxYlE4Z2FRREpQZ0l6NG9XZG1Sa2s2LzRITkdVUElHa0l5UThWYnF1U3FrMDRFM2dRdURQdisvNGdQWUNraSt4bzlyWjRJUmZtTm1DWDFiVDZBWkEwSE5oTDNCamFKWk9BdlZiYjZnWkEwbVVrRzBPUGo1NDVaenpKQnRLWFZUSUFra2FSL0ZqaGh1aVZOMjRBRGxpdHF4TUErOVp2THpBMmV1U2RzZloyY0hVbEFpQnByTDN5eDBSdlNtT003UW5HQmcyQVhTU3lseWI0TVdnTE1zcjJCT09DQkVEU2VKS1hGMWRFTDRKeEJiRGZlbEZlQUNSOUczaWRpdjNjNnh2S2NPQjE2NG4vQUVqNlByQVBHQmFnc1Y4QW4xYllqRTl0aldVekROaG52Y2xFMXRYQjN3VmVBd1lGYU9RcGtzK3ExWURkUUs1WHBoNm5nczhDdHdQblNUNk9HZUs3Q1NlQXU0d3g3dGRuU0pvaTZZVENjS294M1pJZXlYdWdGTzNNeXlPTnZhU3RPUVFuSkUxeGJmNmRrdG9DTmVpMHBEczdxR2xEaFFLd29SUE5UZ2ZTckswanpmS2FQMXZTbVVBTk9XTi9SOWhSWFgwa3ZWbUJBTHdwcVU4bng1b1pXTHZaUmMyZksrbHNvQWFjNis0RFNaSXVsM1FzWUFDT2RmZVpWMG4zMjdhRTRLeWt1WG5OZjBoU2U2REMyeVU5bUxMT203UGNuaHdHb0UzU3pTbHJmREN3bGc5bE5mL2hnQVdmdDd1U1phbDNVWUFBTE1wWTQyTGJ0bEFoZURodG9ZOHJITzJTRnVic3NaNHVNUUJQNTZ4eFljQUxTNUllVDFQa3ZZRUdMdWNsTFNrd1hxbEoybEZDQUhaSUtqS0Z2aVJRVDNCRzByMXBpNXdmWU9EeWhJTW5sbUdTUHZZWWdJL3RkNUdMMXZsRWdBSDEvS3hGbGhtQ3B4ek9XVnd2NmJpSEFCeVhkTDNET3ArcXJQa2xoMkNOaDFuTDJaMTFzemtEY0w3d00zWEg1MXBUV2ZOTENzRmFYNVBpa3A1MEdJQW5QZGE1dHJMbWV3N0IrandmT3N4UXM1RzAxVUVBdHBaUTUvckttdThwQkJ1TGpLUXoxRHhBMHRFQ0FUanFlMlZPd3hQTXhzcWE3emdFcjBqcVdkYjdVVWxqSkgyZUl3Q2ZTeHBUWXAwOXJUYlZOTjlSQ0xhVmFYNUR6VlByN3pSU0J1Q3NwS2tCNnV4cE5hcW0rUVZEc0t1enQyWWwxYncwUXdDV0JxeXpqOVdxbXVibkRNRWVTWDBKaktUZnVQaWJFdXJzYXpXcnB2a05oZDZUWXRwNGR4WE10L1gyY3ZFM0pZWmdkNHJwM1h0Q0Y5cFZUL0NXcEVGRThtbzd5R3BZclNzL1pRamVsVFEwMmxoWTI2Rld5MnFhMzBrSWpycDRhUkw1V3R0aERmTVoxVFAvZ2hDOEwybEV0TTI1dGlPc3R2T3JYbWd0MmhXMWpVUWlrVWpsK1IralFzdmtsOVc2UUFBQUFBQkpSVTVFcmtKZ2dnPT1cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3VybC1sb2FkZXIhLi9zcmMvdXRpbC9pY29ucy9yZXNpemUtbWluLXdoaXRlLnBuZ1xuICoqIG1vZHVsZSBpZCA9IDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyJdLCJzb3VyY2VSb290IjoiIiwiZmlsZSI6InAtdGlsZS1idXR0b24tdG8taGlkZS5qcyJ9
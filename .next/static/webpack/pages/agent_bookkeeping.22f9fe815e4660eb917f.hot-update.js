"use strict";
self["webpackHotUpdate_N_E"]("pages/agent_bookkeeping",{

/***/ "./pages/components/agent_bookkeeping/footer.js":
/*!******************************************************!*\
  !*** ./pages/components/agent_bookkeeping/footer.js ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Footer; }
/* harmony export */ });
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/index.mjs");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "D:\\GitHub\\agent-bookkeeping\\pages\\components\\agent_bookkeeping\\footer.js";



function Footer() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("footer", {
      "class": "text-gray-600 body-font",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
        initial: {
          opacity: 0,
          y: 200
        },
        animate: {
          opacity: 1,
          y: 0
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          "class": "container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            "class": "ml-3 text-gray-50 text-xl",
            children: "\u624B\u673A\uFF1A 18237715216"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 13,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            "class": "text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4",
            children: ["\xA9 2020 ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              href: "https://twitter.com/knyttneve",
              "class": "text-gray-600 ml-1",
              rel: "noopener noreferrer",
              target: "_blank",
              children: "@hunk"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 14,
              columnNumber: 127
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            "class": "inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start",
            children: ["\u300CPowered by", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              href: "https://webify.cloudbase.net/",
              children: " CloudBase Webify"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 18,
              columnNumber: 17
            }, this), "\u300D"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }, this)
  }, void 0, false);
}
_c = Footer;

var _c;

$RefreshReg$(_c, "Footer");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWdlbnRfYm9va2tlZXBpbmcuMjJmOWZlODE1ZTQ2NjBlYjkxN2YuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7O0FBQ2UsU0FBU0MsTUFBVCxHQUFrQjtBQUM3QixzQkFDSTtBQUFBLDJCQUNBO0FBQVEsZUFBTSx5QkFBZDtBQUFBLDZCQUNJLDhEQUFDLHFEQUFEO0FBQ0UsZUFBTyxFQUFFO0FBQUVDLFVBQUFBLE9BQU8sRUFBRSxDQUFYO0FBQWNDLFVBQUFBLENBQUMsRUFBRTtBQUFqQixTQURYO0FBRUUsZUFBTyxFQUFFO0FBQUVELFVBQUFBLE9BQU8sRUFBRSxDQUFYO0FBQWNDLFVBQUFBLENBQUMsRUFBRTtBQUFqQixTQUZYO0FBQUEsK0JBSUE7QUFBSyxtQkFBTSxpRUFBWDtBQUFBLGtDQUVJO0FBQU0scUJBQU0sMkJBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkosZUFHSTtBQUFHLHFCQUFNLDZGQUFUO0FBQUEsa0RBQThHO0FBQUcsa0JBQUksRUFBQywrQkFBUjtBQUF3Qyx1QkFBTSxvQkFBOUM7QUFBbUUsaUJBQUcsRUFBQyxxQkFBdkU7QUFBNkYsb0JBQU0sRUFBQyxRQUFwRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBOUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUhKLGVBTUk7QUFBTSxxQkFBTSxxRUFBWjtBQUFBLHdEQUNBO0FBQ0ksa0JBQUksRUFBQywrQkFEVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQSxtQkFESjtBQXVCSDtLQXhCdUJGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NvbXBvbmVudHMvYWdlbnRfYm9va2tlZXBpbmcvZm9vdGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvb3RlcigpIHtcclxuICAgIHJldHVybiAoICBcclxuICAgICAgICA8PlxyXG4gICAgICAgIDxmb290ZXIgY2xhc3M9XCJ0ZXh0LWdyYXktNjAwIGJvZHktZm9udFwiPlxyXG4gICAgICAgICAgICA8bW90aW9uLmRpdlxyXG4gICAgICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeTogMjAwIH19XHJcbiAgICAgICAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxLCB5OiAwIH19ICBcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyIG14LWF1dG8gcHktNCBweC01IGZsZXggZmxleC13cmFwIGZsZXgtY29sIHNtOmZsZXgtcm93XCI+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWwtMyB0ZXh0LWdyYXktNTAgdGV4dC14bFwiPuaJi+acuu+8miAxODIzNzcxNTIxNjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGV4dC1zbSB0ZXh0LWdyYXktNTAwIHNtOm1sLTQgc206cGwtNCBzbTpib3JkZXItbC0yIHNtOmJvcmRlci1ncmF5LTIwMCBzbTpweS0yIHNtOm10LTAgbXQtNFwiPsKpIDIwMjAgPGEgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20va255dHRuZXZlXCIgY2xhc3M9XCJ0ZXh0LWdyYXktNjAwIG1sLTFcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCI+QGh1bms8L2E+XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5saW5lLWZsZXggc206bWwtYXV0byBzbTptdC0wIG10LTQganVzdGlmeS1jZW50ZXIgc206anVzdGlmeS1zdGFydFwiPuOAjFBvd2VyZWQgYnkgIFxyXG4gICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly93ZWJpZnkuY2xvdWRiYXNlLm5ldC9cIlxyXG4gICAgICAgICAgICAgICAgPiBDbG91ZEJhc2UgV2ViaWZ5PC9hPuOAjVxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgICAgIDwvZm9vdGVyPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJtb3Rpb24iLCJGb290ZXIiLCJvcGFjaXR5IiwieSJdLCJzb3VyY2VSb290IjoiIn0=
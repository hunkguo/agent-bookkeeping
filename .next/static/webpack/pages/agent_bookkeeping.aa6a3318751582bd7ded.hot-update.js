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
      "class": "text-gray-400 body-font bg-gray-900",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
        initial: {
          opacity: 0,
          y: 50
        },
        animate: {
          opacity: 1,
          y: 0
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          "class": "container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            "class": "text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4",
            children: ["\xA9 2020 ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              href: "https://twitter.com/knyttneve",
              "class": "text-gray-600 ml-1",
              rel: "noopener noreferrer",
              target: "_blank",
              children: "@hunk"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 12,
              columnNumber: 127
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 12,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            "class": "inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start",
            children: ["\u300CPowered by", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              href: "https://webify.cloudbase.net/",
              children: " CloudBase Webify"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 16,
              columnNumber: 17
            }, this), "\u300D"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 15,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWdlbnRfYm9va2tlZXBpbmcuYWE2YTMzMTg3NTE1ODJiZDdkZWQuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7O0FBQ2UsU0FBU0MsTUFBVCxHQUFrQjtBQUM3QixzQkFDSTtBQUFBLDJCQUNBO0FBQVEsZUFBTSxxQ0FBZDtBQUFBLDZCQUNJLDhEQUFDLHFEQUFEO0FBQ0UsZUFBTyxFQUFFO0FBQUVDLFVBQUFBLE9BQU8sRUFBRSxDQUFYO0FBQWNDLFVBQUFBLENBQUMsRUFBRTtBQUFqQixTQURYO0FBRUUsZUFBTyxFQUFFO0FBQUVELFVBQUFBLE9BQU8sRUFBRSxDQUFYO0FBQWNDLFVBQUFBLENBQUMsRUFBRTtBQUFqQixTQUZYO0FBQUEsK0JBSUE7QUFBSyxtQkFBTSxpRUFBWDtBQUFBLGtDQUNJO0FBQUcscUJBQU0sNkZBQVQ7QUFBQSxrREFBOEc7QUFBRyxrQkFBSSxFQUFDLCtCQUFSO0FBQXdDLHVCQUFNLG9CQUE5QztBQUFtRSxpQkFBRyxFQUFDLHFCQUF2RTtBQUE2RixvQkFBTSxFQUFDLFFBQXBHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUE5RztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosZUFJSTtBQUFNLHFCQUFNLHFFQUFaO0FBQUEsd0RBQ0E7QUFDSSxrQkFBSSxFQUFDLCtCQURUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBLG1CQURKO0FBcUJIO0tBdEJ1QkYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9hZ2VudF9ib29ra2VlcGluZy9mb290ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCJcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9vdGVyKCkge1xyXG4gICAgcmV0dXJuICggIFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgPGZvb3RlciBjbGFzcz1cInRleHQtZ3JheS00MDAgYm9keS1mb250IGJnLWdyYXktOTAwXCI+XHJcbiAgICAgICAgICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCB5OiA1MCB9fVxyXG4gICAgICAgICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSwgeTogMCB9fSAgXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciBteC1hdXRvIHB5LTQgcHgtNSBmbGV4IGZsZXgtd3JhcCBmbGV4LWNvbCBzbTpmbGV4LXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LXNtIHRleHQtZ3JheS01MDAgc206bWwtNCBzbTpwbC00IHNtOmJvcmRlci1sLTIgc206Ym9yZGVyLWdyYXktMjAwIHNtOnB5LTIgc206bXQtMCBtdC00XCI+wqkgMjAyMCA8YSBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9rbnl0dG5ldmVcIiBjbGFzcz1cInRleHQtZ3JheS02MDAgbWwtMVwiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIj5AaHVuazwvYT5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbmxpbmUtZmxleCBzbTptbC1hdXRvIHNtOm10LTAgbXQtNCBqdXN0aWZ5LWNlbnRlciBzbTpqdXN0aWZ5LXN0YXJ0XCI+44CMUG93ZXJlZCBieSAgXHJcbiAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3dlYmlmeS5jbG91ZGJhc2UubmV0L1wiXHJcbiAgICAgICAgICAgICAgICA+IENsb3VkQmFzZSBXZWJpZnk8L2E+44CNXHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICAgICAgPC9mb290ZXI+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuIl0sIm5hbWVzIjpbIm1vdGlvbiIsIkZvb3RlciIsIm9wYWNpdHkiLCJ5Il0sInNvdXJjZVJvb3QiOiIifQ==
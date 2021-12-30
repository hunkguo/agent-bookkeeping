"use strict";
self["webpackHotUpdate_N_E"]("pages/agent_bookkeeping",{

/***/ "./pages/components/agent_bookkeeping/hearder.js":
/*!*******************************************************!*\
  !*** ./pages/components/agent_bookkeeping/hearder.js ***!
  \*******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Header; }
/* harmony export */ });
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/index.mjs");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "D:\\GitHub\\agent-bookkeeping\\pages\\components\\agent_bookkeeping\\hearder.js";


function Header() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("header", {
    "class": "text-gray-600 body-font",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
      initial: {
        opacity: 0,
        y: -200
      },
      animate: {
        opacity: 1,
        y: 0
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        "class": "container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          "class": "flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            stroke: "currentColor",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2",
            "class": "w-10 h-10 text-white p-2 bg-indigo-500 rounded-full",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
              d: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 15,
              columnNumber: 21
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            "class": "ml-3 text-xl",
            children: "\u5F20\u6167\u7684\u804C\u573A"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, this);
}
_c = Header;

var _c;

$RefreshReg$(_c, "Header");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWdlbnRfYm9va2tlZXBpbmcuZTg3Y2IwYzhlZmZmYTRjY2Q2MWQuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7QUFFZSxTQUFTQyxNQUFULEdBQWtCO0FBQzdCLHNCQUNJO0FBQVEsYUFBTSx5QkFBZDtBQUFBLDJCQUVJLDhEQUFDLHFEQUFEO0FBQ0UsYUFBTyxFQUFFO0FBQUVDLFFBQUFBLE9BQU8sRUFBRSxDQUFYO0FBQWNDLFFBQUFBLENBQUMsRUFBRSxDQUFDO0FBQWxCLE9BRFg7QUFFRSxhQUFPLEVBQUU7QUFBRUQsUUFBQUEsT0FBTyxFQUFFLENBQVg7QUFBY0MsUUFBQUEsQ0FBQyxFQUFFO0FBQWpCLE9BRlg7QUFBQSw2QkFJQTtBQUFLLGlCQUFNLHdFQUFYO0FBQUEsK0JBQ0k7QUFBRyxtQkFBTSxxRUFBVDtBQUFBLGtDQUNBO0FBQUssaUJBQUssRUFBQyw0QkFBWDtBQUF3QyxnQkFBSSxFQUFDLE1BQTdDO0FBQW9ELGtCQUFNLEVBQUMsY0FBM0Q7QUFBMEUsOEJBQWUsT0FBekY7QUFBaUcsK0JBQWdCLE9BQWpIO0FBQXlILDRCQUFhLEdBQXRJO0FBQTBJLHFCQUFNLHFEQUFoSjtBQUFzTSxtQkFBTyxFQUFDLFdBQTlNO0FBQUEsbUNBQ0k7QUFBTSxlQUFDLEVBQUM7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFEQSxlQUlBO0FBQU0scUJBQU0sY0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQStCSDtLQWhDdUJGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NvbXBvbmVudHMvYWdlbnRfYm9va2tlZXBpbmcvaGVhcmRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8aGVhZGVyIGNsYXNzPVwidGV4dC1ncmF5LTYwMCBib2R5LWZvbnRcIj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCB5OiAtMjAwIH19XHJcbiAgICAgICAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxLCB5OiAwIH19ICBcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyIG14LWF1dG8gZmxleCBmbGV4LXdyYXAgcC01IGZsZXgtY29sIG1kOmZsZXgtcm93IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJmbGV4IHRpdGxlLWZvbnQgZm9udC1tZWRpdW0gaXRlbXMtY2VudGVyIHRleHQtZ3JheS05MDAgbWItNCBtZDptYi0wXCI+XHJcbiAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZS13aWR0aD1cIjJcIiBjbGFzcz1cInctMTAgaC0xMCB0ZXh0LXdoaXRlIHAtMiBiZy1pbmRpZ28tNTAwIHJvdW5kZWQtZnVsbFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTEyIDJMMiA3bDEwIDUgMTAtNS0xMC01ek0yIDE3bDEwIDUgMTAtNU0yIDEybDEwIDUgMTAtNVwiPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtbC0zIHRleHQteGxcIj7lvKDmhafnmoTogYzlnLo8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICB7LyogPG5hdiBjbGFzcz1cIm1kOm1yLWF1dG8gbWQ6bWwtNCBtZDpweS0xIG1kOnBsLTQgbWQ6Ym9yZGVyLWwgbWQ6Ym9yZGVyLWdyYXktNDAwXHRmbGV4IGZsZXgtd3JhcCBpdGVtcy1jZW50ZXIgdGV4dC1iYXNlIGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzcz1cIm1yLTUgaG92ZXI6dGV4dC1ncmF5LTkwMFwiPuacjeWKoTwvYT5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwibXItNSBob3Zlcjp0ZXh0LWdyYXktOTAwXCI+5Zui6ZifPC9hPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJtci01IGhvdmVyOnRleHQtZ3JheS05MDBcIj7lkIjkvZzkvJnkvLQ8L2E+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzcz1cIm1yLTUgaG92ZXI6dGV4dC1ncmF5LTkwMFwiPuiBlOezu+aIkeS7rDwvYT5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwibXItNSBob3Zlcjp0ZXh0LWdyYXktOTAwXCIgaHJlZj0nL3NvZnR3YXJlX2RldmVsb3BtZW50JyA+6L2v5Lu25byA5Y+RPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGJnLWdyYXktMTAwIGJvcmRlci0wIHB5LTEgcHgtMyBmb2N1czpvdXRsaW5lLW5vbmUgaG92ZXI6YmctZ3JheS0yMDAgcm91bmRlZCB0ZXh0LWJhc2UgbXQtNCBtZDptdC0wXCIgY29udHJvbC1pZD1cIkNvbnRyb2xJRC04M1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9Jy8nPkhvbWU8L2E+XHJcbiAgICAgICAgICAgICAgICA8c3ZnIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgc3Ryb2tlLXdpZHRoPVwiMlwiIGNsYXNzPVwidy00IGgtNCBtbC0xXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNNSAxMmgxNE0xMiA1bDcgNy03IDdcIj48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPiAqL31cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgICAgICA8L2hlYWRlcj5cclxuICAgIClcclxufSJdLCJuYW1lcyI6WyJtb3Rpb24iLCJIZWFkZXIiLCJvcGFjaXR5IiwieSJdLCJzb3VyY2VSb290IjoiIn0=
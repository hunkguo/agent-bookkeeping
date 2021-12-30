"use strict";
(() => {
var exports = {};
exports.id = "pages/agent_bookkeeping";
exports.ids = ["pages/agent_bookkeeping"];
exports.modules = {

/***/ "./pages/agent_bookkeeping.js":
/*!************************************!*\
  !*** ./pages/agent_bookkeeping.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AgentBookkeeping)
/* harmony export */ });
/* harmony import */ var _components_agent_bookkeeping_hearder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/agent_bookkeeping/hearder */ "./pages/components/agent_bookkeeping/hearder.js");
/* harmony import */ var _components_agent_bookkeeping_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/agent_bookkeeping/footer */ "./pages/components/agent_bookkeeping/footer.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "D:\\GitHub\\agent-bookkeeping\\pages\\agent_bookkeeping.js";






function AgentBookkeeping() {
  const variants = {
    container: {
      animate: {
        transition: {
          staggerChildren: 0.5
        }
      }
    },
    div: {
      initial: {
        opacity: 0,
        x: -200
      },
      animate: {
        opacity: 1,
        x: 0
      }
    }
  };
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_agent_bookkeeping_hearder__WEBPACK_IMPORTED_MODULE_0__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("section", {
      class: "text-gray-400 body-font bg-gray-900",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        class: "container px-5 py-24 mx-auto",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
          class: "flex flex-col text-center w-full mb-20",
          initial: {
            opacity: 0,
            y: 200
          },
          animate: {
            opacity: 1,
            y: 0
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h2", {
            class: "text-blue-400 tracking-widest font-medium title-font mb-1",
            children: "\u5F20 \u6167"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h1", {
            class: "sm:text-3xl text-2xl font-medium title-font mb-4 text-white",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
              class: "text-xs",
              children: "\u51C6      "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 89
            }, this), "\u6CE8\u518C\u4F1A\u8BA1\u5E08"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
            class: "lg:w-2/3 mx-auto leading-relaxed text-base",
            children: "If there is an opportunity for me to do it. I am ready!"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 15
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
          class: "flex flex-wrap" // initial={{ opacity: 0, x: -200 }}
          // animate={{ opacity: 1, x: 0 }}  
          ,
          initial: "initial",
          animate: "animate",
          variants: variants.container,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
            class: "xl:w-1/3 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-800",
            variants: variants.div,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h2", {
              class: "text-lg sm:text-xl text-white font-medium title-font mb-2",
              children: "\u4E30\u5BCC\u7684\u5DE5\u4F5C\u7ECF\u9A8C"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 19
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
              class: "leading-relaxed text-base mb-4",
              children: "\u62E5\u6709\u516D\u5E74\u7684\u8D22\u52A1\u5DE5\u4F5C\u7ECF\u9A8C\uFF0C\u719F\u6089\u56FD\u5BB6\u4F1A\u8BA1\u5236\u5EA6\u548C\u51C6\u5219\u53CA\u76F8\u5173\u7A0E\u6CD5\u653F\u7B56\uFF0C\u80FD\u505A\u597D\u4E8B\u524D\u7684\u7A0E\u52A1\u7B56\u5212\u3001\u8D22\u52A1\u9884\u7B97\uFF0C\u5408\u7406\u5B89\u6392\u516C\u53F8\u7684\u7A0E\u8D1F\uFF0C\u534F\u8C03\u5904\u7406\u597D\u516C\u53F8\u4E0E\u94F6\u884C\u3001\u7A0E\u5C40\u3001\u5DE5\u5546\u7B49\u90E8\u95E8\u7684\u5173\u7CFB\uFF0C\u51CF\u5C11\u516C\u53F8\u7684\u8D22\u52A1\u548C\u7A0E\u52A1\u98CE\u9669\u3002"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 19
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
            class: "xl:w-1/3 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-800",
            variants: variants.div,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h2", {
              class: "text-lg sm:text-xl text-white font-medium title-font mb-2",
              children: "\u5584\u4E8E\u4ECE\u5168\u5C40\u51FA\u53D1\u8003\u8651\u95EE\u9898"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 19
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
              class: "leading-relaxed text-base mb-4",
              children: "\u80FD\u591F\u72EC\u7ACB\u5168\u9762\u5904\u7406\u516C\u53F8\u7684\u5168\u76D8\u8D26\u52A1\uFF0C\u5BF9\u4E00\u822C\u7EB3\u7A0E\u4EBA\u4F01\u4E1A\u7A0E\u52A1\u64CD\u4F5C\u719F\u6089\uFF0C\u5E76\u5BF9\u8D22\u52A1\u62A5\u8868\u6709\u826F\u597D\u7684\u5206\u6790\u80FD\u529B\u3002"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 19
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
            class: "xl:w-1/3 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-800",
            variants: variants.div,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h2", {
              class: "text-lg sm:text-xl text-white font-medium title-font mb-2",
              children: "\u5DE5\u4F5C\u6709\u601D\u60F3\u6709\u6D3B\u529B"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 19
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
              class: "leading-relaxed text-base mb-4",
              children: "\u672C\u4EBA\u6027\u683C\u5F00\u6717\u5177\u4EB2\u548C\u529B\uFF0C\u4E50\u89C2\u803F\u76F4\uFF0C\u8BDA\u5B9E\u5B88\u4FE1\uFF1B\u80FD\u5403\u82E6\u8010\u52B3\uFF0C\u5584\u4E8E\u4E0E\u4EBA\u6C9F\u901A\uFF0C\u6709\u8F83\u5F3A\u7684\u5DE5\u4F5C\u8D23\u4EFB\u5FC3\u548C\u656C\u4E1A\u7CBE\u795E\u3002"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 19
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 15
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_agent_bookkeeping_footer__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }, this)]
  }, void 0, true);
}

/***/ }),

/***/ "./pages/components/agent_bookkeeping/footer.js":
/*!******************************************************!*\
  !*** ./pages/components/agent_bookkeeping/footer.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\GitHub\\agent-bookkeeping\\pages\\components\\agent_bookkeeping\\footer.js";



function Footer() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("footer", {
      class: "text-gray-400 body-font bg-gray-900",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_0__.motion.div, {
        initial: {
          opacity: 0,
          y: 50
        },
        animate: {
          opacity: 1,
          y: 0
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          class: "container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
            class: "text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4",
            children: ["\xA9 2020 ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
              href: "https://twitter.com/knyttneve",
              class: "text-gray-600 ml-1",
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
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
            class: "inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start",
            children: ["\u300CPowered by", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
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

/***/ }),

/***/ "./pages/components/agent_bookkeeping/hearder.js":
/*!*******************************************************!*\
  !*** ./pages/components/agent_bookkeeping/hearder.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\GitHub\\agent-bookkeeping\\pages\\components\\agent_bookkeeping\\hearder.js";


function Header() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("header", {
    class: "text-gray-400 body-font bg-gray-900",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_0__.motion.div, {
      initial: {
        opacity: 0,
        y: -50
      },
      animate: {
        opacity: 1,
        y: 0
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        class: "container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
          class: "flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            stroke: "currentColor",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2",
            class: "w-10 h-10 text-white p-2 bg-indigo-500 rounded-full",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
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
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
            class: "ml-3 text-xl",
            children: "\u8001Z\u4F1A\u8BA1\u5DE5\u4F5C\u5BA4"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("nav", {
          class: "md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400\tflex flex-wrap items-center text-base justify-center",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
            class: "mr-5 hover:text-gray-900",
            children: "\u670D\u52A1"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
            class: "mr-5 hover:text-gray-900",
            children: "\u56E2\u961F"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
            class: "mr-5 hover:text-gray-900",
            children: "\u5408\u4F5C\u4F19\u4F34"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
            class: "mr-5 hover:text-gray-900",
            children: "\u8054\u7CFB\u6211\u4EEC"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
            class: "mr-5 hover:text-gray-900",
            href: "/software_development",
            children: "\u8F6F\u4EF6\u5F00\u53D1"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
          class: "inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0",
          "control-id": "ControlID-83",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
            href: "/",
            children: "Home"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", {
            fill: "none",
            stroke: "currentColor",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2",
            class: "w-4 h-4 ml-1",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
              d: "M5 12h14M12 5l7 7-7 7"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 29,
              columnNumber: 21
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
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

/***/ }),

/***/ "framer-motion":
/*!********************************!*\
  !*** external "framer-motion" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("framer-motion");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/agent_bookkeeping.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQUE7QUFBQTtBQUFBLGtCQUZBLGVBR0E7QUFBRyxpQkFBSyxFQUFDLDBCQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUhBLGVBSUE7QUFBRyxpQkFBSyxFQUFDLDBCQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUpBLGVBS0E7QUFBRyxpQkFBSyxFQUFDLDBCQUFUO0FBQW9DLGdCQUFJLEVBQUMsdUJBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUxBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFQSixlQWNJO0FBQVEsZUFBSyxFQUFDLDZIQUFkO0FBQTRJLHdCQUFXLGNBQXZKO0FBQUEsa0NBQ0k7QUFBRyxnQkFBSSxFQUFDLEdBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosZUFFQTtBQUFLLGdCQUFJLEVBQUMsTUFBVjtBQUFpQixrQkFBTSxFQUFDLGNBQXhCO0FBQXVDLDhCQUFlLE9BQXREO0FBQThELCtCQUFnQixPQUE5RTtBQUFzRiw0QkFBYSxHQUFuRztBQUF1RyxpQkFBSyxFQUFDLGNBQTdHO0FBQTRILG1CQUFPLEVBQUMsV0FBcEk7QUFBQSxtQ0FDSTtBQUFNLGVBQUMsRUFBQztBQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFkSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBK0JIOzs7Ozs7Ozs7O0FDbkNEOzs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LXNzZy1zdGFydGVyLy4vcGFnZXMvYWdlbnRfYm9va2tlZXBpbmcuanMiLCJ3ZWJwYWNrOi8vbmV4dC1zc2ctc3RhcnRlci8uL3BhZ2VzL2NvbXBvbmVudHMvYWdlbnRfYm9va2tlZXBpbmcvZm9vdGVyLmpzIiwid2VicGFjazovL25leHQtc3NnLXN0YXJ0ZXIvLi9wYWdlcy9jb21wb25lbnRzL2FnZW50X2Jvb2trZWVwaW5nL2hlYXJkZXIuanMiLCJ3ZWJwYWNrOi8vbmV4dC1zc2ctc3RhcnRlci9leHRlcm5hbCBcImZyYW1lci1tb3Rpb25cIiIsIndlYnBhY2s6Ly9uZXh0LXNzZy1zdGFydGVyL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vY29tcG9uZW50cy9hZ2VudF9ib29ra2VlcGluZy9oZWFyZGVyJ1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vY29tcG9uZW50cy9hZ2VudF9ib29ra2VlcGluZy9mb290ZXInXHJcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCJcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBZ2VudEJvb2trZWVwaW5nKCkge1xyXG4gICAgY29uc3QgdmFyaWFudHMgPSB7XHJcbiAgICAgIGNvbnRhaW5lcjoge1xyXG4gICAgICAgIGFuaW1hdGU6IHtcclxuICAgICAgICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgICAgICAgc3RhZ2dlckNoaWxkcmVuOiAwLjVcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGRpdjoge1xyXG4gICAgICAgIGluaXRpYWw6IHtcclxuICAgICAgICAgIG9wYWNpdHk6IDAsXHJcbiAgICAgICAgICB4OiAtMjAwXHJcbiAgICAgICAgfSxcclxuICAgIFxyXG4gICAgICAgIGFuaW1hdGU6IHtcclxuICAgICAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgICAgICB4OiAwXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgIDxIZWFkZXIvPlxyXG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJ0ZXh0LWdyYXktNDAwIGJvZHktZm9udCBiZy1ncmF5LTkwMFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyIHB4LTUgcHktMjQgbXgtYXV0b1wiPlxyXG4gICAgICAgICAgICAgIDxtb3Rpb24uZGl2IGNsYXNzPVwiZmxleCBmbGV4LWNvbCB0ZXh0LWNlbnRlciB3LWZ1bGwgbWItMjBcIlxyXG4gICAgICAgICAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHk6IDIwMCB9fVxyXG4gICAgICAgICAgICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEsIHk6IDAgfX0gID5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cInRleHQtYmx1ZS00MDAgdHJhY2tpbmctd2lkZXN0IGZvbnQtbWVkaXVtIHRpdGxlLWZvbnQgbWItMVwiPuW8oCDmhac8L2gyPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzPVwic206dGV4dC0zeGwgdGV4dC0yeGwgZm9udC1tZWRpdW0gdGl0bGUtZm9udCBtYi00IHRleHQtd2hpdGVcIj48c3BhbiBjbGFzcz1cInRleHQteHNcIj7lh4YgICAgICA8L3NwYW4+5rOo5YaM5Lya6K6h5biIPC9oMT5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibGc6dy0yLzMgbXgtYXV0byBsZWFkaW5nLXJlbGF4ZWQgdGV4dC1iYXNlXCI+SWYgdGhlcmUgaXMgYW4gb3Bwb3J0dW5pdHkgZm9yIG1lIHRvIGRvIGl0LiBJIGFtIHJlYWR5ITwvcD5cclxuICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICAgICAgICAgICAgPG1vdGlvbi5kaXYgY2xhc3M9XCJmbGV4IGZsZXgtd3JhcFwiXHJcbiAgICAgICAgICAgICAgICAvLyBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHg6IC0yMDAgfX1cclxuICAgICAgICAgICAgICAgIC8vIGFuaW1hdGU9e3sgb3BhY2l0eTogMSwgeDogMCB9fSAgXHJcbiAgICAgICAgICAgICAgICBpbml0aWFsPVwiaW5pdGlhbFwiXHJcbiAgICAgICAgICAgICAgICBhbmltYXRlPVwiYW5pbWF0ZVwiXHJcbiAgICAgICAgICAgICAgICB2YXJpYW50cz17dmFyaWFudHMuY29udGFpbmVyfSAgIFxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPG1vdGlvbi5kaXYgY2xhc3M9XCJ4bDp3LTEvMyBsZzp3LTEvMiBtZDp3LWZ1bGwgcHgtOCBweS02IGJvcmRlci1sLTIgYm9yZGVyLWdyYXktODAwXCJcclxuICAgICAgICAgICAgICAgIHZhcmlhbnRzPXt2YXJpYW50cy5kaXZ9ICAgXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cInRleHQtbGcgc206dGV4dC14bCB0ZXh0LXdoaXRlIGZvbnQtbWVkaXVtIHRpdGxlLWZvbnQgbWItMlwiPuS4sOWvjOeahOW3peS9nOe7j+mqjDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibGVhZGluZy1yZWxheGVkIHRleHQtYmFzZSBtYi00XCI+5oul5pyJ5YWt5bm055qE6LSi5Yqh5bel5L2c57uP6aqM77yM54af5oKJ5Zu95a625Lya6K6h5Yi25bqm5ZKM5YeG5YiZ5Y+K55u45YWz56iO5rOV5pS/562W77yM6IO95YGa5aW95LqL5YmN55qE56iO5Yqh562W5YiS44CB6LSi5Yqh6aKE566X77yM5ZCI55CG5a6J5o6S5YWs5Y+455qE56iO6LSf77yM5Y2P6LCD5aSE55CG5aW95YWs5Y+45LiO6ZO26KGM44CB56iO5bGA44CB5bel5ZWG562J6YOo6Zeo55qE5YWz57O777yM5YeP5bCR5YWs5Y+455qE6LSi5Yqh5ZKM56iO5Yqh6aOO6Zmp44CCPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8bW90aW9uLmRpdiBjbGFzcz1cInhsOnctMS8zIGxnOnctMS8yIG1kOnctZnVsbCBweC04IHB5LTYgYm9yZGVyLWwtMiBib3JkZXItZ3JheS04MDBcIiB2YXJpYW50cz17dmFyaWFudHMuZGl2fSAgID5cclxuICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwidGV4dC1sZyBzbTp0ZXh0LXhsIHRleHQtd2hpdGUgZm9udC1tZWRpdW0gdGl0bGUtZm9udCBtYi0yXCI+5ZaE5LqO5LuO5YWo5bGA5Ye65Y+R6ICD6JmR6Zeu6aKYPC9oMj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJsZWFkaW5nLXJlbGF4ZWQgdGV4dC1iYXNlIG1iLTRcIj7og73lpJ/ni6znq4vlhajpnaLlpITnkIblhazlj7jnmoTlhajnm5jotKbliqHvvIzlr7nkuIDoiKznurPnqI7kurrkvIHkuJrnqI7liqHmk43kvZznhp/mgonvvIzlubblr7notKLliqHmiqXooajmnInoia/lpb3nmoTliIbmnpDog73lipvjgII8L3A+XHJcbiAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2IGNsYXNzPVwieGw6dy0xLzMgbGc6dy0xLzIgbWQ6dy1mdWxsIHB4LTggcHktNiBib3JkZXItbC0yIGJvcmRlci1ncmF5LTgwMFwiIHZhcmlhbnRzPXt2YXJpYW50cy5kaXZ9ID5cclxuICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwidGV4dC1sZyBzbTp0ZXh0LXhsIHRleHQtd2hpdGUgZm9udC1tZWRpdW0gdGl0bGUtZm9udCBtYi0yXCI+5bel5L2c5pyJ5oCd5oOz5pyJ5rS75YqbPC9oMj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJsZWFkaW5nLXJlbGF4ZWQgdGV4dC1iYXNlIG1iLTRcIj7mnKzkurrmgKfmoLzlvIDmnJflhbfkurLlkozlipvvvIzkuZDop4LogL/nm7TvvIzor5rlrp7lrojkv6HvvJvog73lkIPoi6bogJDlirPvvIzlloTkuo7kuI7kurrmsp/pgJrvvIzmnInovoPlvLrnmoTlt6XkvZzotKPku7vlv4PlkozmlazkuJrnsr7npZ7jgII8L3A+XHJcbiAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgICAgPEZvb3Rlci8+XHJcbiAgICAgICAgPC8+XHJcbiAgICBcclxuICAgIClcclxufSIsIlxyXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvb3RlcigpIHtcclxuICAgIHJldHVybiAoICBcclxuICAgICAgICA8PlxyXG4gICAgICAgIDxmb290ZXIgY2xhc3M9XCJ0ZXh0LWdyYXktNDAwIGJvZHktZm9udCBiZy1ncmF5LTkwMFwiPlxyXG4gICAgICAgICAgICA8bW90aW9uLmRpdlxyXG4gICAgICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeTogNTAgfX1cclxuICAgICAgICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEsIHk6IDAgfX0gIFxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXIgbXgtYXV0byBweS00IHB4LTUgZmxleCBmbGV4LXdyYXAgZmxleC1jb2wgc206ZmxleC1yb3dcIj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGV4dC1zbSB0ZXh0LWdyYXktNTAwIHNtOm1sLTQgc206cGwtNCBzbTpib3JkZXItbC0yIHNtOmJvcmRlci1ncmF5LTIwMCBzbTpweS0yIHNtOm10LTAgbXQtNFwiPsKpIDIwMjAgPGEgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20va255dHRuZXZlXCIgY2xhc3M9XCJ0ZXh0LWdyYXktNjAwIG1sLTFcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCI+QGh1bms8L2E+XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5saW5lLWZsZXggc206bWwtYXV0byBzbTptdC0wIG10LTQganVzdGlmeS1jZW50ZXIgc206anVzdGlmeS1zdGFydFwiPuOAjFBvd2VyZWQgYnkgIFxyXG4gICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly93ZWJpZnkuY2xvdWRiYXNlLm5ldC9cIlxyXG4gICAgICAgICAgICAgICAgPiBDbG91ZEJhc2UgV2ViaWZ5PC9hPuOAjVxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgICAgIDwvZm9vdGVyPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcbiIsIlxyXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxoZWFkZXIgY2xhc3M9XCJ0ZXh0LWdyYXktNDAwIGJvZHktZm9udCBiZy1ncmF5LTkwMFwiPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPG1vdGlvbi5kaXZcclxuICAgICAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHk6IC01MCB9fVxyXG4gICAgICAgICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSwgeTogMCB9fSAgXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciBteC1hdXRvIGZsZXggZmxleC13cmFwIHAtNSBmbGV4LWNvbCBtZDpmbGV4LXJvdyBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiZmxleCB0aXRsZS1mb250IGZvbnQtbWVkaXVtIGl0ZW1zLWNlbnRlciB0ZXh0LWdyYXktOTAwIG1iLTQgbWQ6bWItMFwiPlxyXG4gICAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBzdHJva2Utd2lkdGg9XCIyXCIgY2xhc3M9XCJ3LTEwIGgtMTAgdGV4dC13aGl0ZSBwLTIgYmctaW5kaWdvLTUwMCByb3VuZGVkLWZ1bGxcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xMiAyTDIgN2wxMCA1IDEwLTUtMTAtNXpNMiAxN2wxMCA1IDEwLTVNMiAxMmwxMCA1IDEwLTVcIj48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWwtMyB0ZXh0LXhsXCI+6ICBWuS8muiuoeW3peS9nOWupDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDxuYXYgY2xhc3M9XCJtZDptci1hdXRvIG1kOm1sLTQgbWQ6cHktMSBtZDpwbC00IG1kOmJvcmRlci1sIG1kOmJvcmRlci1ncmF5LTQwMFx0ZmxleCBmbGV4LXdyYXAgaXRlbXMtY2VudGVyIHRleHQtYmFzZSBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJtci01IGhvdmVyOnRleHQtZ3JheS05MDBcIj7mnI3liqE8L2E+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzcz1cIm1yLTUgaG92ZXI6dGV4dC1ncmF5LTkwMFwiPuWboumYnzwvYT5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwibXItNSBob3Zlcjp0ZXh0LWdyYXktOTAwXCI+5ZCI5L2c5LyZ5Ly0PC9hPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJtci01IGhvdmVyOnRleHQtZ3JheS05MDBcIj7ogZTns7vmiJHku6w8L2E+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzcz1cIm1yLTUgaG92ZXI6dGV4dC1ncmF5LTkwMFwiIGhyZWY9Jy9zb2Z0d2FyZV9kZXZlbG9wbWVudCcgPui9r+S7tuW8gOWPkTwvYT5cclxuICAgICAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBiZy1ncmF5LTEwMCBib3JkZXItMCBweS0xIHB4LTMgZm9jdXM6b3V0bGluZS1ub25lIGhvdmVyOmJnLWdyYXktMjAwIHJvdW5kZWQgdGV4dC1iYXNlIG10LTQgbWQ6bXQtMFwiIGNvbnRyb2wtaWQ9XCJDb250cm9sSUQtODNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPScvJz5Ib21lPC9hPlxyXG4gICAgICAgICAgICAgICAgPHN2ZyBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZS13aWR0aD1cIjJcIiBjbGFzcz1cInctNCBoLTQgbWwtMVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTUgMTJoMTRNMTIgNWw3IDctNyA3XCI+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgICAgICA8L2hlYWRlcj5cclxuICAgIClcclxufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZyYW1lci1tb3Rpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJuYW1lcyI6WyJzdHlsZXMiLCJIZWFkZXIiLCJGb290ZXIiLCJtb3Rpb24iLCJBZ2VudEJvb2trZWVwaW5nIiwidmFyaWFudHMiLCJjb250YWluZXIiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsInN0YWdnZXJDaGlsZHJlbiIsImRpdiIsImluaXRpYWwiLCJvcGFjaXR5IiwieCIsInkiXSwic291cmNlUm9vdCI6IiJ9
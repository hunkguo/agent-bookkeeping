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
      class: "text-gray-600 body-font",
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
            class: "text-indigo-500 tracking-widest font-medium title-font mb-1",
            children: "\u5F20 \u6167"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h1", {
            class: "sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
              class: "text-xs",
              children: "\u51C6      "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 92
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
            class: "xl:w-1/3 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60",
            variants: variants.div,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h2", {
              class: "text-lg sm:text-xl text-gray-900 font-medium title-font mb-2",
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
            class: "xl:w-1/3 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60",
            variants: variants.div,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h2", {
              class: "text-lg sm:text-xl text-gray-900 font-medium title-font mb-2",
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
            class: "xl:w-1/3 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60",
            variants: variants.div,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h2", {
              class: "text-lg sm:text-xl text-gray-900 font-medium title-font mb-2",
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
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("section", {
      class: "text-gray-600 body-font",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        class: "container px-5 py-24 mx-auto",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
          class: "flex flex-wrap w-full mb-20",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
            class: "lg:w-1/2 w-full mb-6 lg:mb-0",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h1", {
              class: "sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900",
              children: "\u804C\u573A\u7ECF\u5386"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
              class: "h-1 w-20 bg-indigo-500 rounded"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 73,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
            class: "lg:w-1/2 w-full leading-relaxed text-gray-500"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
          class: "flex flex-wrap -m-4",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
            class: "xl:w-1/2 md:w-1/2 p-4",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
              class: "bg-gray-100 p-6 rounded-lg",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("img", {
                class: "h-200 rounded w-200 object-cover object-center mb-6",
                src: "https://image.qcc.com/auto/7fc12fb293b8d939f87dad27e588f375.jpg?x-oss-process=style/logo_200",
                alt: "content"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 80,
                columnNumber: 19
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h3", {
                class: "tracking-widest text-indigo-500 text-xs font-medium title-font",
                children: "\u5357\u9633\u65B9\u5706"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 81,
                columnNumber: 19
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h2", {
                class: "text-lg text-gray-900 font-medium title-font mb-4"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 82,
                columnNumber: 19
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
                class: "leading-relaxed text-base",
                children: "\u6210\u7ACB\u4E8E1998-06-01\uFF0C\u4F01\u4E1A\u5730\u5740\u4F4D\u4E8E\u5357\u9633\u5E02\u6587\u5316\u8DEF189\u53F7\u3002"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 83,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
            class: "xl:w-1/2 md:w-1/2 p-4",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
              class: "bg-gray-100 p-6 rounded-lg",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("img", {
                class: "h-200 rounded w-200 object-cover object-center mb-6",
                src: "https://image.qcc.com/logo/c725d5f9f4e43e6eb982400e5e663ef9.jpg?x-oss-process=style/logo_200",
                alt: "content"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 88,
                columnNumber: 19
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h3", {
                class: "tracking-widest text-indigo-500 text-xs font-medium title-font",
                children: "\u535A\u96C6\u5929\u5377"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 89,
                columnNumber: 19
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h2", {
                class: "text-lg text-gray-900 font-medium title-font mb-4"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 90,
                columnNumber: 19
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
                class: "leading-relaxed text-base",
                children: "\u56FD\u6709\u63A7\u80A1\u4F01\u4E1A\uFF0C\u4E3B\u8425\u4E1A\u52A1\u4E3A\u6587\u5316\u4F20\u5A92\u3001\u5185\u5BB9\u63D0\u4F9B\u3001\u51FA\u7248\u521B\u610F\u3001\u6570\u5B57\u51FA\u7248\u4EE5\u53CA\u4F5C\u5BB6\u7ECF\u7EAA\u548C\u6587\u5316\u670D\u52A1\u7B49\u3002"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 91,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 11
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("section", {
      class: "text-gray-600 body-font ",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        class: "container px-5 py-24 mx-auto",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
          class: "flex flex-wrap w-full mb-20 flex-col items-center text-center",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h1", {
            class: "sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900",
            children: "\u6267\u4E1A\u8D44\u683C"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
            class: "lg:w-1/2 w-full leading-relaxed text-gray-500"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
          class: "flex flex-wrap -m-4",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
            class: "xl:w-1/3 md:w-1/2 p-4",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
              class: "border border-gray-200 p-6 rounded-lg",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                class: "w-10 h-10 inline-flex items-center justify-center rounded-full text-indigo-500 mb-4",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("svg", {
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2",
                  class: "w-6 h-6",
                  viewBox: "0 0 24 24",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
                    d: "M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 110,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 109,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 108,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h2", {
                class: "text-lg font-medium title-font mb-2 text-gray-900",
                children: "\u521D\u7EA7\u4F1A\u8BA1\u5E08"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 113,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
                class: "leading-relaxed text-base",
                children: "2018\u5E74\u901A\u8FC7"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 114,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 107,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
            class: "xl:w-1/3 md:w-1/2 p-4",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
              class: "border border-gray-200 p-6 rounded-lg",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                class: "w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("svg", {
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2",
                  class: "w-6 h-6",
                  viewBox: "0 0 24 24",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
                    d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 121,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 120,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 119,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h2", {
                class: "text-lg font-medium title-font mb-2 text-gray-900 ",
                children: "\u4E2D\u7EA7\u4F1A\u8BA1\u5E08"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 124,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
                class: "leading-relaxed text-base",
                children: "2021\u5E74\u901A\u8FC7"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 125,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 118,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 117,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
            class: "xl:w-1/3 md:w-1/2 p-4",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
              class: "border border-gray-200 p-6 rounded-lg",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                class: "w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("svg", {
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2",
                  class: "w-6 h-6",
                  viewBox: "0 0 24 24",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
                    d: "M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 132,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("circle", {
                    cx: "12",
                    cy: "7",
                    r: "4"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 133,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 131,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 130,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h2", {
                class: "text-lg text-gray-900 font-medium title-font mb-2",
                children: "\u6CE8\u518C\u4F1A\u8BA1\u5E08"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 136,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
                class: "leading-relaxed text-base",
                children: "\u9884\u8BA12022\u5E74\u901A\u8FC7"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 137,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 129,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 128,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("section", {
      class: "text-gray-600 body-font overflow-hidden",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        class: "container px-5 py-24 mx-auto",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
          class: "flex flex-wrap -m-12",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
            class: "p-12 md:w-1/2 flex flex-col items-start",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
              class: "inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest",
              children: "Knowledges"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 148,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h2", {
              class: "sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4",
              children: "\u5982\u4F55\u770B\u5F85\u6240\u8C13\u7684\u7A0E\u52A1\u7B79\u5212\uFF0C\u5206\u4EAB17\u4E2A\u63D0\u9192\uFF01"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 149,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
              class: "leading-relaxed mb-8",
              children: "\u63D0\u9192\u4E00\uFF1A\u505A\u597D\u7A0E\u52A1\u7B79\u5212\uFF0C\u8D22\u52A1\u4E0D\u4EC5\u662F\u9700\u8981\u6DF1\u523B\u4E86\u89E3\u7A0E\u6536\u653F\u7B56\u3001\u7A0E\u6CD5\u3001\u5176\u4ED6\u76F8\u5173\u7684\u4E00\u4E9B\u6CD5\u5F8B\u6CD5\u89C4\u7B49\uFF0C\u8FD8\u8981\u4E0E\u5F53\u5730\u7A0E\u52A1\u5C40\u6C9F\u901A\uFF0C\u4E86\u89E3\u76F8\u5173\u7A0E\u52A1\u5904\u7406\u65F6\u7684\u5F81\u7BA1\u53E3\u5F84\u3002\u6709\u4E9B\u4EBA\u62FF\u5230\u7A0E\u6536\u4F18\u60E0\u653F\u7B56\uFF0C\u4F1A\u751F\u642C\u786C\u5957\u5730\u8FD0\u7528\uFF0C\u7ED3\u679C\u6F0F\u6D1E\u767E\u51FA\u3001\u9EBB\u70E6\u4E0D\u65AD\u3002"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 150,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
              class: "flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
                class: "text-indigo-500 inline-flex items-center",
                href: "/How_to_view_the_so-called_tax_planning",
                children: ["Learn More", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("svg", {
                  class: "w-4 h-4 ml-2",
                  viewBox: "0 0 24 24",
                  stroke: "currentColor",
                  "stroke-width": "2",
                  fill: "none",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
                    d: "M5 12h14"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 154,
                    columnNumber: 23
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
                    d: "M12 5l7 7-7 7"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 155,
                    columnNumber: 23
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 153,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 152,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 151,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 147,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
            class: "p-12 md:w-1/2 flex flex-col items-start",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
              class: "inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest",
              children: "Knowledges"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 161,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h2", {
              class: "sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4",
              children: "2021\u5404\u884C\u4E1A\u6700\u65B0\u201C\u9884\u8B66\u7A0E\u8D1F\u7387\u201D\u5927\u5168"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 162,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
              class: "leading-relaxed mb-8",
              children: "\u91D1\u7A0E\u4E09\u671F\u65BD\u884C\u4EE5\u6765\u7A0E\u6536\u8BC4\u4F30\u7684\u516D\u5927\u9884\u8B66\u6307\u6807\uFF0C\u5EFA\u8BAE\u4F1A\u8BA1\u4EBA\u5458\u5B66\u4E60\u6536\u85CF\uFF01"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 163,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
              class: "flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
                class: "text-indigo-500 inline-flex items-center",
                href: "/2021_warning_tax_rate",
                children: ["Learn More", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("svg", {
                  class: "w-4 h-4 ml-2",
                  viewBox: "0 0 24 24",
                  stroke: "currentColor",
                  "stroke-width": "2",
                  fill: "none",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
                    d: "M5 12h14"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 167,
                    columnNumber: 23
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
                    d: "M12 5l7 7-7 7"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 168,
                    columnNumber: 23
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 166,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 165,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 164,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 160,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_agent_bookkeeping_footer__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 176,
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
      class: "text-gray-600 body-font",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_0__.motion.div, {
        initial: {
          opacity: 0,
          y: 200
        },
        animate: {
          opacity: 1,
          y: 0
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          class: "container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
            class: "flex title-font font-medium items-center md:justify-start justify-center text-gray-500",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              className: "h-5 w-5",
              viewBox: "0 0 20 20",
              fill: "currentColor",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
                fillRule: "evenodd",
                d: "M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z",
                clipRule: "evenodd"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 14,
                columnNumber: 21
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 13,
              columnNumber: 21
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
              class: "ml-3 text-xl",
              children: "\u6CB3\u5357 \u5357\u9633"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 16,
              columnNumber: 21
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 12,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
            class: "flex title-font font-medium items-center md:justify-start justify-center text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 ",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              className: "h-5 w-5",
              viewBox: "0 0 20 20",
              fill: "currentColor",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
                d: "M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 20,
                columnNumber: 25
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 19,
              columnNumber: 21
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
              class: "ml-3 text-xl",
              children: "18237715216"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 22,
              columnNumber: 21
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
            class: "text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4",
            children: ["\xA9 2022 ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
              href: "https://twitter.com/knyttneve",
              class: "text-gray-600 ml-1",
              rel: "noopener noreferrer",
              target: "_blank",
              children: "@hunk"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 24,
              columnNumber: 127
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
            class: "inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
              href: "https://webify.cloudbase.net/",
              children: " \u300CPowered by CloudBase Webify\u300D"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 28,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
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
    class: "text-gray-600 body-font",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_0__.motion.div, {
      initial: {
        opacity: 0,
        y: -200
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
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("nav", {
          class: "md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400\tflex flex-wrap items-center text-base justify-center",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
            class: "mr-5 hover:text-gray-900",
            children: "English"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
            class: "mr-5 hover:text-gray-900",
            children: "Espa\xF1ol"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
            class: "mr-5 hover:text-gray-900",
            children: "Fran\xE7ais"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
            class: "mr-5 hover:text-gray-900",
            children: "\u4E2D\u6587"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
          class: "inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0",
          "control-id": "ControlID-83",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
            href: "/",
            children: "Home"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
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
              lineNumber: 37,
              columnNumber: 21
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 34,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvYWdlbnRfYm9va2tlZXBpbmcuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdlLFNBQVNJLGdCQUFULEdBQTRCO0FBQ3ZDLFFBQU1DLFFBQVEsR0FBRztBQUNmQyxJQUFBQSxTQUFTLEVBQUU7QUFDVEMsTUFBQUEsT0FBTyxFQUFFO0FBQ1BDLFFBQUFBLFVBQVUsRUFBRTtBQUNWQyxVQUFBQSxlQUFlLEVBQUU7QUFEUDtBQURMO0FBREEsS0FESTtBQVFmQyxJQUFBQSxHQUFHLEVBQUU7QUFDSEMsTUFBQUEsT0FBTyxFQUFFO0FBQ1BDLFFBQUFBLE9BQU8sRUFBRSxDQURGO0FBRVBDLFFBQUFBLENBQUMsRUFBRSxDQUFDO0FBRkcsT0FETjtBQU1ITixNQUFBQSxPQUFPLEVBQUU7QUFDUEssUUFBQUEsT0FBTyxFQUFFLENBREY7QUFFUEMsUUFBQUEsQ0FBQyxFQUFFO0FBRkk7QUFOTjtBQVJVLEdBQWpCO0FBb0JBLHNCQUNJO0FBQUEsNEJBQ0EsOERBQUMsMEVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURBLGVBRUU7QUFBUyxXQUFLLEVBQUMseUJBQWY7QUFBQSw2QkFDRTtBQUFLLGFBQUssRUFBQyw4QkFBWDtBQUFBLGdDQUNFLDhEQUFDLHFEQUFEO0FBQVksZUFBSyxFQUFDLHdDQUFsQjtBQUNJLGlCQUFPLEVBQUU7QUFBRUQsWUFBQUEsT0FBTyxFQUFFLENBQVg7QUFBY0UsWUFBQUEsQ0FBQyxFQUFFO0FBQWpCLFdBRGI7QUFFSSxpQkFBTyxFQUFFO0FBQUVGLFlBQUFBLE9BQU8sRUFBRSxDQUFYO0FBQWNFLFlBQUFBLENBQUMsRUFBRTtBQUFqQixXQUZiO0FBQUEsa0NBR0U7QUFBSSxpQkFBSyxFQUFDLDZEQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUhGLGVBSUU7QUFBSSxpQkFBSyxFQUFDLGdFQUFWO0FBQUEsb0NBQTJFO0FBQU0sbUJBQUssRUFBQyxTQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUEzRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSkYsZUFLRTtBQUFHLGlCQUFLLEVBQUMsNENBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBUUUsOERBQUMscURBQUQ7QUFBWSxlQUFLLEVBQUMsZ0JBQWxCLENBQ0U7QUFDQTtBQUZGO0FBR0UsaUJBQU8sRUFBQyxTQUhWO0FBSUUsaUJBQU8sRUFBQyxTQUpWO0FBS0Usa0JBQVEsRUFBRVQsUUFBUSxDQUFDQyxTQUxyQjtBQUFBLGtDQVFFLDhEQUFDLHFEQUFEO0FBQVksaUJBQUssRUFBQyxvRkFBbEI7QUFDQSxvQkFBUSxFQUFFRCxRQUFRLENBQUNLLEdBRG5CO0FBQUEsb0NBR0U7QUFBSSxtQkFBSyxFQUFDLDhEQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUhGLGVBSUU7QUFBRyxtQkFBSyxFQUFDLGdDQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFSRixlQWVFLDhEQUFDLHFEQUFEO0FBQVksaUJBQUssRUFBQyxvRkFBbEI7QUFBdUcsb0JBQVEsRUFBRUwsUUFBUSxDQUFDSyxHQUExSDtBQUFBLG9DQUNFO0FBQUksbUJBQUssRUFBQyw4REFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixlQUVFO0FBQUcsbUJBQUssRUFBQyxnQ0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBZkYsZUFvQkUsOERBQUMscURBQUQ7QUFBWSxpQkFBSyxFQUFDLG9GQUFsQjtBQUF1RyxvQkFBUSxFQUFFTCxRQUFRLENBQUNLLEdBQTFIO0FBQUEsb0NBQ0U7QUFBSSxtQkFBSyxFQUFDLDhEQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLGVBRUU7QUFBRyxtQkFBSyxFQUFDLGdDQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFwQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixlQXVDRTtBQUFTLFdBQUssRUFBQyx5QkFBZjtBQUFBLDZCQUNBO0FBQUssYUFBSyxFQUFDLDhCQUFYO0FBQUEsZ0NBQ0U7QUFBSyxlQUFLLEVBQUMsNkJBQVg7QUFBQSxrQ0FDRTtBQUFLLGlCQUFLLEVBQUMsOEJBQVg7QUFBQSxvQ0FDRTtBQUFJLG1CQUFLLEVBQUMsZ0VBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsZUFFRTtBQUFLLG1CQUFLLEVBQUM7QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQUtFO0FBQUcsaUJBQUssRUFBQztBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBUUU7QUFBSyxlQUFLLEVBQUMscUJBQVg7QUFBQSxrQ0FDRTtBQUFLLGlCQUFLLEVBQUMsdUJBQVg7QUFBQSxtQ0FDRTtBQUFLLG1CQUFLLEVBQUMsNEJBQVg7QUFBQSxzQ0FDRTtBQUFLLHFCQUFLLEVBQUMscURBQVg7QUFBaUUsbUJBQUcsRUFBQyw4RkFBckU7QUFBb0ssbUJBQUcsRUFBQztBQUF4SztBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURGLGVBRUU7QUFBSSxxQkFBSyxFQUFDLGdFQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUZGLGVBR0U7QUFBSSxxQkFBSyxFQUFDO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFIRixlQUlFO0FBQUcscUJBQUssRUFBQywyQkFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBU0U7QUFBSyxpQkFBSyxFQUFDLHVCQUFYO0FBQUEsbUNBQ0U7QUFBSyxtQkFBSyxFQUFDLDRCQUFYO0FBQUEsc0NBQ0U7QUFBSyxxQkFBSyxFQUFDLHFEQUFYO0FBQWlFLG1CQUFHLEVBQUMsOEZBQXJFO0FBQW9LLG1CQUFHLEVBQUM7QUFBeEs7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFERixlQUVFO0FBQUkscUJBQUssRUFBQyxnRUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFGRixlQUdFO0FBQUkscUJBQUssRUFBQztBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBSEYsZUFJRTtBQUFHLHFCQUFLLEVBQUMsMkJBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXZDRixlQXNFQTtBQUFTLFdBQUssRUFBQywwQkFBZjtBQUFBLDZCQUNBO0FBQUssYUFBSyxFQUFDLDhCQUFYO0FBQUEsZ0NBQ0U7QUFBSyxlQUFLLEVBQUMsK0RBQVg7QUFBQSxrQ0FDRTtBQUFJLGlCQUFLLEVBQUMsZ0VBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFFRTtBQUFHLGlCQUFLLEVBQUM7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUtFO0FBQUssZUFBSyxFQUFDLHFCQUFYO0FBQUEsa0NBQ0U7QUFBSyxpQkFBSyxFQUFDLHVCQUFYO0FBQUEsbUNBQ0U7QUFBSyxtQkFBSyxFQUFDLHVDQUFYO0FBQUEsc0NBQ0U7QUFBSyxxQkFBSyxFQUFDLHFGQUFYO0FBQUEsdUNBQ0U7QUFBSyxzQkFBSSxFQUFDLE1BQVY7QUFBaUIsd0JBQU0sRUFBQyxjQUF4QjtBQUF1QyxvQ0FBZSxPQUF0RDtBQUE4RCxxQ0FBZ0IsT0FBOUU7QUFBc0Ysa0NBQWEsR0FBbkc7QUFBdUcsdUJBQUssRUFBQyxTQUE3RztBQUF1SCx5QkFBTyxFQUFDLFdBQS9IO0FBQUEseUNBQ0U7QUFBTSxxQkFBQyxFQUFDO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURGLGVBTUU7QUFBSSxxQkFBSyxFQUFDLG1EQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQU5GLGVBT0U7QUFBRyxxQkFBSyxFQUFDLDJCQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFZRTtBQUFLLGlCQUFLLEVBQUMsdUJBQVg7QUFBQSxtQ0FDRTtBQUFLLG1CQUFLLEVBQUMsdUNBQVg7QUFBQSxzQ0FDRTtBQUFLLHFCQUFLLEVBQUMsbUdBQVg7QUFBQSx1Q0FDRTtBQUFLLHNCQUFJLEVBQUMsTUFBVjtBQUFpQix3QkFBTSxFQUFDLGNBQXhCO0FBQXVDLG9DQUFlLE9BQXREO0FBQThELHFDQUFnQixPQUE5RTtBQUFzRixrQ0FBYSxHQUFuRztBQUF1Ryx1QkFBSyxFQUFDLFNBQTdHO0FBQXVILHlCQUFPLEVBQUMsV0FBL0g7QUFBQSx5Q0FDRTtBQUFNLHFCQUFDLEVBQUM7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREYsZUFNRTtBQUFJLHFCQUFLLEVBQUMsb0RBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBTkYsZUFPRTtBQUFHLHFCQUFLLEVBQUMsMkJBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFaRixlQXVCRTtBQUFLLGlCQUFLLEVBQUMsdUJBQVg7QUFBQSxtQ0FDRTtBQUFLLG1CQUFLLEVBQUMsdUNBQVg7QUFBQSxzQ0FDRTtBQUFLLHFCQUFLLEVBQUMsbUdBQVg7QUFBQSx1Q0FDRTtBQUFLLHNCQUFJLEVBQUMsTUFBVjtBQUFpQix3QkFBTSxFQUFDLGNBQXhCO0FBQXVDLG9DQUFlLE9BQXREO0FBQThELHFDQUFnQixPQUE5RTtBQUFzRixrQ0FBYSxHQUFuRztBQUF1Ryx1QkFBSyxFQUFDLFNBQTdHO0FBQXVILHlCQUFPLEVBQUMsV0FBL0g7QUFBQSwwQ0FDRTtBQUFNLHFCQUFDLEVBQUM7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQURGLGVBRUU7QUFBUSxzQkFBRSxFQUFDLElBQVg7QUFBZ0Isc0JBQUUsRUFBQyxHQUFuQjtBQUF1QixxQkFBQyxFQUFDO0FBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFERixlQU9FO0FBQUkscUJBQUssRUFBQyxtREFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFQRixlQVFFO0FBQUcscUJBQUssRUFBQywyQkFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQXZCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXRFQSxlQW1IQTtBQUFTLFdBQUssRUFBQyx5Q0FBZjtBQUFBLDZCQUNFO0FBQUssYUFBSyxFQUFDLDhCQUFYO0FBQUEsK0JBQ0U7QUFBSyxlQUFLLEVBQUMsc0JBQVg7QUFBQSxrQ0FDRTtBQUFLLGlCQUFLLEVBQUMseUNBQVg7QUFBQSxvQ0FDRTtBQUFNLG1CQUFLLEVBQUMsaUdBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsZUFFRTtBQUFJLG1CQUFLLEVBQUMscUVBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRkYsZUFHRTtBQUFHLG1CQUFLLEVBQUMsc0JBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBSEYsZUFJRTtBQUFLLG1CQUFLLEVBQUMsaUZBQVg7QUFBQSxxQ0FDRTtBQUFHLHFCQUFLLEVBQUMsMENBQVQ7QUFBb0Qsb0JBQUksRUFBQyx5Q0FBekQ7QUFBQSxzREFDRTtBQUFLLHVCQUFLLEVBQUMsY0FBWDtBQUEwQix5QkFBTyxFQUFDLFdBQWxDO0FBQThDLHdCQUFNLEVBQUMsY0FBckQ7QUFBb0Usa0NBQWEsR0FBakY7QUFBcUYsc0JBQUksRUFBQyxNQUExRjtBQUFpRyxvQ0FBZSxPQUFoSDtBQUF3SCxxQ0FBZ0IsT0FBeEk7QUFBQSwwQ0FDRTtBQUFNLHFCQUFDLEVBQUM7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQURGLGVBRUU7QUFBTSxxQkFBQyxFQUFDO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFjRTtBQUFLLGlCQUFLLEVBQUMseUNBQVg7QUFBQSxvQ0FDRTtBQUFNLG1CQUFLLEVBQUMsaUdBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsZUFFRTtBQUFJLG1CQUFLLEVBQUMscUVBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRkYsZUFHRTtBQUFHLG1CQUFLLEVBQUMsc0JBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBSEYsZUFJRTtBQUFLLG1CQUFLLEVBQUMsaUZBQVg7QUFBQSxxQ0FDRTtBQUFHLHFCQUFLLEVBQUMsMENBQVQ7QUFBb0Qsb0JBQUksRUFBQyx3QkFBekQ7QUFBQSxzREFDRTtBQUFLLHVCQUFLLEVBQUMsY0FBWDtBQUEwQix5QkFBTyxFQUFDLFdBQWxDO0FBQThDLHdCQUFNLEVBQUMsY0FBckQ7QUFBb0Usa0NBQWEsR0FBakY7QUFBcUYsc0JBQUksRUFBQyxNQUExRjtBQUFpRyxvQ0FBZSxPQUFoSDtBQUF3SCxxQ0FBZ0IsT0FBeEk7QUFBQSwwQ0FDRTtBQUFNLHFCQUFDLEVBQUM7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQURGLGVBRUU7QUFBTSxxQkFBQyxFQUFDO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBZEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFuSEEsZUFtSkEsOERBQUMseUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQW5KQTtBQUFBLGtCQURKO0FBd0pIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbExEOzs7QUFDZSxTQUFTUixNQUFULEdBQWtCO0FBQzdCLHNCQUNJO0FBQUEsMkJBQ0E7QUFBUSxXQUFLLEVBQUMseUJBQWQ7QUFBQSw2QkFDSSw4REFBQyxxREFBRDtBQUNFLGVBQU8sRUFBRTtBQUFFVSxVQUFBQSxPQUFPLEVBQUUsQ0FBWDtBQUFjRSxVQUFBQSxDQUFDLEVBQUU7QUFBakIsU0FEWDtBQUVFLGVBQU8sRUFBRTtBQUFFRixVQUFBQSxPQUFPLEVBQUUsQ0FBWDtBQUFjRSxVQUFBQSxDQUFDLEVBQUU7QUFBakIsU0FGWDtBQUFBLCtCQUlBO0FBQUssZUFBSyxFQUFDLGlFQUFYO0FBQUEsa0NBQ0k7QUFBRyxpQkFBSyxFQUFDLHdGQUFUO0FBQUEsb0NBQ0k7QUFBSyxtQkFBSyxFQUFDLDRCQUFYO0FBQXdDLHVCQUFTLEVBQUMsU0FBbEQ7QUFBNEQscUJBQU8sRUFBQyxXQUFwRTtBQUFnRixrQkFBSSxFQUFDLGNBQXJGO0FBQUEscUNBQ0E7QUFBTSx3QkFBUSxFQUFDLFNBQWY7QUFBeUIsaUJBQUMsRUFBQyw2RkFBM0I7QUFBeUgsd0JBQVEsRUFBQztBQUFsSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFESixlQUlJO0FBQU0sbUJBQUssRUFBQyxjQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixlQU9JO0FBQUcsaUJBQUssRUFBQywwSUFBVDtBQUFBLG9DQUNJO0FBQUssbUJBQUssRUFBQyw0QkFBWDtBQUF3Qyx1QkFBUyxFQUFDLFNBQWxEO0FBQTRELHFCQUFPLEVBQUMsV0FBcEU7QUFBZ0Ysa0JBQUksRUFBQyxjQUFyRjtBQUFBLHFDQUNJO0FBQU0saUJBQUMsRUFBQztBQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURKLGVBSUk7QUFBTSxtQkFBSyxFQUFDLGNBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVBKLGVBYUk7QUFBRyxpQkFBSyxFQUFDLDZGQUFUO0FBQUEsa0RBQThHO0FBQUcsa0JBQUksRUFBQywrQkFBUjtBQUF3QyxtQkFBSyxFQUFDLG9CQUE5QztBQUFtRSxpQkFBRyxFQUFDLHFCQUF2RTtBQUE2RixvQkFBTSxFQUFDLFFBQXBHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUE5RztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBYkosZUFnQkk7QUFBTSxpQkFBSyxFQUFDLHFFQUFaO0FBQUEsbUNBQ0E7QUFDSSxrQkFBSSxFQUFDLCtCQURUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFoQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQSxtQkFESjtBQWlDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25DRDs7QUFFZSxTQUFTYixNQUFULEdBQWtCO0FBQzdCLHNCQUNJO0FBQVEsU0FBSyxFQUFDLHlCQUFkO0FBQUEsMkJBRUksOERBQUMscURBQUQ7QUFDRSxhQUFPLEVBQUU7QUFBRVcsUUFBQUEsT0FBTyxFQUFFLENBQVg7QUFBY0UsUUFBQUEsQ0FBQyxFQUFFLENBQUM7QUFBbEIsT0FEWDtBQUVFLGFBQU8sRUFBRTtBQUFFRixRQUFBQSxPQUFPLEVBQUUsQ0FBWDtBQUFjRSxRQUFBQSxDQUFDLEVBQUU7QUFBakIsT0FGWDtBQUFBLDZCQUlBO0FBQUssYUFBSyxFQUFDLHdFQUFYO0FBQUEsZ0NBQ0k7QUFBRyxlQUFLLEVBQUMscUVBQVQ7QUFBQSxrQ0FDQTtBQUFLLGlCQUFLLEVBQUMsNEJBQVg7QUFBd0MsZ0JBQUksRUFBQyxNQUE3QztBQUFvRCxrQkFBTSxFQUFDLGNBQTNEO0FBQTBFLDhCQUFlLE9BQXpGO0FBQWlHLCtCQUFnQixPQUFqSDtBQUF5SCw0QkFBYSxHQUF0STtBQUEwSSxpQkFBSyxFQUFDLHFEQUFoSjtBQUFzTSxtQkFBTyxFQUFDLFdBQTlNO0FBQUEsbUNBQ0k7QUFBTSxlQUFDLEVBQUM7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFEQSxlQUlBO0FBQU0saUJBQUssRUFBQyxjQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQWNJO0FBQUssZUFBSyxFQUFDLHlIQUFYO0FBQUEsa0NBQ0E7QUFBRyxpQkFBSyxFQUFDLDBCQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURBLGVBRUE7QUFBRyxpQkFBSyxFQUFDLDBCQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZBLGVBR0E7QUFBRyxpQkFBSyxFQUFDLDBCQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUhBLGVBSUE7QUFBRyxpQkFBSyxFQUFDLDBCQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFkSixlQXNCSTtBQUFRLGVBQUssRUFBQyw2SEFBZDtBQUE0SSx3QkFBVyxjQUF2SjtBQUFBLGtDQUNJO0FBQUcsZ0JBQUksRUFBQyxHQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKLGVBRUE7QUFBSyxnQkFBSSxFQUFDLE1BQVY7QUFBaUIsa0JBQU0sRUFBQyxjQUF4QjtBQUF1Qyw4QkFBZSxPQUF0RDtBQUE4RCwrQkFBZ0IsT0FBOUU7QUFBc0YsNEJBQWEsR0FBbkc7QUFBdUcsaUJBQUssRUFBQyxjQUE3RztBQUE0SCxtQkFBTyxFQUFDLFdBQXBJO0FBQUEsbUNBQ0k7QUFBTSxlQUFDLEVBQUM7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBdEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUF1Q0g7Ozs7Ozs7Ozs7QUMzQ0Q7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtc3NnLXN0YXJ0ZXIvLi9wYWdlcy9hZ2VudF9ib29ra2VlcGluZy5qcyIsIndlYnBhY2s6Ly9uZXh0LXNzZy1zdGFydGVyLy4vcGFnZXMvY29tcG9uZW50cy9hZ2VudF9ib29ra2VlcGluZy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vbmV4dC1zc2ctc3RhcnRlci8uL3BhZ2VzL2NvbXBvbmVudHMvYWdlbnRfYm9va2tlZXBpbmcvaGVhcmRlci5qcyIsIndlYnBhY2s6Ly9uZXh0LXNzZy1zdGFydGVyL2V4dGVybmFsIFwiZnJhbWVyLW1vdGlvblwiIiwid2VicGFjazovL25leHQtc3NnLXN0YXJ0ZXIvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9jb21wb25lbnRzL2FnZW50X2Jvb2trZWVwaW5nL2hlYXJkZXInXHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9jb21wb25lbnRzL2FnZW50X2Jvb2trZWVwaW5nL2Zvb3RlcidcclxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIlxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFnZW50Qm9va2tlZXBpbmcoKSB7XHJcbiAgICBjb25zdCB2YXJpYW50cyA9IHtcclxuICAgICAgY29udGFpbmVyOiB7XHJcbiAgICAgICAgYW5pbWF0ZToge1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjoge1xyXG4gICAgICAgICAgICBzdGFnZ2VyQ2hpbGRyZW46IDAuNVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgZGl2OiB7XHJcbiAgICAgICAgaW5pdGlhbDoge1xyXG4gICAgICAgICAgb3BhY2l0eTogMCxcclxuICAgICAgICAgIHg6IC0yMDBcclxuICAgICAgICB9LFxyXG4gICAgXHJcbiAgICAgICAgYW5pbWF0ZToge1xyXG4gICAgICAgICAgb3BhY2l0eTogMSxcclxuICAgICAgICAgIHg6IDBcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgPEhlYWRlci8+XHJcbiAgICAgICAgICA8c2VjdGlvbiBjbGFzcz1cInRleHQtZ3JheS02MDAgYm9keS1mb250XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXIgcHgtNSBweS0yNCBteC1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgPG1vdGlvbi5kaXYgY2xhc3M9XCJmbGV4IGZsZXgtY29sIHRleHQtY2VudGVyIHctZnVsbCBtYi0yMFwiXHJcbiAgICAgICAgICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeTogMjAwIH19XHJcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSwgeTogMCB9fSAgPlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwidGV4dC1pbmRpZ28tNTAwIHRyYWNraW5nLXdpZGVzdCBmb250LW1lZGl1bSB0aXRsZS1mb250IG1iLTFcIj7lvKAg5oWnPC9oMj5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzcz1cInNtOnRleHQtM3hsIHRleHQtMnhsIGZvbnQtbWVkaXVtIHRpdGxlLWZvbnQgbWItNCB0ZXh0LWdyYXktOTAwXCI+PHNwYW4gY2xhc3M9XCJ0ZXh0LXhzXCI+5YeGICAgICAgPC9zcGFuPuazqOWGjOS8muiuoeW4iDwvaDE+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImxnOnctMi8zIG14LWF1dG8gbGVhZGluZy1yZWxheGVkIHRleHQtYmFzZVwiPklmIHRoZXJlIGlzIGFuIG9wcG9ydHVuaXR5IGZvciBtZSB0byBkbyBpdC4gSSBhbSByZWFkeSE8L3A+XHJcbiAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgICAgICAgICAgIDxtb3Rpb24uZGl2IGNsYXNzPVwiZmxleCBmbGV4LXdyYXBcIlxyXG4gICAgICAgICAgICAgICAgLy8gaW5pdGlhbD17eyBvcGFjaXR5OiAwLCB4OiAtMjAwIH19XHJcbiAgICAgICAgICAgICAgICAvLyBhbmltYXRlPXt7IG9wYWNpdHk6IDEsIHg6IDAgfX0gIFxyXG4gICAgICAgICAgICAgICAgaW5pdGlhbD1cImluaXRpYWxcIlxyXG4gICAgICAgICAgICAgICAgYW5pbWF0ZT1cImFuaW1hdGVcIlxyXG4gICAgICAgICAgICAgICAgdmFyaWFudHM9e3ZhcmlhbnRzLmNvbnRhaW5lcn0gICBcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2IGNsYXNzPVwieGw6dy0xLzMgbGc6dy0xLzIgbWQ6dy1mdWxsIHB4LTggcHktNiBib3JkZXItbC0yIGJvcmRlci1ncmF5LTIwMCBib3JkZXItb3BhY2l0eS02MFwiXHJcbiAgICAgICAgICAgICAgICB2YXJpYW50cz17dmFyaWFudHMuZGl2fSAgIFxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJ0ZXh0LWxnIHNtOnRleHQteGwgdGV4dC1ncmF5LTkwMCBmb250LW1lZGl1bSB0aXRsZS1mb250IG1iLTJcIj7kuLDlr4znmoTlt6XkvZznu4/pqow8L2gyPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImxlYWRpbmctcmVsYXhlZCB0ZXh0LWJhc2UgbWItNFwiPuaLpeacieWFreW5tOeahOi0ouWKoeW3peS9nOe7j+mqjO+8jOeGn+aCieWbveWutuS8muiuoeWItuW6puWSjOWHhuWImeWPiuebuOWFs+eojuazleaUv+etlu+8jOiDveWBmuWlveS6i+WJjeeahOeojuWKoeetluWIkuOAgei0ouWKoemihOeul++8jOWQiOeQhuWuieaOkuWFrOWPuOeahOeojui0n++8jOWNj+iwg+WkhOeQhuWlveWFrOWPuOS4jumTtuihjOOAgeeojuWxgOOAgeW3peWVhuetiemDqOmXqOeahOWFs+ezu++8jOWHj+WwkeWFrOWPuOeahOi0ouWKoeWSjOeojuWKoemjjumZqeOAgjwvcD5cclxuICAgICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPG1vdGlvbi5kaXYgY2xhc3M9XCJ4bDp3LTEvMyBsZzp3LTEvMiBtZDp3LWZ1bGwgcHgtOCBweS02IGJvcmRlci1sLTIgYm9yZGVyLWdyYXktMjAwIGJvcmRlci1vcGFjaXR5LTYwXCIgdmFyaWFudHM9e3ZhcmlhbnRzLmRpdn0gICA+XHJcbiAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cInRleHQtbGcgc206dGV4dC14bCB0ZXh0LWdyYXktOTAwIGZvbnQtbWVkaXVtIHRpdGxlLWZvbnQgbWItMlwiPuWWhOS6juS7juWFqOWxgOWHuuWPkeiAg+iZkemXrumimDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibGVhZGluZy1yZWxheGVkIHRleHQtYmFzZSBtYi00XCI+6IO95aSf54us56uL5YWo6Z2i5aSE55CG5YWs5Y+455qE5YWo55uY6LSm5Yqh77yM5a+55LiA6Iis57qz56iO5Lq65LyB5Lia56iO5Yqh5pON5L2c54af5oKJ77yM5bm25a+56LSi5Yqh5oql6KGo5pyJ6Imv5aW955qE5YiG5p6Q6IO95Yqb44CCPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8bW90aW9uLmRpdiBjbGFzcz1cInhsOnctMS8zIGxnOnctMS8yIG1kOnctZnVsbCBweC04IHB5LTYgYm9yZGVyLWwtMiBib3JkZXItZ3JheS0yMDAgYm9yZGVyLW9wYWNpdHktNjBcIiB2YXJpYW50cz17dmFyaWFudHMuZGl2fSA+XHJcbiAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cInRleHQtbGcgc206dGV4dC14bCB0ZXh0LWdyYXktOTAwIGZvbnQtbWVkaXVtIHRpdGxlLWZvbnQgbWItMlwiPuW3peS9nOacieaAneaDs+aciea0u+WKmzwvaDI+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibGVhZGluZy1yZWxheGVkIHRleHQtYmFzZSBtYi00XCI+5pys5Lq65oCn5qC85byA5pyX5YW35Lqy5ZKM5Yqb77yM5LmQ6KeC6IC/55u077yM6K+a5a6e5a6I5L+h77yb6IO95ZCD6Ium6ICQ5Yqz77yM5ZaE5LqO5LiO5Lq65rKf6YCa77yM5pyJ6L6D5by655qE5bel5L2c6LSj5Lu75b+D5ZKM5pWs5Lia57K+56We44CCPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJ0ZXh0LWdyYXktNjAwIGJvZHktZm9udFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciBweC01IHB5LTI0IG14LWF1dG9cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggZmxleC13cmFwIHctZnVsbCBtYi0yMFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZzp3LTEvMiB3LWZ1bGwgbWItNiBsZzptYi0wXCI+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3M9XCJzbTp0ZXh0LTN4bCB0ZXh0LTJ4bCBmb250LW1lZGl1bSB0aXRsZS1mb250IG1iLTIgdGV4dC1ncmF5LTkwMFwiPuiBjOWcuue7j+WOhjwvaDE+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaC0xIHctMjAgYmctaW5kaWdvLTUwMCByb3VuZGVkXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3M9XCJsZzp3LTEvMiB3LWZ1bGwgbGVhZGluZy1yZWxheGVkIHRleHQtZ3JheS01MDBcIj48L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBmbGV4LXdyYXAgLW0tNFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ4bDp3LTEvMiBtZDp3LTEvMiBwLTRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJiZy1ncmF5LTEwMCBwLTYgcm91bmRlZC1sZ1wiPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwiaC0yMDAgcm91bmRlZCB3LTIwMCBvYmplY3QtY292ZXIgb2JqZWN0LWNlbnRlciBtYi02XCIgc3JjPVwiaHR0cHM6Ly9pbWFnZS5xY2MuY29tL2F1dG8vN2ZjMTJmYjI5M2I4ZDkzOWY4N2RhZDI3ZTU4OGYzNzUuanBnP3gtb3NzLXByb2Nlc3M9c3R5bGUvbG9nb18yMDBcIiBhbHQ9XCJjb250ZW50XCIvPlxyXG4gICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJ0cmFja2luZy13aWRlc3QgdGV4dC1pbmRpZ28tNTAwIHRleHQteHMgZm9udC1tZWRpdW0gdGl0bGUtZm9udFwiPuWNl+mYs+aWueWchjwvaDM+XHJcbiAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cInRleHQtbGcgdGV4dC1ncmF5LTkwMCBmb250LW1lZGl1bSB0aXRsZS1mb250IG1iLTRcIj48L2gyPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImxlYWRpbmctcmVsYXhlZCB0ZXh0LWJhc2VcIj7miJDnq4vkuo4xOTk4LTA2LTAx77yM5LyB5Lia5Zyw5Z2A5L2N5LqO5Y2X6Ziz5biC5paH5YyW6LevMTg55Y+344CCPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInhsOnctMS8yIG1kOnctMS8yIHAtNFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJnLWdyYXktMTAwIHAtNiByb3VuZGVkLWxnXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJoLTIwMCByb3VuZGVkIHctMjAwIG9iamVjdC1jb3ZlciBvYmplY3QtY2VudGVyIG1iLTZcIiBzcmM9XCJodHRwczovL2ltYWdlLnFjYy5jb20vbG9nby9jNzI1ZDVmOWY0ZTQzZTZlYjk4MjQwMGU1ZTY2M2VmOS5qcGc/eC1vc3MtcHJvY2Vzcz1zdHlsZS9sb2dvXzIwMFwiIGFsdD1cImNvbnRlbnRcIi8+XHJcbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cInRyYWNraW5nLXdpZGVzdCB0ZXh0LWluZGlnby01MDAgdGV4dC14cyBmb250LW1lZGl1bSB0aXRsZS1mb250XCI+5Y2a6ZuG5aSp5Y23PC9oMz5cclxuICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwidGV4dC1sZyB0ZXh0LWdyYXktOTAwIGZvbnQtbWVkaXVtIHRpdGxlLWZvbnQgbWItNFwiPjwvaDI+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibGVhZGluZy1yZWxheGVkIHRleHQtYmFzZVwiPuWbveacieaOp+iCoeS8geS4mu+8jOS4u+iQpeS4muWKoeS4uuaWh+WMluS8oOWqkuOAgeWGheWuueaPkOS+m+OAgeWHuueJiOWIm+aEj+OAgeaVsOWtl+WHuueJiOS7peWPiuS9nOWutue7j+e6quWSjOaWh+WMluacjeWKoeetieOAgjwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgIFxyXG5cclxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cInRleHQtZ3JheS02MDAgYm9keS1mb250IFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXIgcHgtNSBweS0yNCBteC1hdXRvXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBmbGV4LXdyYXAgdy1mdWxsIG1iLTIwIGZsZXgtY29sIGl0ZW1zLWNlbnRlciB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3M9XCJzbTp0ZXh0LTN4bCB0ZXh0LTJ4bCBmb250LW1lZGl1bSB0aXRsZS1mb250IG1iLTIgdGV4dC1ncmF5LTkwMFwiPuaJp+S4mui1hOagvDwvaDE+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzPVwibGc6dy0xLzIgdy1mdWxsIGxlYWRpbmctcmVsYXhlZCB0ZXh0LWdyYXktNTAwXCI+PC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBmbGV4LXdyYXAgLW0tNFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwieGw6dy0xLzMgbWQ6dy0xLzIgcC00XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJvcmRlciBib3JkZXItZ3JheS0yMDAgcC02IHJvdW5kZWQtbGdcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LTEwIGgtMTAgaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQtZnVsbCB0ZXh0LWluZGlnby01MDAgbWItNFwiPlxyXG4gICAgICAgICAgICAgICAgICA8c3ZnIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgc3Ryb2tlLXdpZHRoPVwiMlwiIGNsYXNzPVwidy02IGgtNlwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTQgMTVzMS0xIDQtMSA1IDIgOCAyIDQtMSA0LTFWM3MtMSAxLTQgMS01LTItOC0yLTQgMS00IDF6TTQgMjJ2LTdcIj48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJ0ZXh0LWxnIGZvbnQtbWVkaXVtIHRpdGxlLWZvbnQgbWItMiB0ZXh0LWdyYXktOTAwXCI+5Yid57qn5Lya6K6h5biIPC9oMj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibGVhZGluZy1yZWxheGVkIHRleHQtYmFzZVwiPjIwMTjlubTpgJrov4c8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwieGw6dy0xLzMgbWQ6dy0xLzIgcC00XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJvcmRlciBib3JkZXItZ3JheS0yMDAgcC02IHJvdW5kZWQtbGdcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LTEwIGgtMTAgaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQtZnVsbCBiZy1pbmRpZ28tMTAwIHRleHQtaW5kaWdvLTUwMCBtYi00XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzdmcgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBzdHJva2Utd2lkdGg9XCIyXCIgY2xhc3M9XCJ3LTYgaC02XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTIgMjJzOC00IDgtMTBWNWwtOC0zLTggM3Y3YzAgNiA4IDEwIDggMTB6XCI+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwidGV4dC1sZyBmb250LW1lZGl1bSB0aXRsZS1mb250IG1iLTIgdGV4dC1ncmF5LTkwMCBcIj7kuK3nuqfkvJrorqHluIg8L2gyPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJsZWFkaW5nLXJlbGF4ZWQgdGV4dC1iYXNlXCI+MjAyMeW5tOmAmui/hzwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ4bDp3LTEvMyBtZDp3LTEvMiBwLTRcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm9yZGVyIGJvcmRlci1ncmF5LTIwMCBwLTYgcm91bmRlZC1sZ1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctMTAgaC0xMCBpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcm91bmRlZC1mdWxsIGJnLWluZGlnby0xMDAgdGV4dC1pbmRpZ28tNTAwIG1iLTRcIj5cclxuICAgICAgICAgICAgICAgICAgPHN2ZyBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZS13aWR0aD1cIjJcIiBjbGFzcz1cInctNiBoLTZcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0yMCAyMXYtMmE0IDQgMCAwMC00LTRIOGE0IDQgMCAwMC00IDR2MlwiPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PVwiMTJcIiBjeT1cIjdcIiByPVwiNFwiPjwvY2lyY2xlPlxyXG4gICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwidGV4dC1sZyB0ZXh0LWdyYXktOTAwIGZvbnQtbWVkaXVtIHRpdGxlLWZvbnQgbWItMlwiPuazqOWGjOS8muiuoeW4iDwvaDI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImxlYWRpbmctcmVsYXhlZCB0ZXh0LWJhc2VcIj7pooTorqEyMDIy5bm06YCa6L+HPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwidGV4dC1ncmF5LTYwMCBib2R5LWZvbnQgb3ZlcmZsb3ctaGlkZGVuXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyIHB4LTUgcHktMjQgbXgtYXV0b1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBmbGV4LXdyYXAgLW0tMTJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicC0xMiBtZDp3LTEvMiBmbGV4IGZsZXgtY29sIGl0ZW1zLXN0YXJ0XCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImlubGluZS1ibG9jayBweS0xIHB4LTIgcm91bmRlZCBiZy1pbmRpZ28tNTAgdGV4dC1pbmRpZ28tNTAwIHRleHQteHMgZm9udC1tZWRpdW0gdHJhY2tpbmctd2lkZXN0XCI+S25vd2xlZGdlczwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cInNtOnRleHQtM3hsIHRleHQtMnhsIHRpdGxlLWZvbnQgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTkwMCBtdC00IG1iLTRcIj7lpoLkvZXnnIvlvoXmiYDosJPnmoTnqI7liqHnrbnliJLvvIzliIbkuqsxN+S4quaPkOmGku+8gTwvaDI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImxlYWRpbmctcmVsYXhlZCBtYi04XCI+5o+Q6YaS5LiA77ya5YGa5aW956iO5Yqh56255YiS77yM6LSi5Yqh5LiN5LuF5piv6ZyA6KaB5rex5Yi75LqG6Kej56iO5pS25pS/562W44CB56iO5rOV44CB5YW25LuW55u45YWz55qE5LiA5Lqb5rOV5b6L5rOV6KeE562J77yM6L+Y6KaB5LiO5b2T5Zyw56iO5Yqh5bGA5rKf6YCa77yM5LqG6Kej55u45YWz56iO5Yqh5aSE55CG5pe255qE5b6B566h5Y+j5b6E44CC5pyJ5Lqb5Lq65ou/5Yiw56iO5pS25LyY5oOg5pS/562W77yM5Lya55Sf5pCs56Gs5aWX5Zyw6L+Q55So77yM57uT5p6c5ryP5rSe55m+5Ye644CB6bq754Om5LiN5pat44CCPC9wPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggaXRlbXMtY2VudGVyIGZsZXgtd3JhcCBwYi00IG1iLTQgYm9yZGVyLWItMiBib3JkZXItZ3JheS0xMDAgbXQtYXV0byB3LWZ1bGxcIj5cclxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJ0ZXh0LWluZGlnby01MDAgaW5saW5lLWZsZXggaXRlbXMtY2VudGVyXCIgaHJlZj1cIi9Ib3dfdG9fdmlld190aGVfc28tY2FsbGVkX3RheF9wbGFubmluZ1wiPkxlYXJuIE1vcmVcclxuICAgICAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzPVwidy00IGgtNCBtbC0yXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZS13aWR0aD1cIjJcIiBmaWxsPVwibm9uZVwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk01IDEyaDE0XCI+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xMiA1bDcgNy03IDdcIj48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwLTEyIG1kOnctMS8yIGZsZXggZmxleC1jb2wgaXRlbXMtc3RhcnRcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5saW5lLWJsb2NrIHB5LTEgcHgtMiByb3VuZGVkIGJnLWluZGlnby01MCB0ZXh0LWluZGlnby01MDAgdGV4dC14cyBmb250LW1lZGl1bSB0cmFja2luZy13aWRlc3RcIj5Lbm93bGVkZ2VzPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwic206dGV4dC0zeGwgdGV4dC0yeGwgdGl0bGUtZm9udCBmb250LW1lZGl1bSB0ZXh0LWdyYXktOTAwIG10LTQgbWItNFwiPjIwMjHlkITooYzkuJrmnIDmlrDigJzpooTorabnqI7otJ/njofigJ3lpKflhag8L2gyPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJsZWFkaW5nLXJlbGF4ZWQgbWItOFwiPumHkeeojuS4ieacn+aWveihjOS7peadpeeojuaUtuivhOS8sOeahOWFreWkp+mihOitpuaMh+agh++8jOW7uuiuruS8muiuoeS6uuWRmOWtpuS5oOaUtuiXj++8gTwvcD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGl0ZW1zLWNlbnRlciBmbGV4LXdyYXAgcGItNCBtYi00IGJvcmRlci1iLTIgYm9yZGVyLWdyYXktMTAwIG10LWF1dG8gdy1mdWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwidGV4dC1pbmRpZ28tNTAwIGlubGluZS1mbGV4IGl0ZW1zLWNlbnRlclwiIGhyZWY9XCIvMjAyMV93YXJuaW5nX3RheF9yYXRlXCI+TGVhcm4gTW9yZVxyXG4gICAgICAgICAgICAgICAgICAgIDxzdmcgY2xhc3M9XCJ3LTQgaC00IG1sLTJcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlLXdpZHRoPVwiMlwiIGZpbGw9XCJub25lXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTUgMTJoMTRcIj48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTEyIDVsNyA3LTcgN1wiPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDxGb290ZXIvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgXHJcbiAgICApXHJcbn0iLCJcclxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIlxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb290ZXIoKSB7XHJcbiAgICByZXR1cm4gKCAgXHJcbiAgICAgICAgPD5cclxuICAgICAgICA8Zm9vdGVyIGNsYXNzPVwidGV4dC1ncmF5LTYwMCBib2R5LWZvbnRcIj5cclxuICAgICAgICAgICAgPG1vdGlvbi5kaXZcclxuICAgICAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHk6IDIwMCB9fVxyXG4gICAgICAgICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSwgeTogMCB9fSAgXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciBteC1hdXRvIHB5LTQgcHgtNSBmbGV4IGZsZXgtd3JhcCBmbGV4LWNvbCBzbTpmbGV4LXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJmbGV4IHRpdGxlLWZvbnQgZm9udC1tZWRpdW0gaXRlbXMtY2VudGVyIG1kOmp1c3RpZnktc3RhcnQganVzdGlmeS1jZW50ZXIgdGV4dC1ncmF5LTUwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGNsYXNzTmFtZT1cImgtNSB3LTVcIiB2aWV3Qm94PVwiMCAwIDIwIDIwXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGZpbGxSdWxlPVwiZXZlbm9kZFwiIGQ9XCJNNS4wNSA0LjA1YTcgNyAwIDExOS45IDkuOUwxMCAxOC45bC00Ljk1LTQuOTVhNyA3IDAgMDEwLTkuOXpNMTAgMTFhMiAyIDAgMTAwLTQgMiAyIDAgMDAwIDR6XCIgY2xpcFJ1bGU9XCJldmVub2RkXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1sLTMgdGV4dC14bFwiPuays+WNlyDljZfpmLM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImZsZXggdGl0bGUtZm9udCBmb250LW1lZGl1bSBpdGVtcy1jZW50ZXIgbWQ6anVzdGlmeS1zdGFydCBqdXN0aWZ5LWNlbnRlciB0ZXh0LWdyYXktNTAwIHNtOm1sLTQgc206cGwtNCBzbTpib3JkZXItbC0yIHNtOmJvcmRlci1ncmF5LTIwMCBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBjbGFzc05hbWU9XCJoLTUgdy01XCIgdmlld0JveD1cIjAgMCAyMCAyMFwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0yIDNhMSAxIDAgMDExLTFoMi4xNTNhMSAxIDAgMDEuOTg2LjgzNmwuNzQgNC40MzVhMSAxIDAgMDEtLjU0IDEuMDZsLTEuNTQ4Ljc3M2ExMS4wMzcgMTEuMDM3IDAgMDA2LjEwNSA2LjEwNWwuNzc0LTEuNTQ4YTEgMSAwIDAxMS4wNTktLjU0bDQuNDM1Ljc0YTEgMSAwIDAxLjgzNi45ODZWMTdhMSAxIDAgMDEtMSAxaC0yQzcuODIgMTggMiAxMi4xOCAyIDVWM3pcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWwtMyB0ZXh0LXhsXCI+MTgyMzc3MTUyMTY8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRleHQtc20gdGV4dC1ncmF5LTUwMCBzbTptbC00IHNtOnBsLTQgc206Ym9yZGVyLWwtMiBzbTpib3JkZXItZ3JheS0yMDAgc206cHktMiBzbTptdC0wIG10LTRcIj7CqSAyMDIyIDxhIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL2tueXR0bmV2ZVwiIGNsYXNzPVwidGV4dC1ncmF5LTYwMCBtbC0xXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiIHRhcmdldD1cIl9ibGFua1wiPkBodW5rPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImlubGluZS1mbGV4IHNtOm1sLWF1dG8gc206bXQtMCBtdC00IGp1c3RpZnktY2VudGVyIHNtOmp1c3RpZnktc3RhcnRcIj5cclxuICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vd2ViaWZ5LmNsb3VkYmFzZS5uZXQvXCJcclxuICAgICAgICAgICAgICAgID4g44CMUG93ZXJlZCBieSBDbG91ZEJhc2UgV2ViaWZ544CNPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgICAgIDwvZm9vdGVyPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcbiIsIlxyXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxoZWFkZXIgY2xhc3M9XCJ0ZXh0LWdyYXktNjAwIGJvZHktZm9udFwiPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPG1vdGlvbi5kaXZcclxuICAgICAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHk6IC0yMDAgfX1cclxuICAgICAgICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEsIHk6IDAgfX0gIFxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXIgbXgtYXV0byBmbGV4IGZsZXgtd3JhcCBwLTUgZmxleC1jb2wgbWQ6ZmxleC1yb3cgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImZsZXggdGl0bGUtZm9udCBmb250LW1lZGl1bSBpdGVtcy1jZW50ZXIgdGV4dC1ncmF5LTkwMCBtYi00IG1kOm1iLTBcIj5cclxuICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgc3Ryb2tlLXdpZHRoPVwiMlwiIGNsYXNzPVwidy0xMCBoLTEwIHRleHQtd2hpdGUgcC0yIGJnLWluZGlnby01MDAgcm91bmRlZC1mdWxsXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTIgMkwyIDdsMTAgNSAxMC01LTEwLTV6TTIgMTdsMTAgNSAxMC01TTIgMTJsMTAgNSAxMC01XCI+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1sLTMgdGV4dC14bFwiPuW8oOaFp+eahOiBjOWcujwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIHsvKiA8bmF2IGNsYXNzPVwibWQ6bXItYXV0byBtZDptbC00IG1kOnB5LTEgbWQ6cGwtNCBtZDpib3JkZXItbCBtZDpib3JkZXItZ3JheS00MDBcdGZsZXggZmxleC13cmFwIGl0ZW1zLWNlbnRlciB0ZXh0LWJhc2UganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwibXItNSBob3Zlcjp0ZXh0LWdyYXktOTAwXCI+5pyN5YqhPC9hPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJtci01IGhvdmVyOnRleHQtZ3JheS05MDBcIj7lm6LpmJ88L2E+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzcz1cIm1yLTUgaG92ZXI6dGV4dC1ncmF5LTkwMFwiPuWQiOS9nOS8meS8tDwvYT5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwibXItNSBob3Zlcjp0ZXh0LWdyYXktOTAwXCI+6IGU57O75oiR5LusPC9hPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJtci01IGhvdmVyOnRleHQtZ3JheS05MDBcIiBocmVmPScvc29mdHdhcmVfZGV2ZWxvcG1lbnQnID7ova/ku7blvIDlj5E8L2E+XHJcbiAgICAgICAgICAgICAgICA8L25hdj4gKi99XHJcbiAgICAgICAgICAgICAgICA8bmF2IGNsYXNzPVwibWQ6bXItYXV0byBtZDptbC00IG1kOnB5LTEgbWQ6cGwtNCBtZDpib3JkZXItbCBtZDpib3JkZXItZ3JheS00MDBcdGZsZXggZmxleC13cmFwIGl0ZW1zLWNlbnRlciB0ZXh0LWJhc2UganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwibXItNSBob3Zlcjp0ZXh0LWdyYXktOTAwXCI+RW5nbGlzaDwvYT5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwibXItNSBob3Zlcjp0ZXh0LWdyYXktOTAwXCI+RXNwYcOxb2w8L2E+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzcz1cIm1yLTUgaG92ZXI6dGV4dC1ncmF5LTkwMFwiPkZyYW7Dp2FpczwvYT5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwibXItNSBob3Zlcjp0ZXh0LWdyYXktOTAwXCI+5Lit5paHPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9uYXY+XHJcblxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGJnLWdyYXktMTAwIGJvcmRlci0wIHB5LTEgcHgtMyBmb2N1czpvdXRsaW5lLW5vbmUgaG92ZXI6YmctZ3JheS0yMDAgcm91bmRlZCB0ZXh0LWJhc2UgbXQtNCBtZDptdC0wXCIgY29udHJvbC1pZD1cIkNvbnRyb2xJRC04M1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9Jy8nPkhvbWU8L2E+XHJcbiAgICAgICAgICAgICAgICA8c3ZnIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgc3Ryb2tlLXdpZHRoPVwiMlwiIGNsYXNzPVwidy00IGgtNCBtbC0xXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNNSAxMmgxNE0xMiA1bDcgNy03IDdcIj48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgICAgIDwvaGVhZGVyPlxyXG4gICAgKVxyXG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnJhbWVyLW1vdGlvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sIm5hbWVzIjpbInN0eWxlcyIsIkhlYWRlciIsIkZvb3RlciIsIm1vdGlvbiIsIkFnZW50Qm9va2tlZXBpbmciLCJ2YXJpYW50cyIsImNvbnRhaW5lciIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwic3RhZ2dlckNoaWxkcmVuIiwiZGl2IiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJ4IiwieSJdLCJzb3VyY2VSb290IjoiIn0=
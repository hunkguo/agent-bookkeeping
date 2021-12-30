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
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_agent_bookkeeping_footer__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 144,
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
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UUFBQUEsQ0FBQyxFQUFFLENBQUM7QUFBbEIsT0FEWDtBQUVFLGFBQU8sRUFBRTtBQUFFRixRQUFBQSxPQUFPLEVBQUUsQ0FBWDtBQUFjRSxRQUFBQSxDQUFDLEVBQUU7QUFBakIsT0FGWDtBQUFBLDZCQUlBO0FBQUssYUFBSyxFQUFDLHdFQUFYO0FBQUEsK0JBQ0k7QUFBRyxlQUFLLEVBQUMscUVBQVQ7QUFBQSxrQ0FDQTtBQUFLLGlCQUFLLEVBQUMsNEJBQVg7QUFBd0MsZ0JBQUksRUFBQyxNQUE3QztBQUFvRCxrQkFBTSxFQUFDLGNBQTNEO0FBQTBFLDhCQUFlLE9BQXpGO0FBQWlHLCtCQUFnQixPQUFqSDtBQUF5SCw0QkFBYSxHQUF0STtBQUEwSSxpQkFBSyxFQUFDLHFEQUFoSjtBQUFzTSxtQkFBTyxFQUFDLFdBQTlNO0FBQUEsbUNBQ0k7QUFBTSxlQUFDLEVBQUM7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFEQSxlQUlBO0FBQU0saUJBQUssRUFBQyxjQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBK0JIOzs7Ozs7Ozs7O0FDbkNEOzs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LXNzZy1zdGFydGVyLy4vcGFnZXMvYWdlbnRfYm9va2tlZXBpbmcuanMiLCJ3ZWJwYWNrOi8vbmV4dC1zc2ctc3RhcnRlci8uL3BhZ2VzL2NvbXBvbmVudHMvYWdlbnRfYm9va2tlZXBpbmcvZm9vdGVyLmpzIiwid2VicGFjazovL25leHQtc3NnLXN0YXJ0ZXIvLi9wYWdlcy9jb21wb25lbnRzL2FnZW50X2Jvb2trZWVwaW5nL2hlYXJkZXIuanMiLCJ3ZWJwYWNrOi8vbmV4dC1zc2ctc3RhcnRlci9leHRlcm5hbCBcImZyYW1lci1tb3Rpb25cIiIsIndlYnBhY2s6Ly9uZXh0LXNzZy1zdGFydGVyL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vY29tcG9uZW50cy9hZ2VudF9ib29ra2VlcGluZy9oZWFyZGVyJ1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vY29tcG9uZW50cy9hZ2VudF9ib29ra2VlcGluZy9mb290ZXInXHJcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCJcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBZ2VudEJvb2trZWVwaW5nKCkge1xyXG4gICAgY29uc3QgdmFyaWFudHMgPSB7XHJcbiAgICAgIGNvbnRhaW5lcjoge1xyXG4gICAgICAgIGFuaW1hdGU6IHtcclxuICAgICAgICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgICAgICAgc3RhZ2dlckNoaWxkcmVuOiAwLjVcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGRpdjoge1xyXG4gICAgICAgIGluaXRpYWw6IHtcclxuICAgICAgICAgIG9wYWNpdHk6IDAsXHJcbiAgICAgICAgICB4OiAtMjAwXHJcbiAgICAgICAgfSxcclxuICAgIFxyXG4gICAgICAgIGFuaW1hdGU6IHtcclxuICAgICAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgICAgICB4OiAwXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgIDxIZWFkZXIvPlxyXG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJ0ZXh0LWdyYXktNjAwIGJvZHktZm9udFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyIHB4LTUgcHktMjQgbXgtYXV0b1wiPlxyXG4gICAgICAgICAgICAgIDxtb3Rpb24uZGl2IGNsYXNzPVwiZmxleCBmbGV4LWNvbCB0ZXh0LWNlbnRlciB3LWZ1bGwgbWItMjBcIlxyXG4gICAgICAgICAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHk6IDIwMCB9fVxyXG4gICAgICAgICAgICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEsIHk6IDAgfX0gID5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cInRleHQtaW5kaWdvLTUwMCB0cmFja2luZy13aWRlc3QgZm9udC1tZWRpdW0gdGl0bGUtZm9udCBtYi0xXCI+5bygIOaFpzwvaDI+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3M9XCJzbTp0ZXh0LTN4bCB0ZXh0LTJ4bCBmb250LW1lZGl1bSB0aXRsZS1mb250IG1iLTQgdGV4dC1ncmF5LTkwMFwiPjxzcGFuIGNsYXNzPVwidGV4dC14c1wiPuWHhiAgICAgIDwvc3Bhbj7ms6jlhozkvJrorqHluIg8L2gxPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJsZzp3LTIvMyBteC1hdXRvIGxlYWRpbmctcmVsYXhlZCB0ZXh0LWJhc2VcIj5JZiB0aGVyZSBpcyBhbiBvcHBvcnR1bml0eSBmb3IgbWUgdG8gZG8gaXQuIEkgYW0gcmVhZHkhPC9wPlxyXG4gICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgICAgICAgICAgICA8bW90aW9uLmRpdiBjbGFzcz1cImZsZXggZmxleC13cmFwXCJcclxuICAgICAgICAgICAgICAgIC8vIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeDogLTIwMCB9fVxyXG4gICAgICAgICAgICAgICAgLy8gYW5pbWF0ZT17eyBvcGFjaXR5OiAxLCB4OiAwIH19ICBcclxuICAgICAgICAgICAgICAgIGluaXRpYWw9XCJpbml0aWFsXCJcclxuICAgICAgICAgICAgICAgIGFuaW1hdGU9XCJhbmltYXRlXCJcclxuICAgICAgICAgICAgICAgIHZhcmlhbnRzPXt2YXJpYW50cy5jb250YWluZXJ9ICAgXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8bW90aW9uLmRpdiBjbGFzcz1cInhsOnctMS8zIGxnOnctMS8yIG1kOnctZnVsbCBweC04IHB5LTYgYm9yZGVyLWwtMiBib3JkZXItZ3JheS0yMDAgYm9yZGVyLW9wYWNpdHktNjBcIlxyXG4gICAgICAgICAgICAgICAgdmFyaWFudHM9e3ZhcmlhbnRzLmRpdn0gICBcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwidGV4dC1sZyBzbTp0ZXh0LXhsIHRleHQtZ3JheS05MDAgZm9udC1tZWRpdW0gdGl0bGUtZm9udCBtYi0yXCI+5Liw5a+M55qE5bel5L2c57uP6aqMPC9oMj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJsZWFkaW5nLXJlbGF4ZWQgdGV4dC1iYXNlIG1iLTRcIj7mi6XmnInlha3lubTnmoTotKLliqHlt6XkvZznu4/pqozvvIznhp/mgonlm73lrrbkvJrorqHliLbluqblkozlh4bliJnlj4rnm7jlhbPnqI7ms5XmlL/nrZbvvIzog73lgZrlpb3kuovliY3nmoTnqI7liqHnrZbliJLjgIHotKLliqHpooTnrpfvvIzlkIjnkIblronmjpLlhazlj7jnmoTnqI7otJ/vvIzljY/osIPlpITnkIblpb3lhazlj7jkuI7pk7booYzjgIHnqI7lsYDjgIHlt6XllYbnrYnpg6jpl6jnmoTlhbPns7vvvIzlh4/lsJHlhazlj7jnmoTotKLliqHlkoznqI7liqHpo47pmanjgII8L3A+XHJcbiAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2IGNsYXNzPVwieGw6dy0xLzMgbGc6dy0xLzIgbWQ6dy1mdWxsIHB4LTggcHktNiBib3JkZXItbC0yIGJvcmRlci1ncmF5LTIwMCBib3JkZXItb3BhY2l0eS02MFwiIHZhcmlhbnRzPXt2YXJpYW50cy5kaXZ9ICAgPlxyXG4gICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJ0ZXh0LWxnIHNtOnRleHQteGwgdGV4dC1ncmF5LTkwMCBmb250LW1lZGl1bSB0aXRsZS1mb250IG1iLTJcIj7lloTkuo7ku47lhajlsYDlh7rlj5HogIPomZHpl67popg8L2gyPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImxlYWRpbmctcmVsYXhlZCB0ZXh0LWJhc2UgbWItNFwiPuiDveWkn+eLrOeri+WFqOmdouWkhOeQhuWFrOWPuOeahOWFqOebmOi0puWKoe+8jOWvueS4gOiIrOe6s+eojuS6uuS8geS4mueojuWKoeaTjeS9nOeGn+aCie+8jOW5tuWvuei0ouWKoeaKpeihqOacieiJr+WlveeahOWIhuaekOiDveWKm+OAgjwvcD5cclxuICAgICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPG1vdGlvbi5kaXYgY2xhc3M9XCJ4bDp3LTEvMyBsZzp3LTEvMiBtZDp3LWZ1bGwgcHgtOCBweS02IGJvcmRlci1sLTIgYm9yZGVyLWdyYXktMjAwIGJvcmRlci1vcGFjaXR5LTYwXCIgdmFyaWFudHM9e3ZhcmlhbnRzLmRpdn0gPlxyXG4gICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJ0ZXh0LWxnIHNtOnRleHQteGwgdGV4dC1ncmF5LTkwMCBmb250LW1lZGl1bSB0aXRsZS1mb250IG1iLTJcIj7lt6XkvZzmnInmgJ3mg7PmnInmtLvlips8L2gyPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImxlYWRpbmctcmVsYXhlZCB0ZXh0LWJhc2UgbWItNFwiPuacrOS6uuaAp+agvOW8gOacl+WFt+S6suWSjOWKm++8jOS5kOinguiAv+ebtO+8jOivmuWunuWuiOS/oe+8m+iDveWQg+iLpuiAkOWKs++8jOWWhOS6juS4juS6uuayn+mAmu+8jOaciei+g+W8uueahOW3peS9nOi0o+S7u+W/g+WSjOaVrOS4mueyvuelnuOAgjwvcD5cclxuICAgICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9zZWN0aW9uPlxyXG5cclxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzPVwidGV4dC1ncmF5LTYwMCBib2R5LWZvbnRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXIgcHgtNSBweS0yNCBteC1hdXRvXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGZsZXgtd3JhcCB3LWZ1bGwgbWItMjBcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGc6dy0xLzIgdy1mdWxsIG1iLTYgbGc6bWItMFwiPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzPVwic206dGV4dC0zeGwgdGV4dC0yeGwgZm9udC1tZWRpdW0gdGl0bGUtZm9udCBtYi0yIHRleHQtZ3JheS05MDBcIj7ogYzlnLrnu4/ljoY8L2gxPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImgtMSB3LTIwIGJnLWluZGlnby01MDAgcm91bmRlZFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzPVwibGc6dy0xLzIgdy1mdWxsIGxlYWRpbmctcmVsYXhlZCB0ZXh0LWdyYXktNTAwXCI+PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggZmxleC13cmFwIC1tLTRcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwieGw6dy0xLzIgbWQ6dy0xLzIgcC00XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYmctZ3JheS0xMDAgcC02IHJvdW5kZWQtbGdcIj5cclxuICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cImgtMjAwIHJvdW5kZWQgdy0yMDAgb2JqZWN0LWNvdmVyIG9iamVjdC1jZW50ZXIgbWItNlwiIHNyYz1cImh0dHBzOi8vaW1hZ2UucWNjLmNvbS9hdXRvLzdmYzEyZmIyOTNiOGQ5MzlmODdkYWQyN2U1ODhmMzc1LmpwZz94LW9zcy1wcm9jZXNzPXN0eWxlL2xvZ29fMjAwXCIgYWx0PVwiY29udGVudFwiLz5cclxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwidHJhY2tpbmctd2lkZXN0IHRleHQtaW5kaWdvLTUwMCB0ZXh0LXhzIGZvbnQtbWVkaXVtIHRpdGxlLWZvbnRcIj7ljZfpmLPmlrnlnIY8L2gzPlxyXG4gICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJ0ZXh0LWxnIHRleHQtZ3JheS05MDAgZm9udC1tZWRpdW0gdGl0bGUtZm9udCBtYi00XCI+PC9oMj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJsZWFkaW5nLXJlbGF4ZWQgdGV4dC1iYXNlXCI+5oiQ56uL5LqOMTk5OC0wNi0wMe+8jOS8geS4muWcsOWdgOS9jeS6juWNl+mYs+W4guaWh+WMlui3rzE4OeWPt+OAgjwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ4bDp3LTEvMiBtZDp3LTEvMiBwLTRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJiZy1ncmF5LTEwMCBwLTYgcm91bmRlZC1sZ1wiPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwiaC0yMDAgcm91bmRlZCB3LTIwMCBvYmplY3QtY292ZXIgb2JqZWN0LWNlbnRlciBtYi02XCIgc3JjPVwiaHR0cHM6Ly9pbWFnZS5xY2MuY29tL2xvZ28vYzcyNWQ1ZjlmNGU0M2U2ZWI5ODI0MDBlNWU2NjNlZjkuanBnP3gtb3NzLXByb2Nlc3M9c3R5bGUvbG9nb18yMDBcIiBhbHQ9XCJjb250ZW50XCIvPlxyXG4gICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJ0cmFja2luZy13aWRlc3QgdGV4dC1pbmRpZ28tNTAwIHRleHQteHMgZm9udC1tZWRpdW0gdGl0bGUtZm9udFwiPuWNmumbhuWkqeWNtzwvaDM+XHJcbiAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cInRleHQtbGcgdGV4dC1ncmF5LTkwMCBmb250LW1lZGl1bSB0aXRsZS1mb250IG1iLTRcIj48L2gyPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImxlYWRpbmctcmVsYXhlZCB0ZXh0LWJhc2VcIj7lm73mnInmjqfogqHkvIHkuJrvvIzkuLvokKXkuJrliqHkuLrmlofljJbkvKDlqpLjgIHlhoXlrrnmj5DkvpvjgIHlh7rniYjliJvmhI/jgIHmlbDlrZflh7rniYjku6Xlj4rkvZzlrrbnu4/nuqrlkozmlofljJbmnI3liqHnrYnjgII8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICBcclxuXHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJ0ZXh0LWdyYXktNjAwIGJvZHktZm9udCBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyIHB4LTUgcHktMjQgbXgtYXV0b1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggZmxleC13cmFwIHctZnVsbCBtYi0yMCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPGgxIGNsYXNzPVwic206dGV4dC0zeGwgdGV4dC0yeGwgZm9udC1tZWRpdW0gdGl0bGUtZm9udCBtYi0yIHRleHQtZ3JheS05MDBcIj7miafkuJrotYTmoLw8L2gxPlxyXG4gICAgICAgICAgICA8cCBjbGFzcz1cImxnOnctMS8yIHctZnVsbCBsZWFkaW5nLXJlbGF4ZWQgdGV4dC1ncmF5LTUwMFwiPjwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggZmxleC13cmFwIC1tLTRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInhsOnctMS8zIG1kOnctMS8yIHAtNFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3JkZXIgYm9yZGVyLWdyYXktMjAwIHAtNiByb3VuZGVkLWxnXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy0xMCBoLTEwIGlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLWZ1bGwgdGV4dC1pbmRpZ28tNTAwIG1iLTRcIj5cclxuICAgICAgICAgICAgICAgICAgPHN2ZyBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZS13aWR0aD1cIjJcIiBjbGFzcz1cInctNiBoLTZcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk00IDE1czEtMSA0LTEgNSAyIDggMiA0LTEgNC0xVjNzLTEgMS00IDEtNS0yLTgtMi00IDEtNCAxek00IDIydi03XCI+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwidGV4dC1sZyBmb250LW1lZGl1bSB0aXRsZS1mb250IG1iLTIgdGV4dC1ncmF5LTkwMFwiPuWInee6p+S8muiuoeW4iDwvaDI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImxlYWRpbmctcmVsYXhlZCB0ZXh0LWJhc2VcIj4yMDE45bm06YCa6L+HPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInhsOnctMS8zIG1kOnctMS8yIHAtNFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3JkZXIgYm9yZGVyLWdyYXktMjAwIHAtNiByb3VuZGVkLWxnXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy0xMCBoLTEwIGlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLWZ1bGwgYmctaW5kaWdvLTEwMCB0ZXh0LWluZGlnby01MDAgbWItNFwiPlxyXG4gICAgICAgICAgICAgICAgICA8c3ZnIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgc3Ryb2tlLXdpZHRoPVwiMlwiIGNsYXNzPVwidy02IGgtNlwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTEyIDIyczgtNCA4LTEwVjVsLTgtMy04IDN2N2MwIDYgOCAxMCA4IDEwelwiPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cInRleHQtbGcgZm9udC1tZWRpdW0gdGl0bGUtZm9udCBtYi0yIHRleHQtZ3JheS05MDAgXCI+5Lit57qn5Lya6K6h5biIPC9oMj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibGVhZGluZy1yZWxheGVkIHRleHQtYmFzZVwiPjIwMjHlubTpgJrov4c8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwieGw6dy0xLzMgbWQ6dy0xLzIgcC00XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJvcmRlciBib3JkZXItZ3JheS0yMDAgcC02IHJvdW5kZWQtbGdcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LTEwIGgtMTAgaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQtZnVsbCBiZy1pbmRpZ28tMTAwIHRleHQtaW5kaWdvLTUwMCBtYi00XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzdmcgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBzdHJva2Utd2lkdGg9XCIyXCIgY2xhc3M9XCJ3LTYgaC02XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMjAgMjF2LTJhNCA0IDAgMDAtNC00SDhhNCA0IDAgMDAtNCA0djJcIj48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBjeD1cIjEyXCIgY3k9XCI3XCIgcj1cIjRcIj48L2NpcmNsZT5cclxuICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cInRleHQtbGcgdGV4dC1ncmF5LTkwMCBmb250LW1lZGl1bSB0aXRsZS1mb250IG1iLTJcIj7ms6jlhozkvJrorqHluIg8L2gyPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJsZWFkaW5nLXJlbGF4ZWQgdGV4dC1iYXNlXCI+6aKE6K6hMjAyMuW5tOmAmui/hzwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG5cclxuICAgICAgICA8Rm9vdGVyLz5cclxuICAgICAgICA8Lz5cclxuICAgIFxyXG4gICAgKVxyXG59IiwiXHJcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCJcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9vdGVyKCkge1xyXG4gICAgcmV0dXJuICggIFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgPGZvb3RlciBjbGFzcz1cInRleHQtZ3JheS02MDAgYm9keS1mb250XCI+XHJcbiAgICAgICAgICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCB5OiAyMDAgfX1cclxuICAgICAgICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEsIHk6IDAgfX0gIFxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXIgbXgtYXV0byBweS00IHB4LTUgZmxleCBmbGV4LXdyYXAgZmxleC1jb2wgc206ZmxleC1yb3dcIj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGV4dC1zbSB0ZXh0LWdyYXktNTAwIHNtOm1sLTQgc206cGwtNCBzbTpib3JkZXItbC0yIHNtOmJvcmRlci1ncmF5LTIwMCBzbTpweS0yIHNtOm10LTAgbXQtNFwiPsKpIDIwMjAgPGEgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20va255dHRuZXZlXCIgY2xhc3M9XCJ0ZXh0LWdyYXktNjAwIG1sLTFcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCI+QGh1bms8L2E+XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5saW5lLWZsZXggc206bWwtYXV0byBzbTptdC0wIG10LTQganVzdGlmeS1jZW50ZXIgc206anVzdGlmeS1zdGFydFwiPuOAjFBvd2VyZWQgYnkgIFxyXG4gICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly93ZWJpZnkuY2xvdWRiYXNlLm5ldC9cIlxyXG4gICAgICAgICAgICAgICAgPiBDbG91ZEJhc2UgV2ViaWZ5PC9hPuOAjVxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgICAgIDwvZm9vdGVyPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcbiIsIlxyXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxoZWFkZXIgY2xhc3M9XCJ0ZXh0LWdyYXktNjAwIGJvZHktZm9udFwiPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPG1vdGlvbi5kaXZcclxuICAgICAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHk6IC0yMDAgfX1cclxuICAgICAgICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEsIHk6IDAgfX0gIFxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXIgbXgtYXV0byBmbGV4IGZsZXgtd3JhcCBwLTUgZmxleC1jb2wgbWQ6ZmxleC1yb3cgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImZsZXggdGl0bGUtZm9udCBmb250LW1lZGl1bSBpdGVtcy1jZW50ZXIgdGV4dC1ncmF5LTkwMCBtYi00IG1kOm1iLTBcIj5cclxuICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgc3Ryb2tlLXdpZHRoPVwiMlwiIGNsYXNzPVwidy0xMCBoLTEwIHRleHQtd2hpdGUgcC0yIGJnLWluZGlnby01MDAgcm91bmRlZC1mdWxsXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTIgMkwyIDdsMTAgNSAxMC01LTEwLTV6TTIgMTdsMTAgNSAxMC01TTIgMTJsMTAgNSAxMC01XCI+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1sLTMgdGV4dC14bFwiPuW8oOaFp+eahOiBjOWcujwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIHsvKiA8bmF2IGNsYXNzPVwibWQ6bXItYXV0byBtZDptbC00IG1kOnB5LTEgbWQ6cGwtNCBtZDpib3JkZXItbCBtZDpib3JkZXItZ3JheS00MDBcdGZsZXggZmxleC13cmFwIGl0ZW1zLWNlbnRlciB0ZXh0LWJhc2UganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwibXItNSBob3Zlcjp0ZXh0LWdyYXktOTAwXCI+5pyN5YqhPC9hPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJtci01IGhvdmVyOnRleHQtZ3JheS05MDBcIj7lm6LpmJ88L2E+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzcz1cIm1yLTUgaG92ZXI6dGV4dC1ncmF5LTkwMFwiPuWQiOS9nOS8meS8tDwvYT5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwibXItNSBob3Zlcjp0ZXh0LWdyYXktOTAwXCI+6IGU57O75oiR5LusPC9hPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJtci01IGhvdmVyOnRleHQtZ3JheS05MDBcIiBocmVmPScvc29mdHdhcmVfZGV2ZWxvcG1lbnQnID7ova/ku7blvIDlj5E8L2E+XHJcbiAgICAgICAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgYmctZ3JheS0xMDAgYm9yZGVyLTAgcHktMSBweC0zIGZvY3VzOm91dGxpbmUtbm9uZSBob3ZlcjpiZy1ncmF5LTIwMCByb3VuZGVkIHRleHQtYmFzZSBtdC00IG1kOm10LTBcIiBjb250cm9sLWlkPVwiQ29udHJvbElELTgzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj0nLyc+SG9tZTwvYT5cclxuICAgICAgICAgICAgICAgIDxzdmcgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBzdHJva2Utd2lkdGg9XCIyXCIgY2xhc3M9XCJ3LTQgaC00IG1sLTFcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk01IDEyaDE0TTEyIDVsNyA3LTcgN1wiPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+ICovfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgICAgIDwvaGVhZGVyPlxyXG4gICAgKVxyXG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnJhbWVyLW1vdGlvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sIm5hbWVzIjpbInN0eWxlcyIsIkhlYWRlciIsIkZvb3RlciIsIm1vdGlvbiIsIkFnZW50Qm9va2tlZXBpbmciLCJ2YXJpYW50cyIsImNvbnRhaW5lciIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwic3RhZ2dlckNoaWxkcmVuIiwiZGl2IiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJ4IiwieSJdLCJzb3VyY2VSb290IjoiIn0=
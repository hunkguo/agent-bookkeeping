(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/agent_bookkeeping"],{

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/***/ (function(module) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/***/ (function(module) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/***/ (function(module) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/***/ (function(module) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/construct.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/construct.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

var isNativeReflectConstruct = __webpack_require__(/*! ./isNativeReflectConstruct */ "./node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js");

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/***/ (function(module) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/***/ (function(module) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js ***!
  \*************************************************************************/
/***/ (function(module) {

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

module.exports = _isNativeReflectConstruct;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/***/ (function(module) {

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/***/ (function(module) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/***/ (function(module) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/***/ (function(module) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _slicedToArray = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");

var _s = $RefreshSig$();

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

var prefetched = {};

function prefetch(router, href, as, options) {
  if ( false || !router) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options)["catch"](function (err) {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  });
  var curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  var target = event.currentTarget.target;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  var nodeName = e.currentTarget.nodeName;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null && as.indexOf('#') >= 0) {
    scroll = false;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow: shallow,
    locale: locale,
    scroll: scroll
  });
}

function Link(props) {
  _s();

  if (true) {
    var createPropError = function createPropError(args) {
      return new Error("Failed prop type: The prop `".concat(args.key, "` expects a ").concat(args.expected, " in `<Link>`, but got `").concat(args.actual, "` instead.") + ( true ? "\nOpen your browser's console to view the Component stack trace." : 0));
    }; // TypeScript trick for type-guarding:


    var requiredPropsGuard = {
      href: true
    };
    var requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(function (key) {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key: key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        var _ = key;
      }
    }); // TypeScript trick for type-guarding:

    var optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    var optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(function (key) {
      var valType = typeof props[key];

      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key: key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key: key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key: key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        var _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    var hasWarned = _react["default"].useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://nextjs.org/docs/messages/prefetch-true-deprecated');
    }
  }

  var p = props.prefetch !== false;
  var router = (0, _router2.useRouter)();

  var _react$default$useMem = _react["default"].useMemo(function () {
    var _ref = (0, _router.resolveHref)(router, props.href, true),
        _ref2 = _slicedToArray(_ref, 2),
        resolvedHref = _ref2[0],
        resolvedAs = _ref2[1];

    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(router, props.as) : resolvedAs || resolvedHref
    };
  }, [router, props.href, props.as]),
      href = _react$default$useMem.href,
      as = _react$default$useMem.as;

  var children = props.children,
      replace = props.replace,
      shallow = props.shallow,
      scroll = props.scroll,
      locale = props.locale; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react["default"].createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  var child;

  if (true) {
    try {
      child = _react.Children.only(children);
    } catch (err) {
      throw new Error("Multiple children were passed to <Link> with `href` of `".concat(props.href, "` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children") + ( true ? "\nOpen your browser's console to view the Component stack trace." : 0));
    }
  } else {}

  var childRef = child && typeof child === 'object' && child.ref;

  var _ref3 = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  }),
      _ref4 = _slicedToArray(_ref3, 2),
      setIntersectionRef = _ref4[0],
      isVisible = _ref4[1];

  var setRef = _react["default"].useCallback(function (el) {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(function () {
    var shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    var curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    var isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  var childProps = {
    ref: setRef,
    onClick: function onClick(e) {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = function (e) {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    var curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    var localeDomain = router && router.isLocaleDomain && (0, _router.getDomainLocale)(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router.addBasePath)((0, _router.addLocale)(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react["default"].cloneElement(child, childProps);
}

_s(Link, "7cX92ILFgstKFyzTMH+g73G4t5k=");

_c = Link;
var _default = Link;
exports.default = _default;

var _c;

$RefreshReg$(_c, "Link");

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


/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


var normalizePathTrailingSlash =  false ? 0 : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

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


/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

var requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  var start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function timeRemaining() {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

var cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

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


/***/ }),

/***/ "./node_modules/next/dist/client/route-loader.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/route-loader.js ***!
  \*******************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/router/utils/get-asset-path-from-route */ "./node_modules/next/dist/next-server/lib/router/utils/get-asset-path-from-route.js"));

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js"); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


var MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  var entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  var resolver;
  var prom = new Promise(function (resolve) {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(function (value) {
    return resolver(value), value;
  }) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

var canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise(function (res, rej) {
    if (document.querySelector("link[rel=\"prefetch\"][href^=\"".concat(href, "\"]"))) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = "prefetch";
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

var ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise(function (resolve, reject) {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = function () {
      return reject(markAssetError(new Error("Failed to load script: ".concat(src))));
    }; // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
} // Resolve a promise that times out after given amount of milliseconds.


function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise(function (resolve, reject) {
    var cancelled = false;
    p.then(function (r) {
      // Resolved, cancel the timeout
      cancelled = true;
      resolve(r);
    })["catch"](reject);
    (0, _requestIdleCallback.requestIdleCallback)(function () {
      return setTimeout(function () {
        if (!cancelled) {
          reject(err);
        }
      }, ms);
    });
  });
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  var onBuildManifest = new Promise(function (resolve) {
    // Mandatory because this is not concurrent safe:
    var cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = function () {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
}

function getFilesForRoute(assetPrefix, route) {
  if (true) {
    return Promise.resolve({
      scripts: [assetPrefix + '/_next/static/chunks/pages' + encodeURI((0, _getAssetPathFromRoute["default"])(route, '.js'))],
      // Styles are handled by `style-loader` in development:
      css: []
    });
  }

  return getClientBuildManifest().then(function (manifest) {
    if (!(route in manifest)) {
      throw markAssetError(new Error("Failed to lookup route: ".concat(route)));
    }

    var allFiles = manifest[route].map(function (entry) {
      return assetPrefix + '/_next/' + encodeURI(entry);
    });
    return {
      scripts: allFiles.filter(function (v) {
        return v.endsWith('.js');
      }),
      css: allFiles.filter(function (v) {
        return v.endsWith('.css');
      })
    };
  });
}

function createRouteLoader(assetPrefix) {
  var entrypoints = new Map();
  var loadedScripts = new Map();
  var styleSheets = new Map();
  var routes = new Map();

  function maybeExecuteScript(src) {
    var prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector("script[src^=\"".concat(src, "\"]"))) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    var prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(function (res) {
      if (!res.ok) {
        throw new Error("Failed to load stylesheet: ".concat(href));
      }

      return res.text().then(function (text) {
        return {
          href: href,
          content: text
        };
      });
    })["catch"](function (err) {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint: function whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },
    onEntrypoint: function onEntrypoint(route, execute) {
      Promise.resolve(execute).then(function (fn) {
        return fn();
      }).then(function (exports) {
        return {
          component: exports && exports["default"] || exports,
          exports: exports
        };
      }, function (err) {
        return {
          error: err
        };
      }).then(function (input) {
        var old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },
    loadRoute: function loadRoute(route, prefetch) {
      var _this = this;

      return withFuture(route, routes, function () {
        return resolvePromiseWithTimeout(getFilesForRoute(assetPrefix, route).then(function (_ref) {
          var scripts = _ref.scripts,
              css = _ref.css;
          return Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
        }).then(function (res) {
          return _this.whenEntrypoint(route).then(function (entrypoint) {
            return {
              entrypoint: entrypoint,
              styles: res[1]
            };
          });
        }), MS_MAX_IDLE_DELAY, markAssetError(new Error("Route did not complete loading: ".concat(route)))).then(function (_ref2) {
          var entrypoint = _ref2.entrypoint,
              styles = _ref2.styles;
          var res = Object.assign({
            styles: styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        })["catch"](function (err) {
          if (prefetch) {
            // we don't want to cache errors during prefetch
            throw err;
          }

          return {
            error: err
          };
        });
      });
    },
    prefetch: function prefetch(route) {
      var _this2 = this;

      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      var cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(function (output) {
        return Promise.all(canPrefetch ? output.scripts.map(function (script) {
          return prefetchViaDom(script, 'script');
        }) : []);
      }).then(function () {
        (0, _requestIdleCallback.requestIdleCallback)(function () {
          return _this2.loadRoute(route, true)["catch"](function () {});
        });
      })["catch"]( // swallow prefetch errors
      function () {});
    }
  };
}

var _default = createRouteLoader;
exports.default = _default;

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


/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _construct = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/construct */ "./node_modules/@babel/runtime/helpers/construct.js");

var _s = $RefreshSig$();

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2["default"];
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter["default"];
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],
  ready: function ready(cb) {
    if (this.router) return cb();

    if (true) {
      this.readyCallbacks.push(cb);
    }
  }
}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain', 'domainLocales'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get: function get() {
    return _router2["default"].events;
  }
});
urlPropertyFields.forEach(function (field) {
  // Here we need to use Object.defineProperty because we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get: function get() {
      var router = getRouter();
      return router[field];
    }
  });
});
coreMethodFields.forEach(function (field) {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field].apply(router, arguments);
  };
});
routerEvents.forEach(function (event) {
  singletonRouter.ready(function () {
    _router2["default"].events.on(event, function () {
      var eventField = "on".concat(event.charAt(0).toUpperCase()).concat(event.substring(1));
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField].apply(_singletonRouter, arguments);
        } catch (err) {
          console.error("Error when running the Router event: ".concat(eventField));
          console.error("".concat(err.message, "\n").concat(err.stack));
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" on the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  _s();

  return _react["default"].useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** be used inside the server.


_s(useRouter, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");

var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = _construct(_router2["default"], args);
  singletonRouter.readyCallbacks.forEach(function (cb) {
    return cb();
  });
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  var _iterator = _createForOfIteratorHelper(urlPropertyFields),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var property = _step.value;

      if (typeof _router[property] === 'object') {
        instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

        continue;
      }

      instance[property] = _router[property];
    } // Events is a static property on the router, the router doesn't have to be initialized to use it

  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  instance.events = _router2["default"].events;
  coreMethodFields.forEach(function (field) {
    instance[field] = function () {
      return _router[field].apply(_router, arguments);
    };
  });
  return instance;
}

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


/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _slicedToArray = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");

exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

var hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection(_ref) {
  var rootMargin = _ref.rootMargin,
      disabled = _ref.disabled;
  var isDisabled = disabled || !hasIntersectionObserver;
  var unobserve = (0, _react.useRef)();

  var _ref2 = (0, _react.useState)(false),
      _ref3 = _slicedToArray(_ref2, 2),
      visible = _ref3[0],
      setVisible = _ref3[1];

  var setRef = (0, _react.useCallback)(function (el) {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, function (isVisible) {
        return isVisible && setVisible(isVisible);
      }, {
        rootMargin: rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(function () {
    if (!hasIntersectionObserver) {
      if (!visible) {
        var idleCallback = (0, _requestIdleCallback.requestIdleCallback)(function () {
          return setVisible(true);
        });
        return function () {
          return (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
        };
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  var _createObserver = createObserver(options),
      id = _createObserver.id,
      observer = _createObserver.observer,
      elements = _createObserver.elements;

  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements["delete"](element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers["delete"](id);
    }
  };
}

var observers = new Map();

function createObserver(options) {
  var id = options.rootMargin || '';
  var instance = observers.get(id);

  if (instance) {
    return instance;
  }

  var elements = new Map();
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      var callback = elements.get(entry.target);
      var isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id: id,
    observer: observer,
    elements: elements
  });
  return instance;
}

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


/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react["default"].createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(".concat(name, ")");
  }

  return WithRouterWrapper;
}

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


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js ***!
  \******************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  var detectedLocale; // first item will be empty string from splitting at first char

  var pathnameParts = pathname.split('/');
  (locales || []).some(function (locale) {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname: pathname,
    detectedLocale: detectedLocale
  };
}

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


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  var all = Object.create(null);
  return {
    on: function on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },
    off: function off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },
    emit: function emit(type) {
      for (var _len = arguments.length, evts = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        evts[_key - 1] = arguments[_key];
      }

      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(function (handler) {
        handler.apply(void 0, evts);
      });
    }
  };
}

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


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


exports.__esModule = true;
exports.RouterContext = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var RouterContext = /*#__PURE__*/_react["default"].createContext(null);

exports.RouterContext = RouterContext;

if (true) {
  RouterContext.displayName = 'RouterContext';
}

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


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _regeneratorRuntime = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");

var _asyncToGenerator = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");

var _classCallCheck = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");

var _slicedToArray = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");

exports.__esModule = true;
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _routeLoader = __webpack_require__(/*! ../../../client/route-loader */ "./node_modules/next/dist/client/route-loader.js");

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _normalizeLocalePath = __webpack_require__(/*! ../i18n/normalize-locale-path */ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "?ca47"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
} // tslint:disable:no-console


var detectDomainLocale;

if (false) {}

var basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : "".concat(prefix).concat(pathNoQueryHash(path) === '/' ? path.substring(1) : path) : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) { var detectedDomain; }

  return false;
}

function addLocale(path, locale, defaultLocale) {
  if (false) { var localeLower, pathLower, pathname; }

  return path;
}

function delLocale(path, locale) {
  if (false) { var localeLower, pathLower, pathname; }

  return path;
}

function pathNoQueryHash(path) {
  var queryIndex = path.indexOf('?');
  var hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = "/".concat(path);
  return path;
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#') || url.startsWith('?')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    var locationOrigin = (0, _utils.getLocationOrigin)();
    var resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  var interpolatedRoute = '';
  var dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  var dynamicGroups = dynamicRegex.groups;
  var dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  var params = Object.keys(dynamicGroups);

  if (!params.every(function (param) {
    var value = dynamicMatches[param] || '';
    var _dynamicGroups$param = dynamicGroups[param],
        repeat = _dynamicGroups$param.repeat,
        optional = _dynamicGroups$param.optional; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    var replaced = "[".concat(repeat ? '...' : '').concat(param, "]");

    if (optional) {
      replaced = "".concat(!value ? '/' : '', "[").concat(replaced, "]");
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    function (segment) {
      return encodeURIComponent(segment);
    }).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params: params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  var filteredQuery = {};
  Object.keys(query).forEach(function (key) {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(router, href, resolveAs) {
  // we use a dummy base url for relative urls
  var base;
  var urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);

  try {
    base = new URL(urlAsString.startsWith('#') ? router.asPath : router.pathname, 'http://n');
  } catch (_) {
    // fallback to / for invalid asPath values e.g. //
    base = new URL('/', 'http://n');
  } // Return because it cannot be routed by the Next.js router


  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    var finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    var interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      var query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);

      var _interpolateAs = interpolateAs(finalUrl.pathname, finalUrl.pathname, query),
          result = _interpolateAs.result,
          params = _interpolateAs.params;

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    var resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  var origin = (0, _utils.getLocationOrigin)();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  var _resolveHref = resolveHref(router, url, true),
      _resolveHref2 = _slicedToArray(_resolveHref, 2),
      resolvedHref = _resolveHref2[0],
      resolvedAs = _resolveHref2[1];

  var origin = (0, _utils.getLocationOrigin)();
  var hrefHadOrigin = resolvedHref.startsWith(origin);
  var asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  var preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  var preparedAs = as ? stripOrigin(resolveHref(router, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(pathname, pages) {
  var cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return pathname;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(function (page) {
      if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
        pathname = page;
        return true;
      }
    });
  }

  return (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
}

var manualScrollRestoration =  false && 0;
var SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(function (res) {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(function (data) {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error("Failed to load static props");
        });
      }

      throw new Error("Failed to load static props");
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1)["catch"](function (err) {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

var Router = /*#__PURE__*/function () {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  // In-flight Server Data Requests, for deduping
  function Router(_pathname, _query, _as, _ref) {
    var _this = this;

    var initialProps = _ref.initialProps,
        pageLoader = _ref.pageLoader,
        App = _ref.App,
        wrapApp = _ref.wrapApp,
        Component = _ref.Component,
        err = _ref.err,
        subscription = _ref.subscription,
        isFallback = _ref.isFallback,
        locale = _ref.locale,
        locales = _ref.locales,
        defaultLocale = _ref.defaultLocale,
        domainLocales = _ref.domainLocales,
        isPreview = _ref.isPreview;

    _classCallCheck(this, Router);

    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sdr = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.domainLocales = void 0;
    this.isReady = void 0;
    this.isPreview = void 0;
    this.isLocaleDomain = void 0;
    this._idx = 0;

    this.onPopState = function (e) {
      var state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        var _pathname2 = _this.pathname,
            query = _this.query;

        _this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(_pathname2),
          query: query
        }), (0, _utils.getURL)());

        return;
      }

      if (!state.__N) {
        return;
      }

      var forcedScroll;
      var url = state.url,
          as = state.as,
          options = state.options,
          idx = state.idx;

      if (false) { var v; }

      _this._idx = idx;

      var _ref2 = (0, _parseRelativeUrl.parseRelativeUrl)(url),
          pathname = _ref2.pathname; // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (_this.isSsr && as === _this.asPath && pathname === _this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (_this._bps && !_this._bps(state)) {
        return;
      }

      _this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && _this._shallow,
        locale: options.locale || _this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component: Component,
        initial: true,
        props: initialProps,
        err: err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    var autoExportDynamic = (0, _isDynamic.isDynamicRoute)(_pathname) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || !autoExportDynamic && !self.location.search && !false);
    this.isPreview = !!isPreview;
    this.isLocaleDomain = false;

    if (false) {}

    if (true) {
      // make sure "as" doesn't start with double slashes or else it can
      // throw an error as it's considered invalid
      if (_as.substr(0, 2) !== '//') {
        // in order for `e.state` to work on the `onpopstate` event
        // we have to register the initial route upon initialization
        var options = {
          locale: locale
        };
        options._shouldResolveHref = _as !== _pathname;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(_pathname),
          query: _query
        }), (0, _utils.getURL)(), options);
      }

      window.addEventListener('popstate', this.onPopState); // enable custom scroll restoration handling when available
      // otherwise fallback to browser's default handling

      if (false) {}
    }
  }

  _createClass(Router, [{
    key: "reload",
    value: function reload() {
      window.location.reload();
    }
    /**
    * Go back in history
    */

  }, {
    key: "back",
    value: function back() {
      window.history.back();
    }
    /**
    * Performs a `pushState` with arguments
    * @param url of the route
    * @param as masks `url` for the browser
    * @param options object you can define `shallow` and other options
    */

  }, {
    key: "push",
    value: function push(url, as) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      if (false) {}

      ;

      var _prepareUrlAs = prepareUrlAs(this, url, as);

      url = _prepareUrlAs.url;
      as = _prepareUrlAs.as;
      return this.change('pushState', url, as, options);
    }
    /**
    * Performs a `replaceState` with arguments
    * @param url of the route
    * @param as masks `url` for the browser
    * @param options object you can define `shallow` and other options
    */

  }, {
    key: "replace",
    value: function replace(url, as) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      ;

      var _prepareUrlAs2 = prepareUrlAs(this, url, as);

      url = _prepareUrlAs2.url;
      as = _prepareUrlAs2.as;
      return this.change('replaceState', url, as, options);
    }
  }, {
    key: "change",
    value: function () {
      var _change = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(method, url, as, options, forcedScroll) {
        var shouldResolveHref, localeChange, parsedAs, localePathResult, didNavigate, _this$locales, detectedDomain, asNoBasePath, _options$shallow, shallow, routeProps, cleanedAs, parsed, pathname, query, pages, rewrites, _yield, resolvedAs, rewritesResult, route, _parsedAs, asPathname, routeRegex, routeMatch, shouldInterpolate, interpolatedAs, missingParams, _self$__NEXT_DATA__$p, _self$__NEXT_DATA__$p2, _options$scroll, routeInfo, _routeInfo, error, props, __N_SSG, __N_SSP, destination, parsedHref, _prepareUrlAs3, newUrl, newAs, notFoundRoute, appComp, isValidShallowRoute, shouldScroll, resetScroll;

        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (isLocalURL(url)) {
                  _context.next = 3;
                  break;
                }

                window.location.href = url;
                return _context.abrupt("return", false);

              case 3:
                shouldResolveHref = url === as || options._h || options._shouldResolveHref; // for static pages with query params in the URL we delay
                // marking the router ready until after the query is updated

                if (options._h) {
                  this.isReady = true;
                }

                localeChange = options.locale !== this.locale;

                if (true) {
                  _context.next = 18;
                  break;
                }

                this.locale = options.locale === false ? this.defaultLocale : options.locale || this.locale;

                if (typeof options.locale === 'undefined') {
                  options.locale = this.locale;
                }

                parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(hasBasePath(as) ? delBasePath(as) : as);
                localePathResult = (0, _normalizeLocalePath.normalizeLocalePath)(parsedAs.pathname, this.locales);

                if (localePathResult.detectedLocale) {
                  this.locale = localePathResult.detectedLocale;
                  parsedAs.pathname = addBasePath(parsedAs.pathname);
                  as = (0, _utils.formatWithValidation)(parsedAs);
                  url = addBasePath((0, _normalizeLocalePath.normalizeLocalePath)(hasBasePath(url) ? delBasePath(url) : url, this.locales).pathname);
                }

                didNavigate = false; // we need to wrap this in the env check again since regenerator runtime
                // moves this on its own due to the return

                if (false) {}

                detectedDomain = detectDomainLocale(this.domainLocales, undefined, this.locale); // we need to wrap this in the env check again since regenerator runtime
                // moves this on its own due to the return

                if (false) {}

                if (!didNavigate) {
                  _context.next = 18;
                  break;
                }

                return _context.abrupt("return", new Promise(function () {}));

              case 18:
                if (!options._h) {
                  this.isSsr = false;
                } // marking route changes as a navigation start entry


                if (_utils.ST) {
                  performance.mark('routeChange');
                }

                _options$shallow = options.shallow, shallow = _options$shallow === void 0 ? false : _options$shallow;
                routeProps = {
                  shallow: shallow
                };

                if (this._inFlightRoute) {
                  this.abortComponentLoad(this._inFlightRoute, routeProps);
                }

                as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
                cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
                this._inFlightRoute = as; // If the url change is only related to a hash change
                // We should not proceed. We should only change the state.
                // WARNING: `_h` is an internal option for handing Next.js client-side
                // hydration. Your app should _never_ use this property. It may change at
                // any time without notice.

                if (!(!options._h && this.onlyAHashChange(cleanedAs))) {
                  _context.next = 34;
                  break;
                }

                this.asPath = cleanedAs;
                Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

                this.changeState(method, url, as, options);
                this.scrollToHash(cleanedAs);
                this.notify(this.components[this.route], null);
                Router.events.emit('hashChangeComplete', as, routeProps);
                return _context.abrupt("return", true);

              case 34:
                parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
                pathname = parsed.pathname, query = parsed.query; // The build manifest needs to be loaded before auto-static dynamic pages
                // get their query parameters to allow ensuring they can be parsed properly
                // when rewritten to

                _context.prev = 36;
                _context.next = 39;
                return this.pageLoader.getPageList();

              case 39:
                pages = _context.sent;
                _context.next = 42;
                return (0, _routeLoader.getClientBuildManifest)();

              case 42:
                _yield = _context.sent;
                rewrites = _yield.__rewrites;
                _context.next = 50;
                break;

              case 46:
                _context.prev = 46;
                _context.t0 = _context["catch"](36);
                // If we fail to resolve the page list or client-build manifest, we must
                // do a server-side transition:
                window.location.href = as;
                return _context.abrupt("return", false);

              case 50:
                // If asked to change the current URL we should reload the current page
                // (not location.reload() but reload getInitialProps and other Next.js stuffs)
                // We also need to set the method = replaceState always
                // as this should not go into the history (That's how browsers work)
                // We should compare the new asPath to the current asPath, not the url
                if (!this.urlIsNew(cleanedAs) && !localeChange) {
                  method = 'replaceState';
                } // we need to resolve the as value using rewrites for dynamic SSG
                // pages to allow building the data URL correctly


                resolvedAs = as; // url and as should always be prefixed with basePath by this
                // point by either next/link or router.push/replace so strip the
                // basePath from the pathname to match the pages dir 1-to-1

                pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname;

                if (shouldResolveHref && pathname !== '/_error') {
                  ;
                  options._shouldResolveHref = true;

                  if (false) {} else {
                    parsed.pathname = resolveDynamicRoute(pathname, pages);

                    if (parsed.pathname !== pathname) {
                      pathname = parsed.pathname;
                      parsed.pathname = addBasePath(pathname);
                      url = (0, _utils.formatWithValidation)(parsed);
                    }
                  }
                }

                route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);

                if (isLocalURL(as)) {
                  _context.next = 60;
                  break;
                }

                if (false) {}

                throw new Error("Invalid href: \"".concat(url, "\" and as: \"").concat(as, "\", received relative href and external as") + "\nSee more info: https://nextjs.org/docs/messages/invalid-relative-url-external-as");

              case 58:
                window.location.href = as;
                return _context.abrupt("return", false);

              case 60:
                resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

                if (!(0, _isDynamic.isDynamicRoute)(route)) {
                  _context.next = 76;
                  break;
                }

                _parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
                asPathname = _parsedAs.pathname;
                routeRegex = (0, _routeRegex.getRouteRegex)(route);
                routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
                shouldInterpolate = route === asPathname;
                interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

                if (!(!routeMatch || shouldInterpolate && !interpolatedAs.result)) {
                  _context.next = 75;
                  break;
                }

                missingParams = Object.keys(routeRegex.groups).filter(function (param) {
                  return !query[param];
                });

                if (!(missingParams.length > 0)) {
                  _context.next = 73;
                  break;
                }

                if (true) {
                  console.warn("".concat(shouldInterpolate ? "Interpolating href" : "Mismatching `as` and `href`", " failed to manually provide ") + "the params: ".concat(missingParams.join(', '), " in the `href`'s `query`"));
                }

                throw new Error((shouldInterpolate ? "The provided `href` (".concat(url, ") value is missing query values (").concat(missingParams.join(', '), ") to be interpolated properly. ") : "The provided `as` value (".concat(asPathname, ") is incompatible with the `href` value (").concat(route, "). ")) + "Read more: https://nextjs.org/docs/messages/".concat(shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'));

              case 73:
                _context.next = 76;
                break;

              case 75:
                if (shouldInterpolate) {
                  as = (0, _utils.formatWithValidation)(Object.assign({}, _parsedAs, {
                    pathname: interpolatedAs.result,
                    query: omitParmsFromQuery(query, interpolatedAs.params)
                  }));
                } else {
                  // Merge params into `query`, overwriting any specified in search
                  Object.assign(query, routeMatch);
                }

              case 76:
                Router.events.emit('routeChangeStart', as, routeProps);
                _context.prev = 77;
                _context.next = 80;
                return this.getRouteInfo(route, pathname, query, as, resolvedAs, routeProps);

              case 80:
                routeInfo = _context.sent;
                _routeInfo = routeInfo, error = _routeInfo.error, props = _routeInfo.props, __N_SSG = _routeInfo.__N_SSG, __N_SSP = _routeInfo.__N_SSP; // handle redirect on client-transition

                if (!((__N_SSG || __N_SSP) && props)) {
                  _context.next = 106;
                  break;
                }

                if (!(props.pageProps && props.pageProps.__N_REDIRECT)) {
                  _context.next = 92;
                  break;
                }

                destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
                // client-navigation if it is falling back to hard navigation if
                // it's not

                if (!destination.startsWith('/')) {
                  _context.next = 90;
                  break;
                }

                parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
                parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);
                _prepareUrlAs3 = prepareUrlAs(this, destination, destination), newUrl = _prepareUrlAs3.url, newAs = _prepareUrlAs3.as;
                return _context.abrupt("return", this.change(method, newUrl, newAs, options));

              case 90:
                window.location.href = destination;
                return _context.abrupt("return", new Promise(function () {}));

              case 92:
                this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

                if (!(props.notFound === SSG_DATA_NOT_FOUND)) {
                  _context.next = 106;
                  break;
                }

                _context.prev = 94;
                _context.next = 97;
                return this.fetchComponent('/404');

              case 97:
                notFoundRoute = '/404';
                _context.next = 103;
                break;

              case 100:
                _context.prev = 100;
                _context.t1 = _context["catch"](94);
                notFoundRoute = '/_error';

              case 103:
                _context.next = 105;
                return this.getRouteInfo(notFoundRoute, notFoundRoute, query, as, resolvedAs, {
                  shallow: false
                });

              case 105:
                routeInfo = _context.sent;

              case 106:
                Router.events.emit('beforeHistoryChange', as, routeProps);
                this.changeState(method, url, as, options);

                if (true) {
                  appComp = this.components['/_app'].Component;
                  window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
                }

                if (options._h && pathname === '/_error' && ((_self$__NEXT_DATA__$p = self.__NEXT_DATA__.props) == null ? void 0 : (_self$__NEXT_DATA__$p2 = _self$__NEXT_DATA__$p.pageProps) == null ? void 0 : _self$__NEXT_DATA__$p2.statusCode) === 500 && props != null && props.pageProps) {
                  // ensure statusCode is still correct for static 500 page
                  // when updating query information
                  props.pageProps.statusCode = 500;
                } // shallow routing is only allowed for same page URL changes.


                isValidShallowRoute = options.shallow && this.route === route;
                shouldScroll = (_options$scroll = options.scroll) != null ? _options$scroll : !isValidShallowRoute;
                resetScroll = shouldScroll ? {
                  x: 0,
                  y: 0
                } : null;
                _context.next = 115;
                return this.set(route, pathname, query, cleanedAs, routeInfo, forcedScroll != null ? forcedScroll : resetScroll)["catch"](function (e) {
                  if (e.cancelled) error = error || e;else throw e;
                });

              case 115:
                if (!error) {
                  _context.next = 118;
                  break;
                }

                Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
                throw error;

              case 118:
                if (false) {}

                Router.events.emit('routeChangeComplete', as, routeProps);
                return _context.abrupt("return", true);

              case 123:
                _context.prev = 123;
                _context.t2 = _context["catch"](77);

                if (!_context.t2.cancelled) {
                  _context.next = 127;
                  break;
                }

                return _context.abrupt("return", false);

              case 127:
                throw _context.t2;

              case 128:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[36, 46], [77, 123], [94, 100]]);
      }));

      function change(_x, _x2, _x3, _x4, _x5) {
        return _change.apply(this, arguments);
      }

      return change;
    }()
  }, {
    key: "changeState",
    value: function changeState(method, url, as) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      if (true) {
        if (typeof window.history === 'undefined') {
          console.error("Warning: window.history is not available.");
          return;
        }

        if (typeof window.history[method] === 'undefined') {
          console.error("Warning: window.history.".concat(method, " is not available"));
          return;
        }
      }

      if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
        this._shallow = options.shallow;
        window.history[method]({
          url: url,
          as: as,
          options: options,
          __N: true,
          idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
        }, // Most browsers currently ignores this parameter, although they may use it in the future.
        // Passing the empty string here should be safe against future changes to the method.
        // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
        '', as);
      }
    }
  }, {
    key: "handleRouteInfoError",
    value: function () {
      var _handleRouteInfoError = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2(err, pathname, query, as, routeProps, loadErrorFail) {
        var Component, styleSheets, props, _yield$this$fetchComp, routeInfo;

        return _regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!err.cancelled) {
                  _context2.next = 2;
                  break;
                }

                throw err;

              case 2:
                if (!((0, _routeLoader.isAssetError)(err) || loadErrorFail)) {
                  _context2.next = 6;
                  break;
                }

                Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
                //  1. Page doesn't exists
                //  2. Page does exist in a different zone
                //  3. Internal error while loading the page
                // So, doing a hard reload is the proper way to deal with this.

                window.location.href = as; // Changing the URL doesn't block executing the current code path.
                // So let's throw a cancellation error stop the routing logic.

                throw buildCancellationError();

              case 6:
                _context2.prev = 6;

                if (!(typeof Component === 'undefined' || typeof styleSheets === 'undefined')) {
                  _context2.next = 14;
                  break;
                }

                ;
                _context2.next = 11;
                return this.fetchComponent('/_error');

              case 11:
                _yield$this$fetchComp = _context2.sent;
                Component = _yield$this$fetchComp.page;
                styleSheets = _yield$this$fetchComp.styleSheets;

              case 14:
                routeInfo = {
                  props: props,
                  Component: Component,
                  styleSheets: styleSheets,
                  err: err,
                  error: err
                };

                if (routeInfo.props) {
                  _context2.next = 26;
                  break;
                }

                _context2.prev = 16;
                _context2.next = 19;
                return this.getInitialProps(Component, {
                  err: err,
                  pathname: pathname,
                  query: query
                });

              case 19:
                routeInfo.props = _context2.sent;
                _context2.next = 26;
                break;

              case 22:
                _context2.prev = 22;
                _context2.t0 = _context2["catch"](16);
                console.error('Error in error page `getInitialProps`: ', _context2.t0);
                routeInfo.props = {};

              case 26:
                return _context2.abrupt("return", routeInfo);

              case 29:
                _context2.prev = 29;
                _context2.t1 = _context2["catch"](6);
                return _context2.abrupt("return", this.handleRouteInfoError(_context2.t1, pathname, query, as, routeProps, true));

              case 32:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[6, 29], [16, 22]]);
      }));

      function handleRouteInfoError(_x6, _x7, _x8, _x9, _x10, _x11) {
        return _handleRouteInfoError.apply(this, arguments);
      }

      return handleRouteInfoError;
    }()
  }, {
    key: "getRouteInfo",
    value: function () {
      var _getRouteInfo = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee3(route, pathname, query, as, resolvedAs, routeProps) {
        var _this2 = this;

        var existingRouteInfo, cachedRouteInfo, routeInfo, Component, __N_SSG, __N_SSP, _require, isValidElementType, dataHref, props;

        return _regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                existingRouteInfo = this.components[route];

                if (!(routeProps.shallow && existingRouteInfo && this.route === route)) {
                  _context3.next = 4;
                  break;
                }

                return _context3.abrupt("return", existingRouteInfo);

              case 4:
                cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;

                if (!cachedRouteInfo) {
                  _context3.next = 9;
                  break;
                }

                _context3.t0 = cachedRouteInfo;
                _context3.next = 12;
                break;

              case 9:
                _context3.next = 11;
                return this.fetchComponent(route).then(function (res) {
                  return {
                    Component: res.page,
                    styleSheets: res.styleSheets,
                    __N_SSG: res.mod.__N_SSG,
                    __N_SSP: res.mod.__N_SSP
                  };
                });

              case 11:
                _context3.t0 = _context3.sent;

              case 12:
                routeInfo = _context3.t0;
                Component = routeInfo.Component, __N_SSG = routeInfo.__N_SSG, __N_SSP = routeInfo.__N_SSP;

                if (false) {}

                _require = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js"), isValidElementType = _require.isValidElementType;

                if (isValidElementType(Component)) {
                  _context3.next = 18;
                  break;
                }

                throw new Error("The default export is not a React Component in page: \"".concat(pathname, "\""));

              case 18:
                if (__N_SSG || __N_SSP) {
                  dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
                    pathname: pathname,
                    query: query
                  }), resolvedAs, __N_SSG, this.locale);
                }

                _context3.next = 21;
                return this._getData(function () {
                  return __N_SSG ? _this2._getStaticData(dataHref) : __N_SSP ? _this2._getServerData(dataHref) : _this2.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
                  {
                    pathname: pathname,
                    query: query,
                    asPath: as,
                    locale: _this2.locale,
                    locales: _this2.locales,
                    defaultLocale: _this2.defaultLocale
                  });
                });

              case 21:
                props = _context3.sent;
                routeInfo.props = props;
                this.components[route] = routeInfo;
                return _context3.abrupt("return", routeInfo);

              case 27:
                _context3.prev = 27;
                _context3.t1 = _context3["catch"](0);
                return _context3.abrupt("return", this.handleRouteInfoError(_context3.t1, pathname, query, as, routeProps));

              case 30:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 27]]);
      }));

      function getRouteInfo(_x12, _x13, _x14, _x15, _x16, _x17) {
        return _getRouteInfo.apply(this, arguments);
      }

      return getRouteInfo;
    }()
  }, {
    key: "set",
    value: function set(route, pathname, query, as, data, resetScroll) {
      this.isFallback = false;
      this.route = route;
      this.pathname = pathname;
      this.query = query;
      this.asPath = as;
      return this.notify(data, resetScroll);
    }
    /**
    * Callback to execute before replacing router state
    * @param cb callback to be executed
    */

  }, {
    key: "beforePopState",
    value: function beforePopState(cb) {
      this._bps = cb;
    }
  }, {
    key: "onlyAHashChange",
    value: function onlyAHashChange(as) {
      if (!this.asPath) return false;

      var _this$asPath$split = this.asPath.split('#'),
          _this$asPath$split2 = _slicedToArray(_this$asPath$split, 2),
          oldUrlNoHash = _this$asPath$split2[0],
          oldHash = _this$asPath$split2[1];

      var _as$split = as.split('#'),
          _as$split2 = _slicedToArray(_as$split, 2),
          newUrlNoHash = _as$split2[0],
          newHash = _as$split2[1]; // Makes sure we scroll to the provided hash if the url/hash are the same


      if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
        return true;
      } // If the urls are change, there's more than a hash change


      if (oldUrlNoHash !== newUrlNoHash) {
        return false;
      } // If the hash has changed, then it's a hash only change.
      // This check is necessary to handle both the enter and
      // leave hash === '' cases. The identity case falls through
      // and is treated as a next reload.


      return oldHash !== newHash;
    }
  }, {
    key: "scrollToHash",
    value: function scrollToHash(as) {
      var _as$split3 = as.split('#'),
          _as$split4 = _slicedToArray(_as$split3, 2),
          hash = _as$split4[1]; // Scroll to top if the hash is just `#` with no value or `#top`
      // To mirror browsers


      if (hash === '' || hash === 'top') {
        window.scrollTo(0, 0);
        return;
      } // First we check if the element by id is found


      var idEl = document.getElementById(hash);

      if (idEl) {
        idEl.scrollIntoView();
        return;
      } // If there's no element with the id, we check the `name` property
      // To mirror browsers


      var nameEl = document.getElementsByName(hash)[0];

      if (nameEl) {
        nameEl.scrollIntoView();
      }
    }
  }, {
    key: "urlIsNew",
    value: function urlIsNew(asPath) {
      return this.asPath !== asPath;
    }
    /**
    * Prefetch page code, you may wait for the data during page rendering.
    * This feature only works in production!
    * @param url the href of prefetched page
    * @param asPath the as path of the prefetched page
    */

  }, {
    key: "prefetch",
    value: function () {
      var _prefetch = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee4(url) {
        var _this3 = this;

        var asPath,
            options,
            parsed,
            pathname,
            parsedAs,
            localePathResult,
            pages,
            resolvedAs,
            rewrites,
            _yield2,
            rewritesResult,
            route,
            _args4 = arguments;

        return _regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                asPath = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : url;
                options = _args4.length > 2 && _args4[2] !== undefined ? _args4[2] : {};
                parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
                pathname = parsed.pathname;

                if (false) {}

                _context4.next = 7;
                return this.pageLoader.getPageList();

              case 7:
                pages = _context4.sent;
                resolvedAs = asPath;

                if (true) {
                  _context4.next = 19;
                  break;
                }

                _context4.next = 12;
                return (0, _routeLoader.getClientBuildManifest)();

              case 12:
                _yield2 = _context4.sent;
                rewrites = _yield2.__rewrites;
                rewritesResult = (0, _resolveRewrites["default"])(addBasePath(addLocale(asPath, this.locale)), pages, rewrites, parsed.query, function (p) {
                  return resolveDynamicRoute(p, pages);
                }, this.locales);
                resolvedAs = delLocale(delBasePath(rewritesResult.asPath), this.locale);

                if (rewritesResult.matchedPage && rewritesResult.resolvedHref) {
                  // if this directly matches a page we need to update the href to
                  // allow the correct page chunk to be loaded
                  pathname = rewritesResult.resolvedHref;
                  parsed.pathname = pathname;
                  url = (0, _utils.formatWithValidation)(parsed);
                }

                _context4.next = 21;
                break;

              case 19:
                parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);

                if (parsed.pathname !== pathname) {
                  pathname = parsed.pathname;
                  parsed.pathname = pathname;
                  url = (0, _utils.formatWithValidation)(parsed);
                }

              case 21:
                route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // Prefetch is not supported in development mode because it would trigger on-demand-entries

                if (false) {}

                return _context4.abrupt("return");

              case 24:
                _context4.next = 26;
                return Promise.all([this.pageLoader._isSsg(route).then(function (isSsg) {
                  return isSsg ? _this3._getStaticData(_this3.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== 'undefined' ? options.locale : _this3.locale)) : false;
                }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);

              case 26:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function prefetch(_x18) {
        return _prefetch.apply(this, arguments);
      }

      return prefetch;
    }()
  }, {
    key: "fetchComponent",
    value: function () {
      var _fetchComponent = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee5(route) {
        var cancelled, cancel, componentResult, error;
        return _regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                cancelled = false;

                cancel = this.clc = function () {
                  cancelled = true;
                };

                _context5.next = 4;
                return this.pageLoader.loadPage(route);

              case 4:
                componentResult = _context5.sent;

                if (!cancelled) {
                  _context5.next = 9;
                  break;
                }

                error = new Error("Abort fetching component for route: \"".concat(route, "\""));
                error.cancelled = true;
                throw error;

              case 9:
                if (cancel === this.clc) {
                  this.clc = null;
                }

                return _context5.abrupt("return", componentResult);

              case 11:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function fetchComponent(_x19) {
        return _fetchComponent.apply(this, arguments);
      }

      return fetchComponent;
    }()
  }, {
    key: "_getData",
    value: function _getData(fn) {
      var _this4 = this;

      var cancelled = false;

      var cancel = function cancel() {
        cancelled = true;
      };

      this.clc = cancel;
      return fn().then(function (data) {
        if (cancel === _this4.clc) {
          _this4.clc = null;
        }

        if (cancelled) {
          var err = new Error('Loading initial props cancelled');
          err.cancelled = true;
          throw err;
        }

        return data;
      });
    }
  }, {
    key: "_getStaticData",
    value: function _getStaticData(dataHref) {
      var _this5 = this;

      var _URL = new URL(dataHref, window.location.href),
          cacheKey = _URL.href;

      if (false) {}

      return fetchNextData(dataHref, this.isSsr).then(function (data) {
        _this5.sdc[cacheKey] = data;
        return data;
      });
    }
  }, {
    key: "_getServerData",
    value: function _getServerData(dataHref) {
      var _this6 = this;

      var _URL2 = new URL(dataHref, window.location.href),
          resourceKey = _URL2.href;

      if (this.sdr[resourceKey]) {
        return this.sdr[resourceKey];
      }

      return this.sdr[resourceKey] = fetchNextData(dataHref, this.isSsr).then(function (data) {
        delete _this6.sdr[resourceKey];
        return data;
      })["catch"](function (err) {
        delete _this6.sdr[resourceKey];
        throw err;
      });
    }
  }, {
    key: "getInitialProps",
    value: function getInitialProps(Component, ctx) {
      var App = this.components['/_app'].Component;

      var AppTree = this._wrapApp(App);

      ctx.AppTree = AppTree;
      return (0, _utils.loadGetInitialProps)(App, {
        AppTree: AppTree,
        Component: Component,
        router: this,
        ctx: ctx
      });
    }
  }, {
    key: "abortComponentLoad",
    value: function abortComponentLoad(as, routeProps) {
      if (this.clc) {
        Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
        this.clc();
        this.clc = null;
      }
    }
  }, {
    key: "notify",
    value: function notify(data, resetScroll) {
      return this.sub(data, this.components['/_app'].Component, resetScroll);
    }
  }]);

  return Router;
}();

exports.default = Router;
Router.events = (0, _mitt["default"])();

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


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


var slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  var auth = urlObj.auth,
      hostname = urlObj.hostname;
  var protocol = urlObj.protocol || '';
  var pathname = urlObj.pathname || '';
  var hash = urlObj.hash || '';
  var query = urlObj.query || '';
  var host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? "[".concat(hostname, "]") : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  var search = urlObj.search || query && "?".concat(query) || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return "".concat(protocol).concat(host).concat(pathname).concat(search).concat(hash);
}

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


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/get-asset-path-from-route.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/get-asset-path-from-route.js ***!
  \******************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


exports.__esModule = true;
exports.default = getAssetPathFromRoute; // Translates a logical route into its pages asset path (relative from a common prefix)
// "asset path" being its javascript file, data file, prerendered html,...

function getAssetPathFromRoute(route) {
  var ext = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var path = route === '/' ? '/index' : /^\/index(\/|$)/.test(route) ? "/index".concat(route) : "".concat(route);
  return path + ext;
}

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


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

var TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

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


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  var globalBase = new URL( false ? 0 : (0, _utils.getLocationOrigin)());
  var resolvedBase = base ? new URL(base, globalBase) : globalBase;

  var _URL = new URL(url, resolvedBase),
      pathname = _URL.pathname,
      searchParams = _URL.searchParams,
      search = _URL.search,
      hash = _URL.hash,
      href = _URL.href,
      origin = _URL.origin;

  if (origin !== globalBase.origin) {
    throw new Error("invariant: invalid relative URL, router received ".concat(url));
  }

  return {
    pathname: pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search: search,
    hash: hash,
    href: href.slice(globalBase.origin.length)
  };
}

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


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _slicedToArray = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");

exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  var query = {};
  searchParams.forEach(function (value, key) {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  var result = new URLSearchParams();
  Object.entries(urlQuery).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];

    if (Array.isArray(value)) {
      value.forEach(function (item) {
        return result.append(key, stringifyUrlQueryParam(item));
      });
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target) {
  for (var _len = arguments.length, searchParamsList = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    searchParamsList[_key - 1] = arguments[_key];
  }

  searchParamsList.forEach(function (searchParams) {
    Array.from(searchParams.keys()).forEach(function (key) {
      return target["delete"](key);
    });
    searchParams.forEach(function (value, key) {
      return target.append(key, value);
    });
  });
  return target;
}

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


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  var re = routeRegex.re,
      groups = routeRegex.groups;
  return function (pathname) {
    var routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    var decode = function decode(param) {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        var err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    var params = {};
    Object.keys(groups).forEach(function (slugName) {
      var g = groups[slugName];
      var m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(function (entry) {
          return decode(entry);
        }) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

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


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  var optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  var repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat: repeat,
    optional: optional
  };
}

function getRouteRegex(normalizedRoute) {
  var segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  var groups = {};
  var groupIndex = 1;
  var parameterizedRoute = segments.map(function (segment) {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      var _parseParameter = parseParameter(segment.slice(1, -1)),
          key = _parseParameter.key,
          optional = _parseParameter.optional,
          repeat = _parseParameter.repeat;

      groups[key] = {
        pos: groupIndex++,
        repeat: repeat,
        optional: optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return "/".concat(escapeRegex(segment));
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (false) { var namedParameterizedRoute, routeKeys, getSafeRouteKey, routeKeyCharLength, routeKeyCharCode; }

  return {
    re: new RegExp("^".concat(parameterizedRoute, "(?:/)?$")),
    groups: groups
  };
}

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


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _regeneratorRuntime = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");

var _asyncToGenerator = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");

exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  var used = false;
  var result;
  return function () {
    if (!used) {
      used = true;
      result = fn.apply(void 0, arguments);
    }

    return result;
  };
}

function getLocationOrigin() {
  var _window$location = window.location,
      protocol = _window$location.protocol,
      hostname = _window$location.hostname,
      port = _window$location.port;
  return "".concat(protocol, "//").concat(hostname).concat(port ? ':' + port : '');
}

function getURL() {
  var href = window.location.href;
  var origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

function loadGetInitialProps(_x, _x2) {
  return _loadGetInitialProps.apply(this, arguments);
}

function _loadGetInitialProps() {
  _loadGetInitialProps = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(App, ctx) {
    var _App$prototype, message, res, props, _message;

    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (false) {}

            if (!((_App$prototype = App.prototype) != null && _App$prototype.getInitialProps)) {
              _context.next = 4;
              break;
            }

            message = "\"".concat(getDisplayName(App), ".getInitialProps()\" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.");
            throw new Error(message);

          case 4:
            // when called from _app `ctx` is nested in `ctx`
            res = ctx.res || ctx.ctx && ctx.ctx.res;

            if (App.getInitialProps) {
              _context.next = 12;
              break;
            }

            if (!(ctx.ctx && ctx.Component)) {
              _context.next = 11;
              break;
            }

            _context.next = 9;
            return loadGetInitialProps(ctx.Component, ctx.ctx);

          case 9:
            _context.t0 = _context.sent;
            return _context.abrupt("return", {
              pageProps: _context.t0
            });

          case 11:
            return _context.abrupt("return", {});

          case 12:
            _context.next = 14;
            return App.getInitialProps(ctx);

          case 14:
            props = _context.sent;

            if (!(res && isResSent(res))) {
              _context.next = 17;
              break;
            }

            return _context.abrupt("return", props);

          case 17:
            if (props) {
              _context.next = 20;
              break;
            }

            _message = "\"".concat(getDisplayName(App), ".getInitialProps()\" should resolve to an object. But found \"").concat(props, "\" instead.");
            throw new Error(_message);

          case 20:
            if (true) {
              if (Object.keys(props).length === 0 && !ctx.ctx) {
                console.warn("".concat(getDisplayName(App), " returned an empty object from `getInitialProps`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps"));
              }
            }

            return _context.abrupt("return", props);

          case 22:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _loadGetInitialProps.apply(this, arguments);
}

var urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(function (key) {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn("Unknown key passed via urlObject into url.format: ".concat(key));
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

var SP = typeof performance !== 'undefined';
exports.SP = SP;
var ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

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


/***/ }),

/***/ "./pages/agent_bookkeeping.js":
/*!************************************!*\
  !*** ./pages/agent_bookkeeping.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ AgentBookkeeping; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_hearder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/hearder */ "./pages/components/hearder.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/footer */ "./pages/components/footer.js");
/* harmony import */ var particles_bg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! particles-bg */ "./node_modules/particles-bg/dist/index.es.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\GitHub\\agent-bookkeeping\\pages\\agent_bookkeeping.js";




function AgentBookkeeping() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_hearder__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(particles_bg__WEBPACK_IMPORTED_MODULE_3__.default, {
      type: "color",
      bg: {
        width: "100%",
        position: "absolute",
        zIndex: "0",
        left: 0
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
      "class": "text-gray-600 body-font",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        "class": "container mx-auto flex px-5 py-24 md:flex-row flex-col items-center",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          "class": "lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
            "class": "title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900",
            children: "Before they sold out readymade gluten"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            "class": "mb-8 leading-relaxed",
            children: "Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            "class": "flex justify-center",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              "class": "inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg",
              "control-id": "ControlID-85",
              children: "Button"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 26,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              "class": "ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg",
              children: "Button"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 27,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          "class": "lg:max-w-lg lg:w-full md:w-1/2 w-5/6",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            "class": "object-cover object-center rounded",
            alt: "hero",
            src: "https://dummyimage.com/720x600"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_footer__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }, this)]
  }, void 0, true);
}
_c = AgentBookkeeping;

var _c;

$RefreshReg$(_c, "AgentBookkeeping");

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


/***/ }),

/***/ "./pages/components/footer.js":
/*!************************************!*\
  !*** ./pages/components/footer.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Footer; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "D:\\GitHub\\agent-bookkeeping\\pages\\components\\footer.js";
function Footer() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("footer", {
    "class": "text-gray-600 body-font",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      "class": "container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        "class": "flex title-font font-medium items-center md:justify-start justify-center text-gray-900",
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
            lineNumber: 8,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 7,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          "class": "ml-3 text-xl",
          children: "Tailblocks"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 6,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        "class": "text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4",
        children: ["\xA9 2020 Tailblocks \u2014", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          href: "https://twitter.com/knyttneve",
          "class": "text-gray-600 ml-1",
          rel: "noopener noreferrer",
          target: "_blank",
          children: "@knyttneve"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        "class": "inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          "class": "text-gray-500",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
            fill: "currentColor",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2",
            "class": "w-5 h-5",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
              d: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 18,
              columnNumber: 21
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          "class": "ml-3 text-gray-500",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
            fill: "currentColor",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2",
            "class": "w-5 h-5",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
              d: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 23,
              columnNumber: 21
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          "class": "ml-3 text-gray-500",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
            fill: "none",
            stroke: "currentColor",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2",
            "class": "w-5 h-5",
            viewBox: "0 0 24 24",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("rect", {
              width: "20",
              height: "20",
              x: "2",
              y: "2",
              rx: "5",
              ry: "5"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 28,
              columnNumber: 21
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
              d: "M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 29,
              columnNumber: 21
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          "class": "ml-3 text-gray-500",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
            fill: "currentColor",
            stroke: "currentColor",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "0",
            "class": "w-5 h-5",
            viewBox: "0 0 24 24",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
              stroke: "none",
              d: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 34,
              columnNumber: 21
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("circle", {
              cx: "4",
              cy: "4",
              r: "2",
              stroke: "none"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 21
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 9
  }, this);
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


/***/ }),

/***/ "./pages/components/hearder.js":
/*!*************************************!*\
  !*** ./pages/components/hearder.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Header; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "D:\\GitHub\\agent-bookkeeping\\pages\\components\\hearder.js";

function Header() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("header", {
    "class": "text-gray-600 body-font",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      "class": "container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
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
            lineNumber: 9,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          "class": "ml-3 text-xl",
          children: "Tailblocks"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
        "class": "md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400\tflex flex-wrap items-center text-base justify-center",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          "class": "mr-5 hover:text-gray-900",
          children: "First Link"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          "class": "mr-5 hover:text-gray-900",
          children: "Second Link"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          "class": "mr-5 hover:text-gray-900",
          children: "Third Link"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          "class": "mr-5 hover:text-gray-900",
          children: "Fourth Link"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        "class": "inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0",
        "control-id": "ControlID-83",
        children: ["Button", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
          fill: "none",
          stroke: "currentColor",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          "stroke-width": "2",
          "class": "w-4 h-4 ml-1",
          viewBox: "0 0 24 24",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
            d: "M5 12h14M12 5l7 7-7 7"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
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


/***/ }),

/***/ "./node_modules/next/dist/build/polyfills/object-assign.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/build/polyfills/object-assign.js ***!
  \*****************************************************************/
/***/ (function(module) {

"use strict";
var assign=Object.assign.bind(Object);module.exports=assign;module.exports.default=module.exports;
//# sourceMappingURL=object-assign.js.map

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fagent_bookkeeping&absolutePagePath=D%3A%5CGitHub%5Cagent-bookkeeping%5Cpages%5Cagent_bookkeeping.js!":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fagent_bookkeeping&absolutePagePath=D%3A%5CGitHub%5Cagent-bookkeeping%5Cpages%5Cagent_bookkeeping.js! ***!
  \***********************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/agent_bookkeeping",
      function () {
        return __webpack_require__(/*! ./pages/agent_bookkeeping.js */ "./pages/agent_bookkeeping.js");
      }
    ]);
  

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/particles-bg/dist/index.es.js":
/*!****************************************************!*\
  !*** ./node_modules/particles-bg/dist/index.es.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var raf_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raf-manager */ "./node_modules/raf-manager/build/RAFManager.min.js");
/* harmony import */ var raf_manager__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(raf_manager__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var proton_engine__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! proton-engine */ "./node_modules/proton-engine/build/proton.min.js");
/* harmony import */ var proton_engine__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(proton_engine__WEBPACK_IMPORTED_MODULE_2__);




var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

// Code source from here, thanks author
// https://github.com/drawcall/Proton/blob/gh-pages/source/src/utils/Rand.js
var Rand = function () {
    function Rand() {
        classCallCheck(this, Rand);

        this.list = [];
    }

    createClass(Rand, [{
        key: "set",
        value: function set$$1(probability, target) {
            this.list.push({
                probability: probability,
                target: target,
                a: 0,
                b: 1
            });

            this.calculation();
        }
    }, {
        key: "calculation",
        value: function calculation() {
            var total = 0;
            for (var i = 0; i < this.list.length; i++) {
                total += this.list[i].probability;
            }

            for (var _i = 0; _i < this.list.length; _i++) {
                var obj = this.list[_i];
                var val = obj.probability / total;

                obj.a = _i === 0 ? 0 : this.list[_i - 1].b;
                obj.b = obj.a + val;
            }
        }
    }, {
        key: "getResult",
        value: function getResult() {
            var val = Math.random();
            for (var i = 0; i < this.list.length; i++) {
                var obj = this.list[i];

                if (val <= obj.b && val > obj.a) {
                    return obj.target;
                }
            }

            return this.list[0].target;
        }
    }]);
    return Rand;
}();

var Canvas = function (_React$Component) {
  inherits(Canvas, _React$Component);

  function Canvas(props) {
    classCallCheck(this, Canvas);

    var _this = possibleConstructorReturn(this, (Canvas.__proto__ || Object.getPrototypeOf(Canvas)).call(this, props));

    _this._iid = 0;
    _this._oid = 0;
    _this.size = { width: 0, height: 0 };
    _this.canvasRef = react__WEBPACK_IMPORTED_MODULE_0___default().createRef();
    return _this;
  }

  createClass(Canvas, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this._oid = setTimeout(function () {
        _this2.initCanvas();
        _this2.resize = _this2.resize.bind(_this2);
        window.addEventListener("resize", _this2.resize);
      }, 100);

      var canvas = this.getCanvas();
      this.props.onCanvasDidMount && this.props.onCanvasDidMount(canvas);
    }
  }, {
    key: "initCanvas",
    value: function initCanvas() {
      var canvas = this.getCanvas();

      if (this.props.globalCompositeOperation) {
        var context = canvas.getContext("2d");
        context.globalCompositeOperation = this.props.globalCompositeOperation;
      }

      var _setCanvasSize = this.setCanvasSize(canvas),
          width = _setCanvasSize.width,
          height = _setCanvasSize.height;

      this.heartbeatDetectionCanvasSize(canvas);
      this.props.onCanvasInited(canvas, width, height);
    }
  }, {
    key: "getCanvas",
    value: function getCanvas() {
      var canvas = this.canvasRef.current;
      return canvas;
    }
  }, {
    key: "heartbeatDetectionCanvasSize",
    value: function heartbeatDetectionCanvasSize(canvas) {
      var _this3 = this;

      this._iid = setInterval(function () {
        if (_this3.canvasRef.current) {
          var newHeight = _this3.canvasRef.current.clientHeight;
          if (newHeight !== _this3.size.height) {
            var _setCanvasSize2 = _this3.setCanvasSize(canvas),
                width = _setCanvasSize2.width,
                height = _setCanvasSize2.height;

            _this3.props.onResize && _this3.props.onResize(width, height);
          }
        }
      }, 1000 / 10);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      try {
        window.removeEventListener("resize", this.resize);
        clearInterval(this._iid);
        clearTimeout(this._oid);
      } catch (e) {}
    }
  }, {
    key: "resize",
    value: function resize() {
      var canvas = this.getCanvas();

      var _setCanvasSize3 = this.setCanvasSize(canvas),
          width = _setCanvasSize3.width,
          height = _setCanvasSize3.height;

      this.props.onResize && this.props.onResize(width, height);
    }
  }, {
    key: "setCanvasSize",
    value: function setCanvasSize(canvas) {
      var width = this.canvasRef.current.clientWidth;
      var height = this.canvasRef.current.clientHeight;

      this.size.width = width;
      this.size.height = height;
      canvas.width = width;
      canvas.height = height;
      return { width: width, height: height };
    }
  }, {
    key: "handleWaypointEnter",
    value: function handleWaypointEnter() {
      raf_manager__WEBPACK_IMPORTED_MODULE_1___default().start();
    }
  }, {
    key: "handleWaypointLeave",
    value: function handleWaypointLeave() {
      raf_manager__WEBPACK_IMPORTED_MODULE_1___default().stop();
    }
  }, {
    key: "getStyle",
    value: function getStyle() {
      var bg = this.props.bg;

      var style = { width: "100%", height: "100%" };

      if (bg === true) {
        style = Object.assign(style, {
          position: "absolute",
          zIndex: -1,
          top: 0,
          left: 0
        });
      } else if (bg && (typeof bg === "undefined" ? "undefined" : _typeof(bg)) === "object") {
        style = Object.assign(style, bg);
      }

      return style;
    }
  }, {
    key: "handleMouseDown",
    value: function handleMouseDown(e) {
      this.props.onMouseDown && this.props.onMouseDown(e);
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("canvas", { className: "particles-bg-canvas-self",
        ref: this.canvasRef,
        onMouseDown: this.handleMouseDown.bind(this),
        style: this.getStyle()
      });
    }
  }]);
  return Canvas;
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : {};
}

function getColor(color, a) {
    var c = void 0;
    if (color) {
        c = hexToRgb(color);
        return "rgba(" + c.r + "," + c.g + "," + c.b + ", " + a + ")";
    } else {
        return null;
    }
}

var Ball = function (_React$Component) {
  inherits(Ball, _React$Component);

  function Ball(props) {
    classCallCheck(this, Ball);

    var _this = possibleConstructorReturn(this, (Ball.__proto__ || Object.getPrototypeOf(Ball)).call(this, props));

    _this.renderProton = _this.renderProton.bind(_this);
    return _this;
  }

  createClass(Ball, [{
    key: "onCanvasInited",
    value: function onCanvasInited(canvas, width, height) {
      this.createProton(canvas, width, height);
      this.createMiniEmitter(canvas);
      raf_manager__WEBPACK_IMPORTED_MODULE_1___default().add(this.renderProton);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      try {
        raf_manager__WEBPACK_IMPORTED_MODULE_1___default().remove(this.renderProton);
        this.proton.destroy();
      } catch (e) {}
    }
  }, {
    key: "onResize",
    value: function onResize() {}
  }, {
    key: "createProton",
    value: function createProton(canvas, width, height) {
      var _this2 = this;

      var context = canvas.getContext("2d");
      this.proton = new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default())();

      var emitter = new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Emitter)();
      emitter.rate = new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Rate)(this.props.num ? new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Span)(this.props.num) : new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Span)(4, 9), new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Span)(0.8, 1.3));

      emitter.addInitialize(new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Mass)(1));
      emitter.addInitialize(new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Radius)(1, 50));
      emitter.addInitialize(new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Life)(5, 6));
      emitter.addInitialize(new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Velocity)(new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Span)(5, 8), new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Span)(30, 70), "polar"));

      emitter.addBehaviour(new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Alpha)(1, 0));
      emitter.addBehaviour(new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Color)(["#36aaf3", "#fd769c", "#94ff22", "#ffa545", "#ffffff"]));
      emitter.addBehaviour(new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Scale)(0.7, 1));
      emitter.addBehaviour(new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Gravity)(3));
      emitter.addBehaviour(new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Collision)(emitter));
      emitter.addBehaviour(this.customDeadBehaviour(canvas));
      emitter.addBehaviour(new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().CrossZone)(new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().RectZone)(0, 0, canvas.width, canvas.height), "bound"));

      emitter.p.x = Math.min(500, Math.max(canvas.width / 2 - 400, 50));
      emitter.p.y = canvas.height / 2 + 50;
      emitter.emit();
      this.proton.addEmitter(emitter);

      var renderer = new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().CanvasRenderer)(canvas);
      renderer.onProtonUpdate = function () {
        context.fillStyle = getColor(_this2.props.color, 0.2) || "rgba(255, 255, 255, 0.2)";
        context.fillRect(0, 0, canvas.width, canvas.height);
      };
      this.proton.addRenderer(renderer);
    }
  }, {
    key: "customDeadBehaviour",
    value: function customDeadBehaviour(canvas) {
      var _this3 = this;

      return {
        initialize: function initialize(particle) {},
        applyBehaviour: function applyBehaviour(particle) {
          if (particle.p.y + particle.radius >= canvas.height) {
            if (particle.radius > 9) {
              _this3.miniEmitteing(particle);
              particle.dead = true;
            }
          }
        }
      };
    }
  }, {
    key: "createMiniEmitter",
    value: function createMiniEmitter(canvas) {
      var miniEmitter = new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Emitter)();
      miniEmitter.rate = new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Rate)(new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Span)(3, 6), new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Span)(1, 2));

      miniEmitter.addInitialize(new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Mass)(1));
      miniEmitter.radiusInitialize = new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Radius)();
      miniEmitter.addInitialize(miniEmitter.radiusInitialize);
      miniEmitter.addInitialize(new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Life)(0.5, 1));
      miniEmitter.addInitialize(new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().V)(new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Span)(1.5, 3), new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Span)(0, 70, true), "polar"));

      miniEmitter.colorBehaviour = new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Color)("#ffffff");
      miniEmitter.addBehaviour(new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Alpha)(1, 0));
      miniEmitter.addBehaviour(miniEmitter.colorBehaviour);
      miniEmitter.addBehaviour(new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Gravity)(4));
      miniEmitter.addBehaviour(new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Collision)(miniEmitter));
      miniEmitter.addBehaviour(new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().CrossZone)(new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().RectZone)(0, 0, canvas.width, canvas.height), "bound"));
      this.proton.addEmitter(miniEmitter);

      this.miniEmitter = miniEmitter;
    }
  }, {
    key: "miniEmitteing",
    value: function miniEmitteing(particle) {
      var miniEmitter = this.miniEmitter;
      miniEmitter.radiusInitialize.reset(particle.radius * 0.05, particle.radius * 0.2);
      miniEmitter.colorBehaviour.reset(particle.color);
      miniEmitter.p.x = particle.p.x;
      miniEmitter.p.y = particle.p.y;
      miniEmitter.emit("once");
    }
  }, {
    key: "renderProton",
    value: function renderProton() {
      this.proton && this.proton.update();
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Canvas, { bg: this.props.bg,
        globalCompositeOperation: "darker",
        onCanvasInited: this.onCanvasInited.bind(this),
        onResize: this.onResize.bind(this)
      });
    }
  }]);
  return Ball;
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));

var Color = function (_React$Component) {
  inherits(Color, _React$Component);

  function Color(props) {
    classCallCheck(this, Color);

    var _this = possibleConstructorReturn(this, (Color.__proto__ || Object.getPrototypeOf(Color)).call(this, props));

    _this.colors = ["#529B88", "#CDD180", "#FFFA32", "#FB6255", "#FB4A53", "#FF4E50", "#F9D423"];
    _this.renderProton = _this.renderProton.bind(_this);
    return _this;
  }

  createClass(Color, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      try {
        raf_manager__WEBPACK_IMPORTED_MODULE_1___default().remove(this.renderProton);
        this.proton.destroy();
      } catch (e) {}
    }
  }, {
    key: "onCanvasInited",
    value: function onCanvasInited(canvas, width, height) {
      this.createProton(canvas, width, height);
      raf_manager__WEBPACK_IMPORTED_MODULE_1___default().add(this.renderProton);
    }
  }, {
    key: "onResize",
    value: function onResize() {}
  }, {
    key: "createProton",
    value: function createProton(canvas, width, height) {
      this.proton = new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default())();
      var emitter = new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Emitter)();
      emitter.rate = new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Rate)(this.props.num ? new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Span)(this.props.num) : new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Span)(5, 8), new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Span)(0.1, 0.25));

      emitter.addInitialize(new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Mass)(1));
      emitter.addInitialize(new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Radius)(20, 200));
      emitter.addInitialize(new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Life)(2, 4));
      emitter.addInitialize(new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Position)(new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().RectZone)(0, 0, width, height)));

      emitter.addBehaviour(new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Alpha)(0, 1, Infinity, (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().easeOutCubic)));
      emitter.addBehaviour(new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Scale)(1, 0, Infinity, (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().easeOutCubic)));
      emitter.addBehaviour(new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Color)(this.colors, "random"));

      emitter.emit();
      this.proton.addEmitter(emitter);

      var renderer = new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().CanvasRenderer)(canvas);
      this.proton.addRenderer(renderer);
    }
  }, {
    key: "renderProton",
    value: function renderProton() {
      this.proton && this.proton.update();
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Canvas, { bg: this.props.bg,
        globalCompositeOperation: "darker",
        onCanvasInited: this.onCanvasInited.bind(this),
        onResize: this.onResize.bind(this)
      });
    }
  }]);
  return Color;
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));

var Color$1 = function (_React$Component) {
    inherits(Color, _React$Component);

    function Color(props) {
        classCallCheck(this, Color);

        var _this = possibleConstructorReturn(this, (Color.__proto__ || Object.getPrototypeOf(Color)).call(this, props));

        _this.colors = ["#529B88", "#CDD180", "#FFFA32", "#FB6255", "#FB4A53", "#FF4E50", "#F9D423"];
        _this.renderProton = _this.renderProton.bind(_this);
        return _this;
    }

    createClass(Color, [{
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            try {
                raf_manager__WEBPACK_IMPORTED_MODULE_1___default().remove(this.renderProton);
                this.proton.destroy();
            } catch (e) {}
        }
    }, {
        key: "onCanvasInited",
        value: function onCanvasInited(canvas, width, height) {
            this.createProton(canvas, width, height);
            raf_manager__WEBPACK_IMPORTED_MODULE_1___default().add(this.renderProton);
        }
    }, {
        key: "onResize",
        value: function onResize(width, height) {
            this.crossZoneBehaviour.zone.width = width;
            this.crossZoneBehaviour.zone.height = height;
            this.proton.renderers[0].resize(width, height);        }
    }, {
        key: "getProp",
        value: function getProp(key, defaultVal) {
            var config = this.props.config || {};
            var val = config[key] || defaultVal;
            if (Array.isArray(val)) {
                return new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Span)(val[0], val[1]);
            } else {
                return val;
            }
        }
    }, {
        key: "getArrProp",
        value: function getArrProp(key, defaultVal) {
            var config = this.props.config || {};
            var val = config[key] || defaultVal;
            if (!val) return null;

            if (Array.isArray(val)) {
                return val;
            } else {
                return [val, val];
            }
        }
    }, {
        key: "createProton",
        value: function createProton(canvas, width, height) {
            var num = this.getProp("num", [5, 8]);
            var rps = this.getProp("rps", [0.1, 0.2]);
            var mass = this.getProp("mass", 1);
            var radius = this.getProp("radius", [10, 30]);
            var life = this.getProp("life", [2, 3]);
            var body = this.getProp("body");
            var position = this.getProp("position");
            var v = this.getProp("v", [2, 3]);
            var tha = this.getProp("tha", [-15, 15]);
            var alpha = this.getArrProp("alpha");
            var scale = this.getArrProp("scale");
            var color = this.getArrProp("color");
            var cross = this.getProp("cross", "dead");
            var random = this.getProp("random");
            var rotate = this.getArrProp("rotate");
            var g = this.getProp("g");
            var f = this.getArrProp("f");
            var emitterV = this.getProp("emitter");

            this.proton = new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default())();
            var emitter = void 0;
            if (emitterV === "follow") {
                emitter = new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().FollowEmitter)();
            } else {
                emitter = new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Emitter)();
            }
            emitter.rate = new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Rate)(num, rps);

            emitter.addInitialize(new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Mass)(mass));
            emitter.addInitialize(new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Radius)(radius));
            emitter.addInitialize(new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Life)(life));
            emitter.addInitialize(new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Velocity)(v, tha, "polar"));
            if (body) emitter.addInitialize(new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Body)(body));

            var pos = void 0;
            if (position === "all" || position === "screen") {
                pos = new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Position)(new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().RectZone)(0, 0, canvas.width, canvas.height));
            } else if ((typeof position === "undefined" ? "undefined" : _typeof(position)) === "object") {
                pos = new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Position)(new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().RectZone)(position.x, position.y, position.width, position.height));
            } else {
                emitter.p.x = canvas.width / 2;
                emitter.p.y = canvas.height / 2;
            }

            emitter.addInitialize(pos);

            /// behaviour
            var alphaB = alpha ? new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Alpha)(alpha[0], alpha[1]) : new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Alpha)(0, 1);
            var scaleB = scale ? new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Scale)(scale[0], scale[1]) : new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Scale)(1, 0.2);
            var colorB = color ? new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Color)(color[0], color[1]) : new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Color)(this.colors);

            emitter.addBehaviour(alphaB);
            emitter.addBehaviour(scaleB);
            if (!body) emitter.addBehaviour(colorB);

            if (rotate) {
                if (rotate[0] === true || rotate[0] === "rotate") {
                    emitter.addBehaviour(new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Rotate)());
                } else {
                    emitter.addBehaviour(new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Rotate)(rotate[0], rotate[1]));
                }
            }

            var zone = new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().RectZone)(0, 0, canvas.width, canvas.height);
            var crossZoneBehaviour = new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().CrossZone)(zone, cross);
            emitter.addBehaviour(crossZoneBehaviour);

            random && emitter.addBehaviour(new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().RandomDrift)(random, random, 0.05));
            g && emitter.addBehaviour(new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().G)(g));
            f && emitter.addBehaviour(new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().F)(f[0], f[1]));

            emitter.emit();
            this.proton.addEmitter(emitter);

            var renderer = this.createRenderer(canvas);
            this.proton.addRenderer(renderer);

            this.emitter = emitter;
            this.crossZoneBehaviour = crossZoneBehaviour;
        }
    }, {
        key: "createRenderer",
        value: function createRenderer(canvas) {
            var width = canvas.width;
            var height = canvas.height;
            var context = canvas.getContext("2d");
            var renderer = new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().CanvasRenderer)(canvas);

            var onUpdate = this.getProp("onUpdate");
            if (onUpdate) {
                renderer.onProtonUpdate = function () {
                    onUpdate(context, width, height);
                };
            }

            var onParticleCreated = this.getProp("onParticleCreated");
            if (onParticleCreated) {
                renderer.onParticleCreated = function (particle) {
                    onParticleCreated(context, particle);
                };
            }

            var onParticleUpdate = this.getProp("onParticleUpdate");
            if (onParticleUpdate) {
                renderer.onParticleUpdate = function (particle) {
                    onParticleUpdate(context, particle);
                };
            }

            return renderer;
        }
    }, {
        key: "renderProton",
        value: function renderProton() {
            this.proton && this.proton.update();
        }
    }, {
        key: "handleMouseDown",
        value: function handleMouseDown(e) {
            var onMouseDown = this.getProp("onMouseDown");
            if (onMouseDown) {
                onMouseDown(e);
            }
        }
    }, {
        key: "render",
        value: function render() {
            var globalCompositeOperation = this.props.globalCompositeOperation || this.props.operation || "source-over";

            return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Canvas, {
                bg: this.props.bg,
                onMouseDown: this.handleMouseDown.bind(this),
                globalCompositeOperation: globalCompositeOperation,
                onCanvasInited: this.onCanvasInited.bind(this),
                onResize: this.onResize.bind(this)
            });
        }
    }]);
    return Color;
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));

var Lines = function (_React$Component) {
  inherits(Lines, _React$Component);

  function Lines(props) {
    classCallCheck(this, Lines);

    var _this = possibleConstructorReturn(this, (Lines.__proto__ || Object.getPrototypeOf(Lines)).call(this, props));

    _this.renderProton = _this.renderProton.bind(_this);
    return _this;
  }

  createClass(Lines, [{
    key: "onCanvasDidMount",
    value: function onCanvasDidMount(canvas) {
      if (this.props.color) {
        canvas.style.backgroundColor = this.props.color;
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      try {
        raf_manager__WEBPACK_IMPORTED_MODULE_1___default().remove(this.renderProton);
        this.proton.destroy();
      } catch (e) {}
    }
  }, {
    key: "onCanvasInited",
    value: function onCanvasInited(canvas, width, height) {
      this.createProton(canvas, width, height);
      raf_manager__WEBPACK_IMPORTED_MODULE_1___default().add(this.renderProton);
    }
  }, {
    key: "onResize",
    value: function onResize(width, height) {
      this.crossZoneBehaviour.zone.width = width;
      this.crossZoneBehaviour.zone.height = height;
      this.proton.renderers[0].resize(width, height);
    }
  }, {
    key: "createProton",
    value: function createProton(canvas, width, height) {
      this.proton = new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default())();

      var emitter = new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Emitter)();
      emitter.damping = 0.008;
      emitter.rate = new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Rate)(this.props.num ? this.props.num : 250);
      emitter.addInitialize(new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Mass)(1));
      emitter.addInitialize(new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Radius)(4));
      emitter.addInitialize(new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Velocity)(new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Span)(1.5), new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Span)(0, 360), "polar"));
      var mouseObj = {
        x: width / 2,
        y: height / 2
      };

      var attractionBehaviour = new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Attraction)(mouseObj, 0, 0);
      var crossZoneBehaviour = new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().CrossZone)(new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().RectZone)(0, 0, canvas.width, canvas.height), "cross");
      emitter.addBehaviour(new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Color)("random"));
      emitter.addBehaviour(attractionBehaviour, crossZoneBehaviour);
      emitter.addBehaviour(new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().RandomDrift)(10, 10, 0.05));
      emitter.p.x = canvas.width / 2;
      emitter.p.y = canvas.height / 2;
      emitter.emit("once");

      this.proton.addEmitter(emitter);
      this.proton.addRenderer(this.createRenderer(canvas));
      this.crossZoneBehaviour = crossZoneBehaviour;
    }
  }, {
    key: "createRenderer",
    value: function createRenderer(canvas) {
      var _this2 = this;

      var context = canvas.getContext("2d");
      var renderer = new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().CanvasRenderer)(canvas);
      renderer.onProtonUpdate = function () {
        context.fillStyle = getColor(_this2.props.color, 0.02) || "rgba(0, 0, 0, 0.02)";
        context.fillRect(0, 0, canvas.width, canvas.height);
      };

      renderer.onParticleUpdate = function (particle) {
        context.beginPath();
        context.strokeStyle = particle.color;
        context.lineWidth = 1;
        context.moveTo(particle.old.p.x, particle.old.p.y);
        context.lineTo(particle.p.x, particle.p.y);
        context.closePath();
        context.stroke();
      };

      return renderer;
    }
  }, {
    key: "renderProton",
    value: function renderProton() {
      this.proton && this.proton.update();
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Canvas, { bg: this.props.bg,
        globalCompositeOperation: "darker",
        onCanvasDidMount: this.onCanvasDidMount.bind(this),
        onCanvasInited: this.onCanvasInited.bind(this),
        onResize: this.onResize.bind(this)
      });
    }
  }]);
  return Lines;
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));

var Thick = function (_React$Component) {
  inherits(Thick, _React$Component);

  function Thick(props) {
    classCallCheck(this, Thick);

    var _this = possibleConstructorReturn(this, (Thick.__proto__ || Object.getPrototypeOf(Thick)).call(this, props));

    _this.hue = 0;
    _this.index = 0;
    _this.colorTemplate = "hsla(hue,80%,50%, 0.75)";
    _this.renderProton = _this.renderProton.bind(_this);
    return _this;
  }

  createClass(Thick, [{
    key: "onCanvasDidMount",
    value: function onCanvasDidMount(canvas) {
      if (this.props.color) {
        canvas.style.backgroundColor = this.props.color;
      }
    }
  }, {
    key: "onCanvasInited",
    value: function onCanvasInited(canvas, width, height) {
      this.canvas = canvas;
      this.createProton(canvas, width, height);
      raf_manager__WEBPACK_IMPORTED_MODULE_1___default().add(this.renderProton);
    }
  }, {
    key: "onResize",
    value: function onResize(width, height) {
      this.crossZoneBehaviour.zone.width = width;
      this.crossZoneBehaviour.zone.height = height;
      this.proton.renderers[0].resize(width, height);
    }
  }, {
    key: "createProton",
    value: function createProton(canvas, width, height) {
      this.proton = new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default())();

      var emitter = new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Emitter)();
      emitter.damping = 0.008;
      emitter.rate = new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Rate)(this.props.num ? this.props.num : 150);

      // Initialize
      emitter.addInitialize(new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Mass)(1));
      emitter.addInitialize(new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Radius)(8));
      emitter.addInitialize(new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().V)(new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Span)(0.1, 0.5), new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Span)(0, 360), "polar"));
      emitter.addInitialize(new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Position)(new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().CircleZone)(canvas.width / 2, canvas.height / 2, 100)));

      // Behaviour
      var crossZoneBehaviour = new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().CrossZone)(new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().RectZone)(0, 0, canvas.width, canvas.height), "cross");
      emitter.addBehaviour(crossZoneBehaviour);
      this.repulsion = new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Repulsion)({
        x: canvas.width / 2,
        y: canvas.height / 2 - 100
      }, 3, 300);

      this.attraction = new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Attraction)({
        x: canvas.width / 2,
        y: canvas.height / 2
      }, 3, 200);
      emitter.addBehaviour(this.attraction, this.repulsion);
      emitter.addBehaviour(new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Color)("random"));
      emitter.addBehaviour(new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().RandomDrift)(20, 15, 0.15));

      emitter.emit("once");
      this.proton.addEmitter(emitter);
      this.proton.addRenderer(this.createRenderer(canvas));
      this.crossZoneBehaviour = crossZoneBehaviour;
    }
  }, {
    key: "createRenderer",
    value: function createRenderer(canvas) {
      var _this2 = this;

      var context = canvas.getContext("2d");
      var renderer = new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().CanvasRenderer)(canvas);

      renderer.onProtonUpdate = function () {
        _this2.hue += 1;
        context.fillStyle = getColor(_this2.props.color, 0.02) || "rgba(0, 0, 0, 0.02)";
        context.fillRect(0, 0, canvas.width, canvas.height);
      };

      renderer.onParticleCreated = function (particle) {
        particle.data.begin = proton_engine__WEBPACK_IMPORTED_MODULE_2___default().MathUtil.randomAToB(1, 120);
        particle.data.tha = proton_engine__WEBPACK_IMPORTED_MODULE_2___default().MathUtil.randomAToB(0, Math.PI * 2);
      };

      renderer.onParticleUpdate = function (particle) {
        var hue = particle.data.begin + _this2.hue;
        particle.color = _this2.colorTemplate.replace("hue", hue % 360);

        var ratio = 3 / 4;
        var radius = particle.radius * (1 - ratio) * Math.cos(particle.data.tha += 0.01) + particle.radius * ratio;

        context.beginPath();
        context.fillStyle = particle.color;
        context.arc(particle.p.x, particle.p.y, radius, 0, Math.PI * 2, true);
        context.closePath();
        context.fill();
      };

      return renderer;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      try {
        raf_manager__WEBPACK_IMPORTED_MODULE_1___default().remove(this.renderProton);
        this.proton.destroy();
      } catch (e) {}
    }
  }, {
    key: "renderProton",
    value: function renderProton() {
      var canvas = this.canvas;
      this.proton.update();
      if (this.index % 200 === 0) {
        this.attraction.targetPosition.x = Math.random() * canvas.width;
        this.attraction.targetPosition.y = Math.random() * canvas.height;

        this.repulsion.targetPosition.x = Math.random() * canvas.width;
        this.repulsion.targetPosition.y = Math.random() * canvas.height;
      }

      this.index++;
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Canvas, { bg: this.props.bg,
        onCanvasDidMount: this.onCanvasDidMount.bind(this),
        onCanvasInited: this.onCanvasInited.bind(this),
        onResize: this.onResize.bind(this)
      });
    }
  }]);
  return Thick;
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));

var Square = function (_React$Component) {
  inherits(Square, _React$Component);

  function Square(props) {
    classCallCheck(this, Square);

    var _this = possibleConstructorReturn(this, (Square.__proto__ || Object.getPrototypeOf(Square)).call(this, props));

    _this.colors = ["#fad390", "#81ecec", "#ffffff", "#badc58", "#f9ca24", "#FEA47F"];
    _this.renderProton = _this.renderProton.bind(_this);
    return _this;
  }

  createClass(Square, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      try {
        raf_manager__WEBPACK_IMPORTED_MODULE_1___default().remove(this.renderProton);
        this.proton.destroy();
      } catch (e) {}
    }
  }, {
    key: "onCanvasDidMount",
    value: function onCanvasDidMount(canvas) {}
  }, {
    key: "onCanvasInited",
    value: function onCanvasInited(canvas, width, height) {
      this.createProton(canvas, width, height);
      raf_manager__WEBPACK_IMPORTED_MODULE_1___default().add(this.renderProton);
    }
  }, {
    key: "onResize",
    value: function onResize(width, height) {
      var dis = 150;
      this.crossZoneBehaviour.zone.width = width + 2 * dis;
      this.crossZoneBehaviour.zone.height = height + 2 * dis;
      this.proton.renderers[0].resize(width, height);
    }
  }, {
    key: "createProton",
    value: function createProton(canvas, width, height) {
      this.proton = new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default())();
      var emitter = new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Emitter)();
      emitter.rate = new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Rate)(this.props.num ? this.props.num : 50);
      emitter.damping = 0;

      emitter.addInitialize(new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Mass)(1));
      emitter.addInitialize(new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Radius)(4, 70));
      emitter.addInitialize(new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Velocity)(new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Span)(2, 10), new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Span)(0), "polar"));
      emitter.addInitialize(new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Position)(new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().LineZone)(0, canvas.height, canvas.width, canvas.height)));

      var dis = 150;
      var crossZoneBehaviour = new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().CrossZone)(new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().RectZone)(0 - dis, 0 - dis, canvas.width + 2 * dis, canvas.height + 2 * dis), "cross");
      emitter.addBehaviour(crossZoneBehaviour);
      emitter.addBehaviour(new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Alpha)(proton_engine__WEBPACK_IMPORTED_MODULE_2___default().getSpan(0.1, 0.55)));
      emitter.addBehaviour(new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Color)(this.colors));

      emitter.emit("once");
      this.proton.addEmitter(emitter);
      var renderer = this.createRenderer(canvas);
      this.proton.addRenderer(renderer);

      this.crossZoneBehaviour = crossZoneBehaviour;
      emitter.preEmit(2);
    }
  }, {
    key: "createRenderer",
    value: function createRenderer(canvas) {
      var context = canvas.getContext("2d");
      var renderer = new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().CustomRenderer)();

      renderer.onProtonUpdate = function () {
        context.clearRect(0, 0, canvas.width, canvas.height);
      };

      renderer.onParticleCreated = function (particle) {
        var w = particle.radius || 60;
        var h = proton_engine__WEBPACK_IMPORTED_MODULE_2___default().MathUtil.randomAToB(100, 200, "int");
        particle.data.w = w;
        particle.data.h = h;
      };

      renderer.onParticleUpdate = function (particle) {
        var w = particle.data.w;
        var h = particle.data.h;
        context.save();
        context.globalAlpha = particle.alpha;
        context.fillStyle = particle.color;

        context.translate(particle.p.x, particle.p.y);
        context.rotate(proton_engine__WEBPACK_IMPORTED_MODULE_2___default().MathUtil.degreeTransform(particle.rotation));
        context.translate(-particle.p.x, -particle.p.y);

        context.beginPath();
        context.rect(particle.p.x - w / 2, particle.p.y - h / 2, w, h);

        context.closePath();
        context.fill();
        context.globalAlpha = 1;
        context.restore();
      };

      return renderer;
    }
  }, {
    key: "renderProton",
    value: function renderProton() {
      this.proton && this.proton.update();
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Canvas, { bg: this.props.bg,
        globalCompositeOperation: "lighter",
        onCanvasDidMount: this.onCanvasDidMount.bind(this),
        onCanvasInited: this.onCanvasInited.bind(this),
        onResize: this.onResize.bind(this)
      });
    }
  }]);
  return Square;
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));

var Cobweb = function (_React$Component) {
  inherits(Cobweb, _React$Component);

  function Cobweb(props) {
    classCallCheck(this, Cobweb);

    var _this = possibleConstructorReturn(this, (Cobweb.__proto__ || Object.getPrototypeOf(Cobweb)).call(this, props));

    _this.renderProton = _this.renderProton.bind(_this);
    return _this;
  }

  createClass(Cobweb, [{
    key: "onCanvasInited",
    value: function onCanvasInited(canvas, width, height) {
      this.createProton(canvas, width, height);
      raf_manager__WEBPACK_IMPORTED_MODULE_1___default().add(this.renderProton);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      try {
        raf_manager__WEBPACK_IMPORTED_MODULE_1___default().remove(this.renderProton);
        this.proton.destroy();
      } catch (e) {}
    }
  }, {
    key: "onResize",
    value: function onResize(width, height) {
      this.crossZoneBehaviour.zone.width = width;
      this.crossZoneBehaviour.zone.height = height;
      this.proton.renderers[0].resize(width, height);
    }
  }, {
    key: "createProton",
    value: function createProton(canvas, width, height) {
      this.proton = new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default())();

      var emitter = new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Emitter)();
      emitter.rate = new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Rate)(this.props.num ? new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Span)(this.props.num) : new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Span)(100), new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Span)(0.05, 0.2));

      emitter.addInitialize(new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Mass)(1));
      emitter.addInitialize(new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Radius)(1, 4));
      emitter.addInitialize(new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Life)(Infinity));

      var pointZone = new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Position)(new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().RectZone)(0, 0, width, height));
      emitter.addInitialize(pointZone);
      emitter.addInitialize(new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Velocity)(new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Span)(0.3, 0.6), new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Span)(0, 360), "polar"));

      emitter.addBehaviour(new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Alpha)(proton_engine__WEBPACK_IMPORTED_MODULE_2___default().getSpan(0.2, 0.9)));
      emitter.addBehaviour(new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Color)(this.props.color || "#333"));
      this.crossZoneBehaviour = new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().CrossZone)(new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().RectZone)(0, 0, width, height), "cross");
      emitter.addBehaviour(this.crossZoneBehaviour);

      emitter.emit("once");
      emitter.damping = 0;
      this.proton.addEmitter(emitter);
      this.proton.addRenderer(this.createRenderer(canvas, emitter));
    }
  }, {
    key: "createRenderer",
    value: function createRenderer(canvas, emitter) {
      var _this2 = this;

      var context = canvas.getContext("2d");
      var renderer = new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().CanvasRenderer)(canvas);
      var R = 140;

      renderer.onProtonUpdateAfter = function () {
        var particles = emitter.particles;

        for (var i = 0; i < particles.length; i++) {
          for (var j = i + 1; j < particles.length; j++) {
            var pA = particles[i];
            var pB = particles[j];
            var dis = pA.p.distanceTo(pB.p);

            if (dis < R) {
              var alpha = (1 - dis / R) * 0.5;
              context.strokeStyle = getColor(_this2.props.color, alpha) || "rgba(3, 3, 3, " + alpha + ")";
              context.beginPath();
              context.moveTo(pA.p.x, pA.p.y);
              context.lineTo(pB.p.x, pB.p.y);
              context.closePath();
              context.stroke();
            }
          }
        }
      };

      return renderer;
    }
  }, {
    key: "renderProton",
    value: function renderProton() {
      this.proton && this.proton.update();
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Canvas, { bg: this.props.bg,
        globalCompositeOperation: "darker",
        onCanvasInited: this.onCanvasInited.bind(this),
        onResize: this.onResize.bind(this)
      });
    }
  }]);
  return Cobweb;
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));

var Circle = function (_React$Component) {
  inherits(Circle, _React$Component);

  function Circle(props) {
    classCallCheck(this, Circle);

    var _this = possibleConstructorReturn(this, (Circle.__proto__ || Object.getPrototypeOf(Circle)).call(this, props));

    _this.colors = ["#74b9ff", "#e84393", "#6c5ce7", "#00b894", "#fdcb6e", "#006266", "#1B1464"];

    _this.renderProton = _this.renderProton.bind(_this);
    return _this;
  }

  createClass(Circle, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      try {
        raf_manager__WEBPACK_IMPORTED_MODULE_1___default().remove(this.renderProton);
        this.proton.destroy();
      } catch (e) {}
    }
  }, {
    key: "onCanvasInited",
    value: function onCanvasInited(canvas, width, height) {
      this.createProton(canvas, width, height);
      raf_manager__WEBPACK_IMPORTED_MODULE_1___default().add(this.renderProton);
    }
  }, {
    key: "onResize",
    value: function onResize(width, height) {
      this.crossZoneBehaviour.zone.width = width;
      this.crossZoneBehaviour.zone.height = height;
      this.proton.renderers[0].resize(width, height);
    }
  }, {
    key: "createProton",
    value: function createProton(canvas, width, height) {
      this.proton = new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default())();

      var emitter = new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Emitter)();
      emitter.rate = new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Rate)(this.props.num || 20);
      emitter.damping = 0.008;

      emitter.addInitialize(new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Mass)(1));
      emitter.addInitialize(new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Radius)(30, 600));
      emitter.addInitialize(new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Velocity)(new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Span)(0.5), new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Span)(0, 360), "polar"));
      emitter.addInitialize(new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Position)(new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().RectZone)(0, 0, canvas.width, canvas.height)));

      var crossZoneBehaviour = new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().CrossZone)(new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().RectZone)(0, 0, canvas.width, canvas.height), "cross");
      emitter.addBehaviour(crossZoneBehaviour);
      emitter.addBehaviour(new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Alpha)(proton_engine__WEBPACK_IMPORTED_MODULE_2___default().getSpan(0.35, 0.55)));
      emitter.addBehaviour(new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Color)(this.getColor()));
      emitter.addBehaviour(new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().RandomDrift)(50, 50, 0.5));

      emitter.emit("once");
      this.proton.addEmitter(emitter);

      var renderer = new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().CanvasRenderer)(canvas);
      this.proton.addRenderer(renderer);

      this.crossZoneBehaviour = crossZoneBehaviour;
    }
  }, {
    key: "getColor",
    value: function getColor() {
      var c = this.colors;
      if (this.props.color) {
        if (Array.isArray(this.props.color)) {
          c = this.props.color;
        } else {
          c = [this.props.color];
        }
      }

      return c;
    }
  }, {
    key: "renderProton",
    value: function renderProton() {
      this.proton && this.proton.update();
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Canvas, { bg: this.props.bg,
        globalCompositeOperation: "darken",
        onCanvasInited: this.onCanvasInited.bind(this),
        onResize: this.onResize.bind(this)
      });
    }
  }]);
  return Circle;
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));

var Tadpole = function (_React$Component) {
  inherits(Tadpole, _React$Component);

  function Tadpole(props) {
    classCallCheck(this, Tadpole);

    var _this = possibleConstructorReturn(this, (Tadpole.__proto__ || Object.getPrototypeOf(Tadpole)).call(this, props));

    _this.renderProton = _this.renderProton.bind(_this);
    return _this;
  }

  createClass(Tadpole, [{
    key: "onCanvasDidMount",
    value: function onCanvasDidMount(canvas) {}
  }, {
    key: "onCanvasInited",
    value: function onCanvasInited(canvas, width, height) {
      this.createProton(canvas, width, height);
      this.renderProton();
    }
  }, {
    key: "onResize",
    value: function onResize(width, height) {
      this.crossZoneBehaviour.zone.width = width;
      this.crossZoneBehaviour.zone.height = height;
      this.proton.renderers[0].resize(width, height);
    }
  }, {
    key: "createProton",
    value: function createProton(canvas, width, height) {
      this.proton = new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default())();

      var emitter = new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Emitter)();
      emitter.damping = 0.008;
      emitter.rate = new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Rate)(this.props.num ? this.props.num : 50);
      emitter.addInitialize(new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Mass)(1));
      emitter.addInitialize(new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Radius)(5, 9));
      emitter.addInitialize(new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Velocity)(new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Span)(1.5), new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Span)(0, 360), "polar"));
      emitter.addInitialize(new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Position)(new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().RectZone)(0, 0, width, height)));

      var mouseInfo = {
        x: width / 2,
        y: height / 2
      };

      var attractionBehaviour = new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Attraction)(mouseInfo, 0, 0);
      var crossZoneBehaviour = new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().CrossZone)(new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().RectZone)(0, 0, canvas.width, canvas.height), "bound");
      emitter.addBehaviour(new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Color)(this.props.color || "#bbb"));
      //emitter.addBehaviour(new Proton.Alpha(new Proton.Span(0.5, 1)));
      emitter.addBehaviour(attractionBehaviour, crossZoneBehaviour);
      emitter.addBehaviour(new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().RandomDrift)(15, 15, 0.05));
      emitter.emit("once");

      this.proton.addEmitter(emitter);
      this.proton.addRenderer(this.createRenderer(canvas));
      this.crossZoneBehaviour = crossZoneBehaviour;
    }
  }, {
    key: "createRenderer",
    value: function createRenderer(canvas) {
      var jointCount = 10;
      var delayTime = 8;
      var context = canvas.getContext("2d");
      var renderer = new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().CanvasRenderer)(canvas);

      renderer.onProtonUpdate = function () {
        context.clearRect(0, 0, canvas.width, canvas.height);
      };

      renderer.onParticleCreated = function (particle) {
        particle.data.points = [];
        particle.data.index = 0;
      };

      renderer.onParticleUpdate = function (particle) {
        drawTadpoleTail(particle);
        if (particle.data.index % delayTime === 0) fillPointsData(particle);
        drawTadpoleHead(particle);
        particle.data.index++;
      };

      var fillPointsData = function fillPointsData(particle) {
        particle.data.points.unshift(particle.p.y);
        particle.data.points.unshift(particle.p.x);

        if (particle.data.points.length > jointCount) {
          particle.data.points.pop();
          particle.data.points.pop();
        }
      };

      var drawTadpoleHead = function drawTadpoleHead(particle) {
        context.fillStyle = particle.color;
        context.beginPath();
        context.arc(particle.p.x, particle.p.y, particle.radius, 0, Math.PI * 2, true);
        context.closePath();
        context.fill();
      };

      var drawTadpoleTail = function drawTadpoleTail(particle) {
        context.beginPath();
        context.strokeStyle = particle.color;

        context.moveTo(particle.p.x, particle.p.y);

        var l = particle.data.points.length;
        for (var i = 0; i < l; i += 2) {
          var x = particle.data.points[i];
          var y = particle.data.points[i + 1];

          context.lineWidth = linearEvaluation(i, l);
          context.lineTo(x, y);
          context.stroke();
        }
      };

      var linearEvaluation = function linearEvaluation(i, l) {
        if (l <= 2) return 1;

        var max = 6;
        var A = (max - 1) / (2 / l - 1);
        var B = 1 - A;
        var X = (i + 2) / l;
        var val = A * X + B;
        val = val >> 0;

        return val;
      };

      return renderer;
    }
  }, {
    key: "renderProton",
    value: function renderProton() {
      var _this2 = this;

      raf_manager__WEBPACK_IMPORTED_MODULE_1___default().add(function () {
        _this2.proton.update();
        //this.proton.stats.update();
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Canvas, { bg: this.props.bg,
        globalCompositeOperation: "darker",
        onCanvasDidMount: this.onCanvasDidMount.bind(this),
        onCanvasInited: this.onCanvasInited.bind(this),
        onResize: this.onResize.bind(this)
      });
    }
  }]);
  return Tadpole;
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));

var COLOR = ["#f6b93b", "#18dcff", "#cd84f1", "#ED4C67", "#ffffff", "#b71540", "#32ff7e", "#ff3838"];

var Polygon = function (_React$Component) {
  inherits(Polygon, _React$Component);

  function Polygon(props) {
    classCallCheck(this, Polygon);

    var _this = possibleConstructorReturn(this, (Polygon.__proto__ || Object.getPrototypeOf(Polygon)).call(this, props));

    _this.renderProton = _this.renderProton.bind(_this);
    return _this;
  }

  createClass(Polygon, [{
    key: "onCanvasInited",
    value: function onCanvasInited(canvas, width, height) {
      this.createProton(canvas);
      this.createEmitter({
        canvas: canvas,
        x: width / 2,
        y: height / 2,
        mainEmitter: true,
        zone: "bound"
      });

      raf_manager__WEBPACK_IMPORTED_MODULE_1___default().add(this.renderProton);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      try {
        raf_manager__WEBPACK_IMPORTED_MODULE_1___default().remove(this.renderProton);
        this.proton.destroy();
      } catch (e) {}
    }
  }, {
    key: "onResize",
    value: function onResize() {}
  }, {
    key: "createProton",
    value: function createProton(canvas) {
      this.proton = new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default())();
      var renderer = this.createRenderer(canvas);
      this.proton.addRenderer(renderer);
    }
  }, {
    key: "createRenderer",
    value: function createRenderer(canvas) {
      var context = canvas.getContext("2d");
      var renderer = new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().CustomRenderer)();

      renderer.onProtonUpdate = function () {
        context.clearRect(0, 0, canvas.width, canvas.height);
      };

      renderer.onParticleCreated = function (particle) {
        particle.data.count = proton_engine__WEBPACK_IMPORTED_MODULE_2___default().MathUtil.randomAToB(3, 10, true);
      };

      renderer.onParticleUpdate = function (particle) {
        context.save();
        context.globalAlpha = particle.alpha;
        context.fillStyle = particle.color;

        context.translate(particle.p.x, particle.p.y);
        context.rotate(proton_engine__WEBPACK_IMPORTED_MODULE_2___default().MathUtil.degreeTransform(particle.rotation));
        context.translate(-particle.p.x, -particle.p.y);

        context.beginPath();
        drawPolygon(particle, particle.data.count);

        context.closePath();
        context.fill();
        context.globalAlpha = 1;
        context.restore();
      };

      renderer.onParticleDead = function (particle) {};

      var drawPolygon = function drawPolygon(particle, count) {
        if (count >= 7) {
          context.arc(particle.p.x, particle.p.y, particle.radius, 0, Math.PI * 2, true);
        } else {
          var radius = particle.radius;

          for (var i = 0; i <= count; i++) {
            var x = particle.p.x + radius * Math.cos(Math.PI / 180 * 360 / count * i);
            var y = particle.p.y + radius * Math.sin(Math.PI / 180 * 360 / count * i);

            if (i === 0) context.moveTo(x, y);else context.lineTo(x, y);
          }
        }
      };

      return renderer;
    }
  }, {
    key: "createEmitter",
    value: function createEmitter(_ref) {
      var mainEmitter = _ref.mainEmitter,
          canvas = _ref.canvas,
          x = _ref.x,
          y = _ref.y,
          radius = _ref.radius,
          _ref$color = _ref.color,
          color = _ref$color === undefined ? COLOR : _ref$color,
          _ref$zone = _ref.zone,
          zone = _ref$zone === undefined ? "dead" : _ref$zone,
          _ref$once = _ref.once,
          once = _ref$once === undefined ? "all" : _ref$once,
          _ref$alpha = _ref.alpha,
          alpha = _ref$alpha === undefined ? 0.85 : _ref$alpha,
          _ref$gravity = _ref.gravity,
          gravity = _ref$gravity === undefined ? 3.5 : _ref$gravity;

      var emitter = this.proton.pool.get((proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Emitter));

      if (!emitter.completed) {
        emitter.rate = new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Rate)(this.props.num ? new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Span)(this.props.num) : new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Span)(4, 9), new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Span)(1.6, 2.2));

        var radiusInit = mainEmitter ? new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Radius)(10, 110) : new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Radius)(3, radius);
        emitter.addInitialize(new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Mass)(1));
        emitter.addInitialize(radiusInit);
        emitter.addInitialize(new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Life)(3, 6));
        emitter.addInitialize(new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Velocity)(new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Span)(4, 6), new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Span)(-90, 90), "polar"));

        emitter.addBehaviour(new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Alpha)(alpha, 0.2));
        emitter.addBehaviour(new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Color)(color));
        emitter.addBehaviour(new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Scale)(1, 0.3));
        emitter.addBehaviour(new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Rotate)());
        emitter.addBehaviour(new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Gravity)(gravity));

        emitter.addBehaviour(this.customDeadBehaviour(canvas));
        emitter.addBehaviour(new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().CrossZone)(new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().RectZone)(0, 0, canvas.width, canvas.height), zone));
      }

      emitter.p.x = x;
      emitter.p.y = y;
      if (once === "once") emitter.emit("once");else emitter.emit();

      this.proton.addEmitter(emitter);
      //this.expireEmitter(emitter);
    }
  }, {
    key: "expireEmitter",
    value: function expireEmitter(emitter) {
      var _this2 = this;

      setTimeout(function () {
        emitter.completed = true;
        _this2.proton.pool.expire(emitter);
        _this2.proton.removeEmitter(emitter);
      }, 500);
    }
  }, {
    key: "customDeadBehaviour",
    value: function customDeadBehaviour(canvas) {
      var _this3 = this;

      return {
        initialize: function initialize(particle) {
          particle.data = particle.data || {};
          particle.data.oldRadius = particle.radius;
          particle.data.emitterCount = 0;
        },
        applyBehaviour: function applyBehaviour(particle) {
          if (particle.radius < 5) return;
          if (particle.data.emitterCount >= 2) return;

          if (particle.radius <= 1 / 3 * particle.data.oldRadius) {
            particle.data.emitterCount++;
            _this3.createEmitter({
              canvas: canvas,
              x: particle.p.x,
              y: particle.p.y,
              radius: particle.radius * (1 / 2),
              alpha: 0.5,
              gravity: 5,
              color: particle.color,
              once: "once"
            });
          }
        }
      };
    }
  }, {
    key: "renderProton",
    value: function renderProton() {
      this.proton && this.proton.update();
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Canvas, { bg: this.props.bg,
        globalCompositeOperation: "darker",
        onCanvasInited: this.onCanvasInited.bind(this),
        onResize: this.onResize.bind(this)
      });
    }
  }]);
  return Polygon;
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));

var Fountain = function (_React$Component) {
  inherits(Fountain, _React$Component);

  function Fountain(props) {
    classCallCheck(this, Fountain);

    var _this = possibleConstructorReturn(this, (Fountain.__proto__ || Object.getPrototypeOf(Fountain)).call(this, props));

    _this.colors = ["#529B88", "#CDD180", "#FFFA32", "#FB6255", "#FB4A53", "#FF4E50", "#F9D423"];
    _this.renderProton = _this.renderProton.bind(_this);
    return _this;
  }

  createClass(Fountain, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      try {
        raf_manager__WEBPACK_IMPORTED_MODULE_1___default().remove(this.renderProton);
        this.proton.destroy();
      } catch (e) {}
    }
  }, {
    key: "onCanvasInited",
    value: function onCanvasInited(canvas, width, height) {
      this.createProton(canvas, width, height);
      raf_manager__WEBPACK_IMPORTED_MODULE_1___default().add(this.renderProton);
    }
  }, {
    key: "onResize",
    value: function onResize() {}
  }, {
    key: "createProton",
    value: function createProton(canvas, width, height) {
      this.proton = new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default())();
      var emitter = new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Emitter)();
      emitter.rate = new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Rate)(this.props.num ? new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Span)(this.props.num) : new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Span)(4, 8), new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Span)(0.1, 0.25));

      emitter.addInitialize(new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Mass)(1));
      emitter.addInitialize(new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Radius)(20, 200));
      emitter.addInitialize(new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Life)(2, 4));
      emitter.addInitialize(new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Velocity)(new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Span)(4, 7), new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Span)(0, 360), "polar"));
      emitter.addInitialize(new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Position)(new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().CircleZone)(width / 2, height / 2, 100)));

      emitter.addBehaviour(new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Alpha)(1, 0));
      emitter.addBehaviour(new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Scale)(0.2, 1));
      emitter.addBehaviour(this.createCustomBehaviour());
      emitter.addBehaviour(new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Color)(this.colors, "random"));
      emitter.emit();
      this.proton.addEmitter(emitter);

      var renderer = new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().CanvasRenderer)(canvas);
      this.proton.addRenderer(renderer);
    }
  }, {
    key: "createCustomBehaviour",
    value: function createCustomBehaviour() {
      var f = 10 * 100;
      return {
        initialize: function initialize(particle) {
          particle.f = new (proton_engine__WEBPACK_IMPORTED_MODULE_2___default().Vector2D)(0, 0);
        },
        applyBehaviour: function applyBehaviour(particle) {
          var length = particle.v.length() / 1000;
          var gradient = particle.v.getGradient();
          gradient += 3.14 / 2;

          particle.f.x = f * length * Math.cos(gradient);
          particle.f.y = f * length * Math.sin(gradient);
          particle.a.add(particle.f);
        }
      };
    }
  }, {
    key: "renderProton",
    value: function renderProton() {
      this.proton && this.proton.update();
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Canvas, { bg: this.props.bg,
        globalCompositeOperation: "xor",
        onCanvasInited: this.onCanvasInited.bind(this),
        onResize: this.onResize.bind(this)
      });
    }
  }]);
  return Fountain;
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));

var ParticlesBg = function (_Component) {
  inherits(ParticlesBg, _Component);

  function ParticlesBg(props) {
    classCallCheck(this, ParticlesBg);
    return possibleConstructorReturn(this, (ParticlesBg.__proto__ || Object.getPrototypeOf(ParticlesBg)).call(this, props));
  }

  createClass(ParticlesBg, [{
    key: "getRandom",
    value: function getRandom() {
      var _props = this.props,
          num = _props.num,
          bg = _props.bg,
          color = _props.color;

      // Code source from here, thanks author
      // https://github.com/drawcall/Proton/blob/gh-pages/source/src/utils/Rand.js

      if (!this.random) {
        this.random = new Rand();
        this.random.set(0.25, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Color, { num: num, bg: bg, color: color }));
        this.random.set(0.2, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Ball, { num: num, bg: bg, color: color }));
        this.random.set(0.2, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Lines, { num: num, bg: bg, color: color }));
        this.random.set(0.16, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Thick, { num: num, bg: bg, color: color }));
        this.random.set(0.18, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Circle, { num: num, bg: bg, color: color }));
        this.random.set(0.04, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Cobweb, { num: num, bg: bg, color: color }));
        this.random.set(0.1, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Polygon, { num: num, bg: bg, color: color }));
        this.random.set(0.08, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Square, { num: num, bg: bg, color: color }));
        this.random.set(0.18, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Tadpole, { num: num, bg: bg, color: color }));
        this.random.set(0.15, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Fountain, { num: num, bg: bg, color: color }));
      }
      return this.random.getResult();
    }
  }, {
    key: "getBgParticles",
    value: function getBgParticles() {
      var _props2 = this.props,
          type = _props2.type,
          num = _props2.num,
          bg = _props2.bg,
          color = _props2.color,
          config = _props2.config;


      var particles = void 0;
      switch (String(type).toLowerCase()) {
        case "color":
          particles = react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Color, { num: num, bg: bg, color: color });
          break;
        case "ball":
          particles = react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Ball, { num: num, bg: bg, color: color });
          break;
        case "lines":
          particles = react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Lines, { num: num, bg: bg, color: color });
          break;
        case "thick":
          particles = react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Thick, { num: num, bg: bg, color: color });
          break;
        case "circle":
          particles = react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Circle, { num: num, bg: bg, color: color });
          break;
        case "cobweb":
          particles = react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Cobweb, { num: num, bg: bg, color: color });
          break;
        case "polygon":
          particles = react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Polygon, { num: num, bg: bg, color: color });
          break;
        case "square":
          particles = react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Square, { num: num, bg: bg, color: color });
          break;
        case "tadpole":
          particles = react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Tadpole, { num: num, bg: bg, color: color });
          break;
        case "fountain":
          particles = react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Fountain, { num: num, bg: bg, color: color });
          break;
        case "custom":
          particles = react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Color$1, { bg: bg, config: config });
          break;
        case "random":
          particles = this.getRandom(num);
          break;

        default:
          particles = react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Color, { num: num, bg: bg, color: color });
          break;
      }

      return particles;
    }
  }, {
    key: "render",
    value: function render() {
      var particles = this.getBgParticles();
      return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
        (react__WEBPACK_IMPORTED_MODULE_0___default().Fragment),
        null,
        particles
      );
    }
  }]);
  return ParticlesBg;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

/* harmony default export */ __webpack_exports__["default"] = (ParticlesBg);
//# sourceMappingURL=index.es.js.map


/***/ }),

/***/ "./node_modules/proton-engine/build/proton.min.js":
/*!********************************************************!*\
  !*** ./node_modules/proton-engine/build/proton.min.js ***!
  \********************************************************/
/***/ (function(module) {

/*!
* Proton v4.2.1
* https://github.com/drawcall/Proton
*
* Copyright 2013-2020, A-JIE
* Licensed under the MIT license
* http://www.opensource.org/licenses/mit-license
*
*/
!function(t,e){ true?module.exports=e():0}(this,function(){"use strict";var e=3.1415926,s={PI:e,PIx2:2*e,PI_2:e/2,PI_180:e/180,N180_PI:180/e,Infinity:-999,isInfinity:function(t){return t===this.Infinity||t===1/0},randomAToB:function(t,e,i){return 2<arguments.length&&void 0!==i&&i?Math.floor(Math.random()*(e-t))+t:t+Math.random()*(e-t)},randomFloating:function(t,e,i){return this.randomAToB(t-e,t+e,i)},randomColor:function(){return"#"+("00000"+(16777216*Math.random()<<0).toString(16)).slice(-6)},randomZone:function(){},floor:function(t,e){e=1<arguments.length&&void 0!==e?e:4,e=Math.pow(10,e);return Math.floor(t*e)/e},degreeTransform:function(t){return t*e/180},toColor16:function(t){return"#"+t.toString(16)}},i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},t=function(t,e,i){return e&&a(t.prototype,e),i&&a(t,i),t};function a(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function n(t,e,i){null===t&&(t=Function.prototype);var a=Object.getOwnPropertyDescriptor(t,e);if(void 0!==a){if("value"in a)return a.value;a=a.get;return void 0!==a?a.call(i):void 0}if(null!==(t=Object.getPrototypeOf(t)))return n(t,e,i)}var r=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},h=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},l=(t(u,[{key:"getValue",value:function(t){t=0<arguments.length&&void 0!==t&&t;return this.isArray?P.getRandFromArray(this.a):this.center?s.randomFloating(this.a,this.b,t):s.randomAToB(this.a,this.b,t)}}],[{key:"setSpanValue",value:function(t,e,i){return t instanceof u?t:void 0===e?new u(t):void 0===i?new u(t,e):new u(t,e,i)}},{key:"getSpanValue",value:function(t){return t instanceof u?t.getValue():t}}]),u);function u(t,e,i){o(this,u),P.isArray(t)?(this.isArray=!0,this.a=t):(this.isArray=!1,this.a=P.initValue(t,1),this.b=P.initValue(e,this.a),this.center=P.initValue(i,!1))}var c=function(t){--t;for(var e=1;e<32;e<<=1)t|=t>>e;return t+1},d=function(t,e){return[1,0,0,0,1,0,t,e,1]},y=function(t){var e=Math.cos(t),t=Math.sin(t);return[e,-t,0,t,e,0,0,0,1]},p=function(t,e){return[t,0,0,0,e,0,0,0,1]},f=function(t,e){var i=t[0],a=t[1],r=t[2],n=t[3],s=t[4],o=t[5],h=t[6],l=t[7],u=t[8],c=e[0],d=e[1],y=e[2],p=e[3],f=e[4],v=e[5],g=e[6],t=e[7],e=e[8];return[i*c+a*p+r*g,i*d+a*f+r*t,i*y+a*v+r*e,n*c+s*p+o*g,n*d+s*f+o*t,n*y+s*v+o*e,h*c+l*p+u*g,h*d+l*f+u*t,h*y+l*v+u*e]},v={createCanvas:function(t,e,i,a){var r=3<arguments.length&&void 0!==a?a:"absolute",a=document.createElement("canvas");return a.id=t,a.width=e,a.height=i,a.style.opacity=0,a.style.position=r,this.transform(a,-500,-500,0,0),a},createDiv:function(t,e,i){var a=document.createElement("div");return a.id=t,a.style.position="absolute",this.resize(a,e,i),a},resize:function(t,e,i){t.style.width=e+"px",t.style.height=i+"px",t.style.marginLeft=-e/2+"px",t.style.marginTop=-i/2+"px"},transform:function(t,e,i,a,r){t.style.willChange="transform";var n="translate("+e+"px, "+i+"px) scale("+a+") rotate("+r+"deg)";this.css3(t,"transform",n)},transform3d:function(t,e,i,a,r){t.style.willChange="transform";r="translate3d("+e+"px, "+i+"px, 0) scale("+a+") rotate("+r+"deg)";this.css3(t,"backfaceVisibility","hidden"),this.css3(t,"transform",r)},css3:function(t,e,i){var a=e.charAt(0).toUpperCase()+e.substr(1);t.style["Webkit"+a]=i,t.style["Moz"+a]=i,t.style["O"+a]=i,t.style["ms"+a]=i,t.style[""+e]=i}},g={},m={},b=0,_=function(t,e,i){t.drawImage(e,i.x,i.y);e=t.getImageData(i.x,i.y,i.width,i.height);return t.clearRect(i.x,i.y,i.width,i.height),e},x=function(t,e,i){var a="string"==typeof t?t:t.src;g[a]?e(g[a],i):((t=new Image).onload=function(t){g[a]=t.target,e(g[a],i)},t.src=a)},k=function(t,e,i){var a,r,n=t.src;return m[n]||(a=c(t.width),r=c(t.height),(r=v.createCanvas("proton_canvas_cache_"+ ++b,a,r)).getContext("2d").drawImage(t,0,0,t.width,t.height),m[n]=r),e&&e(m[n],i),m[n]},P={initValue:function(t,e){return t=null!=t?t:e},isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)},emptyArray:function(t){t&&(t.length=0)},toArray:function(t){return this.isArray(t)?t:[t]},getRandFromArray:function(t){return t?t[Math.floor(t.length*Math.random())]:null},emptyObject:function(t,e){var i,a=1<arguments.length&&void 0!==e?e:null;for(i in t)a&&-1<a.indexOf(i)||delete t[i]},classApply:function(t,e){e=1<arguments.length&&void 0!==e?e:null;return new(e?t.bind.apply(t,[null].concat(e)):t)},setVectorVal:function(t,e){e=1<arguments.length&&void 0!==e?e:null;e&&(this.hasProp(e,"x")&&(t.p.x=e.x),this.hasProp(e,"y")&&(t.p.y=e.y),this.hasProp(e,"vx")&&(t.v.x=e.vx),this.hasProp(e,"vy")&&(t.v.y=e.vy),this.hasProp(e,"ax")&&(t.a.x=e.ax),this.hasProp(e,"ay")&&(t.a.y=e.ay),this.hasProp(e,"p")&&t.p.copy(e.p),this.hasProp(e,"v")&&t.v.copy(e.v),this.hasProp(e,"a")&&t.a.copy(e.a),this.hasProp(e,"position")&&t.p.copy(e.position),this.hasProp(e,"velocity")&&t.v.copy(e.velocity),this.hasProp(e,"accelerate")&&t.a.copy(e.accelerate))},hasProp:function(t,e){return!!t&&void 0!==t[e]},setProp:function(t,e){for(var i in e)t.hasOwnProperty(i)&&(t[i]=l.getSpanValue(e[i]));return t},getImageData:function(t,e,i){return _(t,e,i)},destroyAll:function(t,e){for(var i=1<arguments.length&&void 0!==e?e:null,a=t.length;a--;){try{t[a].destroy(i)}catch(t){}delete t[a]}t.length=0},assign:function(t,e){if("function"==typeof Object.assign)return Object.assign(t,e);for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}},E={},A={_index:0,_cache:{},id:function(t){return void 0!==E[t]&&null!==E[t]||(E[t]=0),t+"_"+E[t]++},getId:function(t){var e=this.getIdFromCache(t);return e||(e="PUID_"+this._index++,this._cache[e]=t,e)},getIdFromCache:function(t){var e,i=void 0;for(i in this._cache){if((e=this._cache[i])===t)return i;if(this.isBody(e,t)&&e.src===t.src)return i}return null},isBody:function(t,e){return"object"===(void 0===t?"undefined":i(t))&&"object"===(void 0===e?"undefined":i(e))&&t.isInner&&e.isInner},getTarget:function(t){return this._cache[t]}},T=(t(R,[{key:"get",value:function(t,e,i){var a=void 0;return i=i||t.__puid||A.getId(t),(a=this.cache[i]&&0<this.cache[i].length?this.cache[i].pop():this.createOrClone(t,e)).__puid=t.__puid||i,a}},{key:"expire",value:function(t){return this.getCache(t.__puid).push(t)}},{key:"createOrClone",value:function(t,e){return this.total++,this.create?this.create(t,e):"function"==typeof t?P.classApply(t,e):t.clone()}},{key:"getCount",value:function(){var t,e=0;for(t in this.cache)e+=this.cache[t].length;return e++}},{key:"destroy",value:function(){for(var t in this.cache)this.cache[t].length=0,delete this.cache[t]}},{key:"getCache",value:function(t){t=0<arguments.length&&void 0!==t?t:"default";return this.cache[t]||(this.cache[t]=[]),this.cache[t]}}]),R);function R(t){o(this,R),this.total=0,this.cache={}}var O=(t(w,[{key:"update",value:function(t,e){this.add(t,e);var i=this.getEmitter(),t=this.getRenderer(),e="";switch(this.type){case 2:e+="emitter:"+this.proton.emitters.length+"<br>",i&&(e+="em speed:"+i.emitSpeed+"<br>"),i&&(e+="pos:"+this.getEmitterPos(i));break;case 3:i&&(e+="initializes:"+i.initializes.length+"<br>"),i&&(e+='<span style="display:inline-block;">'+this.concatArr(i.initializes)+"</span><br>"),i&&(e+="behaviours:"+i.behaviours.length+"<br>"),i&&(e+='<span style="display:inline-block;">'+this.concatArr(i.behaviours)+"</span><br>");break;case 4:t&&(e+=t.name+"<br>"),t&&(e+="body:"+this.getCreatedNumber(t)+"<br>");break;default:e+="particles:"+this.proton.getCount()+"<br>",e+="pool:"+this.proton.pool.getCount()+"<br>",e+="total:"+this.proton.pool.total}this.container.innerHTML=e}},{key:"add",value:function(t,e){var i=this;if(!this.container){this.type=1,this.container=document.createElement("div"),this.container.style.cssText=["position:absolute;bottom:0px;left:0;cursor:pointer;","opacity:0.9;z-index:10000;padding:10px;font-size:12px;font-family:Helvetica,Arial,sans-serif;","width:120px;height:50px;background-color:#002;color:#0ff;"].join(""),this.container.addEventListener("click",function(t){i.type++,4<i.type&&(i.type=1)},!1);var a=void 0,r=void 0;switch(t){case 2:a="#201",r="#f08";break;case 3:a="#020",r="#0f0";break;default:a="#002",r="#0ff"}this.container.style["background-color"]=a,this.container.style.color=r}this.container.parentNode||(e=e||this.body||document.body).appendChild(this.container)}},{key:"getEmitter",value:function(){return this.proton.emitters[this.emitterIndex]}},{key:"getRenderer",value:function(){return this.proton.renderers[this.rendererIndex]}},{key:"concatArr",value:function(t){var e="";if(!t||!t.length)return e;for(var i=0;i<t.length;i++)e+=(t[i].name||"").substr(0,1)+".";return e}},{key:"getCreatedNumber",value:function(t){return t.pool.total||t.cpool&&t.cpool.total||0}},{key:"getEmitterPos",value:function(t){return Math.round(t.p.x)+","+Math.round(t.p.y)}}]),w);function w(t){o(this,w),this.proton=t,this.container=null,this.type=1,this.emitterIndex=0,this.rendererIndex=0}var C=(t(S,[{key:"addEventListener",value:function(t,e){return this._listeners?this.removeEventListener(t,e):this._listeners={},this._listeners[t]||(this._listeners[t]=[]),this._listeners[t].push(e),e}},{key:"removeEventListener",value:function(t,e){if(this._listeners&&this._listeners[t])for(var i=this._listeners[t],a=i.length,r=0;r<a;r++)if(i[r]===e){1===a?delete this._listeners[t]:i.splice(r,1);break}}},{key:"removeAllEventListeners",value:function(t){t?this._listeners&&delete this._listeners[t]:this._listeners=null}},{key:"dispatchEvent",value:function(t,e){var i=!1,a=this._listeners;if(t&&a){var r=a[t];if(!r)return i;for(var n=void 0,s=r.length;s--;)n=r[s],i=i||n(e)}return!!i}},{key:"hasEventListener",value:function(t){var e=this._listeners;return!(!e||!e[t])}}],[{key:"bind",value:function(t){t.prototype.dispatchEvent=S.prototype.dispatchEvent,t.prototype.hasEventListener=S.prototype.hasEventListener,t.prototype.addEventListener=S.prototype.addEventListener,t.prototype.removeEventListener=S.prototype.removeEventListener,t.prototype.removeAllEventListeners=S.prototype.removeAllEventListeners}}]),S);function S(){o(this,S),this._listeners=null}var I=(t(D,[{key:"calculate",value:function(t,e,i){this.eulerIntegrate(t,e,i)}},{key:"eulerIntegrate",value:function(t,e,i){t.sleep||(t.old.p.copy(t.p),t.old.v.copy(t.v),t.a.multiplyScalar(1/t.mass),t.v.add(t.a.multiplyScalar(e)),t.p.add(t.old.v.multiplyScalar(e)),i&&t.v.multiplyScalar(i),t.a.clear())}}]),D);function D(t){o(this,D),this.type=t}var V=(t(M,[{key:"addRenderer",value:function(t){t.init(this),this.renderers.push(t)}},{key:"removeRenderer",value:function(t){var e=this.renderers.indexOf(t);this.renderers.splice(e,1),t.remove(this)}},{key:"addEmitter",value:function(t){this.emitters.push(t),(t.parent=this).dispatchEvent(M.EMITTER_ADDED,t)}},{key:"removeEmitter",value:function(t){var e=this.emitters.indexOf(t);this.emitters.splice(e,1),t.parent=null,this.dispatchEvent(M.EMITTER_REMOVED,t)}},{key:"update",value:function(){"auto"===this._fps?(this.dispatchEvent(M.PROTON_UPDATE),M.USE_CLOCK?(this.then||(this.then=(new Date).getTime()),this.now=(new Date).getTime(),this.elapsed=.001*(this.now-this.then),this.amendChangeTabsBug(),0<this.elapsed&&this.emittersUpdate(this.elapsed),this.then=this.now):this.emittersUpdate(M.DEFAULT_INTERVAL),this.dispatchEvent(M.PROTON_UPDATE_AFTER)):(this.then||(this.then=(new Date).getTime()),this.now=(new Date).getTime(),this.elapsed=.001*(this.now-this.then),this.elapsed>this._interval&&(this.dispatchEvent(M.PROTON_UPDATE),this.emittersUpdate(this._interval),this.then=this.now-this.elapsed%this._interval*1e3,this.dispatchEvent(M.PROTON_UPDATE_AFTER)))}},{key:"emittersUpdate",value:function(t){for(var e=this.emitters.length;e--;)this.emitters[e].update(t)}},{key:"amendChangeTabsBug",value:function(){M.amendChangeTabsBug&&.5<this.elapsed&&(this.then=(new Date).getTime(),this.elapsed=0)}},{key:"getCount",value:function(){for(var t=0,e=this.emitters.length;e--;)t+=this.emitters[e].particles.length;return t}},{key:"getAllParticles",value:function(){for(var t=[],e=this.emitters.length;e--;)t=t.concat(this.emitters[e].particles);return t}},{key:"destroyAllEmitters",value:function(){P.destroyAll(this.emitters)}},{key:"destroy",value:function(t){function e(){i.time=0,i.then=0,i.pool.destroy(),P.destroyAll(i.emitters),P.destroyAll(i.renderers,i.getAllParticles())}var i=this;0<arguments.length&&void 0!==t&&t?setTimeout(e,200):e()}},{key:"fps",set:function(t){this._fps=t,this._interval="auto"===t?M.DEFAULT_INTERVAL:s.floor(1/t,7)},get:function(){return this._fps}}]),M);function M(t){o(this,M),this.emitters=[],this.renderers=[],this.time=0,this.now=0,this.then=0,this.elapsed=0,this.stats=new O(this),this.pool=new T(80),this.integrationType=P.initValue(t,M.EULER),this.integrator=new I(this.integrationType),this._fps="auto",this._interval=M.DEFAULT_INTERVAL}V.USE_CLOCK=!1,V.MEASURE=100,V.EULER="euler",V.RK2="runge-kutta2",V.PARTICLE_CREATED="PARTICLE_CREATED",V.PARTICLE_UPDATE="PARTICLE_UPDATE",V.PARTICLE_SLEEP="PARTICLE_SLEEP",V.PARTICLE_DEAD="PARTICLE_DEAD",V.EMITTER_ADDED="EMITTER_ADDED",V.EMITTER_REMOVED="EMITTER_REMOVED",V.PROTON_UPDATE="PROTON_UPDATE",V.PROTON_UPDATE_AFTER="PROTON_UPDATE_AFTER",V.DEFAULT_INTERVAL=.0167,V.amendChangeTabsBug=!0,C.bind(V);var B=(t(L,[{key:"reset",value:function(){this.r=255,this.g=255,this.b=255}}]),L);function L(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:255,e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:255,i=2<arguments.length&&void 0!==arguments[2]?arguments[2]:255;o(this,L),this.r=t,this.g=e,this.b=i}var U={easeLinear:function(t){return t},easeInQuad:function(t){return Math.pow(t,2)},easeOutQuad:function(t){return-(Math.pow(t-1,2)-1)},easeInOutQuad:function(t){return(t/=.5)<1?.5*Math.pow(t,2):-.5*((t-=2)*t-2)},easeInCubic:function(t){return Math.pow(t,3)},easeOutCubic:function(t){return Math.pow(t-1,3)+1},easeInOutCubic:function(t){return(t/=.5)<1?.5*Math.pow(t,3):.5*(Math.pow(t-2,3)+2)},easeInQuart:function(t){return Math.pow(t,4)},easeOutQuart:function(t){return-(Math.pow(t-1,4)-1)},easeInOutQuart:function(t){return(t/=.5)<1?.5*Math.pow(t,4):-.5*((t-=2)*Math.pow(t,3)-2)},easeInSine:function(t){return 1-Math.cos(t*s.PI_2)},easeOutSine:function(t){return Math.sin(t*s.PI_2)},easeInOutSine:function(t){return-.5*(Math.cos(Math.PI*t)-1)},easeInExpo:function(t){return 0===t?0:Math.pow(2,10*(t-1))},easeOutExpo:function(t){return 1===t?1:1-Math.pow(2,-10*t)},easeInOutExpo:function(t){return 0===t?0:1===t?1:(t/=.5)<1?.5*Math.pow(2,10*(t-1)):.5*(2-Math.pow(2,-10*--t))},easeInCirc:function(t){return-(Math.sqrt(1-t*t)-1)},easeOutCirc:function(t){return Math.sqrt(1-Math.pow(t-1,2))},easeInOutCirc:function(t){return(t/=.5)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},easeInBack:function(t){return t*t*(2.70158*t-1.70158)},easeOutBack:function(t){return--t*t*(2.70158*t+1.70158)+1},easeInOutBack:function(t){var e=1.70158;return(t/=.5)<1?t*t*((1+(e*=1.525))*t-e)*.5:.5*((t-=2)*t*((1+(e*=1.525))*t+e)+2)},getEasing:function(t){return"function"==typeof t?t:this[t]||this.easeLinear}},F=(t(z,[{key:"set",value:function(t,e){return this.x=t,this.y=e,this}},{key:"setX",value:function(t){return this.x=t,this}},{key:"setY",value:function(t){return this.y=t,this}},{key:"getGradient",value:function(){return 0!==this.x?Math.atan2(this.y,this.x):0<this.y?s.PI_2:this.y<0?-s.PI_2:void 0}},{key:"copy",value:function(t){return this.x=t.x,this.y=t.y,this}},{key:"add",value:function(t,e){return void 0!==e?this.addVectors(t,e):(this.x+=t.x,this.y+=t.y,this)}},{key:"addXY",value:function(t,e){return this.x+=t,this.y+=e,this}},{key:"addVectors",value:function(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}},{key:"sub",value:function(t,e){return void 0!==e?this.subVectors(t,e):(this.x-=t.x,this.y-=t.y,this)}},{key:"subVectors",value:function(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}},{key:"divideScalar",value:function(t){return 0!==t?(this.x/=t,this.y/=t):this.set(0,0),this}},{key:"multiplyScalar",value:function(t){return this.x*=t,this.y*=t,this}},{key:"negate",value:function(){return this.multiplyScalar(-1)}},{key:"dot",value:function(t){return this.x*t.x+this.y*t.y}},{key:"lengthSq",value:function(){return this.x*this.x+this.y*this.y}},{key:"length",value:function(){return Math.sqrt(this.x*this.x+this.y*this.y)}},{key:"normalize",value:function(){return this.divideScalar(this.length())}},{key:"distanceTo",value:function(t){return Math.sqrt(this.distanceToSquared(t))}},{key:"rotate",value:function(t){var e=this.x,i=this.y;return this.x=e*Math.cos(t)+i*Math.sin(t),this.y=-e*Math.sin(t)+i*Math.cos(t),this}},{key:"distanceToSquared",value:function(t){var e=this.x-t.x,t=this.y-t.y;return e*e+t*t}},{key:"lerp",value:function(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}},{key:"equals",value:function(t){return t.x===this.x&&t.y===this.y}},{key:"clear",value:function(){return this.x=0,this.y=0,this}},{key:"clone",value:function(){return new z(this.x,this.y)}}]),z);function z(t,e){o(this,z),this.x=t||0,this.y=e||0}var j=(t(N,[{key:"getDirection",value:function(){return Math.atan2(this.v.x,-this.v.y)*s.N180_PI}},{key:"reset",value:function(){return this.life=1/0,this.age=0,this.dead=!1,this.sleep=!1,this.body=null,this.sprite=null,this.parent=null,this.energy=1,this.mass=1,this.radius=10,this.alpha=1,this.scale=1,this.rotation=0,this.color=null,this.p.set(0,0),this.v.set(0,0),this.a.set(0,0),this.old.p.set(0,0),this.old.v.set(0,0),this.old.a.set(0,0),this.easing=U.easeLinear,this.rgb.reset(),P.emptyObject(this.data),this.removeAllBehaviours(),this}},{key:"update",value:function(t,e){this.sleep||(this.age+=t,this.applyBehaviours(t,e)),this.age<this.life?(e=this.easing(this.age/this.life),this.energy=Math.max(1-e,0)):this.destroy()}},{key:"applyBehaviours",value:function(t,e){for(var i=this.behaviours.length,a=void 0,a=0;a<i;a++)this.behaviours[a]&&this.behaviours[a].applyBehaviour(this,t,e)}},{key:"addBehaviour",value:function(t){this.behaviours.push(t),t.hasOwnProperty("parents")&&t.parents.push(this),t.initialize(this)}},{key:"addBehaviours",value:function(t){for(var e=t.length,i=void 0,i=0;i<e;i++)this.addBehaviour(t[i])}},{key:"removeBehaviour",value:function(t){t=this.behaviours.indexOf(t);-1<t&&(this.behaviours.splice(t,1).parents=null)}},{key:"removeAllBehaviours",value:function(){P.emptyArray(this.behaviours)}},{key:"destroy",value:function(){this.removeAllBehaviours(),this.energy=0,this.dead=!0,this.parent=null}}]),N);function N(t){o(this,N),this.id="",this.old={},this.data={},this.behaviours=[],this.p=[],this.v=[],this.a=[],this.rgb={},this.name="Particle",this.id=A.id(this.name),this.old={},this.data={},this.behaviours=[],this.p=new F,this.v=new F,this.a=new F,this.old.p=new F,this.old.v=new F,this.old.a=new F,this.rgb=new B,this.reset(),t&&P.setProp(this,t)}var H={hexToRgb:function(t){t="#"===t.charAt(0)?t.substring(1,7):t;return{r:parseInt(t.substring(0,2),16),g:parseInt(t.substring(2,4),16),b:parseInt(t.substring(4,6),16)}},rgbToHex:function(t){return"rgb("+t.r+", "+t.g+", "+t.b+")"},getHex16FromParticle:function(t){return 65536*Number(t.rgb.r)+256*Number(t.rgb.g)+Number(t.rgb.b)}},q=(t(G,[{key:"set",value:function(t,e){return this.r=t,this.tha=e,this}},{key:"setR",value:function(t){return this.r=t,this}},{key:"setTha",value:function(t){return this.tha=t,this}},{key:"copy",value:function(t){return this.r=t.r,this.tha=t.tha,this}},{key:"toVector",value:function(){return new F(this.getX(),this.getY())}},{key:"getX",value:function(){return this.r*Math.sin(this.tha)}},{key:"getY",value:function(){return-this.r*Math.cos(this.tha)}},{key:"normalize",value:function(){return this.r=1,this}},{key:"equals",value:function(t){return t.r===this.r&&t.tha===this.tha}},{key:"clear",value:function(){return this.r=0,this.tha=0,this}},{key:"clone",value:function(){return new G(this.r,this.tha)}}]),G);function G(t,e){o(this,G),this.r=Math.abs(t)||0,this.tha=e||0}var X={create:function(t){var e=new Float32Array(9);return t&&this.set(t,e),e},set:function(t,e){for(var i=0;i<9;i++)e[i]=t[i];return e},multiply:function(t,e,i){var a=t[0],r=t[1],n=t[2],s=t[3],o=t[4],h=t[6],l=t[7],u=e[0],c=e[1],d=e[2],y=e[3],p=e[4],t=e[6],e=e[7];return i[0]=u*a+c*s,i[1]=u*r+c*o,i[2]=n*d,i[3]=y*a+p*s,i[4]=y*r+p*o,i[6]=t*a+e*s+h,i[7]=t*r+e*o+l,i},inverse:function(t,e){var i=t[0],a=t[1],r=t[3],n=t[4],s=t[6],o=t[7],h=-r,t=o*r-n*s,r=1/(i*n+a*h);return e[0]=n*r,e[1]=-a*r,e[3]=h*r,e[4]=i*r,e[6]=t*r,e[7]=(-o*i+a*s)*r,e},multiplyVec2:function(t,e,i){var a=e[0],e=e[1];return i[0]=a*t[0]+e*t[3]+t[6],i[1]=a*t[1]+e*t[4]+t[7],i}},Y=(r(W,l),t(W,[{key:"getValue",value:function(){var t=P.getRandFromArray(this._arr);return"random"===t||"Random"===t?s.randomColor():t}}],[{key:"createArraySpan",value:function(t){return t?t instanceof W?t:new W(t):null}}]),W);function W(t){o(this,W);var e=h(this,(W.__proto__||Object.getPrototypeOf(W)).call(this));return e._arr=P.toArray(t),e}var Z=(t(Q,[{key:"contains",value:function(t,e){return t<=this.right&&t>=this.x&&e<=this.bottom&&e>=this.y}}]),Q);function Q(t,e,i,a){o(this,Q),this.x=t,this.y=e,this.width=i,this.height=a,this.bottom=this.y+this.height,this.right=this.x+this.width}var K=(t(J,[{key:"init",value:function(){this.startTime=0,this.nextTime=this.timePan.getValue()}},{key:"getValue",value:function(t){return this.startTime+=t,this.startTime>=this.nextTime?(this.startTime=0,this.nextTime=this.timePan.getValue(),1===this.numPan.b?.5<this.numPan.getValue(!1)?1:0:this.numPan.getValue(!0)):0}}]),J);function J(t,e){o(this,J),this.numPan=l.setSpanValue(P.initValue(t,1)),this.timePan=l.setSpanValue(P.initValue(e,1)),this.startTime=0,this.nextTime=0,this.init()}var $=(t(tt,[{key:"reset",value:function(){}},{key:"init",value:function(t,e){e?this.initialize(e):this.initialize(t)}},{key:"initialize",value:function(){}}]),tt);function tt(){o(this,tt)}var et=(r(it,$),t(it,[{key:"initialize",value:function(t){this.lifePan.a===1/0?t.life=1/0:t.life=this.lifePan.getValue()}}]),it);function it(t,e,i){o(this,it);var a=h(this,(it.__proto__||Object.getPrototypeOf(it)).call(this));return a.lifePan=l.setSpanValue(t,e,i),a.name="Life",a}var at=(t(rt,[{key:"getPosition",value:function(){}},{key:"crossing",value:function(){}}]),rt);function rt(){o(this,rt),this.vector=new F(0,0),this.random=0,this.crossType="dead",this.alert=!0}var nt=(r(st,at),t(st,[{key:"getPosition",value:function(){return this.vector.x=this.x,this.vector.y=this.y,this.vector}},{key:"crossing",value:function(){this.alert&&(console.error("Sorry, PointZone does not support crossing method!"),this.alert=!1)}}]),st);function st(t,e){o(this,st);var i=h(this,(st.__proto__||Object.getPrototypeOf(st)).call(this));return i.x=t,i.y=e,i}var ot=(r(ht,$),t(ht,[{key:"reset",value:function(t){this.zone=P.initValue(t,new nt)}},{key:"initialize",value:function(t){this.zone.getPosition(),t.p.x=this.zone.vector.x,t.p.y=this.zone.vector.y}}]),ht);function ht(t){o(this,ht);var e=h(this,(ht.__proto__||Object.getPrototypeOf(ht)).call(this));return e.zone=P.initValue(t,new nt),e.name="Position",e}var lt=(r(ut,$),t(ut,[{key:"reset",value:function(t,e,i){this.rPan=l.setSpanValue(t),this.thaPan=l.setSpanValue(e),this.type=P.initValue(i,"vector")}},{key:"normalizeVelocity",value:function(t){return t*V.MEASURE}},{key:"initialize",value:function(t){var e;"p"===this.type||"P"===this.type||"polar"===this.type?(e=new q(this.normalizeVelocity(this.rPan.getValue()),this.thaPan.getValue()*s.PI_180),t.v.x=e.getX(),t.v.y=e.getY()):(t.v.x=this.normalizeVelocity(this.rPan.getValue()),t.v.y=this.normalizeVelocity(this.thaPan.getValue()))}}]),ut);function ut(t,e,i){o(this,ut);var a=h(this,(ut.__proto__||Object.getPrototypeOf(ut)).call(this));return a.rPan=l.setSpanValue(t),a.thaPan=l.setSpanValue(e),a.type=P.initValue(i,"vector"),a.name="Velocity",a}var ct=(r(dt,$),t(dt,[{key:"initialize",value:function(t){t.mass=this.massPan.getValue()}}]),dt);function dt(t,e,i){o(this,dt);var a=h(this,(dt.__proto__||Object.getPrototypeOf(dt)).call(this));return a.massPan=l.setSpanValue(t,e,i),a.name="Mass",a}var yt=(r(pt,$),t(pt,[{key:"reset",value:function(t,e,i){this.radius=l.setSpanValue(t,e,i)}},{key:"initialize",value:function(t){t.radius=this.radius.getValue(),t.data.oldRadius=t.radius}}]),pt);function pt(t,e,i){o(this,pt);var a=h(this,(pt.__proto__||Object.getPrototypeOf(pt)).call(this));return a.radius=l.setSpanValue(t,e,i),a.name="Radius",a}var ft=(r(vt,$),t(vt,[{key:"initialize",value:function(t){var e=this.image.getValue();t.body="string"==typeof e?{width:this.w,height:this.h,src:e,isInner:!0,inner:!0}:e}},{key:"setSpanValue",value:function(t){return t instanceof Y?t:new Y(t)}}]),vt);function vt(t,e,i){o(this,vt);var a=h(this,(vt.__proto__||Object.getPrototypeOf(vt)).call(this));return a.image=a.setSpanValue(t),a.w=P.initValue(e,20),a.h=P.initValue(i,a.w),a.name="Body",a}var gt=(t(mt,[{key:"reset",value:function(t,e){this.life=P.initValue(t,1/0),this.easing=U.getEasing(e)}},{key:"normalizeForce",value:function(t){return t.multiplyScalar(V.MEASURE)}},{key:"normalizeValue",value:function(t){return t*V.MEASURE}},{key:"initialize",value:function(){}},{key:"calculate",value:function(t,e){this.age+=e,this.age>=this.life||this.dead?(this.energy=0,this.dead=!0,this.destroy()):(t=this.easing(t.age/t.life),this.energy=Math.max(1-t,0))}},{key:"destroy",value:function(){for(var t=this.parents.length;t--;)this.parents[t].removeBehaviour(this);this.parents.length=0}}]),mt);function mt(t,e){o(this,mt),this.life=P.initValue(t,1/0),this.easing=U.getEasing(e),this.age=0,this.energy=1,this.dead=!1,this.parents=[],this.id="Behaviour_"+mt.id++,this.name="Behaviour"}gt.id=0;var bt=(r(_t,gt),t(_t,[{key:"reset",value:function(t,e,i,a){this.force=this.normalizeForce(new F(t,e)),i&&n(_t.prototype.__proto__||Object.getPrototypeOf(_t.prototype),"reset",this).call(this,i,a)}},{key:"applyBehaviour",value:function(t,e,i){this.calculate(t,e,i),t.a.add(this.force)}}]),_t);function _t(t,e,i,a){o(this,_t);a=h(this,(_t.__proto__||Object.getPrototypeOf(_t)).call(this,i,a));return a.force=a.normalizeForce(new F(t,e)),a.name="Force",a}var xt=(r(kt,gt),t(kt,[{key:"reset",value:function(t,e,i,a,r){this.targetPosition=P.initValue(t,new F),this.radius=P.initValue(i,1e3),this.force=P.initValue(this.normalizeValue(e),100),this.radiusSq=this.radius*this.radius,this.attractionForce=new F,this.lengthSq=0,a&&n(kt.prototype.__proto__||Object.getPrototypeOf(kt.prototype),"reset",this).call(this,a,r)}},{key:"applyBehaviour",value:function(t,e,i){this.calculate(t,e,i),this.attractionForce.copy(this.targetPosition),this.attractionForce.sub(t.p),this.lengthSq=this.attractionForce.lengthSq(),4e-5<this.lengthSq&&this.lengthSq<this.radiusSq&&(this.attractionForce.normalize(),this.attractionForce.multiplyScalar(1-this.lengthSq/this.radiusSq),this.attractionForce.multiplyScalar(this.force),t.a.add(this.attractionForce))}}]),kt);function kt(t,e,i,a,r){o(this,kt);r=h(this,(kt.__proto__||Object.getPrototypeOf(kt)).call(this,a,r));return r.targetPosition=P.initValue(t,new F),r.radius=P.initValue(i,1e3),r.force=P.initValue(r.normalizeValue(e),100),r.radiusSq=r.radius*r.radius,r.attractionForce=new F,r.lengthSq=0,r.name="Attraction",r}var Pt=(r(Et,gt),t(Et,[{key:"reset",value:function(t,e,i,a,r){this.panFoce=new F(t,e),this.panFoce=this.normalizeForce(this.panFoce),this.delay=i,a&&n(Et.prototype.__proto__||Object.getPrototypeOf(Et.prototype),"reset",this).call(this,a,r)}},{key:"initialize",value:function(t){t.data.time=0}},{key:"applyBehaviour",value:function(t,e,i){this.calculate(t,e,i),t.data.time+=e,t.data.time>=this.delay&&(t.a.addXY(s.randomAToB(-this.panFoce.x,this.panFoce.x),s.randomAToB(-this.panFoce.y,this.panFoce.y)),t.data.time=0)}}]),Et);function Et(t,e,i,a,r){o(this,Et);r=h(this,(Et.__proto__||Object.getPrototypeOf(Et)).call(this,a,r));return r.reset(t,e,i),r.time=0,r.name="RandomDrift",r}var At=(r(Tt,bt),t(Tt,[{key:"reset",value:function(t,e,i){n(Tt.prototype.__proto__||Object.getPrototypeOf(Tt.prototype),"reset",this).call(this,0,t,e,i)}}]),Tt);function Tt(t,e,i){o(this,Tt);i=h(this,(Tt.__proto__||Object.getPrototypeOf(Tt)).call(this,0,t,e,i));return i.name="Gravity",i}var Rt=(r(Ot,gt),t(Ot,[{key:"reset",value:function(t,e,i,a,r){this.emitter=P.initValue(t,null),this.mass=P.initValue(e,!0),this.callback=P.initValue(i,null),this.collisionPool=[],this.delta=new F,a&&n(Ot.prototype.__proto__||Object.getPrototypeOf(Ot.prototype),"reset",this).call(this,a,r)}},{key:"applyBehaviour",value:function(t,e,i){for(var a,r,n,s,o,h,l=(this.emitter?this.emitter.particles:this.pool).slice(i),u=l.length,c=void 0,d=void 0,d=0;d<u;d++){(c=l[d])!==t&&(this.delta.copy(c.p),this.delta.sub(t.p),(a=this.delta.lengthSq())<=(h=t.radius+c.radius)*h&&(r=h-Math.sqrt(a),r+=.5,n=t.mass+c.mass,s=this.mass?c.mass/n:.5,o=this.mass?t.mass/n:.5,t.p.add(this.delta.clone().normalize().multiplyScalar(r*-s)),c.p.add(this.delta.normalize().multiplyScalar(r*o)),this.callback&&this.callback(t,c)))}}}]),Ot);function Ot(t,e,i,a,r){o(this,Ot);r=h(this,(Ot.__proto__||Object.getPrototypeOf(Ot)).call(this,a,r));return r.reset(t,e,i),r.name="Collision",r}var wt=(r(Ct,gt),t(Ct,[{key:"reset",value:function(t,e,i,a){this.zone=t,this.zone.crossType=P.initValue(e,"dead"),i&&n(Ct.prototype.__proto__||Object.getPrototypeOf(Ct.prototype),"reset",this).call(this,i,a)}},{key:"applyBehaviour",value:function(t,e,i){this.calculate(t,e,i),this.zone.crossing(t)}}]),Ct);function Ct(t,e,i,a){o(this,Ct);a=h(this,(Ct.__proto__||Object.getPrototypeOf(Ct)).call(this,i,a));return a.reset(t,e),a.name="CrossZone",a}var St=(r(It,gt),t(It,[{key:"reset",value:function(t,e,i,a){this.same=null==e,this.a=l.setSpanValue(P.initValue(t,1)),this.b=l.setSpanValue(e),i&&n(It.prototype.__proto__||Object.getPrototypeOf(It.prototype),"reset",this).call(this,i,a)}},{key:"initialize",value:function(t){t.data.alphaA=this.a.getValue(),this.same?t.data.alphaB=t.data.alphaA:t.data.alphaB=this.b.getValue()}},{key:"applyBehaviour",value:function(t,e,i){this.calculate(t,e,i),t.alpha=t.data.alphaB+(t.data.alphaA-t.data.alphaB)*this.energy,t.alpha<.001&&(t.alpha=0)}}]),It);function It(t,e,i,a){o(this,It);a=h(this,(It.__proto__||Object.getPrototypeOf(It)).call(this,i,a));return a.reset(t,e),a.name="Alpha",a}var Dt=(r(Vt,gt),t(Vt,[{key:"reset",value:function(t,e,i,a){this.same=null==e,this.a=l.setSpanValue(P.initValue(t,1)),this.b=l.setSpanValue(e),i&&n(Vt.prototype.__proto__||Object.getPrototypeOf(Vt.prototype),"reset",this).call(this,i,a)}},{key:"initialize",value:function(t){t.data.scaleA=this.a.getValue(),t.data.oldRadius=t.radius,t.data.scaleB=this.same?t.data.scaleA:this.b.getValue()}},{key:"applyBehaviour",value:function(t,e,i){this.calculate(t,e,i),t.scale=t.data.scaleB+(t.data.scaleA-t.data.scaleB)*this.energy,t.scale<1e-4&&(t.scale=0),t.radius=t.data.oldRadius*t.scale}}]),Vt);function Vt(t,e,i,a){o(this,Vt);a=h(this,(Vt.__proto__||Object.getPrototypeOf(Vt)).call(this,i,a));return a.reset(t,e),a.name="Scale",a}var Mt=(r(Bt,gt),t(Bt,[{key:"reset",value:function(t,e,i,a,r){this.same=null==e,this.a=l.setSpanValue(P.initValue(t,"Velocity")),this.b=l.setSpanValue(P.initValue(e,0)),this.style=P.initValue(i,"to"),a&&n(Bt.prototype.__proto__||Object.getPrototypeOf(Bt.prototype),"reset",this).call(this,a,r)}},{key:"initialize",value:function(t){t.rotation=this.a.getValue(),t.data.rotationA=this.a.getValue(),this.same||(t.data.rotationB=this.b.getValue())}},{key:"applyBehaviour",value:function(t,e,i){this.calculate(t,e,i),this.same?"V"!==this.a.a&&"Velocity"!==this.a.a&&"v"!==this.a.a||(t.rotation=t.getDirection()):"to"===this.style||"TO"===this.style||"_"===this.style?t.rotation+=t.data.rotationB+(t.data.rotationA-t.data.rotationB)*this.energy:t.rotation+=t.data.rotationB}}]),Bt);function Bt(t,e,i,a,r){o(this,Bt);r=h(this,(Bt.__proto__||Object.getPrototypeOf(Bt)).call(this,a,r));return r.reset(t,e,i),r.name="Rotate",r}var Lt=(r(Ut,gt),t(Ut,[{key:"reset",value:function(t,e,i,a){this.a=Y.createArraySpan(t),this.b=Y.createArraySpan(e),i&&n(Ut.prototype.__proto__||Object.getPrototypeOf(Ut.prototype),"reset",this).call(this,i,a)}},{key:"initialize",value:function(t){t.color=this.a.getValue(),t.data.colorA=H.hexToRgb(t.color),this.b&&(t.data.colorB=H.hexToRgb(this.b.getValue()))}},{key:"applyBehaviour",value:function(t,e,i){this.b?(this.calculate(t,e,i),t.rgb.r=t.data.colorB.r+(t.data.colorA.r-t.data.colorB.r)*this.energy,t.rgb.g=t.data.colorB.g+(t.data.colorA.g-t.data.colorB.g)*this.energy,t.rgb.b=t.data.colorB.b+(t.data.colorA.b-t.data.colorB.b)*this.energy,t.rgb.r=Math.floor(t.rgb.r),t.rgb.g=Math.floor(t.rgb.g),t.rgb.b=Math.floor(t.rgb.b)):(t.rgb.r=t.data.colorA.r,t.rgb.g=t.data.colorA.g,t.rgb.b=t.data.colorA.b)}}]),Ut);function Ut(t,e,i,a){o(this,Ut);a=h(this,(Ut.__proto__||Object.getPrototypeOf(Ut)).call(this,i,a));return a.reset(t,e),a.name="Color",a}var Ft="changing",zt=(r(jt,gt),t(jt,[{key:"setAngleAndForce",value:function(t,e){this.force=Ft,this.angle=s.PI/2,"right"===t?this.angle=s.PI/2:"left"===t?this.angle=-s.PI/2:"random"===t?this.angle="random":t instanceof l?(this.angle="span",this.span=t):t&&(this.angle=t),"changing"===String(e).toLowerCase()||"chang"===String(e).toLowerCase()||"auto"===String(e).toLowerCase()?this.force=Ft:e&&(this.force=e)}},{key:"reset",value:function(t,e,i,a){this.angle=s.PI/2,this.setAngleAndForce(t,e),i&&n(jt.prototype.__proto__||Object.getPrototypeOf(jt.prototype),"reset",this).call(this,i,a)}},{key:"initialize",value:function(t){"random"===this.angle?t.data.cangle=s.randomAToB(-s.PI,s.PI):"span"===this.angle&&(t.data.cangle=this.span.getValue()),t.data.cyclone=new F(0,0)}},{key:"applyBehaviour",value:function(t,e,i){this.calculate(t,e,i);e=void 0,i=t.v.getGradient();"random"===this.angle||"span"===this.angle?i+=t.data.cangle:i+=this.angle,e=this.force===Ft?t.v.length()/100:this.force,t.data.cyclone.x=e*Math.cos(i),t.data.cyclone.y=e*Math.sin(i),t.data.cyclone=this.normalizeForce(t.data.cyclone),t.a.add(t.data.cyclone)}}]),jt);function jt(t,e,i,a){o(this,jt);a=h(this,(jt.__proto__||Object.getPrototypeOf(jt)).call(this,i,a));return a.setAngleAndForce(t,e),a.name="Cyclone",a}var Nt=(r(Ht,xt),t(Ht,[{key:"reset",value:function(t,e,i,a,r){n(Ht.prototype.__proto__||Object.getPrototypeOf(Ht.prototype),"reset",this).call(this,t,e,i,a,r),this.force*=-1}}]),Ht);function Ht(t,e,i,a,r){o(this,Ht);r=h(this,(Ht.__proto__||Object.getPrototypeOf(Ht)).call(this,t,e,i,a,r));return r.force*=-1,r.name="Repulsion",r}var qt=(r(Gt,gt),t(Gt,[{key:"reset",value:function(t,e,i,a){this.distanceVec=new F,this.centerPoint=P.initValue(t,new F),this.force=P.initValue(this.normalizeValue(e),100),i&&n(Gt.prototype.__proto__||Object.getPrototypeOf(Gt.prototype),"reset",this).call(this,i,a)}},{key:"initialize",value:function(){}},{key:"applyBehaviour",value:function(t,e){this.distanceVec.set(this.centerPoint.x-t.p.x,this.centerPoint.y-t.p.y);var i,a=this.distanceVec.lengthSq();0!==a&&(i=this.distanceVec.length(),i=this.force*e/(a*i),t.v.x+=i*this.distanceVec.x,t.v.y+=i*this.distanceVec.y)}}]),Gt);function Gt(t,e,i,a){o(this,Gt);a=h(this,(Gt.__proto__||Object.getPrototypeOf(Gt)).call(this,i,a));return a.distanceVec=new F,a.centerPoint=P.initValue(t,new F),a.force=P.initValue(a.normalizeValue(e),100),a.name="GravityWell",a}var Xt={initialize:function(t,e,i){for(var a=i.length,r=void 0,r=0;r<a;r++)i[r]instanceof $?i[r].init(t,e):this.init(t,e,i[r]);this.bindEmitter(t,e)},init:function(t,e,i){P.setProp(e,i),P.setVectorVal(e,i)},bindEmitter:function(t,e){t.bindEmitter&&(e.p.add(t.p),e.v.add(t.v),e.a.add(t.a),e.v.rotate(s.degreeTransform(t.rotation)))}},Yt=(r(Wt,j),t(Wt,[{key:"emit",value:function(t,e){this.stoped=!1,this.emitTime=0,this.totalTime=P.initValue(t,1/0),!0===e||"life"===e||"destroy"===e?this.life="once"===t?1:this.totalTime:isNaN(e)||(this.life=e),this.rate.init()}},{key:"stop",value:function(){this.totalTime=-1,this.emitTime=0,this.stoped=!0}},{key:"preEmit",value:function(t){var e=this.stoped,i=this.emitTime,a=this.totalTime;this.stoped=!1,this.emitTime=0,this.totalTime=t,this.rate.init();for(;.0167<t;)t-=.0167,this.update(.0167);this.stoped=e,this.emitTime=i+Math.max(t,0),this.totalTime=a}},{key:"removeAllParticles",value:function(){for(var t=this.particles.length;t--;)this.particles[t].dead=!0}},{key:"addSelfInitialize",value:function(t){t.init?t.init(this):this.initAll()}},{key:"addInitialize",value:function(){for(var t=arguments.length,e=Array(t),i=0;i<t;i++)e[i]=arguments[i];for(var a=e.length;a--;)this.initializes.push(e[a])}},{key:"removeInitialize",value:function(t){t=this.initializes.indexOf(t);-1<t&&this.initializes.splice(t,1)}},{key:"removeAllInitializers",value:function(){P.emptyArray(this.initializes)}},{key:"addBehaviour",value:function(){for(var t=arguments.length,e=Array(t),i=0;i<t;i++)e[i]=arguments[i];for(var a=arguments.length;a--;){var r=e[a];this.behaviours.push(r),r.parents&&r.parents.push(this)}}},{key:"removeBehaviour",value:function(t){var e=this.behaviours.indexOf(t);return this.behaviours.splice(e,1),t.parents&&(e=t.parents.indexOf(t),t.parents.splice(e,1)),e}},{key:"removeAllBehaviours",value:function(){P.emptyArray(this.behaviours)}},{key:"update",value:function(t){this.age+=t,(this.age>=this.life||this.dead)&&this.destroy(),this.emitting(t),this.integrate(t)}},{key:"integrate",value:function(t){if(this.parent){var e=1-this.damping;this.parent.integrator.calculate(this,t,e);for(var i=void 0,a=void 0,i=this.particles.length-1;0<=i;i--)(a=this.particles[i]).update(t,i),this.parent.integrator.calculate(a,t,e),this.dispatch("PARTICLE_UPDATE",a),a.dead&&(this.dispatch("PARTICLE_DEAD",a),this.parent.pool.expire(a),this.particles.splice(i,1))}}},{key:"dispatch",value:function(t,e){this.parent&&this.parent.dispatchEvent(t,e),this.bindEvent&&this.dispatchEvent(t,e)}},{key:"emitting",value:function(t){if("once"===this.totalTime){var e=void 0,i=this.rate.getValue(99999);for(0<i&&(this.emitSpeed=i),e=0;e<i;e++)this.createParticle();this.totalTime="none"}else if(this.emitTime+=t,this.emitTime<this.totalTime){var a=this.rate.getValue(t),r=void 0;for(0<a&&(this.emitSpeed=a),r=0;r<a;r++)this.createParticle()}}},{key:"createParticle",value:function(t,e){var i=this.parent.pool.get(j);return this.setupParticle(i,t,e),this.dispatch("PARTICLE_CREATED",i),i}},{key:"setupParticle",value:function(t,e,i){var a=this.initializes,r=this.behaviours;e&&(a=P.toArray(e)),i&&(r=P.toArray(i)),t.reset(),Xt.initialize(this,t,a),t.addBehaviours(r),(t.parent=this).particles.push(t)}},{key:"remove",value:function(){this.stop(),P.destroyAll(this.particles)}},{key:"destroy",value:function(){this.dead=!0,this.remove(),this.removeAllInitializers(),this.removeAllBehaviours(),this.parent&&this.parent.removeEmitter(this)}}]),Wt);function Wt(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};o(this,Wt);t=h(this,(Wt.__proto__||Object.getPrototypeOf(Wt)).call(this,t));return t.particles=[],t.behaviours=[],t.initializes=[],t.emitTime=0,t.emitSpeed=0,t.totalTime=-1,t.damping=.006,t.bindEmitter=!0,t.rate=new K(1,.1),t.name="Emitter",t.id=A.id(t.name),t}C.bind(Yt);var Zt=(r(Qt,Yt),t(Qt,[{key:"addSelfBehaviour",value:function(){for(var t=arguments.length,e=Array(t),i=0;i<t;i++)e[i]=arguments[i];for(var a=void 0,r=e.length,a=0;a<r;a++){var n=e[a];this.selfBehaviours.push(n),n.initialize(this)}}},{key:"removeSelfBehaviour",value:function(t){t=this.selfBehaviours.indexOf(t);-1<t&&this.selfBehaviours.splice(t,1)}},{key:"update",value:function(t){if(n(Qt.prototype.__proto__||Object.getPrototypeOf(Qt.prototype),"update",this).call(this,t),!this.sleep)for(var e=this.selfBehaviours.length,i=void 0,i=0;i<e;i++)this.selfBehaviours[i].applyBehaviour(this,t,i)}}]),Qt);function Qt(t){o(this,Qt);t=h(this,(Qt.__proto__||Object.getPrototypeOf(Qt)).call(this,t));return t.selfBehaviours=[],t}var Kt=(r(Jt,Yt),t(Jt,[{key:"initEventHandler",value:function(){var e=this;this.mousemoveHandler=function(t){return e.mousemove.call(e,t)},this.mousedownHandler=function(t){return e.mousedown.call(e,t)},this.mouseupHandler=function(t){return e.mouseup.call(e,t)},this.mouseTarget.addEventListener("mousemove",this.mousemoveHandler,!1)}},{key:"emit",value:function(){this._allowEmitting=!0}},{key:"stop",value:function(){this._allowEmitting=!1}},{key:"mousemove",value:function(t){t.layerX||0===t.layerX?(this.p.x+=(t.layerX-this.p.x)*this.ease,this.p.y+=(t.layerY-this.p.y)*this.ease):!t.offsetX&&0!==t.offsetX||(this.p.x+=(t.offsetX-this.p.x)*this.ease,this.p.y+=(t.offsetY-this.p.y)*this.ease),this._allowEmitting&&n(Jt.prototype.__proto__||Object.getPrototypeOf(Jt.prototype),"emit",this).call(this,"once")}},{key:"destroy",value:function(){n(Jt.prototype.__proto__||Object.getPrototypeOf(Jt.prototype),"destroy",this).call(this),this.mouseTarget.removeEventListener("mousemove",this.mousemoveHandler,!1)}}]),Jt);function Jt(t,e,i){o(this,Jt);i=h(this,(Jt.__proto__||Object.getPrototypeOf(Jt)).call(this,i));return i.mouseTarget=P.initValue(t,window),i.ease=P.initValue(e,.7),i._allowEmitting=!1,i.initEventHandler(),i}var $t=(t(te,[{key:"setStroke",value:function(t,e){t=0<arguments.length&&void 0!==t?t:"#000000",e=1<arguments.length&&void 0!==e?e:1;this.stroke={color:t,thinkness:e}}},{key:"initHandler",value:function(){var e=this;this._protonUpdateHandler=function(){e.onProtonUpdate.call(e)},this._protonUpdateAfterHandler=function(){e.onProtonUpdateAfter.call(e)},this._emitterAddedHandler=function(t){e.onEmitterAdded.call(e,t)},this._emitterRemovedHandler=function(t){e.onEmitterRemoved.call(e,t)},this._particleCreatedHandler=function(t){e.onParticleCreated.call(e,t)},this._particleUpdateHandler=function(t){e.onParticleUpdate.call(e,t)},this._particleDeadHandler=function(t){e.onParticleDead.call(e,t)}}},{key:"init",value:function(t){(this.parent=t).addEventListener("PROTON_UPDATE",this._protonUpdateHandler),t.addEventListener("PROTON_UPDATE_AFTER",this._protonUpdateAfterHandler),t.addEventListener("EMITTER_ADDED",this._emitterAddedHandler),t.addEventListener("EMITTER_REMOVED",this._emitterRemovedHandler),t.addEventListener("PARTICLE_CREATED",this._particleCreatedHandler),t.addEventListener("PARTICLE_UPDATE",this._particleUpdateHandler),t.addEventListener("PARTICLE_DEAD",this._particleDeadHandler)}},{key:"resize",value:function(){}},{key:"destroy",value:function(){this.remove()}},{key:"remove",value:function(){this.parent.removeEventListener("PROTON_UPDATE",this._protonUpdateHandler),this.parent.removeEventListener("PROTON_UPDATE_AFTER",this._protonUpdateAfterHandler),this.parent.removeEventListener("EMITTER_ADDED",this._emitterAddedHandler),this.parent.removeEventListener("EMITTER_REMOVED",this._emitterRemovedHandler),this.parent.removeEventListener("PARTICLE_CREATED",this._particleCreatedHandler),this.parent.removeEventListener("PARTICLE_UPDATE",this._particleUpdateHandler),this.parent.removeEventListener("PARTICLE_DEAD",this._particleDeadHandler),this.parent=null}},{key:"onProtonUpdate",value:function(){}},{key:"onProtonUpdateAfter",value:function(){}},{key:"onEmitterAdded",value:function(){}},{key:"onEmitterRemoved",value:function(){}},{key:"onParticleCreated",value:function(){}},{key:"onParticleUpdate",value:function(){}},{key:"onParticleDead",value:function(){}}]),te);function te(t,e){o(this,te),this.pool=new T,this.element=t,this.stroke=e,this.circleConf={isCircle:!0},this.initHandler(),this.name="BaseRenderer"}var ee=(r(ie,$t),t(ie,[{key:"resize",value:function(t,e){this.element.width=t,this.element.height=e}},{key:"onProtonUpdate",value:function(){this.context.clearRect(0,0,this.element.width,this.element.height)}},{key:"onParticleCreated",value:function(t){t.body?x(t.body,this.addImg2Body,t):t.color=t.color||"#ff0000"}},{key:"onParticleUpdate",value:function(t){t.body?t.body instanceof Image&&this.drawImage(t):this.drawCircle(t)}},{key:"onParticleDead",value:function(t){t.body=null}},{key:"addImg2Body",value:function(t,e){e.body=t}},{key:"drawImage",value:function(t){var e,i=t.body.width*t.scale|0,a=t.body.height*t.scale|0,r=t.p.x-i/2,n=t.p.y-a/2;t.color?(t.data.buffer||(t.data.buffer=this.createBuffer(t.body)),(e=t.data.buffer.getContext("2d")).clearRect(0,0,t.data.buffer.width,t.data.buffer.height),e.globalAlpha=t.alpha,e.drawImage(t.body,0,0),e.globalCompositeOperation="source-atop",e.fillStyle=H.rgbToHex(t.rgb),e.fillRect(0,0,t.data.buffer.width,t.data.buffer.height),e.globalCompositeOperation="source-over",e.globalAlpha=1,this.context.drawImage(t.data.buffer,0,0,t.data.buffer.width,t.data.buffer.height,r,n,i,a)):(this.context.save(),this.context.globalAlpha=t.alpha,this.context.translate(t.p.x,t.p.y),this.context.rotate(s.degreeTransform(t.rotation)),this.context.translate(-t.p.x,-t.p.y),this.context.drawImage(t.body,0,0,t.body.width,t.body.height,r,n,i,a),this.context.globalAlpha=1,this.context.restore())}},{key:"drawCircle",value:function(t){t.rgb?this.context.fillStyle="rgba("+t.rgb.r+","+t.rgb.g+","+t.rgb.b+","+t.alpha+")":this.context.fillStyle=t.color,this.context.beginPath(),this.context.arc(t.p.x,t.p.y,t.radius,0,2*Math.PI,!0),this.stroke&&(this.context.strokeStyle=this.stroke.color,this.context.lineWidth=this.stroke.thinkness,this.context.stroke()),this.context.closePath(),this.context.fill()}},{key:"createBuffer",value:function(t){if(t instanceof Image){var e=t.width+"_"+t.height,i=this.bufferCache[e];return i||((i=document.createElement("canvas")).width=t.width,i.height=t.height,this.bufferCache[e]=i),i}}}]),ie);function ie(t){o(this,ie);t=h(this,(ie.__proto__||Object.getPrototypeOf(ie)).call(this,t));return t.stroke=null,t.context=t.element.getContext("2d"),t.bufferCache={},t.name="CanvasRenderer",t}var ae=(r(re,$t),t(re,[{key:"onParticleCreated",value:function(t){t.body?x(t.body,this.addImg2Body,t):(t.body=this.pool.get(this.circleConf,t),this.element.appendChild(t.body))}},{key:"onParticleUpdate",value:function(t){this.bodyReady(t)&&(this.transform3d?v.transform3d(t.body,t.p.x,t.p.y,t.scale,t.rotation):v.transform(t.body,t.p.x,t.p.y,t.scale,t.rotation),t.body.style.opacity=t.alpha,t.body.isCircle&&(t.body.style.backgroundColor=t.color||"#ff0000"))}},{key:"onParticleDead",value:function(t){this.bodyReady(t)&&(this.element.removeChild(t.body),this.pool.expire(t.body),t.body=null)}},{key:"bodyReady",value:function(t){return"object"===i(t.body)&&t.body&&!t.body.isInner}},{key:"addImg2Body",value:function(t,e){e.dead||(e.body=this.pool.get(t,e),v.resize(e.body,t.width,t.height),this.element.appendChild(e.body))}},{key:"createBody",value:function(t,e){return t.isCircle?this.createCircle(e):this.createSprite(t,e)}},{key:"createCircle",value:function(t){var e=v.createDiv(t.id+"_dom",2*t.radius,2*t.radius);return e.style.borderRadius=t.radius+"px",this.stroke&&(e.style.borderColor=this.stroke.color,e.style.borderWidth=this.stroke.thinkness+"px"),e.isCircle=!0,e}},{key:"createSprite",value:function(t,e){var i="string"==typeof t?t:t.src,t=v.createDiv(e.id+"_dom",t.width,t.height);return t.style.backgroundImage="url("+i+")",t}}]),re);function re(t){o(this,re);var i=h(this,(re.__proto__||Object.getPrototypeOf(re)).call(this,t));return i.stroke=null,i.pool.create=function(t,e){return i.createBody(t,e)},i.addImg2Body=i.addImg2Body.bind(i),i.transform3d=!1,i.name="DomRenderer",i}var ne=(r(se,$t),t(se,[{key:"onParticleCreated",value:function(t){t.body?this.createSprite(t):this.createCircle(t),this.element.addChild(t.body)}},{key:"onParticleUpdate",value:function(t){t.body&&(t.body.x=t.p.x,t.body.y=t.p.y,t.body.alpha=t.alpha,t.body.scaleX=t.body.scaleY=t.scale,t.body.rotation=t.rotation)}},{key:"onParticleDead",value:function(t){t.body&&(t.body.parent&&t.body.parent.removeChild(t.body),this.pool.expire(t.body),t.body=null),t.graphics&&this.pool.expire(t.graphics)}},{key:"createSprite",value:function(t){t.body=this.pool.get(t.body),t.body.parent||t.body.image&&(t.body.regX=t.body.image.width/2,t.body.regY=t.body.image.height/2)}},{key:"createCircle",value:function(t){var e=this.pool.get(createjs.Graphics);this.stroke&&(this.stroke instanceof String?e.beginStroke(this.stroke):e.beginStroke("#000000")),e.beginFill(t.color||"#ff0000").drawCircle(0,0,t.radius);var i=this.pool.get(createjs.Shape,[e]);t.body=i,t.graphics=e}}]),se);function se(t,e){o(this,se);t=h(this,(se.__proto__||Object.getPrototypeOf(se)).call(this,t));return t.stroke=e,t.name="EaselRenderer",t}var oe=(r(he,$t),t(he,[{key:"resize",value:function(t,e){this.element.width=t,this.element.height=e}},{key:"createImageData",value:function(t){this.rectangle=t||new Z(0,0,this.element.width,this.element.height),this.imageData=this.context.createImageData(this.rectangle.width,this.rectangle.height),this.context.putImageData(this.imageData,this.rectangle.x,this.rectangle.y)}},{key:"onProtonUpdate",value:function(){this.context.clearRect(this.rectangle.x,this.rectangle.y,this.rectangle.width,this.rectangle.height),this.imageData=this.context.getImageData(this.rectangle.x,this.rectangle.y,this.rectangle.width,this.rectangle.height)}},{key:"onProtonUpdateAfter",value:function(){this.context.putImageData(this.imageData,this.rectangle.x,this.rectangle.y)}},{key:"onParticleCreated",value:function(){}},{key:"onParticleUpdate",value:function(t){this.imageData&&this.setPixel(this.imageData,Math.floor(t.p.x-this.rectangle.x),Math.floor(t.p.y-this.rectangle.y),t)}},{key:"setPixel",value:function(t,e,i,a){var r=a.rgb;e<0||e>this.element.width||i<0||i>this.elementwidth||(e=4*((i>>0)*t.width+(e>>0)),t.data[e]=r.r,t.data[1+e]=r.g,t.data[2+e]=r.b,t.data[3+e]=255*a.alpha)}},{key:"onParticleDead",value:function(){}}]),he);function he(t,e){o(this,he);t=h(this,(he.__proto__||Object.getPrototypeOf(he)).call(this,t));return t.context=t.element.getContext("2d"),t.imageData=null,t.rectangle=null,t.rectangle=e,t.createImageData(e),t.name="PixelRenderer",t}var le=void 0,ue=(r(ce,$t),t(ce,[{key:"setPIXI",value:function(t){try{le=t||{Sprite:{}},this.createFromImage=le.Sprite.from||le.Sprite.fromImage}catch(t){}}},{key:"onProtonUpdate",value:function(){}},{key:"onParticleCreated",value:function(t){t.body?t.body=this.pool.get(t.body,t):t.body=this.pool.get(this.circleConf,t),this.blendMode&&(t.body.blendMode=this.blendMode),this.element.addChild(t.body)}},{key:"onParticleUpdate",value:function(t){this.transform(t,t.body),!0!==this.setColor&&!0!==this.color||(t.body.tint=H.getHex16FromParticle(t))}},{key:"onParticleDead",value:function(t){this.element.removeChild(t.body),this.pool.expire(t.body),t.body=null}},{key:"destroy",value:function(t){n(ce.prototype.__proto__||Object.getPrototypeOf(ce.prototype),"destroy",this).call(this),this.pool.destroy();for(var e=t.length;e--;){var i=t[e];i.body&&this.element.removeChild(i.body)}}},{key:"transform",value:function(t,e){e.x=t.p.x,e.y=t.p.y,e.alpha=t.alpha,e.scale.x=t.scale,e.scale.y=t.scale,e.rotation=t.rotation*s.PI_180}},{key:"createBody",value:function(t,e){return t.isCircle?this.createCircle(e):this.createSprite(t)}},{key:"createSprite",value:function(t){t=t.isInner?this.createFromImage(t.src):new le.Sprite(t);return t.anchor.x=.5,t.anchor.y=.5,t}},{key:"createCircle",value:function(t){var e,i=new le.Graphics;return this.stroke&&(e=this.stroke instanceof String?this.stroke:0,i.beginStroke(e)),i.beginFill(t.color||36077),i.drawCircle(0,0,t.radius),i.endFill(),i}}]),ce);function ce(t,e){o(this,ce);var i=h(this,(ce.__proto__||Object.getPrototypeOf(ce)).call(this,t));return i.stroke=e,i.color=!1,i.setColor=!1,i.blendMode=null,i.pool.create=function(t,e){return i.createBody(t,e)},i.setPIXI(window.PIXI),i.name="PixiRenderer",i}var de=(t(ye,[{key:"set",value:function(t,e){0===e?X.set(t,this.mats[0]):X.multiply(this.mats[e-1],t,this.mats[e]),this.size=Math.max(this.size,e+1)}},{key:"push",value:function(t){0===this.size?X.set(t,this.mats[0]):X.multiply(this.mats[this.size-1],t,this.mats[this.size]),this.size++}},{key:"pop",value:function(){0<this.size&&this.size--}},{key:"top",value:function(){return this.mats[this.size-1]}}]),ye);function ye(){o(this,ye),this.mats=[];for(var t=this.size=0;t<20;t++)this.mats.push(X.create([0,0,0,0,0,0,0,0,0]))}r(pe,$t),t(pe,[{key:"init",value:function(t){n(pe.prototype.__proto__||Object.getPrototypeOf(pe.prototype),"init",this).call(this,t),this.resize(this.element.width,this.element.height)}},{key:"resize",value:function(t,e){this.umat[4]=-2,this.umat[7]=1,this.smat[0]=1/t,this.smat[4]=1/e,this.mstack.set(this.umat,0),this.mstack.set(this.smat,1),this.gl.viewport(0,0,t,e),this.element.width=t,this.element.height=e}},{key:"setMaxRadius",value:function(t){this.circleCanvasURL=this.createCircle(t)}},{key:"getVertexShader",value:function(){return["uniform vec2 viewport;","attribute vec2 aVertexPosition;","attribute vec2 aTextureCoord;","uniform mat3 tMat;","varying vec2 vTextureCoord;","varying float alpha;","void main() {","vec3 v = tMat * vec3(aVertexPosition, 1.0);","gl_Position = vec4(v.x, v.y, 0, 1);","vTextureCoord = aTextureCoord;","alpha = tMat[0][2];","}"].join("\n")}},{key:"getFragmentShader",value:function(){return["precision mediump float;","varying vec2 vTextureCoord;","varying float alpha;","uniform sampler2D uSampler;","uniform vec4 color;","uniform bool useTexture;","uniform vec3 uColor;","void main() {","vec4 textureColor = texture2D(uSampler, vTextureCoord);","gl_FragColor = textureColor * vec4(uColor, 1.0);","gl_FragColor.w *= alpha;","}"].join("\n")}},{key:"initVar",value:function(){this.mstack=new de,this.umat=X.create([2,0,1,0,-2,0,-1,1,1]),this.smat=X.create([.01,0,1,0,.01,0,0,0,1]),this.texturebuffers={}}},{key:"blendEquation",value:function(t){this.gl.blendEquation(this.gl[t])}},{key:"blendFunc",value:function(t,e){this.gl.blendFunc(this.gl[t],this.gl[e])}},{key:"getShader",value:function(t,e,i){i=i?t.createShader(t.FRAGMENT_SHADER):t.createShader(t.VERTEX_SHADER);return t.shaderSource(i,e),t.compileShader(i),t.getShaderParameter(i,t.COMPILE_STATUS)?i:(alert(t.getShaderInfoLog(i)),null)}},{key:"initShaders",value:function(){var t=this.getShader(this.gl,this.getFragmentShader(),!0),e=this.getShader(this.gl,this.getVertexShader(),!1);this.sprogram=this.gl.createProgram(),this.gl.attachShader(this.sprogram,e),this.gl.attachShader(this.sprogram,t),this.gl.linkProgram(this.sprogram),this.gl.getProgramParameter(this.sprogram,this.gl.LINK_STATUS)||alert("Could not initialise shaders"),this.gl.useProgram(this.sprogram),this.sprogram.vpa=this.gl.getAttribLocation(this.sprogram,"aVertexPosition"),this.sprogram.tca=this.gl.getAttribLocation(this.sprogram,"aTextureCoord"),this.gl.enableVertexAttribArray(this.sprogram.tca),this.gl.enableVertexAttribArray(this.sprogram.vpa),this.sprogram.tMatUniform=this.gl.getUniformLocation(this.sprogram,"tMat"),this.sprogram.samplerUniform=this.gl.getUniformLocation(this.sprogram,"uSampler"),this.sprogram.useTex=this.gl.getUniformLocation(this.sprogram,"useTexture"),this.sprogram.color=this.gl.getUniformLocation(this.sprogram,"uColor"),this.gl.uniform1i(this.sprogram.useTex,1)}},{key:"initBuffers",value:function(){var t;this.unitIBuffer=this.gl.createBuffer(),this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,this.unitIBuffer),this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER,new Uint16Array([0,3,1,0,2,3]),this.gl.STATIC_DRAW);for(var e=void 0,i=[],e=0;e<100;e++)i.push(e);for(t=new Uint16Array(i),this.unitI33=this.gl.createBuffer(),this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,this.unitI33),this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER,t,this.gl.STATIC_DRAW),i=[],e=0;e<100;e++)i.push(e,e+1,e+2);t=new Uint16Array(i),this.stripBuffer=this.gl.createBuffer(),this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,this.stripBuffer),this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER,t,this.gl.STATIC_DRAW)}},{key:"createCircle",value:function(t){this.circleCanvasRadius=c(P.initValue(t,32));var e=v.createCanvas("circle_canvas",2*this.circleCanvasRadius,2*this.circleCanvasRadius),t=e.getContext("2d");return t.beginPath(),t.arc(this.circleCanvasRadius,this.circleCanvasRadius,this.circleCanvasRadius,0,2*Math.PI,!0),t.closePath(),t.fillStyle="#FFF",t.fill(),e.toDataURL()}},{key:"drawImg2Canvas",value:function(t){var e=t.body.width,i=t.body.height,a=c(t.body.width),r=c(t.body.height),n=t.body.width/a,s=t.body.height/r;this.texturebuffers[t.data.src]||(this.texturebuffers[t.data.src]=[this.gl.createTexture(),this.gl.createBuffer(),this.gl.createBuffer()]),t.data.texture=this.texturebuffers[t.data.src][0],t.data.vcBuffer=this.texturebuffers[t.data.src][1],t.data.tcBuffer=this.texturebuffers[t.data.src][2],this.gl.bindBuffer(this.gl.ARRAY_BUFFER,t.data.tcBuffer),this.gl.bufferData(this.gl.ARRAY_BUFFER,new Float32Array([0,0,n,0,0,s,s,s]),this.gl.STATIC_DRAW),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,t.data.vcBuffer),this.gl.bufferData(this.gl.ARRAY_BUFFER,new Float32Array([0,0,e,0,0,i,e,i]),this.gl.STATIC_DRAW);r=t.data.canvas.getContext("2d").getImageData(0,0,a,r);this.gl.bindTexture(this.gl.TEXTURE_2D,t.data.texture),this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.RGBA,this.gl.RGBA,this.gl.UNSIGNED_BYTE,r),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MAG_FILTER,this.gl.LINEAR),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.LINEAR_MIPMAP_NEAREST),this.gl.generateMipmap(this.gl.TEXTURE_2D),t.data.textureLoaded=!0,t.data.textureWidth=e,t.data.textureHeight=i}},{key:"onProtonUpdate",value:function(){}},{key:"onParticleCreated",value:function(t){t.data.textureLoaded=!1,t.data.tmat=X.create(),t.data.tmat[8]=1,t.data.imat=X.create(),t.data.imat[8]=1,t.body?x(t.body,this.addImg2Body,t):(x(this.circleCanvasURL,this.addImg2Body,t),t.data.oldScale=t.radius/this.circleCanvasRadius)}},{key:"addImg2Body",value:function(t,e){e.dead||(e.body=t,e.data.src=t.src,e.data.canvas=k(t),e.data.oldScale=1,this.drawImg2Canvas(e))}},{key:"onParticleUpdate",value:function(t){t.data.textureLoaded&&(this.updateMatrix(t),this.gl.uniform3f(this.sprogram.color,t.rgb.r/255,t.rgb.g/255,t.rgb.b/255),this.gl.uniformMatrix3fv(this.sprogram.tMatUniform,!1,this.mstack.top()),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,t.data.vcBuffer),this.gl.vertexAttribPointer(this.sprogram.vpa,2,this.gl.FLOAT,!1,0,0),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,t.data.tcBuffer),this.gl.vertexAttribPointer(this.sprogram.tca,2,this.gl.FLOAT,!1,0,0),this.gl.bindTexture(this.gl.TEXTURE_2D,t.data.texture),this.gl.uniform1i(this.sprogram.samplerUniform,0),this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,this.unitIBuffer),this.gl.drawElements(this.gl.TRIANGLES,6,this.gl.UNSIGNED_SHORT,0),this.mstack.pop())}},{key:"onParticleDead",value:function(){}},{key:"updateMatrix",value:function(t){var e=d(-t.data.textureWidth/2,-t.data.textureHeight/2),i=d(t.p.x,t.p.y),a=t.rotation*s.PI_180,r=y(a),a=t.scale*t.data.oldScale,a=p(a,a),a=f(e,a),a=f(a,r);a=f(a,i),X.inverse(a,t.data.imat),a[2]=t.alpha,this.mstack.push(a)}}]),C=pe;function pe(t){o(this,pe);t=h(this,(pe.__proto__||Object.getPrototypeOf(pe)).call(this,t));return t.gl=t.element.getContext("experimental-webgl",{antialias:!0,stencil:!1,depth:!1}),t.gl||alert("Sorry your browser do not suppest WebGL!"),t.initVar(),t.setMaxRadius(),t.initShaders(),t.initBuffers(),t.gl.blendEquation(t.gl.FUNC_ADD),t.gl.blendFunc(t.gl.SRC_ALPHA,t.gl.ONE_MINUS_SRC_ALPHA),t.gl.enable(t.gl.BLEND),t.addImg2Body=t.addImg2Body.bind(t),t.name="WebGLRenderer",t}r(fe,$t),$t=fe;function fe(t){o(this,fe);t=h(this,(fe.__proto__||Object.getPrototypeOf(fe)).call(this,t));return t.name="CustomRenderer",t}var ve=(r(ge,at),t(ge,[{key:"getPosition",value:function(){return this.random=Math.random(),this.vector.x=this.x1+this.random*this.length*Math.cos(this.gradient),this.vector.y=this.y1+this.random*this.length*Math.sin(this.gradient),this.vector}},{key:"getDirection",value:function(t,e){var i=this.dy,a=-this.dx;return 0<(i*t+a*e+this.dot)*(0==a?1:a)}},{key:"getDistance",value:function(t,e){return(this.dy*t+-this.dx*e+this.dot)/Math.sqrt(this.xxyy)}},{key:"getSymmetric",value:function(t){var e=t.getGradient(),i=2*(this.getGradient()-e),a=t.x,e=t.y;return t.x=a*Math.cos(i)-e*Math.sin(i),t.y=a*Math.sin(i)+e*Math.cos(i),t}},{key:"getGradient",value:function(){return Math.atan2(this.dy,this.dx)}},{key:"rangeOut",value:function(t){if(Math.abs(this.getGradient())<=s.PI/4){if(t.p.x<=this.maxx&&t.p.x>=this.minx)return!0}else if(t.p.y<=this.maxy&&t.p.y>=this.miny)return!0;return!1}},{key:"getLength",value:function(){return Math.sqrt(this.dx*this.dx+this.dy*this.dy)}},{key:"crossing",value:function(t){"dead"===this.crossType?">"===this.direction||"R"===this.direction||"right"===this.direction||"down"===this.direction?this.rangeOut(t)&&this.getDirection(t.p.x,t.p.y)&&(t.dead=!0):this.rangeOut(t)&&(this.getDirection(t.p.x,t.p.y)||(t.dead=!0)):"bound"===this.crossType?this.rangeOut(t)&&this.getDistance(t.p.x,t.p.y)<=t.radius&&(0===this.dx?t.v.x*=-1:0===this.dy?t.v.y*=-1:this.getSymmetric(t.v)):"cross"===this.crossType&&this.alert&&(console.error("Sorry, LineZone does not support cross method!"),this.alert=!1)}}]),ge);function ge(t,e,i,a,r){o(this,ge);var n=h(this,(ge.__proto__||Object.getPrototypeOf(ge)).call(this));return 0<=i-t?(n.x1=t,n.y1=e,n.x2=i,n.y2=a):(n.x1=i,n.y1=a,n.x2=t,n.y2=e),n.dx=n.x2-n.x1,n.dy=n.y2-n.y1,n.minx=Math.min(n.x1,n.x2),n.miny=Math.min(n.y1,n.y2),n.maxx=Math.max(n.x1,n.x2),n.maxy=Math.max(n.y1,n.y2),n.dot=n.x2*n.y1-n.x1*n.y2,n.xxyy=n.dx*n.dx+n.dy*n.dy,n.gradient=n.getGradient(),n.length=n.getLength(),n.direction=P.initValue(r,">"),n}var me=(r(be,at),t(be,[{key:"getPosition",value:function(){return this.angle=s.PIx2*Math.random(),this.randomRadius=Math.random()*this.radius,this.vector.x=this.x+this.randomRadius*Math.cos(this.angle),this.vector.y=this.y+this.randomRadius*Math.sin(this.angle),this.vector}},{key:"setCenter",value:function(t,e){this.center.x=t,this.center.y=e}},{key:"crossing",value:function(t){var e=t.p.distanceTo(this.center);"dead"===this.crossType?e-t.radius>this.radius&&(t.dead=!0):"bound"===this.crossType?e+t.radius>=this.radius&&this.getSymmetric(t):"cross"===this.crossType&&this.alert&&(console.error("Sorry, CircleZone does not support cross method!"),this.alert=!1)}},{key:"getSymmetric",value:function(t){var e=t.v.getGradient(),i=2*(this.getGradient(t)-e),a=t.v.x,e=t.v.y;t.v.x=a*Math.cos(i)-e*Math.sin(i),t.v.y=a*Math.sin(i)+e*Math.cos(i)}},{key:"getGradient",value:function(t){return-s.PI_2+Math.atan2(t.p.y-this.center.y,t.p.x-this.center.x)}}]),be);function be(t,e,i){o(this,be);var a=h(this,(be.__proto__||Object.getPrototypeOf(be)).call(this));return a.x=t,a.y=e,a.radius=i,a.angle=0,a.center={x:t,y:e},a}var _e=(r(xe,at),t(xe,[{key:"getPosition",value:function(){return this.vector.x=this.x+Math.random()*this.width,this.vector.y=this.y+Math.random()*this.height,this.vector}},{key:"crossing",value:function(t){"dead"===this.crossType?((t.p.x+t.radius<this.x||t.p.x-t.radius>this.x+this.width)&&(t.dead=!0),(t.p.y+t.radius<this.y||t.p.y-t.radius>this.y+this.height)&&(t.dead=!0)):"bound"===this.crossType?(t.p.x-t.radius<this.x?(t.p.x=this.x+t.radius,t.v.x*=-1):t.p.x+t.radius>this.x+this.width&&(t.p.x=this.x+this.width-t.radius,t.v.x*=-1),t.p.y-t.radius<this.y?(t.p.y=this.y+t.radius,t.v.y*=-1):t.p.y+t.radius>this.y+this.height&&(t.p.y=this.y+this.height-t.radius,t.v.y*=-1)):"cross"===this.crossType&&(t.p.x+t.radius<this.x&&t.v.x<=0?t.p.x=this.x+this.width+t.radius:t.p.x-t.radius>this.x+this.width&&0<=t.v.x&&(t.p.x=this.x-t.radius),t.p.y+t.radius<this.y&&t.v.y<=0?t.p.y=this.y+this.height+t.radius:t.p.y-t.radius>this.y+this.height&&0<=t.v.y&&(t.p.y=this.y-t.radius))}}]),xe);function xe(t,e,i,a){o(this,xe);var r=h(this,(xe.__proto__||Object.getPrototypeOf(xe)).call(this));return r.x=t,r.y=e,r.width=i,r.height=a,r}r(ke,at),t(ke,[{key:"reset",value:function(t,e,i,a){this.imageData=t,this.x=P.initValue(e,0),this.y=P.initValue(i,0),this.d=P.initValue(a,2),this.vectors=[],this.setVectors()}},{key:"setVectors",value:function(){for(var t=void 0,e=void 0,i=this.imageData.width,a=this.imageData.height,t=0;t<i;t+=this.d)for(e=0;e<a;e+=this.d){var r=4*((e>>0)*i+(t>>0));0<this.imageData.data[3+r]&&this.vectors.push({x:t+this.x,y:e+this.y})}return this.vector}},{key:"getBound",value:function(t,e){t=4*((e>>0)*this.imageData.width+(t>>0));return 0<this.imageData.data[3+t]}},{key:"getPosition",value:function(){var t=P.getRandFromArray(this.vectors);return this.vector.copy(t)}},{key:"getColor",value:function(t,e){t-=this.x;t=4*(((e-=this.y)>>0)*this.imageData.width+(t>>0));return{r:this.imageData.data[t],g:this.imageData.data[1+t],b:this.imageData.data[2+t],a:this.imageData.data[3+t]}}},{key:"crossing",value:function(t){"dead"===this.crossType?this.getBound(t.p.x-this.x,t.p.y-this.y)?t.dead=!0:t.dead=!1:"bound"===this.crossType&&(this.getBound(t.p.x-this.x,t.p.y-this.y)||t.v.negate())}}]),r=ke;function ke(t,e,i,a){o(this,ke);var r=h(this,(ke.__proto__||Object.getPrototypeOf(ke)).call(this));return r.reset(t,e,i,a),r}t={addEventListener:function(t,e){t.addEventListener("PROTON_UPDATE_AFTER",function(){return e()})},getStyle:function(t){t=H.hexToRgb(0<arguments.length&&void 0!==t?t:"#ff0000");return"rgba("+t.r+", "+t.g+", "+t.b+", 0.5)"},drawZone:function(t,e,i,a){var r=e.getContext("2d"),n=this.getStyle();this.addEventListener(t,function(){a&&r.clearRect(0,0,e.width,e.height),i instanceof nt?(r.beginPath(),r.fillStyle=n,r.arc(i.x,i.y,10,0,2*Math.PI,!0),r.fill(),r.closePath()):i instanceof ve?(r.beginPath(),r.strokeStyle=n,r.moveTo(i.x1,i.y1),r.lineTo(i.x2,i.y2),r.stroke(),r.closePath()):i instanceof _e?(r.beginPath(),r.strokeStyle=n,r.drawRect(i.x,i.y,i.width,i.height),r.stroke(),r.closePath()):i instanceof me&&(r.beginPath(),r.strokeStyle=n,r.arc(i.x,i.y,i.radius,0,2*Math.PI,!0),r.stroke(),r.closePath())})},drawEmitter:function(t,e,i,a){var r=e.getContext("2d"),n=this.getStyle();this.addEventListener(t,function(){a&&r.clearRect(0,0,e.width,e.height),r.beginPath(),r.fillStyle=n,r.arc(i.p.x,i.p.y,10,0,2*Math.PI,!0),r.fill(),r.closePath()})}};return V.Particle=j,V.Pool=T,V.Util=P,V.ColorUtil=H,V.MathUtil=s,V.Vector2D=V.Vector=F,V.Polar2D=V.Polar=q,V.ArraySpan=Y,V.Rectangle=Z,V.Rate=K,V.ease=U,V.Span=l,V.Mat3=X,V.getSpan=function(t,e,i){return new l(t,e,i)},V.createArraySpan=Y.createArraySpan,V.Initialize=V.Init=$,V.Life=V.L=et,V.Position=V.P=ot,V.Velocity=V.V=lt,V.Mass=V.M=ct,V.Radius=V.R=yt,V.Body=V.B=ft,V.Behaviour=gt,V.Force=V.F=bt,V.Attraction=V.A=xt,V.RandomDrift=V.RD=Pt,V.Gravity=V.G=At,V.Collision=Rt,V.CrossZone=wt,V.Alpha=St,V.Scale=V.S=Dt,V.Rotate=Mt,V.Color=Lt,V.Repulsion=Nt,V.Cyclone=zt,V.GravityWell=qt,V.Emitter=Yt,V.BehaviourEmitter=Zt,V.FollowEmitter=Kt,V.Zone=at,V.LineZone=ve,V.CircleZone=me,V.PointZone=nt,V.RectZone=_e,V.ImageZone=r,V.CanvasRenderer=ee,V.DomRenderer=ae,V.EaselRenderer=ne,V.PixiRenderer=ue,V.PixelRenderer=oe,V.WebGLRenderer=V.WebGlRenderer=C,V.CustomRenderer=$t,V.Debug=t,P.assign(V,U),V});
//# sourceMappingURL=proton.min.js.map


/***/ }),

/***/ "./node_modules/raf-manager/build/RAFManager.min.js":
/*!**********************************************************!*\
  !*** ./node_modules/raf-manager/build/RAFManager.min.js ***!
  \**********************************************************/
/***/ (function(module) {

/*!
* RAFManager v0.1.0
*
* Copyright 2018-2018, ajiemath <ajiemath@gmail.com>
* Licensed under the MIT license
* http://www.opensource.org/licenses/mit-license
*
*/
!function(t,i){ true?module.exports=i():0}(this,function(){"use strict";return function(){for(var t=["ms","moz","webkit","o"],i=0;i<t.length&&!window.requestAnimationFrame;++i)window.requestAnimationFrame=window[t[i]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[t[i]+"CancelAnimationFrame"]||window[t[i]+"CancelRequestAnimationFrame"]}(),{timer:0,state:"stop",animations:[],add:function(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:60,n={callback:t,fps:i,n:60/i,param:arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i:0};return this.animations.push(n),this.animations.length>=1&&this.start(),this},getIndex:function(t){for(var i=0;i<this.animations.length;i++){if(this.animations[i].callback===t)return i}return-1},remove:function(t){if(!(this.getIndex(t)<0))return this.deleteMap(t),0===this.animations.length&&this.stop(),this},deleteMap:function(t){var i=this.getIndex(t),n=this.animations[i];for(var e in n)delete n[e];this.animations.splice(i,1)},start:function(){if("start"!==this.state)return this.state="start",this.tick(),this},stop:function(){if("stop"!==this.state)return this.state="stop",cancelAnimationFrame(this.timer),this},tick:function(){var t=this;this.timer=requestAnimationFrame(function(){t.tick()});for(var i=0;i<this.animations.length;i++){var n=this.animations[i],e=n.callback,a=n.param;n.i++,n.i>=n.n&&(e(a),n.i=0)}}}});
//# sourceMappingURL=RAFManager.min.js.map


/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
/** @license React v17.0.2
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = 0xeac7;
var REACT_PORTAL_TYPE = 0xeaca;
var REACT_FRAGMENT_TYPE = 0xeacb;
var REACT_STRICT_MODE_TYPE = 0xeacc;
var REACT_PROFILER_TYPE = 0xead2;
var REACT_PROVIDER_TYPE = 0xeacd;
var REACT_CONTEXT_TYPE = 0xeace;
var REACT_FORWARD_REF_TYPE = 0xead0;
var REACT_SUSPENSE_TYPE = 0xead1;
var REACT_SUSPENSE_LIST_TYPE = 0xead8;
var REACT_MEMO_TYPE = 0xead3;
var REACT_LAZY_TYPE = 0xead4;
var REACT_BLOCK_TYPE = 0xead9;
var REACT_SERVER_BLOCK_TYPE = 0xeada;
var REACT_FUNDAMENTAL_TYPE = 0xead5;
var REACT_SCOPE_TYPE = 0xead7;
var REACT_OPAQUE_ID_TYPE = 0xeae0;
var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
var REACT_OFFSCREEN_TYPE = 0xeae2;
var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

if (typeof Symbol === 'function' && Symbol.for) {
  var symbolFor = Symbol.for;
  REACT_ELEMENT_TYPE = symbolFor('react.element');
  REACT_PORTAL_TYPE = symbolFor('react.portal');
  REACT_FRAGMENT_TYPE = symbolFor('react.fragment');
  REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
  REACT_PROFILER_TYPE = symbolFor('react.profiler');
  REACT_PROVIDER_TYPE = symbolFor('react.provider');
  REACT_CONTEXT_TYPE = symbolFor('react.context');
  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
  REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
  REACT_MEMO_TYPE = symbolFor('react.memo');
  REACT_LAZY_TYPE = symbolFor('react.lazy');
  REACT_BLOCK_TYPE = symbolFor('react.block');
  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
  REACT_SCOPE_TYPE = symbolFor('react.scope');
  REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
  REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
}

// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

var enableScopeAPI = false; // Experimental Create Event Handle API.

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
      return true;
    }
  }

  return false;
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
          case REACT_SUSPENSE_LIST_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false;
var hasWarnedAboutDeprecatedIsConcurrentMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 18+.');
    }
  }

  return false;
}
function isConcurrentMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsConcurrentMode) {
      hasWarnedAboutDeprecatedIsConcurrentMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isConcurrentMode() alias has been deprecated, ' + 'and will be removed in React 18+.');
    }
  }

  return false;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react/cjs/react-jsx-dev-runtime.development.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react/cjs/react-jsx-dev-runtime.development.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/** @license React v17.0.2
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var _assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = 0xeac7;
var REACT_PORTAL_TYPE = 0xeaca;
exports.Fragment = 0xeacb;
var REACT_STRICT_MODE_TYPE = 0xeacc;
var REACT_PROFILER_TYPE = 0xead2;
var REACT_PROVIDER_TYPE = 0xeacd;
var REACT_CONTEXT_TYPE = 0xeace;
var REACT_FORWARD_REF_TYPE = 0xead0;
var REACT_SUSPENSE_TYPE = 0xead1;
var REACT_SUSPENSE_LIST_TYPE = 0xead8;
var REACT_MEMO_TYPE = 0xead3;
var REACT_LAZY_TYPE = 0xead4;
var REACT_BLOCK_TYPE = 0xead9;
var REACT_SERVER_BLOCK_TYPE = 0xeada;
var REACT_FUNDAMENTAL_TYPE = 0xead5;
var REACT_SCOPE_TYPE = 0xead7;
var REACT_OPAQUE_ID_TYPE = 0xeae0;
var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
var REACT_OFFSCREEN_TYPE = 0xeae2;
var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

if (typeof Symbol === 'function' && Symbol.for) {
  var symbolFor = Symbol.for;
  REACT_ELEMENT_TYPE = symbolFor('react.element');
  REACT_PORTAL_TYPE = symbolFor('react.portal');
  exports.Fragment = symbolFor('react.fragment');
  REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
  REACT_PROFILER_TYPE = symbolFor('react.profiler');
  REACT_PROVIDER_TYPE = symbolFor('react.provider');
  REACT_CONTEXT_TYPE = symbolFor('react.context');
  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
  REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
  REACT_MEMO_TYPE = symbolFor('react.memo');
  REACT_LAZY_TYPE = symbolFor('react.lazy');
  REACT_BLOCK_TYPE = symbolFor('react.block');
  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
  REACT_SCOPE_TYPE = symbolFor('react.scope');
  REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
  REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
}

var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

function error(format) {
  {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    printWarning('error', format, args);
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();

    if (stack !== '') {
      format += '%s';
      args = args.concat([stack]);
    }

    var argsWithFormat = args.map(function (item) {
      return '' + item;
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);
  }
}

// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

var enableScopeAPI = false; // Experimental Create Event Handle API.

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === exports.Fragment || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
      return true;
    }
  }

  return false;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
}

function getContextName(type) {
  return type.displayName || 'Context';
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case exports.Fragment:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case REACT_PROFILER_TYPE:
      return 'Profiler';

    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';

    case REACT_SUSPENSE_TYPE:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        var context = type;
        return getContextName(context) + '.Consumer';

      case REACT_PROVIDER_TYPE:
        var provider = type;
        return getContextName(provider._context) + '.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        return getComponentName(type.type);

      case REACT_BLOCK_TYPE:
        return getComponentName(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            return getComponentName(init(payload));
          } catch (x) {
            return null;
          }
        }
    }
  }

  return null;
}

// Helpers to patch console.logs to avoid logging during side-effect free
// replaying on render function. This currently only patches the object
// lazily which won't cover if the log function was extracted eagerly.
// We could also eagerly patch the method.
var disabledDepth = 0;
var prevLog;
var prevInfo;
var prevWarn;
var prevError;
var prevGroup;
var prevGroupCollapsed;
var prevGroupEnd;

function disabledLog() {}

disabledLog.__reactDisabledLog = true;
function disableLogs() {
  {
    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      prevLog = console.log;
      prevInfo = console.info;
      prevWarn = console.warn;
      prevError = console.error;
      prevGroup = console.group;
      prevGroupCollapsed = console.groupCollapsed;
      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

      var props = {
        configurable: true,
        enumerable: true,
        value: disabledLog,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        info: props,
        log: props,
        warn: props,
        error: props,
        group: props,
        groupCollapsed: props,
        groupEnd: props
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    disabledDepth++;
  }
}
function reenableLogs() {
  {
    disabledDepth--;

    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      var props = {
        configurable: true,
        enumerable: true,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        log: _assign({}, props, {
          value: prevLog
        }),
        info: _assign({}, props, {
          value: prevInfo
        }),
        warn: _assign({}, props, {
          value: prevWarn
        }),
        error: _assign({}, props, {
          value: prevError
        }),
        group: _assign({}, props, {
          value: prevGroup
        }),
        groupCollapsed: _assign({}, props, {
          value: prevGroupCollapsed
        }),
        groupEnd: _assign({}, props, {
          value: prevGroupEnd
        })
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    if (disabledDepth < 0) {
      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
    }
  }
}

var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
var prefix;
function describeBuiltInComponentFrame(name, source, ownerFn) {
  {
    if (prefix === undefined) {
      // Extract the VM specific prefix used by each line.
      try {
        throw Error();
      } catch (x) {
        var match = x.stack.trim().match(/\n( *(at )?)/);
        prefix = match && match[1] || '';
      }
    } // We use the prefix to ensure our stacks line up with native stack frames.


    return '\n' + prefix + name;
  }
}
var reentry = false;
var componentFrameCache;

{
  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
  componentFrameCache = new PossiblyWeakMap();
}

function describeNativeComponentFrame(fn, construct) {
  // If something asked for a stack inside a fake render, it should get ignored.
  if (!fn || reentry) {
    return '';
  }

  {
    var frame = componentFrameCache.get(fn);

    if (frame !== undefined) {
      return frame;
    }
  }

  var control;
  reentry = true;
  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

  Error.prepareStackTrace = undefined;
  var previousDispatcher;

  {
    previousDispatcher = ReactCurrentDispatcher.current; // Set the dispatcher in DEV because this might be call in the render function
    // for warnings.

    ReactCurrentDispatcher.current = null;
    disableLogs();
  }

  try {
    // This should throw.
    if (construct) {
      // Something should be setting the props in the constructor.
      var Fake = function () {
        throw Error();
      }; // $FlowFixMe


      Object.defineProperty(Fake.prototype, 'props', {
        set: function () {
          // We use a throwing setter instead of frozen or non-writable props
          // because that won't throw in a non-strict mode function.
          throw Error();
        }
      });

      if (typeof Reflect === 'object' && Reflect.construct) {
        // We construct a different control for this case to include any extra
        // frames added by the construct call.
        try {
          Reflect.construct(Fake, []);
        } catch (x) {
          control = x;
        }

        Reflect.construct(fn, [], Fake);
      } else {
        try {
          Fake.call();
        } catch (x) {
          control = x;
        }

        fn.call(Fake.prototype);
      }
    } else {
      try {
        throw Error();
      } catch (x) {
        control = x;
      }

      fn();
    }
  } catch (sample) {
    // This is inlined manually because closure doesn't do it for us.
    if (sample && control && typeof sample.stack === 'string') {
      // This extracts the first frame from the sample that isn't also in the control.
      // Skipping one frame that we assume is the frame that calls the two.
      var sampleLines = sample.stack.split('\n');
      var controlLines = control.stack.split('\n');
      var s = sampleLines.length - 1;
      var c = controlLines.length - 1;

      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
        // We expect at least one stack frame to be shared.
        // Typically this will be the root most one. However, stack frames may be
        // cut off due to maximum stack limits. In this case, one maybe cut off
        // earlier than the other. We assume that the sample is longer or the same
        // and there for cut off earlier. So we should find the root most frame in
        // the sample somewhere in the control.
        c--;
      }

      for (; s >= 1 && c >= 0; s--, c--) {
        // Next we find the first one that isn't the same which should be the
        // frame that called our sample function and the control.
        if (sampleLines[s] !== controlLines[c]) {
          // In V8, the first line is describing the message but other VMs don't.
          // If we're about to return the first line, and the control is also on the same
          // line, that's a pretty good indicator that our sample threw at same line as
          // the control. I.e. before we entered the sample frame. So we ignore this result.
          // This can happen if you passed a class to function component, or non-function.
          if (s !== 1 || c !== 1) {
            do {
              s--;
              c--; // We may still have similar intermediate frames from the construct call.
              // The next one that isn't the same should be our match though.

              if (c < 0 || sampleLines[s] !== controlLines[c]) {
                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at ');

                {
                  if (typeof fn === 'function') {
                    componentFrameCache.set(fn, _frame);
                  }
                } // Return the line we found.


                return _frame;
              }
            } while (s >= 1 && c >= 0);
          }

          break;
        }
      }
    }
  } finally {
    reentry = false;

    {
      ReactCurrentDispatcher.current = previousDispatcher;
      reenableLogs();
    }

    Error.prepareStackTrace = previousPrepareStackTrace;
  } // Fallback to just using the name if we couldn't make it throw.


  var name = fn ? fn.displayName || fn.name : '';
  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

  {
    if (typeof fn === 'function') {
      componentFrameCache.set(fn, syntheticFrame);
    }
  }

  return syntheticFrame;
}
function describeFunctionComponentFrame(fn, source, ownerFn) {
  {
    return describeNativeComponentFrame(fn, false);
  }
}

function shouldConstruct(Component) {
  var prototype = Component.prototype;
  return !!(prototype && prototype.isReactComponent);
}

function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

  if (type == null) {
    return '';
  }

  if (typeof type === 'function') {
    {
      return describeNativeComponentFrame(type, shouldConstruct(type));
    }
  }

  if (typeof type === 'string') {
    return describeBuiltInComponentFrame(type);
  }

  switch (type) {
    case REACT_SUSPENSE_TYPE:
      return describeBuiltInComponentFrame('Suspense');

    case REACT_SUSPENSE_LIST_TYPE:
      return describeBuiltInComponentFrame('SuspenseList');
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        return describeFunctionComponentFrame(type.render);

      case REACT_MEMO_TYPE:
        // Memo may contain any component type so we recursively resolve it.
        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

      case REACT_BLOCK_TYPE:
        return describeFunctionComponentFrame(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            // Lazy may contain any component type so we recursively resolve it.
            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
          } catch (x) {}
        }
    }
  }

  return '';
}

var loggedTypeFailures = {};
var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame.setExtraStackFrame(null);
    }
  }
}

function checkPropTypes(typeSpecs, values, location, componentName, element) {
  {
    // $FlowFixMe This is okay but Flow doesn't know it.
    var has = Function.call.bind(Object.prototype.hasOwnProperty);

    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
        } catch (ex) {
          error$1 = ex;
        }

        if (error$1 && !(error$1 instanceof Error)) {
          setCurrentlyValidatingElement(element);

          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

          setCurrentlyValidatingElement(null);
        }

        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error$1.message] = true;
          setCurrentlyValidatingElement(element);

          error('Failed %s type: %s', location, error$1.message);

          setCurrentlyValidatingElement(null);
        }
      }
    }
  }
}

var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown;
var specialPropRefWarningShown;
var didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function warnIfStringRefCannotBeAutoConverted(config, self) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
      var componentName = getComponentName(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', getComponentName(ReactCurrentOwner.current.type), config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}

function defineKeyPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingKey = function () {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingKey.isReactWarning = true;
    Object.defineProperty(props, 'key', {
      get: warnAboutAccessingKey,
      configurable: true
    });
  }
}

function defineRefPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingRef = function () {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingRef.isReactWarning = true;
    Object.defineProperty(props, 'ref', {
      get: warnAboutAccessingRef,
      configurable: true
    });
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * https://github.com/reactjs/rfcs/pull/107
 * @param {*} type
 * @param {object} props
 * @param {string} key
 */

function jsxDEV(type, config, maybeKey, source, self) {
  {
    var propName; // Reserved names are extracted

    var props = {};
    var key = null;
    var ref = null; // Currently, key can be spread in as a prop. This causes a potential
    // issue if key is also explicitly declared (ie. <div {...props} key="Hi" />
    // or <div key="Hi" {...props} /> ). We want to deprecate key spread,
    // but as an intermediary step, we will use jsxDEV for everything except
    // <div {...props} key="Hi" />, because we aren't currently able to tell if
    // key is explicitly declared to be undefined or not.

    if (maybeKey !== undefined) {
      key = '' + maybeKey;
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    if (hasValidRef(config)) {
      ref = config.ref;
      warnIfStringRefCannotBeAutoConverted(config, self);
    } // Remaining properties are added to a new props object


    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    } // Resolve default props


    if (type && type.defaultProps) {
      var defaultProps = type.defaultProps;

      for (propName in defaultProps) {
        if (props[propName] === undefined) {
          props[propName] = defaultProps[propName];
        }
      }
    }

    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }

    return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
  }
}

var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement$1(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
    }
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */

function isValidElement(object) {
  {
    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
  }
}

function getDeclarationErrorAddendum() {
  {
    if (ReactCurrentOwner$1.current) {
      var name = getComponentName(ReactCurrentOwner$1.current.type);

      if (name) {
        return '\n\nCheck the render method of `' + name + '`.';
      }
    }

    return '';
  }
}

function getSourceInfoErrorAddendum(source) {
  {
    if (source !== undefined) {
      var fileName = source.fileName.replace(/^.*[\\\/]/, '');
      var lineNumber = source.lineNumber;
      return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
    }

    return '';
  }
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  {
    var info = getDeclarationErrorAddendum();

    if (!info) {
      var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

      if (parentName) {
        info = "\n\nCheck the top-level render call using <" + parentName + ">.";
      }
    }

    return info;
  }
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  {
    if (!element._store || element._store.validated || element.key != null) {
      return;
    }

    element._store.validated = true;
    var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

    if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
      return;
    }

    ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
    // property, it may be the creator of the child that's responsible for
    // assigning it a key.

    var childOwner = '';

    if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
      // Give the component that originally created this child.
      childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
    }

    setCurrentlyValidatingElement$1(element);

    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

    setCurrentlyValidatingElement$1(null);
  }
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  {
    if (typeof node !== 'object') {
      return;
    }

    if (Array.isArray(node)) {
      for (var i = 0; i < node.length; i++) {
        var child = node[i];

        if (isValidElement(child)) {
          validateExplicitKey(child, parentType);
        }
      }
    } else if (isValidElement(node)) {
      // This element was passed in a valid location.
      if (node._store) {
        node._store.validated = true;
      }
    } else if (node) {
      var iteratorFn = getIteratorFn(node);

      if (typeof iteratorFn === 'function') {
        // Entry iterators used to provide implicit keys,
        // but now we print a separate warning for them later.
        if (iteratorFn !== node.entries) {
          var iterator = iteratorFn.call(node);
          var step;

          while (!(step = iterator.next()).done) {
            if (isValidElement(step.value)) {
              validateExplicitKey(step.value, parentType);
            }
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      // Intentionally inside to avoid triggering lazy initializers:
      var name = getComponentName(type);
      checkPropTypes(propTypes, element.props, 'prop', name, element);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

      var _name = getComponentName(type);

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        setCurrentlyValidatingElement$1(fragment);

        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        setCurrentlyValidatingElement$1(null);
        break;
      }
    }

    if (fragment.ref !== null) {
      setCurrentlyValidatingElement$1(fragment);

      error('Invalid attribute `ref` supplied to `React.Fragment`.');

      setCurrentlyValidatingElement$1(null);
    }
  }
}

function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
  {
    var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
    // succeed and there will likely be errors in render.

    if (!validType) {
      var info = '';

      if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
        info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
      }

      var sourceInfo = getSourceInfoErrorAddendum(source);

      if (sourceInfo) {
        info += sourceInfo;
      } else {
        info += getDeclarationErrorAddendum();
      }

      var typeString;

      if (type === null) {
        typeString = 'null';
      } else if (Array.isArray(type)) {
        typeString = 'array';
      } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
        typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
        info = ' Did you accidentally export a JSX literal instead of a component?';
      } else {
        typeString = typeof type;
      }

      error('React.jsx: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }

    var element = jsxDEV(type, props, key, source, self); // The result can be nullish if a mock or a custom function is used.
    // TODO: Drop this when these are no longer allowed as the type argument.

    if (element == null) {
      return element;
    } // Skip key warning if the type isn't valid since our key validation logic
    // doesn't expect a non-string/function type and can throw confusing errors.
    // We don't want exception behavior to differ between dev and prod.
    // (Rendering will throw with a helpful message and as soon as the type is
    // fixed, the key warnings will appear.)


    if (validType) {
      var children = props.children;

      if (children !== undefined) {
        if (isStaticChildren) {
          if (Array.isArray(children)) {
            for (var i = 0; i < children.length; i++) {
              validateChildKeys(children[i], type);
            }

            if (Object.freeze) {
              Object.freeze(children);
            }
          } else {
            error('React.jsx: Static children should always be an array. ' + 'You are likely explicitly calling React.jsxs or React.jsxDEV. ' + 'Use the Babel transform instead.');
          }
        } else {
          validateChildKeys(children, type);
        }
      }
    }

    if (type === exports.Fragment) {
      validateFragmentProps(element);
    } else {
      validatePropTypes(element);
    }

    return element;
  }
} // These two functions exist to still get child warnings in dev

var jsxDEV$1 =  jsxWithValidation ;

exports.jsxDEV = jsxDEV$1;
  })();
}


/***/ }),

/***/ "./node_modules/react/cjs/react.development.js":
/*!*****************************************************!*\
  !*** ./node_modules/react/cjs/react.development.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/** @license React v17.0.2
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

var _assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

// TODO: this is special because it gets imported during build.
var ReactVersion = '17.0.2';

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = 0xeac7;
var REACT_PORTAL_TYPE = 0xeaca;
exports.Fragment = 0xeacb;
exports.StrictMode = 0xeacc;
exports.Profiler = 0xead2;
var REACT_PROVIDER_TYPE = 0xeacd;
var REACT_CONTEXT_TYPE = 0xeace;
var REACT_FORWARD_REF_TYPE = 0xead0;
exports.Suspense = 0xead1;
var REACT_SUSPENSE_LIST_TYPE = 0xead8;
var REACT_MEMO_TYPE = 0xead3;
var REACT_LAZY_TYPE = 0xead4;
var REACT_BLOCK_TYPE = 0xead9;
var REACT_SERVER_BLOCK_TYPE = 0xeada;
var REACT_FUNDAMENTAL_TYPE = 0xead5;
var REACT_SCOPE_TYPE = 0xead7;
var REACT_OPAQUE_ID_TYPE = 0xeae0;
var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
var REACT_OFFSCREEN_TYPE = 0xeae2;
var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

if (typeof Symbol === 'function' && Symbol.for) {
  var symbolFor = Symbol.for;
  REACT_ELEMENT_TYPE = symbolFor('react.element');
  REACT_PORTAL_TYPE = symbolFor('react.portal');
  exports.Fragment = symbolFor('react.fragment');
  exports.StrictMode = symbolFor('react.strict_mode');
  exports.Profiler = symbolFor('react.profiler');
  REACT_PROVIDER_TYPE = symbolFor('react.provider');
  REACT_CONTEXT_TYPE = symbolFor('react.context');
  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
  exports.Suspense = symbolFor('react.suspense');
  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
  REACT_MEMO_TYPE = symbolFor('react.memo');
  REACT_LAZY_TYPE = symbolFor('react.lazy');
  REACT_BLOCK_TYPE = symbolFor('react.block');
  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
  REACT_SCOPE_TYPE = symbolFor('react.scope');
  REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
  REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
}

var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

/**
 * Keeps track of the current dispatcher.
 */
var ReactCurrentDispatcher = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

/**
 * Keeps track of the current batch's configuration such as how long an update
 * should suspend for if it needs to.
 */
var ReactCurrentBatchConfig = {
  transition: 0
};

/**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */
var ReactCurrentOwner = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

var ReactDebugCurrentFrame = {};
var currentExtraStackFrame = null;
function setExtraStackFrame(stack) {
  {
    currentExtraStackFrame = stack;
  }
}

{
  ReactDebugCurrentFrame.setExtraStackFrame = function (stack) {
    {
      currentExtraStackFrame = stack;
    }
  }; // Stack implementation injected by the current renderer.


  ReactDebugCurrentFrame.getCurrentStack = null;

  ReactDebugCurrentFrame.getStackAddendum = function () {
    var stack = ''; // Add an extra top frame while an element is being validated

    if (currentExtraStackFrame) {
      stack += currentExtraStackFrame;
    } // Delegate to the injected renderer-specific implementation


    var impl = ReactDebugCurrentFrame.getCurrentStack;

    if (impl) {
      stack += impl() || '';
    }

    return stack;
  };
}

/**
 * Used by act() to track whether you're inside an act() scope.
 */
var IsSomeRendererActing = {
  current: false
};

var ReactSharedInternals = {
  ReactCurrentDispatcher: ReactCurrentDispatcher,
  ReactCurrentBatchConfig: ReactCurrentBatchConfig,
  ReactCurrentOwner: ReactCurrentOwner,
  IsSomeRendererActing: IsSomeRendererActing,
  // Used by renderers to avoid bundling object-assign twice in UMD bundles:
  assign: _assign
};

{
  ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
}

// by calls to these methods by a Babel plugin.
//
// In PROD (or in packages without access to React internals),
// they are left as they are instead.

function warn(format) {
  {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    printWarning('warn', format, args);
  }
}
function error(format) {
  {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    printWarning('error', format, args);
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();

    if (stack !== '') {
      format += '%s';
      args = args.concat([stack]);
    }

    var argsWithFormat = args.map(function (item) {
      return '' + item;
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);
  }
}

var didWarnStateUpdateForUnmountedComponent = {};

function warnNoop(publicInstance, callerName) {
  {
    var _constructor = publicInstance.constructor;
    var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
    var warningKey = componentName + "." + callerName;

    if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
      return;
    }

    error("Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);

    didWarnStateUpdateForUnmountedComponent[warningKey] = true;
  }
}
/**
 * This is the abstract API for an update queue.
 */


var ReactNoopUpdateQueue = {
  /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
  isMounted: function (publicInstance) {
    return false;
  },

  /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueForceUpdate: function (publicInstance, callback, callerName) {
    warnNoop(publicInstance, 'forceUpdate');
  },

  /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
    warnNoop(publicInstance, 'replaceState');
  },

  /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} Name of the calling function in the public API.
   * @internal
   */
  enqueueSetState: function (publicInstance, partialState, callback, callerName) {
    warnNoop(publicInstance, 'setState');
  }
};

var emptyObject = {};

{
  Object.freeze(emptyObject);
}
/**
 * Base class helpers for the updating state of a component.
 */


function Component(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject; // We initialize the default updater but the real one gets injected by the
  // renderer.

  this.updater = updater || ReactNoopUpdateQueue;
}

Component.prototype.isReactComponent = {};
/**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */

Component.prototype.setState = function (partialState, callback) {
  if (!(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null)) {
    {
      throw Error( "setState(...): takes an object of state variables to update or a function which returns an object of state variables." );
    }
  }

  this.updater.enqueueSetState(this, partialState, callback, 'setState');
};
/**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */


Component.prototype.forceUpdate = function (callback) {
  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
};
/**
 * Deprecated APIs. These APIs used to exist on classic React classes but since
 * we would like to deprecate them, we're not going to move them over to this
 * modern base class. Instead, we define a getter that warns if it's accessed.
 */


{
  var deprecatedAPIs = {
    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
  };

  var defineDeprecationWarning = function (methodName, info) {
    Object.defineProperty(Component.prototype, methodName, {
      get: function () {
        warn('%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);

        return undefined;
      }
    });
  };

  for (var fnName in deprecatedAPIs) {
    if (deprecatedAPIs.hasOwnProperty(fnName)) {
      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    }
  }
}

function ComponentDummy() {}

ComponentDummy.prototype = Component.prototype;
/**
 * Convenience component with default shallow equality check for sCU.
 */

function PureComponent(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject;
  this.updater = updater || ReactNoopUpdateQueue;
}

var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
pureComponentPrototype.constructor = PureComponent; // Avoid an extra prototype jump for these methods.

_assign(pureComponentPrototype, Component.prototype);

pureComponentPrototype.isPureReactComponent = true;

// an immutable object with a single mutable value
function createRef() {
  var refObject = {
    current: null
  };

  {
    Object.seal(refObject);
  }

  return refObject;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
}

function getContextName(type) {
  return type.displayName || 'Context';
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case exports.Fragment:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case exports.Profiler:
      return 'Profiler';

    case exports.StrictMode:
      return 'StrictMode';

    case exports.Suspense:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        var context = type;
        return getContextName(context) + '.Consumer';

      case REACT_PROVIDER_TYPE:
        var provider = type;
        return getContextName(provider._context) + '.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        return getComponentName(type.type);

      case REACT_BLOCK_TYPE:
        return getComponentName(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            return getComponentName(init(payload));
          } catch (x) {
            return null;
          }
        }
    }
  }

  return null;
}

var hasOwnProperty = Object.prototype.hasOwnProperty;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function defineKeyPropWarningGetter(props, displayName) {
  var warnAboutAccessingKey = function () {
    {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    }
  };

  warnAboutAccessingKey.isReactWarning = true;
  Object.defineProperty(props, 'key', {
    get: warnAboutAccessingKey,
    configurable: true
  });
}

function defineRefPropWarningGetter(props, displayName) {
  var warnAboutAccessingRef = function () {
    {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    }
  };

  warnAboutAccessingRef.isReactWarning = true;
  Object.defineProperty(props, 'ref', {
    get: warnAboutAccessingRef,
    configurable: true
  });
}

function warnIfStringRefCannotBeAutoConverted(config) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
      var componentName = getComponentName(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', componentName, config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * Create and return a new ReactElement of the given type.
 * See https://reactjs.org/docs/react-api.html#createelement
 */

function createElement(type, config, children) {
  var propName; // Reserved names are extracted

  var props = {};
  var key = null;
  var ref = null;
  var self = null;
  var source = null;

  if (config != null) {
    if (hasValidRef(config)) {
      ref = config.ref;

      {
        warnIfStringRefCannotBeAutoConverted(config);
      }
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    self = config.__self === undefined ? null : config.__self;
    source = config.__source === undefined ? null : config.__source; // Remaining properties are added to a new props object

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    {
      if (Object.freeze) {
        Object.freeze(childArray);
      }
    }

    props.children = childArray;
  } // Resolve default props


  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;

    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }

  {
    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }
  }

  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
}
function cloneAndReplaceKey(oldElement, newKey) {
  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
  return newElement;
}
/**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://reactjs.org/docs/react-api.html#cloneelement
 */

function cloneElement(element, config, children) {
  if (!!(element === null || element === undefined)) {
    {
      throw Error( "React.cloneElement(...): The argument must be a React element, but you passed " + element + "." );
    }
  }

  var propName; // Original props are copied

  var props = _assign({}, element.props); // Reserved names are extracted


  var key = element.key;
  var ref = element.ref; // Self is preserved since the owner is preserved.

  var self = element._self; // Source is preserved since cloneElement is unlikely to be targeted by a
  // transpiler, and the original source is probably a better indicator of the
  // true owner.

  var source = element._source; // Owner will be preserved, unless ref is overridden

  var owner = element._owner;

  if (config != null) {
    if (hasValidRef(config)) {
      // Silently steal the ref from the parent.
      ref = config.ref;
      owner = ReactCurrentOwner.current;
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    } // Remaining properties override existing props


    var defaultProps;

    if (element.type && element.type.defaultProps) {
      defaultProps = element.type.defaultProps;
    }

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        if (config[propName] === undefined && defaultProps !== undefined) {
          // Resolve default props
          props[propName] = defaultProps[propName];
        } else {
          props[propName] = config[propName];
        }
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    props.children = childArray;
  }

  return ReactElement(element.type, key, ref, self, source, owner, props);
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */

function isValidElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}

var SEPARATOR = '.';
var SUBSEPARATOR = ':';
/**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */

function escape(key) {
  var escapeRegex = /[=:]/g;
  var escaperLookup = {
    '=': '=0',
    ':': '=2'
  };
  var escapedString = key.replace(escapeRegex, function (match) {
    return escaperLookup[match];
  });
  return '$' + escapedString;
}
/**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */


var didWarnAboutMaps = false;
var userProvidedKeyEscapeRegex = /\/+/g;

function escapeUserProvidedKey(text) {
  return text.replace(userProvidedKeyEscapeRegex, '$&/');
}
/**
 * Generate a key string that identifies a element within a set.
 *
 * @param {*} element A element that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */


function getElementKey(element, index) {
  // Do some typechecking here since we call this blindly. We want to ensure
  // that we don't block potential future ES APIs.
  if (typeof element === 'object' && element !== null && element.key != null) {
    // Explicit key
    return escape('' + element.key);
  } // Implicit key determined by the index in the set


  return index.toString(36);
}

function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
  var type = typeof children;

  if (type === 'undefined' || type === 'boolean') {
    // All of the above are perceived as null.
    children = null;
  }

  var invokeCallback = false;

  if (children === null) {
    invokeCallback = true;
  } else {
    switch (type) {
      case 'string':
      case 'number':
        invokeCallback = true;
        break;

      case 'object':
        switch (children.$$typeof) {
          case REACT_ELEMENT_TYPE:
          case REACT_PORTAL_TYPE:
            invokeCallback = true;
        }

    }
  }

  if (invokeCallback) {
    var _child = children;
    var mappedChild = callback(_child); // If it's the only child, treat the name as if it was wrapped in an array
    // so that it's consistent if the number of children grows:

    var childKey = nameSoFar === '' ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;

    if (Array.isArray(mappedChild)) {
      var escapedChildKey = '';

      if (childKey != null) {
        escapedChildKey = escapeUserProvidedKey(childKey) + '/';
      }

      mapIntoArray(mappedChild, array, escapedChildKey, '', function (c) {
        return c;
      });
    } else if (mappedChild != null) {
      if (isValidElement(mappedChild)) {
        mappedChild = cloneAndReplaceKey(mappedChild, // Keep both the (mapped) and old keys if they differ, just as
        // traverseAllChildren used to do for objects as children
        escapedPrefix + ( // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
        mappedChild.key && (!_child || _child.key !== mappedChild.key) ? // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
        escapeUserProvidedKey('' + mappedChild.key) + '/' : '') + childKey);
      }

      array.push(mappedChild);
    }

    return 1;
  }

  var child;
  var nextName;
  var subtreeCount = 0; // Count of children found in the current subtree.

  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      nextName = nextNamePrefix + getElementKey(child, i);
      subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
    }
  } else {
    var iteratorFn = getIteratorFn(children);

    if (typeof iteratorFn === 'function') {
      var iterableChildren = children;

      {
        // Warn about using Maps as children
        if (iteratorFn === iterableChildren.entries) {
          if (!didWarnAboutMaps) {
            warn('Using Maps as children is not supported. ' + 'Use an array of keyed ReactElements instead.');
          }

          didWarnAboutMaps = true;
        }
      }

      var iterator = iteratorFn.call(iterableChildren);
      var step;
      var ii = 0;

      while (!(step = iterator.next()).done) {
        child = step.value;
        nextName = nextNamePrefix + getElementKey(child, ii++);
        subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
      }
    } else if (type === 'object') {
      var childrenString = '' + children;

      {
        {
          throw Error( "Objects are not valid as a React child (found: " + (childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString) + "). If you meant to render a collection of children, use an array instead." );
        }
      }
    }
  }

  return subtreeCount;
}

/**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenmap
 *
 * The provided mapFunction(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */
function mapChildren(children, func, context) {
  if (children == null) {
    return children;
  }

  var result = [];
  var count = 0;
  mapIntoArray(children, result, '', '', function (child) {
    return func.call(context, child, count++);
  });
  return result;
}
/**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrencount
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */


function countChildren(children) {
  var n = 0;
  mapChildren(children, function () {
    n++; // Don't return anything
  });
  return n;
}

/**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */
function forEachChildren(children, forEachFunc, forEachContext) {
  mapChildren(children, function () {
    forEachFunc.apply(this, arguments); // Don't return anything.
  }, forEachContext);
}
/**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
 */


function toArray(children) {
  return mapChildren(children, function (child) {
    return child;
  }) || [];
}
/**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenonly
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */


function onlyChild(children) {
  if (!isValidElement(children)) {
    {
      throw Error( "React.Children.only expected to receive a single React element child." );
    }
  }

  return children;
}

function createContext(defaultValue, calculateChangedBits) {
  if (calculateChangedBits === undefined) {
    calculateChangedBits = null;
  } else {
    {
      if (calculateChangedBits !== null && typeof calculateChangedBits !== 'function') {
        error('createContext: Expected the optional second argument to be a ' + 'function. Instead received: %s', calculateChangedBits);
      }
    }
  }

  var context = {
    $$typeof: REACT_CONTEXT_TYPE,
    _calculateChangedBits: calculateChangedBits,
    // As a workaround to support multiple concurrent renderers, we categorize
    // some renderers as primary and others as secondary. We only expect
    // there to be two concurrent renderers at most: React Native (primary) and
    // Fabric (secondary); React DOM (primary) and React ART (secondary).
    // Secondary renderers store their context values on separate fields.
    _currentValue: defaultValue,
    _currentValue2: defaultValue,
    // Used to track how many concurrent renderers this context currently
    // supports within in a single renderer. Such as parallel server rendering.
    _threadCount: 0,
    // These are circular
    Provider: null,
    Consumer: null
  };
  context.Provider = {
    $$typeof: REACT_PROVIDER_TYPE,
    _context: context
  };
  var hasWarnedAboutUsingNestedContextConsumers = false;
  var hasWarnedAboutUsingConsumerProvider = false;
  var hasWarnedAboutDisplayNameOnConsumer = false;

  {
    // A separate object, but proxies back to the original context object for
    // backwards compatibility. It has a different $$typeof, so we can properly
    // warn for the incorrect usage of Context as a Consumer.
    var Consumer = {
      $$typeof: REACT_CONTEXT_TYPE,
      _context: context,
      _calculateChangedBits: context._calculateChangedBits
    }; // $FlowFixMe: Flow complains about not setting a value, which is intentional here

    Object.defineProperties(Consumer, {
      Provider: {
        get: function () {
          if (!hasWarnedAboutUsingConsumerProvider) {
            hasWarnedAboutUsingConsumerProvider = true;

            error('Rendering <Context.Consumer.Provider> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Provider> instead?');
          }

          return context.Provider;
        },
        set: function (_Provider) {
          context.Provider = _Provider;
        }
      },
      _currentValue: {
        get: function () {
          return context._currentValue;
        },
        set: function (_currentValue) {
          context._currentValue = _currentValue;
        }
      },
      _currentValue2: {
        get: function () {
          return context._currentValue2;
        },
        set: function (_currentValue2) {
          context._currentValue2 = _currentValue2;
        }
      },
      _threadCount: {
        get: function () {
          return context._threadCount;
        },
        set: function (_threadCount) {
          context._threadCount = _threadCount;
        }
      },
      Consumer: {
        get: function () {
          if (!hasWarnedAboutUsingNestedContextConsumers) {
            hasWarnedAboutUsingNestedContextConsumers = true;

            error('Rendering <Context.Consumer.Consumer> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
          }

          return context.Consumer;
        }
      },
      displayName: {
        get: function () {
          return context.displayName;
        },
        set: function (displayName) {
          if (!hasWarnedAboutDisplayNameOnConsumer) {
            warn('Setting `displayName` on Context.Consumer has no effect. ' + "You should set it directly on the context with Context.displayName = '%s'.", displayName);

            hasWarnedAboutDisplayNameOnConsumer = true;
          }
        }
      }
    }); // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty

    context.Consumer = Consumer;
  }

  {
    context._currentRenderer = null;
    context._currentRenderer2 = null;
  }

  return context;
}

var Uninitialized = -1;
var Pending = 0;
var Resolved = 1;
var Rejected = 2;

function lazyInitializer(payload) {
  if (payload._status === Uninitialized) {
    var ctor = payload._result;
    var thenable = ctor(); // Transition to the next state.

    var pending = payload;
    pending._status = Pending;
    pending._result = thenable;
    thenable.then(function (moduleObject) {
      if (payload._status === Pending) {
        var defaultExport = moduleObject.default;

        {
          if (defaultExport === undefined) {
            error('lazy: Expected the result of a dynamic import() call. ' + 'Instead received: %s\n\nYour code should look like: \n  ' + // Break up imports to avoid accidentally parsing them as dependencies.
            'const MyComponent = lazy(() => imp' + "ort('./MyComponent'))", moduleObject);
          }
        } // Transition to the next state.


        var resolved = payload;
        resolved._status = Resolved;
        resolved._result = defaultExport;
      }
    }, function (error) {
      if (payload._status === Pending) {
        // Transition to the next state.
        var rejected = payload;
        rejected._status = Rejected;
        rejected._result = error;
      }
    });
  }

  if (payload._status === Resolved) {
    return payload._result;
  } else {
    throw payload._result;
  }
}

function lazy(ctor) {
  var payload = {
    // We use these fields to store the result.
    _status: -1,
    _result: ctor
  };
  var lazyType = {
    $$typeof: REACT_LAZY_TYPE,
    _payload: payload,
    _init: lazyInitializer
  };

  {
    // In production, this would just set it on the object.
    var defaultProps;
    var propTypes; // $FlowFixMe

    Object.defineProperties(lazyType, {
      defaultProps: {
        configurable: true,
        get: function () {
          return defaultProps;
        },
        set: function (newDefaultProps) {
          error('React.lazy(...): It is not supported to assign `defaultProps` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          defaultProps = newDefaultProps; // Match production behavior more closely:
          // $FlowFixMe

          Object.defineProperty(lazyType, 'defaultProps', {
            enumerable: true
          });
        }
      },
      propTypes: {
        configurable: true,
        get: function () {
          return propTypes;
        },
        set: function (newPropTypes) {
          error('React.lazy(...): It is not supported to assign `propTypes` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          propTypes = newPropTypes; // Match production behavior more closely:
          // $FlowFixMe

          Object.defineProperty(lazyType, 'propTypes', {
            enumerable: true
          });
        }
      }
    });
  }

  return lazyType;
}

function forwardRef(render) {
  {
    if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
      error('forwardRef requires a render function but received a `memo` ' + 'component. Instead of forwardRef(memo(...)), use ' + 'memo(forwardRef(...)).');
    } else if (typeof render !== 'function') {
      error('forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render);
    } else {
      if (render.length !== 0 && render.length !== 2) {
        error('forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.');
      }
    }

    if (render != null) {
      if (render.defaultProps != null || render.propTypes != null) {
        error('forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?');
      }
    }
  }

  var elementType = {
    $$typeof: REACT_FORWARD_REF_TYPE,
    render: render
  };

  {
    var ownName;
    Object.defineProperty(elementType, 'displayName', {
      enumerable: false,
      configurable: true,
      get: function () {
        return ownName;
      },
      set: function (name) {
        ownName = name;

        if (render.displayName == null) {
          render.displayName = name;
        }
      }
    });
  }

  return elementType;
}

// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

var enableScopeAPI = false; // Experimental Create Event Handle API.

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === exports.Fragment || type === exports.Profiler || type === REACT_DEBUG_TRACING_MODE_TYPE || type === exports.StrictMode || type === exports.Suspense || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
      return true;
    }
  }

  return false;
}

function memo(type, compare) {
  {
    if (!isValidElementType(type)) {
      error('memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : typeof type);
    }
  }

  var elementType = {
    $$typeof: REACT_MEMO_TYPE,
    type: type,
    compare: compare === undefined ? null : compare
  };

  {
    var ownName;
    Object.defineProperty(elementType, 'displayName', {
      enumerable: false,
      configurable: true,
      get: function () {
        return ownName;
      },
      set: function (name) {
        ownName = name;

        if (type.displayName == null) {
          type.displayName = name;
        }
      }
    });
  }

  return elementType;
}

function resolveDispatcher() {
  var dispatcher = ReactCurrentDispatcher.current;

  if (!(dispatcher !== null)) {
    {
      throw Error( "Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem." );
    }
  }

  return dispatcher;
}

function useContext(Context, unstable_observedBits) {
  var dispatcher = resolveDispatcher();

  {
    if (unstable_observedBits !== undefined) {
      error('useContext() second argument is reserved for future ' + 'use in React. Passing it is not supported. ' + 'You passed: %s.%s', unstable_observedBits, typeof unstable_observedBits === 'number' && Array.isArray(arguments[2]) ? '\n\nDid you call array.map(useContext)? ' + 'Calling Hooks inside a loop is not supported. ' + 'Learn more at https://reactjs.org/link/rules-of-hooks' : '');
    } // TODO: add a more generic warning for invalid values.


    if (Context._context !== undefined) {
      var realContext = Context._context; // Don't deduplicate because this legitimately causes bugs
      // and nobody should be using this in existing code.

      if (realContext.Consumer === Context) {
        error('Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' + 'removed in a future major release. Did you mean to call useContext(Context) instead?');
      } else if (realContext.Provider === Context) {
        error('Calling useContext(Context.Provider) is not supported. ' + 'Did you mean to call useContext(Context) instead?');
      }
    }
  }

  return dispatcher.useContext(Context, unstable_observedBits);
}
function useState(initialState) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useState(initialState);
}
function useReducer(reducer, initialArg, init) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useReducer(reducer, initialArg, init);
}
function useRef(initialValue) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useRef(initialValue);
}
function useEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useEffect(create, deps);
}
function useLayoutEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useLayoutEffect(create, deps);
}
function useCallback(callback, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useCallback(callback, deps);
}
function useMemo(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useMemo(create, deps);
}
function useImperativeHandle(ref, create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useImperativeHandle(ref, create, deps);
}
function useDebugValue(value, formatterFn) {
  {
    var dispatcher = resolveDispatcher();
    return dispatcher.useDebugValue(value, formatterFn);
  }
}

// Helpers to patch console.logs to avoid logging during side-effect free
// replaying on render function. This currently only patches the object
// lazily which won't cover if the log function was extracted eagerly.
// We could also eagerly patch the method.
var disabledDepth = 0;
var prevLog;
var prevInfo;
var prevWarn;
var prevError;
var prevGroup;
var prevGroupCollapsed;
var prevGroupEnd;

function disabledLog() {}

disabledLog.__reactDisabledLog = true;
function disableLogs() {
  {
    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      prevLog = console.log;
      prevInfo = console.info;
      prevWarn = console.warn;
      prevError = console.error;
      prevGroup = console.group;
      prevGroupCollapsed = console.groupCollapsed;
      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

      var props = {
        configurable: true,
        enumerable: true,
        value: disabledLog,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        info: props,
        log: props,
        warn: props,
        error: props,
        group: props,
        groupCollapsed: props,
        groupEnd: props
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    disabledDepth++;
  }
}
function reenableLogs() {
  {
    disabledDepth--;

    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      var props = {
        configurable: true,
        enumerable: true,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        log: _assign({}, props, {
          value: prevLog
        }),
        info: _assign({}, props, {
          value: prevInfo
        }),
        warn: _assign({}, props, {
          value: prevWarn
        }),
        error: _assign({}, props, {
          value: prevError
        }),
        group: _assign({}, props, {
          value: prevGroup
        }),
        groupCollapsed: _assign({}, props, {
          value: prevGroupCollapsed
        }),
        groupEnd: _assign({}, props, {
          value: prevGroupEnd
        })
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    if (disabledDepth < 0) {
      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
    }
  }
}

var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
var prefix;
function describeBuiltInComponentFrame(name, source, ownerFn) {
  {
    if (prefix === undefined) {
      // Extract the VM specific prefix used by each line.
      try {
        throw Error();
      } catch (x) {
        var match = x.stack.trim().match(/\n( *(at )?)/);
        prefix = match && match[1] || '';
      }
    } // We use the prefix to ensure our stacks line up with native stack frames.


    return '\n' + prefix + name;
  }
}
var reentry = false;
var componentFrameCache;

{
  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
  componentFrameCache = new PossiblyWeakMap();
}

function describeNativeComponentFrame(fn, construct) {
  // If something asked for a stack inside a fake render, it should get ignored.
  if (!fn || reentry) {
    return '';
  }

  {
    var frame = componentFrameCache.get(fn);

    if (frame !== undefined) {
      return frame;
    }
  }

  var control;
  reentry = true;
  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

  Error.prepareStackTrace = undefined;
  var previousDispatcher;

  {
    previousDispatcher = ReactCurrentDispatcher$1.current; // Set the dispatcher in DEV because this might be call in the render function
    // for warnings.

    ReactCurrentDispatcher$1.current = null;
    disableLogs();
  }

  try {
    // This should throw.
    if (construct) {
      // Something should be setting the props in the constructor.
      var Fake = function () {
        throw Error();
      }; // $FlowFixMe


      Object.defineProperty(Fake.prototype, 'props', {
        set: function () {
          // We use a throwing setter instead of frozen or non-writable props
          // because that won't throw in a non-strict mode function.
          throw Error();
        }
      });

      if (typeof Reflect === 'object' && Reflect.construct) {
        // We construct a different control for this case to include any extra
        // frames added by the construct call.
        try {
          Reflect.construct(Fake, []);
        } catch (x) {
          control = x;
        }

        Reflect.construct(fn, [], Fake);
      } else {
        try {
          Fake.call();
        } catch (x) {
          control = x;
        }

        fn.call(Fake.prototype);
      }
    } else {
      try {
        throw Error();
      } catch (x) {
        control = x;
      }

      fn();
    }
  } catch (sample) {
    // This is inlined manually because closure doesn't do it for us.
    if (sample && control && typeof sample.stack === 'string') {
      // This extracts the first frame from the sample that isn't also in the control.
      // Skipping one frame that we assume is the frame that calls the two.
      var sampleLines = sample.stack.split('\n');
      var controlLines = control.stack.split('\n');
      var s = sampleLines.length - 1;
      var c = controlLines.length - 1;

      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
        // We expect at least one stack frame to be shared.
        // Typically this will be the root most one. However, stack frames may be
        // cut off due to maximum stack limits. In this case, one maybe cut off
        // earlier than the other. We assume that the sample is longer or the same
        // and there for cut off earlier. So we should find the root most frame in
        // the sample somewhere in the control.
        c--;
      }

      for (; s >= 1 && c >= 0; s--, c--) {
        // Next we find the first one that isn't the same which should be the
        // frame that called our sample function and the control.
        if (sampleLines[s] !== controlLines[c]) {
          // In V8, the first line is describing the message but other VMs don't.
          // If we're about to return the first line, and the control is also on the same
          // line, that's a pretty good indicator that our sample threw at same line as
          // the control. I.e. before we entered the sample frame. So we ignore this result.
          // This can happen if you passed a class to function component, or non-function.
          if (s !== 1 || c !== 1) {
            do {
              s--;
              c--; // We may still have similar intermediate frames from the construct call.
              // The next one that isn't the same should be our match though.

              if (c < 0 || sampleLines[s] !== controlLines[c]) {
                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at ');

                {
                  if (typeof fn === 'function') {
                    componentFrameCache.set(fn, _frame);
                  }
                } // Return the line we found.


                return _frame;
              }
            } while (s >= 1 && c >= 0);
          }

          break;
        }
      }
    }
  } finally {
    reentry = false;

    {
      ReactCurrentDispatcher$1.current = previousDispatcher;
      reenableLogs();
    }

    Error.prepareStackTrace = previousPrepareStackTrace;
  } // Fallback to just using the name if we couldn't make it throw.


  var name = fn ? fn.displayName || fn.name : '';
  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

  {
    if (typeof fn === 'function') {
      componentFrameCache.set(fn, syntheticFrame);
    }
  }

  return syntheticFrame;
}
function describeFunctionComponentFrame(fn, source, ownerFn) {
  {
    return describeNativeComponentFrame(fn, false);
  }
}

function shouldConstruct(Component) {
  var prototype = Component.prototype;
  return !!(prototype && prototype.isReactComponent);
}

function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

  if (type == null) {
    return '';
  }

  if (typeof type === 'function') {
    {
      return describeNativeComponentFrame(type, shouldConstruct(type));
    }
  }

  if (typeof type === 'string') {
    return describeBuiltInComponentFrame(type);
  }

  switch (type) {
    case exports.Suspense:
      return describeBuiltInComponentFrame('Suspense');

    case REACT_SUSPENSE_LIST_TYPE:
      return describeBuiltInComponentFrame('SuspenseList');
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        return describeFunctionComponentFrame(type.render);

      case REACT_MEMO_TYPE:
        // Memo may contain any component type so we recursively resolve it.
        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

      case REACT_BLOCK_TYPE:
        return describeFunctionComponentFrame(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            // Lazy may contain any component type so we recursively resolve it.
            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
          } catch (x) {}
        }
    }
  }

  return '';
}

var loggedTypeFailures = {};
var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
    }
  }
}

function checkPropTypes(typeSpecs, values, location, componentName, element) {
  {
    // $FlowFixMe This is okay but Flow doesn't know it.
    var has = Function.call.bind(Object.prototype.hasOwnProperty);

    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
        } catch (ex) {
          error$1 = ex;
        }

        if (error$1 && !(error$1 instanceof Error)) {
          setCurrentlyValidatingElement(element);

          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

          setCurrentlyValidatingElement(null);
        }

        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error$1.message] = true;
          setCurrentlyValidatingElement(element);

          error('Failed %s type: %s', location, error$1.message);

          setCurrentlyValidatingElement(null);
        }
      }
    }
  }
}

function setCurrentlyValidatingElement$1(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      setExtraStackFrame(stack);
    } else {
      setExtraStackFrame(null);
    }
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}

function getDeclarationErrorAddendum() {
  if (ReactCurrentOwner.current) {
    var name = getComponentName(ReactCurrentOwner.current.type);

    if (name) {
      return '\n\nCheck the render method of `' + name + '`.';
    }
  }

  return '';
}

function getSourceInfoErrorAddendum(source) {
  if (source !== undefined) {
    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
    var lineNumber = source.lineNumber;
    return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
  }

  return '';
}

function getSourceInfoErrorAddendumForProps(elementProps) {
  if (elementProps !== null && elementProps !== undefined) {
    return getSourceInfoErrorAddendum(elementProps.__source);
  }

  return '';
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  var info = getDeclarationErrorAddendum();

  if (!info) {
    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

    if (parentName) {
      info = "\n\nCheck the top-level render call using <" + parentName + ">.";
    }
  }

  return info;
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  if (!element._store || element._store.validated || element.key != null) {
    return;
  }

  element._store.validated = true;
  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

  if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
    return;
  }

  ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
  // property, it may be the creator of the child that's responsible for
  // assigning it a key.

  var childOwner = '';

  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
    // Give the component that originally created this child.
    childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
  }

  {
    setCurrentlyValidatingElement$1(element);

    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

    setCurrentlyValidatingElement$1(null);
  }
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  if (typeof node !== 'object') {
    return;
  }

  if (Array.isArray(node)) {
    for (var i = 0; i < node.length; i++) {
      var child = node[i];

      if (isValidElement(child)) {
        validateExplicitKey(child, parentType);
      }
    }
  } else if (isValidElement(node)) {
    // This element was passed in a valid location.
    if (node._store) {
      node._store.validated = true;
    }
  } else if (node) {
    var iteratorFn = getIteratorFn(node);

    if (typeof iteratorFn === 'function') {
      // Entry iterators used to provide implicit keys,
      // but now we print a separate warning for them later.
      if (iteratorFn !== node.entries) {
        var iterator = iteratorFn.call(node);
        var step;

        while (!(step = iterator.next()).done) {
          if (isValidElement(step.value)) {
            validateExplicitKey(step.value, parentType);
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      // Intentionally inside to avoid triggering lazy initializers:
      var name = getComponentName(type);
      checkPropTypes(propTypes, element.props, 'prop', name, element);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

      var _name = getComponentName(type);

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        setCurrentlyValidatingElement$1(fragment);

        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        setCurrentlyValidatingElement$1(null);
        break;
      }
    }

    if (fragment.ref !== null) {
      setCurrentlyValidatingElement$1(fragment);

      error('Invalid attribute `ref` supplied to `React.Fragment`.');

      setCurrentlyValidatingElement$1(null);
    }
  }
}
function createElementWithValidation(type, props, children) {
  var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
  // succeed and there will likely be errors in render.

  if (!validType) {
    var info = '';

    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
      info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
    }

    var sourceInfo = getSourceInfoErrorAddendumForProps(props);

    if (sourceInfo) {
      info += sourceInfo;
    } else {
      info += getDeclarationErrorAddendum();
    }

    var typeString;

    if (type === null) {
      typeString = 'null';
    } else if (Array.isArray(type)) {
      typeString = 'array';
    } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
      typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
      info = ' Did you accidentally export a JSX literal instead of a component?';
    } else {
      typeString = typeof type;
    }

    {
      error('React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }
  }

  var element = createElement.apply(this, arguments); // The result can be nullish if a mock or a custom function is used.
  // TODO: Drop this when these are no longer allowed as the type argument.

  if (element == null) {
    return element;
  } // Skip key warning if the type isn't valid since our key validation logic
  // doesn't expect a non-string/function type and can throw confusing errors.
  // We don't want exception behavior to differ between dev and prod.
  // (Rendering will throw with a helpful message and as soon as the type is
  // fixed, the key warnings will appear.)


  if (validType) {
    for (var i = 2; i < arguments.length; i++) {
      validateChildKeys(arguments[i], type);
    }
  }

  if (type === exports.Fragment) {
    validateFragmentProps(element);
  } else {
    validatePropTypes(element);
  }

  return element;
}
var didWarnAboutDeprecatedCreateFactory = false;
function createFactoryWithValidation(type) {
  var validatedFactory = createElementWithValidation.bind(null, type);
  validatedFactory.type = type;

  {
    if (!didWarnAboutDeprecatedCreateFactory) {
      didWarnAboutDeprecatedCreateFactory = true;

      warn('React.createFactory() is deprecated and will be removed in ' + 'a future major release. Consider using JSX ' + 'or use React.createElement() directly instead.');
    } // Legacy hook: remove it


    Object.defineProperty(validatedFactory, 'type', {
      enumerable: false,
      get: function () {
        warn('Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');

        Object.defineProperty(this, 'type', {
          value: type
        });
        return type;
      }
    });
  }

  return validatedFactory;
}
function cloneElementWithValidation(element, props, children) {
  var newElement = cloneElement.apply(this, arguments);

  for (var i = 2; i < arguments.length; i++) {
    validateChildKeys(arguments[i], newElement.type);
  }

  validatePropTypes(newElement);
  return newElement;
}

{

  try {
    var frozenObject = Object.freeze({});
    /* eslint-disable no-new */

    new Map([[frozenObject, null]]);
    new Set([frozenObject]);
    /* eslint-enable no-new */
  } catch (e) {
  }
}

var createElement$1 =  createElementWithValidation ;
var cloneElement$1 =  cloneElementWithValidation ;
var createFactory =  createFactoryWithValidation ;
var Children = {
  map: mapChildren,
  forEach: forEachChildren,
  count: countChildren,
  toArray: toArray,
  only: onlyChild
};

exports.Children = Children;
exports.Component = Component;
exports.PureComponent = PureComponent;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
exports.cloneElement = cloneElement$1;
exports.createContext = createContext;
exports.createElement = createElement$1;
exports.createFactory = createFactory;
exports.createRef = createRef;
exports.forwardRef = forwardRef;
exports.isValidElement = isValidElement;
exports.lazy = lazy;
exports.memo = memo;
exports.useCallback = useCallback;
exports.useContext = useContext;
exports.useDebugValue = useDebugValue;
exports.useEffect = useEffect;
exports.useImperativeHandle = useImperativeHandle;
exports.useLayoutEffect = useLayoutEffect;
exports.useMemo = useMemo;
exports.useReducer = useReducer;
exports.useRef = useRef;
exports.useState = useState;
exports.version = ReactVersion;
  })();
}


/***/ }),

/***/ "./node_modules/react/index.js":
/*!*************************************!*\
  !*** ./node_modules/react/index.js ***!
  \*************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react.development.js */ "./node_modules/react/cjs/react.development.js");
}


/***/ }),

/***/ "./node_modules/react/jsx-dev-runtime.js":
/*!***********************************************!*\
  !*** ./node_modules/react/jsx-dev-runtime.js ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-jsx-dev-runtime.development.js */ "./node_modules/react/cjs/react-jsx-dev-runtime.development.js");
}


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/***/ (function(module) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ // runtime can't be in strict mode because a global variable is assign and maybe created.
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ var __webpack_exports__ = (__webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fagent_bookkeeping&absolutePagePath=D%3A%5CGitHub%5Cagent-bookkeeping%5Cpages%5Cagent_bookkeeping.js!"));
/******/ _N_E = __webpack_exports__;
/******/ }
]);
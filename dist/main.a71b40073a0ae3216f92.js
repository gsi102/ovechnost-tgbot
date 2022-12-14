/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/api/getProducts.ts":
/*!********************************!*\
  !*** ./src/api/getProducts.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getProducts": function() { return /* binding */ getProducts; }
/* harmony export */ });
/* harmony import */ var _const_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../const/const */ "./src/const/const.ts");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getProducts() {
  return _getProducts.apply(this, arguments);
}
function _getProducts() {
  _getProducts = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", fetch("".concat(_const_const__WEBPACK_IMPORTED_MODULE_0__.SERVER, "/products/"), {
              method: "GET",
              headers: {
                "Content-Type": "application/json"
              }
            }).then(function (response) {
              return response.json();
            }).catch(function (e) {
              return console.error(e);
            }));
          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getProducts.apply(this, arguments);
}

/***/ }),

/***/ "./src/components/Checkout/Checkout.tsx":
/*!**********************************************!*\
  !*** ./src/components/Checkout/Checkout.tsx ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _Form_Form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Form/Form */ "./src/components/Form/Form.tsx");
/* harmony import */ var _components_ItemInCart_ItemInCart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/ItemInCart/ItemInCart */ "./src/components/Checkout/components/ItemInCart/ItemInCart.tsx");
/* harmony import */ var _const_const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../const/const */ "./src/const/const.ts");
/* harmony import */ var _Checkout_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Checkout.module.scss */ "./src/components/Checkout/Checkout.module.scss");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var Checkout = function Checkout() {
  var location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useLocation)();
  var order = location === null || location === void 0 ? void 0 : location.state;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    items = _useState2[0],
    setItems = _useState2[1];
  var groupSimilar = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (arr) {
    if (!arr) return null;
    var grouped = [];
    for (var i = 0; i < arr.length; i++) {
      var current = _objectSpread({}, arr[i]);
      for (var j = i + 1; j < arr.length; j++) {
        var next = _objectSpread({}, arr[j]);
        if (current.id === next.id) {
          arr.splice(j, 1);
          j--;
          current.quantity++;
        }
      }
      grouped = [].concat(_toConsumableArray(grouped), [_objectSpread({}, current)]);
    }
    return _toConsumableArray(grouped);
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    order = groupSimilar(order);
    setItems(order);
  }, []);
  var totalAmount = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return items.reduce(function (previous, current) {
      return +previous + +current.newPrice * current.quantity;
    }, 0);
  }, [items]);
  var changeQty = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (id, e) {
    var newQty = e.target.value;
    var newList = items.map(function (item) {
      if (item.id === id) item.quantity = +newQty;
      return item;
    });
    setItems(newList);
  }, [items]);
  var deleteItem = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (itemID) {
    var updatedOrder = items.filter(function (el) {
      return el.id !== itemID;
    });
    setItems(updatedOrder);
  }, [items]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _Checkout_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].checkout
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _Checkout_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].checkout__header
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, _const_const__WEBPACK_IMPORTED_MODULE_3__.LANGUAGE.RU.CHECK_CART))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "\u0417\u0430\u043A\u0430\u0437"), items.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_ItemInCart_ItemInCart__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: item.id,
      item: item,
      changeQty: changeQty,
      deleteItem: deleteItem
    });
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: _Checkout_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].checkout__total
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, _const_const__WEBPACK_IMPORTED_MODULE_3__.LANGUAGE.RU.TOTAL, ":\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, totalAmount, _const_const__WEBPACK_IMPORTED_MODULE_3__.LANGUAGE.RU.CURRENCY))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Form_Form__WEBPACK_IMPORTED_MODULE_1__["default"], null));
};
/* harmony default export */ __webpack_exports__["default"] = (Checkout);

/***/ }),

/***/ "./src/components/Checkout/components/ItemInCart/ItemInCart.tsx":
/*!**********************************************************************!*\
  !*** ./src/components/Checkout/components/ItemInCart/ItemInCart.tsx ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UI_Button_Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../UI/Button/Button */ "./src/components/UI/Button/Button.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _const_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../const/const */ "./src/const/const.ts");
/* harmony import */ var _UI_Input_Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../UI/Input/Input */ "./src/components/UI/Input/Input.tsx");
/* harmony import */ var _ItemInCart_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ItemInCart.module.scss */ "./src/components/Checkout/components/ItemInCart/ItemInCart.module.scss");





var ItemInCart = function ItemInCart(props) {
  var changeQty = props.changeQty,
    deleteItem = props.deleteItem;
  var _props$item = props.item,
    id = _props$item.id,
    title = _props$item.title,
    sku = _props$item.sku,
    size = _props$item.size,
    newPrice = _props$item.newPrice,
    oldPrice = _props$item.oldPrice,
    discount = _props$item.discount,
    quantity = _props$item.quantity;
  title = title.toUpperCase();
  var isDiscount = Boolean(discount !== 0);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: _ItemInCart_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].checkout__order__item
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("h4", null, title, " - ", _const_const__WEBPACK_IMPORTED_MODULE_2__.LANGUAGE.RU.SIZE, " ", size), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
    className: _ItemInCart_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].checkout__order__item_color
  }, _const_const__WEBPACK_IMPORTED_MODULE_2__.LANGUAGE.RU.COLOR, ": \u043A\u0430\u0440\u0430\u043C\u0435\u043B\u044C"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", {
    htmlFor: _ItemInCart_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].checkout__order__item__qty
  }, _const_const__WEBPACK_IMPORTED_MODULE_2__.LANGUAGE.RU.QUANTITY, ":\xA0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_UI_Input_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: "number",
    min: "1",
    defaultValue: quantity,
    id: _ItemInCart_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].checkout__order__item__qty,
    onChange: function onChange(e) {
      return changeQty(id, e);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: _ItemInCart_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].checkout__order__item_price
  }, isDiscount && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
    className: _ItemInCart_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].checkout__order__item_price_new
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("strong", null, newPrice, _const_const__WEBPACK_IMPORTED_MODULE_2__.LANGUAGE.RU.CURRENCY)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
    className: _ItemInCart_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].checkout__order__item_price_old
  }, oldPrice, _const_const__WEBPACK_IMPORTED_MODULE_2__.LANGUAGE.RU.CURRENCY), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
    className: _ItemInCart_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].checkout__order__item_price_discount
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("i", null, _const_const__WEBPACK_IMPORTED_MODULE_2__.LANGUAGE.RU.DISCOUNT, " -", discount, "%")))), !isDiscount && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("strong", null, newPrice, _const_const__WEBPACK_IMPORTED_MODULE_2__.LANGUAGE.RU.CURRENCY)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_UI_Button_Button__WEBPACK_IMPORTED_MODULE_0__["default"], {
    className: _ItemInCart_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].checkout__order__item__deleteBtn,
    onClick: function onClick() {
      return deleteItem(id);
    }
  }, _const_const__WEBPACK_IMPORTED_MODULE_2__.LANGUAGE.RU.REMOVE), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("hr", null));
};
/* harmony default export */ __webpack_exports__["default"] = (ItemInCart);

/***/ }),

/***/ "./src/components/Form/Form.tsx":
/*!**************************************!*\
  !*** ./src/components/Form/Form.tsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _UI_Button_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../UI/Button/Button */ "./src/components/UI/Button/Button.tsx");
/* harmony import */ var _UI_Input_Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../UI/Input/Input */ "./src/components/UI/Input/Input.tsx");
/* harmony import */ var _const_const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../const/const */ "./src/const/const.ts");
/* harmony import */ var _Form_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Form.module.scss */ "./src/components/Form/Form.module.scss");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var Form = function Form() {
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useNavigate)();
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState2 = _slicedToArray(_useState, 2),
    name = _useState2[0],
    setName = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState4 = _slicedToArray(_useState3, 2),
    phone = _useState4[0],
    setPhone = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_Form_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].form__input),
    _useState6 = _slicedToArray(_useState5, 2),
    inputNameStyle = _useState6[0],
    setInputNameStyle = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_Form_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].form__input),
    _useState8 = _slicedToArray(_useState7, 2),
    inputPhoneStyle = _useState8[0],
    setInputPhoneStyle = _useState8[1];
  var keepTimeout = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var onNameChange = function onNameChange(e) {
    setName(e.target.value);
  };
  var onPhoneChange = function onPhoneChange(e) {
    setPhone(e.target.value);
  };
  var onSubmit = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (e) {
    e.preventDefault();
    if (name && phone) {
      return navigate("/success-page");
    }
    if (!name && !phone) {
      if (keepTimeout.current) {
        clearTimeout(keepTimeout.current);
      }
      keepTimeout.current = setTimeout(function () {
        setInputNameStyle(_Form_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].form__input);
        setInputPhoneStyle(_Form_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].form__input);
      }, 1000);
      setInputNameStyle(function (prev) {
        return prev += " ".concat(_Form_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].form__input_alert);
      });
      setInputPhoneStyle(function (prev) {
        return prev += " ".concat(_Form_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].form__input_alert);
      });
      return;
    }
    if (!name) {
      if (keepTimeout.current) {
        clearTimeout(keepTimeout.current);
      }
      keepTimeout.current = setTimeout(function () {
        setInputNameStyle(_Form_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].form__input);
      }, 1000);
      setInputNameStyle(function (prev) {
        return prev += " ".concat(_Form_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].form__input_alert);
      });
      return;
    }
    if (!phone) {
      if (keepTimeout.current) {
        clearTimeout(keepTimeout.current);
      }
      keepTimeout.current = setTimeout(function () {
        setInputPhoneStyle(_Form_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].form__input);
      }, 1000);
      setInputPhoneStyle(function (prev) {
        return prev += " ".concat(_Form_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].form__input_alert);
      });
      return;
    }
  }, [name, phone]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    className: _Form_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].form
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, _const_const__WEBPACK_IMPORTED_MODULE_3__.LANGUAGE.RU.LEAVE_YOUR_DATA), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_UI_Input_Input__WEBPACK_IMPORTED_MODULE_2__["default"], {
    type: "text",
    placeholder: _const_const__WEBPACK_IMPORTED_MODULE_3__.LANGUAGE.RU.NAME,
    value: name,
    onChange: onNameChange,
    className: inputNameStyle
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_UI_Input_Input__WEBPACK_IMPORTED_MODULE_2__["default"], {
    type: "text",
    placeholder: _const_const__WEBPACK_IMPORTED_MODULE_3__.LANGUAGE.RU.PHONE,
    value: phone,
    onChange: onPhoneChange,
    className: inputPhoneStyle
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_UI_Button_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: _Form_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].form__submitBtn,
    onClick: onSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, _const_const__WEBPACK_IMPORTED_MODULE_3__.LANGUAGE.RU.SUBMIT_ORDER)));
};
/* harmony default export */ __webpack_exports__["default"] = (Form);

/***/ }),

/***/ "./src/components/MainComponent/MainComponent.tsx":
/*!********************************************************!*\
  !*** ./src/components/MainComponent/MainComponent.tsx ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ProductList_ProductList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ProductList/ProductList */ "./src/components/ProductList/ProductList.tsx");
/* harmony import */ var _hooks_useTelegram__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/useTelegram */ "./src/hooks/useTelegram.ts");
/* harmony import */ var _MainComponent_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MainComponent.module.scss */ "./src/components/MainComponent/MainComponent.module.scss");




var MainComponent = function MainComponent() {
  var _useTelegram = (0,_hooks_useTelegram__WEBPACK_IMPORTED_MODULE_2__.useTelegram)(),
    tg = _useTelegram.tg;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    tg.ready();
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _MainComponent_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].mainComponent
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ProductList_ProductList__WEBPACK_IMPORTED_MODULE_1__["default"], null));
};
/* harmony default export */ __webpack_exports__["default"] = (MainComponent);

/***/ }),

/***/ "./src/components/ProductList/ProductList.tsx":
/*!****************************************************!*\
  !*** ./src/components/ProductList/ProductList.tsx ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ProductItem_ProductItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/ProductItem/ProductItem */ "./src/components/ProductList/components/ProductItem/ProductItem.tsx");
/* harmony import */ var _const_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../const/const */ "./src/const/const.ts");
/* harmony import */ var _hooks_useTelegram__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/useTelegram */ "./src/hooks/useTelegram.ts");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _api_getProducts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api/getProducts */ "./src/api/getProducts.ts");
/* harmony import */ var _ProductList_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ProductList.module.scss */ "./src/components/ProductList/ProductList.module.scss");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








// const TEMPARRAYLOCAL = [
//   {
//     _id: "63561f8f61e8dffe1c9f8e28",
//     title: "??????????????????????",
//     oldPrice: "2500",
//     newPrice: "1880",
//     material: "95% ???????????? ????????????, 5% ???????????????? + ??????????????",
//     color: "caramel",
//     sku: "kneebondages1",
//     sizes: "m, l, xl",
//     isInStockColor1: "1, 1, 1",
//   },
//   {
//     _id: "635622cf61e8dffe1c9f8e32",
//     title: "??????????",
//     oldPrice: "1080",
//     newPrice: "1080",
//     material: "100% ???????????? ????????????",
//     color: "caramel, red",
//     sku: "socks1",
//     sizes: "36-40, 41-45",
//     isInStockColor1: "1, 1",
//     isInStockColor2: "1, 0",
//   },
//   {
//     _id: "63566a7c61e8dffe1c9f8e4b",
//     title: "??????????????????????",
//     oldPrice: "3500",
//     newPrice: "2480",
//     material: "100% ???????????? ????????????????",
//     color: "brown",
//     sku: "kneebondages2",
//     sizes: "42/s-56/xl",
//     isInStockColor1: "1",
//   },
//   {
//     _id: "63566b6261e8dffe1c9f8e4c",
//     title: "????????",
//     oldPrice: "1580",
//     newPrice: "980",
//     material: "100% ???????????? ????????????",
//     color: "caramel, dark",
//     sku: "waist1",
//     sizes: "s, m, l, xl",
//     isInStockColor1: "1, 1, 1, 1",
//     isInStockColor2: "0, 1, 1, 1",
//   },
//   {
//     _id: "63566d3b61e8dffe1c9f8e4d",
//     title: "??????????",
//     oldPrice: "3680",
//     newPrice: "3680",
//     material: "95% ???????????? ????????????, 5% ????????????????+??????????????",
//     color: "caramel",
//     sku: "vest1",
//     sizes: "s, m, l, xl",
//     isInStockColor1: "0, 0, 1, 1",
//   },
//   {
//     _id: "635673b561e8dffe1c9f8e4e",
//     title: "??????????????",
//     oldPrice: "250",
//     newPrice: "250",
//     material: "95% ???????????? ????????????, 5% ????????????",
//     color: "caramel",
//     sku: "insoles1",
//     sizes: "35-36, 37-38, 39-40, 41-42, 43-44, 45-46",
//     isInStockColor1: "1, 1, 1, 1, 1, 1",
//   },
//   {
//     _id: "63561f8f61e8dffe1c9f8e28",
//     title: "??????????????????????",
//     oldPrice: "2500",
//     newPrice: "1880",
//     material: "95% ???????????? ????????????, 5% ???????????????? + ??????????????",
//     color: "caramel",
//     sku: "kneebondages1",
//     sizes: "m, l, xl",
//     isInStockColor1: "1, 1, 1",
//   },
//   {
//     _id: "635622cf61e8dffe1c9f8e32",
//     title: "??????????",
//     oldPrice: "1080",
//     newPrice: "1080",
//     material: "100% ???????????? ????????????",
//     color: "caramel, red",
//     sku: "socks1",
//     sizes: "36-40, 41-45",
//     isInStockColor1: "1, 1",
//     isInStockColor2: "1, 0",
//   },
// ];

var ProductList = function ProductList() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    products = _useState2[0],
    setProducts = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    cart = _useState4[0],
    setCart = _useState4[1];
  var _useTelegram = (0,_hooks_useTelegram__WEBPACK_IMPORTED_MODULE_3__.useTelegram)(),
    tg = _useTelegram.tg;
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_6__.useNavigate)();

  // TEMPORARY
  // useEffect(() => {
  //   setProducts([...TEMPARRAYLOCAL]);
  // }, []);

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var fetched = false;
    if (!fetched) {
      try {
        (0,_api_getProducts__WEBPACK_IMPORTED_MODULE_4__.getProducts)().then(function (res) {
          var fetchedProducts = res.data;
          setProducts(fetchedProducts);
        });
      } catch (e) {
        console.log(e);
      }
    }
    return function () {
      fetched = true;
    };
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var priceTotal = 0;
    cart.map(function (el) {
      return priceTotal += +el.newPrice;
    });
    tg.MainButton.setParams({
      text: "".concat(_const_const__WEBPACK_IMPORTED_MODULE_2__.LANGUAGE.RU.TOCHECKOUT, ": ").concat(priceTotal).concat(_const_const__WEBPACK_IMPORTED_MODULE_2__.LANGUAGE.RU.CURRENCY),
      color: "rgb(0, 166, 81)"
    });
    if (cart.length !== 0 && !tg.MainButton.isVisible) {
      tg.MainButton.show();
    }
    if (cart.length === 0 && tg.MainButton.isVisible) {
      tg.MainButton.hide();
    }
  }, [cart]);
  var goToCheckout = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (cart) {
    tg.MainButton.hide();
    navigate("/checkout", {
      replace: false,
      state: cart
    });
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    tg.onEvent("mainButtonClicked", function () {
      return goToCheckout(cart);
    });
    return function () {
      tg.offEvent("mainButtonClicked", function () {
        return goToCheckout(cart);
      });
    };
  }, [cart]);
  var addToCart = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (product) {
    var temp = [].concat(_toConsumableArray(cart), [product]);
    setCart(_toConsumableArray(temp));
  }, [cart]);
  var productsLeft = products.filter(function (el, index) {
    return index % 2 === 0;
  });
  var productsRight = products.filter(function (el, index) {
    return index % 2 === 1;
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _ProductList_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].productList
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _ProductList_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].productList__note
    // onClick={() => goToCheckout(cart)}
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: _ProductList_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].productList__note__header
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _ProductList_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].productList__note__header__delivery
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    alt: "delivery.webp"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "\u0411\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u0430\u044F", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "\u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0430")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "\u043D\u0430 \u0437\u0430\u043A\u0430\u0437\u044B \u043E\u0442 4000\u0440.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _ProductList_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].productList__left
  }, productsLeft.map(function (el) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      key: el._id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_ProductItem_ProductItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
      product: el,
      onAdd: addToCart
    }));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _ProductList_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].productList__right
  }, productsRight.map(function (el) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      key: el._id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_ProductItem_ProductItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
      product: el,
      onAdd: addToCart
    }));
  })));
};
/* harmony default export */ __webpack_exports__["default"] = (ProductList);

/***/ }),

/***/ "./src/components/ProductList/components/ProductItem/ProductItem.tsx":
/*!***************************************************************************!*\
  !*** ./src/components/ProductList/components/ProductItem/ProductItem.tsx ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _UI_Button_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../UI/Button/Button */ "./src/components/UI/Button/Button.tsx");
/* harmony import */ var _const_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../const/const */ "./src/const/const.ts");
/* harmony import */ var _ProductItem_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProductItem.module.scss */ "./src/components/ProductList/components/ProductItem/ProductItem.module.scss");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var ProductItem = function ProductItem(props) {
  var product = props.product,
    onAdd = props.onAdd;
  var title = product.title,
    material = product.material,
    oldPrice = product.oldPrice,
    newPrice = product.newPrice,
    colors = product.colors,
    sizes = product.sizes;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState2 = _slicedToArray(_useState, 2),
    choosenSize = _useState2[0],
    setChoosenSize = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState4 = _slicedToArray(_useState3, 2),
    requiredAlert = _useState4[0],
    setRequiredAlert = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState6 = _slicedToArray(_useState5, 2),
    btnEffectOnClick = _useState6[0],
    setBtnEffectOnClick = _useState6[1];
  var keepSizesStyles = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var keepTimeout = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var isChoosen = Boolean(choosenSize !== "");
  var isDiscount = Boolean(oldPrice !== newPrice);
  var discountAmount = Math.round((+oldPrice - +newPrice) / +oldPrice * 100);

  // First letter toUpperCase
  var re = /^.(.*)/gm;
  // @ts-ignore
  var showTitle = title[0].toUpperCase() + re.exec(title)[1];
  // Split string - product materials, sizes
  var materialArr = material.split(", ");
  var sizesArr = sizes.toUpperCase().split(", ");
  var clearSizesStyles = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    var tempObj = {};
    for (var i = 0; i < sizes.length; i++) {
      var size = sizes[i].toString();
      tempObj[size] = "";
    }
    keepSizesStyles.current = _objectSpread({}, tempObj);
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    clearSizesStyles();
    return function () {
      clearSizesStyles();
      clearTimeout(keepTimeout.current);
    };
  }, []);
  var sizeStyle = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (el) {
    if (keepSizesStyles.current) {
      return keepSizesStyles.current[el];
    }
    return "";
  }, []);
  var onChooseSize = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (size) {
    if (choosenSize === size) {
      setChoosenSize("");
      keepSizesStyles.current[size] = "";
    } else {
      // Remove set styles
      clearTimeout(keepTimeout.current);
      setRequiredAlert("");
      setChoosenSize(size);
      // Set new styles
      clearSizesStyles();
      keepSizesStyles.current[size] = _ProductItem_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].productItem__size__value_active;
    }
  }, [isChoosen, choosenSize]);
  var addToCart = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    if (!isChoosen) {
      // Show styled "required" notification
      setRequiredAlert(_ProductItem_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].requiredAlert);
      // Remove it in 3s
      clearTimeout(keepTimeout.current);
      keepTimeout.current = setTimeout(function () {
        setRequiredAlert("");
      }, 3000);
    } else {
      setChoosenSize("");
      clearSizesStyles();
      // Cb from parent
      var addVariant = {
        id: "".concat(product.sku, "-").concat(choosenSize),
        title: product.title,
        sku: product.sku,
        size: choosenSize,
        oldPrice: oldPrice,
        newPrice: newPrice,
        discount: discountAmount,
        quantity: 1
      };
      onAdd(addVariant);
      // Button "click" effect on click
      setBtnEffectOnClick(_ProductItem_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].btnClick);
      clearTimeout(keepTimeout.current);
      keepTimeout.current = setTimeout(function () {
        setBtnEffectOnClick("");
      }, 300);
    }
  }, [product, choosenSize]);

  // console.log(product.images[0]);

  console.log("".concat(_const_const__WEBPACK_IMPORTED_MODULE_2__.SERVER, "/products/img") + "?path=".concat(product.images[0]));
  var id = product._id;
  if (id === "delivery") {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: _ProductItem_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].productItem
    });
  } else {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: _ProductItem_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].productItem
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: _ProductItem_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].productItem__img
    }, isDiscount && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: _ProductItem_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].productItem__img__note
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, _const_const__WEBPACK_IMPORTED_MODULE_2__.LANGUAGE.RU.DISCOUNT, "\xA0", discountAmount, "%!")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
      src: "".concat(_const_const__WEBPACK_IMPORTED_MODULE_2__.SERVER, "/products/img/") + "".concat(product.images[0]),
      alt: "product.webp"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: _ProductItem_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].productItem__name
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, showTitle), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: _ProductItem_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].productItem__name_hint
    }, materialArr.map(function (el) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
        key: el
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, el), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null));
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: _ProductItem_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].productItem__price
    }, isDiscount && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: _ProductItem_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].productItem__price_new
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "\xA0", newPrice, _const_const__WEBPACK_IMPORTED_MODULE_2__.LANGUAGE.RU.CURRENCY, "\xA0")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: _ProductItem_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].productItem__price_old
    }, oldPrice, _const_const__WEBPACK_IMPORTED_MODULE_2__.LANGUAGE.RU.CURRENCY)), !isDiscount && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: _ProductItem_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].productItem__price_usual
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, oldPrice, _const_const__WEBPACK_IMPORTED_MODULE_2__.LANGUAGE.RU.CURRENCY))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: _ProductItem_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].productItem__color
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: _ProductItem_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].productItem__size
    }, sizesArr.map(function (el) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: _ProductItem_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].productItem__size__value,
        key: el,
        onClick: function onClick() {
          return onChooseSize(el);
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
        className: sizeStyle(el) + " " + requiredAlert
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, el)));
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: _ProductItem_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].btnWrapper + " " + btnEffectOnClick
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: _ProductItem_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].productItem__addToCartBtn_effect
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_UI_Button_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
      className: _ProductItem_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].productItem__addToCartBtn,
      onClick: addToCart
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, _const_const__WEBPACK_IMPORTED_MODULE_2__.LANGUAGE.RU.ADDTOCART))));
  }
};
/* harmony default export */ __webpack_exports__["default"] = (ProductItem);

/***/ }),

/***/ "./src/components/SuccessPage/SuccessPage.tsx":
/*!****************************************************!*\
  !*** ./src/components/SuccessPage/SuccessPage.tsx ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SuccessPage_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SuccessPage.module.scss */ "./src/components/SuccessPage/SuccessPage.module.scss");


var SuccessPage = function SuccessPage() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _SuccessPage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].successPage
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "\u0417\u0430\u044F\u0432\u043A\u0430 \u043F\u0440\u0438\u043D\u044F\u0442\u0430!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "\u041D\u0430\u0448 \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440 \u0441\u043A\u043E\u0440\u043E \u0441\u0432\u044F\u0436\u0435\u0442\u0441\u044F \u0441 \u0432\u0430\u043C\u0438. \u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0434\u0435\u0440\u0436\u0438\u0442\u0435 \u0442\u0435\u043B\u0435\u0444\u043E\u043D \u0432\u043A\u043B\u044E\u0447\u0435\u043D\u043D\u044B\u043C."));
};
/* harmony default export */ __webpack_exports__["default"] = (SuccessPage);

/***/ }),

/***/ "./src/components/UI/Button/Button.tsx":
/*!*********************************************!*\
  !*** ./src/components/UI/Button/Button.tsx ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Button_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button.module.scss */ "./src/components/UI/Button/Button.module.scss");
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


var Button = function Button(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", _extends({}, props, {
    className: _Button_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].button + " " + props.className
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./src/components/UI/Input/Input.tsx":
/*!*******************************************!*\
  !*** ./src/components/UI/Input/Input.tsx ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Input_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Input.module.scss */ "./src/components/UI/Input/Input.module.scss");
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


var Input = function Input(props) {
  var inputRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var _onKeyDown = function onKeyDown(e) {
    if (e.key === "Enter") {
      var _inputRef$current;
      inputRef === null || inputRef === void 0 ? void 0 : (_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 ? void 0 : _inputRef$current.blur();
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", _extends({}, props, {
    ref: inputRef,
    className: _Input_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].input + " " + props.className,
    type: props.type ? props.type : "text",
    onKeyDown: function onKeyDown(e) {
      return _onKeyDown(e);
    }
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (Input);

/***/ }),

/***/ "./src/const/const.ts":
/*!****************************!*\
  !*** ./src/const/const.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LANGUAGE": function() { return /* binding */ LANGUAGE; },
/* harmony export */   "SERVER": function() { return /* binding */ SERVER; }
/* harmony export */ });
// export const SERVER = "http://localhost:3001";
var SERVER = "https://ovechnost-tgbot-back.onrender.com";
var EN = {
  DISCOUNT: "sale",
  CURRENCY: "$",
  ADDTOCART: "Add to cart",
  TOCHECKOUT: "Checkout",
  CHECK_CART: "Check items in your cart. If everything is rigth, fill in the form and submit the order.",
  QUANTITY: "Quantity",
  COLOR: "Color",
  SIZE: "Size",
  REMOVE: "Remove",
  NAME: "Name",
  PHONE: "Phone",
  TOTAL: "Total",
  LEAVE_YOUR_DATA: "Fill in your data",
  SUBMIT_ORDER: "Submit order"
};
var LANGUAGE = {
  EN: EN,
  RU: {
    DISCOUNT: "????????????",
    CURRENCY: "??.",
    ADDTOCART: "?? ??????????????",
    TOCHECKOUT: "???????????????? ??????????",
    CHECK_CART: "?????????????????? ???????????? ?? ??????????????. ???????? ?????? ??????????, ?????????????????? ?????????? ?? ?????????????????? ????????????.",
    QUANTITY: "????????????????????",
    COLOR: "????????",
    SIZE: "????????????",
    REMOVE: "????????????",
    NAME: "??????",
    PHONE: "??????????????",
    TOTAL: "??????????",
    LEAVE_YOUR_DATA: "???????????????? ???????? ????????????",
    SUBMIT_ORDER: "?????????????????? ????????????"
  }
};

/***/ }),

/***/ "./src/hooks/useTelegram.ts":
/*!**********************************!*\
  !*** ./src/hooks/useTelegram.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useTelegram": function() { return /* binding */ useTelegram; }
/* harmony export */ });
// @ts-ignore
var tg = window.Telegram.WebApp;
function useTelegram() {
  var onClose = function onClose() {
    tg.close();
  };
  var onToggleButton = function onToggleButton() {
    if (tg.MainButton.isVisible) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
    }
  };
  return {
    tg: tg,
    onClose: onClose,
    onToggleButton: onToggleButton
  };
}

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_MainComponent_MainComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/MainComponent/MainComponent */ "./src/components/MainComponent/MainComponent.tsx");
/* harmony import */ var _components_Form_Form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Form/Form */ "./src/components/Form/Form.tsx");
/* harmony import */ var _components_Checkout_Checkout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Checkout/Checkout */ "./src/components/Checkout/Checkout.tsx");
/* harmony import */ var _components_SuccessPage_SuccessPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/SuccessPage/SuccessPage */ "./src/components/SuccessPage/SuccessPage.tsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _styles_mainStyles_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/mainStyles.module.scss */ "./src/styles/mainStyles.module.scss");







function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, {
    index: true,
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_MainComponent_MainComponent__WEBPACK_IMPORTED_MODULE_1__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, {
    path: "/checkout",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Checkout_Checkout__WEBPACK_IMPORTED_MODULE_3__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, {
    path: "/form",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Form_Form__WEBPACK_IMPORTED_MODULE_2__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, {
    path: "/success-page",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_SuccessPage_SuccessPage__WEBPACK_IMPORTED_MODULE_4__["default"], null)
  })));
}
/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");




var root = react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot(document.getElementById("root"));
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().StrictMode), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_App__WEBPACK_IMPORTED_MODULE_2__["default"], null))));

/***/ }),

/***/ "./src/components/Checkout/Checkout.module.scss":
/*!******************************************************!*\
  !*** ./src/components/Checkout/Checkout.module.scss ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["default"] = ({"checkout":"N3sKd4CpOmqaISxngt1k","checkout__header":"mrtVCyY2G7YvRjO1HVwv","checkout__order":"cS0dL2fHzMsYTG7PNBHh","checkout__total":"TEEhicoWPEy5zxBFzSSZ"});

/***/ }),

/***/ "./src/components/Checkout/components/ItemInCart/ItemInCart.module.scss":
/*!******************************************************************************!*\
  !*** ./src/components/Checkout/components/ItemInCart/ItemInCart.module.scss ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["default"] = ({"checkout__order__item":"s50BqS2vDjpeBaSFSclW","checkout__order__item_color":"HkFw2UXXrkxBLVdPAAra","checkout__order__item__qty":"jpbapDpP8RRgnQrN3Ea6","checkout__order__item_price_new":"iJZMeM9Yfd6xf2d7vWBr","checkout__order__item_price_old":"H8VGQf4sdv22dfJj66wu","checkout__order__item_price_discount":"DbrtJTAYApQNutMJXGau","checkout__order__item__deleteBtn":"toL5wQL75yHLv_caWp_q"});

/***/ }),

/***/ "./src/components/Form/Form.module.scss":
/*!**********************************************!*\
  !*** ./src/components/Form/Form.module.scss ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["default"] = ({"form":"Nl9sbryPciNiTffJgBG2","form__input":"ndriXSOALSGV1yx732TK","form__input_alert":"ArWyjLvyl0KfjQkjlpEc","form__submitBtn":"xyNnj9X3ulF0DEULnhZC"});

/***/ }),

/***/ "./src/components/MainComponent/MainComponent.module.scss":
/*!****************************************************************!*\
  !*** ./src/components/MainComponent/MainComponent.module.scss ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./src/components/ProductList/ProductList.module.scss":
/*!************************************************************!*\
  !*** ./src/components/ProductList/ProductList.module.scss ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["default"] = ({"productList":"I15iaRE3amIKzNhGwxj6","productList__left":"qRSbI_dGOQx79yIz8o9z","productList__right":"EpCXiChlrMawgUYZXMgj","productList__note":"iZDc4K2KfQ8Xa41ETsoA","productList__note__header":"slVwCUkY2UnafDyCtBgr","productList__note__header__delivery":"MV8xKsHYEpBHydkuSQ8t"});

/***/ }),

/***/ "./src/components/ProductList/components/ProductItem/ProductItem.module.scss":
/*!***********************************************************************************!*\
  !*** ./src/components/ProductList/components/ProductItem/ProductItem.module.scss ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["default"] = ({"productItem":"_p8A130mYfHuNAUhwjY5","productItem__img":"wLvH5yGGH564lhgg_FKA","productItem__img__note":"tze30Qg98rD9ncgWG6e0","productItem__name":"yY4llFG3TyiOErZPX1BB","productItem__name_hint":"hZd0vZlb89h1d1Ou6Ruw","productItem__price":"vV4qmF4fpmQI1rMY_IJS","productItem__price_old":"dbbbqf91h9eRC4g1piyI","productItem__price_usual":"vLzVdKAFfU8BchsVFmZU","productItem__price_new":"_lrYnK0uqWsmlGq2ljqz","productItem__color":"oqDAm4ygSPjZ6vD_zoxw","productItem__size":"mntjVWrk681uMMePv2SZ","productItem__size__value":"yNlHyNANckjBDcuCGOgD","productItem__size__value_active":"JTTp08aHg1edTDSxBMP0","btnWrapper":"ZAYEuxsLTgwAHwGg93Go","productItem__addToCartBtn":"dDT9eU72uQ8BfoP5EKUD","productItem__addToCartBtn_effect":"rkHQ_Z_gdEUfLmWiEMt5","btnClick":"E50J6g5nxGEwhwYxNKpC","requiredAlert":"b3BZPrcGugPRmXm9j2e7"});

/***/ }),

/***/ "./src/components/SuccessPage/SuccessPage.module.scss":
/*!************************************************************!*\
  !*** ./src/components/SuccessPage/SuccessPage.module.scss ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["default"] = ({"successPage":"kunwCSN7tBEr4nUYv6Wh"});

/***/ }),

/***/ "./src/components/UI/Button/Button.module.scss":
/*!*****************************************************!*\
  !*** ./src/components/UI/Button/Button.module.scss ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["default"] = ({"button":"WTsBDLCOKo9YUGHVtMxw"});

/***/ }),

/***/ "./src/components/UI/Input/Input.module.scss":
/*!***************************************************!*\
  !*** ./src/components/UI/Input/Input.module.scss ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["default"] = ({"input":"qIxXL6mWhk2c0MXZy4xq"});

/***/ }),

/***/ "./src/styles/mainStyles.module.scss":
/*!*******************************************!*\
  !*** ./src/styles/mainStyles.module.scss ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["default"] = ({});

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
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	!function() {
/******/ 		__webpack_require__.nmd = function(module) {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkovechnost_tgbot"] = self["webpackChunkovechnost_tgbot"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_react-dom_client_js-node_modules_react-router-dom_dist_index_js"], function() { return __webpack_require__("./src/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
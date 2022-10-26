/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/Form/Form.tsx":
/*!**************************************!*\
  !*** ./src/components/Form/Form.tsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _UI_Button_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../UI/Button/Button */ "./src/components/UI/Button/Button.tsx");
/* harmony import */ var _UI_Input_Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../UI/Input/Input */ "./src/components/UI/Input/Input.tsx");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var Form = function Form() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
    _useState2 = _slicedToArray(_useState, 2),
    name = _useState2[0],
    setName = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
    _useState4 = _slicedToArray(_useState3, 2),
    phone = _useState4[0],
    setPhone = _useState4[1];
  var onNameChange = function onNameChange(e) {
    setName(e.target.value);
  };
  var onPhoneChange = function onPhoneChange(e) {
    setPhone(e.target.value);
  };
  var onSubmit = function onSubmit() {
    console.log("submit!");
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_UI_Input_Input__WEBPACK_IMPORTED_MODULE_2__["default"], {
    placeholder: "Имя",
    value: name,
    onChange: onNameChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_UI_Input_Input__WEBPACK_IMPORTED_MODULE_2__["default"], {
    placeholder: "Телефон",
    value: phone,
    onChange: onPhoneChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_UI_Button_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    onClick: onSubmit
  }, "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443"));
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
/* harmony import */ var _ProductList_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ProductList.module.scss */ "./src/components/ProductList/ProductList.module.scss");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var TEMPARRAYLOCAL = [{
  _id: "63561f8f61e8dffe1c9f8e28",
  title: "наколенники",
  oldPrice: "2500",
  newPrice: "1880",
  material: "95% овечья шерсть, 5% спандекс + эластан",
  color: "caramel",
  sku: "kneebondages1",
  sizes: "m, l, xl",
  isInStockColor1: "1, 1, 1"
}, {
  _id: "635622cf61e8dffe1c9f8e32",
  title: "носки",
  oldPrice: "1080",
  newPrice: "1080",
  material: "100% овечья шерсть",
  color: "caramel, red",
  sku: "socks1",
  sizes: "36-40, 41-45",
  isInStockColor1: "1, 1",
  isInStockColor2: "1, 0"
}, {
  _id: "63566a7c61e8dffe1c9f8e4b",
  title: "наколенники",
  oldPrice: "3500",
  newPrice: "2480",
  material: "100% шерсть верблюда",
  color: "brown",
  sku: "kneebondages2",
  sizes: "42/s-56/xl",
  isInStockColor1: "1"
}, {
  _id: "63566b6261e8dffe1c9f8e4c",
  title: "пояс",
  oldPrice: "1580",
  newPrice: "980",
  material: "100% овечья шерсть",
  color: "caramel, dark",
  sku: "waist1",
  sizes: "s, m, l, xl",
  isInStockColor1: "1, 1, 1, 1",
  isInStockColor2: "0, 1, 1, 1"
}, {
  _id: "63566d3b61e8dffe1c9f8e4d",
  title: "жилет",
  oldPrice: "3680",
  newPrice: "3680",
  material: "95% овечья шерсть, 5% спандекс+эластан",
  color: "caramel",
  sku: "vest1",
  sizes: "s, m, l, xl",
  isInStockColor1: "0, 0, 1, 1"
}, {
  _id: "635673b561e8dffe1c9f8e4e",
  title: "стельки",
  oldPrice: "250",
  newPrice: "250",
  material: "95% овечья шерсть, 5% войлок",
  color: "caramel",
  sku: "insoles1",
  sizes: "35-36, 37-38, 39-40, 41-42, 43-44, 45-46",
  isInStockColor1: "1, 1, 1, 1, 1, 1"
}];
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

  // TEMPORARY
  // useEffect(() => {
  //   setProducts([...TEMPARRAYLOCAL]);
  // }, []);

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var fetched = false;
    if (!fetched) {
      var request = /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return fetch("".concat(_const_const__WEBPACK_IMPORTED_MODULE_2__.SERVER, "/products/"), {
                    method: "GET",
                    headers: {
                      "Content-Type": "application/json"
                    }
                  }).then(function (response) {
                    return response.json();
                  }).then(function (res) {
                    var fetchedProducts = res.data;
                    setProducts(fetchedProducts);
                  });
                case 2:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));
        return function request() {
          return _ref.apply(this, arguments);
        };
      }();
      try {
        request();
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
      text: "\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0443 (".concat(priceTotal, "\u0440.)")
    });
    if (cart.length !== 0 && !tg.MainButton.isVisible) {
      tg.MainButton.show();
    }
    if (cart.length === 0 && tg.MainButton.isVisible) {
      tg.MainButton.hide();
    }
  }, [cart]);
  var cb = function cb() {
    tg.sendData("hello");
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    tg.onEvent("mainButtonClicked", cb);
    return function () {
      tg.offEvent("mainButtonClicked", cb);
    };
  }, []);
  var addToCart = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (product) {
    var temp = [].concat(_toConsumableArray(cart), [product]);
    setCart(_toConsumableArray(temp));
  }, [cart]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _ProductList_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].productList
  }, products.map(function (el) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      key: el._id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_ProductItem_ProductItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
      product: el,
      onAdd: addToCart
    }));
  }));
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
  var discountAmount = Math.round((oldPrice - newPrice) / oldPrice * 100);

  // First letter toUpperCase
  var re = /^.(.*)/gm;
  // @ts-ignore
  title = title[0].toUpperCase() + re.exec(title)[1];
  // Split string - product materials, sizes
  material = material.split(", ");
  sizes = sizes.toUpperCase().split(", ");
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
      // Show styled notification
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
      onAdd(product);
      // Button effect on click
      setBtnEffectOnClick(_ProductItem_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].btnClick);
      clearTimeout(keepTimeout.current);
      keepTimeout.current = setTimeout(function () {
        setBtnEffectOnClick("");
      }, 300);
    }
  }, [product, choosenSize]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _ProductItem_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].productItem
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _ProductItem_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].productItem__img
  }, isDiscount && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _ProductItem_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].productItem__img__note
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, _const_const__WEBPACK_IMPORTED_MODULE_2__.LANGUAGE.RU.DISCOUNT, "\xA0", discountAmount, "%!")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "",
    alt: "product.webp"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _ProductItem_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].productItem__name
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: _ProductItem_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].productItem__name_hint
  }, material.map(function (el) {
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
  }, sizes.map(function (el) {
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
    className: _ProductItem_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].btnWrapper
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _ProductItem_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].productItem__addToCartBtn_effect + " " + btnEffectOnClick
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_UI_Button_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: _ProductItem_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].productItem__addToCartBtn,
    onClick: addToCart
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, _const_const__WEBPACK_IMPORTED_MODULE_2__.LANGUAGE.RU.ADDTOCART))));
};
/* harmony default export */ __webpack_exports__["default"] = (ProductItem);

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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", _extends({}, props, {
    className: _Input_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].input + " " + props.className
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
  ADDTOCART: "Add to cart"
};
var LANGUAGE = {
  EN: EN,
  RU: {
    DISCOUNT: "скидка",
    CURRENCY: "р.",
    ADDTOCART: "В корзину"
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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _styles_mainStyles_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/mainStyles.module.scss */ "./src/styles/mainStyles.module.scss");





function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Route, {
    index: true,
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_MainComponent_MainComponent__WEBPACK_IMPORTED_MODULE_1__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Route, {
    path: "/form",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Form_Form__WEBPACK_IMPORTED_MODULE_2__["default"], null)
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
/* harmony default export */ __webpack_exports__["default"] = ({"productList":"I15iaRE3amIKzNhGwxj6"});

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
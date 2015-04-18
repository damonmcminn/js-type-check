'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.isNumber = isNumber;
exports.isString = isString;
exports.isBool = isBool;
exports.isRegex = isRegex;
exports.isDate = isDate;
exports.isArray = isArray;
exports.isNull = isNull;
exports.isUndefined = isUndefined;
exports.isFunction = isFunction;
exports.isObject = isObject;
exports.isError = isError;

var _install = require('source-map-support');

_install.install();

function isNumber(n) {

  return Number.isFinite(n);
}

function isString(str) {

  return typeof str === 'string';
}

function isBool(bool) {

  return typeof bool === 'boolean';
}

function isRegex(regex) {

  return regex instanceof RegExp;
}

function isDate(date) {

  return date instanceof Date;
}

function isArray(xs) {

  return Array.isArray(xs);
}

function isNull(n) {

  return n === null;
}

function isUndefined(x) {

  return x === undefined;
}

function isFunction(fn) {

  return typeof fn === 'function';
}

function isObject(obj) {

  // use prototype method in case toString has been overridden
  return obj ? Object.prototype.toString.call(obj).slice(8, -1) === 'Object' : false;
}

function isError(err) {

  return err instanceof Error;
}
//# sourceMappingURL=typecheck.js.map
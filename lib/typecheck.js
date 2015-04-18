'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.isNumber = isNumber;
exports.isString = isString;
exports.isBool = isBool;
exports.isRegex = isRegex;
exports.isDate = isDate;

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
//# sourceMappingURL=typecheck.js.map
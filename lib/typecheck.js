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

// array
// object
// fn
// null
// undefined
//# sourceMappingURL=typecheck.js.map
import {install} from 'source-map-support';
install();

export function isNumber(n) {

  return Number.isFinite(n);

}

export function isString(str) {

  return typeof str === 'string';

}

export function isBool(bool) {

  return typeof bool === 'boolean';

}

export function isRegex(regex) {

  return regex instanceof RegExp;

}

export function isDate(date) {

  return date instanceof Date;

}

export function isArray(xs) {

  return Array.isArray(xs);

}

export function isNull(n) {

  return n === null;

}

export function isUndefined(x) {

  return x === undefined;

}

export function isFunction(fn) {

  return typeof fn === 'function';

}
// object
// fn

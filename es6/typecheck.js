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

export function isDefined(x) {

  return !isUndefined(x);

}

export function isFunction(fn) {

  return typeof fn === 'function';

}

export function isObject(obj) {

  // use prototype method in case toString has been overridden
  return obj ? Object.prototype.toString.call(obj).slice(8, -1) === 'Object' : false;

}

export function isError(err) {

  return err instanceof Error;

}

export function typeCheck(type, val) {

  let t = type.prototype.constructor.name.toLowerCase();

  let checkers = {
    'string': isString,
    'object': isObject,
    'number': isNumber,
    'boolean': isBool,
    'regexp': isRegex,
    'date': isDate,
    'array': isArray,
    'function': isFunction
  };

  return checkers[t](val);

}

export function getType(val) {

  let str = Object.prototype.toString.call(val);

  return str.slice(8, -1).toLowerCase();

}

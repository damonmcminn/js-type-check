'use strict';

const tc = require('../index');
const fn = function() {};

describe('isNumber', function() {

  it('should return true if input is int, float, positive or negative', function() {

    let n = tc.isNumber;

    let fail = [
      n([]),
      n({}),
      n('str'),
      n(fn),
      n(new Date()),
      n(/regex/),
      n(true),
      n(null),
      n(undefined),
      n(NaN),
      n(Infinity),
      n(-Infinity)
    ];

    let pass = [
      n(1),
      n(-1),
      n(0),
      n(1.3456),
      n(-1.2345),
      n(1e2),
      n(-1e3)
    ];

    fail.forEach(function(f) {
      expect(f).toBe(false);
    });

    pass.forEach(function(p) {
      expect(p).toBe(true);
    });

  });

});

describe('isString', function() {

  it('should return true if a string', function() {

    let n = tc.isString;

    let fail = [
      n([]),
      n({}),
      n(1),
      n(fn),
      n(new Date()),
      n(/regex/),
      n(true),
      n(null),
      n(undefined),
      n(NaN),
      n(Infinity),
      n(-Infinity)
    ];

    fail.forEach(function(f) {
      expect(f).toBe(false);
    });

    expect(n('string')).toBe(true);

  });

});

describe('isBool', function() {

  it('should return true if a boolean', function() {

    let n = tc.isBool;

    let fail = [
      n([]),
      n({}),
      n(0),
      n(fn),
      n(new Date()),
      n(/regex/),
      n('str'),
      n(null),
      n(undefined),
      n(NaN),
      n(Infinity),
      n(-Infinity)
    ];

    fail.forEach(function(f) {
      expect(f).toBe(false);
    });

    expect(n(true)).toBe(true);
    expect(n(false)).toBe(true);

  });

});

describe('isRegex', function() {

  it('should return true if a regex', function() {

    let n = tc.isRegex;

    let fail = [
      n([]),
      n({}),
      n(1),
      n(fn),
      n(new Date()),
      n(true),
      n('str'),
      n(null),
      n(undefined),
      n(NaN),
      n(Infinity),
      n(-Infinity)
    ];

    fail.forEach(function(f) {
      expect(f).toBe(false);
    });

    expect(n(/regex/)).toBe(true);
    expect(n(new RegExp('str'))).toBe(true);

  });

});

describe('isDate', function() {

  it('should return true if a Date object', function() {

    let n = tc.isDate;

    let fail = [
      n([]),
      n({}),
      n(1),
      n(fn),
      n(/regex/),
      n(true),
      n('str'),
      n(null),
      n(undefined),
      n(NaN),
      n(Infinity),
      n(-Infinity)
    ];

    fail.forEach(function(f) {
      expect(f).toBe(false);
    });

    expect(n(new Date())).toBe(true);

  });

});

describe('isArray', function() {

  it('should return true if an Array', function() {

    let n = tc.isArray;

    let fail = [
      n(new Date()),
      n({}),
      n(1),
      n(fn),
      n(/regex/),
      n(true),
      n('str'),
      n(null),
      n(undefined),
      n(NaN),
      n(Infinity),
      n(-Infinity)
    ];

    fail.forEach(function(f) {
      expect(f).toBe(false);
    });

    expect(n([])).toBe(true);

  });

});

describe('isNull', function() {

  it('should return true if null', function() {

    let n = tc.isNull;

    let fail = [
      n(new Date()),
      n({}),
      n(1),
      n(fn),
      n(/regex/),
      n(true),
      n('str'),
      n([]),
      n(undefined),
      n(NaN),
      n(Infinity),
      n(-Infinity)
    ];

    fail.forEach(function(f) {
      expect(f).toBe(false);
    });

    expect(n(null)).toBe(true);

  });

});

describe('isUndefined', function() {

  it('should return true if undefined', function() {

    let n = tc.isUndefined;

    let fail = [
      n(new Date()),
      n({}),
      n(1),
      n(fn),
      n(/regex/),
      n(true),
      n('str'),
      n([]),
      n(null),
      n(NaN),
      n(Infinity),
      n(-Infinity)
    ];

    fail.forEach(function(f) {
      expect(f).toBe(false);
    });

    expect(n(undefined)).toBe(true);
    expect(n()).toBe(true);

  });

});

describe('isFunction', function() {

  it('should return true if function', function() {

    let n = tc.isFunction;

    let fail = [
      n(new Date()),
      n({}),
      n(1),
      n(undefined),
      n(/regex/),
      n(true),
      n('str'),
      n([]),
      n(null),
      n(NaN),
      n(Infinity),
      n(-Infinity)
    ];

    fail.forEach(function(f) {
      expect(f).toBe(false);
    });

    expect(n(fn)).toBe(true);

  });

});

describe('isObject', function() {

  it('should return true if an object', function() {

    let n = tc.isObject;

    let fail = [
      n(new Date()),
      n(fn),
      n(1),
      n(undefined),
      n(/regex/),
      n(true),
      n('str'),
      n([]),
      n(null),
      n(NaN),
      n(Infinity),
      n(-Infinity)
    ];

    let customConstructed = (new (function Custom(){})());

    fail.forEach(function(f) {
      expect(f).toBe(false);
    });

    expect(n({})).toBe(true);
    expect(n((function() { return {} })())).toBe(true);
    expect(n(customConstructed)).toBe(true);

  });

});

describe('isError', function() {

  it('should return true if an Error', function() {

    let n = tc.isError;

    let fail = [
      n(new Date()),
      n(fn),
      n(1),
      n(undefined),
      n(/regex/),
      n(true),
      n('str'),
      n([]),
      n(null),
      n(NaN),
      n(Infinity),
      n(-Infinity)
    ];

    fail.forEach(function(f) {
      expect(f).toBe(false);
    });

    expect(n(new Error())).toBe(true);

  });

});

describe('isDefined', function() {

  it('should return true input is defined', function() {

    let n = tc.isDefined;

    let pass = [
      n(new Date()),
      n({}),
      n(1),
      n(fn),
      n(/regex/),
      n(true),
      n('str'),
      n([]),
      n(null),
      n(NaN),
      n(Infinity),
      n(-Infinity)
    ];

    pass.forEach(function(f) {
      expect(f).toBe(true);
    });

    expect(n(undefined)).toBe(false);
    expect(n()).toBe(false);

  });

});

describe('typeCheck', function() {

  it('should correctly call functions when passed a constructor', function() {

    let c = tc.typeCheck;

    expect(c(String, 'a string')).toBe(true);
    expect(c(Object, {foo: 'bar'})).toBe(true);
    expect(c(Number, -42)).toBe(true);
    expect(c(Boolean, true)).toBe(true);
    expect(c(RegExp, /foobar/)).toBe(true);
    expect(c(Date, new Date())).toBe(true);
    expect(c(Array, ['foo', 'bar'])).toBe(true);
    expect(c(Function, function() {})).toBe(true);

    expect(c(String, 1)).toBe(false);
    expect(c(Object, [])).toBe(false);
    expect(c(Number, 'string')).toBe(false);
    expect(c(Boolean, 1)).toBe(false);
    expect(c(RegExp, 'foobar')).toBe(false);
    expect(c(Date, Date.now())).toBe(false);
    expect(c(Array, 'foo')).toBe(false);
    expect(c(Function, true)).toBe(false);

  });

});

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

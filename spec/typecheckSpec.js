'use strict';

const tc = require('../index');
const fn = function() {};

describe('Number', function() {

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

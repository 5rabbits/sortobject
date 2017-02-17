'use strict';

// Import
var _require = require('assert-helpers'),
    deepEqual = _require.deepEqual;

var joe = require('joe');
var sortObject = require('../');

// Task
joe.suite('sortObject', function (suite, test) {
	test('should work', function () {
		// Prepare
		var fixture = {
			c: true,
			a: true,
			b: null,
			d: [{
				c: true,
				a: true,
				b: null
			}, {
				c: true,
				a: true,
				b: null,
				d: [{
					c: true,
					a: true,
					b: null
				}]
			}]
		};
		var expected = {
			a: true,
			b: null,
			c: true,
			d: [{
				a: true,
				b: null,
				c: true
			}, {
				a: true,
				b: null,
				c: true,
				d: [{
					a: true,
					b: null,
					c: true
				}]
			}]
		};
		var actual = sortObject(fixture);
		deepEqual(actual, expected, 'result to be as expected');
	});
});
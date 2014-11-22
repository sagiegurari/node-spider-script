'use strict';

var chai = require('chai');
var assert = chai.assert;
var library = require('../../');

describe('Index Tests', function () {
    it('require setup', function () {
        assert.isFunction(require.extensions['.spider']);
    });
});

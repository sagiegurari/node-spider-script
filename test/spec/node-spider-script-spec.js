'use strict';

var chai = require('chai');
var assert = chai.assert;
var library = require('../../lib/node-spider-script');

describe('Node Spider Tests', function () {
    it('require setup', function () {
        assert.isFunction(require.extensions['.spider']);
    });
});

'use strict';

/*global describe: false, it: false*/

var chai = require('chai');
var assert = chai.assert;
require('../../');

describe('Index Tests', function () {
    it('require setup', function () {
        assert.isFunction(require.extensions['.spider']);
    });
});

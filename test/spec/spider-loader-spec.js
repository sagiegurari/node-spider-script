'use strict';
/*jslint stupid: true, nomen: true */
/*global describe: false, it: false */

var path = require('path');
var chai = require('chai');
var assert = chai.assert;
var spiderLoader = require('../../lib/spider-loader');

describe('Spider Loader Tests', function () {
    describe('loadSpiderScriptSync Tests', function () {
        it('loadSpiderScriptSync valid', function () {
            var spiderFile = path.resolve(__dirname, '../helpers/test.spider');
            var js = spiderLoader.loadSpiderScript(spiderFile);

            assert.isObject(js);
            var person = js.create('my name');
            var output = person.listen('my noise');
            assert.equal('my name my noise', output);
        });
    });
});

'use strict';

/*jslint stupid: true, nomen: true*/
/*global describe: false, it: false*/

var path = require('path');
var chai = require('chai');
var assert = chai.assert;
var library = require('../../lib/node-spider-script');

describe('Node Spider Tests', function () {
    it('require setup', function () {
        assert.isFunction(require.extensions['.spider']);
    });

    it('require via loader test', function () {
        var spiderLoader = library.spiderLoader;

        var spiderFile = path.resolve(__dirname, '../helpers/test.spider');
        var jsModule = spiderLoader.loadSpiderScript(spiderFile);

        assert.isObject(jsModule);
        var person = jsModule.create('my name');
        var output = person.listen('my noise');
        assert.equal('my name my noise', output);
    });

    it('require test', function () {
        var spiderFile = path.resolve(__dirname, '../helpers/test.spider');
        var jsModule = require(spiderFile);

        assert.isObject(jsModule);
        var person = jsModule.create('my name');
        var output = person.listen('my noise');
        assert.equal('my name my noise', output);
    });
});

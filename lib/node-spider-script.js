'use strict';

/**
 * Extends the require capabilities to allow loading of spider
 * script files as JS files.
 *
 * @author Sagie Gur-Ari
 * @namespace NodeSpiderScript
 * @example
 * In order to use spider scripts under node, you need to first require this library as follows:
 * ```js
 * require('node-spider-script');
 * ```
 * Now you can require your spider files like any other javascript files, for example:
 * ```js
 * var jsModule = require('./my-test.spider');
 *
 * var person = jsModule.create('my name');
 * var output = person.listen('my noise');
 * ```
 * In your spider file, instead of doing module.exports, do return to the object you wish to export.
 *
 * For example:
 * ```js
 * return {
 *    create: fn(name) {
 *        return new Person(name);
 *    }
 * };
 * ```
 * Spider source:
 * ```js
 * fn Person(name) {
 *  this.name = name;
 *
 *  this.listen = fn (text) {
 *    return this.name + ' ' + text;
 *  };
 * }
 *
 * return {
 *    create: fn(name) {
 *        return new Person(name);
 *    }
 * };
 * ```
 */

var spiderLoader = require('./spider-loader');

/**
 * The node require implementation for spider scripts.
 *
 * @function
 * @alias NodeSpiderScript.requireSpider
 * @memberof! NodeSpiderScript
 * @public
 * @param {Object} spiderModule - The module for the spider script
 * @param {String} fileName - The spider script file name
 */
var requireSpider = function (spiderModule, fileName) {
    spiderLoader.loadSpiderScript(fileName, spiderModule);
};

//use spider loader to return a JS module
require.extensions['.spider'] = requireSpider;

module.exports = {
    requireSpider: requireSpider,
    /**
     * The spider loader instance.
     *
     * @member {SpiderLoader}
     * @alias NodeSpiderScript.spiderLoader
     * @memberof! NodeSpiderScript
     * @public
     */
    spiderLoader: spiderLoader
};

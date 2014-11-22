'use strict';
/*eslint no-sync:0*/

/**
 * Extends the require capabilities to allow loading of spider
 * script files as JS files.
 *
 * @author Sagie Gur-Ari
 * @namespace NodeSpiderScript
 */

var spiderLoader = require('./spider-loader');

/**
 * The node require implementation for spider scripts.
 *
 * @function
 * @memberof! NodeSpiderScript
 * @public
 * @param {object} spiderModule - The module for the spider script
 * @param {string} fileName - the spider script file name
 */
var requireSpider = function (spiderModule, fileName) {
    /*jslint stupid: true */
    spiderLoader.loadSpiderScriptSync(fileName, spiderModule);
    /*jslint stupid: false */
};

//use spider loader to return a JS module
require.extensions['.spider'] = requireSpider;

module.exports = {
    requireSpider: requireSpider,
    spiderLoader: spiderLoader
};

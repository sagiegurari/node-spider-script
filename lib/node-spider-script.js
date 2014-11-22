'use strict';

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
 * @param {object} [info] - not used
 * @param {string} fileName - the spider sciprt file name
 * @returns {object} The JS module
 */
var requireSpider = function (info, fileName) {
    return spiderLoader.loadSpiderScriptSync(fileName);
};

//use spider loader to return a JS module
require.extensions['.spider'] = requireSpider;

module.exports = requireSpider;

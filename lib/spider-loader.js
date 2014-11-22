'use strict';

var fs = require('fs');
var path = require('path');
var vm = require('vm');
var extend = require('node.extend');
var spider = require('spider-script');

/**
 * The SpiderLoader enables to load spider script files and to load them into the
 * node runtime as JS files.
 *
 * @author Sagie Gur-Ari
 * @class SpiderLoader
 * @private
 */
function SpiderLoader() {
}

/*jslint stupid: true */
/**
 * Converts the provided spider file into JS script text
 *
 * @function
 * @memberof! SpiderLoader
 * @public
 * @param {string} spiderFile - The spider script file path
 * @returns {string} The JS string of the converted spider script
 */
SpiderLoader.prototype.runSpiderScript2JSSync = function (spiderFile) {
    var spiderScriptString = fs.readFileSync(spiderFile, 'utf8');
    /*jslint stupid: false */

    //add node globals
    spiderScriptString = 'use :node;\n' + spiderScriptString;

    var errors = [];
    var jsString = spider.compile(spiderScriptString, false, errors, null, null, true, false);

    //wrap as a module
    jsString = 'var moduleObject = ' + jsString + '\n\nmodule.exports = moduleObject;';

    if (errors.length) {
        throw new Error('Failed to run spider.compile\n' + errors[0].message);//throw only first error
    }

    return jsString;
};

/**
 * Converts the provided spider file into JS script and loads it into
 * the node runtime.
 *
 * @function
 * @memberof! SpiderLoader
 * @public
 * @param {string} spiderFile - The spider script file path
 * @returns {object} The JS module
 */
SpiderLoader.prototype.loadSpiderScriptSync = function (spiderFile) {
    var jsString = this.runSpiderScript2JSSync(spiderFile);

    var jsModule = null;
    if (jsString.length) {
        /*jslint nomen: true */
        var context = extend({}, global, {
            root: root,
            module: module,
            require: module.require.bind(module),
            exports: module.exports,
            __filename: spiderFile + '.js',
            __dirname: path.resolve(spiderFile, '..')
        });
        /*jslint nomen: false */
        context.global = context;

        jsModule = vm.runInNewContext(jsString, context, {
            filename: spiderFile + '.js'
        });
    }

    return jsModule;
};

var spiderLoader = new SpiderLoader();  //singleton

module.exports = spiderLoader;

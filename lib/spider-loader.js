'use strict';

var fs = require('fs');
var path = require('path');
var vm = require('vm');
var Module = require('module');
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

    if (errors.length) {
        throw new Error('Failed to run spider.compile\n' + errors[0].message);//throw only first error
    }

    //wrap as a module
    var buffer = [];
    buffer.push('\'use strict\';\n');
    buffer.push('var moduleObject = ');
    buffer.push(jsString);
    buffer.push('\n\n');
    buffer.push('module.exports = moduleObject;');

    jsString = buffer.join('');

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
 * @param {object} [spiderModule] - The module for the spider script
 * @returns {object} The JS module
 */
SpiderLoader.prototype.loadSpiderScriptSync = function (spiderFile, spiderModule) {
    var jsString = this.runSpiderScript2JSSync(spiderFile);

    spiderModule = spiderModule || new Module(spiderFile);

    /*jslint nomen: true */
    var context = extend({}, global, {
        root: root,
        module: spiderModule,
        require: spiderModule.require.bind(spiderModule),
        exports: spiderModule.exports,
        __filename: spiderFile + '.js',
        __dirname: path.resolve(spiderFile, '..')
    });
    /*jslint nomen: false */
    context.global = context;

    return vm.runInNewContext(jsString, context, {
        filename: spiderFile + '.js'
    });
};

var spiderLoader = new SpiderLoader();  //singleton

module.exports = spiderLoader;

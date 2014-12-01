# node-spider-script

[![NPM Version](http://img.shields.io/npm/v/node-spider-script.svg?style=flat)](https://www.npmjs.org/package/node-spider-script) [![Build Status](https://img.shields.io/travis/sagiegurari/node-spider-script.svg?style=flat)](http://travis-ci.org/sagiegurari/node-spider-script) [![Dependencies](http://img.shields.io/david/sagiegurari/node-spider-script.svg?style=flat)](https://david-dm.org/sagiegurari/node-spider-script) [![Coverage Status](https://img.shields.io/coveralls/sagiegurari/node-spider-script.svg?style=flat)](https://coveralls.io/r/sagiegurari/node-spider-script)

> Load spider script as any javascript modules under nodeJS runtime.

## Overview
Spider is a programming language that compiles to JavaScript. It takes the best ideas of Swift, Python, C# and CoffeeScript.

See http://spiderlang.org/ for more information.

## Usage
In order to use spider scripts under node, you need to first require this library as follows

```js
require('node-spider-script');
```

Now you can require your spider files like any other javascript files, for example:

```js
var jsModule = require('./my-test.spider');

var person = jsModule.create('my name');
var output = person.listen('my noise');
```

In your spider file, instead of doing module.exports, do return to the object you wish to export.

For example:

```js
return {
    create: fn(name) {
        return new Person(name);
    }
};
```

## Release History

 * XXXXXXXXXX   v0.0.14  In Development....
 * 2014-11-30   v0.0.13  Internal changes due to spider dependency changes
 * 2014-11-29   v0.0.12  Updated spider dependency
 * 2014-11-29   v0.0.11  Internal improvements
 * 2014-11-22   v0.0.10  Internal improvements
 * 2014-11-22   v0.0.7   JSDoc changes
 * 2014-11-22   v0.0.6   Fixed pure require approach
 * 2014-11-22   v0.0.5   Initial release.

## License
Developed by Sagie Gur-Ari and licensed under the Apache 2 open source license.


[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/sagiegurari/node-spider-script/trend.png)](https://bitdeli.com/free "Bitdeli Badge")


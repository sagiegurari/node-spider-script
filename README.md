# node-spider-script

[![NPM Version](http://img.shields.io/npm/v/node-spider-script.svg?style=flat)](https://www.npmjs.org/package/node-spider-script) [![Build Status](https://travis-ci.org/sagiegurari/node-spider-script.svg)](http://travis-ci.org/sagiegurari/node-spider-script) [![Coverage Status](https://coveralls.io/repos/sagiegurari/node-spider-script/badge.svg)](https://coveralls.io/r/sagiegurari/node-spider-script) [![bitHound Code](https://www.bithound.io/github/sagiegurari/node-spider-script/badges/code.svg)](https://www.bithound.io/github/sagiegurari/node-spider-script) [![Inline docs](http://inch-ci.org/github/sagiegurari/node-spider-script.svg?branch=master)](http://inch-ci.org/github/sagiegurari/node-spider-script)<br>
[![License](https://img.shields.io/npm/l/node-spider-script.svg?style=flat)](https://github.com/sagiegurari/node-spider-script/blob/master/LICENSE) [![Total Downloads](https://img.shields.io/npm/dt/node-spider-script.svg?style=flat)](https://www.npmjs.org/package/node-spider-script) [![Dependency Status](https://david-dm.org/sagiegurari/node-spider-script.svg)](https://david-dm.org/sagiegurari/node-spider-script) [![devDependency Status](https://david-dm.org/sagiegurari/node-spider-script/dev-status.svg)](https://david-dm.org/sagiegurari/node-spider-script?type=dev)

> Load spider script as any javascript modules under nodeJS runtime.

* [Overview](#overview)
* [Usage](#usage)
* [Installation](#installation)
* [API Documentation](docs/api.md)
* [Contributing](.github/CONTRIBUTING.md)
* [Release History](#history)
* [License](#license)

<a name="overview"></a>
## Overview
Spider is a programming language that compiles to JavaScript. It takes the best ideas of Swift, Python, C# and CoffeeScript.

See [spiderlang.org](http://spiderlang.org/) for more information.

<a name="usage"></a>
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

Full example (Spider):

```js
fn Person(name) {
  this.name = name;

  this.listen = fn (text) {
    return this.name + ' ' + text;
  };
}

return {
    create: fn(name) {
        return new Person(name);
    }
};
```

Full example (JavaScript):

```js
require('node-spider-script');

var jsModule = require('./my-test.spider');

var person = jsModule.create('my name');
var output = person.listen('my noise');
```

<a name="installation"></a>
## Installation
In order to use this library, just run the following npm install command:

```sh
npm install --save node-spider-script
```

## API Documentation
See full docs at: [API Docs](docs/api.md)

## Contributing
See [contributing guide](.github/CONTRIBUTING.md)

<a name="history"></a>
## Release History

| Date        | Version | Description |
| ----------- | ------- | ----------- |
| 2016-09-14  | v1.0.9  | Maintenance |
| 2015-02-06  | v0.0.20 | Grunt cleanups |
| 2015-02-06  | v0.0.19 | Doc changes |
| 2014-12-07  | v0.0.16 | Minor internal changes |
| 2014-12-02  | v0.0.15 | Doc changes |
| 2014-12-01  | v0.0.14 | Added continues integration support for the project |
| 2014-11-30  | v0.0.13 | Internal changes due to spider dependency changes |
| 2014-11-29  | v0.0.12 | Updated spider dependency |
| 2014-11-29  | v0.0.11 | Internal improvements |
| 2014-11-22  | v0.0.10 | Internal improvements |
| 2014-11-22  | v0.0.7  | JSDoc changes |
| 2014-11-22  | v0.0.6  | Fixed pure require approach |
| 2014-11-22  | v0.0.5  | Initial release |

<a name="license"></a>
## License
Developed by Sagie Gur-Ari and licensed under the Apache 2 open source license.

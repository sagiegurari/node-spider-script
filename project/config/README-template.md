# {"gitdown": "gitinfo", "name": "name"}

[![NPM Version](http://img.shields.io/npm/v/{"gitdown": "gitinfo", "name": "name"}.svg?style=flat)](https://www.npmjs.org/package/{"gitdown": "gitinfo", "name": "name"}) [![Build Status](https://travis-ci.org/{"gitdown": "gitinfo", "name": "username"}/{"gitdown": "gitinfo", "name": "name"}.svg)](http://travis-ci.org/{"gitdown": "gitinfo", "name": "username"}/{"gitdown": "gitinfo", "name": "name"}) [![Coverage Status](https://coveralls.io/repos/{"gitdown": "gitinfo", "name": "username"}/{"gitdown": "gitinfo", "name": "name"}/badge.svg)](https://coveralls.io/r/{"gitdown": "gitinfo", "name": "username"}/{"gitdown": "gitinfo", "name": "name"}) [![bitHound Code](https://www.bithound.io/github/{"gitdown": "gitinfo", "name": "username"}/{"gitdown": "gitinfo", "name": "name"}/badges/code.svg)](https://www.bithound.io/github/{"gitdown": "gitinfo", "name": "username"}/{"gitdown": "gitinfo", "name": "name"}) [![Inline docs](http://inch-ci.org/github/{"gitdown": "gitinfo", "name": "username"}/{"gitdown": "gitinfo", "name": "name"}.svg?branch=master)](http://inch-ci.org/github/{"gitdown": "gitinfo", "name": "username"}/{"gitdown": "gitinfo", "name": "name"})<br>
[![License](https://img.shields.io/npm/l/{"gitdown": "gitinfo", "name": "name"}.svg?style=flat)](https://github.com/{"gitdown": "gitinfo", "name": "username"}/{"gitdown": "gitinfo", "name": "name"}/blob/master/LICENSE) [![Total Downloads](https://img.shields.io/npm/dt/{"gitdown": "gitinfo", "name": "name"}.svg?style=flat)](https://www.npmjs.org/package/{"gitdown": "gitinfo", "name": "name"}) [![Dependency Status](https://david-dm.org/{"gitdown": "gitinfo", "name": "username"}/{"gitdown": "gitinfo", "name": "name"}.svg)](https://david-dm.org/{"gitdown": "gitinfo", "name": "username"}/{"gitdown": "gitinfo", "name": "name"}) [![devDependency Status](https://david-dm.org/{"gitdown": "gitinfo", "name": "username"}/{"gitdown": "gitinfo", "name": "name"}/dev-status.svg)](https://david-dm.org/{"gitdown": "gitinfo", "name": "username"}/{"gitdown": "gitinfo", "name": "name"}?type=dev)

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
npm install --save {"gitdown": "gitinfo", "name": "name"}
```

{"gitdown": "include", "file": "./README-footer-template.md"}

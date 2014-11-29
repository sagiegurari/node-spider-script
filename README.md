# node-spider-script

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
    create: func(name) {
        return new Person(name);
    }
};
```

## Spider Dependency Issue
Due to a bug in spider 0.1.x, currently spider 0.07 is the latest supported version.

Once the issue is fixed, the package.json will be updated with the relevant version.

## Release History

 * 2014-11-29   v0.0.12  Updated spider dependency
 * 2014-11-29   v0.0.11  Internal improvements
 * 2014-11-22   v0.0.10  Internal improvements
 * 2014-11-22   v0.0.7   JSDoc changes
 * 2014-11-22   v0.0.6   Fixed pure require approach
 * 2014-11-22   v0.0.5   Initial release.

## License
Developed by Sagie Gur-Ari and licensed under the Apache 2 open source license.

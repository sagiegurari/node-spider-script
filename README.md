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

var timeMachine = jsModule.create('my name');
var output = timeMachine.go('my noise');
```

In your spider file, instead of doing module.exports, do return to the object you wish to export.

For example:

```js
return {
    create: func(pilot) {
        return new TimeMachine(pilot);
    }
};
```

## Release History

 * 2014-11-22   v0.0.9   Internal improvements
 * 2014-11-22   v0.0.7   JSDoc changes
 * 2014-11-22   v0.0.6   Fixed pure require approach
 * 2014-11-22   v0.0.5   Initial release.

## License
Developed by Sagie Gur-Ari and licensed under the Apache 2 open source license.

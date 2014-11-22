# node-spider-script v0.0.3

> Load spider script as any javascript modules under nodeJS runtime.

## Overview
Spider is a programming language that compiles to JavaScript. It takes the best ideas of Swift, Python, C# and CoffeeScript.

See http://spiderlang.org/ for more information.

## Usage
In order to use spider scripts under node, you need to first require this library as follows

```js
require('node-spider-script');
```

That's it. From this point you can require spider scripts as if they were any other JS files.

```js
var jsModule = spiderLoader.loadSpiderScriptSync(spiderFile);

var timeMachine = jsModule.create('my name');
var output = timeMachine.go('my noise');
```

## Release History

 * 2014-11-22   v0.0.3   Initial release.

## License
Developed by Sagie Gur-Ari and licensed under the Apache 2 open source license.

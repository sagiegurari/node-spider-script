# node-spider-script v0.0.2

> Load spider script as any javascript modules under nodeJS runtime.

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

 * 2014-11-22   v0.0.2   Initial release.

## License
Developed by Sagie Gur-Ari and licensed under the Apache 2 open source license.

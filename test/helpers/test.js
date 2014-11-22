
require('../..');

var jsModule = require('./test.spider');

var timeMachine = jsModule.create('my name');
var output = timeMachine.go('my noise');
console.log(output);

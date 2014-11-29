'use strict';

require('../..');

var jsModule = require('./test.spider');

var person = jsModule.create('my name');
var output = person.listen('my noise');
console.log(output);

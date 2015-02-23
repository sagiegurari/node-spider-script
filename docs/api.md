#Index

**Classes**

* [class: SpiderLoader](#SpiderLoader)
  * [new SpiderLoader()](#new_SpiderLoader)
  * [SpiderLoader#runSpiderScript2JS(spiderFile)](#SpiderLoader#runSpiderScript2JS)
  * [SpiderLoader#loadSpiderScript(spiderFile, [spiderModule])](#SpiderLoader#loadSpiderScript)

**Namespaces**

* [NodeSpiderScript](#NodeSpiderScript)
  * [NodeSpiderScript.spiderLoader](#NodeSpiderScript.spiderLoader)
  * [NodeSpiderScript.requireSpider(spiderModule, fileName)](#NodeSpiderScript.requireSpider)
 
<a name="SpiderLoader"></a>
#class: SpiderLoader
**Members**

* [class: SpiderLoader](#SpiderLoader)
  * [new SpiderLoader()](#new_SpiderLoader)
  * [SpiderLoader#runSpiderScript2JS(spiderFile)](#SpiderLoader#runSpiderScript2JS)
  * [SpiderLoader#loadSpiderScript(spiderFile, [spiderModule])](#SpiderLoader#loadSpiderScript)

<a name="new_SpiderLoader"></a>
##new SpiderLoader()
The SpiderLoader enables to load spider script files and to load them into the
node runtime as JS files.

**Author**: Sagie Gur-Ari  
<a name="SpiderLoader#runSpiderScript2JS"></a>
##SpiderLoader#runSpiderScript2JS(spiderFile)
Converts the provided spider file into JS script text

**Params**

- spiderFile `string` - The spider script file path  

**Returns**: `string` - The JS string of the converted spider script  
<a name="SpiderLoader#loadSpiderScript"></a>
##SpiderLoader#loadSpiderScript(spiderFile, [spiderModule])
Converts the provided spider file into JS script and loads it into
the node runtime.

**Params**

- spiderFile `string` - The spider script file path  
- \[spiderModule\] `object` - The module for the spider script  

**Returns**: `object` - The JS module  
<a name="NodeSpiderScript"></a>
#NodeSpiderScript
Extends the require capabilities to allow loading of spider
script files as JS files.

**Author**: Sagie Gur-Ari  
**Example**  
In order to use spider scripts under node, you need to first require this library as follows:
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
Spider source:
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

**Members**

* [NodeSpiderScript](#NodeSpiderScript)
  * [NodeSpiderScript.spiderLoader](#NodeSpiderScript.spiderLoader)
  * [NodeSpiderScript.requireSpider(spiderModule, fileName)](#NodeSpiderScript.requireSpider)

<a name="NodeSpiderScript.spiderLoader"></a>
##NodeSpiderScript.spiderLoader
The spider loader instance.

**Type**: [SpiderLoader](#SpiderLoader)  
<a name="NodeSpiderScript.requireSpider"></a>
##NodeSpiderScript.requireSpider(spiderModule, fileName)
The node require implementation for spider scripts.

**Params**

- spiderModule `object` - The module for the spider script  
- fileName `string` - The spider script file name  

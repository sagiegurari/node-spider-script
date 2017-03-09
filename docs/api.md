## Classes

<dl>
<dt><a href="#SpiderLoader">SpiderLoader</a></dt>
<dd></dd>
</dl>

## Objects

<dl>
<dt><a href="#NodeSpiderScript">NodeSpiderScript</a> : <code>object</code></dt>
<dd><p>Extends the require capabilities to allow loading of spider
script files as JS files.</p>
</dd>
</dl>

<a name="SpiderLoader"></a>

## SpiderLoader
**Kind**: global class  
**Access**: public  
**Author**: Sagie Gur-Ari  

* [SpiderLoader](#SpiderLoader)
    * [new SpiderLoader()](#new_SpiderLoader_new)
    * [#runSpiderScript2JS(spiderFile)](#SpiderLoader+runSpiderScript2JS) ⇒ <code>String</code>
    * [#loadSpiderScript(spiderFile, [spiderModule])](#SpiderLoader+loadSpiderScript) ⇒ <code>Object</code>

<a name="new_SpiderLoader_new"></a>

### new SpiderLoader()
The SpiderLoader enables to load spider script files and to load them into the
node runtime as JS files.

<a name="SpiderLoader+runSpiderScript2JS"></a>

### SpiderLoader#runSpiderScript2JS(spiderFile) ⇒ <code>String</code>
Converts the provided spider file into JS script text

**Returns**: <code>String</code> - The JS string of the converted spider script  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| spiderFile | <code>String</code> | The spider script file path |

<a name="SpiderLoader+loadSpiderScript"></a>

### SpiderLoader#loadSpiderScript(spiderFile, [spiderModule]) ⇒ <code>Object</code>
Converts the provided spider file into JS script and loads it into
the node runtime.

**Returns**: <code>Object</code> - The JS module  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| spiderFile | <code>String</code> | The spider script file path |
| [spiderModule] | <code>Object</code> | The module for the spider script |

<a name="NodeSpiderScript"></a>

## NodeSpiderScript : <code>object</code>
Extends the require capabilities to allow loading of spider
script files as JS files.

**Kind**: global namespace  
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

* [NodeSpiderScript](#NodeSpiderScript) : <code>object</code>
    * [.spiderLoader](#NodeSpiderScript.spiderLoader) : <code>[SpiderLoader](#SpiderLoader)</code>
    * [.requireSpider(spiderModule, fileName)](#NodeSpiderScript.requireSpider)

<a name="NodeSpiderScript.spiderLoader"></a>

### NodeSpiderScript.spiderLoader : <code>[SpiderLoader](#SpiderLoader)</code>
The spider loader instance.

**Access**: public  
<a name="NodeSpiderScript.requireSpider"></a>

### NodeSpiderScript.requireSpider(spiderModule, fileName)
The node require implementation for spider scripts.

**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| spiderModule | <code>Object</code> | The module for the spider script |
| fileName | <code>String</code> | The spider script file name |


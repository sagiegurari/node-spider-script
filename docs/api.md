#Index

**Classes**

* [class: SpiderLoader](#SpiderLoader)
  * [new SpiderLoader()](#new_SpiderLoader)
  * [SpiderLoader#runSpiderScript2JS(spiderFile)](#SpiderLoader#runSpiderScript2JS)
  * [SpiderLoader#loadSpiderScript(spiderFile, [spiderModule])](#SpiderLoader#loadSpiderScript)

**Namespaces**

* [NodeSpiderScript](#NodeSpiderScript)
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

**Access**: private  
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
**Members**

* [NodeSpiderScript](#NodeSpiderScript)
  * [NodeSpiderScript.requireSpider(spiderModule, fileName)](#NodeSpiderScript.requireSpider)

<a name="NodeSpiderScript.requireSpider"></a>
##NodeSpiderScript.requireSpider(spiderModule, fileName)
The node require implementation for spider scripts.

**Params**

- spiderModule `object` - The module for the spider script  
- fileName `string` - The spider script file name  


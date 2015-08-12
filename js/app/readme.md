## 使用

+ module{0-9}展示了不同定义模块的方式（入口参看index.html）

+ 常用

```javascript

/* 
1、加载相邻模块
define(function(require){
    var cssObj = require("./style.css");
});
2、获取url
*/

define(function(require){
    var cssUrl = require.toUrl("./style.css");
});


/*

1、控制台获取已加载模板
require("module/name").callsomefunction()
2、只能在define内部使用形如"./module/name"的相对路径（待测试~）

*/


```

+ 注意

###循环问题解决方案

* 比如a依赖b,b依赖a,在b里面可以用require("a").callsomefun()的方式（还有其他方法 这种比较好理解）*

## 机制
## 配置
 
RequireJS脚本的加载是跨域的




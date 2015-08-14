说明
=======

在index1.html中定义入口：将script放在body末尾可以等dom树先构建好，然后加载好require.js，加载好requirejs以后再异步加载main.js

main.js:配置好baseUrl；也是程序入口代码执行的地方；依赖messager.js
messager.js:依赖dataservice.js
dataservice.js：提供了接口getMessage



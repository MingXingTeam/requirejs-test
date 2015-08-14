/**
 * Created by Administrator on 2015/8/13.
 */
requirejs.config({
        /*baseUrl: 'js', 如果没有配置baseUrl 则以main.js(index.html配置的data-main入口脚本)所在路径为baseUrl */
    }
);

require(['messager'], function (messager) {
        messager.showMessage();
    }
);
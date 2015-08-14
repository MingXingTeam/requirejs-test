/**
 * Created by Administrator on 2015/8/13.
 */
requirejs.config({
        /* 如果没有配置baseUrl 则以main.js(index.html配置的data-main入口脚本)所在路径为baseUrl */
        /* 首先会找到lib所在的路径！！*/
        baseUrl: 'lib'
    }
);

require(['messager'], function (messager) {
        messager.showMessage();
    }
);
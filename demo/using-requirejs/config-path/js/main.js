/**
 * Created by Administrator on 2015/8/13.
 */
requirejs.config({
        /* 如果没有配置baseUrl 则以main.js(index.html配置的data-main入口脚本)所在路径为baseUrl */
        /* 首先会找到lib所在的路径！！*/
        baseUrl: 'lib',
        paths:{
            /* 跨域也是可以的 'jquery':'https://code.jquery.com/jquery-2.1.1' （以/开头或https开头则不相对baseUrl）*/
            /* "jquery":['http://invalid-jquery-url', '../lib/jquery-2.1.1'] 如果第一个地址请求失败 则请求第二个 */
            "jquery":"jquery-2.1.1"/*相对baseUrl;不能带js后缀*/
        }
    }
);

require(['messager'], function (messager) {
        messager.showMessage();
    }
);
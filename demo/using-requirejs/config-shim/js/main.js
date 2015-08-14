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
            "jquery":"jquery-2.1.1",/*相对baseUrl;不能带js后缀*/
            'bootstrap': 'bootstrap'
        },
        /* 配置依赖关系（因为requirejs是异步请求js文件的 不能保证jquery总是在bootstrap加载成功前就绪）这里仅仅配置了依赖关系并没有实际加载*/
        shim:{
            'bootstrap':{
                deps: ['jquery']
            }
        }
    }
);
/*这里有个特殊性：就是加载了非AMD模块*/
require(['jquery','bootstrap'], function ($,bootstrap) {
        $(function() {
            // Call the alert function defined by Bootstrap

            $('.alert').alert();
        });
    }
);
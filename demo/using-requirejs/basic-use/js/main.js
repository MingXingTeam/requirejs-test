/**
 * Created by Administrator on 2015/8/13.
 */
requirejs.config({
        /*baseUrl: 'js', ���û������baseUrl ����main.js(index.html���õ�data-main��ڽű�)����·��ΪbaseUrl */
    }
);

require(['messager'], function (messager) {
        messager.showMessage();
    }
);
/**
 * Created by Administrator on 2015/8/13.
 */
requirejs.config({
        /* ���û������baseUrl ����main.js(index.html���õ�data-main��ڽű�)����·��ΪbaseUrl */
        /* ���Ȼ��ҵ�lib���ڵ�·������*/
        baseUrl: 'lib'
    }
);

require(['messager'], function (messager) {
        messager.showMessage();
    }
);
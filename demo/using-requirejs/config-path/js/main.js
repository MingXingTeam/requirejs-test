/**
 * Created by Administrator on 2015/8/13.
 */
requirejs.config({
        /* ���û������baseUrl ����main.js(index.html���õ�data-main��ڽű�)����·��ΪbaseUrl */
        /* ���Ȼ��ҵ�lib���ڵ�·������*/
        baseUrl: 'lib',
        paths:{
            /* ����Ҳ�ǿ��Ե� 'jquery':'https://code.jquery.com/jquery-2.1.1' ����/��ͷ��https��ͷ�����baseUrl��*/
            /* "jquery":['http://invalid-jquery-url', '../lib/jquery-2.1.1'] �����һ����ַ����ʧ�� ������ڶ��� */
            "jquery":"jquery-2.1.1"/*���baseUrl;���ܴ�js��׺*/
        }
    }
);

require(['messager'], function (messager) {
        messager.showMessage();
    }
);
/**
 * Created by Administrator on 2015/8/13.
 */
/*·��Ĭ���Ǵӵ�ǰĿ¼���ҡ�*/
require(['dataservice','utils/show'], function (dataservice,show) {
/* ����Ҳ�ǿ��Ե� ./��ʾ��ǰĿ¼ ../��ʾ��һ��Ŀ¼ */
/*require(['./dataservice','./utils/show'], function (dataservice,show) {*/
        show.showMessage(dataservice.getMessage());
    }
);
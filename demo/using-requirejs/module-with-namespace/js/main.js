/**
 * Created by Administrator on 2015/8/13.
 */
/*路径默认是从当前目录查找。*/
require(['dataservice','utils/show'], function (dataservice,show) {
/* 这样也是可以的 ./表示当前目录 ../表示上一级目录 */
/*require(['./dataservice','./utils/show'], function (dataservice,show) {*/
        show.showMessage(dataservice.getMessage());
    }
);
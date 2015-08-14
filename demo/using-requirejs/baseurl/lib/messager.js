/**
 * Created by Administrator on 2015/8/13.
 */
define(["dataservice"], function (dataservice) {
    var showMessage = function () {
        var message = dataservice.getMessage();
        alert(message);
    };
    return {
        showMessage: showMessage
    }
});
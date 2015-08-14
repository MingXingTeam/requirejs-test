/**
 * Created by Administrator on 2015/8/13.
 */
/*define([], function (require) {  ´íÎóµÄĞ´·¨ */
define(function (require) {
    var dataservice = require("dataservice");
    var showMessage = function () {
        var message = dataservice.getMessage();
        alert(message);
    };
    return {
        showMessage: showMessage
    }
});
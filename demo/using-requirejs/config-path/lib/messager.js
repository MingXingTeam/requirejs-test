/**
 * Created by Administrator on 2015/8/13.
 */
/*jquery:ª·«Î«Ûlib/jquery-2.1.1.js*/
define(["dataservice","jquery"], function (dataservice,$) {
    var showMessage = function () {
        var message = dataservice.getMessage();
        $("#msg").html(message);
    };
    return {
        showMessage: showMessage
    }
});
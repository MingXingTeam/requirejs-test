/**
 * Created by Administrator on 2015/8/13.
 */
define([], function () {
    var
        msg = "This is message!",
        getMessage = function () {
            return msg;
        };

    return {
        getMessage: getMessage
    }
});
/**
 * Created by Administrator on 2015/8/12.
 */
/*默认情况下 my对应的目录可以映射到任何目录，但默认是当前所在目录下 即和app同级目录下找my*/
define(["my/cart","my/inventory"],function(cart,inventory){/* ./ ˵������baseurlΪ��·�� */
    //return a function
    return function(title){
        return title ? (window.title = title):inventory.storename+' '+cart.name;
    }
});
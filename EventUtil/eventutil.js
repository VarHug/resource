var eventUtil = {
    //添加事件处理程序
    addHandler : function(ele, type, handler) {
        if(ele.addEventListener) {
            ele.addEventListener(type, handler, false);
        } else if(ele.attachEvent) {
            ele.attachEvent('on' + type, handler);
        } else {
            ele['on' + type] = handler;
        }
    },
    //移除事件处理程序
    removerHandler : function(ele, type, handler) {
        if(ele.removeEventListener) {
            ele.removeEventListener(type, handler, false);
        } else if(ele.detachEvent) {
            ele.detachEvent('on' + type, handler);
        } else {
            ele['on' + type] = null;
        }
    }
}
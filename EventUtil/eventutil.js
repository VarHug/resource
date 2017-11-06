var EventUtil = {
    //添加事件处理程序
    addHandler: function(ele, type, handler) {
        if (ele.addEventListener) {
            ele.addEventListener(type, handler, false);
        } else if (ele.attachEvent) {
            ele.attachEvent('on' + type, handler);
        } else {
            ele['on' + type] = handler;
        }
    },
    //获取event对象
    getEvent: function(event){
        return event ? event : window.event;
    },
    //获取事件目标
    getTarget: function (event) {
        return event.target || event.srcElement;
    },
    //取消事件的默认行为
    preventDefault: function(event) {
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    },
    //移除事件处理程序
    removerHandler: function(ele, type, handler) {
        if (ele.removeEventListener) {
            ele.removeEventListener(type, handler, false);
        } else if (ele.detachEvent) {
            ele.detachEvent('on' + type, handler);
        } else {
            ele['on' + type] = null;
        }
    },
    //取消事件进一步捕获或冒泡
    stopProagation: function(event) {
        if (event.stopProagation) {
            event.stopProagation();
        } else {
            event.cancelBubble = true;
        }
    },
    //取得相关元素
    getRelatedTarget: function(event) {
        if(event.relatedTarget) {
            return event.relatedTarget;
        } else if(event.toElement) {
            return event.toElement;
        } else if(event.fromElement) {
            return event.fromElement;
        } else {
            return null;
        }
    },
    //获取鼠标按钮button属性(0左、1滚轮、2右)
    getButton: function(event) {
        if(document.implementation.hasFeature('MouseEvents', '2.0')) {
            return event.button;
        } else {
            switch(event.button) {
                case 0:
                case 1:
                case 3:
                case 5:
                case 7:
                    return 0;
                case 2:
                case 6:
                    return 2;
                case 4:
                    return 1;
            }
        }
    },
    //获取鼠标滚轮滑动信息(+120:向前滑动基数,-120:向后滑动基数)
    getWheelDelta: function(event) {
        if (event.wheelDelta) {
            // return (client.engine.opera && client.engine.opera < 9.5 ? -event.wheelDelta : event.wheelDelta);
            return event.wheelDelta;
        } else {
            return -event.detail * 40;
        }
    },
    //获取键码
    getCharCode: function(event) {
        if (typeof event.charCode === 'number') {
            return event.charCode;
        } else {
            return event.keyCode;
        }
    },
    //从剪贴板中获得数据
    getClipboardText : function(event) {
        var clipboardData = (event.clipboardData || window.clipboardData)
        return clipboardData.getData('text');
    },
    //设置剪贴板中的文本
    setClipboardText : function(event) {  
        if(event.clipboardData) {
            return event.clipboardData.setData('text/plain', value);
        } else if(window.clipboardData) {
            return window.clipboardData.setData('text', value);
        }
    }
};
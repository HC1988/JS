/**
 * touch event transform to mouse event
 * created by lwang1222@gmail.com 
 * Date in Dec.18 2015
 */
;
(function(){

    function touchHandler(event){

        var touches = event.changedTouches,
            first = touches[0],
            type = "";

        switch (event.type){

            case "touchstart" : type = "mousedown"; break;
            case "touchmove"  : type = "mousemove"; break;
            case "touchend"   : type = "mouseup"; break;
            default :           return;
        }

        var simulatedEvent = document.createEvent("MouseEvent");
        simulatedEvent.initMouseEvent(type, true, true, window, 1,
                                      first.screenX ,first.screenY,
                                      first.clientX, first.clientY, false,
                                      false, false ,false, 0/*left*/, null);

        first.target.dispatchEvent(simulatedEvent);
        event.preventDefault();//sometimes you have to  remove this order.why? sorry I don't konw now.
    }

    function initTouchHandler(){

        document.addEventListener("touchstart",touchHandler,true);
        document.addEventListener("touchmove",touchHandler,true);
        document.addEventListener("touchend",touchHandler,true);
        document.addEventListener("touchcanel",touchHandler,true);

    }

    initTouchHandler();

})();

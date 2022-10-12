export const throttle = (method, context) => {
    clearTimeout(method.tID);
    method.tID = setTimeout(function(){
        method.call(context);
    }, 10);
}
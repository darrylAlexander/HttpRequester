window.onload = function() {
    document.getElementById("getRequest").onsubmit = function(){
        AJAXSubmit(this);
        return false;
    };
};
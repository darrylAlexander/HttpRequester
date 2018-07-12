var HTTPRequester = (function () {

    function initialise() {

        document.getElementById("httprequester_getRequest").onsubmit = function(){
            try{
                AJAXSubmit(this);
            } catch {
                console.log("There is a problem with the dependency AJAXSUBMIT.");
            }

            return false;
        };
    }

    initialise();
})();
var HTTPRequester = (function () {
    class HttpRequester {
        constructor() {
            this.loadEvents();
        }

        loadEvents() {

            document.getElementById("basic__submit--get").onclick = function () {
                document.getElementById("httprequester_getRequest").action = document.getElementById("basic__url").value;
            }

            document.getElementById("httprequester_getRequest").onsubmit = function () {
                try {
                    AJAXSubmit(this);
                } catch {
                    console.log("There is a problem with the dependency AJAXSUBMIT.");
                }

                return false;
            };
        }
    }

    return function () {
        new HttpRequester();
    };
})();

window.onload = function () {
    try {
        HTTPRequester();
    } catch {
        console.log("There is a problem with the dependency HTTPRequester.");
    }
}
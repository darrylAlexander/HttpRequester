function openPanel() {
    var createData = {
        type: "detached_panel",
        url: "/src/html/httprequester.html",
        width: 320,
        height: 480
    };
    var creating = browser.windows.create(createData);
}

window.onload = function() {
    browser.browserAction.onClicked.addListener(openPanel);
};
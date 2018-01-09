function openPanel() {
    var createData = {
        type: "detached_panel",
        url: "/src/httprequester.html",
        width: 900,
        height: 600
    };
    var creating = browser.windows.create(createData);
}

window.onload = function() {
    browser.browserAction.onClicked.addListener(openPanel);
};
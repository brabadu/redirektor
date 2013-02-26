// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
    var new_uri = new Uri(tab.url);
    var host = new_uri.host();

    var splitted = host.split('.');
    var len = splitted.length;
    splitted[len - 2] = 'example';
    splitted[len - 1] = 'com';

    new_uri
        .setHost(splitted.join('.'))
        .setPort(5000);

    chrome.tabs.create({url: new_uri.toString()})
});
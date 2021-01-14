var pageConditions = {
    conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {
            schemes: ["https", "http"] //filtering the pages the UI can be used on
        }
    })],
    actions: [new chrome.declarativeContent.ShowPageAction()]
}

// Background.js
//chrome.api.functionRunning
chrome.runtime.onInstalled.addListener(function(){
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function(){
        chrome.declarativeContent.onPageChanged.addRules([pageConditions]);
    })
});
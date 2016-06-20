// listen for when extension gets installed
chrome.runtime.onInstalled.addListener
(
    function()
    {
        // create menu option in context menu
        chrome.contextMenus.create(
            {
                title: "quiz me",
                id: "quiz-me-menu-option",
                contexts: ["all"],
            }
        );

        // add listener for context menu option click
        chrome.contextMenus.onClicked.addListener( function(info, tab) {
            chrome.tabs.executeScript( { code: "window.getSelection().toString();"},
                function(text) {
                    if (tab) {
                        chrome.tabs.sendMessage(tab.id, {args: text}, function(response) {
                          console.log(text);
                        });
                    }
                    return;
                }
            );
        });
    }
);
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
        chrome.contextMenus.onClicked.addListener(giveQuiz);
    }
);

/*
 * Generates quiz on currently selected text and displays
 * it on the screen.
 */
function giveQuiz()
{
    alert('it works');    
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    var text = request.args[0];

    // `text` is the string of highlighted text
    // This is where the magic happens

    modal(text);
    return;
});

function modal(text) {
    var withBlanks = text.replace(/the/g,
            "<form action=\"#\">\
                <div class=\"mdl-textfield mdl-js-textfield\">\
                    <input class=\"mdl-textfield__input\" type=\"text\" id=\"sample1\">\
                </div>\
            </form>"
        );

    var layerNode= document.createElement('div');
    layerNode.setAttribute('id','dialog');
    layerNode.setAttribute('title','Oshun');
    var pNode= document.createElement('p');
        pNode.innerHTML  = withBlanks;

    layerNode.appendChild(pNode);
    document.body.appendChild(layerNode);

    $("#dialog").dialog({
        autoOpen: true,
        draggable: true,
        resizable: true,
        height: 'auto',
        width: 500,
        zIndex: 3999,
        modal: false,
        open: function(event, ui) {
            $(event.target).parent().css('position','fixed');
            $(event.target).parent().css('top', '5px');
            $(event.target).parent().css('left', '10px');
            $(event.target).parent().css('background-color', 'white');
            $(event.target).parent().css('z-index', '5000');
        }
    });
}
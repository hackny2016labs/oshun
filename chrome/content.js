chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    var text = request.args[0];

    $.ajax({
        type: "GET",
        url: "localhost:5000/blanks/" + text,
        dataType: 'json',
        error: function(xhr, error){
            console.log(xhr)
        },
        success: function(data) {
            console.log(data)
        }
    });

    return;
});

function modal(text) {
    var withBlanks = text.replace(/the/g,
            "<form action=\"#\">\
                <div class=\"mdl-textfield mdl-js-textfield\">\
                </div>\
            </form>"
        );

    var layerNode= document.createElement('div');
    layerNode.setAttribute('id','dialog');
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
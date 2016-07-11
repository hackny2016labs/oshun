chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    var text = request.args[0];

    $.ajax({
        type: "GET",
        url: "https://hacknylabs2016-oshun.herokuapp.com/blanks/" + text,
        dataType: 'json',
        success: function(data) {
            modal(data, text);
        },
        error: function(error){
            console.log(error);
        }
    });
    return;
});

function modal(question, answer) {
    var withBlanks = question.replace(/the/g,
            "<form action=\"#\">\
                <div class=\"mdl-textfield mdl-js-textfield\">\</div>\
            </form>"
        );

    var layerNode= document.createElement('div');
    layerNode.setAttribute('id','dialog');
    var pNode = document.createElement('p');
        pNode.innerHTML  = withBlanks;
    var buttonNode = document.createElement('BUTTON');
        buttonNode.innerHTML  = "Show Answers";
        buttonNode.setAttribute('id','answers');

    layerNode.appendChild(pNode);
    layerNode.appendChild(buttonNode);
    document.body.appendChild(layerNode);

    $( "#answers" ).click(function() {
        buttonNode.innerHTML = answer;
    });

    $("#dialog").dialog({
        autoOpen: true,
        draggable: true,
        resizable: true,
        height: 'auto',
        width: 1000,
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
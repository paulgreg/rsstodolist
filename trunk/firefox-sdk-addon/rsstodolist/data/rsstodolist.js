onMessage = function onMessage(infos) {
   if(infos && infos.description) $("#description").val(infos.description);
   if(infos && infos.feed) $("#feed").val(infos.feed);
};

$(document).ready(function() {
   postMessage("ready");
   initResetField();
   initActionsButtons();
});

function initResetField() {
   $("#description").click(resetField);
   $("#feed").click(resetField);
}
function resetField() {
   $(this).val("");
}

function initActionsButtons() {
   $("#add").click(postActions);
   $("#del").click(postActions);
   $("#link").click(postActions); 
}
function postActions() {
   postMessage({action: $(this).attr("id"), description:$("#description").val(), feed:$("#feed").val()});
}

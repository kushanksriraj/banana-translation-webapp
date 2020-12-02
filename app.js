var buttonRef = document.querySelector("#btn-translate");
var textAreaRef = document.querySelector("#txt-input");

function clickEventHandler() {
    var textInput = textAreaRef.value;

    console.log(textInput);
};

buttonRef.addEventListener("click", clickEventHandler);
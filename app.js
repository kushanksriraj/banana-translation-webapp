var buttonRef = document.querySelector("#btn-translate");
var textInputRef = document.querySelector("#txt-input");
var textOutputRef = document.querySelector("#text-output");

function clickEventHandler() {
    
    var textInput = textInputRef.value;
    console.log(textInput);  
    textOutputRef.innerText = textInput;
};

buttonRef.addEventListener("click", clickEventHandler);

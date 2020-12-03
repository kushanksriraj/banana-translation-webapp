var buttonRef = document.querySelector("#btn-translate");
var textInputRef = document.querySelector("#txt-input");
var textOutputRef = document.querySelector("#text-output");

const url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

function generateUrl(text){
    var temp = url + "?" + "text=" + text;
    // console.log(encodeURI(temp));
    return encodeURI(temp);
}

function clickEventHandler() {
    
    var textInput = textInputRef.value;

    fetch(generateUrl(textInput)).then(response => response.json()).then(response => textOutputRef.innerText = response.contents.translated);

}

buttonRef.addEventListener("click", clickEventHandler);

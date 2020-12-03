var buttonRef = document.querySelector("#btn-translate");
var textInputRef = document.querySelector("#txt-input");
var textOutputRef = document.querySelector("#text-output");

// const url = "https://lessonfourapi.tanaypratap.repl.co/tran-slate/yoda.json";

const url = "https://api.funtranslations.com/translate/hodor.json";


function generateUrl(text){
    var temp = url + "?" + "text=" + text;
    // console.log(encodeURI(temp));
    return encodeURI(temp);
}

function errorHandler(error){
    console.log("Some error occured!");
    console.log(error);
    alert("Some error occured!");
}

function clickEventHandler() {
    
    var textInput = textInputRef.value;

    fetch(generateUrl(textInput)).then(response => response.json()).then(response => textOutputRef.innerText = response.contents.translated).catch(error => errorHandler(error));

}

buttonRef.addEventListener("click", clickEventHandler);

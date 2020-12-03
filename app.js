var buttonRef = document.querySelector("#btn-translate");
var textInputRef = document.querySelector("#txt-input");
var textOutputRef = document.querySelector("#txt-output");


const url = "https://api.funtranslations.com/translate/minion.json";

function generateUrl(text) {

    var temp = url + "?" + "text=" + text;
    return encodeURI(temp);
}

function errorHandler(error) {

    console.log("Some error occured!");
    console.log(error);
    alert("Some error occured! Please try after some time.")
}

function clickEventHandler() {

    var textInput = textInputRef.value;

    fetch(generateUrl(textInput))
        .then(response => response.json())
        .then(json => {
            textOutputRef.innerText = json.contents.translated;
        })
        .catch(errorHandler);
}

buttonRef.addEventListener("click", clickEventHandler);
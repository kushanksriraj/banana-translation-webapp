const buttonRef = document.querySelector("#btn-translate");
const textInputRef = document.querySelector("#txt-input");
const textOutputRef = document.querySelector("#txt-output");

const url = `https://api.funtranslations.com/translate/minion.json`;

const generateUrl = text => {

    const temp = `${url}?text=${text}`;
    return encodeURI(temp);
}

const errorHandler = error => {

    console.log(`Some error occured!`);
    console.log(error);
    alert(`Some error occured! Please try after some time.`)
}

const clickEventHandler = () => {

    const textInput = textInputRef.value;

    fetch(generateUrl(textInput))
        .then(response => response.json())
        .then(json => {
            textOutputRef.innerText = json.contents.translated;
        })
        .catch(errorHandler);
}

buttonRef.addEventListener("click", clickEventHandler);
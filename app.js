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

const clickEventHandler = async () => {
    
    const textInput = textInputRef.value;
    
    try{
    const res = await fetch(generateUrl(textInput));
    const json = await res.json();
    textOutputRef.innerText = json.contents.translated;
   }
   catch (err) {
    errorHandler(err);
   }
}

buttonRef.addEventListener("click", clickEventHandler);
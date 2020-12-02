// var buttonRef = document.querySelector("#btn-translate");
// var textInputRef = document.querySelector("#txt-input");
// var textOutputRef = document.querySelector("#text-output");

// function clickEventHandler() {
    
//     var textInput = textInputRef.value;
//     console.log(textInput);  
//     textOutputRef.innerText = textInput;
// };

// buttonRef.addEventListener("click", clickEventHandler);


// using arrow function
fetch("https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?text=neogcamp test").then(response => response.json()).then(response => console.log(response.contents.translated));

// // using normal function
// fetch("https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?text=neogcamp test").then(function convert2json(response){
//     return response.json();
// }).then(function logOutput(response){
//     console.log(response.contents.translated);
// });





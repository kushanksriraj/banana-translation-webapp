// get the button id as reference using DOM API
// var buttonRef = document.querySelector("button");
// var buttonRef = document.querySelector("button[name='btn']");
var buttonRef = document.querySelector("#btn-translate");



// callback function() to handle click event 
function clickEventHandler() {
    console.log("Cliked");
};

// add click event and callback function to the button reference
buttonRef.addEventListener("click", clickEventHandler);
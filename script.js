//Grabbed 
var button = document.getElementById("button");
var title = document.getElementById("title");
var author = document.getElementById("author");
var description = document.getElementById("description");
var book = document.getElementById("output");



// storage arrays
var titleValue = [];
var authorValue = [];
var descriptionValue = [];



function addBook() {
    if (title.value.length > 0 
        && author.value.length > 0 
        && description.value.length > 0) {
            displayValues();
           title.value = ""; 
           author.value = "";
           description.value = "";
    } else {
        alert("please insert info");
    }
}

function displayValues() {
    titleValue.push(title.value);
    authorValue.push(authorValue.value);
    descriptionValue.push(description.value);
    alert("function is working");
}




button.addEventListener('click', addBook);







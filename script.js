//Grabbed 
var button = document.getElementById("button");
var title = document.getElementById("title");
var author = document.getElementById("author");
var description = document.getElementById("description");
var showBook = document.querySelector('.table');



// // storage arrays
// var titleValue = [];
// var authorValue = [];
// var descriptionValue = [];

// // store value in arrays
// function pushValues() {
//     titleValue.push(title.value);
//     authorValue.push(author.value);
//     descriptionValue.push(description.value);
    
// }

// check for value input and run storage function
function addBook() {
    if (title.value.length > 0 
        && author.value.length > 0 
        && description.value.length > 0) {
            createBookEntry();
           title.value = ""; 
           author.value = "";
           description.value = "";
    } else {
        alert("please insert info");
    }
}




function createBookEntry() {
    var bookTemplate = 
    `<tr>
        <td>${title.value}</td>
        <td>${author.value}</td>
        <td>${description.value}</td>
    </tr>`;
      showBook.innerHTML += bookTemplate;
}


button.addEventListener('click', addBook);





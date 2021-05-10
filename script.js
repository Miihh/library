//Grabbed 
var button = document.getElementById("button");
var title = document.getElementById("title");
var author = document.getElementById("author");
var description = document.getElementById("description");
var showBook = document.querySelector('.table');






// check user input value & create template literal with user input info displayed
function createBookEntry() {
    // check for input length
    if (title.value.length > 0 
        && author.value.length > 0 
        && description.value.length > 0){
    // create template literal
        var bookTemplate = 
        `<tr>
        <td>${title.value}</td>
        <td>${author.value}</td>
        <td>${description.value}</td>
        </tr>`;
        // display info from user input
        showBook.innerHTML += bookTemplate;
        // reset input value after submiting them
        title.value = ""; 
        author.value = "";
        description.value = "";} 
    
}





button.addEventListener('click', createBookEntry);





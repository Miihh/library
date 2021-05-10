//Grabbed 
var button = document.getElementById("button");
var title = document.getElementById("title");
var author = document.getElementById("author");
var description = document.getElementById("description");
var showBook = document.querySelector('.table');






// check user input value & create template literal with user input info displayed
function createBookEntry() {
    if (title.value.length > 0 
        && author.value.length > 0 
        && description.value.length > 0){
    
        var bookTemplate = 
        `<tr>
        <td>${title.value}</td>
        <td>${author.value}</td>
        <td>${description.value}</td>
        </tr>`;
        showBook.innerHTML += bookTemplate;
        
        title.value = ""; 
           author.value = "";
           description.value = "";
        } else {
            alert("please insert info");
        }
    
}





button.addEventListener('click', createBookEntry);





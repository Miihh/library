//Grabbed 
var button = document.getElementById("button");
var title = document.getElementById("title");
var author = document.getElementById("author");
var description = document.getElementById("description");
var showBook = document.querySelector('.table');




function storeInfo() {

    var storedTitleValue = title.value;
    localStorage.setItem("titlu", storedTitleValue);

}

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
            <td>
            <button type="button" class="btn btn-info">Edit</button>
            <button type="button" class="btn btn-danger">X</button>
            </td>
         </tr>`;
         
         storeInfo();
         retrieveFromStorage();
        // display info from user input
        showBook.innerHTML += bookTemplate;
        // reset input value after submiting them
        title.value = ""; 
        author.value = "";
        description.value = "";} 
        
}




button.addEventListener('click', createBookEntry);






function retrieveFromStorage(){
    // Retrieve textbox previous value
    var prevValue= localStorage.getItem("titlu");
        console.log(prevValue);
    
 }


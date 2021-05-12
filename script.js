//Grabbed 
var button = document.getElementById("button");
var title = document.getElementById("title");
var author = document.getElementById("author");
var description = document.getElementById("description");






// add table row function
function addTableRow() {
    
    var titlu = document.getElementById("title").value;
    var autor = document.getElementById("author").value;
    var descriere = document.getElementById("description").value;
    var tableBody = document.getElementById("table");
    
    
    var addRow = tableBody.insertRow(1);
    
    var addTitleCell = addRow.insertCell(0);
    var addAuthorCell = addRow.insertCell(1);
    var addDescriptionCell = addRow.insertCell(2);
    var addButtonsCell = addRow.insertCell(3);
    var addRatingCell = addRow.insertCell(4);
    
    addTitleCell.innerHTML = titlu;
    addAuthorCell.innerHTML = autor;
    addDescriptionCell.innerHTML = descriere;
    
}


// store user input info in local storage and run the table row function
function storeInfo() {
    // get stored title value
    var storedTitleValue = title.value;
    localStorage.setItem("titlu", storedTitleValue);
    // get stored author value
    var storedAuthorValue = author.value;
    localStorage.setItem("autor", storedAuthorValue);
    // get stored description value
    var storedDescriptionValue = description.value;
    localStorage.setItem("descriere", storedDescriptionValue);

    addTableRow();

    
}



// CREATE BOOK ENTRY FUNCTION
function createBookEntry() {
    
    // check for input length
    if (title.value.length > 0 
        && author.value.length > 0 
        && description.value.length > 0){
    
        storeInfo();

        // display info from user input
        showBook.innerHTML += bookTemplate;
        // reset input value after submiting them
        title.value = ""; 
        author.value = "";
        description.value = "";} 
        
}


button.addEventListener('click', createBookEntry);



// like/dislike button function
function likeDislike(x) {
    x.classList.toggle("fa-thumbs-down");
  }











dit_button.addEventListener("click", function() {
    paragraph.contentEditable = true;
    paragraph.style.backgroundColor = "#dddbdb";
  } );





//   var bookTemplate = 
//   `<tr>
//       <td>${title.value}</td>
//       <td>${author.value}</td>
//       <td>${description.value}</td>
//       <td>
//       <button type="button" onclick="deleteRow(this)" class="btn btn-info">Edit</button>
//       <button type="button" class="btn btn-danger">X</button>
//       </td>
//       <td><i onclick="likeDislike(this)" class="fa fa-thumbs-up"></i></td>
//    </tr>`;




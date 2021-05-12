//Grabbed 
var button = document.getElementById("button");
var title = document.getElementById("title");
var author = document.getElementById("author");
var description = document.getElementById("description");
var delBtn = document.getElementById("delBtn");






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
    addTitleCell.contentEditable = true;
    addAuthorCell.innerHTML = autor;
    addAuthorCell.contentEditable = true;
    addDescriptionCell.innerHTML = descriere;
    addDescriptionCell.contentEditable = true;


    // create delete/edit buttons
    var deleteButton = document.createElement("button")
    deleteButton.setAttribute("id","delBtn")
    deleteButton.className = "btn btn-danger btn-sm"
    deleteButton.textContent = "Delete"
    addButtonsCell.appendChild(deleteButton);
    deleteButton.addEventListener('click', deleteRow);

    var editButton = document.createElement("button")
    editButton.setAttribute("id","editBtn")
    editButton.className = "btn btn-info btn-sm"
    editButton.textContent = "Edit"
    addButtonsCell.appendChild(editButton);
   

    // create like button
    var editButton = document.createElement("button")
    editButton.setAttribute("id","like")
    editButton.className = "btn btn-info btn-primary active $().button('toggle')"
    editButton.textContent = "Like"
    addRatingCell.appendChild(editButton);
    
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



// CREATE BOOK ENTRY FUNCTION - check if the user has entered info and display it
function createBookEntry() {
    
    // check for input length
    if (title.value.length > 0 
        && author.value.length > 0 
        && description.value.length > 0){
    
        storeInfo();


        // reset input value after submiting them
        title.value = ""; 
        author.value = "";
        description.value = "";} 
        
}

// delete row function

  function deleteRow(e) {
    var td = e.target.parentNode; 
    var tr = td.parentNode; 
    tr.parentNode.removeChild(tr);
}


// test function for delete button
function testAlert() {
    
    alert("working <3");
}

button.addEventListener('click', createBookEntry);


















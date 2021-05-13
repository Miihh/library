//Grabbed 
var button = document.getElementById("button");
var title = document.getElementById("title");
var author = document.getElementById("author");
var description = document.getElementById("description");
var delBtn = document.getElementById("delBtn");
var table = document.getElementById("table").getElementsByTagName('tbody')[0];


// add table row function
function addTableRow() {
    
    var titlu = document.getElementById("title").value;
    var autor = document.getElementById("author").value;
    var descriere = document.getElementById("description").value;
    var tBody = document.getElementById("table");
    
    
    var addRow = tBody.insertRow(1);
    
    var addTitleCell = addRow.insertCell(0);
    var addAuthorCell = addRow.insertCell(1);
    var addDescriptionCell = addRow.insertCell(2);
    var addButtonsCell = addRow.insertCell(3);
    var addRatingCell = addRow.insertCell(4);
    

    // appendChild version
    var titleText = document.createTextNode(titlu);
    addTitleCell.appendChild(titleText);
   
    var authorText = document.createTextNode(autor);
    addAuthorCell.appendChild(authorText);

    var descriptionText = document.createTextNode(descriere);
    addDescriptionCell.appendChild(descriptionText);

    //  works with innerHtml too. your choice.
    //  addTitleCell.innerHTML = titlu;
    
    //  addAuthorCell.innerHTML = autor;
     
    //  addDescriptionCell.innerHTML = descriere;
     
 
    


    

    // create delete button
    var deleteButton = document.createElement("button")
    deleteButton.setAttribute("id","delBtn")
    deleteButton.className = "btn btn-danger btn-sm"
    deleteButton.textContent = "Delete"
    addButtonsCell.appendChild(deleteButton);
    deleteButton.addEventListener('click', deleteRow);

    // create edit button
    var editButton = document.createElement("button")
    editButton.setAttribute("id","delBtn")
    editButton.className = "btn btn-info btn-sm"
    editButton.textContent = "Edit"
    addButtonsCell.appendChild(editButton);
    editButton.addEventListener('click', deleteRow);
    
   

    // create like button
    var like = document.createElement("button")
    like.setAttribute("id","like")
    like.className = "btn fa fa-thumbs-o-up"
    addRatingCell.appendChild(like);
    // create dislike button
    var dislike = document.createElement("button")
    dislike.setAttribute("id","dislike")
    dislike.className = "btn fa fa-thumbs-o-down"
    addRatingCell.appendChild(dislike);
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







function editRow() {

    if(addTitleCell.length > 0, contentEditable = false)
    {   event.preventDefault();
        addTitleCell.contentEditable= true;
    }				
    
};









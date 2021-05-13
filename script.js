//Grabbed 
var button = document.getElementById("button");
var title = document.getElementById("title");
var author = document.getElementById("author");
var description = document.getElementById("description");
var delBtn = document.getElementById("delBtn");
var table = document.getElementById("table").getElementsByTagName('tbody')[0];
var search = document.getElementById("myInput");


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
    var addRateCell = addRow.insertCell(4);
    var addStarsCell = addRow.insertCell(5);
    

    // appendChild version
    var titleText = document.createTextNode(titlu);
    addTitleCell.appendChild(titleText);
    addTitleCell.contentEditable = true;
   
    var authorText = document.createTextNode(autor);
    addAuthorCell.appendChild(authorText);
    addAuthorCell.contentEditable = true;

    var descriptionText = document.createTextNode(descriere);
    addDescriptionCell.appendChild(descriptionText);
    addDescriptionCell.contentEditable = true;

    //  works with innerHtml too. your choice.
    //  addTitleCell.innerHTML = titlu;   
    //  addAuthorCell.innerHTML = autor; 
    //  addDescriptionCell.innerHTML = descriere;
     
    //  use contentEditable=true to enable editing without the need for a button.
 
    

    // create delete button
    var deleteButton = document.createElement("button")
    deleteButton.setAttribute("id","delBtn")
    deleteButton.className = "btn btn-danger btn-sm"
    deleteButton.textContent = "Delete"
    addButtonsCell.appendChild(deleteButton);
    deleteButton.addEventListener('click', deleteRow);

    // create edit button - couldn't make it work with that function.
    // var editButton = document.createElement("button")
    // editButton.setAttribute("id","editBtn")
    // editButton.className = "btn btn-info btn-sm"
    // editButton.textContent = "Edit"
    // addButtonsCell.appendChild(editButton);
    
    
   

    //Create  like/dislike list
    var rate = ["Like","Neutral","Dislike"];

    var selectList = document.createElement("select");
    selectList.id = "mySelect";
    addRateCell.appendChild(selectList);

    for (var i = 0; i < rate.length; i++) {
        var option = document.createElement("option");
        option.value = rate[i];
        option.text = rate[i];
        selectList.appendChild(option);
    }

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


// // edit row function not working ???
// function editRow(table) {
//     if(table.isContentEditable=false)
//          {
//             table.setAttribute("contentEditable", true);
//         }
        
// }

button.addEventListener('click', createBookEntry);
















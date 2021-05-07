var button = document.getElementById("button");
var title = document.getElementById("title");
var author = document.getElementById("author");
var description = document.getElementById("description");



function addBook() {
    if (title.value.length > 0 && author.value.length > 0 && description.value.length > 0) {
    alert("thanks for submiting");
    } 
}



button.addEventListener('click', addBook);




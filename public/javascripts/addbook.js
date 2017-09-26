
let gbookName;

function bookSearch() {
  let bookName = document.getElementById('search').value;
  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://www.googleapis.com/books/v1/volumes?q=' + bookName, true);
  xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
  xhr.onload = function() {
      if (xhr.status === 200) {
        let dataObject = JSON.parse(xhr.responseText)
        let book = dataObject.items[0];
        gbookName = book.volumeInfo.title;
        var card = document.createElement("div");
        card.innerHTML = "<img src='" + book.volumeInfo.imageLinks.thumbnail +"'><input type='button' value='Add Book' onclick='addBookToLibrary()'>";
        document.getElementById("resultsGrid").appendChild(card);
      }
      else {
          console.error("you suck: bookSearch() function");
      }
  }
  xhr.send();
}

function addBookToLibrary() {
  // Send name and currently logged in user to dB and create book record
  console.log(gbookName);
}
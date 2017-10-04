
let gbook;

function bookSearch() {
  let bookName = document.getElementById('search').value;
  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://www.googleapis.com/books/v1/volumes?q=' + bookName, true);
  xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
  xhr.onload = function() {
      if (xhr.status === 200) {
        let dataObject = JSON.parse(xhr.responseText);
        let book = dataObject.items[0];
        gbook = book.volumeInfo;
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
  let user = JSON.parse(localStorage.getItem('user'));

  let book = {};
  book.name = gbook.title;
  book.image_url = gbook.imageLinks.thumbnail;  
  book.owner = user._id;

  let json = JSON.stringify(book);
  let xhr = new XMLHttpRequest();
  xhr.open('POST', 'http://localhost:3000/books/add/data', true);
  xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
  xhr.onload = function() {
      if (xhr.status === 200) {
        window.location = '/books';
      }
      else {
          console.error("you suck: addBookToLibrary() function");
      }
  }
  xhr.send(json);
}
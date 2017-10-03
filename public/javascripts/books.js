
// On page load, grab all the books available in the database and display to user
window.onload = function() {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://localhost:3000/books/data', true);
  xhr.onload = function() {
      if (xhr.status === 200) {
        let bookArray = JSON.parse(xhr.responseText);
        bookArray.forEach(function(element) {
          let cardChild = document.createElement("div");
          cardChild.innerHTML = "<img class='bookImage' src='" + element.image_url +"'><input id='" + element._id + "'type='button' value='Request Book' onclick='requestBook(event)'>";
          document.getElementById("library").appendChild(cardChild);
        });
      }
      else {
          alert("You done goofed");
      }
  }
  xhr.send();
}


// Upon book request, find the book in the database, then find the owner of that book
// and add that book to their requests array
function requestBook(event) {
  let requestedBookId = {};
  requestedBookId.id = event.srcElement.id;
  let json = JSON.stringify(requestedBookId);

  // First, find the requested book
  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://localhost:3000/books/data/request', true);
  xhr.onload = function() {
      if (xhr.status === 200) {
        // Then, find that book's owner and stick the returned book object in their requests array
        let book = JSON.parse(xhr.responseText);
      }
      else {
          alert("You done goofed");
      }
  }
  xhr.send(json);
}
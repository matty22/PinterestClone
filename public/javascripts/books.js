
window.onload = function() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://localhost:3000/books/data', true);
  xhr.onload = function() {
      if (xhr.status === 200) {
        let bookArray = JSON.parse(xhr.responseText);
        console.log(bookArray);
        bookArray.forEach(function(element) {
          let cardChild = document.createElement("div");
          cardChild.innerHTML = "<img class='bookImage' src='" + element.image_url +"'><input id='" + element.id + "'type='button' value='Request Book'>";
          document.getElementById("library").appendChild(cardChild);
        });
      }
      else {
          alert("You done goofed");
      }
  }
  xhr.send();
}
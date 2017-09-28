
window.onload = function() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://localhost:3000/books/data', true);
  xhr.onload = function() {
      if (xhr.status === 200) {
        let bookArray = JSON.parse(xhr.responseText);
        bookArray.forEach(function(element) {
          document.getElementById('library').innerHTML += element.name;
        });
      }
      else {
          alert("You done goofed");
      }
  }
  xhr.send();
}
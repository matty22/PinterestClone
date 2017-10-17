// On page load, grab all the books available in the database and display to user
window.onload = function() {
  let xhr = new XMLHttpRequest();

  xhr.open('GET', 'http://localhost:3000/pins/all', true);
  xhr.onload = function() {
      if (xhr.status === 200) {
        console.log("It worked");
        let bookArray = JSON.parse(xhr.responseText);
        bookArray.forEach(function(element) {
          let cardChild = document.createElement("div");
          cardChild.innerHTML = "<img class='bookImage' src='" + element.image_url +"'><input id='" + element._id + "'type='button' value='Request Book' onclick='requestBook(event); this.disabled=true'>";
          document.getElementById("library").appendChild(cardChild);
        });
      }
      else {
          alert("You done goofed");
      }
  }
  xhr.send();
}
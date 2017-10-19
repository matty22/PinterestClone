// When the page loads, fetch the pins for the current user
window.onload = function() {

  let userId = sessionStorage.getItem('userId');

  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://localhost:3000/pins/pinboard/' + userId, true);
  xhr.onload = function() {
      if (xhr.status === 200) {
        let pins = JSON.parse(xhr.responseText);
        pins.forEach(function(element) {
          let card = document.createElement('div');
          card.className += 'pinDiv'
          card.innerHTML = "<img class='pinImage' src='" + element.image_url +"'><p>" + element.title + "</p>";
          document.getElementById("wall").appendChild(card);
        });
      }
      else {
          alert("You done goofed");
      }
  }
  xhr.send();
}

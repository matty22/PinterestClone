window.onload = function() {
  let userExists = sessionStorage.getItem('userId');
  if (userExists) {
    // Show them the button to see their pin board
    document.getElementById('pinboardButton').style.display = 'inline-block';
  } else if (!userExists) {
    // Hide the button to show their pin board and navigate user to index page
    document.getElementById('pinboardButton').style.display = 'none';
    window.location = '/';
  }

  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://localhost:3000/pins/all', true);
  xhr.onload = function() {
      if (xhr.status === 200) {
        let pins = JSON.parse(xhr.responseText);
        pins.forEach(function(element) {
          let card = document.createElement('div');
          card.className += 'pinDiv'
          card.innerHTML = "<img class='pinImage' src='" + element.image_url +"' onerror='imgError(this)'><p>" + element.title + "</p>";
          document.getElementById("wall").appendChild(card);
        });
      }
      else {
          alert("You done goofed");
      }
  }
  xhr.send();
}


function imgError(image) {
  image.onerror = "";
  image.src = "../images/halloweenPlaceholder.png";
  return true;
}
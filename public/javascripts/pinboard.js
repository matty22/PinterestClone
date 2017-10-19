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
          card.setAttribute('id', element._id);
          card.innerHTML = "<img class='pinImage' src='" + element.image_url +"' onError='imgError(this)'><p>" + element.title + "</p><input type='button' value='Delete pin' onclick='deletePin(event)'>";
          document.getElementById("wall").appendChild(card);
        });
      }
      else {
          alert("You done goofed");
      }
  }
  xhr.send();
}


function deletePin(event) {
  
  let deleteObject = {};
  deleteObject._id = event.srcElement.parentNode.id;
  
  let json = JSON.stringify(deleteObject);
  let xhr = new XMLHttpRequest();
  xhr.open('DELETE', 'http://localhost:3000/pins/pinboard/delete', true);
  xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
  xhr.onload = function() {
    if (xhr.status === 200) {
      document.getElementById(deleteObject._id).remove();
    }
    else {
      alert("You done goofed");
    }
  }
  xhr.send(json);
}

function imgError(image) {
  image.onerror = "";
  image.src = "../images/halloweenPlaceholder.png";
  return true;
}
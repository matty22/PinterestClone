function addPin() {
  let pinObject = {};
  pinObject.title = document.getElementById('title').value;
  pinObject.image_url = document.getElementById('url').value;
  pinObject.ownerId = sessionStorage.getItem('userId');

  if (pinObject.title && pinObject.image_url) {
    let json = JSON.stringify(pinObject);
    let xhr = new XMLHttpRequest();

    xhr.open('POST', 'http://localhost:3000/pins/add/data', true);
    xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
    xhr.onload = function() {
        if (xhr.status === 200) {
          window.location = '/pins/pinboard';
        }
        else {
            alert("You done goofed");
        }
    }
    xhr.send(json);
  } else {
    document.getElementById('warning').style.display = 'inline-block';
  }
}
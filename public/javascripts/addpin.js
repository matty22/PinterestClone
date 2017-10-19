function addPin() {
  let pinObject = {};
  pinObject.title = document.getElementById('title').value;
  pinObject.image_url = document.getElementById('url').value;
  pinObject.owner = sessionStorage.getItem('userId');

  if (pinObject.title && pinObject.image_url) {
    window.location = '/pins/pinboard';
  } else {
    document.getElementById('warning').style.display = 'inline-block';
  }
}
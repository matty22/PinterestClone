function addPin() {
  let pinObject = {};
  pinObject.title = document.getElementById('title').value;
  pinObject.image_url = document.getElementById('url').value;
  pinObject.owner = sessionStorage.getItem('userId');
  
  console.log(pinObject);
}
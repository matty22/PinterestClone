
// LOTS TO DO HERE

// Function that creates new User object and sends it to Mongo
function userEdited() {
  // Will have to grab the user email address out of localstorage

  let userObj = {};

  // userObj.email = localStorage.getItem('email');
  userObj.name = document.getElementById('name').value;
  userObj.city = document.getElementById('city').value;
  userObj.state = document.getElementById('state').value;

  if (userObj.email) {
    // Setup data object to send to Express route
    var json = JSON.stringify(userObj);
    var xhr = new XMLHttpRequest();
    xhr.open('PUT', 'http://localhost:3000/users/edit/data', true);
    xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
    xhr.onload = function() {
        if (xhr.status === 200) {
          // document.cookie = 'name=validLogin; path=/;'
          // let redirectURL = JSON.parse(xhr.responseText);
          // window.location = redirectURL.redirect;
          window.location = '/books'
        }
        else {
            console.error("you suck: signup.js page");
        }
    }
    xhr.send(json);
  }
}
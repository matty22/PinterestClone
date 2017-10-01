
// LOTS TO DO HERE

// Function that edits a user profile
function userEdited() {

  let user = JSON.parse(sessionStorage.getItem('user'));
  let userObj = {};

  userObj.email = user[0].email;
  userObj.name = document.getElementById('name').value;
  userObj.city = document.getElementById('city').value;
  userObj.state = document.getElementById('state').value;

  console.log(userObj);

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
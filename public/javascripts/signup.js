// Function that creates new User object and sends it to Mongo
function userCreated() {
  
  let userObj = {};

  userObj.email = document.getElementById('email').value;
  userObj.password = document.getElementById('password').value;
  userObj.name = document.getElementById('name').value;
  userObj.city = document.getElementById('city').value;
  userObj.state = document.getElementById('state').value;
  userObj.requests = ['no requests']; 

  if (userObj.email && userObj.password) {
    // Setup data object to send to Express route
    var json = JSON.stringify(userObj);
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:3000/users/signup/data', true);
    xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
    xhr.onload = function() {
        if (xhr.status === 200) {
          console.log(xhr.responseText);
          localStorage.setItem('user', xhr.responseText)
          window.location = '/books'
        }
        else {
            console.error("you suck: signup.js page");
        }
    }
    xhr.send(json);
  } else {
    document.getElementById('invalidLogin').style.display = 'inline-block';
  }
}
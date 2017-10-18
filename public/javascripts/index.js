// On page load, grab all the books available in the database and display to user
window.onload = function() {
  let xhr = new XMLHttpRequest();

  xhr.open('GET', 'http://localhost:3000/pins/all', true);
  xhr.onload = function() {
      if (xhr.status === 200) {
    
      }
      else {
          alert("You done goofed");
      }
  }
  xhr.send();
}

// Function runs when user signs into Google
function onSignIn(googleUser) {
  user_token = googleUser.getAuthResponse().id_token;
  sessionStorage.setItem("userId", googleUser.getBasicProfile().getId());
  console.log(googleUser.getBasicProfile().getId());
  if (googleUser) {
    document.getElementById('pinboardButton').style.display = 'inline-block';
  }
}
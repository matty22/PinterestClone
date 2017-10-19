
// Function runs when user signs into Google
function onSignIn(googleUser) {
  user_token = googleUser.getAuthResponse().id_token;
  sessionStorage.setItem("userId", googleUser.getBasicProfile().getId());
  if (googleUser) {
    document.getElementById('pinboardButton').style.display = 'inline-block';
  }
}
// On page load, grab the user's pending lend requests and display them on the screen
window.onload = function() {
  let user = JSON.parse(localStorage.getItem('user'));
  document.getElementById('numberOfLends').innerHTML = user.requests.length - 1;  
  let requestArray = user.requests;

  // Filter out unique values into a Set, then turn that back into an array
  let bookArray = new Set(requestArray);
  let realArray = Array.from(bookArray);
  realArray.splice(0, 1);
  console.log(realArray);
  
  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://localhost:3000/books/approve/data', true);
  xhr.onload = function() {
      if (xhr.status === 200) {
        // Grab all the books from dB and then filter out the ones that match the logged in user's pending requests
        let responseArray = JSON.parse(xhr.responseText);
        let ownerRequests = responseArray.filter(function(element) {
          if (realArray.indexOf(element._id) >= 0) {
            return element;
          }
        });

        // Display those filtered books to the user
        ownerRequests.forEach(function(element) {
          let cardChild = document.createElement("div");
          cardChild.innerHTML = "<img class='bookImage' src='" + element.image_url +"'><input id='" + element._id + "'type='button' value='Approve Request' onclick='approveRequest(event)'>";
          document.getElementById("library").appendChild(cardChild);
        });
      }
      else {
          alert("You done goofed");
      }
  }
  xhr.send();
}

// Function to remove a pending request from book owner tally
function approveRequests(event) {
  console.log('Request approved');
}
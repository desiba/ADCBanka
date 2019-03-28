//get a reference to the element
var signUpModal = document.getElementById('signUpModal');

var signInModal = document.getElementById('signInModal');

var signUpBtn = document.getElementById('signupbtn');

var signInBtn = document.getElementById('signinbtn');

var close1 = document.getElementsByClassName("close")[0];
var close2 = document.getElementsByClassName("close")[1];

var modal = document.getElementsByClassName("modal");

//add event listener
signUpBtn.addEventListener('click', function(event){
  //window.location.href='Students.html';
  signUpModal.style.display = "block";
});


 signInBtn.addEventListener('click', function(event){
  //window.location.href='Students.html';
  signInModal.style.display = "block";
});


close1.onclick = function() {
        signUpModal.style.display = "none";
  }

close2.onclick = function() {
        signInModal.style.display = "none";
  }


  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }




//get a reference to the element
var signUpModal = document.getElementById('signUpModal');

var signInModal = document.getElementById('signInModal');

var signUpBtn = document.getElementById('signupbtn');

var signInBtn = document.getElementById('signinbtn');

var close1 = document.getElementsByClassName("close")[0];
var close2 = document.getElementsByClassName("close")[1];

var modal = document.getElementsByClassName("modal");




function openCity(evt, tabId) {
  var tabcontent;

    tabcontent = document.getElementsByClassName("tab-pane");


    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    document.getElementById(tabId).style.display = "block";


}

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

  function responsiveNav(){
    var x = document.getElementById("myNavbar");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }


  function checkUserTransactionForm() {
    // Fetching values from all input fields and storing them in variables.
    var transactiontype = document.getElementById("transact-type").value;
    var accountnumber = document.getElementById("accountnumber").value;
    var benefiary = document.getElementById("beneficiary").value;
    var discription = document.getElementById("discription").value;
    //Check input Fields Should not be blanks.
    if (transactiontype == '' || accountnumber == '' || benefiary == '' || discription == '') {
    alert("Fill All Fields");
    } else {
    //Notifying error fields
    var username1 = document.getElementById("username");
    var password1 = document.getElementById("password");
    var email1 = document.getElementById("email");
    var website1 = document.getElementById("website");
    //Check All Values/Informations Filled by User are Valid Or Not.If All Fields Are invalid Then Generate alert.
    if (username1.innerHTML == 'Must be 3+ letters' || password1.innerHTML == 'Password too short' || email1.innerHTML == 'Invalid email' || website1.innerHTML == 'Invalid website') {
    alert("Fill Valid Information");
    } else {
    //Submit Form When All values are valid.
    document.getElementById("usertransactionform").submit();
    }
    }
    }


    // AJAX code to check input field values when onblur event triggerd.
function validate(field, query) {
  var xmlhttp;
  if (window.XMLHttpRequest) { // for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp = new XMLHttpRequest();
  } else { // for IE6, IE5
  xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.onreadystatechange = function() {
  if (xmlhttp.readyState != 4 && xmlhttp.status == 200) {
  document.getElementById(field).innerHTML = "Validating..";
  } else if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
  document.getElementById(field).innerHTML = xmlhttp.responseText;
  } else {
  document.getElementById(field).innerHTML = "Error Occurred. <a href='index.php'>Reload Or Try Again</a> the page.";
  }
  }
  //xmlhttp.open("GET", "validation.php?field=" + field + "&query=" + query, false);
  //xmlhttp.send();
  }


`use strict`;


var regexNotNumAndChar = /[0-9!@#\  $%\^\&*\)\(+=._-]/;
var regexContact = /[+][9][1]\s[7-9][0-9]{4}\s[0-9]{5}/;
var regexChar = /[a-zA-Z]/;
var regexCap = /[A-Z]/;
var regexAtDot = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;

/////////////////////////////////////////////////////////////////////////
/*                             Form Validation                         */
/////////////////////////////////////////////////////////////////////////

function validDetails() {
  var fName = document.getElementById("fname").value;
  var lName = document.getElementById("lname").value;
  var contact = document.getElementById("contact").value;
  var email = document.getElementById("email").value;

  /*----------------first & last name validation------------------------*/
  if (fName == "" && lName == "") {
    alert("name field cannot be empty");
    document.getElementById("errorfname").style.color = "red";
    document.getElementById("errorfname").style.visibility = "visible";
    document.getElementById("errorlname").style.color = "red";
    document.getElementById("errorlname").style.visibility = "visible";
    return false;
  } else if (regexNotNumAndChar.test(fName) && regexNotNumAndChar.test(lName)) {
    alert("name can not be a number or special character");
    document.getElementById("errorfname").style.color = "red";
    document.getElementById("errorfname").style.visibility = "visible";
    document.getElementById("errorlname").style.color = "red";
    document.getElementById("errorlname").style.visibility = "visible";
    return false;
  } else if (fName.length == 1 && lName.length == 1) {
    alert("name can not be a single character");
    document.getElementById("errorfname").style.color = "red";
    document.getElementById("errorfname").style.visibility = "visible";
    document.getElementById("errorlname").style.color = "red";
    document.getElementById("errorlname").style.visibility = "visible";
    return false;
  } else if (contact == "") {
    /*----------------contact number validation------------------------*/
    document.getElementById("errorfname").style.color = "white";
    document.getElementById("errorfname").style.visibility = "hidden";
    document.getElementById("errorlname").style.color = "white";
    document.getElementById("errorlname").style.visibility = "hidden";
    alert("Enter Contact no:");
    document.getElementById("errorcontact").style.color = "red";
    document.getElementById("errorcontact").style.visibility = "visible";
    return false;
  } else if (contact.length != 15) {
    alert("Please check contact no:");
    document.getElementById("errorcontact").style.color = "red";
    document.getElementById("errorcontact").style.visibility = "visible";
    return false;
  } else if (regexChar.test(contact)) {
    alert("Contact no: can not have characters");
    document.getElementById("errorcontact").style.color = "red";
    document.getElementById("errorcontact").style.visibility = "visible";
    return false;
  } else if (!regexContact.test(contact)) {
    alert("invalid contact no.");
    document.getElementById("errorcontact").style.color = "red";
    document.getElementById("errorcontact").style.visibility = "visible";
    return false;
  } else if (email == "") {
    /*---------------------email validation------------------------*/
    document.getElementById("errorcontact").style.color = "white";
    document.getElementById("errorcontact").style.visibility = "hidden";
    alert("Please enter email");
    document.getElementById("erroremail").style.color = "red";
    document.getElementById("erroremail").style.visibility = "visible";
    return false;
  } else if (regexCap.test(email)) {
    alert("email don't have capital letters");
    document.getElementById("erroremail").style.color = "red";
    document.getElementById("erroremail").style.visibility = "visible";
    return false;
  } else if (!regexAtDot.test(email)) {
    alert("Enter valid email");
    document.getElementById("erroremail").style.color = "red";
    document.getElementById("erroremail").style.visibility = "visible";
    return false;
  }
  document.getElementById("erroremail").style.color = "white";
  document.getElementById("erroremail").style.visibility = "hidden";
  return true;
}

/////////////////////////////////////////////////////////////////////
/*                            JSON                                 */
/////////////////////////////////////////////////////////////////////

function jsonFile() {
  if (validDetails()) {
    const userDetails = {
      "First Name": document.getElementById("fname").value,
      "Last Name": document.getElementById("lname").value,
      "Contact No:": document.getElementById("contact").value,
      "Email:": document.getElementById("email").value,
    };

    for (var i in userDetails) {
      document.getElementById("tJsonView").innerHTML +=
        i + ` : ` + userDetails[i] + `<br>`;
    }
  }
}

///////////////////////////////////////////////////////////////////
/*                        DARK MODE TOGGLE                       */
///////////////////////////////////////////////////////////////////



function darkMode() {
  let flag = localStorage.getItem('flag');
  if (flag == 0) {
    document.getElementById("body").style.backgroundColor = "#15212B";
    document.getElementById("body").style.color = "white";
    document.getElementById("dbtn").value = "Light Mode";
    localStorage.setItem('flag', '1');
  } else {
    document.getElementById("body").style.backgroundColor = "white";
    document.getElementById("body").style.color = "black";
    document.getElementById("dbtn").value = "Dark Mode";
    localStorage.setItem('flag', '0');
  }
}


///////////////////////////////////////////////////////////////////
/*                        CLEAR JSON VIEW                        */
///////////////////////////////////////////////////////////////////

document.addEventListener('DOMContentLoaded', clearJsonView);

function clearJsonView() {

  const listenClick = document.getElementById('clearClick');

  listenClick.addEventListener('click', function clearJs(e) {
    document.getElementById("tJsonView").textContent = "";
    e.preventDefault();
  });
}

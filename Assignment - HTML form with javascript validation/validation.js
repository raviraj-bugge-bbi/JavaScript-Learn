`use strict`;

var regexNotNumAndChar = /[0-9!@#\  $%\^\&*\)\(+=._-]/;
var regexContact = /[+][9][1]\s[7-9][0-9]{4}\s[0-9]{5}/g;
var regexChar = /[a-zA-Z]/;
var regexCap = /[A-Z]/;
var regexAtDot = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/g;

let valid;

function validDetails() {
  var fName = document.getElementById("fname").value;
  var lName = document.getElementById("lname").value;
  var contact = document.getElementById("contact").value;
  var email = document.getElementById("email").value;


  /////////////////////////////////////////////////////////////////
  /*----------------first name validation------------------------*/

  if (fName == "") {
    alert("name field cannot be empty");
    eFname.style.color = "red";
    return false;
  } else if (regexNotNumAndChar.test(fName)) {
    alert("name can not be a number or special character");
    return false;
  } else if (fName.length == 1) {
    alert("name can not be a single character");
    return false;
  }

  // /////////////////////////////////////////////////////////////////
  // /*----------------last name validation------------------------*/

  if (lName == "") {
    alert("last name field cannot be empty");
    return false;
  } else if (regexNotNumAndChar.test(lName)) {
    alert("last name can not be a number or special character");
    return false;
  } else if (lName.length == 1) {
    alert("last name can not be a single character");
    return false;
  }

  /////////////////////////////////////////////////////////////////
  /*----------------contact no: validation------------------------*/

  if (contact == "") {
    alert("Enter Contact no:");
    return false;
  } else if (contact.length != 15) {
    alert("Please check contact no:");
    return false;
  } else if (regexChar.test(contact)) {
    alert("Contact no: can not have characters");
    return false;
  } else if (!regexContact.test(contact)) {
    alert("invalid");
    return false;
  }

  /////////////////////////////////////////////////////////////////
  /*---------------------email validation------------------------*/

  if (email == "") {
    alert("Please enter email");
    return false;
  } else if (regexCap.test(email)) {
    alert("email don't have capital letters");
    return false;
  } else if (!regexAtDot.test(email)){
    alert("Enter valid email");
    return false;
  }

}

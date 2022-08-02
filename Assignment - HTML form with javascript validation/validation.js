`use strict`;

var regexNotNumAndChar = /[0-9!@#\  $%\^\&*\)\(+=._-]/;
var regexContact = /[+][9][1]\s[7-9][0-9]{4}\s[0-9]{5}/;
var regexChar = /[a-zA-Z]/;
var regexCap = /[A-Z]/;
var regexAtDot = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;

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
    document.getElementById("errorfname").style.color = "red";
    document.getElementById("errorfname").style.visibility = "visible";
    return false;
  } else if (regexNotNumAndChar.test(fName)) {
    alert("name can not be a number or special character");
    document.getElementById("errorfname").style.color = "red";
    document.getElementById("errorfname").style.visibility = "visible";
    return false;
  } else if (fName.length == 1) {
    alert("name can not be a single character");
    document.getElementById("errorfname").style.color = "red";
    document.getElementById("errorfname").style.visibility = "visible";
    return false;
  }

  // /////////////////////////////////////////////////////////////////
  // /*----------------last name validation------------------------*/
  else if (lName == "") {
    document.getElementById("errorfname").style.color = "white";
    document.getElementById("errorfname").style.visibility = "hidden";
    alert("last name field cannot be empty");
    document.getElementById("errorlname").style.color = "red";
    document.getElementById("errorlname").style.visibility = "visible";
    return false;
  } else if (regexNotNumAndChar.test(lName)) {
    alert("last name can not be a number or special character");
    document.getElementById("errorlname").style.color = "red";
    document.getElementById("errorlname").style.visibility = "visible";
    return false;
  } else if (lName.length == 1) {
    alert("last name can not be a single character");
    document.getElementById("errorlname").style.color = "red";
    document.getElementById("errorlname").style.visibility = "visible";
    return false;
  }

  //////////////////////////////////////////////////////////////////
  /*----------------contact no: validation------------------------*/
  else if (contact == "") {
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
  }

  /////////////////////////////////////////////////////////////////
  /*---------------------email validation------------------------*/
  else if (email == "") {
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
}

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
/*                            json                                 */
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

function jsonFile() {
  var fName = document.getElementById("fname").value;
  var lName = document.getElementById("lname").value;
  var contact = document.getElementById("contact").value;
  var email = document.getElementById("email").value;

  /////////////////////////////////////////////////////////////////
  /*----------------first name validation------------------------*/
  if(validDetails()){
    
  }
  if (fName == "") {
    alert("name field cannot be empty");
    document.getElementById("errorfname").style.color = "red";
    document.getElementById("errorfname").style.visibility = "visible";
    return false;
  } else if (regexNotNumAndChar.test(fName)) {
    alert("name can not be a number or special character");
    document.getElementById("errorfname").style.color = "red";
    document.getElementById("errorfname").style.visibility = "visible";
    return false;
  } else if (fName.length == 1) {
    alert("name can not be a single character");
    document.getElementById("errorfname").style.color = "red";
    document.getElementById("errorfname").style.visibility = "visible";
    return false;
  }

  // /////////////////////////////////////////////////////////////////
  // /*----------------last name validation------------------------*/
  else if (lName == "") {
    document.getElementById("errorfname").style.color = "white";
    document.getElementById("errorfname").style.visibility = "hidden";
    alert("last name field cannot be empty");
    document.getElementById("errorlname").style.color = "red";
    document.getElementById("errorlname").style.visibility = "visible";
    return false;
  } else if (regexNotNumAndChar.test(lName)) {
    alert("last name can not be a number or special character");
    document.getElementById("errorlname").style.color = "red";
    document.getElementById("errorlname").style.visibility = "visible";
    return false;
  } else if (lName.length == 1) {
    alert("last name can not be a single character");
    document.getElementById("errorlname").style.color = "red";
    document.getElementById("errorlname").style.visibility = "visible";
    return false;
  }

  //////////////////////////////////////////////////////////////////
  /*----------------contact no: validation------------------------*/
  else if (contact == "") {
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
  }

  /////////////////////////////////////////////////////////////////
  /*---------------------email validation------------------------*/
  else if (email == "") {
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

  const userDetails = {
    "First Name": document.getElementById("fname").value,
    "Last Name": document.getElementById("lname").value,
    "Contact No:": document.getElementById("contact").value,
    "Email:": document.getElementById("email").value,
  };

  for (var i in userDetails) {
    document.getElementById("tjsonview").innerHTML +=
      i + ` : ` + userDetails[i] + `<br>`;
  }

  document.getElementById("td1").innerHTML = userDetails["First Name"];
  document.getElementById("td2").innerHTML = userDetails["Last Name"];
  document.getElementById("td3").innerHTML = userDetails["Contact No:"];
  document.getElementById("td4").innerHTML = userDetails["Email"];
  document.getElementById("td11").innerHTML = "First Name:";
  document.getElementById("td22").innerHTML = "Second Name:";
  document.getElementById("td33").innerHTML = "Contact No.:";
  document.getElementById("td44").innerHTML = "Email:";

  document.getElementById("tablecss").style.border = "1px solid black";
}

function darkMode() {
  document.getElementById("body").style.backgroundColor = "black";
  document.getElementById("body").style.color = "white";
  document.getElementById("next").style.backgroundColor = "black";
  document.getElementById("next").style.color = "white";
}

function lightMode() {
  document.getElementById("body").style.backgroundColor = "white";
  document.getElementById("body").style.color = "black";
  document.getElementById("next").style.backgroundColor = "white";
  document.getElementById("next").style.color = "white";
}


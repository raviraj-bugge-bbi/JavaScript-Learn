`use strict`;

// var contact = document.getElementById('contact').value;
// var email = document.getElementById('email').value;

var regexNotNumAnd = /[0-9!@#\$%\^\&*\)\(+=._-]/;

function validDetails(){

    var fName = document.getElementById('fname').value;
    var lName = document.getElementById('lname').value;
    
    if(fName == "" || fName == null){
         alert("name field cannot be empty");
       return false;
    }else if(regexNotNumAnd.test(fName)){
        alert("name can not be a number or special character");
        return false;
    }else if(fName.length == 1){
         alert("name can not be a single character");
         return false;
    }

    if(lName == "" || lName == null){
        alert("last name field cannot be empty");
      return false;
   }else if(regexNotNumAnd.test(lName)){
       alert("last name can not be a number or special character");
       return false;
   }else if(lName.length == 1){
        alert("last name can not be a single character");
        return false;
   }

   

}
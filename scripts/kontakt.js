/*
FILE NAME: kontakt.js

WRITTEN BY: Astrid Vik

WHEN: October 2015

PURPOSE: javascript that validates form input

 
*/ 

// function that checks for empty fields in the form 

function validateForm() {
    // gets elements from html by id
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var message = document.getElementById("message");
    
    // checks empty form fields 
    if (name.value.length == 0) {
        alert("Alle feltene må fylles ut");
    name.focus();
    return false;
    }
    if (email.value.length == 0) {
        alert("Alle feltene må fylles ut");
    name.focus();
    return false;
    }
    if (message.value.length == 0) {
        alert("Alle feltene må fylles ut");
    name.focus();
    return false;
    }
}









 
 
/*
FILE NAME: kontakt.js
WRITTEN BY: Astrid Vik
WHEN: October 2015
PURPOSE: javascript that autofills email with name, subject and message
*/

// function autofills name, subject, and message into email

function autofillEmail() {
		console.log("autoFill ran");
          var name = document.getElementById("name").value;
          var subject = document.getElementById("subject").value;
          var message = document.getElementById("message").value;
          var webmasterChoice = document.getElementById("webmaster");
          if (webmasterChoice.checked){
            var receiver = "webmaster@saftogsuse.no";
			console.log("WebM")
          } else{
            var receiver = "kontakt@saftogsuse.no";
			console.log("SS")
          }
		
          var body = encodeURI(message)+"%0D%0A"+"%0D%0A"+encodeURI(name);
			console.log(body)
          window.location.href='mailto:'+receiver+'?subject='+encodeURI(subject)+'&body='+body;
        return false;
        }
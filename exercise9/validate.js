function Form() { 
  var formbox = document.getElementById("formbox");
  formbox.addEventListener("submit", function() { 
    form1.validateAll();
    form1.validateEmail();
    form1.validateUrl();
  });
}

Form.prototype.validateEmail = function(email) {
  var email = document.getElementById("email")
  var regex = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/
  var match = regex.test(email.value);
  if (match == false && email.value != "" ) {
      alert("Please use the proper email format")
  }
}

Form.prototype.validateUrl = function(homepage) {
  var url = document.getElementById("homepage")
  var regex = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/
  var match = regex.test(url.value);
  if (match==false && url.value != "" ) {
    alert("Please use proper Url format")
  }
}

Form.prototype.validateAll = function(elements) {
 var email = document.getElementById("email");
var url = document.getElementById("homepage");
  if (document.forms.loginid.value == "") {
    alert("login Id can't be empty")
    event.preventDefault();
  } else if(document.forms.email.value == "") {
    alert("Email can't be empty")
    event.preventDefault();
  } else if(document.forms.name.value == "") {
    alert("Name can't be empty")
    event.preventDefault();
  } else if (document.forms.homepage.value == ""){
    alert("Homepage can't be empty")
    event.preventDefault();
  } else if (document.forms.aboutme.value == "") {
    alert("Please check your aboutme filed")
    event.preventDefault();
  } else if ((document.forms.aboutme.value).length < 50 ) {
    alert("Please the string lenght of the aboutme field must be longer than 50 characters..")
    event.preventDefault();
  } else if (document.getElementById("notify").checked == false ) {
    alert("Please check the notify field")
    event.preventDefault();
  } 

  // return true;
}
var form1 = new Form()

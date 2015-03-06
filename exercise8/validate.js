function Form() {
  var formbox = document.getElementById("formbox");
  formbox.addEventListener("submit", function() {   
    form1.validateAll();
  });
}
Form.prototype.validateLenght = function (lenght1) {
  this.lenght1 = lenght1;
  if ((lenght1.length) < 50) {
    alert("String lenght of the aboutme field must not be less than 50.")
  }
}
Form.prototype.validateAll = function(elements) {
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
}
var form1 = new Form()

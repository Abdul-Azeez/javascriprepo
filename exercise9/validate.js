function Form() {
  
}

Form.prototype.validateLenght = function (lenght1) {
	this.lenght1 = lenght1;
	if ((lenght1.length) < 50) {
		alert("string lenght must not be less than 50.")
	}
}

Form.prototype.validateEmail = function(email) {
  var email = document.getElementById("email")
  var regex = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/
  var match = regex.test(email.value);
  if (match == false) {
      alert("Please use the proper email format")
  }
}

Form.prototype.validateUrl = function(homepage) {
  var url = document.getElementById("homepage")
  var regex = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/
  var match = regex.test(url.value);
  if (match==false) {
    alert("Please use proper Url format")
  }
}

Form.prototype.validateAll = function(elements) {
  var elements = document.forms.elements;
  for (var i = 0; i < elements.length - 1; i++) { 
    if (forms.elements[i].value == "" || forms.elements[i].value== null) {
      if(forms.elements[i].id !== "timezone" && forms.elements[i].id !== "notify") {
        alert(forms.elements[i].id+ "  can't be empty");
      }  
      if (forms.elements[i].id == "notify") {
        this.validateCheckbox();
      }
      if (forms.elements[i].id == "aboutme") {
        this.validateAboutme();
      }
      if (forms.elements[i].id == "email") {
        this.validateEmail("email")
      }
      if (forms.elements[i].id == "url") {
        this.validateUrl("url")
      }
    }
  }
}

Form.prototype.validateCheckbox = function() {
  var notify = document.getElementById("notify")
  if (notify.checked==false ) {
    alert("Please click the checkbox")
  }
}

Form.prototype.validateAboutme = function() {
  var aboutme = document.getElementById("aboutme");
  this.validateLenght("aboutme");
}

var form1 = new Form()
var form1 = new Form()
var formbox = document.getElementById("formbox");
formbox.addEventListener("submit", function() { form1.validateAll()}, true );
// form1.print()
function Form() {
}

Form.prototype.validateLenght = function (lenght1) {
  this.lenght1 = lenght1;
  if ((lenght1.length) < 50) {
    alert("String lenght of the aboutme field must not be less than 50.")
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
var formbox = document.getElementById("formbox");
formbox.addEventListener("submit", function() { form1.validateAll()}, true );
// form1.print()
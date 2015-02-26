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
        alert("Please click the checkbox")
      }
      if (forms.elements[i].id == "aboutme") {
        var aboutme = document.getElementById("aboutme");
        console.log(aboutme)
        this.validateLenght("aboutme");
      }
    }
  }
}

var form1 = new Form()
var submit = document.getElementById("submit");
submit.addEventListener("click", function() { form1.validateAll()}, true );
// form1.print()
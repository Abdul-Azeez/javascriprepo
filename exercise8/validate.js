function Form() {
  var formbox = document.getElementById("formbox");
  formbox.addEventListener("submit", function() { form1.validateAll(), false});
}

Form.prototype.validateAll = function() {
  var elements = document.querySelectorAll('input[type=text]');
  var aboutme = document.getElementById('aboutme')
  var notify = document.getElementById('notify');
  var number = elements.length;
  returnval = true;
  for (var i = 0; i < elements.length; ) {
    if (elements[i].value == "") {
      alert(elements[i].id + " can't be empty");
      event.preventDefault();
      returnval = false;
      break; 
    } else {
      returnval = true;
      i++
    }
  }

  if (returnval) { returnval= this.validateAboutme(); }
  if (returnval) { returnval= this.validateCheckbox(); }
//   if (returnval ) {
//     if (this.validateCheckbox()) {
//       returnval = true;
//     } else {
//       event.preventDefault();
//       returnval = false;
//     }
//   }
console.log(returnval);
  return returnval;
 }


Form.prototype.validateCheckbox = function() {
  var notify = document.getElementById("notify")
  if (notify.checked==false ) {
    alert("Please click the checkbox");
    event.preventDefault();
    return false;
  } else {
  return true;
  }
}

Form.prototype.validateAboutme = function() {
  var aboutme = document.getElementById("aboutme");
  if (aboutme.value == "" || aboutme.value == null) {
    alert("The About me cannot be empty");
    event.preventDefault();
    return false;
  }
  else if (aboutme.value != "" && aboutme.value.length < 50) {
    alert("String lenght must be greater than 50");
    event.preventDefault()
    return false;
  }
  else {
    return true;
  };
}

var form1 = new Form()
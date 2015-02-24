function Colour() {

}

Colour.prototype.setAllCheckBoxes = function(FormName, FieldName, CheckValue) {

  if (!document.forms[FormName]) {
    return;
  }
  var objCheckBoxes = document.forms[FormName].elements[FieldName];
  if (!objCheckBoxes) {
    return;
  }
  var countCheckBoxes = objCheckBoxes.length;
  if (!objCheckBoxes) {
    objCheckBoxes.checked = CheckValue;
  }
  else
    // set the check value for all check boxes
    for(var i = 0; i < countCheckBoxes; i++) {

      objCheckBoxes[i].checked = CheckValue;
    }
  }

var setOfColours = new Colour();
var button = document.getElementById("button");
var button1 = document.getElementById("button1");
button.addEventListener("click",function(){ setOfColours.setAllCheckBoxes('myForm','myCheckbox', true)})
button1.addEventListener("click", function() { setOfColours.setAllCheckBoxes('myForm','myCheckbox', false)})
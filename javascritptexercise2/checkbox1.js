function ToggleCheck() {

}

ToggleCheck.prototype.checkBoxHandler = function(FormName, FieldName, CheckValue) {
  var checkBoxElements = document.forms[FormName].elements[FieldName];
  var noOfElements = checkBoxElements.length;
  if (!document.forms[FormName]) {
    return;
  }  
  if (!checkBoxElements) {
    return;
  } else {
    // set the check value for all check boxes
    for(var i = 0; i < noOfElements; i++) {
      checkBoxElements[i].checked = CheckValue;
    }
  }
}

var setOfToggleChecks = new ToggleCheck();
var button = document.getElementById("button");
var button1 = document.getElementById("button1");
button.addEventListener("click",function(){ setOfToggleChecks.checkBoxHandler('myForm','myCheckbox', true)})
button1.addEventListener("click", function() { setOfToggleChecks.checkBoxHandler('myForm','myCheckbox', false)})
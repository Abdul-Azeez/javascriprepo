function ToggleCheck() {

}

ToggleCheck.prototype.checkBoxHandler = function(FormName, FieldName, CheckValue) {
  var checkBoxElements = document.forms[FormName].elements[FieldName];
  var noOfElements = checkBoxElements.length;
  if (this.checkFormName && this.checkFormElementName) {
    // set the check value for all check boxes
    for(var i = 0; i < noOfElements; i++) {
      checkBoxElements[i].checked = CheckValue;
    }
  }
}
ToggleCheck.prototype.checkFormName = function(FormName) {
    if (!document.forms[FormName]) {
    return;
  } 
} 
ToggleCheck.prototype.checkFormElementName = function(FieldName) {
    if (!checkBoxElements) {
    return;
  }
}


var setOfToggleChecks = new ToggleCheck();
var button = document.getElementById("button");
var button1 = document.getElementById("button1");
button.addEventListener("click",function(){ setOfToggleChecks.checkBoxHandler('myForm','myCheckbox', true)})
button1.addEventListener("click", function() { setOfToggleChecks.checkBoxHandler('myForm','myCheckbox', false)})
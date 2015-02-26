function CheckBox() {

}
CheckBox.prototype.chkControl = function() {
  var total = 0;
  var days = [];
  var message = ""
  var none = document.getElementById('none');
  none.checked = false;
  for (var i = 0; i < document.myForm.myCheckbox.length; i++) {
    total = total + 1;
    if (document.myForm.myCheckbox[i].checked) {
      day = document.myForm.myCheckbox[i].id
      days.push(day);
      if(total > 3) {
        alert("you can choose more than 3 days. You have already choosen" + "  " + days[0]+" "+ days[1]+" "+ days[2])
        document.getElementById(days[3]).checked = false;
      } 
    } else {
       total--;
  }
     
      // days.pop(day);
  } 
}

CheckBox.prototype.noCheckBox= function(FormName, FieldName)
{
  var nonevalue = document.getElementById("none")
  nonevalue.checked = false;
  if(!document.forms[FormName]) {
    return;
  }
  var objCheckBoxes = document.forms[FormName].elements[FieldName];
  if(!objCheckBoxes) {
    return;
  }
 var countCheckBoxes = objCheckBoxes.length;
}
// // Unchecked all the documents when none is clicked//
CheckBox.prototype.uncheckAll = function () {
  if(document.getElementById('none').checked == true) {
    countCheckBoxes = 0;
    var inputFields = document.getElementsByTagName("input");
    for (var i = 0; i < 7; i++) {
      inputFields[i].checked = false;
    }
  }
}

CheckBox.prototype.checkAll = function() {
  this.noCheckBox('myForm', 'myCheckbox');
  this.chkControl();
}
var checkBox1 = new CheckBox();
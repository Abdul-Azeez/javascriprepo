function Table() {
}

Table.prototype.addRow = function() {
  var tabObj = document.getElementById('tableView');
  var lastRow = tabObj.rows.length;
  var rowObj = tabObj.insertRow(lastRow);
  rowObj.id = "row"+rowObj;
  var cell1 = rowObj.insertCell(0);
  var textName = document.createElement('input');
  textName.type = 'text';
  textName.id = "name"+lastRow;
  cell1.appendChild(textName);
  var cell2 = rowObj.insertCell(1);
  var textEmail = document.createElement('input');
  textEmail.type = 'text';
  textEmail.id = "email"+ lastRow;
  rowObj.id = 'row'+lastRow;
  cell2.appendChild(textEmail);
  var cell3 = rowObj.insertCell(2);
  cell3.innerHTML = "<span id='editSave"+lastRow+"'><span class='pointer' ><button id='save"+lastRow+"' onclick='Table1.saveRow("+lastRow+");' >Save</button></span></span> / <span class='pointer'><button id='deleteRow"+lastRow+"'  onclick='Table1.deleteRow("+lastRow+");'>Delete</button></span>";
  return lastRow;
}

Table.prototype.saveRow= function(num) {

this.getNameValue(num);
this.getEmailValue(num);
document.getElementById("editSave"+num).innerHTML = "<span class='pointer' ><button id='edit"+num+"' onclick='Table1.editRow("+num+");'>Edit</button></span>";
}

Table.prototype.getNameValue = function(num) {
  var nameNode = document.getElementById('name'+num);
  var nameParent = nameNode.parentNode;
  console.log(nameParent)
  var namevalue = nameNode.value;
  nameParent.removeChild(nameNode);
  var textName = document.createElement('span');
  textName.id = "name"+num;
  textName.innerHTML = namevalue;
  nameParent.appendChild(textName);
  return namevalue;
}

Table.prototype.getEmailValue = function(num) {
  var emailNode = document.getElementById('email'+num);
   console.log(emailNode);
  var emailParent = emailNode.parentNode;
  var emailValue = emailNode.value;
  console.log(emailValue);
  emailParent.removeChild(emailNode);
  var emailName = document.createElement('span');
  emailName.id = "email"+num;
  emailName.innerHTML = emailValue;
  emailParent.appendChild(emailName);
  return emailValue;

}

Table.prototype.editRow= function(num) {
  var nameNode = document.getElementById('name'+num);
  var nameParent = nameNode.parentNode;
  var namevalue = nameNode.innerHTML;
  nameParent.removeChild(nameNode);
  console.log(nameParent);
  var textName = document.createElement('input');
  textName.type = 'text';
  textName.id = "name"+num;
  textName.value = namevalue;
  nameParent.appendChild(textName);
  var emailNode = document.getElementById('email'+num);
  var emailParent = emailNode.parentNode;
  var emailValue = emailNode.innerHTML;
  console.log(emailParent);
  emailParent.removeChild(emailNode);
  var textEmail = document.createElement('input');
  textEmail.type = 'text';
  textEmail.id = "email"+num;
  textEmail.value = emailValue;
  emailParent.appendChild(textEmail);
  document.getElementById("editSave"+num).innerHTML = "<span class='pointer' ><button id='save"+num+"' onclick='Table1.saveRow("+num+");'> Save </button></span>";
}

Table.prototype.deleteRow =function(num) {
  var rowObj = document.getElementById('row'+num);
  rowObj.parentNode.removeChild(rowObj); 
  console.log(rowObj);
}
var Table1 = new Table();
var addRow = document.getElementById("addRow");
addRow.addEventListener('click', function(){ Table1.addRow();})

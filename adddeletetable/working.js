function Table() {
  // this.tabObj= document.getElementById('tableView');
  // lastRow = tabObj.rows.length;
  // rowObj = tabObj.insertRow(lastRow);
}

Table.prototype.addRow = function() {
  var tabObj = document.getElementById('tableView');
  var lastRow = tabObj.rows.length;
  var rowObj = tabObj.insertRow(lastRow);
  rowObj.id = "row"+rowObj;
  return [rowObj, lastRow];
  // rowObj.id = "row"+rowObj;
  // var cell1 = rowObj.insertCell(0);
  // var textName = document.createElement('input');
  // textName.type = 'text';
  // textName.id = "name"+lastRow;
  // cell1.appendChild(textName);
  // var cell2 = rowObj.insertCell(1);
  // var textEmail = document.createElement('input');
  // textEmail.type = 'text';
  // textEmail.id = "email"+ lastRow;
  // rowObj.id = 'row'+lastRow;
  // cell2.appendChild(textEmail);
  // var cell3 = rowObj.insertCell(2);
  // cell3.innerHTML = "<span id='editSave"+lastRow+"'><span class='pointer' ><button id='save"+lastRow+"' onclick='Table1.saveRow("+lastRow+");' >Save</button></span></span> / <span class='pointer'><button id='deleteRow"+lastRow+"'  onclick='Table1.deleteRow("+lastRow+");'>Delete</button></span>";
  // return lastRow;
}
Table.prototype.addNameCell = function() {
  rowObj = this.addRow();
  console.log(rowObj)
  var cell1 = rowObj[0].insertCell(0);
  var textName = document.createElement('input');
  textName.type = 'text';
  textName.id = "name"+rowObj[1];
  cell1.appendChild(textName);
}
 Table.prototype.addEmailCell= function() {
  rowObj = this.addRow();
  var cell2 = rowObj[0].insertCell(1);
  var textEmail = document.createElement('input');
  textEmail.type = 'text';
  textEmail.id = "email"+ rowObj[1];
  rowObj.id = 'row'+rowObj[1];
  cell2.appendChild(textEmail);
}
Table.prototype.addActioncell = function() {
  var cell3 = rowObj[1].insertCell(2);
  cell3.innerHTML = "<span id='editSave"+lastRow+"'><span class='pointer' ><button id='save"+lastRow+"' onclick='Table1.saveRow("+lastRow+");' >Save</button></span></span> / <span class='pointer'><button id='deleteRow"+lastRow+"'  onclick='Table1.deleteRow("+lastRow+");'>Delete</button></span>";
  return lastRow;
}
Table.prototype.addCell = function() {
  this.addNameCell();
  this.addEmailCell();
  this.addActioncell();
}

Table.prototype.saveRow= function(num) {

this.addCell(num);
this.getEmailValue(num);
document.getElementById("editSave"+num).innerHTML = "<span class='pointer' ><button id='edit"+num+"' onclick='Table1.editRow("+num+");'>Edit</button></span>";
}

Table.prototype.getNameValue = function(num) {
  var nameNode = document.getElementById('name'+num);
  var nameParent = nameNode.parentNode;
  var namevalue = nameNode.value;
  nameParent.removeChild(nameNode);
  var textName = document.createElement('span');
  textName.id = "name"+num
  textName.innerHTML = namevalue;
  if (namevalue != "") {
  nameParent.appendChild(textName);
  } else {
    alert("Please the Name Value must not be blank")
  }
  return namevalue;
}

Table.prototype.getEmailValue = function(num) {
  var emailNode = document.getElementById('email'+num);
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
}
var Table1 = new Table();
var addRow = document.getElementById("addRow");
addRow.addEventListener('click', function(){ Table1.addCell();})

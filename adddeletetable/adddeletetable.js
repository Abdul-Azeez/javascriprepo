function Table() {
}
Table.prototype.addRow = function() {
  var tabObj = document.getElementById('tableView');
  var lastRow = tabObj.rows.length;
  var rowObj = tabObj.insertRow(lastRow);
  var cell1 = rowObj.insertCell(0);
  var textName = document.createElement('input');
  textName.type = 'text';
  textName.id = "name"+lastRow;
  cell1.appendChild(textName);
  var cell2 = rowObj.insertCell(1);
  var textEmail = document.createElement('input');
  textEmail.type = 'text';
  textEmail.id = "email"+lastRow;
  cell2.appendChild(textEmail);
  var cell3 = rowObj.insertCell(2);
  rowObj.id = 'row'+lastRow;
  cell3.innerHTML = "<span id='editSave"+lastRow+"'><span class='pointer' id='save"+lastRow+"' onclick='Table1.saveRow("+lastRow+");'>Save</span></span> / <span class='pointer' onclick='deleteRow("+lastRow+");'>Delete</span>";
}

Table.prototype.saveRow= function(num) {
  var nameNode = document.getElementById('name'+num);
  var nameParent = nameNode.parentNode;
  var namevalue = nameNode.value;
  nameParent.removeChild(nameNode);
  var textName = document.createElement('span');
  textName.id = "name"+num;
  textName.innerHTML = namevalue;
  nameParent.appendChild(textName);
  var emailNode = document.getElementById('email'+num);
  var emailParent = emailNode.parentNode;
  var emailValue = emailNode.value;
  emailParent.removeChild(emailNode);
  var emailName = document.createElement('span');
  emailName.id = "email"+num;
  emailName.innerHTML = emailValue;
  emailParent.appendChild(emailName);
  document.getElementById("editSave"+num).innerHTML = "<span class='pointer' id='edit"+num+"' onclick='editRow("+num+");'>Edit</span>";
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
  emailParent.removeChild(emailNode);
  var textEmail = document.createElement('input');
  textEmail.type = 'text';
  textEmail.id = "email"+num;
  textEmail.value = emailValue;
  emailParent.appendChild(textEmail);
  document.getElementById("editSave"+num).innerHTML = "<span class='pointer' id='save"+num+"' onclick='saveRow("+num+");'>Save</span>";
}

Table.prototype.deleteRow =function(num) {
  var rowObj = document.getElementById('row'+num);
  rowObj.parentNode.removeChild(rowObj); 
}

var Table1 = new Table();
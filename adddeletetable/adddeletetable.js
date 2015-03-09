function Table() {
}
Table.prototype.addRow = function() {
  var tabObj = document.getElementById('tableView');
  var lastRow = tabObj.rows.length;
  var rowObj = tabObj.insertRow(lastRow);
  return { lastRow: lastRow,
            rowObj: rowObj,
  }
}

Table.prototype.createText = function() {
  var textName = document.createElement('input');
  textName.type = 'text';
  return textName;
}

Table.prototype.addCell = function() {
  tableObj = this.addRow();
  tableObj.rowObj.id = "row"+tableObj.rowObj;
  var cell1 = tableObj.rowObj.insertCell(0);
  textName = this.createText();
  textName.id = "name"+tableObj.lastRow;
  cell1.appendChild(textName);
  var cell2 = tableObj.rowObj.insertCell(1);
  textEmail = this.createText();
  textEmail.id = "email"+ tableObj.lastRow
  tableObj.rowObj.id = 'row'+tableObj.lastRow;
  cell2.appendChild(textEmail);
  var cell3 = tableObj.rowObj.insertCell(2);
  cell3.innerHTML = "<span id='editSave"+tableObj.lastRow+"'><span class='pointer' ><button id='save"+tableObj.lastRow+"' onclick='Table1.saveRow("+tableObj.lastRow+");' >Save</button></span></span> / <span class='pointer'><button id='deleteRow"+tableObj.lastRow+"'  onclick='Table1.deleteRow("+tableObj.lastRow+");'>Delete</button></span>";

}
Table.prototype.saveRow= function(num) {
  if (this.saveValue(num)) {
    document.getElementById("editSave"+num).innerHTML = "<span class='pointer' ><button id='edit"+num+"' onclick='Table1.editRow("+num+");'>Edit</button></span>";
  }
}
Table.prototype.getName = function(num) {
  var nameNode = document.getElementById('name'+num);
  var nameParent = nameNode.parentNode;
  var namevalue = nameNode.value;
  var emailNode = document.getElementById('email'+num);
  var emailParent = emailNode.parentNode;
  var emailValue = emailNode.value;
  return {
    nameNode: nameNode,
    nameParent: nameParent,
    namevalue: namevalue,
    emailNode: emailNode,
    emailParent: emailParent,
    emailValue : emailValue,
  }
}
Table.prototype.saveValue = function(num) {
  values = this.getName(num);
  if ((values.namevalue )&& (values.emailValue)!="") {
    if (this.validateemail(values.emailValue)) {
    values.nameParent.removeChild(values.nameNode);
    var textName = document.createElement('span');
    textName.id = "name"+num;
    textName.innerHTML = values.namevalue;
    values.nameParent.appendChild(textName);
    values.emailParent.removeChild(values.emailNode);
    var emailName = document.createElement('span');
    emailName.id = "email"+num;
    emailName.innerHTML = values.emailValue;
    values.emailParent.appendChild(emailName);
    return true;
    }
  } else {
    alert(" The input can't be empty")
  }
}

Table.prototype.validateemail = function(email) {
  var regex = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/
  var match = regex.test(email);
  if (match == false) {
      alert("Please use proper email")
  } else {
    return true;
  }  
}

Table.prototype.editRow= function(num) {
  nameValue= this.getName(num);
  namevalue = (nameValue.nameNode).innerHTML;
  nameValue.nameParent.removeChild(nameValue.nameNode);
  textName = this.createText();
  textName.id = "name"+num;
  textName.value = namevalue;
  nameValue.nameParent.appendChild(textName);
  var emailValue = (nameValue.emailNode).innerHTML;
  nameValue.emailParent.removeChild(nameValue.emailNode);
  textEmail= this.createText()
  textEmail.id = "email"+num;
  textEmail.value = emailValue;
  nameValue.emailParent.appendChild(textEmail);
  document.getElementById("editSave"+num).innerHTML = "<span class='pointer' ><button id='save"+num+"' onclick='Table1.saveRow("+num+");'> Save </button></span>";
}

Table.prototype.deleteRow =function(num) {
  var rowObj = document.getElementById('row'+num);
  rowObj.parentNode.removeChild(rowObj); 
}
var Table1 = new Table();
var addRow = document.getElementById("addRow");
addRow.addEventListener('click', function(){ Table1.addCell();})

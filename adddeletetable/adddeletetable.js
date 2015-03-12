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
  tableObj.rowObj.id = "row"+tableObj.lastRow;
  this.createCells( 0,"name");
  this.createCells(1, "email");
  var cell3 = tableObj.rowObj.insertCell(2);
  cell3.innerHTML = "<span id='editSave"+tableObj.lastRow+"'><span class='pointer' ><button id='save"+tableObj.lastRow+"' onclick='Table1.saveRow("+tableObj.lastRow+");' >Save</button></span></span> / <span class='pointer'><button id='deleteRow"+tableObj.lastRow+"'  onclick='Table1.deleteRow("+tableObj.lastRow+");'>Delete</button></span>";
}
Table.prototype.createCells = function(num, type) {
  var cell=tableObj.rowObj.insertCell(num)
  var textName = this.createText();
  textName.id = type + tableObj.lastRow
  cell.appendChild(textName)
}
Table.prototype.saveRow= function(num) {
  if (this.saveValue(num)) {
    document.getElementById("editSave"+num).innerHTML = "<span class='pointer' ><button id='edit"+num+"' onclick='Table1.editRow("+num+");'>Edit</button></span>";
  }
}
 Table.prototype.getName = function(num) {
  var nameNode = document.getElementById('name'+num);
  var emailNode = document.getElementById('email'+num);
  return {
    nameNode: nameNode,
    nameParent: nameNode.parentNode,
    namevalue: nameNode.value,
    emailNode: emailNode,
    emailParent: emailNode.parentNode,
    emailValue : emailNode.value,
  }
}
Table.prototype.saveValue = function(num) {
  values = this.getName(num);
  if ((values.namevalue )&& (values.emailValue)!="") {
    if (this.validateemail(values.emailValue)) {
    this.saveNode( "name", num);
    this.saveNode("email", num);
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
  this.editNode('name', num);
  this.editNode('email', num)
  document.getElementById("editSave"+num).innerHTML = "<span class='pointer' ><button id='save"+num+"' onclick='Table1.saveRow("+num+");'> Save </button></span>";
}

Table.prototype.editNode = function(type, num) {
  var node = document.getElementById(type + num);
  var parent = node.parentNode;
  var value = node.innerHTML; 
  parent.removeChild(node);
  var input_field = document.createElement('input');
  input_field.type = 'text';
  input_field.id = type + num;
  input_field.value = value;
  parent.appendChild(input_field);
}

Table.prototype.saveNode = function(type, num) {
  var node = document.getElementById(type + num);
  var parent = node.parentNode;
  var value = node.value;
  parent.removeChild(node);
  var input_field = document.createElement('span');
  input_field.type = 'text';
  input_field.id = type + num;
  input_field.innerHTML = value;
  parent.appendChild(input_field);
}

Table.prototype.deleteRow =function(num) {
  var rowObj = document.getElementById('row'+num);
  rowObj.parentNode.removeChild(rowObj); 
}
var Table1 = new Table();
var addRow = document.getElementById("addRow");
addRow.addEventListener('click', function(){ Table1.addCell();})

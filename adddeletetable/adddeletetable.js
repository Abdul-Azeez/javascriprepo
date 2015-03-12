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
  cell2.appendChild(textEmail);;
  var cell3 = tableObj.rowObj.insertCell(2);
  cell3.innerHTML = "<span id='editSave"+tableObj.lastRow+"'><span class='pointer' ><button id='save"+tableObj.lastRow+"' onclick='Table1.saveRow("+tableObj.lastRow+");' >Save</button></span></span> / <span class='pointer'><button id='deleteRow"+tableObj.lastRow+"'  onclick='Table1.deleteRow("+tableObj.lastRow+");'>Delete</button></span>";
}
Table.prototype.createCells = function(num, type) {
  tableObj = this.addRow();
  tableObj.rowObj.id = "row"+tableObj.rowObj;
  var cell=tableObj.rowObj.insertCell(num)
  var textName = this.createText();
  textName.id = type + tableObj.lastRow
  cell.appendChild(textName)
  // return i;
}
Table.prototype.saveRow= function(num) {
  if (this.saveValue(num)) {
    document.getElementById("editSave"+num).innerHTML = "<span class='pointer' ><button id='edit"+num+"' onclick='Table1.editRow("+num+");'>Edit</button></span>";
  }
}
Table.prototype.getName = function(num) {
  var nameNode = document.getElementById('name'+num);
  console.log(nameNode);
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
    this.swapUIElements('save', "name", num);
    this.swapUIElements('save', "email", num);
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
  this.swapUIElements('edit','name', num)
  this.swapUIElements('edit','email', num)
  document.getElementById("editSave"+num).innerHTML = "<span class='pointer' ><button id='save"+num+"' onclick='Table1.saveRow("+num+");'> Save </button></span>";
}


// Table.prototype.swapUIElements = function(type, num) {
//   // get node of the Element
//   var label = document.getElementById(type + num)
//   // get parent of the Element
//   var parent = label.parentNode;
//   //getting d node value of the save item
//   var value = node.innerHTML; 
// // remove node child
//   parent.removeChild(node);
//   var input_field = document.createElement('input');
//   input_field.type = 'text';
//   input_field.id = type + num;
//   input_field.value = value;
//   parent.appendChild(input_field);
// }

// Table.prototype.swapUIElements = function(type, num) {
//   var node = document.getElementById(type + num);
//   var parent = node.parentNode;
//   var value = node.value;
//   parent.removeChild(node);
//   var input_field = document.createElement('span');
//   input_field.type = 'text';
//   input_field.id = type + num;
//   input_field.innerHTML = value;
//   parent.appendChild(input_field);
// }

Table.prototype.swapUIElements = function(operation, type, num) {
  var node = document.getElementById(type + num);
  var parent = node.parentNode;
  
  if(operation == "edit") {
    var value = node.innerHTML;
    parent.removeChild(node);
    var input_field = document.createElement('input');
    input_field.type = 'text';
    input_field.id = type + num;
    input_field.value = value;
    parent.appendChild(input_field);
  } else {
    var value = node.value;
    parent.removeChild(node);
    var input_field = document.createElement('span');
    input_field.type = 'text';
    input_field.id = type + num;
    input_field.innerHTML = value;
    parent.appendChild(input_field);
  }
}



Table.prototype.deleteRow =function(num) {
  var rowObj = document.getElementById('row'+num);
  rowObj.parentNode.removeChild(rowObj); 
}
var Table1 = new Table();
var addRow = document.getElementById("addRow");
addRow.addEventListener('click', function(){ Table1.addCell();})

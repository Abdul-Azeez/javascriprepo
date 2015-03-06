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
  if (this.saveValue(num)) {
    console.log(document.getElementById("editSave"+num))
    document.getElementById("editSave"+num).innerHTML = "<span class='pointer' ><button id='edit"+num+"' onclick='Table1.editRow("+num+");'>Edit</button></span>";
  }
}
Table.prototype.getNameValue = function(num) {
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
  values = this.getNameValue(num);
  console.log(values);
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

Table.prototype.getEmailValue = function(num) {
  var emailNode = document.getElementById('email'+num);
  namevalue = this.getNameValue;
  var emailParent = emailNode.parentNode;
  var emailValue = emailNode.value;
  if ((emailValue && emailNode && namevalue)!= "" && this.validateemail(emailValue)){
    emailParent.removeChild(emailNode);
    var emailName = document.createElement('span');
    emailName.id = "email"+num;
    emailName.innerHTML = emailValue;
    emailParent.appendChild(emailName);
    return emailValue;
  }
  return emailValue;
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

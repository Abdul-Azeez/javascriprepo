function Urluser() {
  this.person = prompt("Please enter your URL", "")
}
  
Urluser.prototype.validate = function(e) {
  switch(e && e.trim()) {
    case "":
    case null:
    return true;
    default : return false;
  }
}

var windowObjectReference;
var strWindowFeatures = "menubar=no,location=no,resizable=no,scrollbars=no,status=no,toolbar=no, width=400px height=450px";

Urluser.prototype.openRequestedPopup=  function() {
  if (this.validate(this.person)) {
    alert("Please you inputed an empty string")
    return;  
  }
  var url = "http://"+ this.person
  windowObjectReference = window.open(url, "Openurl", strWindowFeatures);
}

object1= new Urluser()
object1.openRequestedPopup()
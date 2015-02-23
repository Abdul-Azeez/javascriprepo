function User(firstname, lastname) {
  this.firstname = prompt("Please enter your first name", "")
  this.lastname = prompt("Please enter your lastname name", "")
}

User.prototype.validate = function(e) {
  switch(e && e.trim()) {
    case "":
    case null:
    return true;
    default : return false;
    }  
}


User.prototype.print = function () {

  if (this.validate(this.firstname)) {
    (this.firstname= prompt("Please enter your first name", ""));
    
     preventDefault();
  }
  if (this.validate(this.lastname)) {
      this.lastname= prompt("Please enter your lastname name", "");
      preventDefault();
    }
  document.getElementById("demo").innerHTML =
  "Hello " + this.firstname +" "+ this.lastname;
}

var user1 = new User()

user1.print()

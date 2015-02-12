function User() {

}

User.prototype.validate = function(e) {
  switch(e && e.trim()) {
    case "":
    case 0:
    case "0":
    case null:
    return true;
    default : return false;
    }  
}

User.prototype.print = function () {

  do {
      this.firstname= prompt("Please enter your first name", "");
  }
  while (this.validate(this.firstname) == true)

  do {
      this.lastname= prompt("Please enter your lastname name", "");
  }
  while(this.validate(this.lastname) == true)

  document.getElementById("demo").innerHTML =
  "Hello " + this.firstname +" "+ this.lastname;

}

var user1 = new User()

user1.print()

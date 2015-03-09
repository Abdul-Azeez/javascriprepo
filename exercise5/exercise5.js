function User(names) {
  this.names = ["firstname", "lastname"];
}

User.prototype.validate = function(input) {
  if (input !=null) {
    if (input.trim() =="") {
      return true;
    }
  } 
}

User.prototype.print = function () {
  for (var i = 0; i < this.names.length; i++) {
    do {
      var input = prompt('Enter your ' + this.names[i]);
    }
    while (this.validate(input));
    if (input == null) {
      alert(this.names[i] + " can't be empty")
      break;
    }
    this[this.names[i]] = input;
    if (this.firstname && this.lastname) {
      document.getElementById("demo").innerHTML =
      "Hello " + this.firstname + " " + this.lastname;
      }
  }
}

var user1 = new User();
user1.print();

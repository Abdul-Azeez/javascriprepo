function User(names) {
  this.names = ["firstname", "lastname"];
}

User.prototype.validate = function(input) {
  if (input !=null && input.trim() =="") {
      alert("This field can't be empty");
      return true;
  } 
}

User.prototype.print = function () {
  for (var i = 0; i<this.names.length; i++) {
    do {
      var input = prompt('Enter your ' + this.names[i]);
    }
    while (this.validate(input));
    if (input == null) {
      break;
    }
    if (!this.validate(input)) {
      this[this.names[i]] = input;
      if (this.firstname && this.lastname) {
        document.getElementById("demo").innerHTML =
        "Hello " + this.firstname +" "+ this.lastname;
      }
    }
  }
}

var user1 = new User();
user1.print();

function User() {
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
  for (var i = 0; i<names.length; i++) {
    var input = prompt('Enter your ' + names[i], " ");
    if (!this.validate(input)) {
      this[names[i]] = input;
      if (this.firstname && this.lastname) {
        document.getElementById("demo").innerHTML =
        "Hello " + this.firstname +" "+ this.lastname;
      }
    } else {
      alert(names[i]+ "can't be empty")
      break;
    }
  }
}

var user1 = new User();
var names = ["firstname", "lastname"];

user1.print();

function User(name, age) {
  this.name = name;
  this.age = Number(age);
}

User.prototype.validateAge = function(age) {
  name = this.name;
  age = this.age;
  if (Number.isInteger(age) && age < 0 ) {
      alert("Please enter a real number");
      return false;
    } 
  return true;
}
User.prototype.validateName = function(name) {
  if ((name.trim().length == 0 )) {
    alert("Please Check your name"); 
    return false
    } 
  return true;
}
User.prototype.validateinput = function(user) {
  var firstusername = this.validateName(this.name);
  var secondusername = this.validateName(user.name);
  var firstuserAge = this.validateAge(user.age);
  var seconduserAge = this.validateAge(user.age);
  if ((firstuserAge && seconduserAge) && (firstusername && secondusername)) {
    return true;
  } else {
    return false;
  }

}

User.prototype.compare = function(user) {
  if (this.validateinput(user)) {
    if (this.age > user.age) {
      alert(this.name +" is older than "+user.name)
    } else if (this.age == user.age) {
      alert(this.name +" is the same age as "+ user.name)
    } else {
      alert(user.name+" is older than "+ this.name) 
    }
  } 
}

var user1 = new User("gbenga", "0027")
var user2 = new User("abu", "78")
var user3= new User("osifo", 35)
var user4 = new User("abubakar", 27)

user1.compare(user2)
// user4.compare(user2)
// user3.compare(user4)
user2.compare(user1)

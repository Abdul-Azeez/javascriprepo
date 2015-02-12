function User(name, age) {
  this.name = name;
  this.age = age;
}

User.prototype.compare = function(user) {

  if (this.age > user.age) {
    alert(this.name +"is older than"+user.name)
  }
  else if (this.age == user.age) {
    alert(this.name +" is the same age as"+ user.name)
  }
  else {
    alert(this.name+" is older than "+ user.name) 
  }

}

var user1 = new user("gbenga", 27)
var user2 = new user("segun", 33)

user1.compare(user2)

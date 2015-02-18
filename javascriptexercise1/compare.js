function User(name, age) {
  this.name = name;
  this.age = Number(age);
}

User.prototype.compare = function(user) {
 if (this.age > user.age) {
    alert(this.name +" is older than "+user.name)
  }
 else if (this.age == user.age) {
    alert(this.name +" is the same age as "+ user.name)
  }
 else {
    alert(user.name+" is older than "+ this.name) 
  }

}

var user1 = new User("gbenga", 27)
var user2 = new User("segun", 33)
var user3= new User("osifo", 35)
var user4 = new User("abu", 27)

user1.compare(user2)
user4.compare(user2)
user3.compare(user4)
user2.compare(user1)

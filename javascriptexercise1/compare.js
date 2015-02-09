function User(name, age)
{
  this.name = name;
  this.age = age;
}
var user1 = new User('gbenga', 27)
var user2 = new User('segun', 33)
var user3 = new User ('osifo',23)

User.prototype.compare = function(username){

  if (user1.age > user2.age)
    alert(user1.name +'is older than' +user2.name)
  else if(user1.age == user2.age)
    alert(user1.name +' is the same age as'+ user2.name)
  else
    alert(user2.name+ 'is older than ' + user1.name) 

}
user1.compare(user2)
user2.compare(user3)
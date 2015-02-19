function Numeric() {
  var number = document.getElementById("number");
  var result = document.getElementById("result");
  var submit = document.getElementById("submit");
}

Numeric.prototype.validate = function() {
  // var regex = /((^(\-|\+)?\d+)|(^(\-|\+)?\d+).(\d+))$/;
  var regex = /^(-|\+)?[\d]+[.]?[\d]+$/;
	var match = regex.test(number.value);
	return match
}

// Numeric.prototype.print = function() {
//   match = this.validate();
//   result.value = match;
// }

Numeric.prototype.checkButton = function() {
  match = this.validate();
  if(match) {
    result.value = match
  } else { 
    submit.preventDefault()
  }
}

Numeric.prototype.doAll= function() {
  this.validate();
  this.checkButton();
  this.print();
 }
var check = new Numeric();
var submit = document.getElementById("submit");
submit.addEventListener("click", check.doAll );


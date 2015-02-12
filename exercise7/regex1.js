function Numeric() {
  var number = document.getElementById("number");
  var result = document.getElementById("result");
  var submit = document.getElementById("submit");
}

Numeric.prototype.validate = function() {
  var regex = /((^(\-|\+)?\d+)|(^(\-|\+)?\d+).(\d+))$/;
	var match = regex.test(number.value);
	return match
}

Numeric.prototype.print = function() {
  match = this.validate();
  result.value = match;
}
Numeric.prototype.checkButton = function(event) {
  match = this.validate();
  if(!match) {
    submit.preventDefault();
  }
}

Numeric.prototype.doAll= function() {
  this.validate();
  this.print();
  this.checkButton();
}

var check = new Numeric();

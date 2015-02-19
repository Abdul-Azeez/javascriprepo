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
 }
var check = new Numeric();
var submit = document.getElementById("submit");
submit.addEventListener("submit", function() {check.doAll();} );
 


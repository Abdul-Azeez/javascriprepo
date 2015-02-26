function Numeric() {
}

Numeric.prototype.validate = function(number) {
  var number = document.getElementById("number");
  var regex = /((^(\-|\+)?\d+)|(^(\-|\+)?\d+)$.(\d+))$/;
	var answer = regex.test(number.value);
	return answer;
}

Numeric.prototype.checkButton = function() {
  var result = document.getElementById("result");
  match = this.validate(number);
  if(match) {
    result.value = match;
  } else {
    result.value = match;
    return false;
  }
}

var submit = document.getElementById("submit");
submit.addEventListener("click", function() { check.checkButton()}, true );
var check = new Numeric();


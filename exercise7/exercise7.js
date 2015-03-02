function Numeric() {
  var number = document.getElementById("number");
  var submit = document.getElementById("submit");
  var result = document.getElementById("result");
  submit.addEventListener("click", function() { check.printResult()}, true );
}

Numeric.prototype.validate = function(number) {
  var regex = /((^(\-|\+)?\d+)|(^(\-|\+)?\d+)$.(\d+))$/;
	var answer = regex.test(number.value);
	return answer;
}

Numeric.prototype.printResult = function() {
  match = this.validate(number);
  result.value = match;
  if(!match) {
    return false;
  }
}

var check = new Numeric();


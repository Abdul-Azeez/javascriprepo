function Numeric() {
  var number = document.getElementById("number");
  var submit = document.getElementById("submit");
  var result = document.getElementById("result");
  var numericform = document.getElementById("numbertest")
  numericform.addEventListener("submit", function() { check.printResult()}, true );
}

Numeric.prototype.validate = function(number) {
  var regex = /((^(\-|\+)?\d+)|(^(\-|\+)?\d+)$.(\d+))$/;
	var answer = regex.test(number.value);
	return answer;
}

Numeric.prototype.printResult = function() {
  match = this.validate(number);
  result.value = match;
  return match;
}
  var check = new Numeric();


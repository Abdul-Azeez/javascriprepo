function Form(loginid,email,name,homepage,aboutme){

	

}

Form.prototype.validate = function(e) {
                    switch(e && e.trim()) {
                        case "":
                        case 0:
                        case "0":
                        case null:
                        case false:
                        case typeof this == "undefined":
                            return true;
                                default : return false;
                    }
                }

Form.prototype.validateLenght = function (lenght1) {
	this.lenght1 = lenght1;
	if ((lenght1.length) < 50) {
		alert("string lenght must not be less than 50.")
	}
}


Form.prototype.validateEmail = function(email) {
    var email = document.getElementById("email")
    var regex = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/
    var match = regex.test(email.value);
    if (match == false) {
        alert("Please check your email")
    }
    
    
}

var url = document.getElementById("homepage")
Form.prototype.validateUrl = function(homepage) {
    var url = document.getElementById("homepage")
    var regex = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/
    var match = regex.test(url.value);
    if (match==false) {
      alert("please check the url of your homepage")
    }
    
}



Form.prototype.print= function()
{
	loginid = document.getElementById("loginid");
	alert(loginid);
	email = document.getElementById("email");
	name = document.getElementById("name");
	homepage = document.getElementById("homepage");
	aboutme = document.getElementById("aboutme");
	notify = document.getElementById("notify");

	if (this.validate(loginid.value)) {
		alert("Login doesn't have to be empty")
	}
	if (this.validate(email.value)) {
		alert("email doesn't have to be empty")
	}
	if (this.validate(name.value)) {
		alert("name doesn't have to be empty")
	}
	if (this.validate(homepage.value)) {
		alert("homepage doesn't have to be empty")
	}
	if (this.validate(aboutme.value)) {
		alert("The about me field doesn't have to be empty")
	}
	if (this.validateLenght(aboutme.value)) {
		alert(" The  string lenght of the about me field must be greater than 50")
	}
	if (!notify.checked) {
		alert("The notify field has to be ticked.")
	}

	if (this.validateEmail(email)== false) {
        alert("Please check your email address")
    }

    if (this.validateUrl(aboutme)==false) {
        alert("please check the url of your homepage")
    }
}

var form1 = new Form()
// form1.print()
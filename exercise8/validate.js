function Form(){

    

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
        alert("String lenght of the aboutme field must not be less than 50.")
    }
}

Form.prototype.print= function()
{
    loginid = document.getElementById("loginid");
    email = document.getElementById("email");
    name = document.getElementById("name");
    homepage = document.getElementById("homepage");
    aboutme = document.getElementById("aboutme");
    notify = document.getElementById("notify");

    if (this.validate(loginid.value)) {
        alert("Login doesn't have to be empty")
    }
    if (this.validate(email.value)) {
        alert("Email doesn't have to be empty")
    }
    if (this.validate(name.value)) {
        alert("Name doesn't have to be empty")
    }
    if (this.validate(homepage.value)) {
        alert("Homepage doesn't have to be empty")
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
}

var form1 = new Form()
// form1.print()
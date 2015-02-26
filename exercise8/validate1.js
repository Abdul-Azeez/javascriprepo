function Form() {
    // loginid = this.loginid;
    // email = this.email;
    // name = this.name;
    // homepage= this.homepage;
    // aboutme= this.aboutme;
    // checkedbox= this.checkedbox;

}
// var email = document.getElementById("email")
// var url = document.getElementById("homepage")
Form.prototype.validateemail = function(email) {
    var email = document.getElementById("email")
    var regex = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/
    var match = regex.test(email.value);
    if (match == false) {
        alert("Please check your email")
    }    
}

var url = document.getElementById("homepage")
Form.prototype.validateurl = function(homepage) {
    var url = document.getElementById("homepage")
    var regex = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/
    var match = regex.test(url.value);
    if (match==false) {
      alert("please check the url of your homepage")
    }
    
}

Form.prototype.print = function() {
    
    if (this.validateemail()== false) {
        alert("Please check your email address")
    }

    if (this.validateurl()==false) {
        alert("please check the url of your homepage")
    }
  
}

var form1 = new Form();

form1.print()
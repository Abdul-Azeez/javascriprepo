  function CheckDomain() { 

  }

  CheckDomain.prototype.domain = function () {

    var string = document.getElementById('checkurl').value;

    var reg = /^(?:https?\:\/\/)?((\w+\.)*)(\w+\.\w+)/i;
    if(reg.test(string))
    {
       alert((RegExp.$1.length == 0) ? 'Domain: '+RegExp.$3 : 'Subdomain: '+RegExp.$1+' Domain: '+RegExp.$3);
      // alert(RegExp.$1+'-'+RegExp.$2+'-'+RegExp.$3);
    }
    else
    {
      alert('Please check your URL');
    }
  }

  var checkDomain1 = new CheckDomain();
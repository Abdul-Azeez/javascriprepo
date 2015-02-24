  function CheckDomain() { 

  }

  CheckDomain.prototype.domain = function () {

    var string = document.getElementById('checkurl').value;

    // var reg = /^(?:https?:\/\/www.)?(\w+\.)*(\w+\.\w+)/i;
    var reg = /^(?:https?:\/\/www.|www.)?(\w+\.)*(\w+\.\w+)/i;
    if(reg.test(string))
    {
      //  // alert((RegExp.$1.length == 0) ? 'Domain: '+RegExp.$3 : 'Subdomain: '+RegExp.$1+' Domain: '+RegExp.$2);
      // alert(RegExp.$1+'-first'+RegExp.$2+'-second'+RegExp.$3);
      if(RegExp.$1.length==0){
        alert("Domain:"+ RegExp.$2)
      } else {
        alert("Subdomain:" + RegExp.$1 +"Domain" +RegExp.$2)
      }

    }
    else
    {
      alert('Please check your URL');
    }
  }

  var checkDomain1 = new CheckDomain();
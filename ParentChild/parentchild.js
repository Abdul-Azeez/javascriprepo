  function Parent1() {
  }

  Parent1.prototype.parentTick= function(box)
  { 
    var elements = document.getElementById(box+'Tick');
    var tChid = document.getElementById(box+'All');
    if(tChid.checked)
    {
      var number = Number (10)
      elements.style.display = 'block';
      document.getElementById("Container").scrollTop = document.getElementById(box+"Container").offsetTop - number;
    }
    else
    {
      elements.style.display = 'none';
    }
    var nodes = elements.childNodes;
    for(i=0; i<nodes.length; i++) {
      nodes[i].checked = tChid.checked;
    }  
  }

  var child1 = new Parent1();
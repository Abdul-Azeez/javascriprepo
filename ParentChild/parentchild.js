  function Parent1() {
  }

  Parent1.prototype.parentTick= function(box)
  { 
    var Elements = document.getElementById(box+'Tick');
    var tChid = document.getElementById(box+'All');
    if(tChid.checked)
    {
      Elements.style.display = 'block';
      document.getElementById("Container").scrollTop = document.getElementById(box+"Container").offsetTop - 10;
    }
    else
    {
      Elements.style.display = 'none';
    }
    var nodes = Elements.childNodes;
    for(i=0; i<nodes.length; i++) {
      nodes[i].checked = tChid.checked;
    }  
  }

  var child1 = new Parent1();
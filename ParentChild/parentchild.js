  function GroupSelection() {
  }

 GroupSelection.prototype.parentTick= function(box)
  { 
    var boxs = box + "Tick";
    var elements = document.getElementById(boxs);
    console.log(elements);
    var tChid = document.getElementById(box+'All');
    if(tChid.checked)
    {
      var number = Number (10)
      elements.style.display = 'block';
      tChid.scrollIntoView(true);
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

  var groupSelection1 = new GroupSelection();
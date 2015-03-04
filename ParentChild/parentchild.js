  function GroupSelection() {
  }

 GroupSelection.prototype.parentTick= function(box)
  { 
    var boxs = box + "Tick";
    var elements = document.getElementById(boxs);
    var selectedGroup = document.getElementById(box+'All');
    if(selectedGroup.checked)
    {
      var number = Number (10)
      elements.style.display = 'block';
      selectedGroup.scrollIntoView(true);
    }
    else
    {
      elements.style.display = 'none';
    }
    var nodes = elements.querySelectorAll('input[type=checkbox]');
    for(i=0; i<nodes.length; i++) {
      nodes[i].checked = selectedGroup.checked;
    }  
  }

  var groupSelection1 = new GroupSelection();
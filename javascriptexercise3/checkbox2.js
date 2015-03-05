function CheckBox(checkBoxes, noneCheckbox ) {
  this.maxDays = 3;
  this.selectedDays = [];
  this.checkBoxes = checkBoxes;
  this.noneCheckbox = noneCheckbox;
}

CheckBox.prototype.initialze = function(){
  this.noneCheckbox.checked = true;
}

CheckBox.prototype.addEventHandlers = function() {
  var that = this;

  //handling clicks
  this.noneCheckbox.addEventListener('click', function(){
    if(this.checked) {
      that.uncheckAll();
    }
  });

  //handling clicks from all the other checkbox items
  for(var i = 0; i < this.checkBoxes.length; i++) {
    this.checkBoxes[i].addEventListener('click', function(){
      if(this.checked){
        if(that.selectedDays.length < that.maxDays) {
          that.selectedDays.push(this.id);
          that.noneCheckbox.checked = false;//unchecks the none checkbox due to a click on another checkbox
          console.log(that.selectedDays);
        }else {
          alert("you can choose more than 3 days. You have already choosen" + "  " + that.selectedDays[0]+" "+ that.selectedDays[1]+
            " "+ that.selectedDays[2]);
          this.checked = false;
        }
      } else {
        that.selectedDays.splice(that.selectedDays.indexOf(this.id),1);//removes target item from the list.
      }
    });
  }
}

// // Unchecked all the documents when none is clicked//
CheckBox.prototype.uncheckAll = function () {
  for (var i = 0; i < this.checkBoxes.length; i++) {
    this.checkBoxes[i].checked = false;
  }
  this.selectedDays= [];
}

CheckBox.prototype.checkAll = function() {
  this.chkControl();
}


//preparing the DOM to handle class functionalites
document.addEventListener('DOMContentLoaded', function(){
  var checkBoxes = document.getElementsByName('myCheckbox');
  var noneCheckbox = document.getElementById('none');
  var checkBox1 = new CheckBox(checkBoxes, noneCheckbox);
  checkBox1.addEventHandlers();
  checkBox1.initialze();
});
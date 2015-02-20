function Rows() {
}

Rows.prototype.SelectMoveRows= function(SS1,SS2)
{
    // Move rows from SS1 to SS2 from bottom to top
  for (i=SS1.options.length - 1; i>=0; i--)
  {
    if (SS1.options[i].selected == true)
    {
        SS2.appendChild(SS1.options[i])
    }
  }
   
}
var Row1 = new Rows()
var Row2 = new Rows()

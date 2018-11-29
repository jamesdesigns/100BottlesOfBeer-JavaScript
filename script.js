function drink(){
  "use strict";
  var text = " ";
  var beer = 100;

  while(beer) {
    text += "<br>" + beer-- + " bottles of beer on the wall<br>Take one down, pass it around,<br>"
    + beer + " bottles of beer on the wall!<br><br>";
  }
  document.getElementById('test').innerHTML = text;
};

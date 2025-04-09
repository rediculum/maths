function submitResult() {
  var inp = document.getElementById("res").value;
  if (inp == result) {
    document.getElementById("message").innerHTML = "<img src=correct.jpg>";
    new Audio('./correct.mp3').play()
    setTimeout(function(){
      location.reload()
    },2000);
  } else {
    document.getElementById("message").innerHTML = "<img src=wrong.jpg>";
    new Audio('./wrong.mp3').play()
  }
}

function rand(max) {
  return Math.floor((Math.random() * max));
}

checkCookie();
var value = getCookieValue();

var x = rand(value);
var y = rand(value);
var operands = ['-','+'];
var operand = operands[Math.floor(Math.random()*operands.length)];

if (operand == '-') {
  if ( x < y ) {
    [x,y] = [y,x];
  }
  var result = x - y;
} else if (operand == '+') {
  var result = x + y;
}

document.getElementById("oper").innerHTML = operand;
document.getElementById("first").innerHTML = x;
document.getElementById("second").innerHTML = y;

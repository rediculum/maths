function getCookieValue() {
  var val = document.cookie.split("maxNumber=");
  return val[1];
}

function setCookie() {
  var val = document.getElementById("valSelection").value;
  document.cookie = "maxNumber=" + val + ";";
  location.reload();
}

function checkCookie() {
  let val = getCookieValue();
  if (val == null) {
    document.cookie = "maxNumber=20;";
  }
}


function validInputCheck(input) {
  var x, text;

  x = document.getElementById(input).value;

if(input == 'numberInput') {
  if (x > 10000000 && x < 99999999) {
    text = "Number OK";
    document.getElementById("numberOutput").style.color = "green";
  } else {
    text = "Input not valid (Must be a phone number)";
    document.getElementById("numberOutput").style.color = "red";
  }
  document.getElementById("numberOutput").innerHTML = text;
}

if(input == 'nameInput') {
  if (x == "" || !isNaN(x)) {
    text = "Name must be filled out and can't be a number";
    document.getElementById("nameOutput").style.color = "red";
  } else {
    text = "Name OK";
    document.getElementById("nameOutput").style.color = "green";
  }
  document.getElementById("nameOutput").innerHTML = text;
}

if(input == 'e-mailInput') {
  var emailCheck = x.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);

  if(emailCheck) {
    text = "E-mail OK"
    document.getElementById("e-mailOutput").style.color = "green";
  } else {
    text = "Input not valid"
    document.getElementById("e-mailOutput").style.color = "red";
  }
  document.getElementById("e-mailOutput").innerHTML = text;
}

if(input == 'passwordInput') {
  var atLeastOneNumb = x.match(/([0-9._-]+)/gi);
  var atLeastOneAlpha = x.match(/([a-zA-Z._-]+)/gi);

  if(atLeastOneNumb && atLeastOneAlpha) {
    text = "Password OK"
    document.getElementById("passwordOutput").style.color = "green";
  } else {
    text = "Input not valid (Needs at least one aphabetic and one number)"
    document.getElementById("passwordOutput").style.color = "red";
    document.getElementById("passwordInput").value = "";
  }
  document.getElementById("passwordOutput").innerHTML = text;
}

if(input == 'passwordInput2') {
  var sameAsPassword1 = document.getElementById("passwordInput").value;
  var tryTwo = document.getElementById("passwordInput2").value;

  if(sameAsPassword1 == tryTwo && tryTwo != "") {
    text = "Password OK"
    document.getElementById("passwordOutput2").style.color = "green";
  } else {
    text = "Input not valid"
    document.getElementById("passwordOutput2").style.color = "red";
    document.getElementById("passwordInput2").value = "";
  }
  document.getElementById("passwordOutput2").innerHTML = text;
}
}

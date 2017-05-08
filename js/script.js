var emailElement = document.forms.emailSend.email;

function emailFocus( e ) {
  var element = e.target || window.event.srcElement;
  if ( element.value == "Enter your email address..." )
    element.value = "";
}

function emailBlur(e) {
  var element = e.target || window.event.srcElement;
  if ( element.value === "" )
    element.value = "Enter your email address...";
}

if ( emailElement.addEventListener ) {
  emailElement.addEventListener("focus", emailFocus, false);
  emailElement.addEventListener("blur", emailBlur, false);
} else if ( emailElement.attachEvent ) {
  emailElement.attachEvent("onfocus", emailFocus);
  emailElement.attachEvent("onblur", emailBlur);
}
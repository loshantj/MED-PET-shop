function validateForm() {
  var name = document.forms["contactForm"]["name"].value;
  var email = document.forms["contactForm"]["email"].value;
  var message = document.forms["contactForm"]["message"].value;
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (name == "") {
    alert("Name must be filled out");
    return false;
  }
  if (email == "") {
    alert("Email must be filled out");
    return false;
  }
  if (!emailPattern.test(email)) {
    alert("Invalid email format");
    return false;
  }
  if (message == "") {
    alert("Message must be filled out");
    return false;
  }
  return true;
}


let slideStartIndex = 0;
let slideStopIndex;
showSlides(slideStartIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideStartIndex += n);
}


function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("new__Latest__Releases__slideshowContainer__image_container__mySlides");
  //   reset loop
  if (n > slides.length) { slideStartIndex = 1 }
  if (n + 3 >= slides.length) { slideStartIndex = 1 }
  if (n < 1) { slideStartIndex = 0 }

  slideStopIndex = slideStartIndex + 3;

  for (i = 0; i < slideStartIndex; i++) {
    slides[i].style.display = "none";
  }

  for (i = slideStopIndex; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = slideStartIndex; i <= slideStopIndex; i++) {
    slides[i].style.display = "flex";
  }
}

function TheFunction() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("search-form");
  filter = input.value.toUpperCase();
  window.open("Search.html?" + filter);
}

function validateForms() {
  var name, msg, email;
  name = document.forms["contact"]["name"].value;
  msg = document.forms["contact"]["message"].value;
  email = document.forms["contact"]["email"].value;

  if (name == "") {
    alert("Name must be filled out");
    return false;
  }

  else if (email == "") {
    alert("Email must be filled out");
    return false;
  }

  else if (!validateEmail(email)) {
    alert("Improper Email Format")
    return false;
  }

  if (msg.length < 3) {
    alert("Message is too short");
    return false;
  }

  alert("Form Submitted");
  return true;
}
function validateEmail(email) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return (true);
  }
  alert("Improper Email Format");
  return (false);
}
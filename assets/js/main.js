
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 80) {
    document.getElementById("header").style.backgroundColor = "#003274";
  } else {
    document.getElementById("header").style.backgroundColor = "transparent";
  }
}

function myFunction() {
  var x = document.getElementById("mobile-responsive");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
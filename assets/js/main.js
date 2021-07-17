
window.onscroll = function() {scrollFunction()};
const header = document.getElementById("header");
function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 80 || header.classList.contains('resp')) {
    header.style.backgroundColor = "#003274";
  } else {
    header.style.backgroundColor = "transparent";
  }
}



function myFunction(e) {
  header.classList.toggle('resp');
  scrollFunction();
}
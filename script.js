

//Scroll to top start//
let mybutton = document.getElementById("myBtn")

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
} else {
  mybutton.style.display = "none";
}
}

function topFunction() {
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
}
//scroll to top slut//

//burger menu//
const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".navbar_menu")

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active")
  navMenu.classList.toggle("active")
})
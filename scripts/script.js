// JavaScript Document 

var deButton = document.querySelector("header nav:first-of-type button");

deButton.addEventListener("click", toggleMenu);

function toggleMenu(event) {
  deNav = document.querySelector("header nav:first-of-type ul:first-of-type");
  deNav.classList.toggle("toonMenu");
}

// bron: https://codepen.io/Merel_Thuis/pen/NWNoapd


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

//bron: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_accordion_symbol
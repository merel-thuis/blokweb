// JavaScript Document 

var deButton = document.querySelector("header nav:first-of-type button");

deButton.addEventListener("click", toggleMenu);

function toggleMenu(event) {
  deNav = document.querySelector("header nav:first-of-type ul:first-of-type");
  deNav.classList.toggle("toonMenu");
}

// bron: https://codepen.io/Merel_Thuis/pen/NWNoapd
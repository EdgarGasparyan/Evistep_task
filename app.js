//const slidmenu = document.getElementsByClassName("slide_menu");
const toggle = document.getElementById("toggle");
const slide = document.getElementById("myDropdown");
const burger = document.getElementsByClassName("burger_open");
const main = document.getElementsByTagName("main");
const wburger = document.getElementsByClassName("image-content_burger");
const nav = document.getElementsByClassName("nav");
const scrarrow = document.getElementsByClassName("scrol_button");

window.onclick = function (event) {
  if (toggle.className === "arrow active") {
    slide.className = "slide_menu_open";
  } else {
    slide.className = "slide_menu";
  }
};

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  burger[0].style.visibility = "hidden";
  main[0].style.backgroundColor = "white";
  main[0].style.opacity = "0.2";
  wburger[0].style.visibility = "hidden";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  burger[0].style.visibility = "visible";
  main[0].removeAttribute("style");
  wburger[0].style.visibility = "visible";
}

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    nav[0].style.marginTop = "0";
  } else {
    nav[0].style.marginTop = "-70px";
  }
}

document.onclick = function( e ){
	if(e.target.className == 'scrol_arrow' && 'scrol_button')
	window.scrollTo({
		top: 830,
		behavior: "smooth",
	 });
	
}

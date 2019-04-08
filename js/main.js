// JavaScript Document



(function(){
	"use strict"
	console.log("Linked up");

	let button = document.querySelector("#button");
	// switch between this class when I touch it
	let burgerCon = document.querySelector("#burgerCon")
	//  this makes it work
	function hamburgerMenu() {
		burgerCon.classList.toggle("slideToggle");
		button.classList.toggle("expanded");
	}

	// button is touched event, then open the menu and close it
	button.addEventListener("click", hamburgerMenu, false);


})();
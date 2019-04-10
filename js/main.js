// JavaScript Document

(function() {
	// hamburger function 
	"use strict"
	console.log("Linked up");

	let button = document.querySelector("#button")
	// switch between this class when I touch it
	let burgerCon = document.querySelector("#burgerCon");
	//  this makes it work
	function hamburgerMenu() {
		burgerCon.classList.toggle("slideToggle");
		button.classList.toggle("expanded");
	}

	// button is touched event, then open the menu and close it
	button.addEventListener("click", hamburgerMenu, false);


	// Donate modal function below 
	console.log("Donate now is working");

	// get the button with the id call button
	document.getElementById('donateBut').addEventListener("click", function(e) {
		// Kill default behavior
		e.preventDefault();
		document.querySelector('.bgModal').style.visibility = "visible";
	});

	// create the close function
	document.querySelector('.close').addEventListener("click", function(e) {
		// this is the function here that hides the close.
		e.preventDefault();
		document.querySelector('.bgModal').style.visibility = "hidden";

	});


})();
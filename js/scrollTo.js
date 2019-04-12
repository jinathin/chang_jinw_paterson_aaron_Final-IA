
// Greensock ScrollTo

(function(){
	"use strict";

	// collection fo the button for tor for loop
	let links = document.querySelectorAll(".nav-dropdown a");
	console.log(links);

	// event handler
	function scrollLink(e) {
		console.log(e.currentTarget.id.slice(0,-3));

		e.preventDefault();
		let targetArea = e.currentTarget.id.slice(0,-3);
		TweenLite.to(window, 1, (scrollTo:{y:`#${targetArea}`, offsetY:70, autoKill:false}});
	}

	// for loop setting your count to zero aith 'i'
	for(var i=0; i < links.length; i++) {
		// add the event listeners to the links[0], [1], [2]
		links[i].addEventListener("click", scrollLink);
	}

})();


// By default, the ScrollToPlugin will automatically sense if the scroll position was changed outside of itself 
// (like if the user manually started dragging the scrollbar mid-tween) and cancel that portion of the tween.
// If, however, you'd like to prevent the auto-killing behavior, set autoKill:false
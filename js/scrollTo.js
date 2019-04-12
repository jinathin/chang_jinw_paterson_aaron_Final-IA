
// Greensock ScrollTo

(function() {

let section1Btn = documentElementById("#section1Btn");

	// scroll to the page
	section1Btn.onclick = function() {
	TweenMax.to(window, 1, {scrollTo:{y:".fundingHero", offsetY:50, autoKill:false},
	 	ease:Power2.easeOut});
		console.log('scroll to something');
	};

})();
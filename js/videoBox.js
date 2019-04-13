(() => {
	// sub
	console.log('fired');

	const  gallery 		= document.querySelectorAll('.galleryFrame'),
		   lightbox		= document.querySelector('.lightbox'),
		   video		= document.querySelector('video'),
		   lbClose      = document.querySelector('.lightbox-close');
		   

	function openLightbox() {

		// let it target the video and play it from the div
		video.src = `video/aboutTRAA.mp4`;
		lightbox.classList.add('lightbox-on');

		// load the video and play function
		video.load();
		video.play();
	}

	function closeLightbox() {

		// this function close the light box (video) when you click it
		lightbox.classList.remove('lightbox-on');

		// rewind the current video and pause it 
		video.currentTime = 0;
		video.pause();
	}

	
	gallery.forEach(gallery => gallery.addEventListener('click', openLightbox));
	video.addEventListener('ended', closeLightbox);
	lbClose.addEventListener('click', closeLightbox);
})();
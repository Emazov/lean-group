// ----------	home section
$(document).ready(function () {
	$('#home-slider').owlCarousel({
		items: 1,
		loop: true,
	});
});

// ----------	certificates section
var certificateSlider = $('#certificates-slider');
certificateSlider.owlCarousel({
	items: 5,
	loop: true,
	margin: 28,
});

$('.customPrevBtn').click(function () {
	certificateSlider.trigger('prev.owl.carousel');
});

$('.customNextBtn').click(function () {
	certificateSlider.trigger('next.owl.carousel');
});

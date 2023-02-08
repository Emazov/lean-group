$(document).ready(function () {
	// ----------	HOME SECTION
	$('#home-slider').owlCarousel({
		items: 1,
		loop: true,
	});

	// ----------	CERTIFICATES SECTION
	var certificateSlider = $('#certificates-slider');
	certificateSlider.owlCarousel({
		items: 1,
		loop: true,
		responsive: {
			0: {
				items: 1,
			},
			536: {
				items: 2,
				margin: 10,
			},
			768: {
				items: 4,
				margin: 15,
			},
			1200: {
				items: 5,
				margin: 28,
			},
		},
	});
	// custom prev btn certificates
	$('.certificates-custom-prev').click(function () {
		certificateSlider.trigger('prev.owl.carousel');
	});
	// custom next btn certificates
	$('.certificates-custom-next').click(function () {
		certificateSlider.trigger('next.owl.carousel');
	});

	// ----------	PRODUCTS SECTION
	var productsSlider = $('.products-slider');
	productsSlider.owlCarousel({
		items: 5,
		loop: true,
		dots: false,
		margin: 28,
	});
	// custom prev btn products
	$('.products-custom-prev').click(function () {
		productsSlider.trigger('prev.owl.carousel');
	});
	// custom next btn products
	$('.products-custom-next').click(function () {
		productsSlider.trigger('next.owl.carousel');
	});
});

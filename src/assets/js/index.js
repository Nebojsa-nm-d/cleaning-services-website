// Slick Slider
(function ($) {
	$(document).ready(function () {
		$(".sliders").slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
			infinite: true,
			speed: 500,
			cssEase: "linear",
			autoplay: false,
			dots: false,
			swipeToSlide: true,
			autoplaySpeed: 7000,
			fade: true,
		});

		$(window).scroll(function () {
			if ($(this).scrollTop() > 200) {
				$("#main-nav").addClass("sticky-header");
			} else {
				$("#main-nav").removeClass("sticky-header");
			}
		});
	});
})(jQuery);

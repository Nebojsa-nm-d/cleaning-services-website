// Slick Slider
$(function () {
	// Homepage Sliders
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

	// Services page
	$(".services .tab").on("click", function () {
		var tab = $(this).attr("data-tab");

		$(".services .tab").removeClass("current");
		$(".services .tab-content").removeClass("current");

		$(this).addClass("current");
		$("#" + tab).addClass("current");
	});

	// Main Nav Sticky Header
	$(window).on("scroll", function () {
		if ($(this).scrollTop() > 200) {
			$("#main-nav").addClass("sticky-header");
		} else {
			$("#main-nav").removeClass("sticky-header");
		}
	});

	// Contact page
	$(".contact-form__text-input").keyup(function () {
		if ($(this).val()) {
			$(this).addClass("has-value");
		} else {
			$(this).removeClass("has-value");
		}
	});
});

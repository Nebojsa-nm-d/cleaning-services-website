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
		event.preventDefault();
		var tab = $(this).attr("data-tab");

		$("html, body").animate(
			{
				scrollTop: $("#services-tabs").offset().top,
			},
			500
		);

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
	$(".contact-form__text-input").on("keyup", function () {
		if ($(this).val()) {
			$(this).addClass("has-value");
		} else {
			$(this).removeClass("has-value");
		}
	});

	// FAQ
	$(".faq .btn").on("click", function () {
		event.preventDefault();
		var tab = $(this).attr("data-tab");

		$("html, body").animate(
			{
				scrollTop: $("#faq-content").offset().top,
			},
			500
		);

		$(".faq .btn").removeClass("current");
		$(".faq .faq__q-a").removeClass("current");

		$(this).addClass("current");
		$("#" + tab).addClass("current");
	});

	$(".faq__question a").on("click", function () {
		event.preventDefault();
		if ($(this).hasClass("active")) {
			$(this).removeClass("active");
			$(this).siblings(".faq__answer").slideUp(200);
		} else {
			$(".faq__question a").removeClass("active");
			$(this).addClass("active");
			$(".faq__answer").slideUp(200);
			$(this).siblings(".faq__answer").slideDown(200);
		}
	});

	AOS.init();
});

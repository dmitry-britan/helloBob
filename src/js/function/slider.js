//
// News Slider
// =================================================================
(() => {
	function initNewsSlider() {
		$('.js-news-slider').slick({
			arrows: false,
			dots: true,
			adaptiveHeight: true,
			infinite: true,
			speed: 400,
			slidesToShow: 1,
			slidesToScroll: 1,
		});
	}
	if (!$('.js-news-slider').length) {
		return false;
	}
	let $window = $(window);
	let limit = 640;
	let isInit = false;

	$window.on('resize load', () => {
		if ($window.width() <= limit && !isInit) {
			initNewsSlider();
			isInit = true;
		}
	});
})();

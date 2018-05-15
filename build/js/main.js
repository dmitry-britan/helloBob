'use strict';

(function() {
	var $notice = $('.js-notice');
	var $noticeBody = $('.js-notice-body');
	var $noticeToggle = $('.js-notice-toggle');

	$noticeBody.slideUp(0);
	$noticeToggle.on('click', function(event) {
		event.preventDefault();
		var $that = $(event.currentTarget);
		var $currentNotice = $that.parents('.js-notice');

		$notice.not($currentNotice).find('.js-notice-toggle').removeClass('is--active').parents('.js-notice').removeClass('is--active').find('.js-notice-body').slideUp();
		$that.toggleClass('is--active').parents('.js-notice').toggleClass('is--active').find('.js-notice-body').slideToggle();
	});
})();

(function() {
	$('.js-nav-toggle').on('click', function(event) {
		var $that = $(event.currentTarget);
		var $parents = $('html, body');
		var $nav = $('.js-mobile-nav');

		$that.toggleClass('is-active');
		$parents.toggleClass('mobile-menu-opened');
		$nav.toggleClass('is--visible');
	});
})();

(function() {
	var $window = $(window);
	var limit = 640;
	var $menu = $('.menu');
	var $menuList = $('.menu__list');
	var $menuTitle = $('.menu__title');
	var isClosed = false;

	$window.on('resize load', function() {
		if ($window.width() <= limit) {
			$menuList.slideUp();
			isClosed = true;
		} else if ($window.width() > limit && isClosed) {
			$menuList.slideDown();
		}
	});
	$menuTitle.on('click', function(event) {
		var $that = $(event.currentTarget);
		var $currentMenu = $that.parents('.menu');

		$menu.not($currentMenu).removeClass('is--active').find('.menu__list').slideUp();
		$that.parents('.menu').toggleClass('is--active').find('.menu__list').slideToggle();
	});
})();

//
// News Slider
// =================================================================
(function() {
	function initNewsSlider() {
		$('.js-news-slider').slick({
			arrows: false,
			dots: true,
			adaptiveHeight: true,
			infinite: true,
			speed: 400,
			slidesToShow: 1,
			slidesToScroll: 1
		});
	}
	if (!$('.js-news-slider').length) {
		return false;
	}
	var $window = $(window);
	var limit = 640;
	var isInit = false;

	$window.on('resize load', function() {
		if ($window.width() <= limit && !isInit) {
			initNewsSlider();
			isInit = true;
		}
	});
})();

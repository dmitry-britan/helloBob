(() => {
	let $window = $(window);
	let limit = 640;
	let $menu = $('.menu');
	let $menuList = $('.menu__list');
	let $menuTitle = $('.menu__title');
	let isClosed = false;

	$window.on('resize load', () => {
		if ($window.width() <= limit) {
			$menuList.slideUp();
			isClosed = true;
		} else if ($window.width() > limit && isClosed) {
			$menuList.slideDown();
		}
	});
	$menuTitle.on('click', (event) => {
		let $that = $(event.currentTarget);
		let $currentMenu = $that.parents('.menu');

		$menu.not($currentMenu).removeClass('is--active').find('.menu__list').slideUp();
		$that.parents('.menu').toggleClass('is--active').find('.menu__list').slideToggle();
	});
})();

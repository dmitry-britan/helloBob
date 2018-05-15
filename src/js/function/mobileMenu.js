(() => {
	$('.js-nav-toggle').on('click', (event) => {
		let $that = $(event.currentTarget);
		let $parents = $('html, body');
		let $nav = $('.js-mobile-nav');

		$that.toggleClass('is-active');
		$parents.toggleClass('mobile-menu-opened');
		$nav.toggleClass('is--visible');
	});
})();

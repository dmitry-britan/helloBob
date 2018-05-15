(() => {
	let $notice = $('.js-notice');
	let $noticeBody = $('.js-notice-body');
	let $noticeToggle = $('.js-notice-toggle');

	$noticeBody.slideUp(0);
	$noticeToggle.on('click', (event) => {
		event.preventDefault();
		let $that = $(event.currentTarget);
		let $currentNotice = $that.parents('.js-notice');

		$notice.not($currentNotice).find('.js-notice-toggle').removeClass('is--active')
			.parents('.js-notice').removeClass('is--active').find('.js-notice-body').slideUp();
		$that.toggleClass('is--active').parents('.js-notice').toggleClass('is--active').find('.js-notice-body').slideToggle();
	});
})();

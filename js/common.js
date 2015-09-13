head.ready(function() {

	$('.js-togglefooter').click(function(event) {
		$('.footer__totoggle').slideToggle();
		$(this).toggleClass('is-active');
	});
	$('.js-toggleheader').click(function(event) {
		$('.create').slideToggle();
	});
});
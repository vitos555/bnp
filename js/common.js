head.ready(function() {

	$('.js-togglefooter').click(function(event) {
		$('.footer__totoggle').slideToggle();
		$(this).toggleClass('is-active');
	});
	$('.js-toggleheader').click(function(event) {
		$('.create').slideToggle();
	});
	$('.item').click(function(event) {
		$(this).addClass('is-voted');
	});

	$(window).scroll(function () {
	    if( $(window).scrollTop() > 20){
	      $('.top').addClass('is-small');
	    } else {
	      $('.top').removeClass('is-small');
	    }
	});
});
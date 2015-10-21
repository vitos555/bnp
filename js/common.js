head.ready(function() {

	$('.js-togglefooter').click(function(event) {
		$('.footer__totoggle').slideToggle();
		$(this).toggleClass('is-active');
		return false;
	});
	$('.js-toggleheader').click(function(event) {
		$('.create').slideToggle();
		return false;
	});
	$('.item').click(function(event) {
		$(this).toggleClass('is-voted');
	});
	
	$('.item').click(function(event) {
		$(this).toggleClass('is-runcheckmark');
	});

	$(window).scroll(function () {
	    if( $(window).scrollTop() > 20){
	      $('.top').addClass('is-small');
	    } else {
	      $('.top').removeClass('is-small');
	    }
	});

	$(".js-custom-scroll").mCustomScrollbar({
		theme: "light-thick",
		scrollInertia: 200,
		mouseWheel:{
		preventDefault: true,
		scrollAmount: 150 }
	});
	$('.js-toggleplugin').click(function(event) {
		$('.adplugin').css('display', 'none');
	})
	$('.js-togglepopup').click(function(event) {
		$('.popup').css('display', 'none');
	})
});
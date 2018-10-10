(function ($) {
  $(document).ready(function(){
	// hide .scroll-navbar first
	$(".scroll-navbar").hide();
	// fade in .scroll-navbar
	$(function () {
		$(window).scroll(function () {
            // set distance user needs to scroll before we fadeIn scroll-navbar
			if ($(this).scrollTop() > 500) {
				$('.scroll-navbar').fadeIn();
			} else {
				$('.scroll-navbar').fadeOut();
			}
		});
	});
});
}(jQuery));
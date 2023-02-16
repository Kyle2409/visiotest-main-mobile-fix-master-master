
jQuery(function () {
	var $ = jQuery;
	

	$('.car').on('click', '.next-slide', function () {
		
		 $('.carousel-dots .carousel-dot').find('active').removeClass('active');
		 $('.controls .carousel-dot .carousel-dots').eq($(this).attr('rel')).addClass('active');
		
		 $(this).addClass('active');
	
		if ($('.car').find('.slide-container.active').next().length) {
			$('.car').find('.slide-container.active').removeClass('active').next('.slide-container').addClass('active')
		} else {
			$('.car').find('.slide-container.active').removeClass('active')
			$('.car').find('.slide-container:first-child').addClass('active');
		}

		var rel = $('.car').find('.slide-container.active').attr('rel');
		console.log(rel);
	});
});
$(document).ready(function () {
	    $(".carousel-dot").on('click', function () {
		$('.car').find('.active').removeClass('active');
		$('.car .slides .slide-container').eq($(this).attr('rel')).addClass('active');
		$('.carousel-dots').find('active').removeClass('active');
		$(this).addClass('active');
	});
  });



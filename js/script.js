$('.main-slider').slick({
	useTransform: true,
	autoplay: true,
	autoplaySpeed: 4000,
	dots: true,
	arrows: false,
	fade: true,
	speed: 1500,
	pauseOnFocus: false,
	cssEase: 'ease-out'
});

$(document).ready(function(){
	var link = $('.menu-link');
	var link_active = $('.menu-link_active');
	var menu = $('.menu-open');

	link.click(function(){
		link.toggleClass('menu-link_active');
		menu.toggleClass('menu-open_active');
	});
});

$(window).on('scroll', function(){
	if ($(window).scrollTop()){
		$('nav li').addClass('hide');
	}
	else
	{
		$('nav li').removeClass('hide');
	}
});

new WOW().init();

$(".main-instacontainer").diamonds({
    size : 180, // Size of diamonds in pixels. Both width and height. 
    gap : 5, // Pixels between each square.
    hideIncompleteRow : false, // Hide last row if there are not enough items to fill it completely.
    autoRedraw : true, // Auto redraw diamonds when it detects resizing.
    itemSelector : ".main-instaph" // the css selector to use to select diamonds-items.
});

$(document).ready(function(){
	$(window).scroll(function(){
		if($(this).scrollTop() > 50){
			$('.gototopbtn').fadeIn();
		} else{
			$('.gototopbtn').fadeOut();
		}
	});

	$('.gototopbtn').click(function(){
		$('html, body').animate({scrollTop : 0}, 900);
	});
});
$(function(){

  /*Nav Tab*/
    $(window).scroll(function () {
        if ($(this).scrollTop() > 800) {
            $('.menu')
            .addClass('menu-fixed animated fadeInUp')
            
        } else {
            $('.menu')
            .removeClass('menu-fixed animated fadeInUp')
            .addClass('animated fadeInDown')
        }
    });

	/*Small NAV*/
	var menuBtn = $('.fa-bars');
	var menu    = $('.overlay-nav');
	var close   = $('.fa-times')
	var minMenu = $('.menu-link')

	menuBtn.on('click', function(event) {
		event.preventDefault();
		menu.show('fast');
	});

	close.on('click', function(event) {
		event.preventDefault();
		menu.hide('fast');
	});

	minMenu.on('click', function(event) {
		event.preventDefault();
		menu.hide('fast');
	});


	/*NICE SCROLL BAR*/
	// $(".nicescroll-cursors").getNiceScroll().hide();

	$("body").niceScroll({
		cursorcolor:"rgb(46, 204, 113)",
		scrollspeed: 90,
		mousescrollstep: 40,
		cursorborder: "none",
		autohidemode: "leave",
		cursorwidth: "12px",
		background: "rgb(221, 221, 221)",
		cursordragspeed: 1,
		railpadding: { top: 1, right: 0, left: 0, bottom: 1 },
		zindex: "999",
	});

	/*NAV SCROLL*/

	$('.menu-link').click(function(){
		var scroll_el = $(this).attr('href');
	    $('html, body').animate({scrollTop:$(scroll_el).position().top}, 1500);
	});

});
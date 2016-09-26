// slideshow

$( document ).ready( function() {

	// // slideshow starts at 1
	// number = 1;

	// // sets slides to switch every 3 seconds
	// slideShowInterval = setInterval(autoSlideShow, 3000);
	
	// // automates slideshow
	// function autoSlideShow() {
		
	// 	// when last slide is reached, return to first slide
	// 	if(number == 5) {
	// 		number = 1;
	// 		console.log(1);
	// 	} else {
	// 		number++;
	// 		console.log(1);
	// 	}

	// 	slideShow(number);
	// 	// console.log(number);

	// }

	$(".slideshow > div:gt(0)").hide();

	setInterval(function() { 
	  $('.slideshow > div:first')
	    .fadeOut(1000, function() {
	    	$('.slideshow > div:first').next()
		    .fadeIn(1000)
		    .end()
		    .appendTo('.slideshow');
	    });
	},  5000);

});

var topSpace = $(window).height()*0.25;

var bodyTop = $('body').offset().top;
var missionTop = $('#mission-section').offset().top - topSpace;
var advisoryBoardTop = $('#advisory-board-section').offset().top - topSpace;
var currentMembersTop = $('#current-members-section').offset().top - topSpace;
var supportUsTop = $('#support-us-section').offset().top - topSpace;
var programsTop = $('#programs-section').offset().top - topSpace;
var eventsTop = $('#events-section').offset().top - topSpace;

var whichSection = 'body';

$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();

	// $('.navbar li:not(' + whichSection + ')').css('color', '#000')
	// 				.hover(
	// 					function() {
	// 						$(this).css('color', '#62A8E5');
	// 					},
	// 					function(){
	// 				        $(this).css('color', '#000');
	// 				    });

    if ( bodyTop == scroll) {
    	whichSection = 'body';
    }
    else if ( advisoryBoardTop >= scroll && scroll < currentMembersTop ) {
		// $('#mission').css('color', '#62A8E5');
    	whichSection = '#mission';
    }
    else if ( currentMembersTop >= scroll && scroll < supportUsTop ) {
		// $('#advisoryBoard').css('color', '#62A8E5');
    	whichSection = '#advisoryBoard';
    }
    else if ( supportUsTop >= scroll && scroll < programsTop ) {
		// $('#currentMembers').css('color', '#62A8E5');
    	whichSection = '#currentMembers';
    }
    else if ( programsTop >= scroll && scroll < eventsTop ) {
		// $('#supportUs').css('color', '#62A8E5');
    	whichSection = '#supportUs';
    }
    else if ( eventsTop >= scroll) {
		// $('#programs').css('color', '#62A8E5');
    	whichSection = '#programs';
    }

});

// switches to slide based on number input
function slideShow(number) {

	clearInterval(slideShowInterval);

	// catches slide and li
	var $slide = $('.slides:nth-child(' + number + ')');
	var $li = $('.slideshow-left-panel>ul>li:nth-child(' + number + ')');

	// if slide isn't already active
	if ($slide.hasClass('active') == false) {

		// sets slide to be active
		$('.slides.active').toggleClass('active');
		$slide.toggleClass('active');

		// sets li to be active
		$('.slideshow-left-panel>ul>li.active').toggleClass('active');
		$li.toggleClass('active');

		// hides all slides and shows $slide
		$('.slides').hide();
		$slide.show();

	}

}

$('.slideshow-left-panel>ul>li:nth-child(1)').on('mouseover', function() {
	number = 1;
	slideShow(number);
});

$('.slideshow-left-panel>ul>li:nth-child(2)').on('mouseover', function() {
	number = 2;
	slideShow(number);
});

$('.slideshow-left-panel>ul>li:nth-child(3)').on('mouseover', function() {
	number = 3;
	slideShow(number);
});

$('.slideshow-left-panel>ul>li:nth-child(4)').on('mouseover', function() {
	number = 4;
	slideShow(number);
});

$('.slideshow-left-panel>ul>li:nth-child(5)').on('mouseover', function() {
	number = 5;
	slideShow(number);
});

// other functions
$('.v-dropdown').hover( function() {
	$(this).children('ul').toggle();
});

// // current members
// $('#ganesh-image').hover( function() {
// 	$('#andrea-wrapper').hide();
// 	$('#netana-wrapper').hide();
// 	$('#tess-wrapper').hide();
// 	$('#ganesh-wrapper').show();
// });

function peopleClick(image, wrapperID) {
	if ($('.people-wrapper').not($(wrapperID)).is(':visible')) {
		// $('.people-wrapper').hide();
		// $(wrapperID).show();
		// alert(wrapperID);
	}
	else
	{
		// $(wrapperID).slideToggle();
	}

	if ($(wrapperID).is(':hidden')) {
		image.css('border-color', 'blue');
	}
	$('.people-photo').css('border-color', '#000');
}

$(function() {
	//----- OPEN
	$('[data-popup-open]').on('click', function(e)  {
		var targeted_popup_class = jQuery(this).attr('data-popup-open');
		$('[data-popup="' + targeted_popup_class + '"]').fadeIn(350);

		e.preventDefault();
	});

	//----- CLOSE
	$('[data-popup-close]').on('click', function(e)  {
		var targeted_popup_class = jQuery(this).attr('data-popup-close');
		$('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);

		e.preventDefault();
	});
});

$('#andrea-image').click( function() {
	peopleClick($(this), '#andrea-wrapper');
});

$('#ganesh-image').click( function() {
	peopleClick($(this), '#ganesh-wrapper');
});

$('#netana-image').click( function() {
	peopleClick($(this), '#netana-wrapper');
});

$('#tess-image').click( function() {
	peopleClick($(this), '#tess-wrapper');
});

$('#robert-image').click( function() {
	peopleClick($(this), '#robert-wrapper');
});

$('#dolling-image').click( function() {
	peopleClick($(this), '#dolling-wrapper');
});

$('#jennings-image').click( function() {
	peopleClick($(this), '#jennings-wrapper');
});

$('#marya-image').click( function() {
	peopleClick($(this), '#marya-wrapper');
});

$('#remez-image').click( function() {
	peopleClick($(this), '#remez-wrapper');
});

$('#champagne-image').click( function() {
	peopleClick($(this), '#champagne-wrapper');
});

$('#borrok-image').click( function() {
	peopleClick($(this), '#borrok-wrapper');
});

$('#reese-image').click( function() {
	peopleClick($(this), '#reese-wrapper');
});

$('#miller-image').click( function() {
	peopleClick($(this), '#miller-wrapper');
});

$('#logo-text').click( function() {
	$('body, html').animate({ scrollTop:bodyTop });
});

$('#mission').click( function() {
	$('body, html').animate({ scrollTop:missionTop });
});

$('#advisoryBoard').click( function() {
	$('body, html').animate({ scrollTop:advisoryBoardTop });
});

$('#currentMembers').click( function() {
	$('body, html').animate({ scrollTop:currentMembersTop });
});

$('#supportUs').click( function() {
	$('body, html').animate({ scrollTop:supportUsTop });
});

$('#programs').click( function() {
	$('body, html').animate({ scrollTop:programsTop });
});

$('#events').click( function() {
	$('body, html').animate({ scrollTop:eventsTop });
});

// $('#currentMembers').click( function() {
// 	$('html, body').animate({
// 		scrollTop: ($('.current-members').offset().top)
// 	}, 500);
// 	$('#andrea-image').trigger('click');
// });
/* Navigation Menu Links */
$(document).ready(function(){
	$('.biographylink').click(function(){
		// Scroll to the section.
		if (window.matchMedia('all and (max-width: 900px)').matches) {
			$('html, body').animate({ scrollTop: $('#biography').offset().top - $('#header').height() - 20 }, 300);
			$("#menu").slideUp("300");
		} else {
			$('html, body').animate({ scrollTop: $('#biography').offset().top - $('#menu').height() - 20 }, 300);
		}
	})
});
$(document).ready(function(){
	$('.publicationslink').click(function(){
		if (window.matchMedia('all and (max-width: 900px)').matches) {
			$('html, body').animate({ scrollTop: $('#publications').offset().top - $('#header').height() - 20 }, 300);
			$("#menu").slideUp("300");
		} else {
			$('html, body').animate({ scrollTop: $('#publications').offset().top - $('#menu').height() - 20 }, 300);
		}
	});
});
$(document).ready(function(){
	$('.presentationslink').click(function(){
		if (window.matchMedia('all and (max-width: 900px)').matches) {
			$('html, body').animate({ scrollTop: $('#presentations').offset().top - $('#header').height() - 20 }, 300);
			$("#menu").slideUp("300");
		} else {
			$('html, body').animate({ scrollTop: $('#presentations').offset().top - $('#menu').height() - 20 }, 300);
		}
	});
});
$(document).ready(function(){
	$('.presslink').click(function(){
		if (window.matchMedia('all and (max-width: 900px)').matches) {
			$('html, body').animate({ scrollTop: $('#press').offset().top - $('#header').height() - 20 }, 300);
			$("#menu").slideUp("300");
		} else {
			$('html, body').animate({ scrollTop: $('#press').offset().top - $('#menu').height() - 20 }, 300);
		}
	});
});
$(document).ready(function(){
	$('.teachinglink').click(function(){
		if (window.matchMedia('all and (max-width: 900px)').matches) {
			$('html, body').animate({ scrollTop: $('#teaching').offset().top - $('#header').height() - 20 }, 300);
			$("#menu").slideUp("300");
		} else {
			$('html, body').animate({ scrollTop: $('#teaching').offset().top - $('#menu').height() - 20 }, 300);
		}
	});
});
$(document).ready(function(){
	$('.resourceslink').click(function(){
		if (window.matchMedia('all and (max-width: 900px)').matches) {
			$('html, body').animate({ scrollTop: $('#resources').offset().top - $('#header').height() - 20 }, 300);
			$("#menu").slideUp("300");
		} else {
			$('html, body').animate({ scrollTop: $('#resources').offset().top - $('#menu').height() - 20 }, 300);
		}
	});
});
$(document).ready(function(){
	$('.contactlink').click(function(){
		if (window.matchMedia('all and (max-width: 900px)').matches) {
			$('html, body').animate({ scrollTop: $('#contact').offset().top - $('#header').height() - 20 }, 300);
			$("#menu").slideUp("300");
		} else {
			$('html, body').animate({ scrollTop: $('#contact').offset().top - $('#menu').height() - 20 }, 300);
		}
	});
});

$(document).ready(function(){
	$('.textbooklink').click(function(){
		if (window.matchMedia('all and (max-width: 900px)').matches) {
			$('html, body').animate({ scrollTop: $('#textbook').offset().top - $('#header').height() - 20 }, 300);
			$("#menu").slideUp("300");
		} else {
			$('html, body').animate({ scrollTop: $('#textbook').offset().top - $('#menu').height() - 20 }, 300);
		}
	});
});

$(document).ready(function(){
	$('.qubittouchdownlink').click(function(){
		if (window.matchMedia('all and (max-width: 900px)').matches) {
			$('html, body').animate({ scrollTop: $('#qubittouchdown').offset().top - $('#header').height() - 20 }, 300);
			$("#menu").slideUp("300");
		} else {
			$('html, body').animate({ scrollTop: $('#qubittouchdown').offset().top - $('#menu').height() - 20 }, 300);
		}
	});
});

/* Expand Content */
$(document).ready(function(){
	$("#teaching_reviews_physics1a").click(function(){
	      	$("#teaching_reviews_physics1a_contents").slideToggle("slow");
	});
});
$(document).ready(function(){
	$("#teaching_reviews_physics1al").click(function(){
	      	$("#teaching_reviews_physics1al_contents").slideToggle("slow");
	});
});

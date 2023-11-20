/* Navigation Menu Links */
$(document).ready(function(){
	$('.integerslink').click(function(){
		// Scroll to the section.
		if (window.matchMedia('all and (max-width: 900px)').matches) {
			$('html, body').animate({ scrollTop: $('#unit1').offset().top - $('#header').height() - 20 }, 300);
			$("#menu").slideUp("300");
		} else {
			$('html, body').animate({ scrollTop: $('#unit1').offset().top - $('#menu').height() - 20 }, 300);
		}
	})
});
$(document).ready(function(){
	$('.fractionslink').click(function(){
		if (window.matchMedia('all and (max-width: 900px)').matches) {
			$('html, body').animate({ scrollTop: $('#unit2').offset().top - $('#header').height() - 20 }, 300);
			$("#menu").slideUp("300");
		} else {
			$('html, body').animate({ scrollTop: $('#unit2').offset().top - $('#menu').height() - 20 }, 300);
		}
	});
});
$(document).ready(function(){
	$('.decimalslink').click(function(){
		if (window.matchMedia('all and (max-width: 900px)').matches) {
			$('html, body').animate({ scrollTop: $('#unit3').offset().top - $('#header').height() - 20 }, 300);
			$("#menu").slideUp("300");
		} else {
			$('html, body').animate({ scrollTop: $('#unit3').offset().top - $('#menu').height() - 20 }, 300);
		}
	});
});
$(document).ready(function(){
	$('.polynomialslink').click(function(){
		if (window.matchMedia('all and (max-width: 900px)').matches) {
			$('html, body').animate({ scrollTop: $('#unit4').offset().top - $('#header').height() - 20 }, 300);
			$("#menu").slideUp("300");
		} else {
			$('html, body').animate({ scrollTop: $('#unit4').offset().top - $('#menu').height() - 20 }, 300);
		}
	});
});
$(document).ready(function(){
	$('.percentslink').click(function(){
		if (window.matchMedia('all and (max-width: 900px)').matches) {
			$('html, body').animate({ scrollTop: $('#unit5').offset().top - $('#header').height() - 20 }, 300);
			$("#menu").slideUp("300");
		} else {
			$('html, body').animate({ scrollTop: $('#unit5').offset().top - $('#menu').height() - 20 }, 300);
		}
	});
});
$(document).ready(function(){
	$('.projectlink').click(function(){
		if (window.matchMedia('all and (max-width: 900px)').matches) {
			$('html, body').animate({ scrollTop: $('#unit6').offset().top - $('#header').height() - 20 }, 300);
			$("#menu").slideUp("300");
		} else {
			$('html, body').animate({ scrollTop: $('#unit6').offset().top - $('#menu').height() - 20 }, 300);
		}
	});
});

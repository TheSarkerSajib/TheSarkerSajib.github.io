/* Full Version. Scroll Navigation Menu. */

$(document).ready(function(){ 
	$(window).scroll(function() {
	    	if ($(window).scrollTop() > 190) { /* 220 - 30 = 190p */
			/* As we scroll down, keep showing the menu by fixing it to the top of the page. */
			$("#menu-stripe").css('position', 'fixed');
			$("#menu-stripe").css('top', '0px');
	      	} else {
			/* As we scroll up, put the menu with the rest of the header. */
			$("#menu-stripe").css('position', 'absolute');
			$("#menu-stripe").css('top', '190px');
		}
	});
});

/* Mobile Version. Show/Hide Navigation Menu. */

$(document).ready(function(){
	$("#menubutton").click(function(){
	      	$("#menu").slideToggle("300");
	});
});

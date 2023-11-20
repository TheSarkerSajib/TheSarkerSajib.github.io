/* Show Email Address */
$(document).ready(function(){
	$('#email').click(function(){
		var parts = ["creighton", "thomas", "&#46;", "edu", "wong", "&#64;"];
		$('#email').html(parts[1] + parts[4] + parts[5] + parts[0] + parts[2] + parts[3]);
	});
});

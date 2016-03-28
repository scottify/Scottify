$(document).ready(function() {

	// Mobile Navigation

	$('.toggle').click(function () {
		$(this).toggleClass('active');
		$('.nav-list').slideToggle(300);
	}); 

}); 
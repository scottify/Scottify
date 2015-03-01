$(document).ready(function() {
	$('.slider').bxSlider({
  		speed: 700,
  		infiniteLoop: true,
  		nextText: '&#xf054;',
  		prevText: '&#xf053;'
	});
	$('.bx-pager').wrapInner('<div class="bx-pager-inner"></div>');
}); 
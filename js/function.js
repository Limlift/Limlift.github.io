function checkMenu(char) {
	var x;
	$('.navbar .menu a').each(function() {
		x = $(this).attr('data');
		if (char.indexOf(x)>=0) {
			$(this).addClass('active');
		}
	})
}
$(function() {
	checkMenu(window.location.href.toString());
})
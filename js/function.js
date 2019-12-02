function checkMenu(char) {
	var x;
	$('header .menu a').each(function() {
		x = $(this).attr('data');
		if (char.indexOf(x)>=0) {
			$(this).addClass('active');
		}
	})
}
$(function() {
	var char = window.location.href;
	char = char.toString();
	checkMenu(char);
})
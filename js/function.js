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
	$(document).scroll(function() {
		var top = $(document).scrollTop();
		console.log(top);
		if (0<top&&top<160) {
			$('header .large').css('height',160-top/160*80);
			$('header').css('background-color','rgba(255,255,255,1)');
			$('header').css('transform','translated3d(0px,0px,0px)');
		}else if(top>=160){
			$('header .large').css('height','80px');
			$('header').css('transform','translated3d(0px,-180px,0px)');
		}else{
			$('header').css('background-color','rgba(255,255,255,.8)');
		}
	})
	
})
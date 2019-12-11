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
	var Width = document.body.clientWidth,HeaderH,HeaderAH;
	if (Width>1200) {
		HeaderH=160;
		HeaderAH=120;
	}else if (Width>414&&Width<=1200) {
		HeaderH=120;
		HeaderAH=80;
	}else if (Width<=414) {
		HeaderAH=HeaderH=180;
	}
	$(document).scroll(function() {
		var top = $(document).scrollTop();
		if (0<top&&top<120) {
			$('header .large').css('height',HeaderH-top/HeaderH*HeaderAH);
			$('header').css('background-color','rgba(255,255,255,1)');
			$('header').css('transform','translated3d(0px,0px,0px)');
		}else if(top>=120){
			$('header .large').css('height',HeaderAH+'px');
			$('header').css('transform','translated3d(0px,-180px,0px)');
		}else{
			$('header').css('background-color','rgba(255,255,255,.8)');
		}
	})
	
})
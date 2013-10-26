$(function(){
	var nav = $('nav ul');
	var btn = $("#responsive-btn");

	var resUpDownState = 0; // responsive mode, 0 = up , 1 = down

	btn.click(function(){
		if(window.innerWidth <= 768) {
			if(nav.css('display') == 'none'){
				nav.slideDown('fast');
			}else{
				nav.slideUp('fast');
			}
		}
	});

	$(window).resize(function(){
		if($(window).width() > 768 && nav.css('display') == 'none'){
			nav.show();
		}
	});

});

function navigationBackground(){

	var menu = $('#main-nav');
	var logo = $('#logo');
	var logoOnScroll = $('#logo-scroll');
	var menuText = $('nav ul li')

	if($(window).scrollTop() > 50){
		menu.css({
			"background-color":"#fff",
			"-webkit-box-shadow":"0px 3px 5px 0px rgba(61,61,73,0.1)"
		});
		logo.hide();
		logoOnScroll.show();
		menuText.css('color', '#3d3d49');
	}else if($(window).scrollTop() <= 50){
		menu.css({
			"background-color":"transparent",
			"box-shadow":"none"
		});
		logoOnScroll.hide();
		logo.show();
		menuText.css('color', '#fff');
		
	}


};

navigationBackground();

$(window).scroll(function(){
	navigationBackground();
})

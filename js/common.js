$(function(){
	$('.nav-wrapper ul > li > ul').click(function(e){
	}).hide();
	if($(window).width() <= 640){
		$('.nav-wrapper ul>li').unbind();
		$('.nav-wrapper ul>li, .nav-wrapper > li > ul > li').bind({
			click:function(e){
				e.stopPropagation();
				var selfClick = $(this).find('ul').is(':visible');
				if(selfClick){
					$(this).parent().find('>li ul:visible').slideToggle('fast');
					return;
				}
				$(this).parent().find('>li ul:visible').slideToggle('fast');
				$(this).find('ul:first').slideToggle('fast');
			}
		})
	}else{
		$('.nav-wrapper>nav>ul>li').unbind();
		$('.nav-wrapper>nav>ul>li').bind({
			mouseenter:function(e){
				$(this)
				.find('ul')
				.stop(true,true)
				.slideDown('fast');
			},
			mouseleave:function(e){
				$(this)
				.find('ul')
				.delay(200)
				.fadeOut('fast');
			},
		});
	}
})
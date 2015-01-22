$(function(){
	$('.filter>ul > li > ul').click(function(e){
	}).hide();
	if($(window).width() > 1280 || $(window).width() <= 640){
		$('.filter>ul>li').unbind();
		$('.filter>ul>li').bind({
			click:function(){
				var selfClick = $(this).find('ul').is(':visible');
				if(selfClick){
					$(this).parent().find('>li ul:visible').slideToggle('fast');
					return;
				}
				$(this).parent().find('>li ul:visible').slideToggle('fast');
				$(this).find('ul').slideToggle('fast');
			}
		})
	}else if($(window).width() <=1280){
		$('.filter>ul>li').unbind();
		$('.filter>ul>li').bind({
			mouseenter:function(e){
				$(this)
				.find('ul')
				.stop(true,true)
				.slideDown('fast');
			},
			mouseleave:function(e){
				$(this)
				.find('ul')
				.stop(true,true)
				.fadeOut('fast');
			},
		});
	} 
	
})
$(function(){
	$('.filter>ul > li > ul').click(function(e){
	}).hide();
	if($(window).width() > 1280){
		$('.filter>ul>li').unbind();
		$('.filter>ul>li').bind({
			click:function(){
				var selfClick = $(this).find('ul').is(':visible');
				if(selfClick){
					$(this).parent().find('>li ul:visible').slideToggle();
					return;
				}
				$(this).parent().find('>li ul:visible').slideToggle();
				$(this).find('ul').slideToggle();
			}
		})
	}else if($(window).width() <=1280 ){
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
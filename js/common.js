$(function(){
	$('.filter ul > li ul').click(function(e){
	}).hide();
	$('.filter ul li').click(function(e){
		e.preventDefault();
		e.stopPropagation();
	})
})
var App = App || {};
App.Templates = {};
App.Templates.gallery = [
	'<div class="nwrapper" style="width:<%= opts.width %>px;height:<%= opts.height %>px;overflow:hidden;position:relative;">',
		'<ul class="nslider" style="width:<%=imageList.length * opts.width %>px<% %>;height:<%= opts.height %>px;position:absolute;top:0px;">',
			'<% _.each(imageList,function(i){ %><li style="width:<%= opts.width %>px;height:100%;background-image:url(<%= i %>);background-size: 100%;float:left"></li> <% }) %>',
		'</ul>',
	'</div>',
	'<div class="control">',
		'<a class="prev" href="#"></a>',
		'<a class="next" href="#"></a>',
	'</div>',
	'<div class="thumbs">',
		'<ul class="nthumbslider">',
			'<% _.each(imageList,function(item, index){ %><li><a data-index="<%= index %>" href=""></a></li> <% }) %>',
		'</ul>',
	'</div>'
].join("\n");

(function($){
	$.fn.ngallerySlider= function(options){
		var opts = $.extend({},$.fn.ngallerySlider.defaults, options);
		var hightlights = function(current){
			$('.nthumbslider').find('li').removeClass('active');
	        $('.nthumbslider').find('li:eq('+current+')').addClass('active');
	        
		}
		var slide = function(current){
			hightlights(current);
			var slide_to    = parseInt(-opts.width * current);
		   	$('.nslider').stop().animate({'left':slide_to},{ duration: 1500, easing:opts.easing});
		}

		return this.each(function(){
			///Find List Image
			var $images = $(this).find(".slider-item"),
				$totalImage = $images.length,
				$wrapper,
				$sliderTemplate,
				$imagesList = [],
				loaded = 0,
				current = 0;
				$that = $(this);
			///Initialize
			opts.width = $(this).width();
			///Load Image 
			$images.each(function(){
				var image = new Image();
				image.onload = function(){
					++loaded;
					if(loaded == $totalImage)
					{	
						var nextSlide = function(){
							++current;
							if(current >= $totalImage){
								if(opts.circular){
									current = 0;
								}
								else{
									--current;
									return false;
								}
							}
	        				slide(current);
	        			};
	        			var prevSlide = function(){
							--current;
							console.log(current);
							if(current < 0){
								if(opts.circular){
									current = $totalImage-1;
								}
								else{
									++current;
									return false;
								}
							}
	        				slide(current);
	        			};
	        			$that.on('click','.prev',function(e){
	        				e.preventDefault();	  
	        				prevSlide();      				
	        			});
	        			$that.on('click','.next',function(e){
	        				e.preventDefault();	  
	        				nextSlide();      				
	        			});
	        			$that.on('click','.thumbs li a',function(e){
	        				e.preventDefault();
	        				slide($(this).data('index'));
	        				$(this).parent().addClass('active');
	        			});
	        			$sliderTemplate = _.template(opts.template);
						$that.append($sliderTemplate({imageList:$imagesList,opts:opts}));
						hightlights(0);
						if(opts.auto != 0){
							setInterval(function(){
	        					nextSlide();
							},400);
	        			}
					}
				}
				image.src = $(this).data('img');
				$imagesList.push(image.src);
			});
		});

	}
	$.fn.ngallerySlider.defaults = {
		template:App.Templates.gallery,
		auto    : 0,
		width	: 1000,
		height	: 500,
		thumbWidth:70,
		thumbHeight:50,
		easing:'easeOutCubic',
		circular: true
	};
	
})(jQuery);

$('.ngallery-slider').ngallerySlider();
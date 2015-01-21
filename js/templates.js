var App = App || {};
App.Templates = {};

App.Templates.gallery = [
	'<div class="nwrapper" style="width:1000px;height:500px;overflow:hidden;position:relative;">',
		'<ul class="nslider" style="width:<%=imageList.length * opts.width %>px<% %>;height:<%= opts.height %>px;position:absolute;top:0px;">',
			'<% _.each(imageList,function(i){ %><li style="width:1000px;height:100%;background-image:url(<%= i %>);background-size: 100%;float:left"></li> <% }) %>',
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
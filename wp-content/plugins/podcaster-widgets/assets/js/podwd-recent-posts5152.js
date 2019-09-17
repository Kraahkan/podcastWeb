jQuery(document).ready(function($){
	$( ".recent_tabs" ).tabs({
		collapsible: true,
		active: true,
		heightStyle: 'content',
		fx: { 
	        opacity: 'toggle',
	        duration:'slow'
	    }
	});

	$(".acco_loading").fadeOut("slow");
	$(".recent_tabs").fadeIn("slow");

});
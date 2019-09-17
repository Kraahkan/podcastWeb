"use strict";


jQuery(document).ready(function($) {
	
	$(window).on("load, resize", function() {
	    var viewportWidth = $(window).width();

	    // Add CSS class ".responsive-menu-active" once the menu is actually active
	    if (viewportWidth < 992) {
	    	$('#nav').removeClass('responsive-menu-inactive');
	        $('#nav').addClass('responsive-menu-active');
	    } else {
	    	$('#nav').addClass('responsive-menu-inactive');
	    	$('#nav').removeClass('responsive-menu-active');
	    }
	
	}).resize();

	if ( $('#nav').hasClass('drop') ) {

		$('.open-menu').toggle(function(){
			$('#nav.drop').stop().height('auto').slideDown(500);
		}, function(){
			$('#nav.drop').stop().slideUp(500);
		});

	} else {
		/* Toggle Menu */
		var windowWidth = jQuery(window).width();
		
		$('.above').on('click','.open-menu', function() {
			if ( $('#nav').hasClass('open') ) {
				$('#nav').removeClass('open');
			} else {
				$('#nav').addClass('open');
			}
		});
		
		if(windowWidth < 1025){
			
			$('#nav.toggle .menu-item-has-children > a').addClass('menu-trigger');

			$('#nav.toggle').on('click', '.menu-item-has-children > a.menu-trigger', function(event) {
				event.preventDefault();
				if ( $(this).next('ul').hasClass('open') ) {
					$(this).removeClass('active');
					$(this).next('.sub-menu').removeClass('open');
				} else {
					$(this).closest('ul').find('.active').removeClass('active');
					$(this).next('.sub-menu').addClass('open');
					$(this).addClass('active');
				}
			});
		}
	}


	$('.above .nav-search-form').on('click','.open-search-bar', function(event) {
		event.preventDefault();
		if ( $('.search-form-drop').hasClass('open') ) {
			$('.search-form-drop').removeClass('open');
		} else {
			$('.search-form-drop').addClass('open');
		}
	});


	/* Loading Header */
    jQuery('#loading_bg').addClass("hide_bg");


	/* Add class for lightbox 2 and galleries */
	jQuery(".gallery-item .image_cont a").attr('data-lightbox', 'lightbox');


	/* Resize Navigation Bar */
	jQuery(document).on("scroll",function() {
		var windowWidth = jQuery(window).width();
		if( windowWidth > 1024){
			if(jQuery(document).scrollTop() > 0){ 
				jQuery(".above.large_nav").removeClass("large_nav").addClass("small_nav");
				jQuery(".nav-placeholder.large_nav").addClass("show");
			} else {
				jQuery(".above.small_nav").removeClass("small_nav").addClass("large_nav");
				jQuery(".nav-placeholder.large_nav").removeClass("show");
			}
		}
	});
});
"use strict";

jQuery(function($){ // use jQuery code inside this to avoid "$ is not defined" error

	$('.list-of-episodes .row.masonry-container').imagesLoaded( function() {
		var $grid = $('.list-of-episodes .row.masonry-container').masonry({
			itemSelector: '.post',
			percentPosition: true,
			columnWidth: '.grid-sizer',
			gutter: '.gutter-sizer',
		});

		$( '.pod_loadmore' ).on( 'click', function() {
	 		
			var button = $(this);
			var data = {
				'action': 'loadmore',
				'query': pod_loadmore_params.posts, // that's how we get params from wp_localize_script() function
				'page' : pod_loadmore_params.current_page
			};
	 	
			$.ajax({ // you can also use $.post here
				url : pod_loadmore_params.ajaxurl, // AJAX handler
				data : data,
				type : 'POST',
				beforeSend : function ( xhr ) {
					button.text('Loading...'); // change the button text, you can also add a preloader image
				},
				success : function( data ){

					if( data ) { 

						// Change Text on Button
						button.text( 'More posts' ); // insert new posts
						
	 					// Inside the AJAX success() 
						var $items = $( data ); // data is the HTML of loaded posts
						$grid.append( $items ).imagesLoaded(function(){
							$(".post.format-video").fitVids();			
							$( window.wp.mediaelement.initialize );	
							$grid.masonry( 'appended', $items ).masonry( 'reloadItems' );
						});

						// Increase page count
						pod_loadmore_params.current_page++;

						// If last page, remove the button
						if ( pod_loadmore_params.current_page == pod_loadmore_params.max_page ) {
							button.remove(); 
						}
	 
						// you can also fire the "post-load" event here if you use a plugin that requires it
						// $( document.body ).trigger( 'post-load' );
					} else {
						button.remove(); // if no data, remove the button as well
					}

				}
			});
		});
	});
});
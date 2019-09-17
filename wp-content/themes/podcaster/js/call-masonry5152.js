"use strict";

jQuery(document).ready(function($){
	
	/* Podcast Archive (Grid) */
	var $container_pod_library = $('.template-podcast-archive-grid .entries-container .entries-grid');
	$container_pod_library.imagesLoaded(function () {
		$container_pod_library.masonry({
			itemSelector: '.template-podcast-archive-grid .entries-container .entries-grid .podpost',
			percentPosition: true,
			columnWidth: '.grid-sizer',
			gutter: '.gutter-sizer',
			horizontalOrder: true,
			originLeft: true
		});
	});


	/* Legacy Episode Archive (Grid) */
	var $legacy_container_pod_library = $('.page-template-page-podcastarchive .entries.grid .row');
	$legacy_container_pod_library.imagesLoaded(function () {
		$legacy_container_pod_library.masonry({
			itemSelector: '.page-template-page-podcastarchive .entries.grid .row .podpost',
			percentPosition: true,
			columnWidth: '.grid-sizer',
			gutter: '.gutter-sizer',
			horizontalOrder: true,
			originLeft: true
		});
	});

});
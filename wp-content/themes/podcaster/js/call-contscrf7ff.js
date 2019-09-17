"use strict";

(function($){
    //$(window).load(function(){
    $( window ).on( 'load', function(){
        $( '.wp-playlist .wp-playlist-tracks' ).mCustomScrollbar({
            mouseWheel: true,
            autoDraggerLength: true,
        });
    });
})(jQuery);
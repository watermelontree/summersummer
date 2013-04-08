(function($){

	var resize = function(){
		var w_height = $( window ).height(),
			w_width = $( window ).width()

		$( '#about' ).css({
			height: $( window ).height()
		}).fadeIn();

		var path_menu = $( '#path_menu' );
		path_menu.css({
			left: (w_width - path_menu.width()) / 2
		}).animate({
			top: (w_height - path_menu.height()) / 2,
			opacity: 1
		}, 1500);
	}

	var path = function() {
		$( '#avatar' ).click(function(){

		});
	}

$(function(){

	resize();

	$( window ).resize(function(){
		resize();
	});

})
})(jQuery);
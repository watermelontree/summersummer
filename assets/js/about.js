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
			var $this = $( this );
			if( $this.hasClass('rollin') ) {
				$this.removeClass('rollin').addClass('rollout');
			}else{
				$this.removeClass('rollout').addClass('rollin');
			}

			$( '.collect' ).find( '.item' ).each(function(index){
				var left, top;
				switch(index){
					case 0:
						left = '-15px';
						top = 40;
						break;
					case 1:
						left = 50;
						top = 80;
						break;
					case 2:
						left = 120;
						top = 40;
						break;
				}
				var $this = $( this );
				if( $this.hasClass('rollin') ) {
					$this.removeClass('rollin').addClass('rollout')
					.animate({
						top: '-='+top,
						left: 50
					});
				} else {
					$this.removeClass('rollout').addClass('rollin')
					.animate({
						top: top,
						left: left
					});
				}
				
			});
		});
	}

$(function(){

	path();

	resize();

	$( window ).resize(function(){
		resize();
	});

})
})(jQuery);
(function($){
$(function(){

	$( '.section' ).not( '.section-below' ).hover(function(){
		$( this ).children( '.desc' ).animate({
			left: '400px'
		},1000);

	}, function(){
		$( this ).children( '.desc' ).animate({
			left: '-400px'
		},1000);
	}).click(function(){
		window.location.href = window.location.href + $( this ).data( 'target' );
	});

})
})(jQuery);
(function($){
$(function(){

	$( '.section' ).not( '.section-below' ).hover(function(){
		$( this ).children( '.desc' )
		.filter(':not(:animated)').animate({
			left: '20px'
		}, 1000);
		// $( this ).children( '.desc' ).stop(true, false).animate({
		// 	left: '20px'
		// }, 1000);
	}, function(){
		$( this ).children( '.desc' ).animate({
			left: '-400px'
		}, 1000);
		// $( this ).children( '.desc' ).stop(true, false).animate({
		// 	left: '-400px'
		// }, 1000);
	}).click(function(){
		window.location.href = window.location.href + $( this ).data( 'target' );
	});

})
})(jQuery);
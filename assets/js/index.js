(function($){
$(function(){

	$( '.section' ).not( '.section-below' ).hover(function(){
		$( this ).find( '.desc' ).animate({
			left: '100px'
		},1000);

	}, function(){
		$( this ).find( '.desc' ).animate({
			left: '-100px'
		},1000);
	}); 

})
})(jQuery);
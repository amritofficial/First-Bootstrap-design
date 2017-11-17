$(window).stellar({
});

/*(function(){
	var ua = navigator.userAgent,
	isMobileWebkit = /WebKit/.test(ua) && /Mobile/.test(ua);
	
	if(isMobileWebkit){
		$('html').addClass('mobile');
	}	
	
	var iScrollInstance;
	if(isMobileWebkit){
		iScrollInstance = new iscroll('wrapper');	
		
	$('#scroller').stellar({
		scrollProperty: 'transform',
		positionProperty: 'transform',
		horizontalScrolling: false,
		verticalOffset: 150	
	});
}	else{
	$.stellar({
		horizontalScrolling:false,
		verticalOffset: 150		
	});
	}
	
})();*/
$(function(){
		if(navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/)){
			$('#ios-notice').removeClass('hidden');
			$('.parallax-container').height( $(window).height() * 0.5 | 0);	
		} else{
			$(window).resize(function(){
				var parallaxHeight = Math.max($(window).height() * 0.7, 200) | 0;
				$('.parallax-container').height(parallaxHeight);
			}).trigger('resize');
		}
		
	});
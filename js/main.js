$(document).ready(function(){
	$("#price").autoNumeric('init');
	//var s = skrollr.init();

	$(window).scroll( function( e )
	{
		var maxScroll = $(document).height() - $(window).height();
		var ratio = $(window).scrollTop() / maxScroll;
		var start = -50;
		var end = 0;
		var offset = start + ( end - start ) * ratio;
		
		$("#background").css({
			y: offset+"%"
		});
	});
		
	$("*[data-tip]").click( function(){
		var price = $("#price").val();
		price = Number( price.replace(/[^0-9\.]+/g,""));
		
		$("#price")
			.val( price + $(this).data("tip") )
			.autoNumeric('update');
			
		return false;
	});
	
	$("a[href^='#']").on('click', function(e) {

   // prevent default anchor click behavior
   e.preventDefault();

   
   
   // store hash
   var hash = this.hash;
   var top = $(hash).offset().top;
   var centered = top  - .5 * ($(window).height() - $(hash).outerHeight());
   var position = Math.min( top, centered );

   // animate
   $('html, body').animate({
       scrollTop: position
     }, 300, function(){

       // when done, add hash to url
       // (default click behaviour)
       window.location.hash = hash;
     });
     



});


})
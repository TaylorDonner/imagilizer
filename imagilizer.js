$(document).ready(function(){
	$('img:first').toggleClass('active');

	var first_img = $('img:first').clone().appendTo('#panel').removeAttr('width').removeClass('active');
	
	$('#sidebar img').click(function(){
		first_img.fadeOut('fast');
		if($(this).hasClass('active')){
			$(this).removeClass('active');
		} else {
			$(this).siblings().removeClass('active');
			$(this).addClass('active');
		}

		$(this).clone().appendTo('#panel').removeAttr('width').removeClass('active');
		// if($('#panel img').hasClass('active'))

	});		

	


	
});
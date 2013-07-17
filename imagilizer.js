
$(document).ready(function(){
	// Show the first thumbnail image and append it to the panel
	$('img:first').toggleClass('active');
	var first_img = $('img:first').clone().appendTo('#panel').removeAttr('width').removeClass('active');
	// Changing the status and showing the thumbnail in the panel when clicked.
	$('#sidebar img').click(function(){
		var selected_photo = $(this);
		// Change active status of the thumbnails
		if($(this).hasClass('active')){
		} else {
			$(this).siblings().removeClass('active');
			$(this).addClass('active');
		}
		// Change panel photo when thumbnail is clicked
		$('#panel img').fadeOut(function(){
			selected_photo.clone().appendTo('#panel').removeAttr('width').removeClass('active');
			$(this).remove();
		});
	});			
});
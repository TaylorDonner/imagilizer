function display_photo(element){
	var cloned_element = element.clone();
	cloned_element
	.appendTo('#panel')
	.removeAttr('width')
	.addClass('active');
	return cloned_element;
}

function change_thumbnail_class(element){
	if(element.hasClass('active')){
		} else {
			element.siblings().removeClass('active');
			element.addClass('active');
		}
}

$(document).ready(function(){
	// Show the first thumbnail image and append it to the panel
	$('img:first').toggleClass('active');
	display_photo($('#sidebar img:first'));
	// Changing the status and showing the thumbnail in the panel when clicked.
	$('#sidebar img').click(function(){
		var selected_photo = $(this);
		// Change active status of the thumbnails

		change_thumbnail_class($(this));
	
		// Change panel photo when thumbnail is clicked
		$('#panel img').fadeOut('slow');

		display_photo(selected_photo).hide().fadeIn('slow');
		$('#panel img:first').remove();
			
			
	});			
});
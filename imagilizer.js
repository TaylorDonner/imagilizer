$(document).ready(function(){
	var caption = $('.caption');
	var sidebarImages = $('#sidebar img');
	// Show the first thumbnail image and append it to the panel
	$('img:first').toggleClass('active');
	display_photo(sidebarImages.first());
	// This needs to be refactored, but I display data-caption on page load
	caption.text(display_photo(sidebarImages.first()).attr('data-caption'));
	// Changing the status and showing the thumbnail in the panel when clicked.
	sidebarImages.click(function(){
		var selected_photo = $(this);
		// Change active status of the thumbnails
		change_thumbnail_class($(this));
		// Change panel photo and add caption to the top of the panel when thumbnail is clicked 
		$('#panel img').fadeOut('slow');
		caption.text(display_photo(selected_photo).hide().fadeIn('slow').attr('data-caption'));
		$('#panel img:first').remove();		
	});			
});

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
// function show_caption(display_photo(element))

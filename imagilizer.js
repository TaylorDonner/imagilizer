$(document).ready(function(){
	var caption = $('.caption');
	var sidebarImages = $('#sidebar img');
	
	// Show the first thumbnail image and append it to the panel
	$('img:first').toggleClass('active');
	displayPhoto(sidebarImages.first());
	// This needs to be refactored, but I display data-caption on page load
	caption.text(displayPhoto(sidebarImages.first()).attr('data-caption'));
	// Changing the status and showing the thumbnail in the panel when clicked.
	sidebarImages.click(function(){
		var panelImg = $('#panel img');
		var selectedPhoto = $(this);
		// Change active status of the thumbnails
		changeThumbnailClass($(this));
		// Change panel photo and add caption to the top of the panel when thumbnail is clicked 
		panelImg.fadeOut('slow');
		caption.text(displayPhoto(selectedPhoto).hide().fadeIn('slow').attr('data-caption'));
		panelImg.first().remove();		
	});			
});

function displayPhoto(element){
	var clonedElement = element.clone();
	clonedElement
	.appendTo('#panel')
	.removeAttr('width')
	.addClass('active');
	return clonedElement;
}

function changeThumbnailClass(element){
	if(element.hasClass('active')){
		} else {
			element.siblings().removeClass('active');
			element.addClass('active');
		}
}
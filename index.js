$(document).ready(function(){
	$('.hamburger').click(function(){
		if($('#nav-dropdown:visible').length){
			$('#nav-dropdown').slideUp(100);
			//$('#nav-dropdown').css('display','none');	
			$('#nav-dropdown li a').hide();
		} else {
			$('#nav-dropdown').slideDown(100);
			$('#nav-dropdown li a').show();
		}
	});
});


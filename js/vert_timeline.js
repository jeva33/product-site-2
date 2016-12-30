$(document).ready( function() {

	$('.drill-down-arrow', this).click(function() {
		
		var isChecked = $(event.target).is('.drill-down-arrow');
		    if(isChecked) { 
		        $('.section-content', this).slideToggle('fast');
		        $(this).removeClass('drill-down-arrow').addClass('arrow-close-icon');
		    } 
		    else {
		    	$('.section-content', this).slideToggle();
		        $(this).removeClass('arrow-close-icon').addClass('drill-down-arrow');
		    }
	})

});	
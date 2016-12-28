$(document).ready( function() {

	$('.drill-down-arrow').click(function() {

		var isChecked = $(event.target).is('.drill-down-arrow');
		    if(isChecked) { 
		        $('.section-content', this).slideToggle('fast');
		    }
	})

});
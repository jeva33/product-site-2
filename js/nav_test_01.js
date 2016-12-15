$(document).ready( function() {
	
$('.milestone-1').click(function(){
    $('.timeline').animate({
        scrollTop: $(".milestone-1-target").offset().top},
        'slow');
	});

$('.milestone-2').click(function(){
    $('.timeline').animate({
        scrollTop: $(".milestone-2-target").offset().top},
        'slow');
	});

$('.milestone-3').click(function(){
    $('.timeline').animate({
        scrollTop: $(".milestone-3-target").offset().top},
        'slow');
	});


	// $("button.milestone-2").click(function(){
 //        $("li.milestone-2").center();
 //    });

 //    $("button.milestone-3").click(function(){
 //    	$("li.milestone-3").center();
 //    });
});
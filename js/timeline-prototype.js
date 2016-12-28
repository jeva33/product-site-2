$(document).ready(function(){


    //All "dismiss" button functions
    $("button.dismiss-button").click(function(){

        //Hides the first truncated card (web-container-1) from the stack
        $(".web-container-1").hide( "drop", "fast", function() {

            //Prepends the truncated card to the "unique-date-dummy" in the .timeline div ...
            // ... "prepend" insures that each truncated card is last-in/first-out
            $(".timeline-point-2").prepend($( ".web-container-1" ));

            //Hides the "open" and "dismiss" button bar
            $(".status-bar-1").hide();

            //$(".web-container-1").css( "top", "-18px" );
            $(".web-container-1").css( "left", "-16px" );
            $("h2").css( "width", "380px" );

            //Alters the size of the truncated card so that it fits in the .timeline dimensions
            $(".web-title-container-1").css( "border-radius", "4px" );
            $(".web-title-container-1").css( "margin", "14px" );

            //Provides a delay so the truncated card can move off screen and then back on
            $(".web-container-1").delay(500);

            //"Swings the truncated card into the .timeline from the left
            $(".web-container-1").effect( "slide", "swing" );

            //Fades-In the next truncated card in the stack
            $(".web-container-2").fadeIn();

            //Swaps the 'fake' card stack image from "3 left" to "2 left"
            $('.stack-image').attr('src','images/stack_artwork_2left.svg')

            //Fades-in the timestamp if it doesn't already show in the timeline
            $("#timeline-point-1").fadeIn(1000);
        });
    });

    $("button.dismiss-button-2").click(function(){
        $(".web-container-2").css("display", "inline-block");
        $(".web-container-2").hide( "drop", "fast", function() {
            $(".status-bar-2").hide();
            $(".timeline-point-2").prepend($(".web-container-2"));

            $(".web-title-container-2").css("border-radius", "4px");
            $(".web-title-container-2").css("margin", "0 14px");
            $(".web-container-2").css("left", "-16px");
            $("h2").css("width", "380px");

            $(".web-container-2").delay(500);
            $(".web-container-2").effect("slide");
            $(".web-container-3").fadeIn();
            $('.stack-image').attr('src', 'images/stack_artwork_1left.svg')
            $(".timeline-point-2").fadeIn(1000);
        });
    });

    //Need logic to understand what is the final truncated card in the current update ...
    // ... or a callback that all current truncated cards in stack have been moved to .timeline
    $("button.dismiss-button-3").click(function(){
        $(".web-container-3").hide( "drop", "fast", function() {
            $(".status-bar-3").hide();
            $(".web-container-3").appendTo($(".timeline-point-1"));

            $(".empty-stack").css("top", "0");
            $(".empty-stack").css("margin-top", "0");

            $(".web-container-3").css("left", "-16px");

            $(".web-title-container-3").css("border-radius", "4px");
            $(".web-title-container-3").css("margin", "14px");
            $(".web-title-container-3").css("margin-top", "0");
            $("h2").css("width", "380px");

            $(".web-container-3").delay(500);
            $(".web-container-3").effect("slide", function() {

                //After all current truncated cards in stack have been moved to .timeline
                // ... empty.stack div should disappear until new cards are loaded
                $("#stack-end-message").fadeIn( function (){
                    $("#stack-end-message").animate( {fontSize: "30px"}, 1500);
                    $(".empty-stack").delay(1600);
                    $(".empty-stack").animate( { height: [ "toggle", "swing" ], opacity: 0 }, 1400, name );
                });
            });
            $('.stack-image').attr('src', 'images/stack_artwork_0.svg');
        });
    });

    console.log("It WORKS!!!")

});

$(document).ready(function(){

    //Swaps 'down arrow' icon and 'close icon'
    $('.web-news-open-button').click(function() {
        $('.web-news-open-button').toggleClass('web-news-close-button web-news-open-button');
    });

    $('.web-news-open-button').click(function(){
        $(".web-content-box").slideToggle('fast');
        $(".web-container").appendTo( $( ".timeline" ) );
        $(".web-title-container").css( "border-radius", "4px" );
        $(".web-title-container").css( "margin", "14px" );
        $("h2").css( "width", "380px" );
        $(".status-bar").hide();
    });

    $('.web-news-close-button').click(function(){
        $(".web-content-box").slideToggle('fast');
        $(".web-container").appendTo( $( ".timeline" ) );
        $(".web-title-container").css( "border-radius", "4px" );
        $(".web-title-container").css( "margin", "14px" );
        $("h2").css( "width", "380px" );
        $(".web-container").effect( "slide" );
        $(".status-bar").hide();
        $(".new-stack").hide();
    });


    //'Close' button: hide 'open' and 'dismiss', append truncated card to timeline, fade from stack, hide 'stack image'
    $("button.dismiss-button").click(function(){
        $(".status-bar").hide();
        $(".web-container").hide();
        //$(".new-stack").fadeOut(500);
        $(".web-container").appendTo( $( ".timeline" ) );
        $(".web-title-container").css( "border-radius", "4px" );
        $(".web-title-container").css( "margin", "14px" );
        $("h2").css( "width", "380px" );
        $(".web-container").delay(500);
        $(".web-container").effect( "slide" );
    });

    //'Open' button: Opens truncated card in stack, hide 'open' and 'dismiss', swaps 'down arrow' button to close button
    $("button.open-button").click(function(){
        $(".web-container").appendTo( $( ".timeline" ) );
        $(".web-content-box").slideToggle('fast');
        $(".status-bar").hide();
        $('.web-news-open-button').toggleClass('web-news-close-button web-news-open-button');
        $(".web-title-container").css( "border-radius", "4px" );
        $(".web-title-container").css( "margin", "14px" );
        $("h2").css( "width", "380px" );
    });


console.log("It WORKS!!!")

});

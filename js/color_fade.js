$(document).ready( function() {

    jQuery(function ($) {
        function changeColor(selector, colors, time) {
            /* Params:
             * selector: string,
             * colors: array of color strings,
             every: integer (in mili-seconds)
             */
            var curCol = 0,
                timer = setInterval(function () {
                    if (curCol === colors.length) curCol = 0;
                    $(selector).css("background-color", colors[curCol]);
                    curCol++;
                }, time);
        }
        $(window).load(function () {
            changeColor("#home-button", ["#8add06", "#18b7f5", "#e6008d"], 8000);
        });
    });

});



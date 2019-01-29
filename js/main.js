(function($) {
    "use strict";
    jQuery(document).ready(function($) {
        $('.screenshot-wrap').owlCarousel( {
            nav:true,
            autoPlay: true,          
            responsive: {
                0: {
                    items: 1
                }
                ,
                600: {
                    items: 3
                }
                ,
                1000: {
                    items: 5
                }
            }
        }
        );
        //client area
        $('.client-wrap').owlCarousel( {
            navigation: false, // Show next and prev buttons
            slideSpeed: 300, paginationSpeed: 400, singleItem: true, autoPlay: true, transitionStyle: "fade",
        }
        );
        //wow init
        new WOW().init();
        //counter
        $('.counter').counterUp( {
            delay: 10, time: 1000
        }
        );
    }
    );
    jQuery(window).load(function() {});
}
(jQuery));
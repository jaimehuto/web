(function ($) {

    // hide loader on window load

    const sr = ScrollReveal();

    function loader () {

        var tl = gsap.timeline();

        tl.to(".c-loader > div", {
            duration: 1.2,
            opacity: 0,
            ease: "back"
        });

        tl.to(".c-loader", {
            duration: 1.6,
            y: "-100%",
            ease: Expo.easeInOut
        });

        tl.from(".b-header__brand", {
            duration: 1,
            opacity: 0,
            y: 10,
            ease: "power4"
        });

        tl.from(".c-hero__inner-overline, .c-hero__inner-title, .c-hero__inner-text", {
            duration: 1,
            opacity: 0,
            y: 10,
            ease: "power4",
            stagger: .75
        });

        // tl.from(".c-hero__inner-title", {
        //     duration: 1,
        //     opacity: 0,
        //     y: 10,
        //     ease: "back"
        // });

        // tl.from(".c-hero__inner-text", {
        //     duration: 1,
        //     opacity: 0,
        //     y: 10,
        //     ease: "back"
        // });

        tl.from(".c-hero__inner-arrow", {
            duration: 2,
            opacity: 0,
            y: 10,
            ease: "back"
        });
    }

    function scroll(){

        $("#button").click(function() {
            $('html, body').animate({
                scrollTop: $("#myDiv").offset().top
            }, 2000);
        });
    }

    function jh_tools(){

        $('body').off('keydown');
        $('body').on('keydown', function(e){

            var jh_executed = false;
            
            // Do action on CTRL + . 17
            if (e.keyCode == 190 && e.ctrlKey || e.keyCode == 46 && e.ctrlKey) {

                $('.js-body').toggleClass('is-debug');
                jh_executed = true;
                
            }

            if(!!jh_executed){

                // e.stopPropagation();
                // e.preventDefault();
                return false;

            }

        });

    }

    function reveal(){

        var slideUp = {
            distance: '50%',
            origin: 'bottom',
            opacity: null,
            duration: 1000
        };
        
        sr.reveal('.slide-up', slideUp);

        var fadeInUp = {
            duration: 1000,
            delay: 700,
            distance: '20%',
            origin: 'bottom',
            opacity: null,
            interval: 50
        };

        sr.reveal('.fade-in-up', fadeInUp);
    }
    

    function callFn(selector, fn, args){ if( $(selector).length > 0 ) fn(args); }

    $(window).on("load", function(){

        callFn(".js-loader", loader);
        
        callFn(".js-scroll", scroll);

        callFn(".js-debug", jh_tools);

        callFn(".js-reveal", reveal);

    });

})(jQuery);
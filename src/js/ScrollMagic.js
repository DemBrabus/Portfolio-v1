$(document).ready(function(){

    const controller = new ScrollMagic.Controller();


    //Hide Landing Text

    const FadeOutText = new ScrollMagic.Scene({
            triggerElement: '.section1',
            triggerHook: .57,
        })

        .setClassToggle('.landing-text_wrap', 'fade-out')
        // .addIndicators()
        .addTo(controller);
    


});
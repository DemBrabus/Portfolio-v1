



// ------------- ELEMENTS ----

//Body Elements
        //Body 
        const Body = document.getElementById('body');
        const Filter = document.getElementById('noiseFilter');

//Intro Elements
        //intro Div 
        const IntroDiv = document.getElementById('introLoader');
        // intro Progress Bar
        const IntroProgressBar = document.getElementById('intro-progressBar');


//Nav Elements
        //Nav Link Wrap
        const NavLinkWrap = document.getElementById('nav-links_wrap');
        //Nav
        const Nav = document.getElementById('nav');


//Side Nav Elements
    //SideNav Toggle
        const SideNavToggle = document.getElementById('nav-mobile-icon');

    //SideNav Exit
        const SideNavExit = document.getElementById('sideNav-exit_wrap');    

    //SideNav
        const SideNav = document.getElementById('sideNav');

    //SideNav Links
        const SideNavAboutLink = document.getElementById('sideNav-aboutLink');
        const SideNavContactLink = document.getElementById('sideNav-contactLink');


//Footer Elements
        //Footer
        const Footer = document.getElementById('footer');

//Landing Elements 
        //Landing Content Wrap
        const LandingText = document.getElementById('landing-text_wrap');
        //Landing Header
        const landingHeader = document.getElementById('landing-header1');

//Project Elements
    // Section Overlays
        const Overlay1 = document.getElementById('overlay-box1');
        const Overlay2 = document.getElementById('overlay-box2');
        const Overlay3 = document.getElementById('overlay-box3');
        const Overlay4 = document.getElementById('overlay-box4');

    //Section ProjectTitle
        const Project1Title = document.getElementById('project1-title');
        const Project2Title = document.getElementById('project2-title');
        const Project3Title = document.getElementById('project3-title');
        const Project4Title = document.getElementById('project4-title');

    //Section ImageFrames
        const ImageFrame1 = document.getElementById('section-imageFrame1');
        const ImageFrame2 = document.getElementById('section-imageFrame2');
        const ImageFrame3 = document.getElementById('section-imageFrame3');
        const ImageFrame4 = document.getElementById('section-imageFrame4');


//About Elements 
        //About Links
                const MainAboutLink = document.getElementById('nav-link-about');
                        const MainCloseAboutText = document.getElementById('nav-link-aboutClose');
                const MobileAboutLink = document.getElementById('sideNav-aboutLink');
                        const CloseAboutText = document.getElementById('sideNav-aboutCloseLink');

        //About Div
                const AboutDiv = document.getElementById('about');


//Contact Elements
        //Contact Links
                const MobileContactLink = document.getElementById('sideNav-contactLink');
                        const MainCloseContactText = document.getElementById('nav-link-contactClose');
                const MainContactLink = document.getElementById('nav-link-contact');
                        const CloseContactText = document.getElementById('sideNav-contactCloseLink');

        //Contact Div
                const ContactDiv = document.getElementById('contact');


//Project Elements
        //Project Divs
                const Project1 = document.getElementById('project1');
                const Project2 = document.getElementById('project2');
                const Project3 = document.getElementById('project3');
                const Project4 = document.getElementById('project4');

        //Project Content Wrap
                const Project1Content = document.getElementById('project1-content_wrap');
                const Project2Content = document.getElementById('project2-content_wrap');
                const Project3Content = document.getElementById('project3-content_wrap');
                const Project4Content = document.getElementById('project4-content_wrap');

        //Project Close
                const Project1Close = document.getElementById('project1-close');
                const Project2Close = document.getElementById('project2-close');
                const Project3Close = document.getElementById('project3-close');
                const Project4Close = document.getElementById('project4-close');

        //Project Links
                const Project1Web = document.getElementById('project1-link-web');
                const Project1Git = document.getElementById('project1-link-git');

                const Project2Web = document.getElementById('project2-link-web');
                const Project2Git = document.getElementById('project2-link-git');

                const Project3Web = document.getElementById('project3-link-web');
                const Project3Git = document.getElementById('project3-link-git');

                const Project4Web = document.getElementById('project4-link-web');
                const Project4Git = document.getElementById('project4-link-git');


// ------------- ELEMENTS ----











// ------------- TIMELINES ----

    const tlIntro = new TimelineMax();
    const tl1 = new TimelineMax();
    const tl2 = new TimelineMax();
    const tl3 = new TimelineMax();
    const tl4 = new TimelineMax();
    const tlSideNav = new TimelineMax();
    const tlAboutMobile = new TimelineMax();
    const tlAboutMain = new TimelineMax();
    const tlContactMobile = new TimelineMax();
    const tlContactMain = new TimelineMax();
    const tlProject1 = new TimelineMax();
    const tlProject2 = new TimelineMax();
    const tlProject3 = new TimelineMax();
    const tlProject4 = new TimelineMax();


        tlIntro
                
                .set(Body, {className: '+=OverFlow'})
                .to(IntroProgressBar, 3.5, {width: '100%', delay: 2})
                .to(IntroDiv, 1, {opacity: 0, delay: 1.5})
                .to(Filter, 1, {top: 0, ease: Expo.easeInOut}, '-=.2')
                .add('Wave1')
                .to(Nav, 1, {opacity: 1, ease: Expo.easeInOut}, 'Wave1')
                .to(Footer, 1, {opacity: 1, ease: Expo.easeInOut}, 'Wave1')
                // .from(LandingText, 1, {opacity: 0, ease: Expo.easeInOut}, 'Wave1')
                .set(LandingText, {className:'-=Hide'}, '-=.7')
                .set(IntroDiv, {className: '+=IntroHide'})
                .set(Body, {className: '-=OverFlow'})
                ;

        tl1
                // .to(ImageFrame1, 1, {height: '55vh', ease: Expo.easeInOut});
                .set(ImageFrame1, {className: '+=Add-Height'}, {ease: Expo.easeInOut});

                tl1.pause();

        tl2
                // .to(ImageFrame2, 1, {height: '55vh', ease: Expo.easeInOut});
                .set(ImageFrame2, {className: '+=Add-Height'}, {ease: Expo.easeInOut});

                tl2.pause();

        tl3
                // .to(ImageFrame3, 1, {height: '55vh', ease: Expo.easeInOut});
                .set(ImageFrame3, {className: '+=Add-Height'}, {ease: Expo.easeInOut});

                tl3.pause();
    
        tl4
                // .to(ImageFrame4, 1, {height: '55vh', ease: Expo.easeInOut});
                .set(ImageFrame4, {className: '+=Add-Height'}, {ease: Expo.easeInOut});

                tl4.pause();

        tlSideNav
                .to(SideNav, .1, {width: 280, height: 280, ease: Expo.easeInOut})
                .to(SideNavToggle, .1, {opacity: 0, ease: Expo.easeInOut})
                .to(SideNavExit, .2, {opacity: 1, ease: Expo.easeInOut,delay: .8})
                ;

                tlSideNav.pause();

        tlAboutMobile
                .set(Body, {className: '+=OverFlow'})
                .add('Wave1')
                .to(AboutDiv, 1.5, {width: '100%', height: '100vh', opacity: 1, borderRadius: 0, ease: Expo.easeInOut})
                .set(MobileAboutLink, {className: '+=Hide'}, 'Wave1', '-=.5')
                .set(MobileContactLink, {className: '+=Hide'}, 'Wave1', '-=.5')
                .set(SideNavExit, {className: '+=Hide'}, 'Wave1', '-=.5')
                .set(CloseAboutText, {className: '+=Show'})
                
                ;

                tlAboutMobile.pause();

        tlAboutMain
                
                .set(Body, {className: '+=OverFlow'})
                .add('Wave2')
                .to(AboutDiv, 1.5, {width: '100%', height: '100vh', opacity: 1, ease: Expo.easeInOut}, 'Wave2')
                .set(MainAboutLink, {className: '+=Hide'}, 'Wave2', '+=.5')
                .set(MainContactLink, {className: '+=Hide'}, 'Wave2', '+=.5')
                .set(NavLinkWrap, {className: '+=Flex-Item-End'}, 'Wave2', '+=.5')
                .set(MainCloseAboutText, {className: '+=Show'})
                
                ;

                tlAboutMain.pause();

        tlContactMobile
                .set(Body, {className: '+=OverFlow'})
                .add('Wave3')
                .to(ContactDiv, 1.5, {width: '100%', height: '100vh', opacity: 1, ease: Expo.easeInOut})
                .set(MobileContactLink, {className: '+=Hide'}, 'Wave3', '-=.5')
                .set(MobileAboutLink, {className: '+=Hide'}, 'Wave3', '-=.5')
                .set(SideNavExit, {className: '+=Hide'}, 'Wave3', '-=.5')
                .set(CloseContactText, {className: '+=Show'})
                ;

                tlContactMobile.pause();

        tlContactMain
                .set(Body, {className: '+=OverFlow'})
                .add('Wave4')
                .to(ContactDiv, 1.5, {width: '100%', height: '100vh', opacity: 1, ease: Expo.easeInOut}, 'Wave4')
                .set(MainAboutLink, {className: '+=Hide'}, 'Wave4', '+=.5')
                .set(MainContactLink, {className: '+=Hide'}, 'Wave4', '+=.5')
                .set(NavLinkWrap, {className: '+=Flex-Item-End'}, 'Wave4', '+=.5')
                .set(MainCloseContactText, {className: '+=Show'})
                ;

                tlContactMain.pause();

        tlProject1
                .set(Body, {className: '+=OverFlow'})
                .set(ImageFrame1, {className: '+=Take-Height'})
                .add('Pulse1')
                .set(Project1, {className: '+=add-height-project'}, 'Pulse1')
                .set(Project1Title, {className: '+=hide-title'})
                .to(ImageFrame1, .5, {opacity: 0, delay: .5})
                .set(NavLinkWrap, {className: '+=Hide'})
                .set(SideNavToggle, {className: '+=Hide'})
                .to(Project1Content, 1, {opacity: 1, delay: 1})
                .set(Project1Close, {className: '+=Show-Close'})
                .set(landingHeader, {className: '+=Hide-header'})
                .set(ImageFrame1, {className: '+=Take-Height'})
                ;

                tlProject1.pause();

        tlProject2
                .set(Body, {className: '+=OverFlow'})
                .set(ImageFrame2, {className: '+=Take-Height'})
                .add('Pulse1')
                .set(Project2, {className: '+=add-height-project'}, 'Pulse1')
                .set(Project2Title, {className: '+=hide-title'})
                .to(ImageFrame2, .5, {opacity: 0, delay: .5})
                .set(NavLinkWrap, {className: '+=Hide'})
                .set(SideNavToggle, {className: '+=Hide'})
                .to(Project2Content, 1, {opacity: 1, delay: 1})
                .set(Project2Close, {className: '+=Show-Close'})
                .set(landingHeader, {className: '+=Hide-header'})
                .set(ImageFrame2, {className: '+=Take-Height'})
                ;

                tlProject2.pause();

        tlProject3
                .set(Body, {className: '+=OverFlow'})
                .set(ImageFrame3, {className: '+=Take-Height'})
                .add('Pulse1')
                .set(Project3, {className: '+=add-height-project'}, 'Pulse1')
                .set(Project3Title, {className: '+=hide-title'})
                .to(ImageFrame3, .5, {opacity: 0, delay: .5})
                .set(NavLinkWrap, {className: '+=Hide'})
                .set(SideNavToggle, {className: '+=Hide'})
                .to(Project3Content, 1, {opacity: 1, delay: 1})
                .set(Project3Close, {className: '+=Show-Close'})
                .set(landingHeader, {className: '+=Hide-header'})
                .set(ImageFrame3, {className: '+=Take-Height'})
                ;

                tlProject3.pause();

        tlProject4
                .set(Body, {className: '+=OverFlow'})
                .set(ImageFrame4, {className: '+=Take-Height'})
                .add('Pulse1')
                .set(Project4, {className: '+=add-height-project'}, 'Pulse1')
                .set(Project4Title, {className: '+=hide-title'})
                .to(ImageFrame4, .5, {opacity: 0, delay: .5})
                .set(NavLinkWrap, {className: '+=Hide'})
                .set(SideNavToggle, {className: '+=Hide'})
                .to(Project4Content, 1, {opacity: 1, delay: 1})
                .set(Project4Close, {className: '+=Show-Close'})
                .set(landingHeader, {className: '+=Hide-header'})
                .set(ImageFrame4, {className: '+=Take-Height'})
                ;

                tlProject4.pause();





// ------------- TIMELINES ----











// ------------- FUNCTIONS ----

// --------- Reveal Image Frame Functions 


    //Image Frame 1
    const showImageFrame1 = () => {
        

            tl1.play();

    };

    const hideImageFrame1 = () => {
        

            tl1.reverse();

    };

        //Image Frame 2
        const showImageFrame2 = () => {
                

                tl2.play();

        };

        const hideImageFrame2 = () => {
                

                tl2.reverse();

        };

                //Image Frame 3
                const showImageFrame3 = () => {
                        

                        tl3.play();

                };

                const hideImageFrame3 = () => {
                        

                        tl3.reverse();

                };

                        //Image Frame 4
                        const showImageFrame4 = () => {
                                

                                tl4.play();

                        };

                        const hideImageFrame4 = () => {
                                

                                tl4.reverse();

                        };


// --------- Reveal SideNav Functions 

        const showSideNav = () => {

        tlSideNav.play();

        console.log('MenuToggle');

        };

        const hideSideNav = () => {

                tlSideNav.reverse();

        };


        // --------- Reveal About-Mobile Functions

                const showAboutMobile = () => {

                        tlAboutMobile.play();

                };

                const hideAboutMobile = () => {

                        tlAboutMobile.reverse();

                };
    

// --------- Reveal About-Mobile Functions

        const showAboutMain = () => {

                tlAboutMain.play();

        };

        const hideAboutMain = () => {

                tlAboutMain.reverse();

        };


        // --------- Reveal Contact-Mobile Functions

                const showContactMobile = () => {

                        tlContactMobile.play();

                };

                const hideContactMobile = () => {

                        tlContactMobile.reverse();

                };
        

// --------- Reveal Contact-Main Functions

        const showContactMain = () => {

                tlContactMain.play();

        };

        const hideContactMain = () => {

                tlContactMain.reverse();

        };


        // --------- Reveal Project1 Functions

                const showProject1 = () => {

                        tlProject1.play();

                };

                const hideProject1 = () => {

                        tlProject1.reverse();
                         

                };
         // --------- Reveal Project2 Functions

                const showProject2 = () => {

                        tlProject2.play();

                };

                const hideProject2 = () => {

                        tlProject2.reverse();
                         

                };

        // --------- Reveal Project3 Functions

                const showProject3 = () => {

                        tlProject3.play();

                };

                const hideProject3 = () => {

                        tlProject3.reverse();
                         

                };

         // --------- Reveal Project4 Functions

                const showProject4 = () => {

                        tlProject4.play();

                };

                const hideProject4 = () => {

                        tlProject4.reverse();
                         

                };



// ------------- FUNCTIONS ----









                

// ------------- EVENT LISTENERS ---- 

$( document ).ready(function() {
    console.log( "ready!" );

    // Project Reveals/Hides
    $(Overlay1).on("mouseenter", showImageFrame1);

    $(Overlay1).on("mouseleave", hideImageFrame1);

        $(Overlay2).on("mouseenter", showImageFrame2);

        $(Overlay2).on("mouseleave", hideImageFrame2);

            $(Overlay3).on("mouseenter", showImageFrame3);

            $(Overlay3).on("mouseleave", hideImageFrame3);

                $(Overlay4).on("mouseenter", showImageFrame4);

                $(Overlay4).on("mouseleave", hideImageFrame4);

        //SideNav Reveal/Hide
        $(SideNavToggle).on("click", showSideNav);

        $(SideNavExit).on("click", hideSideNav);

                //About-Mobile Reveal/Hide
                $(MobileAboutLink).on("click", showAboutMobile);

                $(CloseAboutText).on("click", hideAboutMobile);

        //About-Main Reveal/Hide
        $(MainAboutLink).on("click", showAboutMain);

        $(MainCloseAboutText).on("click", hideAboutMain);   

                //Contact-Mobile Reveal/Hide
                $(MobileContactLink).on("click", showContactMobile);

                $(CloseContactText).on("click", hideContactMobile);

        //Contact-Main Reveal/Hide
        $(MainContactLink).on("click", showContactMain);

        $(MainCloseContactText).on("click", hideContactMain);



        //Project1 Reveal/Hide
        $(Overlay1).on("click", showProject1);

        $(Project1Close).on("click", hideProject1);
        $(Project1Web).on("click", hideProject1);
        $(Project1Git).on("click", hideProject1);

                $(Overlay2).on("click", showProject2);

                $(Project2Close).on("click", hideProject2);
                $(Project2Web).on("click", hideProject2);
                $(Project2Git).on("click", hideProject2);

        $(Overlay3).on("click", showProject3);

        $(Project3Close).on("click", hideProject3);
        $(Project3Web).on("click", hideProject3);
        $(Project3Git).on("click", hideProject3);

                $(Overlay4).on("click", showProject4);

                $(Project4Close).on("click", hideProject4);
                $(Project4Web).on("click", hideProject4);
                $(Project4Git).on("click", hideProject4);


});

// ------------- EVENT LISTENERS ----


var APIKey = "166a433c57516f51dfab1f7edaed8413";

var queryURL = "https://api.openweathermap.org/data/2.5/weather?" +
    "q=Ventura,US&units=imperial&appid=" + APIKey;

$.ajax({
    url: queryURL,
    method: "GET"
})
    .then(function (response) {

        console.log(queryURL);

        console.log(response);
        $(".city").html("<h5>" + response.name + ", CA</h5>");
        // $(".condition").text(response.weather[0].main + " | " + response.weather[0].description);


        $('.icon').html("<img src='http://openweathermap.org/img/w/" + response.weather[0].icon + ".png' alt='Icon depicting current weather.'>");

        $(".temp").text(response.main.temp + " (F) ");

        console.log("Wind Speed: " + response.wind.speed);
        console.log("Humidity: " + response.main.humidity);
        console.log("Temperature (F): " + response.main.temp);
    });


(function ($) {
    $(window).on('load', function () {
        var pre_loader = $('#preloader');
        pre_loader.fadeOut('fast', function () {
            $(this).remove();
        });
    });

    /*---------------------
     TOP Menu Stick
    --------------------- */
    var s = $("#sticker");
    var pos = s.position();
    $(window).on('scroll', function () {
        var windowpos = $(window).scrollTop() > 300;
        if (windowpos > pos.top) {
            s.addClass("stick");
        } else {
            s.removeClass("stick");
        }
    });

    /*----------------------------
     Navbar nav
    ------------------------------ */
    var main_menu = $(".main-menu ul.navbar-nav li ");
    main_menu.on('click', function () {
        main_menu.removeClass("active");
        $(this).addClass("active");
    });

    /*----------------------------
     wow js active
    ------------------------------ */
    new WOW().init();

    $(".navbar-collapse a:not(.dropdown-toggle)").on('click', function () {
        $(".navbar-collapse.collapse").removeClass('in');
    });

    //---------------------------------------------
    //Nivo slider
    //---------------------------------------------
    $('#ensign-nivoslider').nivoSlider({
        effect: 'random',
        slices: 15,
        boxCols: 12,
        boxRows: 8,
        animSpeed: 500,
        pauseTime: 5000,
        startSlide: 0,
        directionNav: true,
        controlNavThumbs: false,
        pauseOnHover: true,
        manualAdvance: false,
    });

    /*----------------------------
     Scrollspy js
    ------------------------------ */
    var Body = $('body');
    Body.scrollspy({
        target: '.navbar-collapse',
        offset: 80
    });

    /*---------------------
      Venobox
    --------------------- */
    var veno_box = $('.venobox');
    veno_box.venobox();

    /*----------------------------
    Page Scroll
    ------------------------------ */
    var page_scroll = $('a.page-scroll');
    page_scroll.on('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 55
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    /*--------------------------
      Back to top button
    ---------------------------- */
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });

    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });

    /*----------------------------
     Parallax
    ------------------------------ */
    var well_lax = $('.wellcome-area');
    well_lax.parallax("50%", 0.4);
    var well_text = $('.wellcome-text');
    well_text.parallax("50%", 0.6);

    /*--------------------------
     collapse
    ---------------------------- */
    var panel_test = $('.panel-heading a');
    panel_test.on('click', function () {
        panel_test.removeClass('active');
        $(this).addClass('active');
    });

    /*---------------------
     Testimonial carousel
    ---------------------*/
    var test_carousel = $('.testimonial-carousel');
    test_carousel.owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

})(jQuery);


/*---------------------
    Services
    ---------------------*/


$("#toggle").click(function () {
    var elem = $("#toggle").text();
    if (elem == "Read More") {
        //Stuff to do when btn is in the read more state
        $(this).text("Read Less");
        $(".card-text").slideDown();
    } else {
        //Stuff to do when btn is in the read less state
        $(this).text("Read More");
        $(".card-text").slideUp();
    }
});



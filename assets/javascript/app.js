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
    $(function () {

        var $window = $(window),
            win_height_padded = $window.height() * 1.1,
            isTouch = Modernizr.touch;

        if (isTouch) { $('.revealOnScroll').addClass('animated'); }

        $window.on('scroll', revealOnScroll);

        function revealOnScroll() {
            var scrolled = $window.scrollTop(),
                win_height_padded = $window.height() * 1.1;

            // Showed...
            $(".revealOnScroll:not(.animated)").each(function () {
                var $this = $(this),
                    offsetTop = $this.offset().top;

                if (scrolled + win_height_padded > offsetTop) {
                    if ($this.data('timeout')) {
                        window.setTimeout(function () {
                            $this.addClass('animated ' + $this.data('animation'));
                        }, parseInt($this.data('timeout'), 10));
                    } else {
                        $this.addClass('animated ' + $this.data('animation'));
                    }
                }
            });
            // Hidden...
            $(".revealOnScroll.animated").each(function (index) {
                var $this = $(this),
                    offsetTop = $this.offset().top;
                if (scrolled + win_height_padded < offsetTop) {
                    $(this).removeClass('animated fadeInUp flipInX lightSpeedIn')
                }
            });
        }

        revealOnScroll();
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


})(jQuery);


/*---------------------
About me   
 ---------------------*/

function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}

/*---------------------
Visiter counter  
 ---------------------*/

var firebaseConfig = {
    apiKey: "AIzaSyCsNsqrhHEh9pDZVkVM7gNHggvYikwiPLw",
    authDomain: "ba-visitor-counter.firebaseapp.com",
    databaseURL: "https://ba-visitor-counter.firebaseio.com",
    projectId: "ba-visitor-counter",
    storageBucket: "ba-visitor-counter.appspot.com",
    messagingSenderId: "836593240244",
    appId: "1:836593240244:web:d561c0403ea563ea"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// const functions = require("firebase-functions");
// const admin = require("firebase-admin");
// admin.initializeApp();

// exports.hitCounter = functions.https.onRequest((req, res) => {
//     const counterRef = admin.database().ref("/hit_counter");
//     return counterRef
//         .transaction(current => {
//             return (current || 0) + 1;
//         })
// });
var database = firebase.database();
var connectionsRef = database.ref("/connections");
var connectedRef = database.ref(".info/connected");
connectedRef.on("value", function (snap) {

    // If they are connected..
    if (snap.val()) {

        // Add user to the connections list.
        connectionsRef.push(true);
        // Remove user from the connection list when they disconnect.
        // con.onDisconnect().remove();
    }
});

connectionsRef.on("value", function (snap) {

    // Display the viewer count in the html.
    // The number of online users is the number of children in the connections list.
    $("#connected-viewers").text(snap.numChildren());
});


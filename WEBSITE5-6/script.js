$(document).ready(function () {
    $(window).scroll(function () {

        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        const navheight = 80

        const about = $('#about').offset().top - navheight;
        const services = $('#services').offset().top - navheight;
        const story = $('#story').offset().top - navheight;
        const gallery = $('#gallery').offset().top - navheight;
        const contact = $('#contact').offset().top;

        if (about > this.pageYOffset) {
            $('.menu-link').removeClass("--link-line");
            $('a[href="index.html"]').addClass("--link-line");
        }
        if (about < this.pageYOffset) {
            $('.menu-link').removeClass("--link-line");
            $('a[href="#about"]').addClass("--link-line");
        }
        if (services < this.pageYOffset) {
            $('.menu-link').removeClass("--link-line");
            $('a[href="#services"]').addClass("--link-line");
        }
        if (story < this.pageYOffset) {
            $('.menu-link').removeClass("--link-line");
            $('a[href="#story"]').addClass("--link-line");
        }
        if (gallery < this.pageYOffset) {
            $('.menu-link').removeClass("--link-line");
            $('a[href="#gallery"]').addClass("--link-line");
        }
        if (this.pageYOffset > 4913) {
            $('.menu-link').removeClass("--link-line");
            $('a[href="#contact"]').addClass("--link-line");
        }


    })
    // toggle menu/navbar script
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");


    });

    // owl carousel
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        nav: true,
        autoplay: true,
        autoplayTime: 500,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 3,
            }
        }
    })
});

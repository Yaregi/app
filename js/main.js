$(function () {

    let headertop = $('#header').height();
    let winheight = $(window).height();
    let winwidth = $(window).width();


    $(window).on('redsize', function () {
        let winheight = $(window).height();
        let winwidth = $(window).width();
    });

    $(window).on('resize', function () {
        document.location.reload();
    });

    $('#mainVisual').height(winheight - (headertop));

    $('#mainVisual .mainin').height(winheight - (headertop));
    $('#container .cont1').height(winheight - (headertop));
    $('#container .cont1 .mainimg').height(winheight - (headertop));
    $('#container .cont1 .mainimg ul li').height(winheight - (winheight * 0.3));
    $('#container2').height(winheight - (headertop));
    $('#container2 .cont2in').height(winheight - (headertop));
    $('#container2 .cont2c .main ul li').height(winheight - (winheight * 0.4));
    $('#container3').height(winheight - (headertop));
    $('#container3 .cont3in').height(winheight - (headertop));
    $('#container3 .swiper-container .swiper-wrapper .swiper-slide').height(winheight - (winheight * 0.4));
    $('#container3 .swiper-container2 .swiper-wrapper li').height(winheight - (winheight * 0.4));
    $('#container3 .swiper-container3 .swiper-wrapper li').height(winheight - (winheight * 0.4));
    $('#container4').height(winheight - (headertop));
    $('#container4 .cont4in').height(winheight - (headertop));
    $('#container5').height(winheight - (headertop));
    $('#container5 .cont5in').height(winheight - (headertop));
    $('#container5 .cont5in .move-left li').height(winheight - (winheight * 0.25));
    $('#container5 .cont5in .move-center li').height(winheight - (winheight * 0.02));
    $('#container5 .cont5in .move-right li').height(winheight - (winheight * 0.2));



    $('#header ul li').on('click', function (event) {
        let a = $(this).index();
        console.log(a);
        event.preventDefault();

        $('html').animate({
            scrollTop: (winheight - headertop) * (a - 1)
        })
    })

    function header() {
        let scr = $(window).scrollTop();
        let a = $('#mainVisual').height();
        let b = $('#container').height();
        if (scr >= a) {
            $('#header').addClass('on');
            $('#header .bar span').css({
                backgroundColor: '#fff'
            })
            $('#header ul li a').css({
                color: '#fff'
            })

        } else if (scr <= a) {
            $('#header').removeClass('on');
            $('#header .bar span').css({
                backgroundColor: 'gray'
            })
            $('#header ul li a').css({
                color: 'gray'
            })
        }

    };

    $(window).on('scroll', header);
    header();

    function headere() {
        let scr = $(window).scrollTop();
        let a = $('#mainVisual').height();
        let b = $('#container').height();
        if (scr >= (a + b)) {
            $('#header').addClass('on2');

            $('#header .logo').find('img').attr('src', 'img/logow.png')
        } else if (scr <= (a + b)) {
            $('#header').removeClass('on2');
            $('#header .logo').find('img').attr('src', 'img/logo2.png')
        }

    };

    $(window).on('scroll', headere);
    headere();


    function headers() {
        let scr = $(window).scrollTop();
        let a = $('#mainVisual').height();
        let b = $('#container').height();
        let c = $('#container2').height();

        if (scr >= (a + b + c)) {
            $('#header').addClass('on3');

            $('#header .bar span').css({
                backgroundColor: '#000'
            })
            $('#header ul li a').css({
                color: '#000'
            })
            $('#header .logo').find('img').attr('src', 'img/logob.png')
        } else if (scr <= (a + b + c)) {
            $('#header').removeClass('on3');
        }
    };

    $(window).on('scroll', headers);
    headers();


    function headersq() {
        let scr = $(window).scrollTop();
        let a = $('#mainVisual').height();
        let b = $('#container').height();
        let c = $('#container2').height();
        let f = $('#container3').height();
        let d = $('#container4').height();

        if (scr >= (a + b + (c * 3))) {
            $('#header').addClass('on4');

            $('#header .bar span').css({
                backgroundColor: '#000'
            })
            $('#header ul li a').css({
                color: '#000'
            })
            $('#header .logo').fadeOut();
            $('#header .bar').fadeOut();
        } else if (scr <= (a + b + (c * 3))) {
            $('#header').removeClass('on4');
            $('#header .logo').fadeIn();
            $('#header .bar').fadeIn();
        }
    };

    $(window).on('scroll', headersq);
    headersq();


    function scrollPage() {
        let scr = $(window).scrollTop();
        console.log(scr);
        for (let i = 0; i < $('ul li').length; i++) {
            if (scr >= winheight * i && scr < winheight * (i + 1)) {
                $('ul li').removeClass('on');
                $('ul li').eq(i).addClass('on');
            }
        }
    }

    $(window).on('scroll', scrollPage);

    scrollPage();

    $('#mainVisual,#container,#container2,#container3,#container4,#container5,#container6').on('mousewheel', function (e, a) {
        e.preventDefault();

        if (a > 0) {
            let prv = $(this).prev().offset().top;
            $('html,body').stop().animate({
                scrollTop: prv
            });

        } else if (a < 0) {
            let nxt = $(this).next().offset().top;
            $('html,body').stop().animate({
                scrollTop: nxt
            });
        }
    })

    $('#container .cont1 .mainimg ul li .iplay').on('click', function () {
        $('#container .cont1 .mainimg ul li:nth-child(2)').css({
            opacity: 0
        })
    })


    const audio = document.getElementById('audio');
    audio.play();



    const boxList = document.querySelectorAll('#container2 .cont2c .main ul li, #container3 .button, #container3 .tit,#container5 .cont5in .move-left,#container5 .cont5in .move-center,#container5 .cont5in .move-right');

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    };

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            } else {
                entry.target.classList.remove('active');
            }
        });
    }, options);

    boxList.forEach(el => observer.observe(el));



    $('#container3 .cont3in .button').on('click', function () {
        $('#container3 .cont3in .button, #container3 .cont3in .tit').hide().animate();
        $('#container3 .cont3in .cont3left, #container3 .cont3u ul, #container3 .cont3in .scrolldown, #container3 .cont3in .scrolltxt').css({
            opacity: 1
        })
        $('#container3 .swiper-button-prev, #container3 .swiper-button-next').css('display', 'block');
    })


    $('#container3 .cont3u ul li:nth-child(2)').on('click', function () {
        $('#container3 .cont3left .swiper-container ul li,#container3 .cont3left .swiper-container3 ul li').hide();
        $('#container3 .cont3left .swiper-container2 ul li').fadeIn();
        $('#container3 .cont3left .limg ul li').hide();
        $('#container3 .cont3left .rimg ul li').hide();
        $('#container3 .cont3left .cimg ul li').hide();
        $('#container3 .swiper-button-prev, #container3 .swiper-button-next').css('display', 'block');
        $('#container3 .cont3in .scrolldown, #container3 .cont3in .scrolltxt').css({
            opacity: 1
        })
    })

    $('#container3 .cont3u ul li:nth-child(1)').on('click', function () {
        $('#container3 .cont3left .swiper-container ul li').fadeIn();
        $('#container3 .cont3left .swiper-container2 ul li,#container3 .cont3left .swiper-container3 ul li').hide();
        $('#container3 .cont3left .limg ul li').hide();
        $('#container3 .cont3left .rimg ul li').hide();
        $('#container3 .cont3left .cimg ul li').hide();
        $('#container3 .swiper-button-prev, #container3 .swiper-button-next').css('display', 'block');
        $('#container3 .cont3in .scrolldown, #container3 .cont3in .scrolltxt').css({
            opacity: 1
        })
    })

    $('#container3 .cont3u ul li:nth-child(3)').on('click', function () {
        $('#container3 .cont3left .swiper-container3 ul li').fadeIn();
        $('#container3 .cont3left .swiper-container2 ul li, #container3 .cont3left .swiper-container ul li').hide();
        $('#container3 .cont3in .scrolldown, #container3 .cont3in .scrolltxt').css({
            opacity: 1
        })
        $('#container3 .swiper-button-prev, #container3 .swiper-button-next').css('display', 'block');
        $('#container3 .cont3left .limg ul li').hide();
        $('#container3 .cont3left .rimg ul li').hide();
        $('#container3 .cont3left .cimg ul li').hide();

    })


    $('#container3 .cont3left .swiper-container ul li').on('click', function () {
        let click = $(this).index() - 3;
        console.log(click);
        $('#container3 .cont3left .limg ul li').eq(click).fadeIn();
        $('#container3 .cont3left .swiper-container ul li,#container3 .swiper-button-prev, #container3 .swiper-button-next, #container3 .cont3in .scrolldown, #container3 .cont3in .scrolltxt').hide();

    })

    $('#container3 .cont3left .swiper-container2 ul li').on('click', function () {
        let click = $(this).index() - 3;
        console.log(click);
        $('#container3 .cont3left .cimg ul li').eq(click).fadeIn();
        $('#container3 .cont3left .swiper-container2 ul li,#container3 .swiper-button-prev, #container3 .swiper-button-next, #container3 .cont3in .scrolldown, #container3 .cont3in .scrolltxt').hide();

    })


    $('#container3 .cont3left .swiper-container3 ul li').on('click', function () {
        let click = $(this).index();
        console.log(click);
        $('#container3 .cont3left .rimg ul li').eq(click).fadeIn();
        $('#container3 .cont3left .swiper-container3 ul li,#container3 .swiper-button-prev, #container3 .swiper-button-next, #container3 .cont3in .scrolldown, #container3 .cont3in .scrolltxt').hide();

    })




    $('#container3 .cont3left .limg ul li').on('click', function () {
        $('#container3 .cont3left .limg ul li').hide();
        $('#container3 .cont3left .swiper-container ul li,#container3 .swiper-button-prev, #container3 .swiper-button-next, #container3 .cont3in .scrolldown, #container3 .cont3in .scrolltxt').fadeIn();
    })

    $('#container3 .cont3left .rimg ul li').on('click', function () {
        $('#container3 .cont3left .rimg ul li').hide();
        $('#container3 .cont3left .swiper-container3 ul li,#container3 .swiper-button-prev, #container3 .swiper-button-next, #container3 .cont3in .scrolldown, #container3 .cont3in .scrolltxt').fadeIn();
    })

    $('#container3 .cont3left .cimg ul li').on('click', function () {
        $('#container3 .cont3left .cimg ul li').hide();
        $('#container3 .cont3left .swiper-container2 ul li,#container3 .swiper-button-prev, #container3 .swiper-button-next, #container3 .cont3in .scrolldown, #container3 .cont3in .scrolltxt').fadeIn();
    })

    const swiper = new Swiper('.swiper-container', {

        centeredSlides: true,
        slidesPerView: 2.5,
        slideToClickedSlide: true,
        effect: 'coverflow',
        coverflowEffect: {
            rotate: 15,
            slideShadows: false,
            stretch: 20,
        },


        navigation: {

            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },



    });


    const swiper2 = new Swiper('.swiper-container2', {
        centeredSlides: true,
        slidesPerView: 2.5,
        slideToClickedSlide: true,
        effect: 'coverflow',
        coverflowEffect: {
            rotate: 10,
            slideShadows: false,
            stretch: 20,
        },
        navigation: {

            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });


    const swiper3 = new Swiper('.swiper-container3', {
        centeredSlides: true,
        slidesPerView: 1,
        slideToClickedSlide: true,
        effect: 'coverflow',
        coverflowEffect: {
            rotate: 10,
            slideShadows: false,
            stretch: 20,
        },
        navigation: {

            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    $('#container3 .cont3u ul li').on('click', function () {
        $(this).css('font-weight', 'bold').siblings().css('font-weight', 'lighter');
    })

    function trig() {
        $('#container3 .cont3u ul li:nth-child(1)').css('font-weight', 'bold');
    }
    trig();




















































































})
// event pada saat link di klik
$('.page-scroll').on('click', function (e) {

    // ambil isi href
    var href = $(this).attr('href');
    // tangkap elemen ybs
    var elementhref = $(href);

    // console.log(elementhref.offset().top);
    // console.log($('html,body').scrollTop());

    //pindahkan scroll
    $('html,body').animate({
        scrollTop: elementhref.offset().top - 50
    }, 1250, 'easeInOutExpo');

    e.preventDefault();

});

$('.out-scroll').on('click', function (e) {

    var href = $(this).attr('href');
    var elementhref = $(href);

    $('html,body').animate({
        scrollTop: elementhref.offset().top
    }, 1250, 'easeInOutExpo');

    e.preventDefault();

});


// paralax
//about
$(window).on('load', function () {
    $('.pleft').addClass('pshow');
    $('.pright').addClass('pshow');
});

$(window).scroll(function () {
    var wScroll = $(this).scrollTop();

    // jumbotron
    $('.jumbotron img').css({
        'transform': 'translate(0px, ' + wScroll / 3.7 + '%)'
    });

    $('.jumbotron h1').css({
        'transform': 'translate(0px, ' + wScroll / 1.4 + '%)'
    });

    $('.jumbotron p').css({
        'transform': 'translate(0px, ' + wScroll / 1 + '%)'
    });


    //portfolio
    if (wScroll > $('.portfolio').offset().top - 350) {
        $('.portfolio .img-thumbnail').each(function (i) {
            setTimeout(function () {
                $('.portfolio .img-thumbnail').eq(i).addClass('muncul');
            }, 300 * (i + 1));
        });
    }
});
// event pada saat link di klik
$('.page-scroll').on('click', function(e) {


    // ambil isi href
    const tujuan = $(this).attr('href');
    // tangkap elemen yang bersangkutan
    const elemenTujuan = $(tujuan);

    // Pindahkan scroll nya
    $('html, body').animate({
        scrollTop: elemenTujuan.offset().top - 50
    }, 1000, 'easeInOutExpo');

    e.preventDefault();

});


// Parallax
// About
$(window).on('load', function() {
    $('.pKiri').addClass('pShow');
    $('.pKanan').addClass('pShow');
});

$(window).scroll(function() {
    const wScroll = $(this).scrollTop();

    // Jumbotron
    $('.jumbotron img').css({
        'transform': 'translate(0px, '+ wScroll/4 +'%)'
    });

    $('.jumbotron h1').css({
        'transform': 'translate(0px, '+ wScroll/2 +'%)'
    });

    $('.jumbotron p').css({
        'transform': 'translate(0px, '+ wScroll/1.2 +'%)'
    });



    // Portfolio
    if( wScroll > $( '.portfolio' ).offset().top - 250 ) {
        $('.portfolio .thumbnail').each(function(i) {
            setTimeout(function() {
                $('.portfolio .thumbnail').eq(i).addClass('show');
            }, 300 * (i+1));
        });

    }


});













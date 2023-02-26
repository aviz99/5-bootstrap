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
// event pada saat link di klik

$('.page-scroll').on('click', function(e){

	// ambil isi href
	var tujuan = $(this).attr('href');
	// tangkap elemen ybs
	var elemenTujuan = $(tujuan);

	// pindahkan scroll
	$('body').animate({
		scrolltopP: elemenTujuan.offset().top -50
	}, 1250, 'easeInOutExpo');

	e.preventDefault(); 
});

// parallax
// about
$(window).on('load', function() {

	$('.design-teks').addClass('muncul');


	// $('.kiri').addClass('muncul');
	// $('.kanan').addClass('muncul');

	$('.design-lainnya-1').addClass('muncul');

	// $('.galeri').addClass('muncul');
	// $('.kalender').addClass('muncul');
	// $('.lokasi').addClass('muncul');
	// $('.kartu-ucapan').addClass('muncul');
	// $('.amplop').addClass('muncul');
	// $('.music').addClass('muncul');

	$('.design-card').each(function(i) {
		setTimeout(function(){
			$('.design-card').eq(i).addClass('muncul');
		}, 300 * (i+1));
	});

	// $('.testi-card').each(function(i) {
	// 	setTimeout(function(){
	// 		$('.testi-card').eq(i).addClass('muncul');
	// 	}, 300 * (i+1));
	// });
});

$(window).scroll(function(){
	var wScroll = $(this).scrollTop();


	// fitur
	if (wScroll > $('.fitur-judul').offset().top -350) {
		$('.fitur-judul').addClass('muncul')
	}

	if (wScroll > $('.galeri').offset().top -350) {
		$('.galeri').addClass('muncul')
	}

	if (wScroll > $('.kartu-ucapan').offset().top -500) {
		$('.kartu-ucapan').addClass('muncul')
	}

	if (wScroll > $('.kalender').offset().top -350) {
		$('.kalender').addClass('muncul')
	}

	if (wScroll > $('.amplop').offset().top -500) {
		$('.amplop').addClass('muncul')
	}

	if (wScroll > $('.lokasi').offset().top -350) {
		$('.lokasi').addClass('muncul')
	}

	if (wScroll > $('.music').offset().top -500) {
		$('.music').addClass('muncul')
	}

	if (wScroll > $('.harga-card').offset().top -500) {
		$('.harga-card').addClass('muncul')
	}

	// if (wScroll > $('.harga-title').offset().top -500) {
	// 	$('.harga-title').addClass('muncul')
	// }

	if (wScroll > $('.cp').offset().top -750) {
		$('.cp').addClass('muncul')
	}

	if (wScroll > $('.pt').offset().top -800) {
		$('.pt').addClass('muncul')
	}

	if (wScroll > $('.lk').offset().top -800) {
		$('.lk').addClass('muncul')
	}

	if (wScroll > $('.testi-card').offset().top -800) {
		$('.testi-card').addClass('muncul')
	}

});

// $(window).scroll(function(){
// 	var wScroll = $(this).scrollTop();


// });
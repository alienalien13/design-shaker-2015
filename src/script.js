import './style.sass'

$(function(){

	$('.menu--button').on('click', function(){

		$('.home-menu').toggleClass('nav-hide');

		/* cross or ham inside menu-button */
		if ( $('.menu-icon').is( ".fa-bars" ) ) {

			$('.menu-icon').addClass('fa-times')
			$('.menu-icon').removeClass('fa-bars')

		} else if ( $('.menu-icon').is( ".fa-times" ) ) {

			$('.menu-icon').addClass('fa-bars')
			$('.menu-icon').removeClass('fa-times')

		}

	})

	/* scroll to next block */
	$('.button-slide-down').on('click', function(ev){

		$(window).scrollTop( $(ev.target).parent().position().top + $(ev.target).parent().innerHeight() )

	})


	/* menu */
	$('.home-menu__about').on('click', function(){
		$(window).scrollTop( $('.about-block-wrap').offset().top )
	})
	$('.home-menu__big-deal').on('click', function(){
		$(window).scrollTop( $('.big-deal').offset().top )
	})
	$('.home-menu__fresh').on('click', function(){
		$(window).scrollTop( $('.fresh').offset().top )
	})
	$('.home-menu__office').on('click', function(){
		$(window).scrollTop( $('.office').offset().top )
	})
	$('.home-menu__exhibitor').on('click', function(){
		$(window).scrollTop( $('.why').offset().top )
	})
	$('.home-menu__contact').on('click', function(){
		$(window).scrollTop( $('.contacts').offset().top )
	})
	/* - - - - - - - */

})
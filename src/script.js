import './style.sass'

$(function(){

	$('.menu--button').on('click', function(){

		$('.home-menu').toggleClass('nav-hide');

	})

	$('.button-slide-down').on('click', function(ev){

		$(window).scrollTop( $(ev.target).parent().position().top + $(ev.target).parent().innerHeight() )

	})

})
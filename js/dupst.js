/*!
Dupst -  Framework
Diego Pereira
www.momm.com.br
*/

$(document).ready(function(){

//________Submenus
$('.hd-lista-menu li ul').hide();
$('.hd-lista-menu li').hover(function(){
	$(this).find('> ul').fadeIn(200);
}, function(){
	$(this).find('> ul').fadeOut(200);
});

//________Viewport
var viewport = $(window).height();
$('.slideshow-principal .slides li').css({'height': viewport});
$('.viewport').css({'height': viewport});

$(window).resize(function() {
	var viewport = $(window).height();
	$('.slideshow-principal .slides li').css({'height': viewport});
   $('.viewport').css({'height': viewport});
});


});
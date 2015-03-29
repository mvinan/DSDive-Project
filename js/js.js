$(function(){

	var $body = document.querySelector("body");
	var $ventana = $(window).width();
	var $windowHeight = $(window).height();
	var $bt_menu = $(".bt-menu");


	$bt_menu.on("click",activateMenu);



	function showMenu (event) {
		event.preventDefault();
		$menu.addClass("is-active");
		$buttonShowMenu.removeClass("is-active");
		$buttonHiddenMenu.addClass("is-active");
	}
	function hiddenMenu (event) {
		event.preventDefault();
		$menu.removeClass("is-active");
		$buttonShowMenu.addClass("is-active");
		$buttonHiddenMenu.removeClass("is-active");
	}



	function comprobando(){
		if ( $ventana < 767 ) {
			alert("estamos menos de los 768");
		}
	}
	// comprobando();

	$(".rslides").responsiveSlides({
        nav: true,
        speed: 500,
        namespace: "transparent-btns"
	});

	function activateMenu(event){
		event.preventDefault();
		$(".main").toggleClass("activate");
	}
});


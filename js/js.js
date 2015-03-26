$(function(){

	var $buttonShowMenu = $("#btn-showMenu")
	var $buttonHiddenMenu = $("#btn-hiddenMenu")
	var $menu = $("#menu")
	var $ventana = $(window).width();
	var $windowHeight = $(window).height();

	$buttonShowMenu.on("click", showMenu);
	$buttonHiddenMenu.on("click", hiddenMenu);

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

	var $body = document.querySelector("body");


	function comprobando(){
		if ( $ventana < 767 ) {
			alert("estamos menos de los 768");
		}
	}
	comprobando();

	$(".rslides").responsiveSlides({
		pager:true,
		auto:true,
		nav:true,
		fade:500,
		speed:500
	});
});


$(function(){

	var $body = document.querySelector("body");
	var $ventana = $(window).width();
	var $windowHeight = $(window).height();
	var $alturaSobrante = $(".here").offset().top;
	var $menu = $(".bt-menu");


	// scroll al top al cargar la pagina

	$( $menu ).on("click", show);

	function show (event){
		event.preventDefault();
		$(".main").toggleClass("show-menu");
		if ( $(".bt-menu").hasClass("icon-menu") ) 
		{
			$(".bt-menu").css("transform","rotate(180deg)");
			$(".bt-menu").removeClass("icon-menu");
			$(".bt-menu").addClass("icon-close");
		}
		else{
			$(".bt-menu").css("transform","");
			$(".bt-menu").removeClass("icon-close");
			$(".bt-menu").addClass("icon-menu");

		}
	}

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

	// codigo para el menu stiky
	$(window).on("scroll", stikyMenu );

	function stikyMenu(){
		if ( $(window).scrollTop() > 20 ){
			$(".main-section").addClass("menu-fixed");
		}
		else{
			$(".main-section").removeClass("menu-fixed");
		}
	}
	//responsives slides
	$(".rslides").responsiveSlides({
		pager:true,
		pause:true,
		pauseControls:true,
		auto:false,
        nav: false,
        speed: 500,
        namespace: "transparent-btns"
	});

});


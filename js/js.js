$(function(){

	var $body = document.querySelector("body");
	var $ventana = $(window).width();
	var $windowHeight = $(window).height();
	var $alturaSobrante = $(".here").offset().top;
	var $menu = $(".bt-menu");

	$( $menu ).on("click", show);

	function show (event){
		event.preventDefault();
		$(".main-container").toggleClass("show-menu");
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

	$(window).on("scroll", stikyMenu );

	function stikyMenu(){
		if ( $(window).scrollTop() > $alturaSobrante ){
			$(".main-section").addClass("menu-fixed");
		}
		else{
			$(".main-section").removeClass("menu-fixed");
		}
	}

	function comprobando(){
		if ( $ventana < 767 ) {
			alert("estamos menos de los 768");
		}
	}
	// comprobando();
	//responsives slides
	$(".rslides").responsiveSlides({
        nav: true,
        speed: 500,
        namespace: "transparent-btns"
	});

});


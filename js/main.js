AOS.init({
			offset:90,
			duration: 800,
			
		})

$(window).scroll(()=>{
	console.log("scroll")
	if (window.scrollY > 500){
		console.log("entro")
		$("nav.scroll-visible").addClass("show");
	}
	else if (window.scrollY < 500){
		$("nav.scroll-visible").removeClass("show");
	}
})

$(".cta").click(()=>{
	console.log("click");

	$('html, body').animate({
		scrollTop: $("header").height()
	}, 200, 'linear');
})
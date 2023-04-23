AOS.init({
			offset:90,
			duration: 800,
			
		})

$(window).scroll(()=>{
	if (window.scrollY > 500){
		$("nav.scroll-visible").addClass("show");
	}
	else if (window.scrollY < 500){
		$("nav.scroll-visible").removeClass("show");
	}
})

$(".cta").click(()=>{

	$('html, body').animate({
		scrollTop: $("header").height()
	}, 200, 'linear');
})

$(".arrow-img").click(()=>{
	console.log("click");

	$('html, body').animate({
		scrollTop: $("header").height()
	}, 700, 'swing');
})


function convertRemToPixels(rem) {    
    return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}

var sum = 0
var max = document.querySelectorAll(".habitacion-card").length

var rempx = 0

function updateRemPX(){
	if(window.innerWidth < 701){
		rempx = convertRemToPixels(1)
	}else{
		rempx = convertRemToPixels(2.5)
	}

}

updateRemPX()

function movecarrousel(e){
	direction = e.target.getAttribute("id")
	var carrouselContainer= document.querySelector(".habitaciones-card-container")
	var hero = document.querySelector(".habitacion-card-hero")
	updateRemPX()
	var carrouselWidth = carrouselContainer.offsetWidth + (rempx*2);
	vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0) - rempx
	
	if(direction == 'next'){
		
		if (sum != -(max-1)){
			sum= sum-1;
			hero.style.marginLeft = (vw * sum) + 'px'
		}
	}else{
		if (sum != 0){
			sum= sum+1
			hero.style.marginLeft = (vw * sum) + 'px'
			console.log(sum	)

			// sum += vw;
			// hero.style.marginLeft = sum + 'px'
		}
	}
	console.log(sum + ' ' + max)
}

// function movecarrousel(e){
// 	var max = document.querySelectorAll(".habitacion-card").length
// 	var carrouselElments= document.querySelectorAll(".habitaciones-card")


	
// }

function reportWindowSize(){


	if(window.innerWidth > 700){
		var hero = document.querySelector(".habitacion-card-hero")
		hero.style.marginLeft = 0 + 'px'
	}else{
		updateRemPX()
		var hero = document.querySelector(".habitacion-card-hero")
		var carrouselContainer= document.querySelector(".habitaciones-card-container")
		var carrouselWidth = carrouselContainer.offsetWidth + (rempx*2);
		vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0) - rempx
		
		hero.style.marginLeft = (vw * sum) + 'px'
	}


}

window.onresize = reportWindowSize;

carrouselbuttons = document.querySelectorAll(".carrousell-arrow")

carrouselbuttons.forEach((button) => {button.addEventListener("click", movecarrousel)})


var tagnames = document.querySelectorAll(".name")
var images = document.querySelectorAll(".habitacion-card")

function showElement(e){
	console.log(e)
	//Show elements of carrousel on big screens
	var tag = e.target.parentElement.getAttribute("id");
	images.forEach((img)=>{
		if(img.getAttribute("id") == tag){
			img.classList.add("display")
		}else{
			img.classList.remove("display")
		}	
	})

}

tagnames.forEach((tag) => {tag.addEventListener("click", showElement)})



const web_header = document.querySelector(".website-header")
const img_header = document.querySelector(".hero-header")
const imgheadertime = gsap.timeline({paused: true})
imgheadertime.fromTo(img_header,{backgroundPositionY: 0}, {backgroundPositionY: '+40vh', duration:1, ease:'SlowMo'},0);
// imgheadertime.fromTo(img_header,{backgroundPositionY: '0vh'}, {backgroundPositionY: '-70vh', duration:1, ease:'SlowMo'},0);


const imgScroll = ScrollTrigger.create({
  animation: imgheadertime,
  trigger: web_header,
  start: 'top top',
  end: 'bottom end',
//   markers: true,
  scrub: true
})
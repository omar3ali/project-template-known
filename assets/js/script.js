// HOME Carousel
	$(".owl-carousel-home-0").owlCarousel({
		items: 1,
		loop: true,
		margin: 0,
		autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: false,
		dots: false,
		nav: false,
		animateOut: 'fadeOut',
	});
// COURSES Carousel
	$(".owl-carousel-courses-0").owlCarousel({
		loop: true,
		margin: 20,
		autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: false,
		dots: false,
		nav: true,
		animateOut: 'fadeOut',
		dotsEach: true,
		responsive: {
			0: {
				items: 1,
			},
			992: {
				items: 3,
			},
		},
	});
// REVIEWS Carousel
	$(".owl-carousel-reviews-0").owlCarousel({
		loop: true,
		margin: 80,
		autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: false,
		dots: false,
		nav: false,
		animateOut: 'fadeOut',
		responsive: {
			0: {
				items: 1,
			},
			767: {
				items: 3,
			},
		},
	});
	$(".owl-carousel").owlCarousel();
// navbar toggler
$(document).ready(function () {
	$(".navbar-toggler").on ("click", function (event) {
	// this won't work well enough
		// $('#home').toggleClass ("mr-top-394")
		// window.setTimeout(function() {
		// 	$("#home").toggleClass ("mr-top-394");
		// }, 100);
		$(event.target).focus();
	}).on ("blur", function(){
		$(".navbar-toggler").attr("aria-expanded","false").addClass("collapsed")
		$("#home").removeClass("mr-top-394")
		window.setTimeout(function() {
			$(".navbar-collapse").removeClass("show");
			}, 100);
	})
	setInterval( function(){
		if ($(".navbar-toggler").hasClass("collapsed")){
			$("#home").removeClass("mr-top-394")
		}else {$("#home").addClass("mr-top-394")}}, 100)
// Preloader stopper
	$("#loader-wrapper").addClass("d-none");
	$(document).scroll(function(){
		if ($(document).scrollTop()>200) {
			$("#up-btn").css("opacity","1")
		}else {$("#up-btn").css("opacity","0")}
	})
// Add smooth scrolling to all links
	$("a").on('click', function(event) {
		if (this.hash !== "") {
		event.preventDefault();
		var hash = this.hash;
		$('html, body').animate({
			scrollTop: $(hash).offset().top
		}, 2000, function(){
			window.location.hash = hash;
		});
		}
	});

});

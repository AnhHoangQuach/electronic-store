$('.owl-carousel').owlCarousel({
    loop:true,
    margin:25,
    nav:false,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
});

// create tab pane
$('ul.tab-nav li').click(function(){
    var tab_id = $(this).attr('data-tab');
    $('ul.tab-nav li').removeClass('current');
    $('.tab_content').removeClass('current');
    $(this).addClass('current');
    $("#"+tab_id).addClass('current'); 
});

//Input number
$('.input-number').each(function() {
	var $this = $(this),
	input = $this.find('input[type="number"]'),
	up = $this.find('.qty-up'),
	down = $this.find('.qty-down');

	down.on('click', function () {
		var value = parseInt(input.val()) - 1;
		value = value < 1 ? 1 : value;
		input.val(value);
		input.change();
	})

	up.on('click', function () {
		var value = parseInt(input.val()) + 1;
		input.val(value);
		input.change();
	})
});

//create slideshow gallery
var slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n){
    showSlides(slideIndex = n);
}

function showSlides(n){
    var i;
    var slides = document.getElementsByClassName("slide-image");
    var dots = document.getElementsByClassName("mySlides");
    if(n>slides.length){
        slideIndex = 1;
    }
    if(n<1){
        slideIndex = slides.length;
    }
    for(i=0;i<slides.length;i++){
        slides[i].style.display = "none";
    }
    for(i=0;i<dots.length;i++){
        dots[i].className = dots[i].className.replace(" active","");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

/* function zoom(e) {
    var zoomer = e.currentTarget;
    e.offsetX ? offsetX = e.offsetX : offsetX = e.touches[0].pageX
    e.offsetY ? offsetY = e.offsetY : offsetX = e.touches[0].pageX
    x = (offsetX / zoomer.offsetWidth) * 100
    y = (offsetY / zoomer.offsetHeight) * 100
    zoomer.style.backgroundPosition = x + "% " + y + "%";
}
*/
var zoomMainProduct = document.getElementsByClassName('main-image');
if (zoomMainProduct) {
    $('.main-image .slide-image').zoom();
}


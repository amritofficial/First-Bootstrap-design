$(document).ready(function(e){
	setBindings();
});

function setBindings(){
	$("nav div div ul li a").click(function(e){
		e.preventDefault();
		var sectionID = e.currentTarget.id + "Section";
		
		$("html body").animate({
			scrollTop: $("#" + sectionID).offset().top
		},1000)
		
	})
}

$(function(){
	
	$('.carousel').carousel({
		interval: 2000,
		pause: false,
	});
	
});


$(function () {
$('.responsiveGallery-wrapper').responsiveGallery({
	animatDuration: 400, //动画时长 单位 ms
	$btn_prev: $('.responsiveGallery-btn_prev'),
	$btn_next: $('.responsiveGallery-btn_next')
});
		});
		
		var interval = null;
		$(function(){
		interval = setInterval(callFun, 2000);
		});
		
		function callFun(){
			$('.responsiveGallery-btn_next').trigger('click');	
		}
		
		
		$('.navbar-collapse a').click(function(){
			$(".navbar-collapse").collapse('hide');
		});
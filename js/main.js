var win = $(window).width();
var winH = $(window).height();
var tA = $("#text-area").height();

var remain = ((winH - tA) / 2) - 35;

if(win >= 769 && win <=  1440) {

	$(window).on("load", function() {

		$("#text-area").css("top", remain + "px");
		$("#text-area-icon").attr("src", "img/icons/powerOnDisplay.png");

	});

}

if(win <= 425) {

	$(window).on("load", function() {

		$("#text-area").css("top", remain + "px");
		$("#text-area-icon").attr("src", "img/icons/powerOnDisplay.png");

	});
	
}
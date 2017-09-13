var win = $(window).height();
var bodyIn = $("#body-info").height();

var remain = (win - bodyIn - 40) / 2;

$(window).on("load", function() {

	$("#body-info").css("top", remain + "px");

});

window.addEventListener("orientationchange", function() {

	if(window.orientation == -90 || window.orientation == 90) {

		alert("This is landscape");

	} else {

		alert("This is portrait");

	}

});
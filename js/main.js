var win = $(window).height();
var bodyIn = $("#body-info").height();

var remain = (win - bodyIn - 40) / 2;

$(window).on("load", function() {

	$("#body-info").css("top", remain + "px");

});

window.addEventListener("orientationchange", function() {

	if(window.orientation == -90 || window.orientation == 90) {

		var win = $(window).height();
		var bodyI = $("#body-info").height();

		var rem = (win - bodyIn - 40) / 2;

		$("#body-info").css("top", remain + "px");

		alert($(window).width());

	} else {

		var win = $(window).height();
		var bodyI = $("#body-info").height();

		var rem = (win - bodyIn - 40) / 2;

		$("#body-info").css("top", remain + "px");

	}

});
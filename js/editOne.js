var win = $(window).width();
var winH = $(window).height();
var editBar = $("#editBar").height();

var editH = winH - editBar;

if(win >= 769 && win <= 1440) {

	$("#full-screen-edit").css("top", editBar + "px");
	$("#full-screen-edit").css("height", editH + "px");

}

var eBar = document.querySelectorAll(".e-bar");
var eBarA = new Array();

for(var i = 0; i < eBar.length; i++) {
	eBarA[i] = eBar[i];
}

for(var i = 0; i < eBar.length; i++) {

	$(eBar[i]).click(function() {

		var n = eBarA.indexOf(this);

		if(n == 1) {

			$(eBar[1]).css("background-color", "#f8f8f8");
			$(eBar[1]).css("border", "4px solid #f8f8f8");
			$(eBar[1]).css("color", "#484848");
			$("#full-screen-edit").css("left", "0vw");

		}

	});

}

var fSel = document.querySelectorAll(".f-sel-button");
var fSelA = new Array();
var fsH = $("#full-s-sel").height();

for(var i = 0; i < fSel.length; i++) {
	fSelA[i] = fSel[i];
}

var bgPre = $("#first-img").css("background-image");

for(var i = 0; i < fSel.length; i++) {

	$(fSel[i]).click(function() {

		var n = fSelA.indexOf(this);
		$("#full-s-sel").css("top", "-" + fsH + "px");

		if(n == 0) {
			
			$("#bg-section").css("left", "0vw");
			$("#bg-preview").css("background-image", bgPre);
			$("#small-image").css("background-image", bgPre);

		}

	});

}


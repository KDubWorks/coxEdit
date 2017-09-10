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

var fSel = document.querySelectorAll(".f-sel");
var fSelA = new Array();

for(var i = 0; i < fSel.length; i++) {
	fSelA[i] = fSel[i];
}

for(var i = 0; i < fSel.length; i++) {

	$(fSel[i]).click(function() {

		var n = fSelA.indexOf(this);

		if(n == 0) {
			$("#full-s-sel").css("margin-left", "-100vw");
		}

	});

}


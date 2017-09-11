var win = $(window).width();
var winH = $(window).height();
var editBar = $("#editBar").height();

var editH = winH - editBar;

if(win >= 769 && win <= 1440) {

	$("#full-screen-edit").css("top", editBar + "px");
	$("#full-screen-edit").css("height", editH + "px");
	$("#preview-edit").css("height", editH + "px");

}

var eBar = document.querySelectorAll(".e-bar");
var eBarA = new Array();

for(var i = 0; i < eBar.length; i++) {
	eBarA[i] = eBar[i];
}

for(var i = 0; i < eBar.length; i++) {

	$(eBar[i]).click(function() {

		var n = eBarA.indexOf(this);

		if(n == 0) {

			$(eBar[0]).css("background-color", "#f8f8f8");
			$(eBar[0]).css("border", "4px solid #f8f8f8");
			$(eBar[0]).css("color", "#484848");
			$("#preview-edit").css("left", "0em");

		} else if(n == 1) {

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

var edTitle = document.querySelectorAll(".editing-title");
var edTitleA = new Array();

for(var i = 0; i < edTitle.length; i++) {
	edTitleA[i] = edTitle[i];
}

for(var i = 0; i < edTitle.length; i++) {

	$(edTitle[i]).click(function() {

		var n = edTitleA.indexOf(this);

		if(n == 0) {
			$("#background-image-count").css("height", "10em");
		} else if(n == 1) {
			$("#background-image-animation").css("height", "15em");
		} else if(n == 2) {
			$("#background-image-sel").css("height", "20em");
		} else {
			$("#background-image-shadow").css("height", "12em");
		}

	});

}

/*Preview Buttons*/
var pButton = document.querySelectorAll(".pre-buttons");
var pButtonA = new Array();

for(var i = 0; i < pButton.length; i++) {
	pButtonA[i] = pButton[i];
}

for(var i = 0; i < pButton.length; i++) {

	$(pButton[i]).click(function() {

		var n = pButtonA.indexOf(this);

		if(n == 0) {
			$(pButton[0]).css("margin-bottom", "85vh");
		}

	});

}



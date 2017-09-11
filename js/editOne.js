var win = $(window).width();
var winH = $(window).height();
var edH = null;
edH = $("#editBar").height();

var rem = winH - edH;

/*These are the edit bar options*/
var eBar = null;
eBar = document.querySelectorAll(".e-bar");
var eBarA = new Array();

//This will place all the selections in the array
if(eBar !== null) {

	for(var i = 0; i < eBar.length; i++) {

		eBarA[i] = eBar[i];

	}

}

/*These are the full screen editing options*/
var fSelB = null;
fSelB = document.querySelectorAll(".f-sel-button");
var fSelBA = new Array();

//This will place all the selections in the array
if(fSelB !== null) {

	for(var i = 0; i < fSelB.length; i++) {

		fSelBA[i] = fSelB[i];

	}

}

$(window).on("load", function() {

	if(edH !== null) {
		$("#full-screen-edit").css("height", rem + "px");
		$("#full-screen-edit").css("top", edH + "px");
	}

});

/*This will be the landing edit page*/
var landE = null;
landE = document.getElementById("landing-edit");

if(win <= 1440 && win >= 769) {

	/*These are the user interactions with the edit bar*/
	if(eBar !== null) {

		for(var i = 0; i < eBar.length; i++) {

			$(eBar[i]).click(function() {

				var n = eBarA.indexOf(this);

				if(n == 1) {

					$(eBar[1]).css("background-color", "#f8f8f8");
					$(eBar[1]).css("border", "4px solid #f8f8f8");
					$(eBar[1]).css("color", "#484848");

					//This will pull the full screen editor out
					$("#full-screen-edit").css("left", "0px");

					if(landE !== null) {

						$("#landing-edit").css("left", "0px");

					}

				}

			});

		}

	}

}
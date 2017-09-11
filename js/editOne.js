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

/*These are the editing sections and buttons*/
var editS = document.querySelectorAll(".edit-sections");
var editT = null;
editT = document.querySelectorAll(".edit-title-button");
var editTA = new Array();

for(var i = 0; i < editT.length; i++) {
	editTA[i] = editT[i];
}

/*These are the full selection options*/
var fSSel = null;
fSSel = document.querySelectorAll(".f-sel-button");
var fSSelA = new Array();

for(var i = 0; i < fSSel.length; i++) {
	fSSelA[i] = fSSel[i];
}

/*This is for the background image editor*/
var bgImgT = null;
bgImgT = document.getElementById("img-preveiw-title");

var fSH = $("#full-s-sel").height();

/*This are the background images for the preview*/
var backImg = $("#first-img").css("background-image");

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

	/*This will open the options at the landing page*/
	if(editT !== null) {

		for(var i = 0; i < editT.length; i++) {

			$(editT[i]).click(function() {

				var n = editTA.indexOf(this);

				if(n == 0) {

					$(editS[0]).css("height", "10em");

				} else if(n == 1) {

					$(editS[1]).css("height", "15em");

				} else if(n == 2) {

					$(editS[2]).css("height", "20em");

				} else if(n == 3) {

					$(editS[3]).css("height", "25em");

				} else {

					$(editS[4]).css("height", "10em");
					$(editS[4]).css("margin-bottom", "4em");

				}

			});

		}

	}

	/*This will work for the full screen selectors*/
	if(fSSel !== null) {

		for(var i = 0; i < fSSel.length; i++) {

			$(fSSel[i]).click(function() {

				var n = fSSelA.indexOf(this);

				if(n == 0) {

					$("#full-s-sel").css("top", "-" + fSH + "px");
					setTimeout(function() {
						$("#bg-edit").css("left", "0px");
					}, 100);

				}

			});

		}

	}

	/*This is specifically for the background images*/
	if(bgImgT !== null) {

		$(bgImgT).click(function() {

			$("#image-preview").css("height", "75vh");
			$("#image-preview").css("background", backImg);

		});

	}

}
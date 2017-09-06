/*These will be the editing areas that make up the edit*/
/*Background Image Edit*/
/*var scrollMove = document.createElement("DIV");
scrollMove.setAttribute("class", "scroll");

var topS = document.createElement("DIV");
topS.setAttribute("class", "top-s");

var bottomS = document.createElement("DIV");
bottomS.setAttribute("class", "bot-s");

$(scrollMove).append(topS);
$(scrollMove).append(bottomS);

var backEdit = document.createElement("DIV");
backEdit.setAttribute("id", "back-edit");

var backEditT = document.createElement("H3");
backEditT.innerHTML = "background image edit";
backEditT.setAttribute("class", "edit-title");

var backEditQ1 = document.createElement("P");
backEditQ1.innerHTML = "Select the amount of background images you would like.";
backEditQ1.setAttribute("class", "edit-para");

var choices = document.createElement("DIV");
choices.setAttribute("id", "choices");

var firstChoice = document.createElement("DIV");
firstChoice.setAttribute("id", "one-image");

var secondChoice = document.createElement("DIV");
secondChoice.setAttribute("id", "mult-images");

var backEditQ2 = document.createElement("DIV");
backEditQ2.innerHTML = "Select a background image/images.";
backEditQ2.setAttribute("class", "edit-para");

var backImages = document.createElement("DIV");
backImages.setAttribute("id", "back-images");

var backEditQ3 = document.createElement("DIV");
backEditQ3.innerHTML = "Select the weight of the background shadow.";
backEditQ3.setAttribute("class", "edit-para");

var backShadow = document.createElement("DIV");
backShadow.setAttribute("id", "back-shadow");

var button = document.createElement("BUTTON");
button.innerHTML = "edit options";
button.setAttribute("class", "edit-some-more");

var pButton = document.createElement("BUTTON");
pButton.innerHTML = "preview";
pButton.setAttribute("class", "p-button");

$("html, body").append(scrollMove);

$(choices).append(firstChoice); 
$(choices).append(secondChoice);

$(backEdit).append(backEditT);
$(backEdit).append(backEditQ1);
$(backEdit).append(choices);
$(backEdit).append(backEditQ2);
$(backEdit).append(backImages);
$(backEdit).append(backEditQ3);
$(backEdit).append(backShadow);
$(backEdit).append(button);
$(backEdit).append(pButton);*/

/*Shadow Box Edit*/

/*var editButton = document.getElementById("edit-button");

editButton.addEventListener("click", function() {

	$("#bg-area").css("height", "75vh");	
	$("#bg-area").css("top", "12.5vh");
	$("#bg-in-area").css("height", "75vh");
	$(".in-edit").css("height", "75vh");
	$("#title").css("border", "0.75vh solid #fff");
	$("#close").css("border", "1vh solid #3d3d3d");

	setTimeout(function() {

		$("#bg-area").css("width", "70vw");
		$("#bg-area").css("right", "2.5vw");
		$("#bg-in-area").css("width", "210vw");
		$(".in-edit").css("width", "70vw");
		$("#title").css("font-size", "2.5vh");
		$("#edit-slide").css("left", "0px");

	}, 800);

});


var inEdit = document.querySelectorAll(".in-edit");
var inEditA = new Array();

for(var i = 0; i < inEdit.length; i++) {
	inEditA[i] = inEdit[i];
}

backgroundImages = new Array();
backgroundStyles = new Array();


for(var i = 0; i < inEdit.length; i++) {

	inEdit[i].addEventListener("click", function() {

		var i = inEditA.indexOf(this);

		if(i == 0) {

			$(backEdit).css("left", "0vw");
			$("#edit-slide").css("overflow", "hidden");

			$(".top-s").click(function() {

				$("#back-edit").css("top", "0vh");

			});

			$(".bot-s").click(function() {

				$("#back-edit").css("top", "-40vh");

			});

			$(".edit-some-more").click(function() {

				$("#back-edit").css("left", "-25vw");
				$("#edit-slide").css("overflow", "scroll");

			});

			$(".p-button").click(function() {

				alert("Hello");

			});

		} else if(i == 1) {



		} else if(i == 2) {

			

		}

	});

}

$("#close").click(function() {

	$("#close").css("border", "1vh solid transparent");

	$("#edit-slide").css("left", "-25vw");
	$("#bg-area").css("width", "100vw");
	$("#bg-area").css("right", "0vw");
	$("#bg-in-area").css("width", "300vw");
	$(".bg-img").css("width", "100vw");
	$("#title").css("border", "1vh solid #fff");

	setTimeout(function() {

		$("#bg-area").css("top", "0vh");
		$("#bg-area").css("height", "100vh");
		$("#bg-in-area").css("height", "100vh");
		$(".bg-img").css("height", "100vh");
		$("#title").css("font-size", "3.5vh");

	}, 800);

});*/

var inEdit = document.querySelectorAll(".in-edit");
var inEditA = new Array();

for(var i = 0; i < inEdit.length; i++) {
	inEditA[i] = inEdit[i];
}

function open() {

	$("#edit-button").click(function() {

		$("#bg-area").css("height", "75vh");	
		$("#bg-area").css("top", "12.5vh");
		$("#bg-in-area").css("height", "75vh");
		$(".in-edit").css("height", "75vh");
		$("#title").css("border", "0.75vh solid #fff");
		$("#close").css("border", "1vh solid #3d3d3d");

		setTimeout(function() {

			$("#bg-area").css("width", "70vw");
			$("#bg-area").css("right", "2.5vw");
			$("#bg-in-area").css("width", "210vw");
			$(".in-edit").css("width", "70vw");
			$("#title").css("font-size", "2.5vh");
			$("#edit-slide").css("left", "0px");

		}, 800);

	});

	for(var i = 0; i < inEdit.length; i++) {

		inEdit[i].addEventListener("click", function() {

			$("#edit-area").css("left", "0vw");

			var n = inEditA.indexOf(this);

			if(n == 0) {

				alert("What up");

			}

		});

	}

	close();

}

function close() {

	$("#close").click(function() {

		$("#close").css("border", "1vh solid transparent");

		$("#edit-slide").css("left", "-25vw");
		$("#bg-area").css("width", "100vw");
		$("#bg-area").css("right", "0vw");
		$("#bg-in-area").css("width", "300vw");
		$(".bg-img").css("width", "100vw");
		$("#title").css("border", "1vh solid #fff");

		$("#edit-slide").css("left", "-25vw");

		setTimeout(function() {

			$("#bg-area").css("top", "0vh");
			$("#bg-area").css("height", "100vh");
			$("#bg-in-area").css("height", "100vh");
			$(".bg-img").css("height", "100vh");
			$("#title").css("font-size", "3.5vh");

		}, 800);

	});

}

open();




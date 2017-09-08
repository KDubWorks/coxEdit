var otherE = document.getElementById("other-e");
var otherP = document.getElementById("other-p");

var editTitle = document.getElementById("edit-title");
var inEdit = null;

inEdit = document.querySelectorAll(".in-edit");
var inEditA = new Array();

for(var i = 0; i < inEdit.length; i++) {
	inEditA[i] = inEdit[i];
}

function open() {

	if(inEdit !== null ) {

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

					editTitle.textContent = "Background Image Edit";

				}

			});

		}

		close();

	}

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




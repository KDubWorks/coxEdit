var editButton = document.getElementById("edit-button");

editButton.addEventListener("click", function() {

	$("#bg-area").css("height", "75vh");	
	$("#bg-area").css("top", "12.5vh");
	$("#bg-in-area").css("height", "75vh");
	$(".in-edit").css("height", "75vh");
	$("#title").css("border", "0.75vh solid #fff");

	setTimeout(function() {

		$("#bg-area").css("width", "70vw");
		$("#bg-area").css("right", "2.5vw");
		$("#bg-in-area").css("width", "210vw");
		$(".in-edit").css("width", "70vw");
		$("#title").css("font-size", "2.5vh");
		$("#edit-slide").css("left", "0px");

	}, 800);

	//$("#edit-slide").css("left", "0vw");

});


var inEdit = document.querySelectorAll(".in-edit");
var inEditA = new Array();

for(var i = 0; i < inEdit.length; i++) {
	inEditA[i] = inEdit[i];
}

for(var i = 0; i < inEdit.length; i++) {

	inEdit[i].addEventListener("click", function() {

		var i = inEditA.indexOf(this);

		alert("Hello");

	});

}


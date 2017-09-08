/*---------------------------------------------
This will be the similar code between the 
edited and product version
---------------------------------------------*/
var editOpt = null;
editOpt = document.querySelectorAll(".edit-opt");
var editOptA = new Array();

for(var i = 0; i < editOpt.length; i++) {
	editOptA[i] = editOpt[i];
}

function openEdit() {

	if(editOpt !== null) {

		for(var i = 0; i < editOpt.length; i++) {

			$(editOpt[i]).click(function() {

				$("#editor-area").css("width", "30em");
				$("#in-edit-area").css("margin-left", "-22em");

			});

		}

	}

}

openEdit();


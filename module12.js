var Module12 = {};

Module12.start = function () {
	
	var arr = document.body.childNodes;*/

	for (var i = 0; i < arr.length; i++) {
		if (arr[i].nodeType == 1) {
			arr[i].innerHTML = "PARAGRAPH";
		}
	}

}
window.onload = function () {

	var btnP = document.getElementById("btnP");
	var btnDiv = document.getElementById("btnDiv");
	var btnLink = document.getElementById("btnLink");
	
	btnP.onclick = function () {
		var pArray = document.getElementsByTagName("p");
		for (var i = 0; i < pArray.length; i++) {
			pArray[i].style.border = "1px solid black";
		}
	}

	btnDiv.onclick = function () {
		var divArray = document.getElementsByTagName("div");
		for (var i = 0; i < divArray.length; i++) {
			divArray[i].style.border = "2px solid red";
		}
	}

	btnLink.onclick = function () {
		var linkArray = document.getElementsByTagName("a");
		for (var i = 0; i < linkArray.length; i++) {
			linkArray[i].style.border = "3px solid green";
		}
	}


}
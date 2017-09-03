window.addEventListener('keydown', function (e) {

	var p = document.getElementsByTagName("p");
		
	var key = e.keyCode;

	if (e.keyCode == 82) {
		for (var i = 0; i < p.length; i++) {
			p[i].style.color = "red";
		}
	} else if (e.keyCode == 71) {
		for (var i = 0; i < p.length; i++) {
			p[i].style.color = "green";
		}
	} else if (e.keyCode == 66) {
		for (var i = 0; i < p.length; i++) {
			p[i].style.color = "blue";
		}
	} else {
		if (p[0].style.color != "black") {
			for (var i = 0; i < p.length; i++) {
				p[i].style.color = "black";
			}
		}
	}

	switch (key) {
		case 49: Font(14); break;
		case 50: Font(16); break;
		case 51: Font(18); break;
		case 52: Font(20); break;
		case 53: Font(24); break;
		case 54: Font(28); break;
		case 55: Font(32); break;
	}

function Font(size) {
	for (var i = 0; i < p.length; i++) {
			p[i].style.fontSize = size + "px";
		}
}


})
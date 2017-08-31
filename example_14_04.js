window.onload = function () {  

	var x = window.innerWidth,
			y = window.innerHeight,
			div = document.getElementsByTagName("div"),
			input = document.getElementsByTagName("input");

	input.onclick = function () {

		switch (get(id))



		div[i].style.top = getRandom(1, y-500) + "px";
		div[i].style.left = getRandom(1, x-200) + "px";


	}

}

var get = function (id) {
	return document.getElementById(id);
}
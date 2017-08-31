window.onload = function () {  

	function position() {

		var x = window.innerWidth,
				y = window.innerHeight,
				div = document.getElementsByTagName("div");

		for (var i = 0; i < div.length; i++) {
			div[i].style.top = getRandom(1, y-400) + "px";
			div[i].style.left = getRandom(1, x-200) + "px";

			div[i].style.backgroundColor = "hsl("+getRandom(0,360)+",75%,50%)";
		}

	}

	setInterval(position, 1000);

}

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
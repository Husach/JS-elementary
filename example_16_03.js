window.onload = function () {

	var btn = document.getElementById("btn");
	
	  btn.addEventListener("mousemove", escape)	
	  
		function escape (e) {
			var x = e.clientX,
					y = e.clientY;

			if (x > 500) {
				x -= 300;
			}
			if (y > 500) {
				y -=300;
			}

			btn.style.position = "absolute";
			btn.style.left = x + getRandom(1, 100) + "px";
  		btn.style.top = y + getRandom(1, 100) + "px";
	}	

}

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
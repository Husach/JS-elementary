window.onload = function () {  

	var x = 0,
			y = 0,
			timer,
			div = document.getElementById("div");

	get("up").onclick = function () {
			timer = setInterval (function (){
			y -=1;
			div.style.top = y + "px";
			check(y);
		}, 10)
	}
	get("down").onclick = function () {
		timer = setInterval (function (){
			y +=1;
			div.style.top = y + "px";
			check(y);
		}, 10)
	}
	get("left").onclick = function () {
		timer = setInterval (function (){
			x -=1;
			div.style.left = x + "px";
			check(x);
		}, 10)
	}	
	get("right").onclick = function () {
		timer = setInterval (function (){
			x +=1;
			div.style.left = x + "px";
			check(x);
		}, 10)
	}	


	function check(data) {
		if (data % 100 == false) {
			return clearInterval(timer);
		}
	}


}

var get = function (id) {
	return document.getElementById(id);
}


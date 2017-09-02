window.addEventListener('load', function() {

	var x = 0,
			y = 0,
			timer,
			div = get("div"),
			key;

	window.addEventListener('keydown', function (e) {
		key = e.keyCode;
	
		if (key == 38) {
			timer = setInterval (function (){
				y -=1;
				div.style.top = y + "px";
				check(y);
			}, 10)
		
		} else if (key == 40) {
			timer = setInterval (function (){
				y +=1;
				div.style.top = y + "px";
				check(y);
			}, 10)
			
		} else if (key == 37) {
			timer = setInterval (function (){
				x -=1;
				div.style.left = x + "px";
				check(x);
			}, 10)
			
		} else if (key == 39) {
			timer = setInterval (function (){
				x +=1;
				div.style.left = x + "px";
				check(x);
			}, 10)		
		}

	})

	function check(data) {
		if (data % 10 == false) {
			return clearInterval(timer);
		}
	}

})

var get = function (id) {
	return document.getElementById(id);
}


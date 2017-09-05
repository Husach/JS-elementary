window.onload = function () {

	var size = document.getElementById('size'),
			color = document.getElementById('color'),
			p = document.getElementById('output'),
			btn = document.getElementById('btn');
	
	update();

	color.addEventListener('change', newColor)
	size.addEventListener('blur', newSize)

	function newColor() {
		window.localStorage.bgcolor = color.value;
	}

	function newSize() {
		if (parseInt(size.value) != "") {
			window.localStorage.size = parseInt(size.value);
		}
	}

	btn.addEventListener('click', update, false);

	function update() {
		document.body.style.backgroundColor = window.localStorage.bgcolor;
		p.style.fontSize = window.localStorage.size + 'px';
	}

	window.addEventListener('beforeunloan', close)

	function close() {
		newColor();
		newSize();
	}
}
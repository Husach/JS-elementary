window.onload = function () {  

	var first = get("first"),
			second = get("second"),
			mul = get("mul"),
			div = get("div"),
			add = get("add"),
			ded = get("ded");
		
	add.addEventListener("click", function() {
		alert(operation(first.value, second.value, add.value));
	}, false)
	mul.addEventListener("click", function() {
		alert(operation(first.value, second.value, mul.value));
	}, false)
	div.addEventListener("click", function() {
		alert(operation(first.value, second.value, div.value));
	}, false)
	ded.addEventListener("click", function() {
		if (second.value != 0) {
			alert(operation(first.value, second.value, ded.value));
		} else {
			alert("Делить на ноль нельзя!");
		}
	}, false)


	function operation (a, b, operat) {
		switch (operat) {
			case "+": return parseFloat(a) + parseFloat(b); break;
			case "-": return parseFloat(a) - parseFloat(b); break;
			case "/": return parseFloat(a) / parseFloat(b); break;
			case "*": return parseFloat(a) * parseFloat(b); break;
		}
	}

	var pattern = /\d/;

	first.addEventListener('keypress', function (e) {
		var str = String.fromCharCode(e.charCode);
		if (!pattern.test(str)){
			e.preventDefault();
		}
	})
	second.addEventListener('keypress', function (e) {
		var str = String.fromCharCode(e.charCode);
		if (!pattern.test(str)){
			e.preventDefault();
		}
	})

}

var get = function (id) {
	return document.getElementById(id);
}
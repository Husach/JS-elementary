window.onload = function () {  

	var first = get("first"),
			second = get("second"),
			mul = get("mul"),
			div = get("div"),
			add = get("add"),
			ded = get("ded");

	mul.onclick = function () {
		alert(operation(first.value, second.value, mul.value));
	}

	div.onclick = function () {
		if (second.value != 0) {
			alert(operation(first.value, second.value, div.value));
		} else {
			alert("Нельзя делить на ноль!");
		}
	}

	add.onclick = function () {
		alert(operation(first.value, second.value, add.value));
	}

	ded.onclick = function () {
		alert(operation(first.value, second.value, ded.value));
	}

	function operation (first, second, operat) {
		switch (operat) {
			case "+": return parseFloat(first) + parseFloat(second); break;
			case "-": return parseFloat(first) - parseFloat(second); break;
			case "/": return parseFloat(first) / parseFloat(second); break;
			case "*": return parseFloat(first) * parseFloat(second); break;
		}
	}

}

var get = function (id) {
	return document.getElementById(id);
}
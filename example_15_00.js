window.onload = function () {  

	var first = get("first"),
			second = get("second"),
			resul;

	first.onblur = function () {
		second.onblur = function () {

			get("mul").onclick = function () {
				alert(first.value * second.value);
			}
			get("div").onclick = function () {
				if (second.value != 0) {
					alert(first.value / second.value);
				} else {
					alert("Нельзя делить на ноль!");
				}
			}
			get("add").onclick = function () {
				var a = parseFloat(first.value),
						b = parseFloat(second.value);
				alert (a + b);
			}
			get("ded").onclick = function () {
				alert(first.value - second.value);
			}

		}

	}

}

var get = function (id) {
	return document.getElementById(id);
}
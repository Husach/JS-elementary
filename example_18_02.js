window.onload = function () {

	var p = document.getElementById("output");

	function change() {

		var arr = p.split('');

		alert(arr[0]);
		alert(arr[2]);
	}


	change();

}
window.addEventListener('keydown', function (e) {

	if (e.keyCode == 83 && e.ctrlKey && e.shiftKey) {
		alert("Сохранено всё");
	} else if (e.keyCode == 65 && e.ctrlKey) {
		alert("Выбрано всё");
	} else if (e.keyCode == 83 && e.ctrlKey) {
		alert("Сохранено");
	}

	

})
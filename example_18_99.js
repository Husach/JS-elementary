window.onload = function () {

	var p = document.getElementById("output"),
			arr = p.innerHTML.split(""),
			temp;

		
	/*function change() {						добавляем в начало последнее слово

		temp = arr.pop();
		
		arr.unshift(temp);

		p.innerHTML = arr.join(' ');
	}*/

		function change() {

		temp = arr.shift();
		
		arr.push(temp);

		p.innerHTML = arr.join('');
	}

	setInterval(change, 100);

}
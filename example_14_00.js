window.onload = function () {  

	var btn = document.getElementById("btn"),
			e = document.getElementsByTagName("div"),
			count = 0,
			minus = 0;

	btn.onclick = function () {
		
		if (count > 0 && count < 5) {
			minus = count - 1;
			e[minus].style.backgroundColor = "green";
			e[count].style.backgroundColor = "red";
			count++;
		} else {
			e[0].style.backgroundColor = "red";
			e[4].style.backgroundColor = "green";
			count = 1;
		}
	}	
}

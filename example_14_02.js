window.onload = function () {  

	var btn = document.getElementById("btn"),
			login = document.getElementById("login"),
			password = document.getElementById("password"),
			pOk = document.getElementById("loginOk");
			pEr = document.getElementById("loginError");

	btn.onclick = function () {

		if (login.value.length == 0 && password.value.length == 0) {
			pEr.style.visibility = "visible";
			login.style.backgroundColor = "red";
			password.style.backgroundColor = "red";
		} else if (login.value == "admin" && password.value == "12345") {
			pOk.style.visibility = "visible";
		} else if (login.value.length == 0) {
			pEr.style.visibility = "visible";
			login.style.backgroundColor = "red";
			password.style.backgroundColor = "white";
		} else if (password.value.length == 0) {
			pEr.style.visibility = "visible";
			login.style.backgroundColor = "white";
			password.style.backgroundColor = "red";
		} else {
			pEr.style.visibility = "hidden";
			login.style.backgroundColor = "white";
			password.style.backgroundColor = "white";
		}

	}

}
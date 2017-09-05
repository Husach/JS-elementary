window.addEventListener('load', init, false);

function init() {

	var pass = document.getElementById("pass"),
			repass = document.getElementById("repass"),
			p = document.getElementById("error")	;

	repass.onblur = function () {
		if (pass.value === repass.value) {
			p.style.display = "none";
		} else {
			p.style.display = "block";
		}
	}

	var mail = document.getElementById("email"),
			pattern = /\w+@\w+.\w{3}/g;

	mail.onblur = function() {
		if (pattern.test(mail.value)) {
			alert("success");
		} else {
			alert ("mistake");
		}
	}

}
window.onbeforeunload = function () {

		document.cookie = ' last visit =  ' + new Date() + ';max-age=2592000';
		
}
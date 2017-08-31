window.onload = function () {  

  document.getElementById("value").onblur = function () {

    var value = document.getElementById("value").value,
    		output = document.getElementById("output"),
	    	number = getRandom(1,100);

	  if  (value > number) {
	  	output.innerHTML = "Загаданное значение меньше";
	  } else if (value < number) {
	  	output.innerHTML = "Загаданное значение больше";
	  } else {
	  	output.innerHTML = "Вы угадали!";
	  }


  }

}

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
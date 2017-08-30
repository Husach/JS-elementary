window.onload = function () {  
  var sec = 0,
      min = 0,
      hours = 0,
      output = document.getElementById("output"),
      intervalHandler;

  function timer() {
    sec++;

    if (sec > 59) {
      sec = 0;
      min++;
 
      if (min > 59) {
        min = 0;
        hours++;
      }
    }
        
    if (sec < 10 && min < 10) {
      output.innerHTML = hours.toString() + ":" + "0" + min.toString() + ":" + "0" + sec.toString();
    } 
    else if (sec < 10) {
      output.innerHTML = hours.toString() + ":" + min.toString() + ":" + "0" + sec.toString();
    } 
    else if (sec > 9 && min < 10) {
      output.innerHTML = hours.toString() + ":" + "0" + min.toString() + ":" + sec.toString();
    } 
    else {
      output.innerHTML = hours.toString() + ":" + min.toString() + ":" + sec.toString();
    }

  }

  get("startButton").onclick = function () {
    intervalHandler = setInterval(timer, 1000);
  }

  get("stopButton").onclick = function () {
    clearInterval(intervalHandler);
  }
      
  get("resetButton").onclick = function () {
    sec = 0;
    min = 0;
    hours = 0;
    output.innerHTML = "00:00:00";
  }

}

var get = function (id) {
  return document.getElementById(id);
}
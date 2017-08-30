window.onload = function () {  

  document.getElementById("value").onblur = function () {

    var value = document.getElementById("value").value;

    var newElement = document.createElement("marquee");

    newElement.setAttribute("behavior", "alternate");
    newElement.setAttribute("direction", "left");

    newElement.innerHTML = value;

    document.body.appendChild(newElement);


  }

}

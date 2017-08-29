window.onload = function () {
        
  var btn = document.getElementById("btn");
  var counter = 0;
          
  btn.onclick = function () {

    var p = document.createElement("p");
    p.innerHTML = "lorem ipsum";
    document.body.appendChild(p);

    var body = document.body.childNodes;
    counter++;

    if (counter == 10) {
      for (var i = 0; i < body.length; i++) {
        if (body[i].nodeName == "P") {
          document.body.removeChild(body[i]);
          i--;
        }
      }
      counter = 0;
    }

  }
}
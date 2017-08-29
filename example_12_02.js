window.onload = function () {
    
  /*var arr = document.getElementsByTagName("p");*/
  var arr = document.body.childNodes;

  for (var i = 0; i < arr.length; i++) {
    arr[i].innerHTML = "PARAGRAPH";
  }

}
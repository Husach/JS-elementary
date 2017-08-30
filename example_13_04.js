window.onload = function () {  

  var btn01 = document.getElementById("link01"),
      btn02 = document.getElementById("link02"),
      btn03 = document.getElementById("link03"),
      w,
      flag1 = 0,
      flag2 = 0,
      flag3 = 0;

  btn01.onclick = function () {
    w = window.open("example_13_041.html", "JS lesson 1", "width=500, height=500");
    
    if (flag1 == 0) {
      btn01.innerHTML = "JS lesson 1 (opened)";  
      flag1 = 1;
    } else {
      btn01.innerHTML = "JS lesson 1"; 
      flag1 = 0;
      w.close();
    } 
  }

  btn02.onclick = function () {
    w = window.open("example_13_042.html", "JS lesson 2", "width=500, height=500");
    
    if (flag2 == 0) {
      btn02.innerHTML = "JS lesson 2 (opened)";  
      flag2 = 1;
    } else {
      btn02.innerHTML = "JS lesson 2"; 
      flag2 = 0;
      w.close();
    } 
  }

   btn03.onclick = function () {
    w = window.open("example_13_043.html", "JS lesson 3", "width=500, height=500");
    
    if (flag3 == 0) {
      btn03.innerHTML = "JS lesson 3 (opened)";  
      flag3 = 1;
    } else {
      btn03.innerHTML = "JS lesson 3"; 
      flag3 = 0;
      w.close();
    } 
  }


}

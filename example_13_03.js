window.onload = function () {  

  document.getElementById("input").onblur = function () {

    var input = document.getElementById("input").value,
        operation = input.match(/[+*/-]/g)[0],
        numberArray = input.split(/\W+/g);

        document.getElementById("output").innerHTML = switCase(numberArray, operation);      
  }

  function switCase (array, operation) {
    var a = parseFloat(array[0]),
        b = parseFloat(array[1]);

    switch (operation) {
      case "+": return a+b; break;
      case "-": return a-b; break;
      case "*": return a*b; break;
      case "/": return a/b; break;
    }

  }
       
}
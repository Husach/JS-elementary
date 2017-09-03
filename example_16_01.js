var flag = false,
    text;
      
window.onload = function () {

  var button = document.getElementById('save');

  button.addEventListener('click', function () {
    flag = true;
  })
}

window.onbeforeunload = function () {

  text = document.getElementById('text').value.length;
  
  if (!flag && text !=0) {
    return 'Вы не сохранили данные!';
  }
}
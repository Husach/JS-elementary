  window.onload = function () {
      var elemets = MyQuery.FindClass("test");
      alert(elemets.length);
    }
      var MyQuery = {};

      MyQuery.FindClass = function(className) {
          
        var childs = document.body.childNodes,
            array = [],
            count = 0;    

        for (var i = 0; i < childs.length; i++) {
          if (childs[i].nodeType == 1) {

            if (childs[i].className == className) {
              array[count] = childs[i];
              count++;
            }
          }
        }
        return array;
      }

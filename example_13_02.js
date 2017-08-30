window.onload = function () {  

  var result = 0,                               /*?a=100&b=200*/
      query = location.search.substring(1),
      pairs = query.split("&");

      for (var i = 0; i < pairs.length; i++) {

        var pos = pairs[i].indexOf('=');
        if (pos == -1) {
          continue;
        }

        var value = pairs[i].substring(pos + 1);

        result += parseFloat(value);
      }

  document.write(result);
     
}
Module = {};
  
  Module.watermark = function (form,name,value) {

    var watermark = value,
    		input = form[name];
            
    initInput();

    input.onfocus = function () {
      if (input.value == watermark) {
        input.value = "";
        input.style.color = "black";
        input.style.fontStyle = "normal";
      }
     }

    input.onblur = function () {
    	if (input.value == "") {
      	initInput();
      }
    }

    function initInput() {
      input.value = watermark;
      input.style.color = "gray";
      input.style.fontStyle = "italic";
    }
  }
  
	window.onload = function () {
    
    var form = document.forms[0],
    		login = form.login.dataset.watermark,
        pass = form.password.dataset.watermark,
        email = form.email.dataset.watermark,
        address = form.address.dataset.watermark;
            
        Module.watermark(form,'login',login);
        Module.watermark(form,'password',pass);
        Module.watermark(form,'email',email);
        Module.watermark(form,'address',address);
  }
window.addEventListener('load', init, false);

	function init()	{

		var total = document.getElementById("total"),
				form = document.orderForm,
				basis = form.basis,
				priceIngredients = 0,
				priceBasis = 0,
				cost = 0,
				sum = 0;

		priceBasis = parseFloat(basis.value);

		basis.addEventListener("change", function() {
			priceBasis = parseFloat(basis.value);		
			result();
		})

		for (el in form.elements) {
			var currentEl = form.elements[el];	

			if (currentEl.name == "ingredients") {
				currentEl.addEventListener("change", function (e) {
				
					switch (e.target.value) {
						case "mashrooms": cost = 10; break;
						case "bekon": cost = 15; break;
						case "tomato": cost = 5; break;
						case "cheese": cost = 12; break;
						case "olive": cost = 7; break;
					}

					check(e, cost);
					result();

				})
			}

		function result() {
			sum = priceBasis + priceIngredients;
			total.innerHTML = "Итоговая сумма заказа: " + sum + "грн.";				
		}

		function check (e, cost) {
			if (e.target.checked == true) {
				priceIngredients += cost;	
			} else {
				priceIngredients -= cost;	
			}

		}



		}
	
	}
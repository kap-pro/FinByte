 {
	let button = document.querySelector("#btn");

	// Function for calculating BMI
	button.addEventListener("click", calculateBMI);
};

function calculateBMI() {

	/* Getting input from user into height variable.
	Input is string so typecasting is necessary. */
	let amount = parseInt(document
			.querySelector("#height").value);

	/* Getting input from user into weight variable.
	Input is string so typecasting is necessary.*/
	let period = parseInt(document
			.querySelector("#weight").value);
			
			let ret = parseInt(document
			.querySelector("#ret").value);

	let result = document.querySelector("#result");

	 // Checking the user providing a proper
	 // value or 



		// Fixing upto 2 decimal places
	
			let interest = (amount * (ret * 0.01)) / period;
						let total = ((amount / period) + interest).toFixed(2);


		// Dividing as per the bmi conditions
		result.innerHTML =
			`<b>EMI</b> : <span>${total}</span>`
		
           }
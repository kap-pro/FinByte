window.onload = () => {
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
		let monthlyRate = (ret / 12/100);
		   let months =period * 12;
			let futureValue=amount * (Math.pow(1 + monthlyRate, months) - 1) ;
						let invested=months * amount;

			let wealth_gain=futureValue-invested;

		// Dividing as per the bmi conditions
		result.innerHTML =
			`<b>Expected Amount</b> : <span>${futureValue}</span>
			<br><b>Amount Invested:</b> <span>${invested}</span>
			<br><b>Profit Amount : </b><span>${wealth_gain}</span>`
			

	
            }
            
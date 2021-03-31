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

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Expected Amount', 'Amount Invested', 'Profit Amount'],
        datasets: [{
            label: '# of Votes',
            data: [8,2,2],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)'
         
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
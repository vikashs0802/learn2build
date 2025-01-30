// Define the minimum income and credit score requirements
const minIncomeForDuplex = 60000;
const minCreditScoreForDuplex = 700;

const minIncomeForCondo = 45000;
const minCreditScoreForCondo = 680;

const minIncomeForCar = 30000;
const minCreditScoreForCar = 650;

function getLoanMessage(annualIncome, creditScore) {
if (annualIncome >= minIncomeForDuplex && creditScore >= minCreditScoreForDuplex) {
  return "You qualify for a duplex, condo, and car loan.";

}
else if (annualIncome >= minIncomeForCondo && creditScore >= minCreditScoreForCondo) {
  return "You qualify for a condo and car loan.";
}
else if (annualIncome >= minIncomeForCar && creditScore >= minCreditScoreForCar) {
  return "You qualify for a car loan.";
}
else {
	return "You do not qualify for any type of loan.";
}

}

document.querySelector('form').addEventListener('submit', function(event) {
//  Prevent the form from submitting the default way
	event.preventDefault(); 
	
	//  Get the values from the form inputs
	const annualIncome = parseFloat(document.getElementById('annualincome').value);
	const creditScore = parseFloat(document.getElementById('creditscore').value);
	
	// Get the loan message
	const message = getLoanMessage(annualIncome, creditScore);
	// Display the message to the user
	document.getElementById('loanMessage').innerText = message;
});
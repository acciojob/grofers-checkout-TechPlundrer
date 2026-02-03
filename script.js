const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
  const priceElements = document.querySelectorAll(".prices");
	let totalPrice = 0;

	priceElements.forEach(priceElement => {
		const price = parseFloat(priceElement.textContent);

		if(!isNaN(price)) {
			totalPrice += price;
		}
	});

	const table = document.querySelector("table");
	const newRow = document.createElement('tr');
	const newCell = document.createElement('td');

	newCell.textContent = `Total Price:$${totalPrice.toFixed(2)}`;
	newRow.appendChild(newCell);

	table.appendChild(newRow);
};

getSumBtn.addEventListener("click", getSum);


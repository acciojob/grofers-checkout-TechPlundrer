const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
    const priceElements = document.querySelectorAll('.prices');
    let totalPrice = 0;

    priceElements.forEach(priceElement => {
        const price = parseFloat(priceElement.textContent);
        if (!isNaN(price)) {
            totalPrice += price;
        }
    });

    const table = document.querySelector('table');

    // Prevent duplicate total row
    if (document.querySelector('.total-row')) return;

    const newRow = document.createElement('tr');
    newRow.classList.add('total-row');

    const newCell = document.createElement('td');
    newCell.colSpan = 2;
    newCell.textContent = `Total Price: Rs ${totalPrice.toFixed(2)}`;

    newRow.appendChild(newCell);
    table.appendChild(newRow);
};

getSumBtn.addEventListener("click", getSum);

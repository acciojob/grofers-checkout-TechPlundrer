const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  const priceCells = document.querySelectorAll(".prices");
  let total = 0;

  priceCells.forEach(cell => {
    total += parseFloat(cell.innerText) || 0;
  });

  const table = document.querySelector("table");


  if (document.querySelector(".total-row")) return;

  const totalRow = document.createElement("tr");
  totalRow.classList.add("total-row");

  const totalCell = document.createElement("td");
  totalCell.colSpan = 2;
  totalCell.innerText = `Total Price = Rs ${total}`;

  totalRow.appendChild(totalCell);
  table.appendChild(totalRow);
};

getSumBtn.addEventListener("click", getSum);

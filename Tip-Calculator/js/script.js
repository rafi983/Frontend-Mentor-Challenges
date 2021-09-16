const calcBillBtn = document.querySelector(".calcBillBtn");
const inputBill = document.getElementById("input-bill");
const tipAmountField = document.getElementById("tip");

function updateTotal() {
  const totalAmount = document.getElementById("grand-total");

  if (inputBill.value == "") {
    alert("please insert a bill");
  } else {
    const inputBillAmount = parseFloat(inputBill.value);

    const tipAmount = parseFloat(tipAmountField.innerText);

    totalAmount.innerText = inputBillAmount + tipAmount;

    inputBill.value = "";
  }
}

function calcTip(tipValue) {
  tipAmountField.innerText = tipValue * parseFloat(inputBill.value);
}

document.getElementById("tip5").addEventListener("click", () => {
  calcTip(0.05);
  updateTotal();
});

const tip10 = document.getElementById("tip10").addEventListener("click", () => {
  calcTip(0.1);
  updateTotal();
});

const tip15 = document.getElementById("tip15").addEventListener("click", () => {
  calcTip(0.15);
  updateTotal();
});

const tip25 = document.getElementById("tip25").addEventListener("click", () => {
  calcTip(0.25);
  updateTotal();
});

const tip50 = document.getElementById("tip50").addEventListener("click", () => {
  calcTip(0.5);
  updateTotal();
});

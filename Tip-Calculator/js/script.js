const calcBillBtn = document.querySelector(".calcBillBtn");
const inputBill = document.getElementById("input-bill");
const tipAmountField = document.getElementById("tip");
const totalAmount = document.getElementById("grand-total");

function updateTotal() {
  if (inputBill.value == "") {
    alert("please insert a bill");
  } else {
    const inputBillAmount = parseFloat(inputBill.value);

    const tipAmount = parseFloat(tipAmountField.innerText);

    totalAmount.innerText = (
      inputBillAmount / numOfPersons() +
      tipAmount
    ).toFixed(2);

    inputBill.value = "";
    document.getElementById("people-numbers").value = "";
  }
}

function calcTip(tipValue) {
  tipAmountField.innerText = (
    tipValue * parseFloat(inputBill.value / numOfPersons())
  ).toFixed(2);
}

function numOfPersons() {
  const personInNumber = document.getElementById("people-numbers").value;

  const finalPersonsInNum = Number(personInNumber);

  return finalPersonsInNum;
}

document.querySelector(".reset-btn").addEventListener("click", () => {
  tipAmountField.innerText = "0.00";
  totalAmount.innerText = "0.00";
});

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

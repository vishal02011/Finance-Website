const USD_TO_INR = 84; 
const amountInput =document.querySelector(".quick-input");
const fromSelect =document.querySelector(".from-cur");
const toSelect =document.querySelector(".to-cur");
const outputBox =document.querySelector(".quick-output");
function convertQuick() {
    const amount = parseFloat(amountInput.value) || 0;
    if (fromSelect.value === "USD" && toSelect.value === "INR") {
        const inr = amount * USD_TO_INR;
        outputBox.textContent = `₹${inr.toFixed(2)} (Converted from USD)`;
    } else {
        outputBox.textContent = "Conversion supported only: USD → INR";
    }
}
amountInput.addEventListener("input", convertQuick);


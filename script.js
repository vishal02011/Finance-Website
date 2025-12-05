const USD_TO_INR = 84; 
const quickCard = document.querySelector(".card-quick");
const amountInput = quickCard.querySelector(".quick-input");
const fromSelect = quickCard.querySelector(".from-cur");
const toSelect = quickCard.querySelector(".to-cur");
const outputBox = quickCard.querySelector(".quick-output");
const previewBtn = quickCard.querySelector(".btn-secondary");
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
previewBtn.addEventListener("click", (e) => {
    e.preventDefault();
    convertQuick();
});

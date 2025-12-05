// USD → INR conversion rate
const USD_TO_INR = 84;  // Change anytime

// Target elements in the .card-quick block
const quickCard = document.querySelector(".card-quick");
const amountInput = quickCard.querySelector(".quick-input");
const fromSelect = quickCard.querySelector(".from-cur");
const toSelect = quickCard.querySelector(".to-cur");
const outputBox = quickCard.querySelector(".quick-output");
const previewBtn = quickCard.querySelector(".btn-secondary");

// Convert function
function convertQuick() {
    const amount = parseFloat(amountInput.value) || 0;

    // Only convert USD → INR (as you asked)
    if (fromSelect.value === "USD" && toSelect.value === "INR") {
        const inr = amount * USD_TO_INR;
        outputBox.textContent = `₹${inr.toFixed(2)} (Converted from USD)`;
    } else {
        outputBox.textContent = "Conversion supported only: USD → INR";
    }
}

// Trigger conversion when typing or clicking
amountInput.addEventListener("input", convertQuick);
previewBtn.addEventListener("click", (e) => {
    e.preventDefault();
    convertQuick();
});

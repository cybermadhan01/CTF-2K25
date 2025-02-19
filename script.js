function buyNow() {
    alert("🛍️ Thank you for shopping with us!");
}

// Hidden Flag Logic
const hiddenFlag = "FLAG{Ecomm_Secret_123}";

// Condition to reveal the flag (if user types "unlock" in the console)
window.addEventListener("keydown", function(event) {
    if (event.key === "u" && event.ctrlKey) {
        console.log("🔐 Secret Key Activated! Enter `revealFlag()` in the console.");
    }
});

function revealFlag() {
    console.log("%c🎉 Congratulations! Here is your hidden flag: " + hiddenFlag, "color: green; font-size: 14px;");
}
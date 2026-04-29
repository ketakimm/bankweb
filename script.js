function loginUser() {
    const user = document.getElementById("username").value.trim();

    if (!user) {
        document.getElementById("loginError").innerText = "Enter username";
        return;
    }

    localStorage.setItem("user", user);
    window.location.href = "dashboard.html";
}

function checkLogin() {
    const user = localStorage.getItem("user");

    if (!user) {
        window.location.href = "index.html";
        return;
    }

    document.getElementById("welcomeUser").innerText = "Hi, " + user;
}

function logoutUser() {
    localStorage.removeItem("user");
    window.location.href = "index.html";
}

function calculateInterest() {
    const p = parseFloat(document.getElementById("principal").value);
    const t = parseInt(document.getElementById("years").value);
    const scheme = parseInt(document.getElementById("scheme").value);

    if (isNaN(p) || isNaN(t)) {
        alert("Enter valid inputs");
        return;
    }

    let rate = scheme === 1 ? 0.05 : scheme === 2 ? 0.07 : 0.08;
    let n = scheme === 1 ? 1 : scheme === 2 ? 4 : 12;

    let amount = p;
    let rows = "";

    for (let i = 1; i <= t; i++) {
        const open = amount;
        amount = open * Math.pow((1 + rate / n), n);

        rows += `
        <tr>
            <td>${i}</td>
            <td>₹${open.toFixed(2)}</td>
            <td>₹${amount.toFixed(2)}</td>
        </tr>`;
    }

    document.getElementById("tableBody").innerHTML = rows;
    document.getElementById("finalAmount").innerText = "Final: ₹" + amount.toFixed(2);
    document.getElementById("interestEarned").innerText = "Interest: ₹" + (amount - p).toFixed(2);

    document.getElementById("results").classList.remove("hidden");
}

function goToThankYou() {
    window.location.href = "thankyou.html";
}

function goToDashboard() {
    window.location.href = "dashboard.html";
}
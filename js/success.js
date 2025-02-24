window.addEventListener("load", () => {});

// let respose = JSON.parse(localStorage.getItem("response"));
let mainContainer = document.getElementById("mainContainer");

let div = document.createElement("div");
div.innerHTML = `<h2>Thank you for ordering with us. Your order has been placed and an invoice has been sent to you on your registered email address.</h2>`;
mainContainer.append(div);

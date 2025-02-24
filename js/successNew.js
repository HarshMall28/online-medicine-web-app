window.addEventListener("load", () => {});

let respose = JSON.parse(localStorage.getItem("response"));
let mainContainer = document.getElementById("mainContainer");

let div = document.createElement("div");
div.innerHTML = `<h2>Your appointment has been scheduled successfully. You will receive an email in your registered email id.</h2>`;
mainContainer.append(div);

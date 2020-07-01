const confirmationId = localStorage.getItem("orderConfirmation");
const confirmation = document.getElementById("camera");
const messageConfirmation = document.createElement("p");
messageConfirmation.innerHTML = "Nous vous remercions pour votre commande n° "+ localStorage.orderConfirmation;
confirmation.appendChild(messageConfirmation);
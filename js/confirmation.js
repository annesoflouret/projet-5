/////////////////////////////////////// Confirmation de la commade /////////////////////////////////
function addConfirmationText(){
    const confirmationId = localStorage.getItem("orderConfirmation");
    const confirmation = document.getElementById("confirmation");
    const messageConfirmation = document.createElement("p");
    messageConfirmation.innerHTML = "Nous vous remercions pour votre commande n° "+ localStorage.orderConfirmation;
    messageConfirmation.setAttribute("class", "confirmation-title pt-5")
    confirmation.appendChild(messageConfirmation);
}

addConfirmationText();



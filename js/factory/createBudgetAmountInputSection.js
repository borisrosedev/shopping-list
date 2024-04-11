import { TODOS_MAIN } from "../constants/dom.js";
import { amountSaveHandler } from "../handlers/amountSaveHandler.js";

export default function(){

    const amountSection = document.createElement("section");
    amountSection.id = "amount-input-container"
    const amountArticle = document.createElement("article");

    

    const amountLabel = document.createElement("label");
    amountLabel.for = "amount-input"
    const amountInput = document.createElement("input");
    amountInput.id = "amount-input";
    amountInput.placeholder = "Entrez votre budget"
    amountInput.type = "number"
    amountArticle.appendChild(amountLabel)
    amountArticle.appendChild(amountInput)
    amountSection.appendChild(amountArticle)
    const amountButton = document.createElement("button")
    amountButton.id = "amount-button"
    amountButton.addEventListener("click",() => amountSaveHandler(amountInput))
    amountButton.textContent = "Valider"
    amountSection.appendChild(amountButton)
    amountSection.id = "amount-input-section"

    TODOS_MAIN.prepend(amountSection)
}
export function createMessage(input, text) {
    let errorMessage = input.parentNode.querySelector(".error-message");

    if (errorMessage) {
        errorMessage.remove();
    }
    errorMessage = document.createElement("p");
    errorMessage.classList.add("error-message");
    errorMessage.textContent = text;
    input.parentNode.appendChild(errorMessage);
}
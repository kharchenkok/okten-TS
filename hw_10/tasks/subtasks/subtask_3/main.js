import { createMessage } from '../../createMessage.js';
const userForm = document.forms.userForm;

 function capitalizeFirstLetter(str) {
    if (str.length === 0) return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
}

 function createUserBlock(inputs) {
    const userBlock = document.createElement('div');
    userBlock.classList.add('user-block');
    for (const input of inputs) {
        console.log('name: ' + input.name,'value: ' + input.value);
        const p = document.createElement('p');
        p.innerText = `${capitalizeFirstLetter(input.name)} : ${input.value}`;
        userBlock.appendChild(p);

    }
    return userBlock;
}

 function validateForm(form) {
    let isValid = true;

    for (const input of form) {
        let errorMessage = input.parentNode.querySelector(".error-message");


        if (errorMessage && input.value.trim()) {
            errorMessage.remove();
        }

        if (!input.value.trim()) {
            createMessage(input, `* Field ${capitalizeFirstLetter(input.name)} is required`);
            isValid = false;
        } else if (input.name === "age") {
            const age = Number(input.value);

            if (age < 0) {
                createMessage(input, `* Enter a valid age`);
                isValid = false;
            } else if (age < 18) {
                createMessage(input, `* Your age must be more than 18`);
                isValid = false;
            }
        }
    }

    return isValid;
}



userForm.addEventListener('submit', function (event) {
    event.preventDefault();

    let userBlock = document.querySelector('.user-block');
    if (userBlock) {
        userBlock.remove();
    }
    const formData = new FormData(this);
    const inputs = [...formData.keys()].map(name => this.elements[name]);

    const validateFormData = validateForm(inputs);
    if (!validateFormData) return;

    this.parentNode.appendChild(createUserBlock(inputs));

    this.reset();
});


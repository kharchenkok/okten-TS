import { createMessage } from '../../createMessage.js';
const userForm = document.forms.userForm;



 function createTable(inputs) {
     let lineQuantity, cellQuantity, cellContent;

     for (const input of inputs) {
         if (input.name === 'line') lineQuantity = input.value;
         else if (input.name === 'cell') cellQuantity = input.value;
         else if (input.name === 'content') cellContent = input.value;
     }

     const table = document.createElement('table');
     table.classList.add('table');
     table.setAttribute('id', 'table');
     for (let i = 0; i < lineQuantity; i++) {
            const tr = document.createElement('tr');
            for (let j = 0; j < cellQuantity; j++) {
                const td = document.createElement('td');
                td.textContent = cellContent;
                tr.appendChild(td);
            }
         table.appendChild(tr);
     }
     console.log('lineQuantity:', lineQuantity, 'cellQuantity:',cellQuantity, 'cellContent:',cellContent);

    return table;
}


 function validateForm(form) {
    let isValid = true;

    for (const input of form) {
        let errorMessage = input.parentNode.querySelector(".error-message");


        if (errorMessage && input.value.trim()) {
            errorMessage.remove();
        }

        if (!input.value.trim()) {
            createMessage(input, `* Поле ${input.name} є обов'язковим`);
            isValid = false;
        } else if (input.type === "number") {
            const numb = Number(input.value);

            if (numb <= 0) {
                createMessage(input, `* Введіть додатнє число`);
                isValid = false;
            }
        }
    }

    return isValid;
}



userForm.addEventListener('submit', function (event) {
    event.preventDefault();
    let table = document.getElementById('table');
    if (table) {
        table.remove();
    }
    const formData = new FormData(this);
    const inputs = [...formData.keys()].map(name => this.elements[name]);

    const validateFormData = validateForm(inputs);
    if (!validateFormData) return;



    this.parentNode.appendChild(createTable(inputs));

    this.reset();
});


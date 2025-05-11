export function getUserData(message) {
    let numb;
    while (true) {
        numb = prompt(`${message}`);

        if (numb === null) {
            alert("Введення скасовано! Будь ласка, введіть число");
            continue;
        }
        if (numb.trim() === "" || isNaN(numb)) {
            alert("Будь ласка, введіть коректне число");
            continue;
        }
        break;
    }

    return Number(numb);

}


const ageInput = document.getElementById('userAge');
const submitButton = document.getElementById('submit');



submitButton.addEventListener('click', function () {
    let info = document.querySelector('.info');

    info && info.remove();

    const ageValue = ageInput.value?.trim();

    console.log('ageValue', ageValue);

    if (!ageValue || isNaN(ageValue) || ageValue <= 0) {
        if(!info){
            info = document.createElement('p');
            info.className = 'info';
        }
        info.innerHTML = '* Please enter a valid age';
        this.after(info);
        return;
    }

    if (ageValue < 18) {
        if(!info){
            info = document.createElement('p');
            info.className = 'info';
        }
        info.innerHTML =`* Your age is ${ageValue}. You are under 18`;
        this.after(info);
    }

})
document.addEventListener('DOMContentLoaded', function () {
    const counter = document.getElementById('counter');
    let counterPriceData = JSON.parse(localStorage.getItem('counterPriceData')) || {price: 100, lastReloadTime: new Date().toISOString()};

    counter.textContent = counterPriceData.price;

    let previousTime = new Date(counterPriceData.lastReloadTime);
    console.log('previousTime', previousTime);
    let currentTime = new Date();
    console.log('currentTime', currentTime);

    let differenceTime = (currentTime - previousTime) / 1000;
    console.log('differenceTime', differenceTime);


    if (differenceTime > 10) {
        counterPriceData.price+=10;
        counterPriceData.lastReloadTime = currentTime.toISOString();
        console.log('price was updated');

    }else {
        console.log('differenceTime < 10 sec');
    }
    counter.textContent = counterPriceData.price;

    localStorage.setItem('counterPriceData', JSON.stringify(counterPriceData));



});



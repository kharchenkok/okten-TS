let textsArr=[
    "OKTEN - школа програмування",
    "2900 студентів",
    "2500+ працевлаштованих студентів",
    "з 2016 року навчаємо програмуванню",
    "2500 працевлаштованих після курсів нашої іт-школи",
    "Відгуки від роботодавців",
    "підтверджена якість"
]

let counter = 0;
document.write('<div class="container">');
while (counter < 20){

    let randomText = textsArr[Math.floor(Math.random() * textsArr.length)];
    document.write(`<h1 style="margin-bottom:20px; color: teal;">
                    ${randomText}<span>(index - ${counter})</span>  
                    </h1>`);
    counter += 1;
}
document.write('</div>');
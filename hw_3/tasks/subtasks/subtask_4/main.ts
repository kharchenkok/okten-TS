
let textsArr4:string[]=[
    "OKTEN - школа програмування",
    "2900 студентів",
    "2500+ працевлаштованих студентів",
    "з 2016 року навчаємо програмуванню",
    "2500 працевлаштованих після курсів нашої іт-школи",
    "Відгуки від роботодавців",
    "підтверджена якість"
]

let counter_4:number = 0;
document.write('<div class="container">');
while (counter_4 < 20){

    let randomText = textsArr4[Math.floor(Math.random() * textsArr4.length)];
    document.write(`<h1 style="margin-bottom:20px; color: teal;">
                    ${randomText}<span>(index - ${counter_4})</span>  
                    </h1>`);
    counter_4 += 1;
}
document.write('</div>');
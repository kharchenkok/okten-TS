let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
document.write('<div class="container">');
document.write('<h2 style="margin-bottom: 20px">Користувачі зі статусом true:</h2>')
document.write('<ul style="padding-left:40px; margin-bottom: 30px; list-style: disc;">')
for (let user of users) {
    if (user.status) {
        document.write(`<li>${user.name} - ${user.age} років - статус ${user.status} </li>`)
    }
}
document.write('</ul>')

document.write('<h2 style="margin-bottom: 20px">Користувачі зі статусом false:</h2>')
document.write('<ul style="padding-left:40px;margin-bottom: 30px; list-style: disc;">')
for (let user of users) {
    if (!user.status) {
        document.write(`<li>${user.name} - ${user.age} років - статус ${user.status} </li>`)
    }
}
document.write('</ul>')


document.write('<h2 style="margin-bottom: 20px">Користувачі, старші за 30 років:</h2>')
document.write('<ul style="padding-left:40px;margin-bottom: 30px; list-style: disc;">')
for (let user of users) {
    if (user.age > 30) {
        document.write(`<li>${user.name} - ${user.age} років - статус ${user.status}</li>`)
    }
}
document.write('</ul>')
document.write('</div>');
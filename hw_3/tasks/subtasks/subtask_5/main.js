let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];


document.write('<div class="container">');

document.write('<ul style="padding-left: 40px; list-style: disc">');

for (let i = 0; i < listOfItems.length; i+=1) {
    document.write(`<li> ${listOfItems[i]}</li>`);
}

document.write('</ul>');
document.write('</div>');
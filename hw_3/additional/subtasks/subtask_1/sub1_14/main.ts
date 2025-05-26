
document.write('<div class="container">');
document.write('<div style="display: flex; flex-wrap: wrap; gap: 20px">')
for (let i = 1; i <= 100; i += 1) {
    if( i%2 === 0){
        console.log(`Крок ${i}`)
        document.write(`<p style="padding: 10px; background-color: lightblue; border-radius: 5px;">
                       Крок ${i}
                    </p>`);
    }

}

document.write('</div>');
document.write('</div>');





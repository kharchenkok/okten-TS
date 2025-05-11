
document.write('<div class="container">');
for (let i = 1; i <= 10; i += 1) {
    console.log(`Крок ${i}`)
    document.write(`<p style="padding: 10px; margin-bottom: 5px; max-width: fit-content; background-color: lightblue; border-radius: 5px;">
                       Крок ${i}
                    </p>`);
}

document.write('</div>');
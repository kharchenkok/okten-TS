let text = 'lorem ipsum dolor sit amet, consectetur adip';

function createText(text){
    document.write(`
        <div class="container">
            <p> ${text}</p>
        </div>
    `);
}

createText(text);

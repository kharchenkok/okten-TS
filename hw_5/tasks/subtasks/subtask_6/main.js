const text ='lorem ipsum dolor sit amet, consectetur adip';

const createList=(text)=>
    document.write(`
    <div class="container">
        <ul style="padding-left: 40px; list-style: disc">
            <li>${text}</li>
            <li>${text}</li>
            <li>${text}</li>
        </ul>   
    </div> 
    `);



createList(text);


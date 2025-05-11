const text ='lorem ipsum dolor sit amet, consectetur adip';

const createList=(text,numbOfItems)=>{
    document.write(`
    <div class="container">
    <ul style="padding-left: 40px; list-style: disc">`);

    for(let i=0; i<numbOfItems; i+=1){
        document.write(`<li>${text}</li>`);
    }

    document.write(`
    </ul>  
    </div>  
    `);
}

createList(text,6)
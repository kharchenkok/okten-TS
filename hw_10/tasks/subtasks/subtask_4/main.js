const counterBlock = document.getElementById('counter');

let counter = localStorage.getItem('counter');


if(counter === null){
    counter = parseInt(counterBlock.textContent)
}else {
    counter = parseInt(counter);
    counter += 1;
}


localStorage.setItem('counter', counter);

counterBlock.textContent = counter;

console.log('counter', counter);
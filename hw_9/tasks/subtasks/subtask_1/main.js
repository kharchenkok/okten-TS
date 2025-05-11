const container = document.getElementsByClassName('container')[0];

const wrapper = document.createElement('div');
wrapper.classList.add('wrap','collapse','alpha','beta');
wrapper.style.padding = '20px 40px';
wrapper.style.margin = '10px';
wrapper.style.color = 'white';
wrapper.style.fontSize = '16px';
wrapper.style.borderRadius = '10px';
wrapper.style.backgroundColor = 'teal';

console.log('wrapper',wrapper);
container.appendChild(wrapper);


console.log('============Solution 1=============');
const clone= wrapper.outerHTML;
console.log('clone = wrapper.outerHTML :',clone);
container.insertAdjacentHTML('beforeend',clone)

console.log('============Solution 2=============');
const deepClone= wrapper.cloneNode(true);
deepClone.classList.add('deepClone');
console.log('deepClone= wrapper.cloneNode(true) :',deepClone);
container.appendChild(deepClone);

const container = document.getElementsByClassName('container')[0];

const textsArr=['Main','Products','About us','Contacts']

const ulList = document.createElement('ul');

for (const item of textsArr) {
    const li = document.createElement('li');
    li.textContent = item;
    ulList.appendChild(li);
}

container.appendChild(ulList);

console.log('ulList', ulList);
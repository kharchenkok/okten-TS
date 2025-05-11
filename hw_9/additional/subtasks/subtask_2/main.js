const container = document.getElementsByClassName('container')[0];

const loremText ='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';


for (let i = 0; i < 3; i++) {
    const randomCount = Math.floor(Math.random() * 5) + 1;
    const randomTextArr=[];
    for (let j = 0; j < randomCount; j++) {
        randomTextArr.push(loremText);
    }
    const randomText = randomTextArr.join(' ');

    const textMarkup = `<p class="text-content">${randomText}</p>`;
    container.insertAdjacentHTML('beforeend', textMarkup);
}

function setIdenticalHeight(elements) {
    let maxHeight = elements[0].clientHeight;
    for (const element of elements) {
        if (element.clientHeight > maxHeight) {
            maxHeight = element.clientHeight;
        }
    }
    for (const element of elements) {
        element.style.height = `${maxHeight}px`;
    }
}

const paragraphs = container.getElementsByClassName('text-content');
setIdenticalHeight(paragraphs);

console.log('container', container);
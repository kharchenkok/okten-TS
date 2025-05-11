const container = document.getElementsByClassName('container')[0];


let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

for (const course of coursesAndDurationArray) {

    const courseMarkup = `
        <div class="item">
            <h1 class="heading">${course.title}</h1>
            <p class='description'>Duration: ${course.monthDuration} month</p>
        </div>
    `;

    container.insertAdjacentHTML('beforeend', courseMarkup);

}

console.log('container', container);
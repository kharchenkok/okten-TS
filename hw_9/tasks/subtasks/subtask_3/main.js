const container = document.getElementsByClassName('container')[0];

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];


const coursesList = document.createElement('ul');
coursesList.classList.add('courses-list');

for (const item of coursesAndDurationArray) {
    let itemMarkup = `<li class="courses-item">${item.title} - ${item.monthDuration} months</li>`;
    coursesList.insertAdjacentHTML('beforeend', itemMarkup);
}



container.appendChild(coursesList);

console.log('coursesList', coursesList);



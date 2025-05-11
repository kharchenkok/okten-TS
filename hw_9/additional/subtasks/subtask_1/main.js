const container = document.getElementsByClassName('container')[0];

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];


const coursesList = document.createElement('ul');
coursesList.classList.add('courses-list');


for (const courseItem of coursesArray) {
    const itemMarkup = `
        <li class="course-item">
           ${courseItem.title && `<h2 class="title">${courseItem.title}</h2>`} 
           ${(courseItem.monthDuration || courseItem.hourDuration) ? `
               <div class="duration">
               <h3 class="duration-title">Duration:</h3>            
               ${courseItem.monthDuration ? `<p>${courseItem.monthDuration} month</p> ` : ''} 
               ${courseItem.hourDuration ? ` <p>${courseItem.hourDuration} hours</p> ` : ''} 
            </div>
           ` : ''}
        
            ${(Array.isArray(courseItem.modules) && courseItem.modules.length > 0) ?
            `   <h3 class="modules-title">Modules:</h3>
                <ul class="course-item-modules">
                    ${courseItem.modules.map(module => `<li>${module}</li>`).join('')}
                </ul>
            ` : ''
            }
         
        </li>
    `;

    coursesList.insertAdjacentHTML('beforeend', itemMarkup);

}
container.appendChild(coursesList);

function setIdenticalHeight(elements) {
    let minHeight = elements[0].offsetHeight;
    for (const element of elements) {
        if (element.offsetHeight < minHeight) {
            minHeight = element.offsetHeight;
        }
    }
    for (const element of elements) {
        element.style.height = `${minHeight}px`;
    }
}

const modulesList = container.getElementsByClassName('course-item-modules');
setIdenticalHeight(modulesList);

console.log('coursesArray',coursesArray);
console.log('coursesList', coursesList);



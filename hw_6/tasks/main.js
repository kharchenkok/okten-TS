// ============Task 1=============
const strings = ['hello world', 'lorem ipsum', 'javascript is cool'];
const stringsUpper=['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'];

console.log('============Task 1=============');

console.log('============Version 1=============');
const stringLength = string => string.length;
console.log('hello world,length:',stringLength('hello world'))
console.log('lorem ipsum,length:',stringLength('lorem ipsum'))
console.log('javascript is cool,length:',stringLength('javascript is cool'))

console.log('============Version 2 (forEach)=============');
strings.forEach(string => console.log(`${string},length=${string.length}`));


// ============Task 2=============
console.log('============Task 2=============');

console.log('============Version 1=============');
const stringToUpperCase = string => string.toUpperCase();
console.log('hello world,to upper case:',stringToUpperCase('hello world'))
console.log('lorem ipsum,to upper case:',stringToUpperCase('lorem ipsum'))
console.log('javascript is cool,to upper case:',stringToUpperCase('javascript is cool'))

console.log('============Version 2 (forEach)=============');
strings.forEach(string => console.log(`${string},to upper case:${string.toUpperCase()}`));



// ============Task 3=============
console.log('============Task 3=============');

console.log('============Version 1=============');
const stringToLowerCase = string => string.toLowerCase();
console.log('HELLO WORLD,to lower case:',stringToLowerCase('HELLO WORLD'))
console.log('LOREM IPSUM,to lower case:',stringToLowerCase('LOREM IPSUM'))
console.log('JAVASCRIPT IS COOL,to lower case:',stringToLowerCase('JAVASCRIPT IS COOL'))

console.log('============Version 2 (forEach)=============');
stringsUpper.forEach(string => console.log(`${string},to lower case:${string.toLowerCase()}`));



// ============Task 4=============
let str = ' dirty string   ';
const clearString = string => string.trim();

console.log('============Task 4=============');
console.log(`${str}, clear string: ${clearString(str)}`);

// ============Task 5=============
let str5 = 'Ревуть воли як ясла повні';
const stringToArray=str=>str.split(' ');

console.log('============Task 5=============');
console.log(`${str5}, split by space:`,stringToArray(str5));

// ============Task 6=============
const numbersArray = [10,8,-7,55,987,-1011,0,1050,0];
const numbToString = numbersArray.map(numb=>numb.toString());

console.log('============Task 6=============');
console.log(numbersArray,'as strings:',numbToString);

// ============Task 7=============
let nums = [11,21,3];
const sortNums=(array,direction)=>[...array].sort((a,b)=>direction ==='ascending' ? a-b : b-a);

console.log('============Task 7=============');
console.log(nums,'ascending:',sortNums(nums,'ascending'));
console.log(nums,'descending:',sortNums(nums,'descending'));

// ============Task 8=============
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

console.log('============Task 8=============');

const coursesSortedByDuration = [...coursesAndDurationArray].sort((a,b) => b.monthDuration - a.monthDuration);
console.log('Courses sorted by duration:',coursesSortedByDuration);

const coursesFiveMonthDuration = coursesAndDurationArray.filter(courses=>courses.monthDuration>5);
console.log('Courses with duration more than 5 months:',coursesFiveMonthDuration);

const coursesWithId = coursesAndDurationArray.map((course,index)=>({id:index + 1,...course}));
console.log('Courses with id:',coursesWithId);



// ============Task 9=============
const cardsSuit=['spade', 'diamond','heart', 'club'];
const cardsValue=['6', '7', '8', '9', '10', 'ace', 'jack', 'queen', 'king'];

const deckOfCards = cardsSuit.reduce((acc,suit)=>{
    const card = cardsValue.map(value=>({
        suit,
        value,
        color: suit === 'diamond' || suit === 'heart' ? 'red' : 'black'
    }));
    return [...acc,...card]
},[]);


console.log('============Task 9=============');
console.log('Deck of cards:',deckOfCards);
const spadeAceCard = deckOfCards.find(card=>card.suit === 'spade' && card.value === 'ace');
console.log('Spade ace:',spadeAceCard);
const cardsValueSix=deckOfCards.filter(card=>card.value === '6');
console.log('Cards with value 6:',cardsValueSix);
const redCards = deckOfCards.filter(card=>card.color === 'red');
console.log('Red cards:',redCards);
const diamondCards=deckOfCards.filter(card=>card.suit === 'diamond');
console.log('Diamond cards:',diamondCards);

function filtredCards(cardsDeck, filterSuit, valueFrom='6'){
    const cardsSuitFiltredArr = cardsDeck.filter(card=>card.suit === filterSuit);
    const startFromIndex = cardsSuitFiltredArr.findIndex(card=>card.value === valueFrom);
    return  cardsSuitFiltredArr.filter((card,index,arr)=>arr.indexOf(card)>=startFromIndex);
}

console.log('All club cards from 9',filtredCards(deckOfCards,'club','9'));


// ============Task 10=============

// const divideCardsBySuits = deckOfCards.reduce((acc,card)=>{
//     if(!acc[card.suit]){
//         acc[card.suit]=[];
//     }
//     acc[card.suit].push(card);
//     return acc;
// },{})
const divideCardsBySuits = deckOfCards.reduce((acc,card)=>{
  switch (card.suit) {
      case 'spade':
        acc.spades.push(card);
        break;
      case 'diamond':
        acc.diamonds.push(card);
        break;
      case 'heart':
        acc.hearts.push(card);
        break;
      case 'club':
        acc.clubs.push(card);
        break;
      default:
        console.error(`Unknown suit: ${card.suit}`);
        break;
  }
    return acc;
},{
    spades:[],
    diamonds:[],
    hearts:[],
    clubs:[]
})


console.log('============Task 10=============');
console.log('Cards by suits:',divideCardsBySuits);

// ============Task 11=============

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
function filterCoursesByModule(courses,module){
    return courses.filter(course=>course.modules.includes(module));
}
console.log('============Task 11=============');

console.log('All courses', coursesArray);
console.log('Courses with module "sass":',filterCoursesByModule(coursesArray,'sass'));
console.log('Courses with module "docker":',filterCoursesByModule(coursesArray,'docker'));






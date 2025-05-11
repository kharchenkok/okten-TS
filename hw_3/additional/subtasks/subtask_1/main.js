// ==1==

const numbArr=[100,50,-1,0,6.99];
const strArr=['Hello','World','!','123','Okten'];
const mixArr=[true,false,100,'Okten',50];
console.log('============Task 1==============')
console.log('numbArr',numbArr);
for(let numb of numbArr){
    console.log(numb);
}
console.log('strArr',strArr);
for(let str of strArr){
    console.log(str);
}
console.log('mixArr',mixArr);
for (let mix of mixArr){
    console.log(mix);
}

// ==2==
const userArr=[];
for(let i=0;i<10;i+=1){
    userArr[i] = i + 1;
}

console.log('============Task 2==============');
console.log('userArr',userArr)


// ==3==
const taskArr=[2,17,13,6,22,31,45,66,100,-18];
console.log('============Task 3==============');
console.log('перебрати циклом while');
let counter =0;
while(counter<taskArr.length){
    console.log(taskArr[counter]);
    counter+=1;
}
console.log('перебрати циклом for');
for(let elem of taskArr){
    console.log(elem);
}
console.log('перебрати циклом while та вивести  числа тільки з непарним індексом');
counter = 1;
while(counter<taskArr.length){
    console.log(taskArr[counter]);
    counter+=2;
}
console.log('перебрати циклом for та вивести  числа тільки з непарним індексом');
for (let i = 1; i < taskArr.length; i+=2) {
    console.log(taskArr[i])
}
console.log('перебрати циклом while та вивести  числа тільки парні  значення');
counter = 0;
while(counter<taskArr.length){
    if(taskArr[counter] % 2 === 0){
        console.log(taskArr[counter]);
    }
    counter+=1;
}
console.log('перебрати циклом for та вивести  числа тільки парні  значення');

for(let elem of taskArr){
    if(elem % 2 === 0){
        console.log(elem);
    }
}
console.log('замінити кожне число кратне 3 на слово "okten"');

for(let elem of taskArr){
    if(elem % 3 === 0){
        elem = 'okten';
    }
    console.log(elem);
}
console.log('вивести масив в зворотньому порядку (цикл for)');
for (let i = taskArr.length - 1; i >= 0 ; i-=1) {
    console.log(taskArr[i]);
}
console.log('вивести масив в зворотньому порядку (цикл while)');
counter = taskArr.length-1;
while(counter >= 0){
    console.log(taskArr[counter]);
    counter -= 1;
}
console.log('вивести в зворотньому порядку числа тільки з непарним індексом (цикл while)');
counter = taskArr.length - 1;
while(counter >= 0){
    if(counter % 2 !== 0){
        console.log(taskArr[counter]);
    }

    counter -=1;
}
console.log('вивести в зворотньому порядку числа тільки з непарним індексом (цикл for)');
for(let i = taskArr.length - 1; i >= 0 ; i-=1){
    if(i % 2!== 0){
        console.log(taskArr[i]);
    }
}
console.log('вивести в зворотньому порядку числа тільки парні значення (цикл for)');
for(let i = taskArr.length - 1; i >= 0 ; i-=1){
    if(taskArr[i] % 2 === 0){
        console.log(taskArr[i]);
    }
}
console.log('вивести в зворотньому порядку числа тільки парні значення (цикл while)');
counter = taskArr.length - 1;
while(counter >= 0){
    if(taskArr[counter] % 2 === 0){
        console.log(taskArr[counter]);
    }
    counter -= 1;
}
console.log('вивести в зворотньому порядку та замінити кожне число кратне 3 на слово "okten" (цикл while)');
counter = taskArr.length - 1;
while(counter >= 0){
    if(taskArr[counter] % 3 === 0){
        taskArr[counter] = 'okten';
    }
    console.log(taskArr[counter]);
    counter -= 1;
}
console.log('вивести в зворотньому порядку та замінити кожне число кратне 3 на слово "okten" (цикл for)');
for(let i = taskArr.length - 1; i >= 0 ; i-=1){
    if(taskArr[i] % 3 === 0){
        taskArr[i] = 'okten';
    }
        console.log(taskArr[i]);
}

// ==4==
const numbArr4 = [12,221,34,-34,1,5,43,89,0,-11]

console.log('============Task 4==============');
console.log('number arr:',numbArr4);
for (let numb of numbArr4) {
    console.log(numb)
}

// ==5==
const stringArr5 = ['Hello','World','!','123','Okten','Apple','Banana','Cherry','Orange','Grape']

console.log('============Task 5==============');
console.log('string arr:',stringArr5);
for (let str of stringArr5) {
    console.log(str)
}

// ==6==

const mixArr6 = [false,['Hello','World'],true,123,'Okten',{name:'Apple'},{name:'Banana'},0,'Orange','Grape']

console.log('============Task 6==============');
console.log('mix arr:',mixArr6);
for (let elem of mixArr6) {
    console.log(elem)
}

// ==7==
const mixArr7 = [false,true,123,'Okten','Apple','Banana',0,'Orange','Grape',true]

console.log('============Task 7==============');
console.log('mix arr:',mixArr7);
for (let elem of mixArr7) {
    if(typeof(elem) === 'boolean'){
        console.log(`${elem} - ${typeof(elem)}`);
    }

}
// ==8==
const mixArr8 = [42, 'Apple', true, 'Banana', 17, false, 'Grape', 3.14, true, 'Orange']

console.log('============Task 8==============');
console.log('mix arr:',mixArr8);
for (let elem of mixArr8) {
    if(typeof(elem) === 'number'){
        console.log(`${elem} - ${typeof(elem)}`);
    }
}

// ==9==
const mixArr9 = [-56, 'Okten', 'Banana', 3.14, false,true, 'Grape', 0, true, 'Orange']

console.log('============Task 9==============');
console.log('mix arr:',mixArr9);
for (let elem of mixArr9) {
    if(typeof(elem) === 'string'){
        console.log(`${elem} - ${typeof(elem)}`);
    }
}

// ==10==
const mixArr10 =[];
mixArr10[0]=true;
mixArr10[1]='Hello';
mixArr10[2]=123;
mixArr10[3]=false;
mixArr10[4]=[45,false];
mixArr10[5]={name:'Alex',age:25};
mixArr10[6]={name:'Bob',age:30};
mixArr10[7]='Okten';
mixArr10[8]=null;
mixArr10[9]={name:'Charlie',age:35};

console.log('============Task 10==============');
console.log('mix arr:',mixArr10);
for (let elem of mixArr10) {
    console.log(elem)
}

// ==16==
const booksArr=[
    {title: 'Title', pageCount: 300, genres: ['Fantasy','Adventure','Mystery'], authors:['Author 1']},
    {title: 'Title Title', pageCount: 250, genres: ['Science','Biography'], authors:['Author 1','Author 2','Author 2']},
    {title: 'TitleTitle 3', pageCount: 400, genres: ['Fantasy'], authors:['Author 1','Author 2']},
    {title: 'Title 4', pageCount: 150, genres: ['Science'], authors:['Author 1','Author 2']},
]
let largestBook=booksArr[0];
let mostGenres=booksArr[0];
let longestTitle=booksArr[0];

console.log('============Task 16==============');
console.log('books:',booksArr);
for(let book of booksArr){
    if(book.pageCount > largestBook.pageCount){
        largestBook = book;
    }
    if(book.genres.length > mostGenres.genres.length){
        mostGenres = book;
    }
    if(book.title.length > longestTitle.title.length){
        longestTitle = book;
    }
    if(book.authors.length === 2){
        console.log('book with two authors:', book);
    }
    if(book.authors.length === 1){
        console.log('book with one author:', book);
    }
}

console.log('largest book:',largestBook);
console.log('book with most genres:', mostGenres);
console.log('book with the longest title:', longestTitle);


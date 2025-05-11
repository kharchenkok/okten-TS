// ==1==
let newEvenNumberArr=[];
for(let i = 2; newEvenNumberArr.length<50; i+=2){
    newEvenNumberArr[newEvenNumberArr.length] = i;
    // newEvenNumberArr=[...newEvenNumberArr,i]
}
console.log('============Task 1-a==============');
console.log('50 even numbers arr:', newEvenNumberArr)

let newOddNumberArr=[];
for(let i = 1; newOddNumberArr.length<50; i+=2){
    newOddNumberArr[newOddNumberArr.length] = i;
    // newOddNumberArr=[...newOddNumberArr,i]
}
console.log('============Task 1-b==============');
console.log('50 odd numbers arr:', newOddNumberArr)

let randomNumberArr=[];
for(let i = 0; i<20; i+=1){
    randomNumberArr[randomNumberArr.length] = Math.floor(Math.random()*100);
    // randomNumberArr=[...randomNumberArr, Math.floor(Math.random()*100)]
}
console.log('============Task 1-c==============');
console.log('20 random numbers arr:', randomNumberArr)

let randomRangeNumberArr=[];
for(let i = 0; i<20; i+=1){
    randomRangeNumberArr[randomRangeNumberArr.length] = Math.floor(Math.random()*(732-8+1))+8;
    // randomRangeNumberArr=[...randomRangeNumberArr, Math.floor(Math.random()*(732-8+1))+8]
}
console.log('============Task 1-d==============');
console.log('20 random numbers in range [8, 732] arr:', randomRangeNumberArr)

console.log('============Task 2==============');
console.log('arr:',randomRangeNumberArr);
for(let i = 2; i<randomRangeNumberArr.length; i+=3){
    console.log(randomRangeNumberArr[i])
}
console.log('============Task 3==============');
console.log('arr:',randomRangeNumberArr);
for(let i = 2; i<randomRangeNumberArr.length; i+=3){
    if(randomRangeNumberArr[i]%2===0){
        console.log(randomRangeNumberArr[i])

    }
}

console.log('============Task 4==============');
console.log('arr:',randomRangeNumberArr)
let newEvenThirdArr=[];
for(let i = 2; i<randomRangeNumberArr.length; i+=3){
    if(randomRangeNumberArr[i]%2===0){
        console.log(randomRangeNumberArr[i]);
        newEvenThirdArr[newEvenThirdArr.length]=randomRangeNumberArr[i]
        // newEvenThirdArr=[...newEvenThirdArr, randomRangeNumberArr[i]]
    }
}
console.log('new EvenThird Arr', newEvenThirdArr)

console.log('============Task 5==============');
console.log('arr:',randomRangeNumberArr)
for (let i = 0; i<randomRangeNumberArr.length; i+=1){
    if(randomRangeNumberArr[i + 1]%2 === 0){
        console.log(randomRangeNumberArr[i])
    }
}

console.log('============Task 6==============');

let pricesArr = [100,250,50,168,120,345,188];
let totalAmount = 0;
for(let price of pricesArr){
    totalAmount+=price
}
let averageAmount = Math.round(totalAmount / pricesArr.length * 100) / 100
console.log('average amount:', averageAmount)

console.log('============Task 7==============');

let randomNumberArr7=[];
for(let i = 0; i<20; i+=1){
    randomNumberArr7[randomNumberArr7.length] = Math.floor(Math.random()*100);
    // randomNumberArr7=[...randomNumberArr7, Math.floor(Math.random()*100)]
}
console.log('array of random numbers:', randomNumberArr7)

let multipliedArr=[]
for(let i = 0; i<randomNumberArr7.length; i+=1){
    multipliedArr[multipliedArr.length]=randomNumberArr7[i]*5;
    // multipliedArr=[...multipliedArr, randomNumberArr7[i]*5]
}
console.log('multiplied * 5 array:', multipliedArr);

console.log('============Task 8==============');
const mixArr = [false,['Hello','World'],true,123,'Okten',{name:'Apple'},{name:'Banana'},0,'Orange','Grape',3.14]
const newNumberArr=[];
for(const elem of mixArr){
    if(typeof(elem) === 'number'){
        newNumberArr[newNumberArr.length]=elem;
        // newNumberArr=[...newNumberArr, elem]
    }
}

console.log('mix array:', mixArr);
console.log('new number array:', newNumberArr);

console.log('============Task 9==============');
let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];

let usersWithCities = [];
for(let user of usersWithId){
    for(let city of citiesWithId){
        if(user.id === city.user_id){
            usersWithCities[usersWithCities.length] ={
                id: user.id,
                name:user.name,
                age: user.age,
                status: user.status,
                address: {
                    user_id: city.user_id,
                    country: city.country,
                    city: city.city
                }
            }
        }
    }
}
console.log('usersWithCities',usersWithCities);

console.log('============Task 10==============');
let randomNumbersArr10=[];
for(let i = 0; i<10; i+=1){
    randomNumbersArr10[randomNumbersArr10.length] = Math.floor(Math.random()*100);
}
console.log('array of random numbers:', randomNumbersArr10)
for (const numb of randomNumbersArr10) {
    if(numb%2 === 0){
        console.log(numb)
    }
}

console.log('============Task 11==============');
console.log('array of random numbers:', randomNumbersArr10)
let newRandomNumberArr=[];
for(let numb of randomNumbersArr10){
    newRandomNumberArr[newRandomNumberArr.length]=numb;
}
console.log('newRandomNumberArr',newRandomNumberArr);

console.log('============Task 12==============');
let lettersArr = ['a', 'b', 'c'];
let word='';
for (let i = 0; i < lettersArr.length; i+=1) {
    word+=lettersArr[i]
}
console.log('word:', word);

console.log('============Task 13==============');
word="";
let counter=0;
while (counter<lettersArr.length){
    word+=lettersArr[counter];
    counter+=1;
}
console.log('word:', word);

console.log('============Task 14==============');
word='';
for(let letter of lettersArr){
    word+=letter;
}
console.log('word:', word);



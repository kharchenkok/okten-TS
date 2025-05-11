import {getUserData} from './helpers.js';
const rectangleBtn = document.getElementById('rectangleData');
const circleBtn = document.getElementById('circleData');
const cylinderBtn = document.getElementById('cylinderData');


// ============Task 1=============
rectangleBtn.addEventListener('click',function (){
    let a = getUserData('Введіть значення першої сторони прямокутника (число)');
    let b = getUserData('Введіть значення другої сторони прямокутника (число)');
    console.log('============Task 1=============');
    console.log(`a=${a},b=${b} Площа:`,calculateRectangleArea(a,b));
});

function calculateRectangleArea(a,b){
    return a * b;
}

// ============Task 2=============
circleBtn.addEventListener('click',function (){
    let r = getUserData('Введіть значення радіуса кола (число)');
    console.log('============Task 2=============');
    console.log(`r=${r} Площа:`,calculateCircleArea(r));
});

function calculateCircleArea(r){
    return Math.PI * Math.pow(r,2);
}


// ============Task 3=============
cylinderBtn.addEventListener('click',function (){
    let r = getUserData('Введіть значення радіуса циліндра (число)');
    let h = getUserData('Введіть значення висоти циліндра (число)');
    console.log('============Task 3=============');
    console.log(`r=${r},h=${h} Площа:`,calculateCylinderArea(r,h));
});

function calculateCylinderArea(r, h) {
    return 2 * Math.PI * Math.pow(r, 2) + 2 * Math.PI * r * h;
}

// ============Task 4=============

function arrayElements(arr) {
    for (const elem of arr) {
        console.log(elem)
    }
}
console.log('============Task 4=============');
arrayElements([1, 2, 3, "Okten", true, {name:'Pumpkin',age:3}])


// ============Task 10=============

let numbersData =[1,2,3,4,5,6,7,-2,0,-1,100,-6];

function findMinValue(numbersArr){
    let minValue = numbersArr[0];
    for (let i = 1; i < numbersArr.length ; i+=1) {
        if (numbersArr[i] < minValue) {
            minValue = numbersArr[i];
        }

    }
    return minValue;
}

console.log('============Task 10=============');
console.log('numberArray:',numbersData);
console.log('Minimal value:',findMinValue(numbersData));

// ============Task 11=============
function getSum(numbersArr){
    let sum = 0;
    for (const number of numbersArr) {
        sum+=number
    }
    return sum;
}

console.log('============Task 11=============');
console.log('numberArray:',numbersData);
console.log('Total sum:',getSum(numbersData));

// ============Task 12=============
function swap(arr,index1,index2){
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
    return arr;
}

console.log('============Task 12=============');
console.log('Before swap:',numbersData);
console.log('After swap (index1 - 2,index2 - 4):',swap(numbersData, 2, 4));

// ============Task 13=============

function exchange(sumUAH,currencyValues,exchangeCurrency){
 for (let elem of currencyValues){
     if(elem.currency === exchangeCurrency){
         return sumUAH / elem.value;
     }
 }

}

console.log('============Task 13=============');
console.log('Exchange rate for UAH:', exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD'));
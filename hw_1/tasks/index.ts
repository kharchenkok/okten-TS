// Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log


let hello:string = 'hello';
let owu:string = 'owu';
let com:string = 'com';
let ua:string = 'ua';
let num1:number = 1;
let num2:number = 10;
let num3:number = -999;
let num4:number = 123;
let decimal:number = 3.14;
let float:number = 2.7;
let num5:number = 16;
let bool1:boolean = true;
let bool2:boolean = false;
console.log(hello);
console.log(owu);
console.log(com);
console.log(ua);
console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);
console.log(decimal);
console.log(float);
console.log(num5);
console.log(bool1);
console.log(bool2);

// Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)

let firstName:string = "Катерина";
let middleName:string = "Валентинівна";
let lastName:string = "Харченко";

let person:string = lastName + " " + firstName + " " + middleName;
let personTemplateLiterals:string = `${lastName} ${firstName} ${middleName}`;
console.log(person);

console.log("template literals:",personTemplateLiterals);


// За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;

let a:number = 100;
let b:string = '100';
let c:boolean = true;

console.log('typeof a:',typeof a);
console.log('typeof b:', typeof b);
console.log('typeof c:', typeof c);




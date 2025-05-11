// ============Task 1=============

function deepCopy(obj) {
    let functions = [];
    let undefinedValues = [];

    function replacer(key, value) {
        if (typeof value === "undefined") {
            undefinedValues.push({ key, value });
            return "__undefined"
        }
        if (typeof value === "number" && isNaN(value)) {
                return  "__NaN"}
        if (typeof value === "function") {
            functions.push({ key, value});
            // functions.push({ key, value: value.toString() });
            return "__function";
        }
        return value;
    }

    function reviver(key, value) {
        if (value === "__undefined") {
            let undefinedData = undefinedValues.find(item=>item.key === key)
            return undefinedData.value
        }
        if (value === "__NaN") return NaN;
        if (value === "__function") {
            let functionData = functions.find(item=> item.key === key);
            return functionData.value;
            // return new Function('return ' + functionData.value)();
        }
        return value;
    }

    let stringifiedObj = JSON.stringify(obj, replacer);

    let parsedObj = JSON.parse(stringifiedObj, reviver);
    undefinedValues.forEach(item => {
        if (!(item.key in parsedObj)) {
            parsedObj[item.key] = item.value;
        }
    });

    return parsedObj;
}

const user = {
    name: 'vasya',
    skills: ['html', 'js'],
    age: 32,
    id: 23,
    friends: NaN,
    status: null,
    isActive: true,
    occupation: undefined,
    address: undefined,
    greeting: function () {
        return console.log(`Hello, ${this.name}`);
    },

    isOnline: function () {
        let isUserOnline = this.isActive ? console.log(`${this.name} is online`) : console.log(`${this.name} is offline`);
        return isUserOnline ;

    }
};

const copyUser = deepCopy(user);


console.log('============Task 1=============');

console.log('user===copyUser',user===copyUser);
console.log('user.skills===copyUser.skills',user.skills===copyUser.skills);


console.log('original user:', user);
console.log('copied user:', copyUser);

console.log("Original user:");
user.greeting();
user.isOnline();

console.log("Copied user:");
copyUser.greeting();
copyUser.isOnline();
copyUser.isActive = false
console.log('copyUser.isActive = false');
copyUser.isOnline();


// ============Task 2=============

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

const coursesAndDurationArrayWithID = coursesAndDurationArray.map((course,index)=>({id:index +1,...course}))

console.log('============Task 2=============');
console.log('coursesAndDurationArray:', coursesAndDurationArray);
console.log('coursesAndDurationArrayWithID:', coursesAndDurationArrayWithID);





// ============Task 1=============
function User(id,name,surname,email,phone){
    this.id=id;
    this.name=name;
    this.surname=surname;
    this.email=email;
    this.phone=phone;
}

const users = [
    new User(10,'John','Doe','john.doe@example.com','+1234567890'),
    new User(2,'Jane','Smith','jane.smith@example.com','+9876543210'),
    new User(7,'Alice','Johnson','alice.johnson@example.com','+0987654321'),
    new User(6,'Bob','Brown','bob.brown@example.com','+3456789012'),
    new User(5,'Charlie','Davis','charlie.davis@example.com','+2345678901'),
    new User(4,'David','Wilson','david.wilson@example.com','+1234567890'),
    new User(3,'Emily','Thompson','emily.thompson@example.com','+0987654321'),
    new User(8,'Frank','Austin','frank.austin@example.com','+3456789012'),
    new User(9,'Grace','Wilson','grace.wilson@example.com','+2345678901'),
    new User(1,'Henry','Thompson','henry.thompson@example.com','+1234567890')
]

console.log('============Task 1=============');
console.log('users',users)

// ============Task 2=============
const filtredByEvenIdUsers = users.filter(user => user.id%2 === 0);
console.log('============Task 2=============');
console.log('filtredByEvenIdUsers',filtredByEvenIdUsers)


// ============Task 3=============
const sortedByAscendingIDUsers = [...users].sort((user1,user2)=>user1.id - user2.id);
console.log('============Task 3=============');
console.log('sortedByAscendingIDUsers',sortedByAscendingIDUsers)


// ============Task 4=============
function Client(id, name, surname , email, phone, order){
    User.call(this,id, name, surname , email, phone);
    this.order=order;
 }
const clients=[
    new Client(1,'John','Doe','john.doe@example.com','+1234567890',['Apple','Banana','Cherry','Grape','Orange','Pineapple','Strawberry','Lemon','Mango']),
    new Client(2,'Jane','Smith','jane.smith@example.com','+9876543210',['Apple','Banana','Cherry','Grape','Orange']),
    new Client(3,'Alice','Johnson','alice.johnson@example.com','+0987654321',['Apple','Banana','Cherry','Grape','Orange','Pineapple','Strawberry','Lemon']),
    new Client(4,'Bob','Brown','bob.brown@example.com','+3456789012',['Apple','Banana','Cherry','Orange']),
    new Client(5,'Charlie','Davis','charlie.davis@example.com','+2345678901',['Apple','Banana','Cherry','Grape']),
    new Client(6,'David','Wilson','david.wilson@example.com','+1234567890',['Orange','Grape']),
    new Client(7,'Emily','Thompson','emily.thompson@example.com','+0987654321',['Apple','Banana','Cherry','Grape','Orange','Pineapple']),
    new Client(8,'Frank','Austin','frank.austin@example.com','+3456789012',['Apple','Banana','Cherry','Grape','Orange','Pineapple','Strawberry']),
    new Client(9,'Grace','Wilson','grace.wilson@example.com','+2345678901',['Apple','Banana','Cherry']),
    new Client(10,'Henry','Thompson','henry.thompson@example.com','+1234567890',['Apple','Banana'])

]
console.log('============Task 4=============');
console.log('clients',clients)


// ============Task 5=============
const sortedByAscendingOrderClients=clients.toSorted((client1,client2)=>client1.order.length - client2.order.length)

console.log('============Task 5=============');
console.log('sortedByAscendingOrderClients',sortedByAscendingOrderClients)

// ============Task 6=============
function Car(model, brand, year, maxSpeed, engineVolume){
    this.model=model;
    this.brand=brand;
    this.year=year;
    this.maxSpeed=maxSpeed;
    this.engineVolume=engineVolume.toFixed(1);

    this.drive = function (){
        console.log(`їдемо зі швидкістю ${this.maxSpeed} км на годину`)
    }

    this.info = function () {
        console.log('Інформація про автомобіль:')
        for (const key in this) {
            typeof this[key] !== 'function' && console.log(`${key} -`, this[key])
        }
    }

    this.increaseMaxSpeed=function (newSpeed){
        newSpeed > 0 && (this.maxSpeed += newSpeed) ;
        console.log(`Нова швидкість: ${this.maxSpeed}`)
    }

    this.changeYear=function (newValue){
        newValue > 1815 && (this.year=newValue);
        console.log(`Рік випуску: ${this.year}`)
    }

    this.addDriver = function (driver){
        this.driver=driver;
        console.log('Додано водія:', this.driver)
    }

}

console.log('============Task 6=============');
const car = new Car('XC60', 'Volvo', 2021, 250, 2.0);
console.log('car: ', car);
car.drive();
car.increaseMaxSpeed(50);
car.changeYear(2022);
car.addDriver({name:'John Doe',age:'30'});
car.info();
// ============Task 7=============
class CarConstructor {
    constructor(model, brand, year, maxSpeed, engineVolume){
        this.model=model;
        this.brand=brand;
        this.year=year;
        this.maxSpeed=maxSpeed;
        this.engineVolume=engineVolume.toFixed(1);


    }
    drive(){
        console.log(`їдемо зі швидкістю ${this.maxSpeed} км на годину`)
    }

    info () {
        console.log('Інформація про автомобіль:')
        for (const key in this) {
            typeof this[key]!== 'function' && console.log(`${key} -`, this[key])
        }
    }

    increaseMaxSpeed(newSpeed){
        newSpeed > 0 && (this.maxSpeed += newSpeed) ;
        console.log(`Нова швидкість: ${this.maxSpeed}`)
    }
    changeYear(newValue){
        newValue > 1815 && (this.year=newValue);
        console.log(`Рік випуску: ${this.year}`)
    }

    addDriver(driver){
        this.driver=driver;
        console.log('Додано водія:', this.driver)
    }
}

console.log('============Task 7=============');
const myCar = new CarConstructor('XC60', 'Volvo', 2021, 250, 2.0);
console.log('car constructor',myCar)
myCar.drive();
myCar.increaseMaxSpeed(20);
myCar.changeYear(2024);
myCar.addDriver({name:'Alice Jonson',age:'30'});
myCar.info();


// ============Task 8=============
 class Hero {
     constructor(name,age){
         this.name=name;
         this.age=age;
     }
}

class Cinderella extends Hero {
     constructor(name, age, footSize){
         super(name, age);
         this.footSize=footSize;
     }
}
class Prince extends Hero {
     constructor(name, age, foundSlipper){
         super(name, age);
         this.foundSlipper=foundSlipper;
     }
}


const cinderellas = [];

for (let i = 1, footSize = 35; i <= 10 && footSize < 40; i+=1, footSize += 0.5) {
    cinderellas.push(new Cinderella(`Cinderella${i}`, 18 + i, footSize));
}

const prince=new Prince('Prince1',30,36.5)


console.log('============Task 8=============');
console.log("Cinderellas:",cinderellas);
console.log('Prince:',prince);

console.log('===========for============')
for(const cinderella of cinderellas){
   if( cinderella.footSize === prince.foundSlipper){
       console.log(`${cinderella.name} has the same foot size as size of the slipper the Prince found`)
   }
}

const theVeryCinderella = cinderellas.find(cinderella=>cinderella.footSize === prince.foundSlipper);
console.log('===========find============')
console.log('theVeryCinderella:',theVeryCinderella)

// ============Task 9=============

Array.prototype.myForEach = function(callback) {
    for (let i = 0; i < this.length; i+=1) {
        callback(this[i], i, this);
    }
};

Array.prototype.myFilter=function (callback) {
    const result = [];
    for (let i = 0; i < this.length; i+=1) {
        if(callback(this[i], i, this)) {
            result.push(this[i]);
        }
    }
    return result;
}

const numbers = [1,2,5,15,20,30,3,4,40,50,60];

console.log('============Task 9=============');

console.log('array:', numbers);

console.log('===========myForEach============')


numbers.myForEach((number, index) => index%2 === 0 && console.log('number:',number,'index:',index) );


console.log('===========myFilter============')
const filteredArray = numbers.myFilter(numb => numb <= 10);
console.log('filteredArray:',filteredArray);
const filteredArrayByEvenIndex = numbers.myFilter((numb,index)=> index%2 === 0);
console.log('filteredArrayByEvenIndex:',filteredArrayByEvenIndex);









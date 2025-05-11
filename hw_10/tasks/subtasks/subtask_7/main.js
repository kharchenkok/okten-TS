function addToLocalStorage(arrayName, objToAdd) {

    let arr = JSON.parse(localStorage.getItem(arrayName)) || [];

    if (typeof objToAdd !== 'object' || objToAdd === null) {
        throw new Error('Object to add is not an object');
    }

    arr.push(objToAdd);

    localStorage.setItem(arrayName, JSON.stringify(arr));
}

console.log('========example 1========');
const user = { id: 1, name: "John Doe", age: 30 };
console.log('add user to localStorage:', user);
addToLocalStorage("users", user);

console.log('========example 2========');
const product1 = { id: 1, name: "Laptop", price: 1200 };
const product2 = { id: 2, name: "Mobile phone", price: 900 };
console.log('add product to localStorage:', product1, product2);
addToLocalStorage("products", product1);
addToLocalStorage("products", product2);


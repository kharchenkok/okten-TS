const userData=[
    { id:1, name: 'John Doe', age: 30 },
    { id:2, name: 'Jane Smith', age: 25},
    { id:3, name: 'Alice Johnson', age: 28 },
    { id:4, name: 'Bob Brown', age: 35 },
    { id:5, name: 'Charlie Davis', age: 32 },
    { id:6, name: 'David Wilson', age: 27 },
    { id:7, name: 'Emily Thompson', age: 33 },
    { id:8, name: 'Frank Austin', age: 31 },
    { id:9, name: 'Grace Wilson', age: 26 },
    { id:10, name: 'Henry Thompson', age: 34 }

]

const createUsersList=(arr)=>{
    document.write('<div class="container"><ul style="display: grid; gap: 20px; grid-template-columns: repeat(3,1fr)">');
    for (let user of arr) {
        document.write(`
            <li style="padding:20px;display: flex; flex-direction: column;gap: 10px; text-align: center; background-color: #f5f5f5; border-radius: 10px; box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2) ">
                <h3>${user.id}.${user.name}</h3> 
                <p>${user.age} years old</p>
            </li>`);
    }
    document.write('</ul></div>');
}

createUsersList(userData);


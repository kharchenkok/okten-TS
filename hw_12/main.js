// Fetch users from the API
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        const usersContainer = document.getElementById('usersContainer');
        
        users.forEach(user => {
            const userCard = document.createElement('div');
            userCard.className = 'user-card';
            
            userCard.innerHTML = `
                <h2>${user.name}</h2>
                <p>ID: ${user.id}</p>
                <button onclick="location.href='user-details.html?id=${user.id}'">View Details</button>
            `;
            
            usersContainer.appendChild(userCard);
        });
    })
    .catch(error => console.error('Error fetching users:', error));

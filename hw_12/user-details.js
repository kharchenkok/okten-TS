// Get user ID from URL parameters
const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get('id');

// Fetch user details
fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(response => response.json())
    .then(user => {
        const userDetails = document.getElementById('userDetails');
        
        // Create HTML content for all user properties
        const userHTML = `
            <h2>${user.name}</h2>
            <p><strong>Username:</strong> ${user.username}</p>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Phone:</strong> ${user.phone}</p>
            <p><strong>Website:</strong> ${user.website}</p>
            <h3>Address:</h3>
            <p>Street: ${user.address.street}</p>
            <p>Suite: ${user.address.suite}</p>
            <p>City: ${user.address.city}</p>
            <p>Zipcode: ${user.address.zipcode}</p>
            <p>Geo: Lat ${user.address.geo.lat}, Lng ${user.address.geo.lng}</p>
            <h3>Company:</h3>
            <p>Name: ${user.company.name}</p>
            <p>Catch Phrase: ${user.company.catchPhrase}</p>
            <p>BS: ${user.company.bs}</p>
        `;
        
        userDetails.innerHTML = userHTML;
    })
    .catch(error => console.error('Error fetching user details:', error));

// Add event listener for posts button
document.getElementById('postsButton').addEventListener('click', () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
        .then(response => response.json())
        .then(posts => {
            const postsContainer = document.getElementById('postsContainer');
            postsContainer.innerHTML = ''; // Clear existing posts
            
            posts.forEach(post => {
                const postCard = document.createElement('div');
                postCard.className = 'post-card';
                
                postCard.innerHTML = `
                    <h3>${post.title}</h3>
                    <button onclick="location.href='post-details.html?id=${post.id}'">View Post</button>
                `;
                
                postsContainer.appendChild(postCard);
            });
        })
        .catch(error => console.error('Error fetching posts:', error));
});

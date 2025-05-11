// Get post ID from URL parameters
const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get('id');

// Fetch post details
fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(response => response.json())
    .then(post => {
        const postDetails = document.getElementById('postDetails');
        
        postDetails.innerHTML = `
            <h2>${post.title}</h2>
            <p><strong>User ID:</strong> ${post.userId}</p>
            <p><strong>Post ID:</strong> ${post.id}</p>
            <p><strong>Body:</strong></p>
            <p>${post.body}</p>
        `;
        
        // Fetch comments for the post
        return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
    })
    .then(response => response.json())
    .then(comments => {
        const commentsContainer = document.getElementById('commentsContainer');
        
        comments.forEach(comment => {
            const commentCard = document.createElement('div');
            commentCard.className = 'comment-card';
            
            commentCard.innerHTML = `
                <h3>${comment.name}</h3>
                <p><strong>Email:</strong> ${comment.email}</p>
                <p>${comment.body}</p>
            `;
            
            commentsContainer.appendChild(commentCard);
        });
    })
    .catch(error => console.error('Error fetching post details or comments:', error));

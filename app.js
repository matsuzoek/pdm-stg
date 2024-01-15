// Get elements from the DOM
const postForm = document.getElementById('post-form');
const postInput = document.getElementById('post-input');
const postsContainer = document.getElementById('posts-container');

// Event listener for form submission
postForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const postText = postInput.value.trim();

    // Check if the input is not empty
    if (postText) {
        // Create a new post
        createPost(postText);

        // Clear the input field
        postInput.value = '';
    }
});

// Function to create a new post
function createPost(text) {
    // Create a new div element for the post
    const postDiv = document.createElement('div');

    // Add text to the post
    postDiv.textContent = text;

    // Add the post to the posts container
    postsContainer.prepend(postDiv);
}

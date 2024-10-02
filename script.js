// Wait for the DOM to load before running the script
document.addEventListener("DOMContentLoaded", function() {
  const uploadForm = document.getElementById('uploadForm');
  const postsContainer = document.getElementById('posts-container');

  // Handle form submission
  uploadForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const caption = document.getElementById('caption').value;
    const imageFile = document.getElementById('imageUpload').files[0];

    if (imageFile) {
      const reader = new FileReader();

      // Convert the uploaded image to base64 format
      reader.onload = function(e) {
        const base64Image = e.target.result;
        
        // Create a new post
        const post = document.createElement('div');
        post.classList.add('post');
        
        // Add image to the post
        const img = document.createElement('img');
        img.src = base64Image;
        post.appendChild(img);
        
        // Add caption to the post
        const postCaption = document.createElement('div');
        postCaption.classList.add('caption');
        postCaption.innerText = caption;
        post.appendChild(postCaption);

        // Append the post to the feed
        postsContainer.prepend(post);
      };
      
      // Read the image file as data URL
      reader.readAsDataURL(imageFile);

      // Clear form inputs
      document.getElementById('caption').value = '';
      document.getElementById('imageUpload').value = '';
    }
  });
});

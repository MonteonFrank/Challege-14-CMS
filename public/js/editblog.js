//DOM element and event listener for the update blog function
const submitButton = document.querySelector('#submitbutton');
submitButton.addEventListener('click', updateBlog);

// Function to update the blog
// Uses DOM elements to ogtain the information of the text area , blog ID and the content
async function updateBlog(event) {
 
  event.preventDefault();
  const updateForm = document.querySelector('#update-form');

  //Error handling to know if the blog was upted  or if there is information missing
  if (!updateForm) {
    console.error('Could not find the update form.');
    return;
  }
  const blogId = document.querySelector('#blog-id').value.trim();
  if (!blogId) {
    console.error('The blog ID is missing.');
    return;
  }

  const title = document.querySelector('#titleInput').value.trim();
  const content = document.querySelector('#contentTextarea').value.trim();

  // Make sure both title and content fields are filled out
  if (title && content) {
    try {
      // Send PUT request to the server to update the blog
      const response = await fetch(`/api/blog/${blogId}`, {
        method: 'PUT',
        body: JSON.stringify({ blog_title: title, blog_content: content }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        // Reload the home page to display the updated blog
        document.location.href = '/';
        alert('Blog updated successfully');
      } else {
        alert('Failed to update blog');
      }
    } catch (err) {
      console.error(err);
      alert('Failed to update blog');
    }
  }
}

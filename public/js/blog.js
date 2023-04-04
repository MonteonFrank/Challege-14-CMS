// Select DOM elements
const submitbutton = document.querySelector('#submitbutton');
const deletebutton = document.querySelector('#deletebutton');
const deleteButtons = document.querySelectorAll('.btn-danger');
const editbutton = document.querySelector("#editbutton")

// Function to delete a blog and call the DELETE API
const deleteBlog = async (event) => {
  
  const blogId = event.target.dataset.blogid;
  const response = await fetch(`/api/blog/${blogId}`, {
      method: 'DELETE'
  });

  //Error handlers to know if the blog was deleted successfully or not
  if(response.ok){
      alert('Blog deleted successfully!');
      window.location.reload();
  } else {
      alert('Blog not deleted');
  }
};

// Add event listener for all delete buttons
if (deleteButtons.length > 0) {
  deleteButtons.forEach(button => {
    button.addEventListener('click', deleteBlog);
  });
}

// Function to add a blog and call the POST API Method
const addBlog = async () => {
  const blogcontent = document.querySelector('#floatingTextarea').value;
  const usernameLabel = document.querySelector('#usernameLabel');
  const author = usernameLabel.textContent.trim();
  const blogtitle = document.querySelector('#floatingInput').value;

  const response = await fetch('/api/blog', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ 
        blog_title: blogtitle, 
        blog_content: blogcontent, 
        blog_author: author })
  });

  //Error handlers to know if the blog was added successfully or not to the database
  if (response.ok) {
    alert('Blog added successfully!');
    window.location.reload(); 
  } else {
    alert('Blog not added');
  }
};

//function to edit a specific blog and go to the edit blog page with the information obtained from the database 
function editBlog(event) {
  const blogId = event.target.dataset.blogid;
  window.location.href = `/editblog/${blogId}`;
}


// Add event listener to submit button and the edit button
submitbutton.addEventListener('click', addBlog);
editbutton.addEventListener("click", editBlog)
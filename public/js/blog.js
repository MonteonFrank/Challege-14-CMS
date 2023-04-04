// Select DOM elements
const submitbutton = document.querySelector('#submitbutton');
const deletebutton = document.querySelector('#deletebutton');
const deleteButtons = document.querySelectorAll('.btn-danger');
const editbutton = document.querySelector("#editbutton")

// Function to delete a blog
const deleteBlog = async (event) => {
  const blogId = event.target.dataset.blogid;

  const response = await fetch(`/api/blog/${blogId}`, {
      method: 'DELETE'
  });

  if(response.ok){
      alert('Blog deleted successfully!');
      window.location.reload();
  } else {
      alert('Blog not deleted');
  }
};

// Add event listener to delete buttons
if (deleteButtons.length > 0) {
  deleteButtons.forEach(button => {
    button.addEventListener('click', deleteBlog);
  });
}

// Function to add a blog
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

  const dbBlogData = await response.json(); 

  console.log(dbBlogData)

  if (response.ok) {
    alert('Blog added successfully!');
    window.location.reload(); 
  } else {
    alert('Blog not added');
  }
};

function editBlog(event) {
  const blogId = event.target.dataset.blogid;
  window.location.href = `/editblog/${blogId}`;
}


// Add event listener to submit button
submitbutton.addEventListener('click', addBlog);
editbutton.addEventListener("click", editBlog)
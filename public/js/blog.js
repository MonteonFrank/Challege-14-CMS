const submitbutton = document.querySelector('#submitbutton');
const deletebutton = document.querySelector('#deletebutton');
const deleteButtons = document.querySelectorAll('.btn-danger');

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

if (deleteButtons.length > 0) {
  deleteButtons.forEach(button => {
    button.addEventListener('click', deleteBlog);
  });
}

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


deletebutton.addEventListener('click', deleteBlog);
submitbutton.addEventListener('click', addBlog);

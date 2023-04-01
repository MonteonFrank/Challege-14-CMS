const deleteButtons = document.querySelectorAll('#deletebutton');

deleteButtons.forEach(deleteButton => {
  deleteButton.addEventListener('click', deleteBlog);
});

async function deleteBlog() {
  const blogId = this.getAttribute('data-blogid');

  try {
    const response = await fetch(`/api/blog/${blogId}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.reload();
      alert ('Blog deleted successfully')
    } else {
      alert('Failed to delete blog');
    }
  } catch (err) {
    console.error(err);
    alert('Failed to delete blog');
  }
}

const submitButton = document.querySelector('#submitbutton');

submitButton.addEventListener('click', submitBlog);

async function submitBlog() {
  const title = document.querySelector('#floatingInput').value.trim();
  const content = document.querySelector('#floatingTextarea').value.trim();
  const author = document.querySelector('#usernameLabel').textContent.trim();

  if (title && content) {
    try {
      const response = await fetch('/api/blog', {
        method: 'POST',
        body: JSON.stringify({ blog_title: title, blog_content: content, blog_author: author }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        document.location.reload();
        alert('Blog created successfully')
      } else {
        alert('Failed to submit blog');
      }
    } catch (err) {
      console.error(err);
      alert('Failed to submit blog');
    }
  }
}

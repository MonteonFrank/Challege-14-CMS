const submitbutton = document.querySelector('#submitbutton');

const addComment = async () => {
  const comment = document.querySelector('#exampleFormControlTextarea1').value;
  const usernameLabel = document.querySelector('#usernameLabel');
  const author = usernameLabel.textContent.trim();
  const blogID = document.querySelector('#blogID').value;

  const response = await fetch('/api/comments', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ author, comment, blogID })
  });

  if (response.ok) {
    alert('Comment added successfully!');
    window.location.reload(); 
  } else {
    alert('Comment not added');
  }
};

submitbutton.addEventListener('click', addComment);

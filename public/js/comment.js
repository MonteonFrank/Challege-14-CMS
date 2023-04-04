//DOM elements for the submit button
const submitbutton = document.querySelector('#submitbutton');

//Function to add a comment and uses DOM elements to obtain the text, user name and the ID related to the blog
const addComment = async () => {
  const comment = document.querySelector('#exampleFormControlTextarea1').value;
  const usernameLabel = document.querySelector('#usernameLabel');
  const author = usernameLabel.textContent.trim();
  const blogID = document.querySelector('#blogID').value;

  //API call for the post method to add the comment and relate it to the blog
  const response = await fetch('/api/comments', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ author, comment, blogID })
  });

    //Error handlers to know if a comment was successful or not
  if (response.ok) {
    alert('Comment added successfully!');
    window.location.reload(); 
  } else {
    alert('Comment not added');
  }
};

//Event listener to call the add comment function
submitbutton.addEventListener('click', addComment);

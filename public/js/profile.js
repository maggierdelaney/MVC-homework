const newFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#blog-name').value.trim();
    const description = document.querySelector('#blog-desc').value.trim();
  
    if (name && description) {
      const response = await fetch(`/api/blogs`, {
        method: 'POST',
        body: JSON.stringify({ name, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create project');
      }
    }
  };
  
  const delButtonHandler = async (event) => {
    if (event.target.getElementById('delete-blog')) {
      const id = event.target.getElementById('delete-blog');
  
      const response = await fetch(`/api/blogs/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to delete project');
      }
    }
  };
  
  document
    .querySelector('#new-blog')
    .addEventListener('submit', newFormHandler);
  
  document
    .querySelector('#delete-blog')
    .addEventListener('click', delButtonHandler);
  
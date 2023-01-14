const updateFormHandler = async (event) => {
  const name = document.querySelector('#edit-name').value;
  const description = document.querySelector('#edit-desc').value;
  const id = event.target.getAttribute('data-id');
  const response = await fetch(`/api/blogs/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      name,
      description
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  if (response.ok) {
    document.location.replace('/profile');
  } else {
    alert('Failed to update blog');
  }
}

document
  .querySelector('#edit-btn')
  .addEventListener('click', updateFormHandler);
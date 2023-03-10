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
      alert('Failed to create blog');
    }
  }
};


const updateFormHandler = async (event) => {
  event.preventDefault();
  const name = document.querySelector('#upd-blog-name').value;
  const description = document.querySelector('#upd-blog-desc').value;

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
    document.location.replace('/profile/');
  } else {
    alert('Failed to update blog');
  }
}


const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/blogs/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete blog');
    }
  }
};

document
  .querySelector('#blog-submit')
  .addEventListener('submit', newFormHandler);

// document
//   .querySelector('#update-blog')
//   .addEventListener('click', updateFormHandler);

document
  .querySelector('#delete-blog')
  .addEventListener('click', delButtonHandler);


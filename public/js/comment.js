const newCommentHandler = async (event) => {
  event.preventDefault();
  const blog_id = event.target.getAttribute('data-id');
  const text = document.querySelector('#comment-text').value.trim();

  if (text) {
    const response = await fetch(`/api/comments/`, {
      method: 'POST',
      body: JSON.stringify({ text, blog_id }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert('Failed to leave comment');
    }
  }
};

document.querySelector('#comment').addEventListener('submit', newCommentHandler);
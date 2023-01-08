const newCommentHandler = async (event) => {
    event.preventDefault();
  
    const text = document.querySelector('#comment').value.trim();
  
    if (text) {
      const response = await fetch(`/api/comments`, {
        method: 'POST',
        body: JSON.stringify({ text }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/blog');
      } else {
        alert('Failed to leave comment');
      }
    }
  };

document.querySelector('#comment').addEventListener('submit', newCommentHandler);
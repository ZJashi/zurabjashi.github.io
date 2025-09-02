document.getElementById('contact-form')?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const form = e.target;
  const status = document.getElementById('contact-status');
  const data = {
    name: form.name.value,
    email: form.email.value,
    message: form.message.value
  };
  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    if (res.ok) {
      status.textContent = 'Message sent!';
      form.reset();
    } else {
      status.textContent = 'Failed to send message.';
    }
  } catch (err) {
    status.textContent = 'Error sending message.';
  }
});

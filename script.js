document.querySelectorAll('.read-more').forEach(button => {
    button.addEventListener('click', () => {
        alert('More content will be available soon!');
    });
});

document.getElementById('contact-form').addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Thank you for your message!');
    event.target.reset();
});

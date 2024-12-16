document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission

        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Basic validation (if needed)
        if (name && email && message) {
            alert(`Message sent!\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);
            // Clear the form after submission
            form.reset();
        } else {
            alert("Please fill in all fields!");
        }
    });
});

// Example JavaScript for form validation (optional)

const form = document.getElementById('contact-form');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Validate form fields (example)
    let name = form.elements['name'].value;
    let email = form.elements['email'].value;
    let message = form.elements['message'].value;

    if (name && email && message) {
        // Assuming form submission logic here (e.g., sending data to server)
        alert('Form submitted successfully!');
        form.reset();
    } else {
        alert('Please fill in all fields.');
    }
});

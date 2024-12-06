document.addEventListener('DOMContentLoaded', () => {

    // Project section
    const buttons = document.querySelectorAll('.toggle-details');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const projectDetails = button.nextElementSibling;
            const isVisible = projectDetails.style.display === 'block';

            projectDetails.style.display = isVisible ? 'none' : 'block';
            button.textContent = isVisible ? 'Show Details' : 'Hide Details';
        });
    });

    // Contact section
    const form = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');

    form.addEventListener('submit', (event) => {
        let isValid = true;

        if (nameInput.value.trim() === '') {
            nameError.textContent = 'Name is required.';
            nameError.style.display = 'block';
            nameInput.classList.add('invalid');
            isValid = false;
        } else {
            nameError.textContent = '';
            nameError.style.display = 'none';
            nameInput.classList.remove('invalid');
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value.trim())) {
            emailError.textContent = 'Please enter a valid email address.';
            emailError.style.display = 'block';
            emailInput.classList.add('invalid');
            isValid = false;
        } else {
            emailError.textContent = '';
            emailError.style.display = 'none';
            emailInput.classList.remove('invalid');
        }

        if (messageInput.value.trim() === '') {
            messageError.textContent = 'Message cannot be empty.';
            messageError.style.display = 'block';
            messageInput.classList.add('invalid');
            isValid = false;
        } else {
            messageError.textContent = '';
            messageError.style.display = 'none';
            messageInput.classList.remove('invalid');
        }

        if (!isValid) {
            event.preventDefault();
        }
    });

});

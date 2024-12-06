document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.toggle-details');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const projectDetails = button.nextElementSibling;
            const isVisible = projectDetails.style.display === 'block';

            projectDetails.style.display = isVisible ? 'none' : 'block';
            button.textContent = isVisible ? 'Show Details' : 'Hide Details';
        });
    });
});

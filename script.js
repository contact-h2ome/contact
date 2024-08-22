// script.js

document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.social-button');
    
    buttons.forEach(button => {
        button.addEventListener('mouseover', function() {
            this.classList.add('animate__animated', 'animate__pulse');
        });

        button.addEventListener('mouseout', function() {
            this.classList.remove('animate__animated', 'animate__pulse');
        });
    });
});
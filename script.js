document.addEventListener('DOMContentLoaded', (event) => {
    const validCode = 'SPECIFIC_CODE_2024'; // This is the specific valid registration code
    const form = document.getElementById('registerForm');
    const message = document.getElementById('message');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const code = document.getElementById('code').value;

        if (code === validCode) {
            message.style.color = 'green';
            message.innerText = 'Registration successful!';
            // Here you can add further actions, like sending the form data to the server
        } else {
            message.style.color = 'red';
            message.innerText = 'Invalid registration code. Please try again.';
        }
    });
});

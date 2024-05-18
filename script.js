document.addEventListener('DOMContentLoaded', () => {
    const validCode = 'SPECIFIC_CODE_2024';
    const loginContainer = document.getElementById('loginContainer');
    const registerContainer = document.getElementById('registerContainer');
    const loginMenu = document.getElementById('loginMenu');
    const registerMenu = document.getElementById('registerMenu');
    const registerForm = document.getElementById('registerForm');
    const message = document.getElementById('message');

    loginMenu.addEventListener('click', () => {
        registerContainer.classList.remove('show');
        registerContainer.classList.add('hide');
        setTimeout(() => {
            registerContainer.style.display = 'none';
            loginContainer.classList.add('show');
            loginContainer.classList.remove('hide');
        }, 500);
    });

    registerMenu.addEventListener('click', () => {
        loginContainer.classList.remove('show');
        loginContainer.classList.add('hide');
        setTimeout(() => {
            loginContainer.style.display = 'none';
            registerContainer.classList.add('show');
            registerContainer.classList.remove('hide');
        }, 500);
    });

    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const code = document.getElementById('code').value;

        if (code === validCode) {
            message.style.color = 'green';
            message.innerText = 'Registration successful!';
        } else {
            message.style.color = 'red';
            message.innerText = 'Invalid registration code. Please try again.';
        }
    });

    // Initially show the login container
    loginContainer.classList.add('show');
});

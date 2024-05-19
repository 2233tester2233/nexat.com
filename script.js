document.addEventListener('DOMContentLoaded', () => {
    const validCode = 'SPECIFIC_CODE_2024';
    const validLogin = { username: 'user', password: 'password' }; // Example valid credentials
    const loginContainer = document.getElementById('loginContainer');
    const registerContainer = document.getElementById('registerContainer');
    const menuContainer = document.getElementById('menuContainer');
    const loginMenu = document.getElementById('loginMenu');
    const registerMenu = document.getElementById('registerMenu');
    const registerForm = document.getElementById('registerForm');
    const loginForm = document.getElementById('loginForm');
    const loginMessage = document.getElementById('loginMessage');
    const registerMessage = document.getElementById('registerMessage');
    const logoutButton = document.getElementById('logoutButton');

    loginMenu.addEventListener('click', () => {
        registerContainer.classList.remove('show');
        loginContainer.classList.add('show');
        loginMenu.classList.add('active');
        registerMenu.classList.remove('active');
    });

    registerMenu.addEventListener('click', () => {
        loginContainer.classList.remove('show');
        registerContainer.classList.add('show');
        registerMenu.classList.add('active');
        loginMenu.classList.remove('active');
    });

    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const code = document.getElementById('code').value;

        if (code === validCode) {
            registerMessage.style.color = 'green';
            registerMessage.innerText = 'Registration successful!';

            // Hide the register menu and switch to login form
            registerMenu.style.display = 'none';
            setTimeout(() => {
                registerContainer.classList.remove('show');
                loginContainer.classList.add('show');
                loginMenu.classList.add('active');
                registerMenu.classList.remove('active');
            }, 500);
        } else {
            registerMessage.style.color = 'red';
            registerMessage.innerText = 'Invalid registration code. Please try again.';
        }
    });

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const username = document.getElementById('loginUsername').value;
        const password = document.getElementById('loginPassword').value;

        if (username === validLogin.username && password === validLogin.password) {
            loginMessage.style.color = 'green';
            loginMessage.innerText = 'Login successful!';
            setTimeout(() => {
                loginContainer.classList.remove('show');
                menuContainer.classList.add('show');
            }, 500);
        } else {
            loginMessage.style.color = 'red';
            loginMessage.innerText = 'Invalid username or password. Please try again.';
        }
    });

    logoutButton.addEventListener('click', () => {
        menuContainer.classList.remove('show');
        loginContainer.classList.add('show');
        loginMessage.innerText = '';
        loginForm.reset();
    });

    // Initially show the login container
    loginContainer.classList.add('show');
});

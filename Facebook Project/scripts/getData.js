import { data } from "../data/data.js";

const getEmail = document.querySelector('.email-js')
const getPassword = document.querySelector('.password-js');
const login_btn = document.querySelector('.login-btn');

console.log(data);

login_btn.addEventListener('click', () => {
    data.push({
        email: getEmail.value,
        password: getPassword.value
    });
    localStorage.setItem('data', JSON.stringify(data));
})


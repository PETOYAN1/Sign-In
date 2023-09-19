let login = document.getElementById('text');
let password = document.getElementById('password');
let showPass = document.getElementById('checkbox');
let submit = document.getElementById('submit');
let error = document.getElementById('err');
let loginErr = document.getElementById('Log');

showPass.onclick = function showPass() {
    password.type === "password" ? password.type = 'text' : password.type = 'password';
}

submit.onclick = function sendLogin(e) {
    e.preventDefault();
    if(password.value === '' && login.value === '') {
        error.innerHTML = `Pass cant be empty`;
        loginErr.innerHTML = `Login cant be empty`;
    }  else {
        error.innerHTML = ``;
        loginErr.innerHTML = ``;
    }
    login.value === '' ? loginErr.innerHTML = `Login cant be empty`: null; 
    password.value === '' ? error.innerHTML = `Pass cant be empty` : null;
}
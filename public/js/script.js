let loginForm = document.querySelector('.header .login-form');

document.querySelector('#login-btn').onclick = () => {
    loginForm.classList.toggle('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    loginForm.classList.remove('active');
}

window.onscroll = () => {
    loginForm.classList.remove('active');
    navbar.classList.remove('active');

    if (window.scrollY > 0) {
        document.querySelector('.header').classList.add('active');
    } else {
        document.querySelector('.header').classList.remove('active');
    }
}

window.onload = () => {
   
    // console.log( window.scrollY)
    if (window.scrollY >= 0) {
        
        document.querySelector('.header').classList.add('active');
    } else {
        document.querySelector('.header').classList.remove('active');
    }
}

//product-detail
const increase = document.querySelector('#increase');
const reduce = document.querySelector('#reduce');
const amount = document.querySelector('.amount');

reduce.addEventListener('click', () => {
    let x = +amount.innerHTML;
    if (x <= 1) {
        x = 1;
        reduce.style.cursor = "no-drop";
    } else {
        x -= 1;
    }
    amount.innerHTML = x;
});
increase.addEventListener('click', () => {
    let x = +amount.innerHTML;
    if (x >= 3) {
        x = 3;
        increase.style.cursor = "no-drop";
    } else {
        x += 1;
    }
    amount.innerHTML = x;
})
document.addEventListener('DOMContentLoaded', function() {

    const form = document.getElementById('login-form');
    const loginId = document.getElementById('loginId');
    const loginPw = document.getElementById('loginPw');
    const signupBtn = document.getElementById('signupBtn');
    const findBtn = document.getElementById('findBtn');


    document.cookie = "isLogin=true; path=/";


    signupBtn.addEventListener('click', function() {
        location.href = './signup-page.html';
    });


    findBtn.addEventListener('click', function() {
        location.href = './password-page.html';
    });


    form.onsubmit = function () {
        localStorage.setItem('isLogin', 'true');

        alert('로그인 되었습니다.');
        location.href = '../index.html';
        return false;
    };
});

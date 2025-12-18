document.addEventListener("DOMContentLoaded", () => {
    const authArea = document.getElementById("authArea");
    const profileArea = document.getElementById("profileArea");
    const profileBtn = document.getElementById("profileBtn");
    const profileMenu = document.getElementById("profileMenu");
    const searchBtn = document.getElementById("searchBtn");
    const signupBtn = document.getElementById("signupBtn");


    searchBtn.addEventListener("click", () => {
        location.href = "./HTML/question-result.html";
    });

    signupBtn.addEventListener("click", () => {
        location.href = "./HTML/signup-page.html";
    });



    function applyAuthUI() {
        const isLogin = localStorage.getItem("isLogin") === "true";

        if (isLogin) {
            authArea.classList.add("hidden");
            profileArea.classList.remove("hidden");
            profileMenu.classList.add("hidden");
        } else {
            authArea.classList.remove("hidden");
            profileArea.classList.add("hidden");
            profileMenu.classList.add("hidden");
        }
    }

    

    window.login = function () {
        localStorage.setItem("isLogin", "true");
        applyAuthUI();
    };


    window.loginAndMove = function () {
        login();
        location.href = "./HTML/login.html";
    };



    window.logout = function () {
        localStorage.removeItem("isLogin");
        applyAuthUI();
    };


    profileBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        profileMenu.classList.toggle("hidden");
    });


    profileMenu.addEventListener("click", (e) => {
        e.stopPropagation();
    });


    document.addEventListener("click", () => {
        profileMenu.classList.add("hidden");
    });


    applyAuthUI();
});

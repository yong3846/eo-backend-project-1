document.addEventListener("DOMContentLoaded", () => {
    const authArea = document.getElementById("authArea");
    const profileArea = document.getElementById("profileArea");
    const profileBtn = document.getElementById("profileBtn");
    const profileMenu = document.getElementById("profileMenu");
    const signupBtn = document.getElementById("signupBtn");
    const searchBtn = document.getElementById("searchBtn");


    const loginBtn = document.getElementById("loginBtn");
    const logoutBtn = document.getElementById("logoutBtn");


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



    function login() {
        localStorage.setItem("isLogin", "true");
        applyAuthUI();
    }

    function logout() {
        localStorage.removeItem("isLogin");
        applyAuthUI();
    }



    loginBtn.addEventListener("click", function() {
        login();
        // location.href = "./HTML/login.html";
    });

    logoutBtn.addEventListener("click", logout);

    searchBtn.addEventListener("click", function() {
        location.href = "./HTML/question-result.html";
    });

    profileBtn.addEventListener("click", function(e) {
        e.stopPropagation();
        profileMenu.classList.toggle("hidden");
    });

    document.addEventListener("click", function() {
        profileMenu.classList.add("hidden");
    });

    applyAuthUI();
});

const signup = document.querySelector('#sign-up');
const signin = document.querySelector('#sign-in');
const signupOverlay = document.querySelector('.signup-overlay');
const signinOverlay = document.querySelector('.signin-overlay');
const signinform = document.querySelector('.signinform');
const signupform = document.querySelector('.signupform');


signup.addEventListener('click',() => {
    signinOverlay.style.zIndex = 1 ;
    signupOverlay.style.zIndex = 0 ;
    signinOverlay.style.right = `${50}%`;
    signupOverlay.style.right = `${50}%`;

    signupform.style.zIndex = 1 ;
    signinform.style.zIndex = 0 ;
    signupform.style.left = `${50}%`;
    signinform.style.left = `${50}%`;

});

signin.addEventListener('click',() => {
    signinOverlay.style.right = `${0}%`;
    signinOverlay.style.zIndex = 0 ;
    signupOverlay.style.right = `${0}%`;
    signupOverlay.style.zIndex = 1 ;

    signupform.style.left = `${0}%`;
    signupform.style.zIndex = 0 ;
    signinform.style.left = `${0}%`;
    signinform.style.zIndex = 1 ;

});
'use strict'

let openSignInBtn = document.getElementById('open-sign-in-btn');
let openSignUpBtn = document.getElementById('open-sign-up-btn');


let previewSignIn = document.getElementById('preview-sign-in');
let signUpForm = document.getElementById('sign-up-form');

let previewSignUp = document.getElementById('preview-sign-up');
let signInForm = document.getElementById('sign-in-form');

openSignInBtn.addEventListener('click', function(){
    previewSignIn.classList.toggle('hidden');
    signUpForm.classList.toggle('hidden');

    signInForm.classList.toggle('hidden');
    previewSignUp.classList.toggle('hidden');
    
})

openSignUpBtn.addEventListener('click', function(){
    previewSignIn.classList.toggle('hidden');
    signUpForm.classList.toggle('hidden');

    signInForm.classList.toggle('hidden');
    previewSignUp.classList.toggle('hidden');
})
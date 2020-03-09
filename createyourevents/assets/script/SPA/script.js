window.onhashchange = function() {
    var URLHash = window.location.hash;
    console.log(URLHash);
    loadData(URLHash);
};

function loadData(URLHash) {
    let url;
    switch(URLHash) {
        case "#navMenu":
            url = "navMenu.html";
            break;
        case "#logIn": 
            url = "logIn.html";
            break;
        case "#registration": 
            url = "registration.html";
            break;
        case "#contact": 
            url = "contact.html";
            break;
        default:
            url = "navMenu.html";
            break;
    }
    $.ajax(url,
        { 
            type:'GET', 
            dataType:'html', 
            success: dataLoaded, 
            error: errorHandler 
        }
    );
}

function dataLoaded(data) {
    document.getElementById('content').innerHTML = data;
    switch(window.location.hash) {
        case "#navMenu":
            break;
        case "#logIn": 
            changeCheckBox();
            signIn();
            login();
            password();
            break;
        case "#registration": 
            validation();
            break;
        case "#contact": 
            break;
    }
}

function errorHandler() {
    console.log("Error");
}

function valueValidation() {
    const regInputs = document.getElementsByTagName('input');
    const label = document.getElementsByTagName('label');
    
    for(var i=0;i<regInputs.length;i++){
        for (let y=0;y<label.length;y++) {
            var regInput = regInputs[i];
            let regLabel = label[y];

            if(!regInput.value) {
                regInput.style.borderBottom = '1.5px solid #C21807';
                regLabel.style.color = '#C21807';
                document.getElementById("regBtn").disabled = true;
            } else {
                regInput.style.borderBottom = '1.5px solid #808080';
                regLabel.style.color = '#808080';
                document.getElementById("regBtn").disabled = false;
            }
        }
    }
}
function passwordValidation() {
    const passwordLabel = document.getElementById('passwordLabel');
    const confPasswordLabel = document.getElementById('confPasswordLabel');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    
    if (password.value !== confirmPassword.value) {
        passwordLabel.innerHTML = 'Check Password';
        confPasswordLabel.innerHTML = 'Check Password';
        passwordLabel.style.color = '#C21807';
        confPasswordLabel.style.color = '#C21807';
        document.getElementById("regBtn").disabled = true;
        return false;
    } else {
        password.style.borderBottom = '1.5 solid #808080';
        passwordLabel.style.color = '#808080';
        document.getElementById("regBtn").disabled = false;
    }
}

function emailValidation() {
    const emailLabel = document.getElementById('emailLabel');
    const emailRE = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;            
    const email = document.getElementById('email');

    if (!emailRE.test(email.value)) {
        emailLabel.innerHTML = 'example: asd@mail.ru';
        emailLabel.style.color = '#C21807';
        document.getElementById("regBtn").disabled = true;
        return false;
    } else {
        email.style.borderBottom = '1.5 solid #808080';
        emailLabel.style.color = '#808080';
        document.getElementById("regBtn").disabled = false;
    }
}

function validation() {
    document.getElementById('register').addEventListener('click',function(){
        valueValidation();
        passwordValidation();
        emailValidation();
        registrationStorage();
    });
}

function registrationStorage() {
    document.getElementById("regBtn").addEventListener("click", function() {
        const loginInput = document.getElementById("login").value;
        const passwordInput = document.getElementById("password").value;
        const confirmPasswordInput = document.getElementById("confirmPassword").value;
        const nameInput = document.getElementById("fullName").value;
        const yearsInput = document.getElementById("years").value;
        const emailInput = document.getElementById("email").value;
        localStorage.setItem("login", loginInput);
        localStorage.setItem("password", passwordInput);
        localStorage.setItem("confirmPassword", confirmPasswordInput);
        localStorage.setItem("fullName", nameInput);
        localStorage.setItem("years", yearsInput);
        localStorage.setItem("email", emailInput);
        window.location.href = "..//..//..//..//menu.html";
});
}

function signIn() {
    document.getElementById('signIn').addEventListener('click', function(){
        let login_ok = false;

        const userName = document.getElementById('log').value;
        const link = document.getElementById('signIn');
        const password = document.getElementById('pass').value;
        const nameStorage = localStorage.getItem('login');
        const passwordStorage = localStorage.getItem('password');
        const errorInput = document.getElementById('errorInput');

        if (userName === nameStorage && password === passwordStorage) {
        login_ok = true;
        window.location.href = "account.html";
        }
        if (login_ok === false) {
            errorInput.style.display = 'block';
        }
    });
}
function login() {
    document.getElementById('log').addEventListener('click',function(){
        let error = document.getElementById('errorInput');
        error.style.display = 'none';
    });
}
function password() {
    document.getElementById('pass').addEventListener('click',function(){
        let error = document.getElementById('errorInput');
        error.style.display = 'none';
    });
}
function changeCheckBox() {
    const chbox = document.getElementById('chbox');
    const inpt = document.getElementById('pass');
        if (chbox.checked) {
            inpt.type = "text";
        }
        else {
            inpt.type = "password";
        }
}
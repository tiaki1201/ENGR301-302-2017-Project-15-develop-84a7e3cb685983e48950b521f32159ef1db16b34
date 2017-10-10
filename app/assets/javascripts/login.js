/**
 * Log the users in and go to the home page
 */
function login(){
    if(document.getElementById("loginInput").value == "adam" && document.getElementById("passwordInput").value == "adam123"){
        console.log(window.location.pathname);
        window.location.pathname = '/ENGR-Project/FrontEnd/1stPrototype/index.html';
    }else{
        alert("Incorrect Username or Password");
    }
}


/**
 * Create an account for the users and go to the home page
 */
function createAccount(){
    if(document.getElementById("nameInput").value != 'undefined' && document.getElementById("newPasswordInput").value != 'undefined' &&
     document.getElementById("emailInput").value != 'undefined'){
        window.location.pathname = '/ENGR-Project/FrontEnd/1stPrototype/index.html';
    }else{
        alert("Incorrect Username or Password");
    }
}


/**
 * Toggle the form between the register and login view
 */
function changeForm() {
    $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
}

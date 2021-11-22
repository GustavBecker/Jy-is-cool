

function createAccount(){
    window.location.href = 'https://accounts.google.com/signup/v2/webcreateaccount?service=mail&continue=https%3A%2F%2Fmail.google.com&hl=en&biz=false&flowName=GlifWebSignIn&flowEntry=SignUp';
}

function Next_but(){
    SubForm();
    window.location.href = 'password.html';
}

function End_but(){
    SubFormP();
    window.location.href = 'Jy is cool.html';
}

function Next_Sub(){
    SubForm();
    Next_but();
}
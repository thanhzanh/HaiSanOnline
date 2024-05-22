
// login

const emailInput = document.getElementById('emailInput');
const passwordInput = document.getElementById('passwordInput');


const setError = (element ,message) =>
{
    const inputControl = element.parentElement;
    const errorDisplay =inputControl.querySelector('.error-message-login');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}
const setSuccess = element =>
{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error-message-login');

    errorDisplay.innerText = ' ';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

const isValidEmail = emailInput =>
{
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(emailInput).toLowerCase());
}

form.addEventListener('button', function(event) {
    event.preventDefault();
    loginForm();
});

function loginForm() {

    const emailInputValue = emailInput.value.trim();
    const passwordInputValue =passwordInput.value.trim();


    let isvalue = true;


    if(emailInputValue === '') {
        setError(emailInput, 'Vui lòng nhập email của bạn !');
        isvalue =false;
    } else if (!isValidEmail(emailInputValue)) {
        setError(emailInput, 'Email sai!');
        isvalue =false;
    } else {
        setSuccess(emailInput);
    }


    if(passwordInputValue === '')
    {
        setError(passwordInput , 'Vui lòng nhập mật khẩu của bạn !');
        isvalue = false;
    } else if(passwordInputValue.length < 8) {
        setError(passwordInput , 'Mật khẩu của bạn chưa đủ mạnh!');
        isvalue = false;
    }
    else 
    {
        setSuccess(passwordInput);
    }


    if(isvalue)
    {
        alert('Bạn đã đăng nhập thành công.');
    }
}

// Function tick check
function checkRemember() {
    var isCheck = document.getElementById('check-remember');
    if(isCheck.checked) {
        alert('Bạn đã check remember');
    } else {
        alert('Bạn đã bỏ check remember');

    }
}



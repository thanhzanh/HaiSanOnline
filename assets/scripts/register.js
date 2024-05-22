
// Register

const fullNameInput = document.getElementById('fullNameInput');
const phoneInput = document.getElementById('phoneInput');
const emailInput = document.getElementById('emailInput');
const passwordInput = document.getElementById('passwordInput');
const confirmInput = document.getElementById('confirmInput');


const setError = (element ,message) =>
{
    const inputControl = element.parentElement;
    const errorDisplay =inputControl.querySelector('.error-message-re');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element =>
{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error-message-re');

    errorDisplay.innerText = ' ';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

const isValidEmail = emailInput =>
{
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(emailInput).toLowerCase());
}

const isValidSDT = phoneInput =>
{
    const re = /^[0-9]{10}$/; // Chỉ chấp nhận 10 chữ số
    return re.test(phoneInput);
}

form.addEventListener('button', function(event) {
    event.preventDefault();
    loginForm();
});


function validateForm() {
    const fullNameInputValue = fullNameInput.value.trim();
    const emailInputValue = emailInput.value.trim();
    const phoneInputValue = phoneInput.value.trim();
    const passwordInputValue =passwordInput.value.trim();
    const confirmInputValue =confirmInput.value.trim();


    let isvalue = true;

    if(fullNameInputValue === '')
    {
        setError(fullNameInput,'Vui lòng nhập họ tên của bạn !');
        isvalue =false;
    }
    else 
    {
        setSuccess(fullNameInput);
    }

    if(phoneInputValue === '')
    {
        setError(phoneInput,'Vui lòng nhập SĐT của bạn !');
        isvalue =false;
    } else if (!isValidSDT(phoneInputValue))
    {
        setError(phoneInput,'Số điện thoại sai ! Số điện thoại phải đạt 10 chữ số.');
        isvalue =false;
    } else 
    {
        setSuccess(phoneInput);
    }


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
        setError(passwordInput , 'Mật khẩu của bạn phải đủ 8 ký tự trở lên !');
        isvalue = false;
    }
    else 
    {
        setSuccess(passwordInput);
    }

    if(confirmInputValue === '')
    {
        setError(confirmInput , 'Vui lòng nhập lại mật khẩu của bạn !');
        isvalue = false;
    } else if(confirmInputValue !== passwordInputValue) {
        setError(confirmInput , 'Mật khẩu phải đúng ở trên !');
        isvalue = false;
    }
    else 
    {
        setSuccess(passwordInput);
    }
    
    if(isvalue)
    {
        alert('Bạn đã đăng ký thành công.');
    }
}







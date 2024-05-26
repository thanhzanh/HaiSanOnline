

// Contact

const fullNameInput = document.getElementById('fullNameInput');
const phoneInput = document.getElementById('phoneInput');
const emailInput = document.getElementById('emailInput');
const messageInput = document.getElementById('messageInput');


const setError = (element ,message) =>
{
    const inputControl = element.parentElement;
    const errorDisplay =inputControl.querySelector('.error-message');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element =>
{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error-message');

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

function contactForm() {
    const fullNameInputValue = fullNameInput.value.trim();
    const emailInputValue = emailInput.value.trim();
    const phoneInputValue = phoneInput.value.trim();
    const messageInputValue = messageInput.value.trim();

    const serviceID = "service_s8iew2b";
    const templateID = "template_7ofd298";

    var templateParams = {
        fullNameInput: fullNameInputValue,
        phoneInput: phoneInputValue,
        emailInput: emailInputValue,
        messageInput: messageInputValue
    };  

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

    if(isvalue)     
    {
        emailjs.send(serviceID, templateID, templateParams)
        .then(function(response) {
            alert('Cảm ơn bạn đã gửi ý kiến. Haisan.Online sẽ phản hồi cho bạn sớm nhất.');
        }, function(error) {
            alert('Có lỗi xảy ra. Vui lòng thử lại!');
        });
    }
}
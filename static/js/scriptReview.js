
let reviewButton = document.querySelector('.divBtnOpenReview .openReview');
let blockReviewDrop = document.querySelector('.blockReview');



reviewButton.addEventListener('click', function (event){
    console.log('нажал');
    blockReviewDrop.classList.toggle('openBlock');
})



function ValidMail() {
            
    let re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
    let Mail = document.querySelector('.blockReview input[name=email]').value;
    let valid = re.test(Mail);
    let output;
    if (valid) {
        output = 'Адрес элeктронной почты введен правильно!';
        
    }
    else output = 'Адрес электронной почты введен неправильно!';
    document.querySelector('.blockReview .check').innerHTML = output;

    let myName = document.querySelector('.blockReview input[name=name]').value;
    let myTitle = document.querySelector('.blockReview input[name=title]').value;
    let myMessage = document.querySelector('.blockReview textarea[name=message]').value;
    event.preventDefault();
    if (myName.length > 1 && myTitle.length > 1 && myMessage.length > 1 && valid) {
        
        document.querySelector('.blockReview .okno').style.display = 'block';
        console.log('отзыв отправлен');
        
    }
}

function СloseWindow() {
    document.querySelector('.blockReview .okno').style.display = 'none';
}
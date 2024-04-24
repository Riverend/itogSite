let boxUl = document.querySelector('.box ul');

let nameKatefories = [  'Экшены','Инди','Симуляторы',
                'Приключенческие игры','Ролевые игры',
                'Стратегии','Многопользовательские игры','Гонки',
                'Казуальные игры','Ранний доступ'];



nameKatefories.forEach((element,key) => {

    let li = document.createElement('li');
    li.className = 'oi';
    let span = document.createElement('span');
    span.innerHTML = element; 
    li.append(span);
    boxUl.append(li);
});

let box = document.querySelector('.box');
let boxh1 = document.querySelector('.box h1');

boxh1.addEventListener('click', function (evend) {
    if (box.classList.contains('boxhidden')) {
        box.classList.remove('boxhidden');
        box.style.backgroundColor = '#8b2e2885';
    }
    else {
        box.className = 'box boxhidden';
        box.style.backgroundColor = '#cca09d85';
    }
})
let bttnOptinFront = document.querySelector('.optinFront .enter');
let bttnDropDown = document.querySelector('.dropDown');

// var sum = false;

// function sdsd() {
//     let contains = bttnDropDown.classList.contains('openBlock');

//     console.log(sum);
//     if (sum) {
//         bttnDropDown.classList.remove('openBlock');
//         sum = false;      
//     }

// }

// document.addEventListener('click', sdsd );

bttnOptinFront.addEventListener('click', function (event){
    console.log('нажал');
    bttnDropDown.classList.toggle('openBlock');
    
})

let xcsds = document.querySelectorAll('.dropDown > a')
let blockHome = document.querySelector('.blockHome');
let sdsd = document.querySelectorAll('.blockHome > div');

let names;

xcsds[0].addEventListener('click', function (evend) {
    blockHome.style.display = 'flex';
    sdsd[1].style.display = 'flex';
    names = 'register';
})

xcsds[1].addEventListener('click', function (evend) {
    blockHome.style.display = 'flex';
    sdsd[2].style.display = 'flex';
    names = 'comes';    
})

sdsd[0].addEventListener('click', function (event) {
    blockHome.style.display = 'none';
    if (names == 'register') {
        sdsd[1].style.display = 'none';
    } 
    else {
        sdsd[2].style.display = 'none';
    }
})

console.log(xcsds);
console.log(sdsd);
(async () => {

    const files = await fetch('./datte.xml')
        .then(response => response.text())
        .then(data => {
            return data
        })
        .catch(console.error);

    const parser=new DOMParser();
    const xmlDocument=parser.parseFromString(files, "text/xml");  
    // console.log(xmlDocument);
    
    let capital = xmlDocument.querySelector("MAGAZIN");  
    let blocks = capital.querySelectorAll("book");

    const url = 'static/images/games/';
    
    let score = decodeURIComponent(location.search).split('&');
    score.splice(0, 1);
    let result = score[0];
    console.log(result);
    
    let arrayImg = [];
    
    blocks.forEach(element => {
        if (element.querySelector('id').innerHTML == result) { 
            let ars = element.querySelector('urlImages').innerHTML
            let arrayTegs = ars.split(',');
            console.log('arrayTegs');
            arrayTegs.forEach(teg => {
                arrayImg.push(teg.replace(/'/g, ''));
            })
        }
    });
    

    let gallery = document.querySelector('.container-gallery > a');
    let buttonGallery = document.querySelectorAll('.container-gallery .button-gallery');
    
    //Функции для переключения галереии с кнопок
    const count = arrayImg.length;
    
    let active = 1;
    
    function gallery_buttons() {
        
        gallery.style.backgroundImage = `url(${arrayImg[active-1]})`;
    
        let lastActiveDot = document.querySelector('.container-gallery .dots li.active');
        lastActiveDot.classList.remove('active');
        dotsLi[active-1].classList.add('active');           
        gallery_bottom();
    }
    //Обработчик кнопок перемещения галереии
    buttonGallery[1].addEventListener('click', function (evend) {
        if (active >= count) active = 1;
        else active++;
        gallery_buttons();
    })
    buttonGallery[0].addEventListener('click', function (evend) {
        if (active <= 1) active = 4;
        else active--;
        gallery_buttons();
    })
    
    gallery.style.backgroundImage = `url(${arrayImg[0]})`;
    
    //Создание li для галерии точек в ul.dots
    let dots = document.querySelector('.container-gallery .dots');
    for(let i = 1; i<=count; i++) {
        let creatLi = document.createElement("li");
        dots.appendChild(creatLi);
    }
    
    //Функции для пермещения галереии с точек
    let dotsLi = document.querySelectorAll('.container-gallery .dots li');
    dotsLi[0].classList.add('active');
    
    dotsLi.forEach((li, key) => {
        li.addEventListener('click', function() {
            active = key+1;
            gallery_buttons();
        })
    })
    
    //Функции для прокруток с галереии
    
    let gallery_prokryt = document.querySelector('.gallery-prokryt');
    let prokryt = document.querySelector('.gallery-prokryt .prokryt');
    
    //Перемещение мышки у полоски
    let lastXmouse;       
    prokryt.addEventListener('mousedown', function(event) {
        if (event.which == 1) {
            lastXmouse = event.clientX;
            addEventListener("mousemove", movedMouse);       
        }
    });
    //Событие постояное перемещение 
    function movedMouse(event) {
        if (event.which != 1) {
            removeEventListener("mousemove", movedMouse);
        } else {
            lastXmouse = event.clientX;
            border_moved();
            onGalleryBottom();
        }
    }
    
    
    //Границы перемещения полоски 
    
    
    let paddingPoloski = 5;
    let lastPosit = paddingPoloski;
    function border_moved() {
        lastPosit = lastXmouse - gallery_prokryt.offsetLeft - prokryt.offsetWidth/2;
    
        if (lastPosit > gallery_prokryt.offsetWidth - prokryt.offsetWidth - paddingPoloski) {
            lastPosit = gallery_prokryt.offsetWidth - prokryt.offsetWidth - paddingPoloski;              
            prokryt.style.left = lastPosit + 'px';
        } else if (lastPosit < paddingPoloski) {
            lastPosit = paddingPoloski;
            prokryt.style.left = paddingPoloski + 'px';
        } else {
            prokryt.style.left = lastPosit + 'px';
        }
        // console.log(lastPosit); 
    }
    
    let galleryBottomUl = document.querySelector('.container-gallery-bottom ul');
    
    
    //Создание li для галерии gallery-bottom ul.active
    for(let i = 1; i<=count; i++) {
        let creatLi = document.createElement("li");
        creatLi.style.backgroundImage = `url(${arrayImg[i-1]})`;
        let a = document.createElement("a");
        
        a.innerHTML = i;
        creatLi.appendChild(a);
        galleryBottomUl.appendChild(creatLi);
    }
    
    let liGalleryBottom = document.querySelectorAll('.container-gallery-bottom ul li');
    liGalleryBottom[0].classList.add('active');
    
    
    //Функция перемещения галереи в стилях
    let activeLi = 4;
    let galleryCount = liGalleryBottom.length;
    // console.log(galleryCount);
    
    function onGalleryBottom() {
        let sas = lastPosit - paddingPoloski;
        // console.log(active);
        // console.log(sas);
        // let checkLeft = sas / ((galleryCount-activeLi)*((liGalleryBottom[0].offsetWidth+liMarginGallery)*(galleryCount-activeLi)/gallery_prokryt.offsetWidth));
        let checkLeft = (sas - (galleryCount-activeLi)/(galleryBottomUl.offsetWidth - gallery_prokryt.offsetWidth)) * ((galleryCount-activeLi)/(activeLi-1)); 
        let rounds = Math.round(checkLeft);
        console.log(rounds);
        galleryBottomUl.style.transform = 'translate3d(-' + rounds + 'px, 0px, 0px)';
    }
    
    //Функции взаимосвязи галереии с кнопками
    function gallery_bottom() {
    
        let lastActiveGallery = document.querySelector('.container-gallery-bottom ul li.active');
        lastActiveGallery.classList.remove('active');
        liGalleryBottom[active-1].classList.add('active');           
        // onGalleryBottom();
    }
    
    liGalleryBottom.forEach((li, key) => {
        li.addEventListener('click', function() {
            active = key+1;
            
            gallery_buttons();
        })
    })



})();   

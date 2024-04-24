

(async () => {

    const files = await fetch('./datte.xml')
        .then(response => response.text())
        .then(data => {
            return data    
        })
        .catch(console.error);
    
    const parser=new DOMParser();
    const xmlDocument=parser.parseFromString(files, "text/xml");

    let blocks = Array.from(xmlDocument.querySelectorAll("book"));

    // Первый блок gridScroll
    // Первый блок gridScroll
    // Рекомендации
    let ulOne = document.querySelector('.One ul.itemList');
    let arrayBuy = ['01','10','05','06','11','15','12','13','19','07','18','14'];
    
    function elemCreate(element, elementTage) {
        let tagNameImg = document.createElement('img');

        tagNameImg.src = element.querySelector('srcImage').innerHTML + element.querySelector('id').innerHTML + '.jpg';
        elementTage.append(tagNameImg);
                
        let tagNameP = document.createElement('p');
        tagNameP.className = 'name';
        tagNameP.innerHTML = element.querySelector('NAME').innerHTML;
        elementTage.append(tagNameP);

        let tagNameSpan= document.createElement('span');
        tagNameSpan.className = 'price';
        tagNameSpan.innerHTML = element.querySelector('price').innerHTML + ' ₽';
        elementTage.append(tagNameSpan);
    }

    blocks.forEach(element => {
            let id = element.querySelector('id').innerHTML;

            if (arrayBuy.find( item => item === id)) {
                let li = document.createElement('li');
                let a = document.createElement('a');
                a.href = "prosmotr.html?&"+id;
                        
                // console.log(id);
                elemCreate(element,a);

                li.append(a);
                ulOne.append(li);
                console.log(element);
        
            }                      
    });



    function scriptGridSlaider() {
        let itemList = document.querySelector('.gridScroll.One .itemList');
        let itemsLi = document.querySelectorAll('.gridScroll.One  .itemList li');

        
        let prevList = document.querySelector('.gridScroll.One #prevList');
        let nextList = document.querySelector('.gridScroll.One #nextList');

        let activeLi = 0;
        let lengthItemsLi = itemsLi.length - 6-3;

        console.log(lengthItemsLi);

        nextList.onclick = function() {
            if (activeLi + 1 > lengthItemsLi) {
                activeLi = 0;

            }else {
                activeLi = activeLi + 1;
            }
            // console.log(activeLi);
            
            reloadSliderLi();
        }

        prevList.onclick = function() {
            if (activeLi - 1 < 0) {
                activeLi = lengthItemsLi;

            }else {
                activeLi = activeLi - 1;
            }
            
            reloadSliderLi();
        }

        let refreshSliderLi = setInterval(() => {nextList.click()}, 3000);

        function reloadSliderLi() {
            let checkLeft = (itemsLi[0].offsetWidth + 80)*activeLi;
            itemList.style.transform =  'translate3d(-' + checkLeft + 'px, 0px, 0px)';

            clearInterval(refreshSliderLi);
            refreshSliderLi = setInterval(() => {nextList.click()}, 3000);
        }

    }
    scriptGridSlaider();


    //Второй блок grid
    //Второй блок grid
    // Симуляторы
    let ulTwo = document.querySelector('.Two ul.itemList');
    let arrayBuyTwo = ['01','03','08','09','12','15','17','19','20'];

    blocks.forEach(element => {
        let id = element.querySelector('id').innerHTML;

        if (arrayBuyTwo.find( item => item === id)) {
            let li = document.createElement('li');
            let a = document.createElement('a');
            a.href = "prosmotr.html?&"+id;
                    
            // console.log(id);
            elemCreate(element,a);

            li.append(a);
            ulTwo.append(li);
            console.log(element);
    
        }                      
    });

    function scriptGridSlaiderTwo() {
        let itemList = document.querySelector('.gridScroll.Two .itemList');
        let itemsLi = document.querySelectorAll('.gridScroll.Two  .itemList li');

        
        let prevList = document.querySelector('.gridScroll.Two #prevList');
        let nextList = document.querySelector('.gridScroll.Two #nextList');

        let activeLi = 0;
        let lengthItemsLi = itemsLi.length -3;

        console.log(lengthItemsLi);

        nextList.onclick = function() {
            if (activeLi + 1 > lengthItemsLi) {
                activeLi = 0;

            }else {
                activeLi = activeLi + 1;
            }
            // console.log(activeLi);
            
            reloadSliderLi();
        }

        prevList.onclick = function() {
            if (activeLi - 1 < 0) {
                activeLi = lengthItemsLi;

            }else {
                activeLi = activeLi - 1;
            }
            
            reloadSliderLi();
        }

        let refreshSliderLi = setInterval(() => {prevList.click()}, 3000);
        
        function reloadSliderLi() {
            let checkLeft = (itemsLi[0].offsetWidth + 80)*activeLi;
            itemList.style.transform =  'translate3d(-' + checkLeft + 'px, 0px, 0px)';

            clearInterval(refreshSliderLi);
            refreshSliderLi = setInterval(() => {prevList.click()}, 3000);
        }

    }
    scriptGridSlaiderTwo();

    //Третий блок grid
    //Третий блок grid
    // Симуляторы

    let ulThree = document.querySelector('.Three ul.itemList');
    let arrayBuyThree = ['01','05','09','13','14','17','16','04','20'];

    blocks.forEach(element => {
        let id = element.querySelector('id').innerHTML;

        if (arrayBuyThree.find( item => item === id)) {
            let li = document.createElement('li');
            let a = document.createElement('a');
            a.href = "prosmotr.html?&"+id;
                    
            // console.log(id);
            elemCreate(element,a);

            li.append(a);
            ulThree.append(li);
            console.log(element);
    
        }                      
    });

    //Четвертый блок grid
    //Четвертый блок grid
    // Приключенческие игры
    let ulThour = document.querySelector('.Thour ul.itemList');
    let arrayBuyThour = ['02','04','05','06','07','11','13','14','15','16','18'];
    blocks.forEach(element => {
        let id = element.querySelector('id').innerHTML;

        if (arrayBuyThour.find( item => item === id)) {
            let li = document.createElement('li');
            let a = document.createElement('a');
            a.href = "prosmotr.html?&"+id;
                    
            // console.log(id);
            elemCreate(element,a);

            li.append(a);
            ulThour.append(li);
            console.log(element);
        }                      
    });

    function scriptGridSlaiderThour() {
        let itemList = document.querySelector('.gridScroll.Thour .itemList');
        let itemsLi = document.querySelectorAll('.gridScroll.Thour  .itemList li');

        
        let prevList = document.querySelector('.gridScroll.Thour #prevList');
        let nextList = document.querySelector('.gridScroll.Thour #nextList');

        let activeLi = 0;
        let lengthItemsLi = itemsLi.length -3;

        console.log(lengthItemsLi);

        nextList.onclick = function() {
            if (activeLi + 1 > lengthItemsLi) {
                activeLi = 0;

            }else {
                activeLi = activeLi + 1;
            }
            // console.log(activeLi);
            
            reloadSliderLi();
        }

        prevList.onclick = function() {
            if (activeLi - 1 < 0) {
                activeLi = lengthItemsLi;

            }else {
                activeLi = activeLi - 1;
            }
            
            reloadSliderLi();
        }

        let refreshSliderLi = setInterval(() => {nextList.click()}, 3000);
        
        function reloadSliderLi() {
            let checkLeft = (itemsLi[0].offsetWidth + 80)*activeLi;
            itemList.style.transform =  'translate3d(-' + checkLeft + 'px, 0px, 0px)';

            clearInterval(refreshSliderLi);
            refreshSliderLi = setInterval(() => {nextList.click()}, 3000);
        }

    }
    scriptGridSlaiderThour();
})();
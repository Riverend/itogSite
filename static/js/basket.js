

(async () => {

    let basketBotton = document.querySelector('.optinFront .basketBotton');
    let basketDropDown = document.querySelector('.basket');



    basketBotton.addEventListener('click', function (event){
        console.log('нажал');
        basketDropDown.classList.toggle('openBlock');
    })

    
    let arrayBuy = ['01','10','05','06'];

    const files = await fetch('./datte.xml')
        .then(response => response.text())
        .then(data => {
            return data    
        })
        .catch(console.error);
    
    const parser=new DOMParser();
    const xmlDocument=parser.parseFromString(files, "text/xml");  
    let blocks = Array.from(xmlDocument.querySelectorAll("book"));
    
    
    let sum = 0;
    let basketItems = document.querySelector("ul.basketItems");

    function elemCreate(element, elementTage) {
        let tagNameA = document.createElement('a');
        tagNameA.href = 'prosmotr.html?&' + element.querySelector('id').innerHTML;
        tagNameA.style.backgroundImage = 'url(' + element.querySelector('srcImage').innerHTML + element.querySelector('id').innerHTML + '.jpg' + ')';
        elementTage.append(tagNameA);

        let h3 = document.createElement('h3');
        h3.className = "description";
        h3.innerHTML = element.querySelector('NAME').innerHTML;
        elementTage.append(h3);

        let span = document.createElement('span');
        span.className = "InfoBuy";
        span.innerHTML = element.querySelector('price').innerHTML + ' ₽';
        elementTage.append(span);
    }

    blocks.forEach(element => {
        let sa = element.querySelector('id').innerHTML;
        
        if (arrayBuy.find( item => item === sa)) {
            let li = document.createElement('li');
            elemCreate(element,li);
            
            basketItems.append(li);
            console.log(element);
            sum += parseInt(element.querySelector('price').innerHTML);
            console.log();
        }
    });
    
    let sumDiv = parseInt(document.querySelector(".InfoBuy").innerHTML);
    
    let sumbuy = document.querySelector(".sumbuy");
    sumbuy.innerHTML = sum + sumDiv + ' ₽';
})();
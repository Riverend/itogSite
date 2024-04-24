

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

    let ul = document.querySelector('ul.itemList');
    let arrayBuy = ['01','10','05','06'];
    
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
                        
                console.log();
                elemCreate(element,a);

                li.append(a);
                ul.append(li);
                console.log(element);
        
            }                      
    });

    function reloadScript() {
        let script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = "static/js/scriptGridSlider.js";
        document.querySelector('body').append(script);
    }
    reloadScript();

})();
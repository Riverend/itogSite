           
(async () => {
           
    let ul = document.querySelector('ul.items');

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
        let li = document.createElement('li');
        let a = document.createElement('a');
        a.href = "prosmotr.html?&"+element.querySelector('id').innerHTML;
                
        console.log();
        elemCreate(element,a);

        li.append(a);
        ul.append(li);
        console.log(element);

                
    });
                       
            
                     
})();           

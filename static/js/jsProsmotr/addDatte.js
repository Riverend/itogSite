           
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
            
    //Взятие с url числа
    let score = decodeURIComponent(location.search).split('&');
    score.splice(0, 1);
    let result = score[0];

    let mediaTegs = document.querySelector('.media_Tegs');
    
    function addTeg(teg) {
        let a = document.createElement('a');
        a.className = 'media_Tegs_Item';
        a.href = '#';
        a.innerHTML = teg;
        mediaTegs.append(a);
        console.log(teg);
    }
            
    blocks.forEach(element => {
        if (element.querySelector('id').innerHTML == result) {
            console.log(element);

            let name = document.querySelector('.mediaName h1');
            name.innerHTML = element.querySelector('NAME').innerHTML;

            let price = document.querySelector('.media-price p');
            price.innerHTML = '₽ ' + element.querySelector('price').innerHTML;

            let vebSite = document.querySelector('.veb-site');
            vebSite.href = element.querySelector('urlVebSite').innerHTML;

            let mediaInfoValues = document.querySelectorAll('.media-Info-Value');
            mediaInfoValues[0].innerHTML = element.querySelector('platform').innerHTML;
            mediaInfoValues[1].innerHTML = element.querySelector('razrabot').innerHTML;
            mediaInfoValues[2].innerHTML = element.querySelector('izdat').innerHTML;

            let BDtegsAll = element.querySelector('tegs').innerHTML; 
            
            let arrayTegs = BDtegsAll.split(',');
            
            arrayTegs.forEach(teg => {
                addTeg(teg.replace(/'/g, ''));
            })

            let description = document.querySelector('.media_Description p');
            description.innerHTML = element.querySelector('description').innerHTML;
        }
    });
                       
            
                     
})();           

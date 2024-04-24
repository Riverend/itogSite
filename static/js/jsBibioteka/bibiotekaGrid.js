

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

    let ulgridGame = document.querySelector('.gridGame ul');
    let arrayBibioteka= ['01','10','05','06'];
    
    function elemCreate(element, elementTage) {

        let divOne = document.createElement('div');
        let a = document.createElement('a');
        a.href = "prosmotr.html?&"+element.querySelector('id').innerHTML;
        let tagNameImg = document.createElement('img');
        tagNameImg.src = element.querySelector('srcImage').innerHTML + element.querySelector('id').innerHTML + '.jpg';
        
        a.append(tagNameImg);
        divOne.append(a);
        elementTage.append(divOne);
                

        let divDescription = document.createElement('div');
        divDescription.className = 'description';
        let h3 = document.createElement('h3');
        h3.innerHTML = element.querySelector('NAME').innerHTML;
        divDescription.append(h3);
        let p= document.createElement('p');
        p.innerHTML = element.querySelector('description').innerHTML;
        divDescription.append(p);

        let divDopInform = document.createElement('div');
        divDopInform.className = 'dopInform';
        let spanVozr = document.createElement('span');
        spanVozr.innerHTML = 'Возрастное ограничение: 16+';
        divDopInform.append(spanVozr);
        let spanLibBibioteka = document.createElement('span');
        spanLibBibioteka.className = 'libBibioteka';
        spanLibBibioteka.innerHTML = 'Убрать с библиотеки';
        divDopInform.append(spanLibBibioteka);
        divDescription.append(divDopInform);

        elementTage.append(divDescription);
    }

    blocks.forEach(element => {
            let id = element.querySelector('id').innerHTML;

            if (arrayBibioteka.find( item => item === id)) {
                let li = document.createElement('li');

                // a.href = "prosmotr.html?&"+id;
                        
                
                elemCreate(element,li);

                
                ulgridGame.append(li);
                console.log(element);
        
            }                      
    });

})();
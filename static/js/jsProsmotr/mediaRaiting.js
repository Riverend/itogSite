let spans = document.querySelectorAll('.media-raiting-person span')
console.log(spans);

for(i=0;i<spans.length;i++) {
    spans[i].onmouseover=hoverStar;
}

function hoverStar() {
    for(i=0;i<this.id.charAt(5);i++) {
        spans[i].innerText='⭐';
    }
    for(i=this.id.charAt(5);i<5;i++) {
        spans[i].innerText='✰';
    }
}

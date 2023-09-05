const btn = document.getElementById('btn');
const colorText = document.querySelector('.color');

const hex = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']
btn.addEventListener('click',callback);

function callback(){
    const hexcolor = generateColor();
    colorText.textContent = hexcolor;
    document.body.style.backgroundColor = hexcolor;
}

function generateColor(){
    let hexColor = '#';
    for(let i =0;i<6;i++){
        hexColor +=hex[Math.floor(Math.random()*hex.length)];
    }

    return hexColor;
}
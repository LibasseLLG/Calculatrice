const touches =[...document.querySelectorAll('.button')] ;
const listKeycode = touches.map(touche => touche.dataset.key);
console.log(listKeycode)
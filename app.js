let aZGray=document.querySelector(".az-gray");
let aZBlack=document.querySelector(".az-black");
console.log(aZGray.classList)
aZGray.addEventListener("mouseover",()=>{
    aZGray.classList.toggle('black-gray');
    aZBlack.classList.toggle('black-gray')
})
aZGray.addEventListener("mouseout",()=>{
    aZGray.classList.toggle('black-gray');
    aZBlack.classList.toggle('black-gray')
})
let clearGray=document.querySelector(".clear-gray");
let clearBlack=document.querySelector(".clear-black");
clearGray.addEventListener("mouseover",()=>{
    clearGray.classList.toggle('clear');
    clearBlack.classList.toggle('clear');
})
clearGray.addEventListener("mouseout",()=>{
    clearGray.classList.toggle('clear');
    clearBlack.classList.toggle('clear');
})
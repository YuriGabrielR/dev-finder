let btnMenu = document.querySelector('.menu-mobile'); 
let menuMobile = document.querySelector('.list-nav'); 

btnMenu.addEventListener('click',(e)=>{
    e.preventDefault(); 
    btnMenu.classList.toggle('active');
    menuMobile.classList.toggle('active');

})
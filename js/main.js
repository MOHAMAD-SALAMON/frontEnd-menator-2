const menu = document.querySelector('.menu'),
closeMenu = document.querySelector('.close-menu'),
mobileView = document.querySelector('header'),
bgAct=document.querySelector('.bg-not-act');

menu.addEventListener('click', ()=>{
    mobileView.classList.add('small-screen')
    bgAct.classList.add('bg-dark-nav')
})
closeMenu.addEventListener('click', ()=>{
    mobileView.classList.remove('small-screen')
    bgAct.classList.remove('bg-dark-nav')
})
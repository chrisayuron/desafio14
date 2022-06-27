const shareBtn = document.querySelector('.card__content__button');
const socialIcons=document.querySelector('.card__content__social-icons');
shareBtn.addEventListener('click',()=>{
    socialIcons.classList.toggle('show')
})

/* Este evento detecta el movimiento del ratón sobre un elemento y llama
a la clase show y se la agrega a la clase card__content__social-icons
shareBtn.addEventListener('mouseover',function(){
    let mostrar = document.querySelector('.card__content__social-icons')
    mostrar.classList.toggle('show')
})*/    

/* Este evento detecta el movimiento del ratón cuando sale de un elemento y llama
a la clase show y si el element la tiene se la quita a la clase card__content__social-icons
shareBtn.addEventListener('mouseout',function(){
    let mostrar = document.querySelector('.card__content__social-icons')
    mostrar.classList.toggle('show')
})   */


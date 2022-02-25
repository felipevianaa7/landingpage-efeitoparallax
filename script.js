let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains_behind = document.getElementById('mountains_behind');
let mountains_front = document.getElementById('mountains_front');
let texto = document.getElementById('texto');
let btn = document.getElementById('btn');
let header = document.querySelector('header');

window.addEventListener('scroll', function(){
    let value = window.scrollY; /*Retorna o número de pixels que o documento já rolou verticalmente.*/ 
    stars.style.left = value * 0.25 + 'px';
    moon.style.top = value * 1.05 + 'px';
    mountains_behind.style.top = value * 0.5 + 'px';
    mountains_front.style.top = value * 0 + 'px';
    texto.style.marginRight = value * 4 + 'px';    
    texto.style.marginTop = value * 1.5 + 'px';
    btn.style.marginTop = value * 1.5 + 'px';
    header.style.top = value * 0.5 + 'px';
})
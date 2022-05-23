const botao = document.querySelector('.botao')

var audio = new Audio('/sons/som.mp3');


botao.addEventListener('click', () => {
    audio.play();
})
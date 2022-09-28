

const dino = document.getElementById('dino');
const cactus = document.getElementById('cactus');

document.addEventListener('keydown', function () {
    jump();
})

document.addEventListener('click', function () {
    jump();
})

let jump = () => {
    if (dino.classList != 'jump') {
        dino.classList.add('jump')
    }
    setTimeout(() => {
        dino.classList.remove('jump')
    }, 300);

}

let isAlive = setInterval(() => {
    let dinoStyle = parseInt(window.getComputedStyle(dino).getPropertyValue('top'))
    let cactusStyle = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'))

    if (dinoStyle > 125 && cactusStyle > -5 && cactusStyle < 45) {
        alert('GAME OVER!!!!!!')
    }
}, 10)

score = 0;
cross=true;

audiogo = new Audio('gameover.mp3');
audio = new Audio('music.mp3');
setTimeout(() => {
    audio.play();
}, 1000);


document.onkeydown = function(e){
    console.log("Key code is: ", e.keyCode);
    if(e.keyCode==38){
        dino=document.querySelector('.dino');
        dino.classList.add('animateDino');
        setTimeout(() => {
            dino.classList.remove('animateDino');
        }, 700);
    }
    if(e.keyCode==39){
        dino=document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = dinoX  + 112 + "px";
    }
    if(e.keyCode==37){
        dino=document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = (dinoX  - 112) + "px";
    }
}

setInterval(() => {
    dino=document.querySelector('.dino');
    gameOver = document.querySelector('.gameOver');
    obstacle = document.querySelector('.obstacle');

    dx= parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    dy= parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));

    ox= parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy= parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    offsetX = Math.abs(dx-ox);
    offsetY = Math.abs(dy-oy);

    if(offsetX <63 && offsetY<52){
        gameOver.innerHTML = "Game Over - Reload to play again";
        obstacle = document.querySelector('.obstacle');
        obsX = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('visibility'));
        setTimeout(() => {
            obstacle.style.visibility= hidden;
        }, 5000);
        obstacle.classList.remove('obstacleAni');
        audiogo.play();
        setTimeout(() => {
            audiogo.pause();
            audio.pause();
        }, 1000);
    }
    else if(offsetX<45 & cross){
        score+=50;
        updateScore(score);
        cross=false;
        setTimeout(() => {
            cross=true
        }, 1000);
        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-Duration'));
            newDur= aniDur-0.2;
            obstacle.style.animationDuration = newDur + 's';
        }, 600);
    }

}, 10);

function updateScore(score){
    scorecont.innerHTML = "Your Score: "+ score;
}
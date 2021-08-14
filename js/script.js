const cards = document.querySelectorAll('.card');
let hasFlippedCard = false;
let firstCard, secondCard;
let lockBoard = false;
let cont = 0;

function flipCard(){
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add('flip');
    if (!hasFlippedCard){
        hasFlippedCard = true;
        firstCard = this;
        return;
    }

    secondCard = this;
    hasFlippedCard = false;
    checkForMath();
}

cards.forEach((card) =>{
    card.addEventListener('click', flipCard)
})

function checkForMath(){
    if (firstCard.dataset.card === secondCard.dataset.card){
        disableCards();
        cont += 1;
        console.log(cont);
        if (cont == 7){
            setTimeout (alert ("Parabéns! Pressione F5 para jogar novamente."), 1000);
        }
        return;
    }

    unflipCards();
}

function disableCards(){
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    resetBoard();
}

function unflipCards(){
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        resetBoard();
    }, 1500);
}

function resetBoard(){
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

(function shuffle(){
    alert("Bem vindo ao Jogo da Memória Musical!");
    cards.forEach((card) => {
        let randomPosition = Math.floor(Math.random() * 14);
        card.style.order = randomPosition;
    })
})();


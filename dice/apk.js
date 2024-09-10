var score, roundScore, activePlayer, dice1, dice2, dom1, dom2, nowPlaying;
init();

function setUpEvent() {
    document.getElementById('btn-roll').addEventListener('click', gameStart);
    document.getElementById('btn-hold').addEventListener('click', hold);
    document.getElementById('btn-new').addEventListener('click', init)
}


function gameStart() {
    if (nowPlaying) {
        dice1 = Math.floor(Math.random() * 6) + 1;
        dice2 = Math.floor(Math.random() * 6) + 1;
        dom1 = document.getElementById('dice-0');
        dom2 = document.getElementById('dice-1');
        dom1.style.display = 'block'
        dom2.style.display = 'block'
        dom1.src = 'image/dice-' + dice1 + '.png';
        dom2.src = 'image/dice-' + dice2 + '.png';

        if (dice1 !== 1 && dice2 !== 1) {
            roundScore += dice1 + dice2;
            document.getElementById('current-' + activePlayer).textContent = roundScore;


        } else {
            nextPlayer();
        }
    }

}

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    document.getElementById('player-0').classList.toggle('player__color-toggle')
    document.getElementById('player-1').classList.toggle('player__color-toggle')
    roundScore = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
}


function hold() {
    if (nowPlaying) {
        score[activePlayer] += roundScore;
        document.getElementById('score-' + activePlayer).textContent = score[activePlayer];
        if (score[activePlayer] >= 20) {
            document.getElementById('name-' + activePlayer).textContent = 'WINNER!';
            document.getElementById('name-' + activePlayer).style.color = 'white'
            document.getElementById('name-' + activePlayer).classList.add('player__winner');
            document.getElementById('player-' + activePlayer).classList.add('player__color-winner');
            document.getElementById('final').textContent = score[activePlayer];
            document.getElementById('final').style.backgroundColor = 'green';
            nowPlaying = false;
        } else {
            nextPlayer();
        }
    }

}


function init() {
    nowPlaying = true;
    score = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    document.getElementById('final').textContent = 0;
    document.getElementById('final').style.backgroundColor = 'orangered';
    document.getElementById('score-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    document.getElementById('dice-0').style.display = 'none';
    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('player-1').classList.remove('player__color-toggle')
    document.getElementById('player-0').classList.remove('player__color-toggle')
    document.getElementById('player-0').classList.add('player__color-toggle')
    document.getElementById('name-0').textContent = 'PLAYER 1';
    document.getElementById('name-1').textContent = 'PLAYER 2';
    document.getElementById('name-0').style.color = 'black'
    document.getElementById('name-1').style.color = 'black'
    document.getElementById('name-1').classList.remove('player__winner');
    document.getElementById('name-0').classList.remove('player__winner');
    document.getElementById('player-0').classList.remove('player__color-winner')
    document.getElementById('player-1').classList.remove('player__color-winner')
}
var start = function() {
    setUpEvent()
    console.log('it has started');
}
start();
var score, roundScore, activePlayer;
init();



document.getElementById('btn-roll').addEventListener('click', function(){
     if (nowPlaying) {
        var dice1 = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;


        document.getElementById('dice-1').style.display = 'block';
        document.getElementById('dice-2').style.display = 'block';
        document.getElementById('dice-1').src = 'image/dice-'  + dice1 + '.png'
        document.getElementById('dice-2').src = 'image/dice-'  + dice2 + '.png'

        if (dice1 === 6 && dice2 === 6) {
            //player looses score
            score[activePlayer] = 0;
            document.getElementById('score-' + activePlayer).textContent = '0';
            nextPlayer();

        }else if (dice1 !==1 && dice2 !==1) {
            roundScore += dice1 + dice2;
            document.getElementById('current-' + activePlayer).textContent = roundScore;
        } else {
            nextPlayer();
                
        }
  
     }
   

})
document.getElementById('btn-hold').addEventListener('click', function(){
    if (nowPlaying) {
        score[activePlayer] += roundScore;
    document.getElementById('score-' + activePlayer).textContent = score[activePlayer];
    

    
    var input = document.getElementById('final').value;
    var winningScore;
    if (input) {
        winningScore = input;
    } else {
        winningScore = 30;

    }

    if (score[activePlayer] >= winningScore) {
        document.getElementById('dice-1').style.display = 'none';
        document.getElementById('dice-2').style.display = 'none';
        document.getElementById('name-' + activePlayer).textContent = 'winner'
        document.getElementById('name-' + activePlayer).classList.add('panel-name-winner');
        document.getElementById('panel-side-' + activePlayer).classList.remove('panel-side-active');
        document.getElementById('final').textContent = score[activePlayer];

        nowPlaying = false;
    } else {
       nextPlayer();

    }
    }
    
})
function nextPlayer() {
    activePlayer ===0? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('panel-side-0').classList.toggle('panel-side-active');
    document.getElementById('panel-side-1').classList.toggle('panel-side-active');
}
document.getElementById('btn-new').addEventListener('click', init)
function init() {
    score = [0,0];
    roundScore = 0;
    activePlayer = 0;

    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';
    document.getElementById('score-0').textContent ='0';
    document.getElementById('score-1').textContent ='0';
    document.getElementById('current-0').textContent ='0';
    document.getElementById('current-1').textContent ='0';

    document.getElementById('name-0').classList.remove('panel-name-winner');
    document.getElementById('name-1').classList.remove('panel-name-winner');
    document.getElementById('panel-side-0').classList.remove('panel-side-active');
    document.getElementById('panel-side-1').classList.remove('panel-side-active');
    document.getElementById('panel-side-0').classList.add('panel-side-active');
    document.getElementById('final').textContent = 'final score'

    nowPlaying = true;
}

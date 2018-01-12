/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var dice,score = [0,0],tempscore,player=0;
function init(){
	tempscore=0;
	document.getElementById('score-0').textContent=0;
	document.getElementById('score-1').textContent=0;
	document.getElementById('current-0').textContent=0;
	document.getElementById('current-1').textContent=0;

	document.querySelector('.dice').style.display='none';
	document.querySelector('.player-0-panel').classList.remove('active');
	document.querySelector('.player-1-panel').classList.remove('active');
	document.querySelector('.player-0-panel').classList.add('active');
	score = [0,0];
	document.querySelector('#name-0').textContent='Player 1';
	document.querySelector('#name-1').textContent='Player 2';

}
init();

document.querySelector('.btn-roll').addEventListener('click',function (){
	dice=Math.floor(Math.random()*6)+1;
	document.querySelector('.dice').src = 'dice-' + dice + '.png';
	document.querySelector('.dice').style.display='block';

	if (dice !== 1) {
		tempscore+=dice;
		document.querySelector('#current-'+player).textContent=tempscore;
	}else{
		document.querySelector('.player-0-panel').classList.toggle('active');
		document.querySelector('.player-1-panel').classList.toggle('active');
		player === 0 ? player = 1 : player = 0;
		document.querySelector('#current-0').textContent=0;
		document.querySelector('#current-1').textContent=0;
		tempscore=0;
		document.querySelector('.dice').style.display='none';

	}
});

document.querySelector('.btn-hold').addEventListener('click',function (){
	document.querySelector('.dice').style.display='block';
	score[player]+=tempscore;
	document.querySelector('#score-'+player).textContent=score[player];
	if (score[player]>=50) {
		document.querySelector('#name-'+player).textContent='Winner';
	}
	else{
		document.querySelector('.player-0-panel').classList.toggle('active');
		document.querySelector('.player-1-panel').classList.toggle('active');
		player === 0 ? player = 1 : player = 0;
		document.querySelector('#current-0').textContent=0;
		document.querySelector('#current-1').textContent=0;
		tempscore=0;
		document.querySelector('.dice').style.display='none';
	}
});

document.querySelector('.btn-new').addEventListener('click',init);
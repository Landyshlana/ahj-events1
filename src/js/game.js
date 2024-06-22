import Count from './count';

export default class GoblinClick{
    constructor(){
       this.holes = Array.from(document.querySelectorAll('.hole'));
       this.count = new Count();
       this.currentIndex = null;
       this.interval = null;
    }
  
victoryClick(event) {
	if (!event.target.classList.contains('goblin')) {
		return;
	}
	this.count.increaseVictory();
	event.target.removeEventListener('click', this.victoryClick);
	if (this.count.countVictory === 10) {
		alert ("победа");
		this.closeGame();
	}
	document.querySelector('.goblin').remove();
	clearInterval(this.interval);
	this.punshGoblin();
}

punshGoblin() {
	
	if (document.querySelector('.goblin')) {
		document.querySelector('.goblin').remove();
		this.count.increaseDefeat();
		clearInterval(this.interval);
		if (this.count.countDefeat === 5) {
			alert ("поражение");
			this.closeGame();
		}
	}

	let randomIndex = Math.floor(Math.random() * this.holes.length);
	while (randomIndex === this.currentIndex) {
		randomIndex = Math.floor(Math.random() * this.holes.length);
	}
	let randomHole = this.holes[randomIndex];
	this.currentIndex = randomIndex;
	const goblin = document.createElement('div');
	goblin.classList.add('goblin');
	randomHole.appendChild(goblin);
	goblin.addEventListener('click', this.victoryClick.bind(this));
	this.interval = setInterval(this.punshGoblin.bind(this), 2000);
}
closeGame() {
	this.count.countDefeat = 0;
	this.count.defeat.innerText = 0;
	this.count.countVictory = 0;
	this.count.victory.innerText = 0;
}
}
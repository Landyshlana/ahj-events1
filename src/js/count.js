export default class Count {
	constructor() {
		this.countDefeat = 0;
		this.countVictory = 0;
		this.defeat = document.querySelector(".defeat");
		this.victory = document.querySelector(".victory");
	}
	increaseDefeat() {
		countDefeat++;
		defeat.innerText = countDefeat;
	}

	increaseVictory() {
		countVictory++;
		victory.innerText = countVictory;
	}
}
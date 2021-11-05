
class MyMorpionXO {

	constructor(){
		this.el = document.querySelector("#app");
		this.currentPlayer = "X";
		this.score = {
			"X": 0,
			"O": 0
		};
		this.game();
	}

	game(){
		this.grille = [
			[null,null,null],
			[null,null,null],
			[null,null,null]
		];

		const table = document.querySelector("table");
		const title = document.querySelector(".title");
		const win = document.querySelector(".win");
		const score = document.querySelector(".score");
		const btnTry = document.querySelector('.btnTry');

		if (table !== null) {
			this.el.removeChild(table);
			this.el.removeChild(btnTry);
			this.el.removeChild(win);
			this.el.removeChild(score);
			this.el.removeChild(title);
		}
		
		this.render()
	}

	handleClickCell(e){
		let el = e.currentTarget;

		el.onclick = null;
		el.textContent = this.currentPlayer

		this.grille[el.dataset.y][el.dataset.x] = this.currentPlayer;
		this.currentPlayer = (this.currentPlayer == "X") ? "O" : "X";

		let winner = this.winGame();
		let completedGride = this.grid();

		if (winner !== null) {
			this.win.textContent =`Le joueur ${winner} à gagné`;
			this.score[winner] ++;
		}

		if (completedGride == 1) {
			this.win.innerText = "Il y'a égalité!"
		}

		if(winner !== null || completedGride){
			this.restartGame();
		}
	}

	winGame(){
		
		for(let i = 0; i < 3; i++){
			if(this.grille[i][0] !== null && this.grille[i][0] == this.grille[i][1] && this.grille[i][1] == this.grille[i][2])
				return this.grille[i][0]
			if(this.grille[0][i] !== null && this.grille[0][i] == this.grille[1][i] && this.grille[0][i] == this.grille[2][i])
				return this.grille[0][i]
		}
		if(this.grille[1][1] !== null){
			if(this.grille[0][0] == this.grille[1][1] && this.grille[1][1] == this.grille[2][2])
				return this.grille[1][1]
			if(this.grille[0][2] == this.grille[1][1] && this.grille[1][1] == this.grille[2][0])
				return this.grille[1][1]
		}
		return null

	}

  	grid(){
		for (let i = 0; i < 3; i++) {
			for (let j = 0; j < 3 ; j++) {
				if (this.grille[i][j] === null)
				{
					return 0
				}
			}
		}

		return 1
	}

	restartGame(){
		const cases = document.querySelectorAll('td');
		cases.forEach(ccase => ccase.onclick = null);

		const restart = document.createElement("button");
		restart.setAttribute('class', 'btnTry');

		restart.textContent = "Restart Game";
		this.el.appendChild(restart);

		restart.addEventListener('click', () => this.game());
		
	}

  	render(){
		const title = document.createElement('h1');
		const win = document.createElement("p");
		const table = document.createElement("table");
		const scores = document.createElement('p');

		// Ajout des attributs
		
		title.setAttribute('class','title');
		win.setAttribute('class', 'win');
		scores.setAttribute('class','score');

		// Ajout des textes
		title.textContent = "Tic Tac Toe";
		scores.textContent = `Player X : ${this.score["X"]} || Player O : ${this.score["O"]}`;

		this.win = win;
		this.scores = scores;
		
		for(let y = 0; y < 3; y++){
			let line = document.createElement("tr")
			table.appendChild(line)
			for(let x =0; x < 3; x++){
				let ccase = document.createElement("td")
				line.appendChild(ccase)
				ccase.dataset.x = x
				ccase.dataset.y = y
				ccase.onclick = this.handleClickCell.bind(this)
			}
		}

		
		
		this.el.appendChild(title);
		this.el.appendChild(scores);
		this.el.appendChild(table);
		this.el.appendChild(win);
	}
}

const morpion = new MyMorpionXO();
class Battleship {

	constructor(matrice) {
		 this.el = document.querySelector("#app");
		 this.matrice= matrice;

		 this.row = ['','a','b','c','d','e','f','g','h','i','j','k','l'];
         this.column = [' 1 ', ' 2 ', ' 3 ', ' 4 ', ' 5 ', ' 6', ' 7 ', ' 8 ', ' 9 ', ' 10 ', ' 11 ', ' 12 '];
         this.matrice.unshift(this.column);

		 for (let x in matrice) {
			this.matrice[x].unshift(this.row[x]);
	   	 }

		 this.run();
	}

	render() {
		const box = document.createElement('div');
		const box2 = document.createElement('div');
		const box3 = document.createElement('div');
		const repport = document.createElement('ul');
		const title_h1 = document.createElement('h1');
		const title_h2 = document.createElement('h2');
		const table = document.createElement('table');

		box.setAttribute('class', 'box');
		box2.setAttribute('class', 'box2');
		box3.setAttribute('class', 'box3');

		repport.setAttribute('class', 'repport');
		title_h1.textContent = 'Bataille navale';
		title_h2.textContent = 'Rapport de combat :';

		box2.appendChild(table);
		box3.appendChild(title_h2)
		box3.appendChild(repport)
		box.appendChild(box2);
		box.appendChild(box3);

		this.el.appendChild(title_h1)
		this.el.appendChild(box);
		

		for (let i = 0; i < this.matrice.length; i += 1) {
			const tr = document.createElement('tr');
			table.appendChild(tr);

			for (let j = 0; j < this.matrice[i].length; j++) {
				const td = document.createElement('td');

				   	if (this.matrice[i][j] == '0' || this.matrice[i][j] == '1' ||this.matrice[i][j] == '2' ||this.matrice[i][j] == '3' ||this.matrice[i][j] == '4' || this.matrice[i][j] == '5') {
						td.dataset.id = this.matrice[i][j]
				   	} else {
						td.textContent = this.matrice[i][j]
				   	}


				   	tr.appendChild(td);
				   
				   
			  	}

			  
		}

		this.game();
	}

	game (){

		/****
		 * Les navires
		 ***/
		let torpillor = [];
		let counterTorpillor = [];
		let croisor = [];
		let aircraftCarrier = [];
		let submarine = [];

		//
		const repport = document.querySelector('.repport');
		const td = document.querySelectorAll('td');
		const mots = ['anéanti', 'abattue', 'effondré', 'caduc'];

		const getRandomInt = (max) =>  {
			return Math.floor(Math.random() * max);
		}
		td.forEach(ccase => {
			ccase.addEventListener("click", (e) => {

				if (e.currentTarget.getAttribute('data-id') == 1) {
					 torpillor.push('1');

					 if (torpillor.length == 2) {
						  let li = document.createElement('li');
						  li.textContent = `Torpilleur ${mots[getRandomInt(4)]}`;
						  repport.appendChild(li);
					 }
				}
				if (e.currentTarget.getAttribute('data-id') == 2) {
					 counterTorpillor.push('2');
					 if (counterTorpillor.length == 3) {
						  let li = document.createElement('li')
						  li.textContent = `Contre - Torpilleur ${mots[getRandomInt(4)]}`;
						  repport.appendChild(li)
					 }
				}
				if (e.currentTarget.getAttribute('data-id') == 3) {
					 croisor.push('3');
					 if (croisor.length == 4) {
						  let li = document.createElement('li')
						  li.textContent = `Croiseur ${mots[getRandomInt(4)]}`;
						  repport.appendChild(li)
					 }
				}
				if (e.currentTarget.getAttribute('data-id') == 4) {
					 aircraftCarrier.push('4');
					 if (aircraftCarrier.length == 5) {
						  let li = document.createElement('li');
						  li.textContent = `Porte Avion ${mots[getRandomInt(4)]}`;
						  repport.appendChild(li)
					 }
				}
				if (e.currentTarget.getAttribute('data-id') == 5) {
					 submarine.push('5');
					 if (submarine.length == 5) {
						  let li = document.createElement('li');
						  li.textContent = `Sous-marin ${mots[getRandomInt(4)]}`;
						  repport.appendChild(li);
					 }
				}
				if (torpillor.length == 2 && counterTorpillor.length == 3 && croisor.length == 4 && aircraftCarrier.length == 5 && submarine.length == 5) {
					setTimeout(() => {
						if (confirm('Félicitation! vous avez gagné')) {
							 this.resetGame();
						}
				   }, 500);
					
				
				}
				if (e.currentTarget.getAttribute('data-id') === '1' || e.currentTarget.getAttribute('data-id') === '2' ||e.currentTarget.getAttribute('data-id') === '3' ||e.currentTarget.getAttribute('data-id') === '4' ||e.currentTarget.getAttribute('data-id') === '5') {
					 e.currentTarget.style.background = "red";

				} else if (e.currentTarget.getAttribute('data-id') == '0') {
					 e.currentTarget.style.background = "black";
				}
		   });
		})
	}

	resetGame() {

		this.el.innerHTML = "";
		this.render();
	}

	run() {
		 this.render()
	}

}

const matrice = [
	[0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0],
	[0, 3, 3, 3, 3, 0, 0, 0, 0, 0, 4, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

const game = new Battleship(matrice);
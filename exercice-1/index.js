// Exercice 0
class GridGenerator {
	constructor(xAxis, yAxis) {
	  this.xAxis = xAxis;
	  this.yAxis = yAxis;
	  this.el = document.querySelector('#app');
  
	  this.run();
	}
  
	getRandomTimer() {
	  return (Math.random() * (2 - 1) + 1) * 1000;
	}
  
	getRandomHexa() {
	  return `#${Math.floor(Math.random()*16777215).toString(16)}`;
	}
  
	render() {
	  const table = document.createElement('table');
	  const title = document.createElement('h1');

	  title.textContent = 'Grid Generator';
	  for (let i = 0; i < this.xAxis; i += 1) {
		const tr = document.createElement('tr');
  
		for (let j = 0; j < this.yAxis; j += 1) {
		  const td = document.createElement('td');
  
		  td.style.padding = "15px";
		  td.style.border = "none";
  
		  setInterval(() => {
			td.style.background = this.getRandomHexa();
		  }, this.getRandomTimer());
  
		  tr.appendChild(td);
		}
  
		table.appendChild(tr);
	  }
	  
	  
	  this.el.appendChild(title);
	  this.el.appendChild(table);
	}
  
	run() {
	  this.render();
	}
}
  
const gridGenerator = new GridGenerator(10, 10);
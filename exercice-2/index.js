class drawBar {
	constructor(sum, nbr){
		this.sum=sum;
		this.nbr=nbr;

		this.el = document.querySelector("#app");
		this.run();
	}

	render (){
		const title = document.createElement('h1');
		const bar = document.createElement("div");
		const jauge = document.createElement("div");
		
		let percent = this.nbr;
		
		if (this.sum > 100){
			percent = this.nbr * 100 / this.sum;
		}

		this.sum = 100;
		
		jauge.style.width = `${percent}%`;
		jauge.style.background = "#ECC842";
		jauge.style.height = "100%";

		bar.style.width = `${this.sum}%`;
		bar.style.height = "25px";
		bar.style.background = "#F5F7F6";

		title.style.color = '#fafafa';
		title.style.fontSize = '1.6rem';
		title.style.fontWeight = '700';
		title.style.marginBottom = '35px';
		title.style.fontFamily = "'verdana', 'sans-serif'"
		title.textContent = 'My Bar';

		this.el.appendChild(title);
		bar.appendChild(jauge);
		this.el.appendChild(bar);
		
	}

	run() {
		this.render();
	}
}

const draw = new drawBar(200, 75);
import P5 from "p5";

const palette = [
	'#613163',
	'#BC87BF',
	'#57AEA5',
	'#ADCFCE',
	'#3985B6',
	'#b22930',
	'#ea5e51',
	'#f9bcbd',
	'#f0f5ee',
	'#a4c196',
]

export default class Parametric {
	p5: P5;
	colors: P5.Color[] = [];

	constructor(p5: P5) {
		this.p5 = p5;

		this.posA = p5.createVector(0,0);
		this.posB = p5.createVector(0,0);
		this.t = 0;
	}

	update() {
	}

	draw() {
		const p5 = this.p5;

		palette.forEach((c,i) => {
			p5.stroke(c);

			const posA = this.getPosA(this.t + i*5);
			const posB = this.getPosB(this.t + i*5);

			p5.line(posA.x, posA.y, posB.x, posB.y);
		});

		this.t = (this.t+1);
	}

	private getPosA(t) {
		const fq = 1/20;
		const am = 90;

		const x = t => {
			const waves =[
				Math.cos(t * fq) * am,
				Math.cos(t * 1/25) * 80,
			];

			return waves.reduce((acc,next) => acc+next);
		}

		const y = t => {
			const waves =[
				Math.sin(t * fq) * 80,
				-Math.cos(t * fq) * am,
			];

			return waves.reduce((acc,next) => acc+next);
		}

		return {
			x: x(t),
			y: y(t)
		};
	}

	private getPosB(t) {
		const fq = 1/20;
		const am = 50;

		const x = t => {
			return Math.sin(t * fq) * 100;
		}

		const y = t => {
			const waves =[
				Math.cos(t * fq) * am,
				Math.cos(t * 1/25) * 50,
			];

			return waves.reduce((acc,next) => acc+next);
		}

		return {
			x: x(t),
			y: y(t)
		};
	}

}

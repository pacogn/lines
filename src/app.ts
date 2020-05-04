import P5 from "p5";
import "p5/lib/addons/p5.dom";
import "./styles.scss";

import Parametric from "./Parametric";

const sketch = (p5: P5) => {
	const parametrinEq: Parametric;

	p5.setup = () => {
		const canvas = p5.createCanvas(500, 500);
		canvas.parent("app");

		this.parametrinEq = new Parametric(p5);

		p5.stroke("black");
		p5.strokeWeight(5);

	};

	p5.draw = () => {
		p5.background("#64538F");
		p5.translate(p5.width/2, p5.height/2)

		this.parametrinEq.update();
		this.parametrinEq.draw();
	};
};

new P5(sketch);

import { IStyler, stylerFactory } from "../core/styler";
import * as ansi from "../ansi";
import { RGB } from "../utils/rgb";
import { hexToRgb } from "../utils/hex";
import { hslToRgb } from "../utils/hsl";
import { hsvToRgb } from "../utils/hsv";

export class Colors {
	get black(): RGB {
		return [0, 0, 0];
	}
	get red(): RGB {
		return [255, 0, 0];
	}
	get green(): RGB {
		return [0, 255, 0];
	}
	get yellow(): RGB {
		return [255, 255, 0];
	}
	get blue(): RGB {
		return [0, 0, 255];
	}
	get magenta(): RGB {
		return [255, 0, 255];
	}
	get cyan(): RGB {
		return [0, 255, 255];
	}
	get white(): RGB {
		return [255, 255, 255];
	}
	get grey(): RGB {
		return [128, 128, 128];
	}
	get orange(): RGB {
		return [255, 165, 0];
	}
}

export const colors = new Colors();

export class ColorFactory {
	constructor(
		private styler: IStyler,
		private colorize: Function,
	) {}

	hsl(h: number, s: number, l: number): IStyler {
		const [begin, end] = this.colorize(hslToRgb(h, s, l));
		if (this.styler.style.begin.length === 0) {
			const res = stylerFactory({ begin: [begin], end: [end] });
			return res;
		} else {
			this.styler.style.begin.push(begin);
			this.styler.style.end.push(end);
			return this.styler;
		}
	}

	hsv(h: number, s: number, v: number): IStyler {
		const [begin, end] = this.colorize(hsvToRgb(h, s, v));
		if (this.styler.style.begin.length === 0) {
			const res = stylerFactory({ begin: [begin], end: [end] });
			return res;
		} else {
			this.styler.style.begin.push(begin);
			this.styler.style.end.push(end);
			return this.styler;
		}
	}

	hex(color: string): IStyler {
		const [begin, end] = this.colorize(hexToRgb(color));
		if (this.styler.style.begin.length === 0) {
			const res = stylerFactory({ begin: [begin], end: [end] });
			return res;
		} else {
			this.styler.style.begin.push(begin);
			this.styler.style.end.push(end);
			return this.styler;
		}
	}

	rgb(color: Array<number> | RGB): IStyler {
		const [begin, end] = this.colorize(color);
		if (this.styler.style.begin.length === 0) {
			const res = stylerFactory({ begin: [begin], end: [end] });
			return res;
		} else {
			this.styler.style.begin.push(begin);
			this.styler.style.end.push(end);
			return this.styler;
		}
	}

	get black(): IStyler {
		const [begin, end] = this.colorize(colors.black);
		if (this.styler.style.begin.length === 0) {
			const res = stylerFactory({ begin: [begin], end: [end] });
			return res;
		} else {
			this.styler.style.begin.push(begin);
			this.styler.style.end.push(end);
			return this.styler;
		}
	}
	get red(): IStyler {
		const [begin, end] = this.colorize(colors.red);
		if (this.styler.style.begin.length === 0) {
			const res = stylerFactory({ begin: [begin], end: [end] });
			return res;
		} else {
			this.styler.style.begin.push(begin);
			this.styler.style.end.push(end);
			return this.styler;
		}
	}
	get green(): IStyler {
		const [begin, end] = this.colorize(colors.green);
		if (this.styler.style.begin.length === 0) {
			const res = stylerFactory({ begin: [begin], end: [end] });
			return res;
		} else {
			this.styler.style.begin.push(begin);
			this.styler.style.end.push(end);
			return this.styler;
		}
	}
	get yellow(): IStyler {
		const [begin, end] = this.colorize(colors.yellow);
		if (this.styler.style.begin.length === 0) {
			const res = stylerFactory({ begin: [begin], end: [end] });
			return res;
		} else {
			this.styler.style.begin.push(begin);
			this.styler.style.end.push(end);
			return this.styler;
		}
	}
	get blue(): IStyler {
		const [begin, end] = this.colorize(colors.blue);
		if (this.styler.style.begin.length === 0) {
			const res = stylerFactory({ begin: [begin], end: [end] });
			return res;
		} else {
			this.styler.style.begin.push(begin);
			this.styler.style.end.push(end);
			return this.styler;
		}
	}
	get magenta(): IStyler {
		const [begin, end] = this.colorize(colors.magenta);
		if (this.styler.style.begin.length === 0) {
			const res = stylerFactory({ begin: [begin], end: [end] });
			return res;
		} else {
			this.styler.style.begin.push(begin);
			this.styler.style.end.push(end);
			return this.styler;
		}
	}
	get cyan(): IStyler {
		const [begin, end] = this.colorize(colors.cyan);
		if (this.styler.style.begin.length === 0) {
			const res = stylerFactory({ begin: [begin], end: [end] });
			return res;
		} else {
			this.styler.style.begin.push(begin);
			this.styler.style.end.push(end);
			return this.styler;
		}
	}
	get white(): IStyler {
		const [begin, end] = this.colorize(colors.white);
		if (this.styler.style.begin.length === 0) {
			const res = stylerFactory({ begin: [begin], end: [end] });
			return res;
		} else {
			this.styler.style.begin.push(begin);
			this.styler.style.end.push(end);
			return this.styler;
		}
	}
	get grey(): IStyler {
		const [begin, end] = this.colorize(colors.grey);
		if (this.styler.style.begin.length === 0) {
			const res = stylerFactory({ begin: [begin], end: [end] });
			return res;
		} else {
			this.styler.style.begin.push(begin);
			this.styler.style.end.push(end);
			return this.styler;
		}
	}
	get orange(): IStyler {
		const [begin, end] = this.colorize(colors.orange);
		if (this.styler.style.begin.length === 0) {
			const res = stylerFactory({ begin: [begin], end: [end] });
			return res;
		} else {
			this.styler.style.begin.push(begin);
			this.styler.style.end.push(end);
			return this.styler;
		}
	}
}

export class Color extends ColorFactory {
	constructor(styler: IStyler) {
		super(styler, ansi.color);
	}
}

export class Background extends ColorFactory {
	constructor(styler: IStyler) {
		super(styler, ansi.background);
	}
}

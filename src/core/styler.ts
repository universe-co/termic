import { colors as Colors, Color, Background } from "../../src/colors";
import * as ansi from "../ansi";

export interface IStyler {
	style: any;
	(text: string): string;
	reset: this;
	bold: this;
	dim: this;
	italic: this;
	underline: this;
	blink: this;
	inverse: this;
	hidden: this;
	crossedout: this;
	color: Color;
	background: Background;
}

class Styler {
	private style: any = { begin: [], end: [] };

	get bold() {
		const [begin, end] = ansi.bold();

		if (this.style.begin.length === 0) {
			const res = stylerFactory({ begin: [begin], end: [end] });
			return res;
		} else {
			this.style.begin.push(begin);
			this.style.end.push(end);
			return this;
		}
	}

	get dim() {
		const [begin, end] = ansi.dim();
		if (this.style.begin.length === 0) {
			const res = stylerFactory({ begin: [begin], end: [end] });
			return res;
		} else {
			this.style.begin.push(begin);
			this.style.end.push(end);
			return this;
		}
	}

	get italic() {
		const [begin, end] = ansi.italic();
		if (this.style.begin.length === 0) {
			const res = stylerFactory({ begin: [begin], end: [end] });
			return res;
		} else {
			this.style.begin.push(begin);
			this.style.end.push(end);
			return this;
		}
	}

	get underline() {
		const [begin, end] = ansi.underline();
		if (this.style.begin.length === 0) {
			const res = stylerFactory({ begin: [begin], end: [end] });
			return res;
		} else {
			this.style.begin.push(begin);
			this.style.end.push(end);
			return this;
		}
	}

	get blink() {
		const [begin, end] = ansi.blink();
		if (this.style.begin.length === 0) {
			const res = stylerFactory({ begin: [begin], end: [end] });
			return res;
		} else {
			this.style.begin.push(begin);
			this.style.end.push(end);
			return this;
		}
	}

	get inverse() {
		const [begin, end] = ansi.inverse();
		if (this.style.begin.length === 0) {
			const res = stylerFactory({ begin: [begin], end: [end] });
			return res;
		} else {
			this.style.begin.push(begin);
			this.style.end.push(end);
			return this;
		}
	}

	get hidden() {
		const [begin, end] = ansi.hidden();
		if (this.style.begin.length === 0) {
			const res = stylerFactory({ begin: [begin], end: [end] });
			return res;
		} else {
			this.style.begin.push(begin);
			this.style.end.push(end);
			return this;
		}
	}

	get crossedout() {
		const [begin, end] = ansi.crossedout();
		if (this.style.begin.length === 0) {
			const res = stylerFactory({ begin: [begin], end: [end] });
			return res;
		} else {
			this.style.begin.push(begin);
			this.style.end.push(end);
			return this;
		}
	}

	get reset() {
		const [begin, end] = ansi.reset();
		if (this.style.begin.length === 0) {
			const res = stylerFactory({ begin: [begin], end: [end] });
			return res;
		} else {
			this.style.begin.push(begin);
			this.style.end.push(end);
			return this;
		}
	}

	get color(): Color {
		return new Color(this as any);
	}

	get background(): Background {
		return new Background(this as any);
	}
}

export const stylerFactory = (style: any = { begin: [], end: [] }) => {
	const f: any = (text: string) => {
		return f.style.begin.join("") + text + f.style.end.reverse().join("");
	};
	Object.setPrototypeOf(f, Styler.prototype);
	return Object.assign(f, { style });
};

export const styler: IStyler = stylerFactory();

export default styler;

import { RGB } from "./rgb";

export function hslToRgb(h: number, s: number, l: number): RGB {
	const a = s * Math.min(l, 1 - l);
	const f = (n: number, k = (n + h / 30) % 12) => l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
	return [f(0), f(8), f(4)];
}

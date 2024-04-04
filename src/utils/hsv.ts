import { RGB } from "./rgb";

export function hsvToRgb(h: number, s: number, v: number): RGB {
	const f = (n: number, k = (n + h / 60) % 6) => v - v * s * Math.max(Math.min(k, 4 - k, 1), 0);
	return [f(5), f(3), f(1)];
}

import readline from "readline";

export function hide(): void {
	process.stdout.write("\x1b" + "[" + "?25l");
}
export function show(): void {
	process.stdout.write("\x1b" + "[" + "?25h");
}
/**
 *
 * @param {number} x
 * @param {number} y
 */
export function to(x: number = 0, y: number = 0): void {
	readline.cursorTo(process.stdout, x, y);
}
/**
 *
 * @param {number} dx
 * @param {number} dy
 */
export function move(dx: number = 0, dy: number = 0): void {
	readline.moveCursor(process.stdout, dx, dy);
}

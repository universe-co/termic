import * as readline from "readline";

type OnKeyPressCB = (key: string) => void;

let key = false;

/**
 * 
 * @param {function} cb 
 */
export function onkeypress(cb: OnKeyPressCB): void {
	if (!key) {
		readline.emitKeypressEvents(process.stdin);
		process.stdin.setRawMode(true);
		key = !key;
	}
	process.stdin.on("keypress", (_: never, key: string) => cb(key));
}
import readline from "readline";
import { format } from "../utils/text_formatter";
import { parse } from "../utils/type_parser";

let rows = 0;

export function args(pattern = "--"): Record<string, any> {
	const result: any = {};
	let last_key = "";
	for (const arg of process.argv) {
		if (arg.startsWith(pattern) && arg !== pattern) {
			result[arg.slice(pattern.length)] = null;
			last_key = arg.slice(pattern.length);
		} else if (last_key) {
			result[last_key] = parse(arg);
			last_key = "";
		}
	}
	return result;
}

/**
 *
 * @param {string} msg
 * @returns
 */
export function input(msg: string): Promise<string> {
	return new Promise(res => {
		const rl_interface = readline.createInterface({
			input: process.stdin,
			output: process.stdout,
		});
		rl_interface.question(msg + " ", (answer: string) => {
			rl_interface.close();
			res(answer);
		});
	});
}
// export function keyboard
/**
 *
 * @param  {...string} msg
 */
export function print(...msgs: string[]): void {
	for (const msg of msgs) {
		const formatedMsg = format(msg).toString().trim().length ? msg + " " : msg;
		rows += formatedMsg.match(/\n/gim)?.length || 0;
		process.stdout.write(formatedMsg);
	}
}
/**
 *
 * @param  {...string} msg
 */
export function println(...msgs: string[]): void {
	const formatedMsg =
		msgs
			.map(i => format(i))
			.join(" ")
			.toString() + "\n";
	rows += formatedMsg.match(/\n/gim)?.length || 0;
	process.stdout.write(formatedMsg);
}
export function printf() {}
/**
 *
 * @param {number|null} rows
 */
export function clear(rows: number | null = null): void {
	if (rows === null) rows = rows;
	readline.cursorTo(process.stdout, 0);
	readline.moveCursor(process.stdout, 0, -rows);
	for (let i = 0; i < rows; i++) print("\r");
	rows = 0;
}

export function close() {
	readline.createInterface({ input: process.stdin, output: process.stdout }).close();
}

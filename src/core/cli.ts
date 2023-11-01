import * as readline from "readline";

let rows = 0;

/**
 * 
 * @param {string} msg 
 * @returns 
 */
export function input(msg: string): Promise<string> {
	return new Promise(res => {
		const rl_interface = readline.createInterface({
			input: process.stdin,
			output: process.stdout
		})
		rl_interface.question(msg + " ", (answer: string) => {
			rl_interface.close();
			res(answer);
		});
	});
}
/**
 * 
 * @param  {...string} msg 
 */
export function print(...msgs: string[]): void {
	for (const msg of msgs) {
		const formatedMsg = msg.toString().trim().length ? msg + " " : msg;
		rows += formatedMsg.match(/\n/igm)?.length || 0;
		process.stdout.write(formatedMsg);
	}
}
/**
 * 
 * @param  {...string} msg 
 */
export function println(...msgs: string[]): void {
	const formatedMsg = msgs.join(" ").toString() + "\n";
	rows += formatedMsg.match(/\n/igm)?.length || 0;
	process.stdout.write(formatedMsg);
}
/**
 * 
 * @param {number|null} rows 
 */
export function clear(rows: number | null = null): void {
	if (rows === null) rows = rows;
	readline.cursorTo(process.stdout, 0);
	readline.moveCursor(process.stdout, 0, -(rows));
	for (let i = 0; i < rows; i++) print("\r");
	rows = 0;
}

export function close() {
	readline.createInterface({ input: process.stdin, output: process.stdout }).close();
}
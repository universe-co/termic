import * as readline from "readline";
import styler from "./styler";

const formatter = (data: any, _: any = null, for_object: boolean | any = false): string => {
	const tab = "  ";

	if (data === null) return styler.color.white.bold("null");
	if (typeof data === "string") {
		if (for_object) return styler.color.hex("#0DBC5A")(`'${data}'`);
		return data;
	}
	if (typeof data === "number") return styler.color.yellow(data.toString());
	if (typeof data === "boolean") return styler.color.yellow(data.toString());
	if (typeof data === "undefined") return styler.color.grey("undefined");
	if (typeof data === "symbol") return styler.color.hex("#0DBC5A")(data.toString());
	if (typeof data === "function" && data.toString().startsWith("class")) return styler.color.hex("#11A8AB")(`[class ${data.name}]`);
	if (typeof data === "function") return styler.color.hex("#11A8AB")(`[Function: ${data.name}]`);
	if (typeof data === "object") {
		const result = [];
		const open = "{ ";
		const close = " }";
		for (const key of Object.keys(data)) {
			result.push(`${key}: ${formatter(data[key], null, true)}`);
		}
		if (result.length === 0) return `${open.trim()}${close.trim()}`;
		if (result.join(", ").length > process.stdout.columns - 4 || result.join(", ").length >= 120) {
			return `${open.trim()}\n${tab}${result.join(",\n" + tab)}\n${close.trim()}`;
		}
		return `${open.trim()} ${result.join(", ")} ${close.trim()}`;
	}
};

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
		});
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
		const formatedMsg = formatter(msg).toString().trim().length ? msg + " " : msg;
		rows += formatedMsg.match(/\n/igm)?.length || 0;
		process.stdout.write(formatedMsg);
	}
}
/**
 * 
 * @param  {...string} msg 
 */
export function println(...msgs: string[]): void {
	const formatedMsg = msgs.map(i => formatter(i)).join(" ").toString() + "\n";
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
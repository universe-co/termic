import * as readline from "readline";

let key = false;

/**
 * 
 * @param {function} cb 
 */
export function onkeypress(cb: Function): void {
    if (!key) {
        readline.emitKeypressEvents(process.stdin);
        process.stdin.setRawMode(true);
        key = !key;
    }
    process.stdin.on("keypress", (_, key) => cb(key));
}
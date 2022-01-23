import * as readline from "readline";

class Keyboard {
    constructor() {
        readline.emitKeypressEvents(process.stdin);
        process.stdin.setRawMode(true);
    }
    /**
     * 
     * @param {function} cb 
     */
    onkeypress(cb: Function): void {
        process.stdin.on("keypress", (_, key) => cb(key));
    }
}

export default new Keyboard();
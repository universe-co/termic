const readline = require('readline');

class Keyboard {
    constructor() {
        readline.emitKeypressEvents(process.stdin);
        process.stdin.setRawMode(true);
    }
    /**
     * 
     * @param {function} cb 
     */
    onkeypress(cb) {
        process.stdin.on("keypress", (_, key) => cb(key));
    }
}

module.exports = new Keyboard();
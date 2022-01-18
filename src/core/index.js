const readline = require('readline');

class CLI {
    #rows = 0;
    constructor() {
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }
    /**
     * 
     * @param {string} msg 
     * @returns 
     */
    input(msg) {
        return new Promise((res, rej) => {
            this.rl.question(msg, res);
        });
    }
    /**
     * 
     * @param  {...string} msg 
     */
    print(...msgs) {
        for (const msg of msgs) {
            const formatedMsg = msg.toString().trim().length ? msg + " " : msg;
            this.#rows += formatedMsg.match(/\n/igm)?.length || 0;
            process.stdout.write(formatedMsg);
        }
    }
    /**
     * 
     * @param  {...string} msg 
     */
     println(...msgs) {
        for (const msg of msgs) {
            const formatedMsg = msg.toString().trim().length ? msg + " \n" : msg + "\n";
            this.#rows += formatedMsg.match(/\n/igm)?.length || 0;
            process.stdout.write(formatedMsg);
        }
    }
    /**
     * 
     * @param {number|null} rows 
     */
    clear(rows = null) {
        if (rows === null) rows = this.#rows;
        readline.cursorTo(process.stdout, 0);
        readline.moveCursor(process.stdout, 0, -(rows));
        for (let i = 0; i < rows; i++) this.print("\r");
        this.#rows = 0;
    }
}

module.exports = new CLI();
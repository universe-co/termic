import * as readline from "readline";

class CLI {
    private rows = 0;
    constructor() { }
    /**
     * 
     * @param {string} msg 
     * @returns 
     */
    input(msg: string): Promise<string> {
        return new Promise((res, rej) => {
            const rl = readline.createInterface({
                input: process.stdin,
                output: process.stdout
            });
            rl.question(msg, res);
        });
    }
    /**
     * 
     * @param  {...string} msg 
     */
    print(...msgs: string[]): void {
        for (const msg of msgs) {
            const formatedMsg = msg.toString().trim().length ? msg + " " : msg;
            this.rows += formatedMsg.match(/\n/igm)?.length || 0;
            process.stdout.write(formatedMsg);
        }
    }
    /**
     * 
     * @param  {...string} msg 
     */
    println(...msgs: string[]): void {
            const formatedMsg = msgs.join(" ").toString() + "\n";
            this.rows += formatedMsg.match(/\n/igm)?.length || 0;
            process.stdout.write(formatedMsg);
    }
    /**
     * 
     * @param {number|null} rows 
     */
    clear(rows: number | null = null) {
        if (rows === null) rows = this.rows;
        readline.cursorTo(process.stdout, 0);
        readline.moveCursor(process.stdout, 0, -(rows));
        for (let i = 0; i < rows; i++) this.print("\r");
        this.rows = 0;
    }
}

export default CLI;
import * as readline from "readline";

class Cursor {
    hide(): void {
        process.stdout.write("\x1b" + "[" + "?25l");
    }
    show(): void {
        process.stdout.write("\x1b" + "[" + "?25h");
    }
    /**
     * 
     * @param {number} x 
     * @param {number} y 
     */
    to(x: number = 0, y: number = 0): void {
        readline.cursorTo(process.stdout, x, y);
    }
    /**
     * 
     * @param {number} dx 
     * @param {number} dy 
     */
    move(dx: number = 0, dy: number = 0): void {
        readline.moveCursor(process.stdout, dx, dy);
    }
}

export default new Cursor();
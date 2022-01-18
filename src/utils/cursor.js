const readline = require('readline');

class Cursor {
    hide() {
        process.stdout.write("\x1b" + "[" + "?25l");
    }
    show() {
        process.stdout.write("\x1b" + "[" + "?25h");
    }
    /**
     * 
     * @param {number} x 
     * @param {number} y 
     */
    to(x = 0, y = 0) {
        readline.cursorTo(process.stdout, x, y);
    }
    /**
     * 
     * @param {number} dx 
     * @param {number} dy 
     */
    move(dx = 0, dy = 0) {
        readline.moveCursor(process.stdout, dx, dy);
    }
}

module.exports = new Cursor();
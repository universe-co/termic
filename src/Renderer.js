const styler = require("./styler");
const cli = require("./core");
const cursor = require("./utils/cursor");
const { frameFromFrames } = require("./utils/fps");

class Renderer {
    #fps = 10;
    #frame = 1;
    constructor() { }
    /**
     * 
     * @param  {Array} data 
     */
    render(data, delay = 5000) {
        return new Promise((res, rej) => {
            cursor.hide();

            const endTime = Date.now() + delay;

            const loop = () => {
                this.#frame++;

                for (const row of data) {
                    for (const col of row) {
                        if (typeof col !== "function" && typeof col !== "object") {
                            cli.print(col);
                        }
                        if (typeof col === "object" && Array.isArray(col.frames)) {
                            cli.print(col.frames[frameFromFrames(this.#frame, col.frames.length) - 1])
                        }
                    }
                    cli.print("\n");
                }

                cli.clear(data.length);

                if (Date.now() >= endTime) {

                    for (const row of data) {
                        for (const col of row) {
                            if (typeof col !== "function" && typeof col !== "object") {
                                cli.print(col);
                            }
                            if (typeof col === "object" && Array.isArray(col.frames)) {
                                cli.print(col.end)
                            }
                        }
                        cli.print("\n");
                    }

                    this.#frame = 1;
                    cursor.show();
                    cli.rl.close();
                    res();
                    return void 0;
                }

                setTimeout(loop, 1000 / this.#fps);
            }
            loop();
        });
    }
    get FPS() {
        return this.#fps;
    }
    set FPS(fps) {
        this.#fps = parseInt(fps);
        return this.#fps;
    }
}

(async () => {
    const renderer = new Renderer();
    renderer.FPS = 24;
    await renderer.render([
        [
            {
                frames: ["-", "\\", "|", "/"],
                end: "✅"
            }, styler.italic.underline("Hello", [255, 120, 100]), "World"
        ],
        [
            {
                frames: ["-", "\\", "|", "/"],
                end: "✅"
            }, "Hello", "Earth"
        ]
    ], 5000);
    await renderer.render([
        [
            {
                frames: ["-", "\\", "|", "/"],
                end: "✅"
            }, "Hello", "Earth"
        ]
    ], 5000);
})();
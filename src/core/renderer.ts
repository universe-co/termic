import * as cli from "../core/cli";
import * as cursor from "../utils/cursor";
import { frameFromFrames } from "../utils/fps";

class Renderer {
    private fps = 10;
    private frame = 1;
    constructor() { }
    render(data: any[], delay = 5000) {
        return new Promise<void>((res, rej) => {
            cursor.hide();

            const endTime = Date.now() + delay;

            const loop: any = (): any => {
                this.frame++;

                for (const row of data) {
                    cli.print("\r");
                    for (const col of row) {
                        if (typeof col !== "function" && typeof col !== "object") {
                            cli.print(col);
                        }
                        if (typeof col === "object" && Array.isArray(col.frames)) {
                            cli.print(col.frames[frameFromFrames(this.frame, col.frames.length) - 1])
                        }
                    }
                    cli.print("\n");
                }

                cli.clear(data.length);

                if (Date.now() >= endTime) {

                    for (const row of data) {
                        cli.print(" ".repeat(100) + "\r"); //! need to refactor
                        for (const col of row) {
                            if (typeof col !== "function" && typeof col !== "object") {
                                cli.print(col);
                            }
                            if (typeof col === "object" && Array.isArray(col.frames)) {
                                cli.print(col?.end || "")
                            }
                        }
                        cli.print("\n");
                    }

                    this.frame = 1;
                    cursor.show();
                    // cli.rl.close();
                    res();
                    return void 0;
                }

                setTimeout(loop, 1000 / this.fps);
            }
            loop();
        });
    }
    get FPS() {
        return this.fps;
    }
    set FPS(fps: number) {
        this.fps = Number(fps);
    }
}

export const renderer = new Renderer();

export default renderer;
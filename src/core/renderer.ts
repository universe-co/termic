import * as cli from "../core/cli";
import * as cursor from "../utils/cursor";
import { frameFromFrames } from "../utils/fps";

class Progress {
    public isEnd: boolean = false;
    public endText = "";
    public frame = 0;
    public per_partition = 0;
    public animantion: any;
    constructor(animantion: any) {
        this.per_partition = 100 / animantion.frames.length;
        this.animantion = animantion;
    }
    end(text: string) {
        this.endText = text;
        this.isEnd = true;
    }
    set(persentage: number) {
        this.frame = Math.floor(persentage / this.per_partition);
    }
    next() {
        return this.animantion.frames[this.frame < this.animantion.frames.length ? this.frame : this.animantion.frames.length - 1];
    }
}

class Renderer {
    private fps = 10;
    private frame = 1;
    constructor() { }
    progress(animation: any) {
        return new Progress(animation);
    }
    render(data: any[], delay = 5000) {
        return new Promise<void>((res, rej) => {
            cursor.hide();

            let endTime = Date.now() + delay;

            const progresses_init: any = data.map(row => row.filter((col: any) => col instanceof Progress)).flat();

            if (progresses_init.length) {
                endTime = Date.now();
            }

            const loop: any = (): any => {
                this.frame++;

                for (const row of data) {
                    cli.print("\r");
                    for (const col of row) {
                        if (typeof col !== "function" && typeof col !== "object") {
                            cli.print(col);
                        }
                        if (col instanceof Progress) {
                            cli.print(col.next());
                        } else if (typeof col === "object" && Array.isArray(col.frames)) {
                            cli.print(col.frames[frameFromFrames(this.frame, col.frames.length) - 1]);
                        }
                    }
                    cli.print("\n");
                }

                cli.clear(data.length);

                const progresses: any = data.map(row => row.filter((col: any) => col instanceof Progress)).flat();
                const ends_count = progresses.filter((progresses: any) => progresses.isEnd);

                if (progresses.length !== ends_count.length) {
                    setTimeout(loop, 1000 / this.fps);
                    return void 0;
                }

                if (Date.now() >= endTime) {

                    for (const row of data) {
                        cli.print(" ".repeat(100) + "\r"); //! need to refactor
                        for (const col of row) {
                            if (typeof col !== "function" && typeof col !== "object") {
                                cli.print(col);
                            }
                            if (col instanceof Progress) {
                                cli.print(col.endText || "Error");
                            } else if (typeof col === "object" && Array.isArray(col.frames)) {
                                cli.print(col?.end || "");
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
            };
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
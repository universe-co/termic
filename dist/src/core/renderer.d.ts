declare class Progress {
    isEnd: boolean;
    endText: string;
    frame: number;
    per_partition: number;
    animantion: any;
    constructor(animantion: any);
    end(text: string): void;
    set(persentage: number): void;
    next(): any;
}
declare class Renderer {
    private fps;
    private frame;
    constructor();
    progress(animation: any): Progress;
    render(data: any[], delay?: number): Promise<void>;
    get FPS(): number;
    set FPS(fps: number);
}
export declare const renderer: Renderer;
export default renderer;

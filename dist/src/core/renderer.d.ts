declare class Renderer {
    private fps;
    private frame;
    constructor();
    render(data: any[], delay?: number): Promise<void>;
    get FPS(): number;
    set FPS(fps: number);
}
export declare const renderer: Renderer;
export default renderer;

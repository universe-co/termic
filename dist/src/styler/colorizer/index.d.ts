declare class CliColorizer {
    private bg;
    private color;
    private value;
    constructor();
    text(rgb: number[]): this;
    background(rgb: number[]): this;
    valueOf(str?: string): string;
    toString(str?: string): string;
}
declare const _default: CliColorizer;
export default _default;

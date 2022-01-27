export interface IStyler {
    (text: string, textcolor: number[], bgcolor: number[]): string | Function;
    effects: Array<string>;
    reset: this;
    bold: this;
    dim: this;
    italic: this;
    underline: this;
    blink: this;
    inverse: this;
    hidden: this;
    crossedout: this;
}
declare const Styler: IStyler;
export default Styler;

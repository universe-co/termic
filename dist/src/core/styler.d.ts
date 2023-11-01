import { RGB } from "../utils/rgb";
export interface IStyler {
    (text: string | Function): string | Function;
    reset: this;
    bold: this;
    dim: this;
    italic: this;
    underline: this;
    blink: this;
    inverse: this;
    hidden: this;
    crossedout: this;
    color: (color: RGB) => this;
    background: (color: RGB) => this;
}
export declare const styler: IStyler;
export default styler;

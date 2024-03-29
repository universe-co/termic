import { Color, Background } from "../../src/colors";
export interface IStyler {
    style: any;
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
    color: Color;
    background: Background;
}
export declare const stylerFactory: (style?: any) => any;
export declare const styler: IStyler;
export default styler;

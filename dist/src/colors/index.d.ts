import { IStyler } from "../core/styler";
import { RGB } from "../utils/rgb";
export declare class Colors {
    get black(): RGB;
    get red(): RGB;
    get green(): RGB;
    get yellow(): RGB;
    get blue(): RGB;
    get magenta(): RGB;
    get cyan(): RGB;
    get white(): RGB;
    get grey(): RGB;
    get orange(): RGB;
}
export declare const colors: Colors;
export declare class ColorFactory {
    private styler;
    private colorize;
    constructor(styler: IStyler, colorize: Function);
    hsl(h: number, s: number, l: number): IStyler;
    hsv(h: number, s: number, v: number): IStyler;
    hex(color: string): IStyler;
    rgb(color: Array<number> | RGB): IStyler;
    get black(): IStyler;
    get red(): IStyler;
    get green(): IStyler;
    get yellow(): IStyler;
    get blue(): IStyler;
    get magenta(): IStyler;
    get cyan(): IStyler;
    get white(): IStyler;
    get grey(): IStyler;
    get orange(): IStyler;
}
export declare class Color extends ColorFactory {
    constructor(styler: IStyler);
}
export declare class Background extends ColorFactory {
    constructor(styler: IStyler);
}

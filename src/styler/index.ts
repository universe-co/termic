import colorizer from "./colorizer";
import { isRGB } from "../utils/rgb";

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

const Styler = <IStyler>function (text = "", textcolor = [], bgcolor = []) {
    const result = Styler.effects;
    Styler.effects = [];

    function format(txt: string) {
        if (isRGB(textcolor)) colorizer.text(textcolor);
        if (isRGB(bgcolor)) colorizer.background(bgcolor);
        if (isRGB(textcolor) || isRGB(bgcolor)) txt = colorizer.toString(txt);

        return "\x1b[" + result.join(";") + "m" + txt + "\x1b[0m";
    }

    return text ? format(text) : format;
}

Styler.effects = [];

Object.defineProperty(Styler, 'reset', {
    get: function () {
        Styler.effects.push("0");
        return Styler;
    }
});

Object.defineProperty(Styler, 'bold', {
    get: function () {
        Styler.effects.push("1");
        return Styler;
    }
});

Object.defineProperty(Styler, 'dim', {
    get: function () {
        Styler.effects.push("2");
        return Styler;
    }
});

Object.defineProperty(Styler, 'italic', {
    get: function () {
        Styler.effects.push("3");
        return Styler;
    }
});

Object.defineProperty(Styler, 'underline', {
    get: function () {
        Styler.effects.push("4");
        return Styler;
    }
});

Object.defineProperty(Styler, 'blink', {
    get: function () {
        Styler.effects.push("5");
        return Styler;
    }
});

Object.defineProperty(Styler, 'inverse', {
    get: function () {
        Styler.effects.push("7");
        return Styler;
    }
});

Object.defineProperty(Styler, 'hidden', {
    get: function () {
        Styler.effects.push("8");
        return Styler;
    }
});

Object.defineProperty(Styler, 'crossedout', {
    get: function () {
        Styler.effects.push("9");
        return Styler;
    }
});

export default Styler;
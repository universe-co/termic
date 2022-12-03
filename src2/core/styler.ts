import Colors from "../../src/colors";
import * as ansi from "../ansi";
/*
// function Styler(...messages: string[]) {
//     const message = messages.join(" ");
//     message.split(/(\1xB\[m\S+\1xB\[m)+/);
// }

// interface IStyler extends Function{
//     template: string;
//     reset: this;
// }

Object.defineProperty(Styler, 'reset', {
    get: function () {
        return { ...Styler, value: ansi.reset("template") };
    }
});

class Styler extends Function {
    value: string;
    constructor() {
        const format = () => {
            console.log(this);
            console.log(this.value);
        };
        super(`(${format.toString()})()`);
        this.value = "TEXT";
    }
    get reset(): this {
        return this.bind({ value: ansi.reset(this.value) });
    }
}

// class Styler extends Function {
//     template: string;
//     constructor() {
//         function format() {
//             console.log(this.value);
//         }
//         super(format.toString());
//         return this.bind(this);
//     }
//     get reset(): this {
//         ansi.reset("template");
//         return this;
//     }
// }

console.log();


*/

export interface IStyler {
    (text: string, textcolor: number[], bgcolor: number[]): string | Function;
    effects: Array<number[]>;
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

class StylerAPI{
    get reset () {
        return new StylerAPI;
    }
}

export function Styler(text) {
    
}

Object.setPrototypeOf(Styler, new StylerAPI);
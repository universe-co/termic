const cli = require("./core");
const colors = require("./colors");
const styler = require("./styler");

class Termic{
    /**
     * @example
     * 
     * cli.println(styler.italic.crossedout("Hello World", null, colors.red));
     * 
     * cli.println(styler.italic.underline("Hello World"));
     * 
     * cli.println(styler.italic.underline.select("Hello World", null, colors.blue));
     * 
     */
    constructor() {}
    cli = cli;
    colors = colors;
    styler = styler;
}

module.exports = new Termic();